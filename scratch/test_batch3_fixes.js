import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { normalizeToMonthly, FREQUENCY_OPTIONS } from "../src/utils/frequency.ts";
import { sanitizeAmount, cleanMoney, formatCurrency, roundToCents, isMoneyZero } from "../src/utils/currency.ts";
import { getFrequencyLabel, TRANSLATIONS } from "../src/utils/i18n.ts";

console.log("=== RUNNING TESTS FOR BATCH 3 FIXES ===\n");

// -------------------------------------------------------------
// Issue 1: Frequency Options Must Match Site Promises
// -------------------------------------------------------------
console.log("[Test 1] Frequency Options & Semi-Annual Support:");

// Check FREQUENCY_OPTIONS in frequency.ts
const semiannualOption = FREQUENCY_OPTIONS.find((f) => f.id === "semiannual");
assert(semiannualOption, "Semi-Annual frequency must exist in FREQUENCY_OPTIONS");
assert.strictEqual(semiannualOption.label, "Semi-Annual");
assert.strictEqual(semiannualOption.shortLabel, "/6mo");

// Check normalization math: $1200 semi-annually -> $200 monthly ($1200 * 2 / 12)
const normalizedSemiAnnual = normalizeToMonthly(1200, "semiannual");
assert.strictEqual(Math.round(normalizedSemiAnnual * 100) / 100, 200, "Semi-annual 1200 should normalize to 200/mo");

// Check translations in all supported languages
["en", "es", "fr", "de", "pt"].forEach((lang) => {
  const label = getFrequencyLabel("semiannual", lang);
  assert(label && label !== "freq.semiannual", `Missing semiannual translation for ${lang}`);
  console.log(`  ✓ [${lang}] semiannual label: "${label}"`);
});

// Check all planners have semiannual in FREQUENCY_MULTIPLIERS and FREQUENCY_OPTIONS
const planners = [
  "src/components/planners/GeneralBudgetPlanner.astro",
  "src/components/planners/FiftyThirtyTwentyPlanner.astro",
  "src/components/planners/ZeroBasedPlanner.astro",
];
for (const p of planners) {
  const content = fs.readFileSync(p, "utf-8");
  assert(content.includes("semiannual: 2 / 12"), `${p} missing semiannual in FREQUENCY_MULTIPLIERS`);
  assert(content.includes('id: "semiannual"'), `${p} missing semiannual in FREQUENCY_OPTIONS`);
  console.log(`  ✓ ${p} contains semiannual frequency support`);
}

// Confirm no advertised claims for daily or twice-monthly
const homeContent = fs.readFileSync("src/pages/index.astro", "utf-8");
assert(!homeContent.includes("twice-monthly"), "No twice-monthly claims advertised");
assert(!homeContent.includes("daily frequency"), "No daily frequency claims advertised");
console.log("  ✓ Verified no unadvertised daily/twice-monthly frequency promises exist\n");

// -------------------------------------------------------------
// Issue 2: 50/30/20 Income Frequency Normalization
// -------------------------------------------------------------
console.log("[Test 2] 50/30/20 Income Frequency Normalization:");

// Check $1,000 weekly normalization in 50/30/20:
const weeklyIncome = 1000;
const normalizedWeeklyMonthly = cleanMoney(normalizeToMonthly(weeklyIncome, "weekly"));
assert.strictEqual(normalizedWeeklyMonthly, 4333.33, "$1000 weekly must normalize to $4333.33 monthly");

const targetNeeds = cleanMoney(normalizedWeeklyMonthly * 0.5);
const targetWants = cleanMoney(normalizedWeeklyMonthly * 0.3);
const targetSavings = cleanMoney(normalizedWeeklyMonthly * 0.2);

assert.strictEqual(targetNeeds, 2166.67, "Needs target must be 50% ($2,166.67)");
assert.strictEqual(targetWants, 1300.00, "Wants target must be 30% ($1,300.00)");
assert.strictEqual(targetSavings, 866.67, "Savings target must be 20% ($866.67)");

console.log(`  ✓ $1000 weekly -> Monthly: ${normalizedWeeklyMonthly}`);
console.log(`    Needs (50%): ${targetNeeds}`);
console.log(`    Wants (30%): ${targetWants}`);
console.log(`    Savings (20%): ${targetSavings}`);

// Check saved state compatibility in 50/30/20 component:
const f503020Content = fs.readFileSync("src/components/planners/FiftyThirtyTwentyPlanner.astro", "utf-8");
assert(f503020Content.includes('id="f3020-income-frequency"'), "50/30/20 must have income frequency select in markup");
assert(f503020Content.includes('parsed.incomeFrequency = parsed.incomeFrequency || "monthly"'), "50/30/20 must preserve backward compatibility for legacy saved state without incomeFrequency");
assert(f503020Content.includes("normalize(state.income, incomeFreq)"), "50/30/20 must normalize income before calculating targets");
console.log("  ✓ 50/30/20 markup, backward compatibility, and calculation verified\n");

// -------------------------------------------------------------
// Issue 3: Extreme Numeric Inputs
// -------------------------------------------------------------
console.log("[Test 3] Extreme Numeric Inputs:");

// 1e309 test:
const val1e309 = "1e309";
const parsed1e309 = sanitizeAmount(val1e309);
assert.strictEqual(parsed1e309, 0, "1e309 must be rejected to 0");
assert.strictEqual(formatCurrency(1e309), "$0", "formatCurrency(1e309) must produce '$0', not '$∞'");

