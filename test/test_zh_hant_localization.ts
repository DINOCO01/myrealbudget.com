import fs from 'node:fs';
import path from 'node:path';
import { TRANSLATIONS, SUPPORTED_LANGUAGES, ROUTE_LANG_MAP, detectBrowserLanguage } from '../src/utils/i18n';

let passed = 0;
let failed = 0;

function assert(condition: boolean, msg: string) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${msg}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${msg}`);
  }
}

console.log('=== TEST SUITE: Traditional Chinese (zh-Hant) Localization ===\n');

// 1. Check generated files in dist
console.log('1. Verifying Built Static HTML Files');
const routes = [
  { url: '/zh-hant/', file: 'dist/zh-hant/index.html' },
  { url: '/zh-hant/budget-planner/', file: 'dist/zh-hant/budget-planner/index.html' },
  { url: '/zh-hant/50-30-20-budget/', file: 'dist/zh-hant/50-30-20-budget/index.html' },
  { url: '/zh-hant/zero-based-budget/', file: 'dist/zh-hant/zero-based-budget/index.html' },
  { url: '/zh-hant/templates/', file: 'dist/zh-hant/templates/index.html' },
];

for (const r of routes) {
  assert(fs.existsSync(r.file), `Generated HTML file exists: ${r.file}`);
}

// 2. HTML lang attributes
console.log('\n2. Verifying HTML lang Attributes');
for (const r of routes) {
  const html = fs.readFileSync(r.file, 'utf8');
  assert(html.includes('<html lang="zh-Hant"'), `${r.url} has <html lang="zh-Hant">`);
}

// Check that Simplified Chinese pages have lang="zh-Hans"
const zhRoutes = [
  'dist/zh/index.html',
  'dist/zh/budget-planner/index.html',
  'dist/zh/50-30-20-budget/index.html',
  'dist/zh/zero-based-budget/index.html',
  'dist/zh/templates/index.html',
];
for (const f of zhRoutes) {
  const html = fs.readFileSync(f, 'utf8');
  assert(html.includes('<html lang="zh-Hans"'), `${f} has <html lang="zh-Hans">`);
}

// 3. Canonicals
console.log('\n3. Verifying Self-Referencing Canonical URLs');
for (const r of routes) {
  const html = fs.readFileSync(r.file, 'utf8');
  const expectedCanonical = `<link rel="canonical" href="https://myrealbudget.com${r.url}"`;
  assert(html.includes(expectedCanonical), `${r.url} canonical matches https://myrealbudget.com${r.url}`);
}

// 4. Hreflang Tags (reciprocal 4 entries on EN, ZH, ZH-HANT)
console.log('\n4. Verifying Reciprocal 4-part Hreflang Tags');
const pageTriplets = [
  { en: '/', zh: '/zh/', zhHant: '/zh-hant/', enFile: 'dist/index.html', zhFile: 'dist/zh/index.html', zhHantFile: 'dist/zh-hant/index.html' },
  { en: '/budget-planner/', zh: '/zh/budget-planner/', zhHant: '/zh-hant/budget-planner/', enFile: 'dist/budget-planner/index.html', zhFile: 'dist/zh/budget-planner/index.html', zhHantFile: 'dist/zh-hant/budget-planner/index.html' },
  { en: '/50-30-20-budget/', zh: '/zh/50-30-20-budget/', zhHant: '/zh-hant/50-30-20-budget/', enFile: 'dist/50-30-20-budget/index.html', zhFile: 'dist/zh/50-30-20-budget/index.html', zhHantFile: 'dist/zh-hant/50-30-20-budget/index.html' },
  { en: '/zero-based-budget/', zh: '/zh/zero-based-budget/', zhHant: '/zh-hant/zero-based-budget/', enFile: 'dist/zero-based-budget/index.html', zhFile: 'dist/zh/zero-based-budget/index.html', zhHantFile: 'dist/zh-hant/zero-based-budget/index.html' },
  { en: '/budget-templates/', zh: '/zh/templates/', zhHant: '/zh-hant/templates/', enFile: 'dist/budget-templates/index.html', zhFile: 'dist/zh/templates/index.html', zhHantFile: 'dist/zh-hant/templates/index.html' },
];

