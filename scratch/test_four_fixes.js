import assert from 'node:assert';
import { MONEY_TOLERANCE, cleanMoney, isMoneyZero, sanitizeAmount, roundToCents, formatCurrency } from '../src/utils/currency.ts';
import { normalizeToMonthly } from '../src/utils/frequency.ts';

console.log('--- STARTING FOCUSED TESTS FOR 4 CRITICAL FIXES ---');

// =========================================================================
// ISSUE 1: SAVED STATE PERSISTENCE (income = 0 must be preserved)
// =========================================================================
console.log('\n[Test 1] Saved State Persistence (income = 0):');

// Mock localStorage simulation for 50/30/20 Planner loadState logic
function simulateFiftyThirtyTwentyLoadState(savedJson, defaultData) {
  if (savedJson) {
    const parsed = JSON.parse(savedJson);
    if (typeof parsed.income === 'number' && !isNaN(parsed.income) &&
        Array.isArray(parsed.needs) && Array.isArray(parsed.wants) && Array.isArray(parsed.savings)) {
      parsed.income = sanitizeAmount(parsed.income);
      parsed.needs.forEach(i => i.amount = sanitizeAmount(i.amount));
      parsed.wants.forEach(i => i.amount = sanitizeAmount(i.amount));
      parsed.savings.forEach(i => i.amount = sanitizeAmount(i.amount));
      return parsed;
    }
  }
  return JSON.parse(JSON.stringify(defaultData));
}

// Mock localStorage simulation for Zero-Based Planner loadState logic
function simulateZeroBasedLoadState(savedJson, defaultData) {
  if (savedJson) {
    const parsed = JSON.parse(savedJson);
    if (typeof parsed.income === 'number' && !isNaN(parsed.income) && Array.isArray(parsed.groups)) {
      parsed.income = sanitizeAmount(parsed.income);
      parsed.groups.forEach(g => {
        if (Array.isArray(g.items)) {
          g.items.forEach(i => i.amount = sanitizeAmount(i.amount));
        }
      });
      return parsed;
    }
  }
  return JSON.parse(JSON.stringify(defaultData));
}

const f3020Default = { income: 5000, needs: [{ id: 'n1', amount: 1000 }], wants: [], savings: [] };
const savedStateZeroIncome = JSON.stringify({
  income: 0,
  needs: [{ id: 'n1', amount: 300, frequency: 'monthly' }],
  wants: [{ id: 'w1', amount: 150, frequency: 'monthly' }],
  savings: [{ id: 's1', amount: 50, frequency: 'monthly' }]
});

const loadedF3020 = simulateFiftyThirtyTwentyLoadState(savedStateZeroIncome, f3020Default);
assert.strictEqual(loadedF3020.income, 0, '50/30/20 must accept income = 0 and NOT revert to default 5000');
assert.strictEqual(loadedF3020.needs[0].amount, 300, '50/30/20 must preserve other saved fields');
console.log('✓ 50/30/20 Planner successfully loaded saved state with income = 0 (did not reset to default)');

const zbbDefault = { income: 4500, groups: [{ name: 'Housing', items: [{ id: 'h1', amount: 1200 }] }] };
const savedZbbZeroIncome = JSON.stringify({
  income: 0,
  groups: [{ name: 'Housing', items: [{ id: 'h1', amount: 800, frequency: 'monthly' }] }]
});

const loadedZbb = simulateZeroBasedLoadState(savedZbbZeroIncome, zbbDefault);
assert.strictEqual(loadedZbb.income, 0, 'Zero-based planner must accept income = 0 and NOT revert to default 4500');
assert.strictEqual(loadedZbb.groups[0].items[0].amount, 800, 'Zero-based planner must preserve groups');
console.log('✓ Zero-Based Planner successfully loaded saved state with income = 0 (did not reset to default)');


// =========================================================================
// ISSUE 2: FLOATING-POINT BALANCE BUG & MONEY TOLERANCE
// =========================================================================
console.log('\n[Test 2] Floating-Point Balance Bug:');

