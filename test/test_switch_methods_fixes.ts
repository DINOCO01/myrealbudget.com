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

console.log('=== TEST SUITE: Budget Method Switching Section Localization ===\n');

// 1. Simplified Chinese 50/30/20
console.log('--- 1. /zh/50-30-20-budget/ ---');
const zhF30Html = fs.readFileSync('dist/zh/50-30-20-budget/index.html', 'utf8');
assert(zhF30Html.includes('想尝试另一种预算方法？'), 'Heading is translated to "想尝试另一种预算方法？"');
assert(!zhF30Html.includes('Want to try another budgeting method?'), 'No English heading in page');
assert(zhF30Html.includes('data-mrb-t-html="f3020.switch_methods_desc"'), 'Contains data-mrb-t-html="f3020.switch_methods_desc"');
assert(zhF30Html.includes('href="/zh/zero-based-budget/"'), 'Links to /zh/zero-based-budget/');
assert(zhF30Html.includes('href="/zh/budget-planner/"'), 'Links to /zh/budget-planner/');
assert(!zhF30Html.includes('Switch to the'), 'No English fallback "Switch to the"');
assert(!zhF30Html.includes('for flexible categories'), 'No English fallback "for flexible categories"');

// 2. Simplified Chinese Zero-Based Budget
console.log('\n--- 2. /zh/zero-based-budget/ ---');
const zhZbbHtml = fs.readFileSync('dist/zh/zero-based-budget/index.html', 'utf8');
assert(zhZbbHtml.includes('想尝试另一种预算方法？'), 'Heading is translated to "想尝试另一种预算方法？"');
assert(!zhZbbHtml.includes('Want to try another budgeting method?'), 'No English heading in page');
assert(zhZbbHtml.includes('data-mrb-t-html="zbb.switch_methods_desc"'), 'Contains data-mrb-t-html="zbb.switch_methods_desc"');
assert(zhZbbHtml.includes('href="/zh/50-30-20-budget/"'), 'Links to /zh/50-30-20-budget/');
assert(zhZbbHtml.includes('href="/zh/budget-planner/"'), 'Links to /zh/budget-planner/');
assert(!zhZbbHtml.includes('Switch to the'), 'No English fallback "Switch to the"');
assert(!zhZbbHtml.includes('for percentage-based targets'), 'No English fallback "for percentage-based targets"');

// 3. Traditional Chinese 50/30/20
console.log('\n--- 3. /zh-hant/50-30-20-budget/ ---');
const zhHantF30Html = fs.readFileSync('dist/zh-hant/50-30-20-budget/index.html', 'utf8');
assert(zhHantF30Html.includes('想試試其他預算方法嗎？'), 'Heading is translated to "想試試其他預算方法嗎？"');
assert(!zhHantF30Html.includes('Want to try another budgeting method?'), 'No English heading in page');
assert(zhHantF30Html.includes('data-mrb-t-html="f3020.switch_methods_desc"'), 'Contains data-mrb-t-html="f3020.switch_methods_desc"');
assert(zhHantF30Html.includes('href="/zh-hant/zero-based-budget/"'), 'Links to /zh-hant/zero-based-budget/');
assert(zhHantF30Html.includes('href="/zh-hant/budget-planner/"'), 'Links to /zh-hant/budget-planner/');
assert(!zhHantF30Html.includes('Switch to the'), 'No English fallback "Switch to the"');
assert(!zhHantF30Html.includes('for flexible categories'), 'No English fallback "for flexible categories"');

// 4. Traditional Chinese Zero-Based Budget
console.log('\n--- 4. /zh-hant/zero-based-budget/ ---');
const zhHantZbbHtml = fs.readFileSync('dist/zh-hant/zero-based-budget/index.html', 'utf8');
assert(zhHantZbbHtml.includes('想試試其他預算方法嗎？'), 'Heading is translated to "想試試其他預算方法嗎？"');
assert(!zhHantZbbHtml.includes('Want to try another budgeting method?'), 'No English heading in page');
assert(zhHantZbbHtml.includes('data-mrb-t-html="zbb.switch_methods_desc"'), 'Contains data-mrb-t-html="zbb.switch_methods_desc"');
assert(zhHantZbbHtml.includes('href="/zh-hant/50-30-20-budget/"'), 'Links to /zh-hant/50-30-20-budget/');
assert(zhHantZbbHtml.includes('href="/zh-hant/budget-planner/"'), 'Links to /zh-hant/budget-planner/');
assert(!zhHantZbbHtml.includes('Switch to the'), 'No English fallback "Switch to the"');
assert(!zhHantZbbHtml.includes('for percentage-based targets'), 'No English fallback "for percentage-based targets"');

// 5. English Pages Regression
console.log('\n--- 5. English Pages Regression ---');
const enF30Html = fs.readFileSync('dist/50-30-20-budget/index.html', 'utf8');
assert(enF30Html.includes('Want to try another budgeting method?'), 'English 50/30/20 retains English heading');
assert(enF30Html.includes('href="/budget-planner/"'), 'English 50/30/20 retains /budget-planner/ link');
assert(enF30Html.includes('href="/zero-based-budget/"'), 'English 50/30/20 retains /zero-based-budget/ link');

const enZbbHtml = fs.readFileSync('dist/zero-based-budget/index.html', 'utf8');
assert(enZbbHtml.includes('Want to try another budgeting method?'), 'English zero-based retains English heading');
assert(enZbbHtml.includes('href="/budget-planner/"'), 'English zero-based retains /budget-planner/ link');
assert(enZbbHtml.includes('href="/50-30-20-budget/"'), 'English zero-based retains /50-30-20-budget/ link');

console.log('\n========================================');
console.log(`TOTAL: ${passed + failed}  PASSED: ${passed}  FAILED: ${failed}`);
console.log('========================================\n');
if (failed > 0) process.exit(1);

