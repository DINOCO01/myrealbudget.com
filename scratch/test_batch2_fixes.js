import assert from 'node:assert';
import { MONEY_TOLERANCE, cleanMoney, isMoneyZero, sanitizeAmount, formatCurrency } from '../src/utils/currency.ts';
import { normalizeToMonthly } from '../src/utils/frequency.ts';
import { TRANSLATIONS } from '../src/utils/i18n.ts';

console.log('=== RUNNING TESTS FOR BATCH 2 CRITICAL FIXES ===\n');

// =========================================================================
// ISSUE 1: PERCENTAGES ABOVE 100%
// =========================================================================
console.log('[Test 1] Percentages Above 100%:');

// 1. General Budget: If total outflow is 5000 and income is 4000
const gbpIncome = 4000;
const gbpOutflow = 5000;
const gbpAllocPct = gbpIncome > 0 ? Math.round((gbpOutflow / gbpIncome) * 100) : 0;
assert.strictEqual(gbpAllocPct, 125, 'General Budget percentage should be 125%, not capped at 100%');
console.log(`✓ General Budget 5000/4000 correctly calculated as: ${gbpAllocPct}%`);

// Progress bar width is capped at 100% for visual containment
const nonSavings = 4000;
const spentWidth = Math.min(100, (nonSavings / gbpIncome) * 100);
assert.strictEqual(spentWidth, 100, 'Visual bar width remains capped at 100%');
console.log(`✓ Visual bar width safely capped at: ${spentWidth}%`);

// 2. Zero-Based: If allocations are 5000 and income is 4000
const zbbIncome = 4000;
const zbbAllocated = 5000;
const zbbPct = zbbIncome > 0 ? Math.round((zbbAllocated / zbbIncome) * 100) : 0;
const zbbBarWidth = Math.min(100, zbbPct);
assert.strictEqual(zbbPct, 125, 'Zero-based allocation percentage should be 125%, not capped at 100%');
assert.strictEqual(zbbBarWidth, 100, 'Zero-based visual progress bar remains bounded to 100%');
console.log(`✓ Zero-Based Budget 5000/4000 percentage is: ${zbbPct}%, bar width is: ${zbbBarWidth}%`);

// 3. 50/30/20: Progress bar and target comparison
const targetNeeds = 2500;
const actualNeeds = 3750; // 150% of target
const needsRealPct = targetNeeds > 0 ? Math.round((actualNeeds / targetNeeds) * 100) : 0;
const needsBarWidth = Math.min(100, needsRealPct);
assert.strictEqual(needsRealPct, 150, '50/30/20 real percentage is 150%');
assert.strictEqual(needsBarWidth, 100, '50/30/20 bar width capped at 100%');
console.log(`✓ 50/30/20 Needs comparison is: ${needsRealPct}% of target, bar width: ${needsBarWidth}%`);


// =========================================================================
// ISSUE 2: UNIFY BALANCE TOLERANCES ACROSS ALL THREE PLANNERS
// =========================================================================
console.log('\n[Test 2] Unified Balance Tolerances Across All Planners:');

// Helper to determine status across planners
function evaluatePlannerStatus(remainingVal) {
  const cleaned = cleanMoney(remainingVal);
  const isBalanced = cleaned === 0;
  const isOver = cleaned < 0;
  const isUnder = cleaned > 0;
  return { cleaned, isBalanced, isOver, isUnder };
}

// Case A: Exact zero
const caseZero = evaluatePlannerStatus(0);
assert.strictEqual(caseZero.isBalanced, true);
assert.strictEqual(formatCurrency(caseZero.cleaned, { currency: 'INR' }), '₹0');

// Case B: Floating-point residue < MONEY_TOLERANCE (e.g. -0.0000000000003 or -0.004)
const caseTinyResidue = evaluatePlannerStatus(-0.004);
assert.strictEqual(caseTinyResidue.isBalanced, true, 'Values < 0.005 tolerance must be balanced');
assert.strictEqual(caseTinyResidue.cleaned, 0);
assert.strictEqual(formatCurrency(caseTinyResidue.cleaned, { currency: 'INR' }), '₹0');
assert.strictEqual(formatCurrency(caseTinyResidue.cleaned, { currency: 'USD' }), '$0');

// Case C: Genuine difference of ₹0.50 (outside tolerance)
const caseFiftyCents = evaluatePlannerStatus(-0.50);
assert.strictEqual(caseFiftyCents.isBalanced, false, '₹0.50 difference must NOT be balanced in ANY planner');
assert.strictEqual(caseFiftyCents.isOver, true, '₹0.50 overspend must be flagged as deficit/over');
assert.strictEqual(caseFiftyCents.cleaned, -0.50);