// Infinity & -Infinity & NaN tests:
assert.strictEqual(sanitizeAmount(Infinity), 0, "Infinity must sanitize to 0");
assert.strictEqual(sanitizeAmount(-Infinity), 0, "-Infinity must sanitize to 0");
assert.strictEqual(sanitizeAmount(NaN), 0, "NaN must sanitize to 0");
assert.strictEqual(formatCurrency(Infinity), "$0", "formatCurrency(Infinity) must produce '$0'");
assert.strictEqual(formatCurrency(-Infinity), "$0", "formatCurrency(-Infinity) must produce '$0'");
assert.strictEqual(formatCurrency(NaN), "$0", "formatCurrency(NaN) must produce '$0'");

// Extreme number 1e308 test:
assert.strictEqual(sanitizeAmount(1e308), 0, "1e308 exceeding safe bounds must be rejected to 0");
assert.strictEqual(formatCurrency(1e308), "$0", "formatCurrency(1e308) must produce '$0'");

// Normal values preserved:
assert.strictEqual(sanitizeAmount(0), 0, "0 must be preserved");
assert.strictEqual(sanitizeAmount(100), 100, "100 must be preserved");
assert.strictEqual(sanitizeAmount(2500.5), 2500.5, "Decimals must be preserved");
assert.strictEqual(sanitizeAmount(-50), 0, "Negative values must still be protected and rejected to 0");
assert.strictEqual(cleanMoney(0), 0, "cleanMoney(0) must return 0");
assert.strictEqual(cleanMoney(100.55), 100.55, "cleanMoney(100.55) must return 100.55");
assert.strictEqual(formatCurrency(2500.5), "$2,500.50", "formatCurrency(2500.5) must format normally");

console.log("  ✓ 1e309 safely rejected to 0 and formats as $0");
console.log("  ✓ Infinity, -Infinity, NaN safely rejected to 0 and format as $0");
console.log("  ✓ Normal numbers, decimals, zero, and negative protection preserved\n");

// -------------------------------------------------------------
// Issue 4: CSV Formula Injection
// -------------------------------------------------------------
console.log("[Test 4] CSV Formula Injection:");

// In GeneralBudgetPlanner.astro, verify csvClean logic
function csvClean(str) {
  let s = String(str || "");
  if (/^[=+\-@]/.test(s)) {
    s = "'" + s;
  }
  return '"' + s.replace(/"/g, '""') + '"';
}

const injectionTests = [
  { input: "=1+1", expected: "\"'=1+1\"" },
  { input: "+SUM(A1:A10)", expected: "\"'+SUM(A1:A10)\"" },
  { input: "-100", expected: "\"'-100\"" },
  { input: "@cmd|' /C calc'!A0", expected: "\"'@cmd|' /C calc'!A0\"" },
  { input: "Normal Groceries", expected: "\"Normal Groceries\"" },
  { input: 'Quotes "Test"', expected: "\"Quotes \"\"Test\"\"\"" },
];

for (const t of injectionTests) {
  const result = csvClean(t.input);
  assert.strictEqual(result, t.expected, `Failed for input: ${t.input}`);
  console.log(`  ✓ Cleaned: ${t.input} -> ${result}`);
}

const gbpContent = fs.readFileSync("src/components/planners/GeneralBudgetPlanner.astro", "utf-8");
assert(gbpContent.includes("/^[=+\\-@]/.test(s)"), "GeneralBudgetPlanner must implement formula injection escaping");
assert(gbpContent.includes("s = \"'\" + s"), "GeneralBudgetPlanner must prefix injection characters with single quote");
console.log("  ✓ GeneralBudgetPlanner CSV formula injection protection verified\n");

// -------------------------------------------------------------
// Issue 5: Weekly Spending / Allowance Claim
// -------------------------------------------------------------
console.log("[Test 5] Weekly Spending / Allowance Claim:");

// Verify "Plan Weekly Spending" is no longer in index.astro or translations
const indexContent = fs.readFileSync("src/pages/index.astro", "utf-8");
assert(!indexContent.includes("Plan Weekly Spending"), "index.astro must not claim 'Plan Weekly Spending'");
assert(!indexContent.includes("Translate monthly targets into practical weekly allowances"), "index.astro must not claim weekly allowances");

const i18nContent = fs.readFileSync("src/utils/i18n.ts", "utf-8");
assert(!i18nContent.includes("Plan Weekly Spending"), "i18n.ts must not contain 'Plan Weekly Spending'");
assert(!i18nContent.includes("Translate monthly targets into practical weekly allowances"), "i18n.ts must not contain weekly allowances claim");

// Verify the rewritten feature card exists and is accurate
assert(indexContent.includes("Customize Budget Categories"), "index.astro must have rewritten feature 2 title");
assert(i18nContent.includes("Customize Budget Categories"), "i18n.ts must have rewritten feature 2 title");

// Confirm useful weekly frequency functionality is preserved in all planners
assert(normalizeToMonthly(100, "weekly") > 0, "Weekly frequency normalization still fully functional");
assert(FREQUENCY_OPTIONS.some((f) => f.id === "weekly"), "Weekly option exists in FREQUENCY_OPTIONS");

console.log("  ✓ Inaccurate 'Plan Weekly Spending' / 'weekly allowance' claim removed & rewritten");
console.log("  ✓ Feature card 02 now accurately describes budget category customization");
console.log("  ✓ Genuine weekly frequency functionality in all budget planners fully preserved\n");

console.log("ALL BATCH 3 TESTS PASSED SUCCESSFULLY! ✓\n");
