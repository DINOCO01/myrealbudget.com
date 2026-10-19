import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

console.log('--- STARTING COMPREHENSIVE SEO VALIDATION ---');
let errors = [];
let warnings = [];

// 1. Verify robots.txt
console.log('\n[1] Checking robots.txt...');
const robotsPath = path.join(distDir, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  errors.push('robots.txt does not exist in dist/');
} else {
  const robots = fs.readFileSync(robotsPath, 'utf-8');
  const sitemapLines = robots.split('\n').filter(l => l.trim().toLowerCase().startsWith('sitemap:'));
  console.log('Sitemaps declared in robots.txt:', sitemapLines);
  if (sitemapLines.length !== 1) {
    errors.push(`Expected exactly 1 Sitemap line in robots.txt, found ${sitemapLines.length}`);
  }
  if (!sitemapLines[0].includes('https://myrealbudget.com/sitemap-index.xml')) {
    errors.push(`Robots.txt sitemap must be https://myrealbudget.com/sitemap-index.xml, found: ${sitemapLines[0]}`);
  }
}

// 2. Verify sitemap.xml does NOT exist as static duplicate
console.log('\n[2] Checking duplicate sitemap.xml...');
if (fs.existsSync(path.join(distDir, 'sitemap.xml'))) {
  errors.push('sitemap.xml should not exist as a static file in dist/; it must redirect via _redirects');
} else {
  console.log('PASS: dist/sitemap.xml is absent (will be handled by _redirects)');
}

// 3. Verify _redirects
console.log('\n[3] Checking _redirects...');
const redirectsPath = path.join(distDir, '_redirects');
if (!fs.existsSync(redirectsPath)) {
  errors.push('_redirects missing in dist/');
} else {
  const redirects = fs.readFileSync(redirectsPath, 'utf-8');
  if (!redirects.includes('/sitemap.xml /sitemap-index.xml 301')) {
    errors.push('_redirects does not contain /sitemap.xml redirect');
  } else {
    console.log('PASS: _redirects contains sitemap.xml -> sitemap-index.xml 301');
  }
}