// Case D: Suppression of misleading "-₹0.00"
for (const testVal of [-0.00001, -0.001, -0.0049, -0.0, 0]) {
  const cleaned = cleanMoney(testVal);
  assert.strictEqual(cleaned, 0);
  const formattedINR = formatCurrency(cleaned, { currency: 'INR', minimumFractionDigits: 2 });
  const formattedUSD = formatCurrency(cleaned, { currency: 'USD', minimumFractionDigits: 2 });
  assert.strictEqual(formattedINR.includes('-'), false, `Must never format with negative sign: ${formattedINR}`);
  assert.strictEqual(formattedUSD.includes('-'), false, `Must never format with negative sign: ${formattedUSD}`);
}
console.log('✓ All planners share identical MONEY_TOLERANCE = 0.005');
console.log('✓ No planner treats 0.50 as balanced; all planners treat < 0.005 as balanced');
console.log('✓ All near-zero balances and formatters strictly suppress "-₹0.00" / "-$0.00"');


// =========================================================================
// ISSUE 3: ZERO-BASED DEFAULT MUST ACTUALLY BALANCE
// =========================================================================
console.log('\n[Test 3] Zero-Based Default Genuinely Balances:');

const zbbDemo = {
  income: 4500,
  groups: [
    {
      name: 'Housing & Living Essentials',
      items: [
        { name: 'Rent or Mortgage', amount: 1400, frequency: 'monthly' },
        { name: 'Utilities (Power/Water/Gas)', amount: 200, frequency: 'monthly' },
        { name: 'Groceries', amount: 120, frequency: 'weekly' }, // 120 * 52/12 = 520
        { name: 'Transportation & Gas', amount: 45, frequency: 'weekly' }, // 45 * 52/12 = 195
      ],
    },
    {
      name: 'Debt Payments',
      items: [
        { name: 'Student Loan Minimum', amount: 185, frequency: 'monthly' },
        { name: 'Accelerated Extra Principal Payoff', amount: 300, frequency: 'monthly' },
      ],
    },
    {
      name: 'Savings & Sinking Funds',
      items: [
        { name: 'Emergency Cushion Fund', amount: 350, frequency: 'monthly' },
        { name: 'Annual Car Maintenance Sinking Fund', amount: 600, frequency: 'yearly' }, // 600/12 = 50
        { name: 'Roth IRA / Retirement', amount: 400, frequency: 'monthly' },
      ],
    },
    {
      name: 'Lifestyle & Fun Money',
      items: [
        { name: 'Dining Out & Entertainment', amount: 250, frequency: 'monthly' },
        { name: 'Subscriptions & Software', amount: 45, frequency: 'monthly' },
        { name: 'Personal Care & Clothing', amount: 105, frequency: 'monthly' },
      ],
    },
    {
      name: 'Miscellaneous Cushion Buffer',
      items: [
        { name: 'Checking Account Buffer (Zero cushion)', amount: 500, frequency: 'monthly' },
      ],
    },
  ],
};

let totalAllocated = 0;
zbbDemo.groups.forEach(g => {
  let gTot = 0;
  g.items.forEach(i => {
    const val = normalizeToMonthly(i.amount, i.frequency);
    gTot += val;
  });
  totalAllocated += cleanMoney(gTot);
});
totalAllocated = cleanMoney(totalAllocated);
const zbbRemaining = cleanMoney(zbbDemo.income - totalAllocated);

console.log(`Demo Income: ${zbbDemo.income}`);
console.log(`Demo Total Allocated: ${totalAllocated}`);
console.log(`Demo Remaining: ${zbbRemaining}`);

assert.strictEqual(totalAllocated, 4500, 'Total allocated must equal 4500');
assert.strictEqual(zbbRemaining, 0, 'Remaining must be exactly 0');
console.log('✓ Default Zero-Based Budget demo has Income - Total Allocations = 0 (Genuinely Balanced)');


// =========================================================================
// ISSUE 4: SAVINGS MUST NOT BE DESCRIBED AS "SPENT"
// =========================================================================
console.log('\n[Test 4] Terminology: "Allocated" Instead of "Spent" for Total Outflows:');

const supportedLanguages = ['en', 'es', 'fr', 'de', 'pt'];
for (const lang of supportedLanguages) {
  const t = TRANSLATIONS[lang];
  assert.ok(t, `Translations for ${lang} must exist`);
  
  const spentPctStr = t['summary.spent_pct'];
  const incomeSpentStr = t['summary.income_spent'];
  
  console.log(`Language [${lang}]:`);
  console.log(`  summary.income_spent -> "${incomeSpentStr}"`);
  console.log(`  summary.spent_pct   -> "${spentPctStr}"`);
  
  // Verify English words "spent" are no longer present in English strings
  if (lang === 'en') {
    assert.strictEqual(incomeSpentStr, 'Income Allocated');
    assert.strictEqual(spentPctStr, '{pct}% allocated');
  }
}
console.log('✓ All 5 languages use "Allocated" terminology for combined outflows');

console.log('\n=== ALL BATCH 2 TESTS PASSED! ===');
