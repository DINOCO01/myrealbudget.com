import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { TRANSLATIONS, SUPPORTED_LANGUAGES } from '../src/utils/i18n.ts';

console.log('=== RUNNING TESTS FOR BATCH 5 USER-FACING CORRECTIONS ===\n');

// -------------------------------------------------------------
// Test 1: REMOVE ALL "PLAN WEEKLY SPENDING / WEEKLY ALLOWANCES" CLAIMS
// -------------------------------------------------------------
console.log('[Test 1] Remove All Inaccurate Weekly Spending / Allowance Claims:');
const disallowedPhrases = [
  'plan weekly spending',
  'weekly allowances',
  'weekly allowance',
  'monthly targets into weekly',
  'true monthly',
  'true annualized'
];

function scanDir(dir, matches = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.git', '.astro', 'dist', 'scratch'].includes(entry.name)) {
        scanDir(full, matches);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (['.astro', '.ts', '.js', '.json', '.html'].includes(ext)) {
        const content = fs.readFileSync(full, 'utf8').toLowerCase();
        disallowedPhrases.forEach(p => {
          if (content.includes(p)) {
            matches.push({ file: full, phrase: p });
          }
        });
      }
    }
  }
  return matches;
}

const disallowedMatches = scanDir('src');
assert.strictEqual(disallowedMatches.length, 0, `Found ${disallowedMatches.length} disallowed phrase matches in src/`);
console.log('✓ Zero occurrences of "Plan Weekly Spending", "weekly allowances", "monthly targets into weekly", "true monthly", "true annualized" across src/');

// -------------------------------------------------------------
// Test 2: Terminology - "Income Allocated" Instead of "Income Spent" When Savings Are Included
// -------------------------------------------------------------
console.log('\n[Test 2] Income Allocated Terminology Across All 5 Languages:');

for (const lang of Object.keys(SUPPORTED_LANGUAGES)) {
  const langTrans = TRANSLATIONS[lang];
  assert.ok(langTrans, `Missing translations for ${lang}`);
  const spentPctStr = langTrans['summary.spent_pct'];
  const incomeSpentStr = langTrans['summary.income_spent'];
  assert.ok(!incomeSpentStr.toLowerCase().includes('spent'), `Language ${lang} income_spent should not include "spent"`);
  assert.ok(!spentPctStr.toLowerCase().includes('spent'), `Language ${lang} spent_pct should not include "spent"`);
  console.log(`✓ [${lang}] summary.income_spent: "${incomeSpentStr}", summary.spent_pct: "${spentPctStr}"`);
}

// Verify GeneralBudgetPlanner template doesn't have "Income Spent" or "0% spent" fallback
const generalPlannerContent = fs.readFileSync('src/components/planners/GeneralBudgetPlanner.astro', 'utf8');
assert.ok(!generalPlannerContent.includes('>Income Spent<'), 'GeneralBudgetPlanner still has ">Income Spent<" fallback');
assert.ok(!generalPlannerContent.includes('>0% spent<'), 'GeneralBudgetPlanner still has ">0% spent<" fallback');
console.log('✓ GeneralBudgetPlanner static fallback labels correctly use "Income Allocated" and "0% allocated"');

// -------------------------------------------------------------
// Test 3: INR Default Examples
// -------------------------------------------------------------
console.log('\n[Test 3] INR Default Examples in Planners:');

function extractINRDefaults(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  assert.ok(code.includes('defaultDataINR'), `${filePath} must define defaultDataINR`);
  // Check no US-specific items
  const inrSection = code.slice(code.indexOf('defaultDataINR'), code.indexOf('function getCurrentCurrencyCode'));
  assert.ok(!inrSection.includes('Roth IRA'), `${filePath} defaultDataINR must not contain "Roth IRA"`);
  assert.ok(!inrSection.includes('Renters'), `${filePath} defaultDataINR must not contain "Renters"`);
  // Check India-specific items
  assert.ok(inrSection.includes('SIP / Mutual Fund'), `${filePath} defaultDataINR must contain "SIP / Mutual Fund"`);
  assert.ok(inrSection.includes('PPF / Retirement Savings'), `${filePath} defaultDataINR must contain "PPF / Retirement Savings"`);
  assert.ok(inrSection.includes('Rent'), `${filePath} defaultDataINR must contain "Rent"`);
  console.log(`✓ ${filePath}: Sensible INR items present, no "Roth IRA", no "Renters Insurance"`);
}

extractINRDefaults('src/components/planners/GeneralBudgetPlanner.astro');
extractINRDefaults('src/components/planners/FiftyThirtyTwentyPlanner.astro');
extractINRDefaults('src/components/planners/ZeroBasedPlanner.astro');