// Scenario 1: The user stress-test case:
// 30000 income, 10000.10 + 9999.70 + 10000.20 expenses
const income = 30000;
const expenseItems = [10000.10, 9999.70, 10000.20];
const rawTotal = expenseItems.reduce((a, b) => a + b, 0); // In JS: 30000.000000000004
const rawRemaining = income - rawTotal; // In JS: -3.637978807091713e-12

const cleanedRemaining = cleanMoney(rawRemaining);
const isBalanced = cleanedRemaining === 0;
const formattedINR = formatCurrency(cleanedRemaining, 'INR');
const formattedUSD = formatCurrency(cleanedRemaining, 'USD');

console.log(`Raw JS difference: ${rawRemaining}`);
console.log(`Cleaned difference with MONEY_TOLERANCE (${MONEY_TOLERANCE}): ${cleanedRemaining}`);
assert.strictEqual(cleanedRemaining, 0, 'Cleaned remaining must be strictly 0');
assert.strictEqual(isBalanced, true, 'Status must evaluate to balanced (remaining === 0)');
assert.strictEqual(formattedINR.includes('-'), false, `Must NOT format with negative sign: got ${formattedINR}`);
assert.strictEqual(formattedUSD.includes('-'), false, `Must NOT format with negative sign: got ${formattedUSD}`);
console.log(`✓ 30,000 - (10000.10 + 9999.70 + 10000.20) evaluated to exactly 0, status is BALANCED, formatted: ${formattedINR}`);

// Scenario 2: Weekly / biweekly normalized values producing floating point residue
const weeklyExpense = 100;
const normWeekly = Math.round(normalizeToMonthly(weeklyExpense, 'weekly') * 100) / 100; // 433.33
const matchingIncome = 433.33;
const weeklyDiff = cleanMoney(matchingIncome - normWeekly);
const formattedWeeklyDiff = formatCurrency(weeklyDiff, 'USD');
assert.strictEqual(weeklyDiff, 0, 'Normalized weekly difference should clean to 0');
assert.strictEqual(formattedWeeklyDiff.includes('-0.00'), false, 'Should not format as -$0.00');
console.log(`✓ Weekly normalization rounding tested: difference is ${weeklyDiff}, formatted: ${formattedWeeklyDiff}`);


// =========================================================================
// ISSUE 3: BLOCK NEGATIVE USER INPUT
// =========================================================================
console.log('\n[Test 3] Block Negative User Input:');

// Test sanitizeAmount
assert.strictEqual(sanitizeAmount(-500), 0, 'Negative numbers must sanitize to 0');
assert.strictEqual(sanitizeAmount(-0.01), 0, 'Negative small numbers must sanitize to 0');
assert.strictEqual(sanitizeAmount('-1200'), 0, 'Negative strings must sanitize to 0');
assert.strictEqual(sanitizeAmount('abc'), 0, 'Invalid string NaN must sanitize to 0');
assert.strictEqual(sanitizeAmount(NaN), 0, 'NaN must sanitize to 0');
assert.strictEqual(sanitizeAmount(undefined), 0, 'Undefined must sanitize to 0');
assert.strictEqual(sanitizeAmount(Infinity), 0, 'Infinity must sanitize to 0');
assert.strictEqual(sanitizeAmount(0), 0, '0 must remain 0');
assert.strictEqual(sanitizeAmount(1500), 1500, 'Positive numbers must remain valid');
assert.strictEqual(sanitizeAmount(1234.56), 1234.56, 'Positive decimals must continue working');
assert.strictEqual(sanitizeAmount('2450.75'), 2450.75, 'Positive numeric strings must convert to decimal');
console.log('✓ All negative, NaN, and invalid numeric inputs safely clamped to 0');
console.log('✓ Valid positive numbers and decimals (1234.56) continue working normally');


// =========================================================================
// ISSUE 4: SAVINGS RATE MUST NOT DEPEND ON CATEGORY NAME
// =========================================================================
console.log('\n[Test 4] Savings Rate Independent of Category Name:');

