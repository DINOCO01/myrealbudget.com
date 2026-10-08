import fs from 'fs';

console.log('=== VERIFYING TEMPLATE FILES IN DIST ===');
const expectedFiles = [
  'dist/templates/my-real-budget-general-budget-template.xlsx',
  'dist/templates/my-real-budget-50-30-20-template.xlsx',
  'dist/templates/my-real-budget-zero-based-budget-template.xlsx',
];

for (const file of expectedFiles) {
  if (fs.existsSync(file)) {
    const stat = fs.statSync(file);
    console.log(`✓ Exists: ${file} (${stat.size} bytes)`);
  } else {
    console.error(`✗ MISSING: ${file}`);
    process.exit(1);
  }
}

console.log('\n=== VERIFYING DOWNLOAD BUTTONS IN BUDGET-PLANNER-TEMPLATE ===');
const bptHtml = fs.readFileSync('dist/budget-planner-template/index.html', 'utf8');

// Check the three templates on budget-planner-template page
const checks = [
  {
    name: '50/30/20 Budget',
    id: '50-30-20-template',
    expectedHref: '/templates/my-real-budget-50-30-20-template.xlsx',
  },
  {
    name: 'Zero-Based Budget',
    id: 'zero-based-template',
    expectedHref: '/templates/my-real-budget-zero-based-budget-template.xlsx',
  },
  {
    name: 'General Budget',
    id: 'simple-monthly-template',
    expectedHref: '/templates/my-real-budget-general-budget-template.xlsx',
  },
];

for (const c of checks) {
  // Find article with this id
  const articleRegex = new RegExp(`<article[^>]*id=["']${c.id}["'][\\s\\S]*?<\\/article>`, 'i');
  const match = bptHtml.match(articleRegex);
  if (!match) {
    console.error(`✗ Could not find article for ${c.name} (${c.id})`);
    process.exit(1);
  }
  const article = match[0];
  if (article.includes(`href="${c.expectedHref}"`) && article.includes('download')) {
    console.log(`✓ ${c.name} (${c.id}) Download button correctly points to: ${c.expectedHref} with download attribute`);
  } else {
    console.error(`✗ ${c.name} (${c.id}) does not contain expected href ${c.expectedHref}`);
    process.exit(1);
  }
}

console.log('\n=== VERIFYING BUTTONS IN BUDGET-TEMPLATES DIRECTORY ===');
const btHtml = fs.readFileSync('dist/budget-templates/index.html', 'utf8');
for (const c of checks) {
  if (btHtml.includes(`href="${c.expectedHref}"`)) {
    console.log(`✓ ${c.name} points to: ${c.expectedHref}`);
  } else {
    console.error(`✗ ${c.name} does not contain expected href ${c.expectedHref} in budget-templates directory`);
    process.exit(1);
  }
}

console.log('\n=== ALL CHECKS PASSED SUCCESSFULLY! ===');