// 4. Verify sitemap-index.xml and child sitemaps
console.log('\n[4] Checking sitemap-index.xml & XML parsing...');
const sitemapIndexPath = path.join(distDir, 'sitemap-index.xml');
let childSitemaps = [];
if (!fs.existsSync(sitemapIndexPath)) {
  errors.push('sitemap-index.xml missing in dist/');
} else {
  const xmlContent = fs.readFileSync(sitemapIndexPath, 'utf-8');
  // Simple check or regex
  const locMatches = [...xmlContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  console.log('Child sitemaps referenced in index:', locMatches);
  if (locMatches.length === 0) {
    errors.push('sitemap-index.xml has no child sitemaps');
  }
  for (const loc of locMatches) {
    if (!loc.startsWith('https://myrealbudget.com/')) {
      errors.push(`Child sitemap loc does not start with https://myrealbudget.com/: ${loc}`);
    }
    const relFile = loc.replace('https://myrealbudget.com/', '');
    if (!fs.existsSync(path.join(distDir, relFile))) {
      errors.push(`Referenced child sitemap does not exist in dist/: ${relFile}`);
    } else {
      childSitemaps.push(path.join(distDir, relFile));
    }
  }
}

// 5. Verify child sitemap URLs & lastmod
console.log('\n[5] Checking child sitemaps URLs and lastmod timestamps...');
const seenUrls = new Set();
let totalUrls = 0;
for (const childPath of childSitemaps) {
  const xml = fs.readFileSync(childPath, 'utf-8');
  const urlBlocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  totalUrls += urlBlocks.length;
  console.log(`Found ${urlBlocks.length} URLs in ${path.basename(childPath)}`);

  for (const block of urlBlocks) {
    const content = block[1];
    const locMatch = content.match(/<loc>(.*?)<\/loc>/);
    const lastmodMatch = content.match(/<lastmod>(.*?)<\/lastmod>/);
    
    if (!locMatch) {
      errors.push('URL entry missing <loc>');
      continue;
    }
    const url = locMatch[1];
    if (seenUrls.has(url)) {
      errors.push(`Duplicate URL in sitemap: ${url}`);
    }
    seenUrls.add(url);

    if (!url.startsWith('https://myrealbudget.com/')) {
      errors.push(`URL does not use preferred https://myrealbudget.com/ hostname: ${url}`);
    }
    if (url.includes('www.')) {
      errors.push(`URL contains www: ${url}`);
    }
    if (!url.endsWith('/')) {
      errors.push(`URL does not have trailing slash: ${url}`);
    }

    if (!lastmodMatch) {
      errors.push(`URL entry missing <lastmod>: ${url}`);
    } else {
      const dateStr = lastmodMatch[1];
      const parsed = Date.parse(dateStr);
      if (isNaN(parsed)) {
        errors.push(`Invalid lastmod date format "${dateStr}" for ${url}`);
      }
    }
  }
}
console.log(`Total valid unique URLs in sitemap: ${seenUrls.size}`);

// 6. Check the 5 affected pages in dist/
console.log('\n[6] Checking 5 affected pages in dist/ for canonical, h1, noindex, and content...');
const affectedPages = [
  { path: 'budget-templates/index.html', url: 'https://myrealbudget.com/budget-templates/', lang: 'en', minWords: 300 },
  { path: 'learn/index.html', url: 'https://myrealbudget.com/learn/', lang: 'en', minWords: 200 },
  { path: 'zh/templates/index.html', url: 'https://myrealbudget.com/zh/templates/', lang: 'zh', minWords: 300 },
  { path: 'contact/index.html', url: 'https://myrealbudget.com/contact/', lang: 'en', minWords: 100 },
  { path: 'terms/index.html', url: 'https://myrealbudget.com/terms/', lang: 'en', minWords: 100 },
];

for (const page of affectedPages) {
  const filePath = path.join(distDir, page.path);
  if (!fs.existsSync(filePath)) {
    errors.push(`Page file missing: ${page.path}`);
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf-8');

  // Check noindex
  if (html.includes('content="noindex') || html.includes("content='noindex")) {
    errors.push(`Page accidentally marked noindex: ${page.path}`);
  } else {
    console.log(`PASS: ${page.path} is indexable (no unintended noindex)`);
  }

  // Check canonical
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i) || html.match(/<link\s+href="([^"]+)"\s+rel="canonical"/i);
  if (!canonicalMatch) {
    errors.push(`Missing canonical tag in ${page.path}`);
  } else if (canonicalMatch[1] !== page.url) {
    errors.push(`Canonical mismatch in ${page.path}: expected ${page.url}, found ${canonicalMatch[1]}`);
  } else {
    console.log(`PASS: ${page.path} canonical correct: ${canonicalMatch[1]}`);
  }

  // Check H1 count (must be exactly 1)
  const h1Matches = html.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length !== 1) {
    errors.push(`Expected exactly 1 H1 in ${page.path}, found ${h1Matches.length}`);
  } else {
    console.log(`PASS: ${page.path} has exactly 1 H1 heading`);
  }

  // Word count check
  // Strip tags and script
  const textOnly = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                       .replace(/<style[\s\S]*?<\/style>/gi, '')
                       .replace(/<[^>]+>/g, ' ')
                       .replace(/\s+/g, ' ')
                       .trim();

  let count = 0;
  if (page.lang === 'zh') {
    // Count Chinese characters
    const zhChars = textOnly.match(/[\u4e00-\u9fa5]/g) || [];
    count = zhChars.length;
    console.log(`${page.path} Chinese character count: ${count} (min: ${page.minWords})`);
  } else {
    const words = textOnly.split(/\s+/).filter(Boolean);
    count = words.length;
    console.log(`${page.path} word count: ${count} (min: ${page.minWords})`);
  }

  if (count < page.minWords) {
    errors.push(`${page.path} content is too thin: ${count} < ${page.minWords}`);
  }
}

console.log('\n--- VALIDATION SUMMARY ---');
if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} errors:`);
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log('ALL SEO AUDIT VALIDATIONS PASSED PERFECTLY!');
}
