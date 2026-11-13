import fs from 'node:fs';

let passed = 0;
let failed = 0;

function assert(cond: boolean, msg: string) {
  if (cond) {
    console.log('  ✓ PASS:', msg);
    passed++;
  } else {
    console.error('  ✗ FAIL:', msg);
    failed++;
  }
}

// TEST A: zh-hant templates planner links
console.log('\n=== TEST A: /zh-hant/templates/ planner links ===');
const tplHtml = fs.readFileSync('dist/zh-hant/templates/index.html', 'utf8');
assert(!tplHtml.includes('href="/zh/budget-planner/"'), 'No /zh/budget-planner/ link');
assert(!tplHtml.includes('href="/zh/50-30-20-budget/"'), 'No /zh/50-30-20-budget/ link');
assert(!tplHtml.includes('href="/zh/zero-based-budget/"'), 'No /zh/zero-based-budget/ link');
assert(tplHtml.includes('href="/zh-hant/budget-planner/"'), 'Has /zh-hant/budget-planner/ link');
assert(tplHtml.includes('href="/zh-hant/50-30-20-budget/"'), 'Has /zh-hant/50-30-20-budget/ link');
assert(tplHtml.includes('href="/zh-hant/zero-based-budget/"'), 'Has /zh-hant/zero-based-budget/ link');

// TEST B: zh budget-planner switch_methods_desc (inline script injection)
console.log('\n=== TEST B: /zh/budget-planner/ switch_methods_desc ===');
const zhBpHtml = fs.readFileSync('dist/zh/budget-planner/index.html', 'utf8');
assert(zhBpHtml.includes('切换至'), 'Contains Simplified Chinese text: 切换至');
assert(zhBpHtml.includes('/zh/50-30-20-budget/'), 'Contains /zh/50-30-20-budget/ link');
assert(zhBpHtml.includes('/zh/zero-based-budget/'), 'Contains /zh/zero-based-budget/ link');
// English fallback text should still be in the static element (replaced by script), but script content is key
assert(zhBpHtml.includes('gbp.switch_methods_desc'), 'Has data-mrb-t-html attribute');
assert(!zhBpHtml.includes('Switch to the'), 'English text "Switch to the" absent (no unescaped fallback outside script)' );

// TEST C: zh-hant budget-planner switch_methods_desc (inline script injection)
console.log('\n=== TEST C: /zh-hant/budget-planner/ switch_methods_desc ===');
const zhHantBpHtml = fs.readFileSync('dist/zh-hant/budget-planner/index.html', 'utf8');
assert(zhHantBpHtml.includes('切換至'), 'Contains Traditional Chinese text: 切換至');
assert(zhHantBpHtml.includes('/zh-hant/50-30-20-budget/'), 'Contains /zh-hant/50-30-20-budget/ link (in script)');
assert(zhHantBpHtml.includes('/zh-hant/zero-based-budget/'), 'Contains /zh-hant/zero-based-budget/ link (in script)');

// TEST D: /budget-planner-template/ hreflang
console.log('\n=== TEST D: /budget-planner-template/ hreflang ===');
const bptHtml = fs.readFileSync('dist/budget-planner-template/index.html', 'utf8');
assert(!bptHtml.includes('hreflang="zh-Hans"'), 'zh-Hans hreflang absent');
assert(!bptHtml.includes('hreflang="zh-Hant"'), 'zh-Hant hreflang absent');
assert(bptHtml.includes('hreflang="en"'), 'en hreflang present');
assert(bptHtml.includes('hreflang="x-default"'), 'x-default hreflang present');
assert(bptHtml.includes('https://myrealbudget.com/budget-planner-template/'), 'Canonical URL preserved');

// TEST E: Character correction
console.log('\n=== TEST E: /zh-hant/zero-based-budget/ character correction ===');
const zbbHtml = fs.readFileSync('dist/zh-hant/zero-based-budget/index.html', 'utf8');
assert(zbbHtml.includes('銀行卡裡'), 'Correct character 裡 present');
assert(!zbbHtml.includes('銀行卡里'), 'Incorrect character 里 absent');

// REGRESSION: Other hreflang pairs unaffected
console.log('\n=== REGRESSION: Other pages hreflang unaffected ===');
const btHtml = fs.readFileSync('dist/budget-templates/index.html', 'utf8');
assert(btHtml.includes('hreflang="zh-Hans"'), 'budget-templates zh-Hans hreflang still present');
assert(btHtml.includes('hreflang="zh-Hant"'), 'budget-templates zh-Hant hreflang still present');
const zhTplHtml = fs.readFileSync('dist/zh/templates/index.html', 'utf8');
assert(!zhTplHtml.includes('href="/zh-hant/'), 'zh/templates has no /zh-hant/ planner links (unmodified)');

console.log('\n========================================');
console.log(`TOTAL: ${passed + failed}  PASSED: ${passed}  FAILED: ${failed}`);
console.log('========================================\n');
if (failed > 0) process.exit(1);

