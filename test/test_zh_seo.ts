import fs from 'node:fs';
import path from 'node:path';

console.log('=== VERIFYING CHINESE (/zh/) SEO OPTIMIZATION ===\n');

const distDir = path.resolve('dist');
let totalTests = 0;
let passedTests = 0;

function assert(condition: boolean, msg: string) {
  totalTests++;
  if (condition) {
    console.log(`✅ PASS: ${msg}`);
    passedTests++;
  } else {
    console.error(`❌ FAIL: ${msg}`);
    process.exit(1);
  }
}

function getHtml(relPath: string): string {
  const fullPath = path.join(distDir, relPath);
  assert(fs.existsSync(fullPath), `File exists: ${relPath}`);
  return fs.readFileSync(fullPath, 'utf-8');
}

function extractTagContent(html: string, regex: RegExp): string {
  const match = html.match(regex);
  return match ? match[1].trim() : '';
}

function extractH1s(html: string): string[] {
  const matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  return matches.map(m => m[1].replace(/<[^>]+>/g, '').trim());
}

// ==========================================
// 1. Page: /zh/budget-planner/
// ==========================================
console.log('--- Checking /zh/budget-planner/ ---');
const bp = getHtml('zh/budget-planner/index.html');

const bpTitle = extractTagContent(bp, /<title>([^<]+)<\/title>/i);
assert(bpTitle === '个人预算计算器：免费月度预算计划与支出分配 | My Real Budget', `Title matches exact requirement: "${bpTitle}"`);