for (const t of pageTriplets) {
  const files = [t.enFile, t.zhFile, t.zhHantFile];
  for (const f of files) {
    const html = fs.readFileSync(f, 'utf8');
    assert(html.includes(`hreflang="en" href="https://myrealbudget.com${t.en}"`), `${f} contains hreflang="en"`);
    assert(html.includes(`hreflang="zh-Hans" href="https://myrealbudget.com${t.zh}"`), `${f} contains hreflang="zh-Hans"`);
    assert(html.includes(`hreflang="zh-Hant" href="https://myrealbudget.com${t.zhHant}"`), `${f} contains hreflang="zh-Hant"`);
    assert(html.includes(`hreflang="x-default" href="https://myrealbudget.com${t.en}"`), `${f} contains hreflang="x-default"`);
  }
}

// 5. Titles, Meta Descriptions, Headings
console.log('\n5. Verifying Titles, Meta Descriptions, and Headings');

// 5.1 /zh-hant/ (Homepage)
const homeHtml = fs.readFileSync('dist/zh-hant/index.html', 'utf8');
assert(homeHtml.includes('<title>免費個人預算計算機與每月預算規劃工具 | My Real Budget</title>'), 'Home title matches');
assert(homeHtml.includes('免費線上個人預算計算與每月預算規劃。支援50/30/20和零基預算分配，幫你算清每月收支，無需註冊。'), 'Home description matches');
assert(homeHtml.includes('>免費個人預算計算機<') || homeHtml.includes('>個人預算計算機<'), 'Home H1 matches');
assert(homeHtml.includes('href="/zh-hant/budget-planner/"') && homeHtml.includes('個人預算計算機</a>'), 'Home has top link to budget planner');
assert(homeHtml.includes('href="/zh-hant/50-30-20-budget/"') && homeHtml.includes('50/30/20預算計算</a>'), 'Home has top link to 50/30/20');
assert(homeHtml.includes('href="/zh-hant/zero-based-budget/"') && homeHtml.includes('零基預算規劃</a>'), 'Home has top link to zero-based');
assert(homeHtml.includes('href="/zh-hant/templates/"') && homeHtml.includes('免費預算範本</a>'), 'Home has top link to templates');
assert(homeHtml.includes('相關工具'), 'Home has 相關工具 section');

// 5.2 /zh-hant/budget-planner/
const bpHtml = fs.readFileSync('dist/zh-hant/budget-planner/index.html', 'utf8');
assert(bpHtml.includes('<title>個人預算計算機：免費每月預算計劃與開支分配 | My Real Budget</title>'), 'Budget planner title matches');
assert(bpHtml.includes('免費個人預算計算機，幾分鐘做好每月預算計劃。輸入收入和開支，自動分配每月預算，每週費用一鍵轉每月，資料只保存在你的瀏覽器。'), 'Budget planner description matches');
assert(bpHtml.includes('個人預算計算機</h1>'), 'Budget planner H1 matches');
assert(bpHtml.includes('每週費用轉每月，自動折算'), 'Budget planner has frequency conversion H2');
assert(bpHtml.includes('相關工具'), 'Budget planner has 相關工具 section');

// 5.3 /zh-hant/50-30-20-budget/
const f30Html = fs.readFileSync('dist/zh-hant/50-30-20-budget/index.html', 'utf8');
assert(f30Html.includes('<title>50/30/20預算：規則、計算方法與規劃器 | My Real Budget</title>'), '50/30/20 title matches');
assert(f30Html.includes('50/30/20預算規則詳解與線上計算機。科學分配50%必需開支、30%想要開支與20%儲蓄投資'), '50/30/20 description matches');
assert(f30Html.includes('每月開支預算分配'), '50/30/20 intro includes 每月開支預算分配');
assert(f30Html.includes('相關工具'), '50/30/20 has 相關工具 section');