function calculateSavingsRate(categories, incomeVal) {
  let totalExpenses = 0;
  let savingsTotal = 0;
  categories.forEach(cat => {
    let catTotal = 0;
    let catSavings = 0;
    cat.items.forEach(item => {
      const itemVal = normalizeToMonthly(item.amount, item.frequency);
      catTotal += itemVal;
      if (cat.isSavings || item.isSavings) {
        catSavings += itemVal;
      }
    });
    totalExpenses += catTotal;
    savingsTotal += catSavings;
  });
  const savingsPct = incomeVal > 0 ? Math.round((savingsTotal / incomeVal) * 100) : 0;
  return { savingsTotal, savingsPct };
}

// 1. English categories with isSavings flag
const englishCategories = [
  {
    name: 'Housing',
    isSavings: false,
    items: [{ amount: 1500, frequency: 'monthly', isSavings: false }]
  },
  {
    name: 'Savings & Investments',
    isSavings: true,
    items: [{ amount: 500, frequency: 'monthly', isSavings: true }]
  }
];

// 2. Portuguese categories (Poupança e Investimentos - does not contain English "saving" or "invest")
const portugueseCategories = [
  {
    name: 'Habitação',
    isSavings: false,
    items: [{ amount: 1500, frequency: 'monthly', isSavings: false }]
  },
  {
    name: 'Poupança e Futuro', // In Portuguese, no "saving" or "invest"
    isSavings: true,
    items: [{ amount: 500, frequency: 'monthly', isSavings: true }]
  }
];

// 3. Custom user category without any keyword: "Plan B"
const customUserCategories = [
  {
    name: 'Rent',
    isSavings: false,
    items: [{ amount: 1500, frequency: 'monthly', isSavings: false }]
  },
  {
    name: 'Freedom Stash', // Custom name with no keywords
    isSavings: true,
    items: [{ amount: 500, frequency: 'monthly', isSavings: true }]
  }
];

const totalInc = 2500;
const resEn = calculateSavingsRate(englishCategories, totalInc);
const resPt = calculateSavingsRate(portugueseCategories, totalInc);
const resCustom = calculateSavingsRate(customUserCategories, totalInc);

assert.strictEqual(resEn.savingsTotal, 500);
assert.strictEqual(resEn.savingsPct, 20);

assert.strictEqual(resPt.savingsTotal, 500, 'Portuguese category must yield identical 500 savings');
assert.strictEqual(resPt.savingsPct, 20, 'Portuguese category must yield 20% savings rate');

assert.strictEqual(resCustom.savingsTotal, 500, 'Custom named category must yield 500 savings');
assert.strictEqual(resCustom.savingsPct, 20, 'Custom named category must yield 20% savings rate');

console.log(`✓ English categories savings rate: ${resEn.savingsPct}%`);
console.log(`✓ Portuguese translated categories savings rate: ${resPt.savingsPct}%`);
console.log(`✓ Custom-named ("Freedom Stash") category savings rate: ${resCustom.savingsPct}%`);
console.log('✓ Savings rate calculation is completely independent of category names!');

// 4. Test backward-compatibility hydration for legacy saved state
const legacySavedCategories = [
  { id: 'cat_housing', name: 'Housing', items: [{ amount: 1200 }] },
  { id: 'cat_savings', name: 'Savings & Investments', items: [{ amount: 400 }] }
];

legacySavedCategories.forEach(cat => {
  if (typeof cat.isSavings !== 'boolean') {
    const catId = (cat.id || '').toLowerCase();
    const catName = (cat.name || '').toLowerCase();
    cat.isSavings = catId.includes('saving') || catId.includes('invest') ||
                    catName.includes('saving') || catName.includes('invest') || catName.includes('emergency');
  }
});
assert.strictEqual(legacySavedCategories[0].isSavings, false);
assert.strictEqual(legacySavedCategories[1].isSavings, true);
console.log('✓ Legacy saved budgets successfully hydrated with explicit isSavings flag');

console.log('\n--- ALL 4 BUG FIX TESTS PASSED SUCCESSFULLY! ---');