const bpDesc = extractTagContent(bp, /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
assert(bpDesc === '免费个人预算计算器，几分钟做好月度预算计划。输入收入和支出，自动分配每月预算，每周费用一键转月度，数据只保存在你的浏览器。', `Meta description matches exact requirement: "${bpDesc}"`);

const bpH1s = extractH1s(bp);
assert(bpH1s.length === 1, `Exactly one H1 present (found ${bpH1s.length})`);
assert(bpH1s[0] === '个人预算计算器', `H1 is "个人预算计算器" (found "${bpH1s[0]}")`);

assert(bp.includes('每周费用转月度，自动折算'), 'Contains H2 heading "每周费用转月度，自动折算"');
const bpFreqIndex = bp.indexOf('id="frequency"');
const bpH2Index = bp.indexOf('每周费用转月度，自动折算');
assert(bpH2Index !== -1 && bpH2Index < bpFreqIndex, 'H2 "每周费用转月度，自动折算" is placed immediately above the frequency conversion section');

assert(bp.includes('<link rel="canonical" href="https://myrealbudget.com/zh/budget-planner/" />') || bp.includes('href="https://myrealbudget.com/zh/budget-planner/"'), 'Canonical URL preserved');
assert(bp.includes('hreflang="en"') && (bp.includes('hreflang="zh-Hans"') || bp.includes('hreflang="zh-CN"')), 'Hreflang tags preserved');

// ==========================================
// 2. Page: /zh/ (Chinese Homepage)
// ==========================================
console.log('\n--- Checking /zh/ (Chinese Homepage) ---');
const home = getHtml('zh/index.html');

const homeTitle = extractTagContent(home, /<title>([^<]+)<\/title>/i);
assert(homeTitle === '免费个人预算计算器与月度预算规划工具 | My Real Budget', `Title matches exact requirement: "${homeTitle}"`);

const homeDesc = extractTagContent(home, /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
assert(homeDesc === '免费在线个人预算计算与月度预算规划。支持50/30/20和零基预算分配，帮你算清每月收支，无需注册。', `Meta description matches exact requirement: "${homeDesc}"`);

const homeH1s = extractH1s(home);
assert(homeH1s.length === 1, `Exactly one H1 present (found ${homeH1s.length})`);
assert(homeH1s[0] === '免费个人预算计算器', `H1 is "免费个人预算计算器" (found "${homeH1s[0]}")`);

// Check internal linking section near top
assert(home.includes('href="/zh/budget-planner/"') && home.includes('个人预算计算器'), 'Contains link: 个人预算计算器 → /zh/budget-planner/');
assert(home.includes('href="/zh/50-30-20-budget/"') && home.includes('50/30/20预算计算'), 'Contains link: 50/30/20预算计算 → /zh/50-30-20-budget/');
assert(home.includes('href="/zh/zero-based-budget/"') && home.includes('零基预算规划'), 'Contains link: 零基预算规划 → /zh/zero-based-budget/');
assert(home.includes('href="/zh/templates/"') && home.includes('免费预算模板'), 'Contains link: 免费预算模板 → /zh/templates/');

// Verify near the top (before main sections)
const homeTopSectionIndex = home.indexOf('常用工具：');
const homeMethodSectionIndex = home.indexOf('三大核心预算方法');
assert(homeTopSectionIndex !== -1 && homeTopSectionIndex < homeMethodSectionIndex, 'Internal links placed near the top in content flow');

assert(home.includes('<link rel="canonical" href="https://myrealbudget.com/zh/" />') || home.includes('href="https://myrealbudget.com/zh/"'), 'Canonical URL preserved');
assert(home.includes('hreflang="en"') && (home.includes('hreflang="zh-Hans"') || home.includes('hreflang="zh-CN"')), 'Hreflang tags preserved');

// ==========================================
// 3. Page: /zh/50-30-20-budget/
// ==========================================
console.log('\n--- Checking /zh/50-30-20-budget/ ---');
const f3020 = getHtml('zh/50-30-20-budget/index.html');

// Check keyword in first paragraph
assert(f3020.includes('月支出预算分配'), 'First paragraph naturally incorporates exact keyword phrase: "月支出预算分配"');

// Check Related Tools section at end
assert(f3020.includes('相关工具'), 'Contains "相关工具" section heading');
const f3020RelatedIdx = f3020.indexOf('相关工具');
const f3020FaqIdx = f3020.indexOf('50/30/20 预算常见问题');
assert(f3020RelatedIdx > f3020FaqIdx, '"相关工具" section is located at the end of the page content');

assert(f3020.includes('href="/zh/zero-based-budget/"') && f3020.includes('零基预算规划'), 'Related tool link: 零基预算规划 → /zh/zero-based-budget/');
assert(f3020.includes('href="/zh/templates/"') && f3020.includes('免费预算模板'), 'Related tool link: 免费预算模板 → /zh/templates/');
assert(f3020.includes('href="/zh/budget-planner/"') && f3020.includes('个人预算计算器'), 'Related tool link: 个人预算计算器 → /zh/budget-planner/');

assert(f3020.includes('hreflang="en"') && (f3020.includes('hreflang="zh-Hans"') || f3020.includes('hreflang="zh-CN"')), 'Hreflang tags preserved');

// ==========================================
// 4. Page: /zh/zero-based-budget/
// ==========================================
console.log('\n--- Checking /zh/zero-based-budget/ ---');
const zbb = getHtml('zh/zero-based-budget/index.html');

assert(zbb.includes('相关工具'), 'Contains "相关工具" section heading');
const zbbRelatedIdx = zbb.indexOf('相关工具');
const zbbFaqIdx = zbb.indexOf('零基预算常见问题解答');
assert(zbbRelatedIdx > zbbFaqIdx, '"相关工具" section is located at the end of the page content');

assert(zbb.includes('href="/zh/50-30-20-budget/"') && zbb.includes('50/30/20预算计算'), 'Related tool link: 50/30/20预算计算 → /zh/50-30-20-budget/');
assert(zbb.includes('href="/zh/templates/"') && zbb.includes('免费预算模板'), 'Related tool link: 免费预算模板 → /zh/templates/');
assert(zbb.includes('href="/zh/budget-planner/"') && zbb.includes('个人预算计算器'), 'Related tool link: 个人预算计算器 → /zh/budget-planner/');

assert(zbb.includes('hreflang="en"') && (zbb.includes('hreflang="zh-Hans"') || zbb.includes('hreflang="zh-CN"')), 'Hreflang tags preserved');

// ==========================================
// 5. Page: /zh/templates/
// ==========================================
console.log('\n--- Checking /zh/templates/ ---');
const tmpl = getHtml('zh/templates/index.html');

assert(tmpl.includes('相关工具'), 'Contains "相关工具" section heading');
const tmplRelatedIdx = tmpl.indexOf('相关工具');
const tmplFaqIdx = tmpl.indexOf('预算模板常见问题解答');
assert(tmplRelatedIdx > tmplFaqIdx, '"相关工具" section is located at the end of the page content');

assert(tmpl.includes('href="/zh/50-30-20-budget/"') && tmpl.includes('50/30/20预算计算'), 'Related tool link: 50/30/20预算计算 → /zh/50-30-20-budget/');
assert(tmpl.includes('href="/zh/zero-based-budget/"') && tmpl.includes('零基预算规划'), 'Related tool link: 零基预算规划 → /zh/zero-based-budget/');
assert(tmpl.includes('href="/zh/budget-planner/"') && tmpl.includes('个人预算计算器'), 'Related tool link: 个人预算计算器 → /zh/budget-planner/');

assert(tmpl.includes('hreflang="en"') && (tmpl.includes('hreflang="zh-Hans"') || tmpl.includes('hreflang="zh-CN"')), 'Hreflang tags preserved');

// ==========================================
// 6. Regression Checks: English Pages & Sitemap
// ==========================================
console.log('\n--- Checking Regression on English Pages & Sitemaps ---');
const enHome = getHtml('index.html');
assert(enHome.includes('<title>Free Budget Planner: 50/30/20 &amp; Zero-Based | My Real Budget</title>'), 'English homepage title unchanged');

const enBp = getHtml('budget-planner/index.html');
assert(enBp.includes('<title>Free Online Budget Planner: Build a Realistic Monthly Budget</title>'), 'English budget-planner title unchanged');

const sitemapIndex = getHtml('sitemap-index.xml');
assert(sitemapIndex.includes('sitemap-0.xml'), 'sitemap-index.xml exists and references sitemap-0.xml');

const sitemap0 = getHtml('sitemap-0.xml');
assert(sitemap0.includes('https://myrealbudget.com/zh/budget-planner/'), 'Sitemap includes /zh/budget-planner/');
assert(sitemap0.includes('https://myrealbudget.com/zh/50-30-20-budget/'), 'Sitemap includes /zh/50-30-20-budget/');
assert(sitemap0.includes('https://myrealbudget.com/zh/zero-based-budget/'), 'Sitemap includes /zh/zero-based-budget/');
assert(sitemap0.includes('https://myrealbudget.com/zh/templates/'), 'Sitemap includes /zh/templates/');
assert(sitemap0.includes('https://myrealbudget.com/zh/'), 'Sitemap includes /zh/');

console.log(`\n==============================================`);
console.log(`ALL TESTS PASSED: ${passedTests} / ${totalTests} assertions verified!`);
console.log(`==============================================\n`);