// 5.4 /zh-hant/zero-based-budget/
const zbbHtml = fs.readFileSync('dist/zh-hant/zero-based-budget/index.html', 'utf8');
assert(zbbHtml.includes('<title>零基預算：方法、步驟與預算規劃器 | My Real Budget</title>'), 'Zero-based title matches');
assert(zbbHtml.includes('零基預算方法詳解與免費線上規劃器。賦予每分錢明確使命'), 'Zero-based description matches');
assert(zbbHtml.includes('零基預算規劃器</h1>'), 'Zero-based H1 matches');
assert(zbbHtml.includes('相關工具'), 'Zero-based has 相關工具 section');

// 5.5 /zh-hant/templates/
const tmplHtml = fs.readFileSync('dist/zh-hant/templates/index.html', 'utf8');
assert(tmplHtml.includes('<title>免費預算範本：個人、50/30/20與零基預算 | My Real Budget</title>'), 'Templates title matches');
assert(tmplHtml.includes('免費下載精美個人與家庭預算表範本。包含通用每月預算表、50/30/20規則預算表及零基預算Excel試算表'), 'Templates description matches');
assert(tmplHtml.includes('免費預算範本目錄</h1>'), 'Templates H1 matches');
assert(tmplHtml.includes('相關工具'), 'Templates has 相關工具 section');

// 6. Terminology Check: Mainland terms should NOT exist on zh-hant pages
console.log('\n6. Verifying Absence of Mainland-specific Terminology in zh-Hant');
const mainlandTerms = ['一线城市', '一線城市', '北上广深', '坚果云', '堅果雲', 'WPS Office', '金山 WPS', '飞书表格', '飛書表格'];
for (const r of routes) {
  const html = fs.readFileSync(r.file, 'utf8');
  for (const term of mainlandTerms) {
    assert(!html.includes(term), `${r.url} does not contain mainland term "${term}"`);
  }
}

// 7. Language Switcher & Labels
console.log('\n7. Verifying Language Switcher Configuration');
assert(SUPPORTED_LANGUAGES['zh']?.label === '简体中文', 'SUPPORTED_LANGUAGES.zh.label is "简体中文"');
assert(SUPPORTED_LANGUAGES['zh-hant']?.label === '繁體中文', 'SUPPORTED_LANGUAGES.zh-hant.label is "繁體中文"');
assert(ROUTE_LANG_MAP['/']?.['zh-hant'] === '/zh-hant/', 'ROUTE_LANG_MAP / -> /zh-hant/');
assert(ROUTE_LANG_MAP['/zh-hant/']?.['zh'] === '/zh/', 'ROUTE_LANG_MAP /zh-hant/ -> /zh/');
assert(ROUTE_LANG_MAP['/zh-hant/']?.['en'] === '/', 'ROUTE_LANG_MAP /zh-hant/ -> /');

// 8. Sitemap Check
console.log('\n8. Verifying Sitemap Output');
const sitemapPath = 'dist/sitemap-0.xml';
assert(fs.existsSync(sitemapPath), 'dist/sitemap-0.xml exists');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
for (const r of routes) {
  const expectedUrl = `https://myrealbudget.com${r.url}`;
  assert(sitemapContent.includes(`<loc>${expectedUrl}</loc>`), `Sitemap contains ${expectedUrl}`);
  // Check for lastmod tag right after or nearby loc
  const urlIndex = sitemapContent.indexOf(`<loc>${expectedUrl}</loc>`);
  const chunk = sitemapContent.slice(urlIndex, urlIndex + 300);
  assert(chunk.includes('<lastmod>'), `Sitemap entry for ${expectedUrl} has <lastmod>`);
}

// 9. Translation Keys Parity
console.log('\n9. Verifying Translation Keys Parity');
const zhKeys = Object.keys(TRANSLATIONS.zh);
const zhHantKeys = Object.keys(TRANSLATIONS['zh-hant']);
assert(zhKeys.length === zhHantKeys.length, `Key count matches: ${zhKeys.length} === ${zhHantKeys.length}`);
const missingInHant = zhKeys.filter(k => !(k in TRANSLATIONS['zh-hant']));
assert(missingInHant.length === 0, `Zero missing keys in zh-hant (missing: ${missingInHant.length})`);

console.log(`\n========================================`);
console.log(`TOTAL ASSERTIONS: ${passed + failed}`);
console.log(`PASSED: ${passed}`);
console.log(`FAILED: ${failed}`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
}