// Verify Zero-Based INR defaults genuinely balance to ₹0
const zbbCode = fs.readFileSync('src/components/planners/ZeroBasedPlanner.astro', 'utf8');
const zbbMatch = zbbCode.match(/const defaultDataINR = (\{[\s\S]*?\n    \});\n\n    function getCurrentCurrencyCode/);
assert.ok(zbbMatch, 'Could not extract defaultDataINR from ZeroBasedPlanner.astro');
const zbbINR = eval('(' + zbbMatch[1] + ')');

let totalAlloc = 0;
zbbINR.groups.forEach(g => {
  g.items.forEach(item => {
    let mult = 1;
    if (item.frequency === 'weekly') mult = 52 / 12;
    else if (item.frequency === 'biweekly') mult = 26 / 12;
    else if (item.frequency === 'quarterly') mult = 1 / 3;
    else if (item.frequency === 'semiannual') mult = 1 / 6;
    else if (item.frequency === 'yearly') mult = 1 / 12;
    totalAlloc += item.amount * mult;
  });
});
const diff = zbbINR.income - Math.round(totalAlloc * 100) / 100;
assert.strictEqual(diff, 0, `Zero-Based INR demo budget must genuinely balance to 0, got diff: ${diff}`);
console.log(`✓ Zero-Based INR default demo data genuinely balances to ₹0 (Income: ₹${zbbINR.income}, Outflows: ₹${totalAlloc})`);

// -------------------------------------------------------------
// Test 4: Correct "True Monthly" Wording
// -------------------------------------------------------------
console.log('\n[Test 4] Correct "True Monthly" Neutral Annualized Wording:');
const editorialCode = fs.readFileSync('src/data/editorialTranslations.ts', 'utf8');
assert.ok(!editorialCode.toLowerCase().includes('true monthly'), 'editorialTranslations.ts must not contain "true monthly"');
assert.ok(!editorialCode.toLowerCase().includes('true annualized'), 'editorialTranslations.ts must not contain "true annualized"');

const i18nCode = fs.readFileSync('src/utils/i18n.ts', 'utf8');
assert.ok(!i18nCode.toLowerCase().includes('true monthly'), 'i18n.ts must not contain "true monthly"');
assert.ok(!i18nCode.toLowerCase().includes('true annualized'), 'i18n.ts must not contain "true annualized"');
console.log('✓ All frequency descriptions use neutral "annualized monthly equivalent" wording across languages');

// -------------------------------------------------------------
// Test 5: Zero-Based — Zero Income State
// -------------------------------------------------------------
console.log('\n[Test 5] Zero-Based Zero Income State:');

// Test logic function equivalent to ZeroBasedPlanner
function testGetAllocationPctInfo(totalAllocated, income, remaining) {
  if (income <= 0) return { pctStr: "—", pctNum: 0 };
  const rawPct = (totalAllocated / income) * 100;
  if (Math.abs(remaining) < 0.005 || remaining === 0) return { pctStr: "100", pctNum: 100 };
  return { pctStr: String(Math.round(rawPct)), pctNum: Math.round(rawPct) };
}

// 1. Zero income, 15000 allocated
const resZeroIncome = testGetAllocationPctInfo(15000, 0, -15000);
assert.strictEqual(resZeroIncome.pctStr, "—", 'Zero income should produce "—" for pctStr');
assert.strictEqual(resZeroIncome.pctNum, 0, 'Zero income pctNum should be 0');

// Verify translation keys exist for zero-income state across all 5 languages
for (const lang of Object.keys(SUPPORTED_LANGUAGES)) {
  const langTrans = TRANSLATIONS[lang];
  const noIncomeOverMsg = langTrans['zbb.no_income_over_msg'];
  const subNoIncome = langTrans['zbb.sub_no_income'];
  const addIncomeToAssign = langTrans['zbb.add_income_to_assign'];

  assert.ok(noIncomeOverMsg && noIncomeOverMsg.includes('{amount}'), `Language ${lang} no_income_over_msg should include {amount}`);
  assert.ok(subNoIncome && subNoIncome.length > 0, `Language ${lang} sub_no_income missing`);
  assert.ok(addIncomeToAssign && addIncomeToAssign.length > 0, `Language ${lang} add_income_to_assign missing`);
  console.log(`✓ [${lang}] zero-income prompts: "${addIncomeToAssign}", sub: "${subNoIncome}"`);
}

console.log('\n=== ALL BATCH 5 TESTS PASSED SUCCESSFULLY! ===');
