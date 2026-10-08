import fs from 'fs';
import { t, SUPPORTED_LANGUAGES, TRANSLATIONS } from '../src/utils/i18n.ts';

console.log('=== TEST 1: VERIFY TRANSLATION KEY IN ALL 5 LANGUAGES ===');
const langs = ['en', 'es', 'fr', 'de', 'pt'];
const expected = {
  en: 'Income Frequency',
  es: 'Frecuencia de ingresos',
  fr: 'Fréquence de revenu',
  de: 'Einkommenshäufigkeit',
  pt: 'Frequência da renda',
};

for (const lang of langs) {
  const val = t('aria.income_frequency', lang);
  console.log(`[${lang}] aria.income_frequency = "${val}"`);
  if (val !== expected[lang]) {
    console.error(`✗ Mismatch for ${lang}: expected "${expected[lang]}", got "${val}"`);
    process.exit(1);
  }
  if (lang !== 'en' && val.toLowerCase().includes('income')) {
    console.error(`✗ English fallback detected for ${lang}: "${val}"`);
    process.exit(1);
  }
}
console.log('✓ All 5 language translations match expected strings without English fallbacks.\n');

console.log('=== TEST 2: VERIFY SSR MARKUP IN FiftyThirtyTwentyPlanner.astro ===');
const plannerSrc = fs.readFileSync('src/components/planners/FiftyThirtyTwentyPlanner.astro', 'utf8');

// Check that data-mrb-t-aria is on #f3020-income-frequency
const selectMatch = plannerSrc.match(/<select[^>]*id=["']f3020-income-frequency["'][^>]*>/i);
if (!selectMatch) {
  console.error('✗ Could not find #f3020-income-frequency select tag');
  process.exit(1);
}
console.log('Found select tag:', selectMatch[0]);

if (!selectMatch[0].includes('data-mrb-t-aria="aria.income_frequency"')) {
  console.error('✗ Missing data-mrb-t-aria="aria.income_frequency" on select tag');
  process.exit(1);
}
console.log('✓ data-mrb-t-aria="aria.income_frequency" correctly present on select tag.\n');

console.log('=== TEST 3: VERIFY JS UPDATE IN updateIncomeFrequencySelect ===');
if (!plannerSrc.includes('sel.setAttribute("aria-label", t("aria.income_frequency")')) {
  console.error('✗ Missing aria-label update in updateIncomeFrequencySelect');
  process.exit(1);
}
console.log('✓ updateIncomeFrequencySelect sets aria-label with t("aria.income_frequency").\n');

console.log('=== TEST 4: VERIFY PRODUCTION BUILD IN dist/50-30-20-budget/index.html ===');
const distHtml = fs.readFileSync('dist/50-30-20-budget/index.html', 'utf8');
const distSelectMatch = distHtml.match(/<select[^>]*id=["']f3020-income-frequency["'][^>]*>/i);
if (!distSelectMatch) {
  console.error('✗ Could not find #f3020-income-frequency in dist HTML');
  process.exit(1);
}
console.log('Found dist select tag:', distSelectMatch[0]);
if (!distSelectMatch[0].includes('data-mrb-t-aria="aria.income_frequency"')) {
  console.error('✗ Missing data-mrb-t-aria in dist HTML');
  process.exit(1);
}
console.log('✓ data-mrb-t-aria="aria.income_frequency" verified in production build HTML.\n');

console.log('=== ALL 50/30/20 ACCESSIBILITY LOCALIZATION TESTS PASSED! ===');
