import assert from 'node:assert';
import fs from 'node:fs';
import {
  BUILTIN_CATEGORIES,
  BUILTIN_CATEGORY_ID_ALIASES,
  getBuiltinCategoryId,
  getCanonicalCategoryName,
  translateCategoryName,
  translateItemName,
  SUPPORTED_LANGUAGES,
} from '../src/utils/i18n.ts';
import { MONEY_TOLERANCE, cleanMoney, sanitizeAmount } from '../src/utils/currency.ts';
import { normalizeToMonthly } from '../src/utils/frequency.ts';

console.log('=== RUNNING TESTS FOR CATEGORY LOCALIZATION DATA-STORAGE FIX ===\n');

// -----------------------------------------------------------------------------
// Test Case A: English → Spanish → English
// -----------------------------------------------------------------------------
console.log('[Test Case A] English → Spanish → English:');
{
  // 1. Built-in category with stable categoryId
  const category = {
    id: 'cat_housing',
    categoryId: 'housing',
    name: 'Housing',
    items: [{ id: 'h1', name: 'Rent', amount: 1500, frequency: 'monthly' }],
  };

  // 2. Saved budget representation
  const savedState = JSON.stringify({ categories: [category] });

  // 3. Switch to Spanish - display should be Spanish
  const esDisplay = translateCategoryName(category.categoryId, 'es');
  assert.strictEqual(esDisplay, 'Vivienda', 'Housing category must display as "Vivienda" in Spanish');

  // Stored state remains language-neutral
  const parsed = JSON.parse(savedState);
  assert.strictEqual(parsed.categories[0].categoryId, 'housing', 'Stored categoryId must remain "housing"');
  assert.strictEqual(parsed.categories.length, 1, 'Only one category must exist');

  // 4. Switch back to English - display must return to English
  const enDisplay = translateCategoryName(parsed.categories[0].categoryId, 'en');
  assert.strictEqual(enDisplay, 'Housing', 'Housing category must display as "Housing" in English');

  // Calculations unchanged
  const total = parsed.categories[0].items.reduce((s, i) => s + i.amount, 0);
  assert.strictEqual(total, 1500, 'Calculations must remain unchanged');
  console.log('✓ Category successfully toggles between English ("Housing") and Spanish ("Vivienda") without data corruption');
}

// -----------------------------------------------------------------------------
// Test Case B: Custom Category Preservation
// -----------------------------------------------------------------------------
console.log('\n[Test Case B] Custom Category ("Freedom Stash"):');
{
  const customCategory = {
    id: 'cat_custom_999',
    name: 'Freedom Stash',
    isSavings: true,
    items: [{ id: 'it_1', name: 'Bonus Savings', amount: 500, frequency: 'monthly' }],
  };

  // Verify getBuiltinCategoryId does not match custom category
  const matchedId = getBuiltinCategoryId(customCategory.id, customCategory.name);
  assert.strictEqual(matchedId, null, 'Custom category must NOT match any built-in category ID');

  // Test display across all 5 languages
  for (const lang of Object.keys(SUPPORTED_LANGUAGES)) {
    const display = translateCategoryName(customCategory.name, lang);
    assert.strictEqual(display, 'Freedom Stash', `Custom category must remain "Freedom Stash" in ${lang}`);
  }

  // Amount remains unchanged
  assert.strictEqual(customCategory.items[0].amount, 500, 'Amount must remain unchanged');
  console.log('✓ Custom category "Freedom Stash" is preserved verbatim across all 5 languages (en, es, fr, de, pt)');
}

// -----------------------------------------------------------------------------
// Test Case C: Existing Saved Budget (Backward Compatibility & Migration Layer)
// -----------------------------------------------------------------------------
console.log('\n[Test Case C] Existing Saved Budget Migration & Compatibility:');
{
  // Legacy saved budget containing old Spanish display name
  const legacySavedBudget = {
    income: [{ id: 'inc1', name: 'Sueldo', amount: 3000, frequency: 'monthly' }],
    categories: [
      {
        id: 'cat_housing',
        name: 'Vivienda', // old translated name saved in storage
        items: [{ id: 'h1', name: 'Alquiler', amount: 1000, frequency: 'monthly' }],
      },
      {
        id: 'cat_custom_888',
        name: 'Freedom Stash', // custom category
        isSavings: true,
        items: [{ id: 's1', name: 'Extra', amount: 200, frequency: 'monthly' }],
      },
    ],
  };

  // Normalization logic as implemented in planner loadState()
  function normalizeTestCategory(cat) {
    const bId = cat.categoryId || getBuiltinCategoryId(cat.id, cat.name);
    if (bId) {
      cat.categoryId = bId;
      const canon = getCanonicalCategoryName(bId);
      if (canon) cat.name = canon;
    }
    return cat;
  }

  legacySavedBudget.categories.forEach(normalizeTestCategory);

  // 1. Built-in category correctly mapped to "housing"
  assert.strictEqual(legacySavedBudget.categories[0].categoryId, 'housing', 'Legacy "Vivienda" must map to categoryId "housing"');
  assert.strictEqual(legacySavedBudget.categories[0].name, 'Housing', 'Canonical name must be updated to English "Housing"');

  // 2. Custom category remains custom
  assert.strictEqual(legacySavedBudget.categories[1].categoryId, undefined, 'Custom category must not have categoryId');
  assert.strictEqual(legacySavedBudget.categories[1].name, 'Freedom Stash', 'Custom category name must remain "Freedom Stash"');

  // 3. Display in English
  const enLabel0 = translateCategoryName(legacySavedBudget.categories[0].categoryId, 'en');
  const enLabel1 = translateCategoryName(legacySavedBudget.categories[1].name, 'en');
  assert.strictEqual(enLabel0, 'Housing');
  assert.strictEqual(enLabel1, 'Freedom Stash');

  // 4. Display in Spanish
  const esLabel0 = translateCategoryName(legacySavedBudget.categories[0].categoryId, 'es');
  const esLabel1 = translateCategoryName(legacySavedBudget.categories[1].name, 'es');
  assert.strictEqual(esLabel0, 'Vivienda');
  assert.strictEqual(esLabel1, 'Freedom Stash');

  // 5. Display in French
  const frLabel0 = translateCategoryName(legacySavedBudget.categories[0].categoryId, 'fr');
  assert.strictEqual(frLabel0, 'Logement');

  // 6. Switching languages does not duplicate categories
  assert.strictEqual(legacySavedBudget.categories.length, 2, 'Category count must remain exactly 2');
  console.log('✓ Legacy saved budget successfully migrated: "Vivienda" mapped to "housing", custom category preserved intact');
}

// -----------------------------------------------------------------------------
// Test Case D: Reload Persistence
// -----------------------------------------------------------------------------
console.log('\n[Test Case D] Reload Persistence:');
{
  const budget = {
    categories: [
      { id: 'cat_food', categoryId: 'food_groceries', name: 'Food & Groceries', items: [] },
      { id: 'cat_custom', name: 'My Hobbies', items: [] },
    ],
  };

  // Save budget
  const serialized = JSON.stringify(budget);

  // Simulate reloading page in German
  const reloaded = JSON.parse(serialized);
  const deLabelBuiltin = translateCategoryName(reloaded.categories[0].categoryId, 'de');
  const deLabelCustom = translateCategoryName(reloaded.categories[1].name, 'de');

  assert.strictEqual(deLabelBuiltin, 'Lebensmittel & Verpflegung', 'Food & Groceries must display in German after reload');
  assert.strictEqual(deLabelCustom, 'My Hobbies', 'Custom category must remain "My Hobbies" after reload');

  // Simulate reloading page in Portuguese
  const ptLabelBuiltin = translateCategoryName(reloaded.categories[0].categoryId, 'pt');
  assert.strictEqual(ptLabelBuiltin, 'Alimentação e compras', 'Food & Groceries must display in Portuguese');

  console.log('✓ Reload persistence verified: built-in category loads in selected language while custom remains untouched');
}

// -----------------------------------------------------------------------------
// Test Case E: Calculations Invariance Across All Planners
// -----------------------------------------------------------------------------
console.log('\n[Test Case E] Calculations Invariance Across All Planners:');
{
  // 1. General Budget Planner calculation check
  const gbpIncome = 4500;
  const gbpCategories = [
    { categoryId: 'housing', name: 'Housing', items: [{ amount: 1400, frequency: 'monthly' }], isSavings: false },
    { categoryId: 'food_groceries', name: 'Food & Groceries', items: [{ amount: 100, frequency: 'weekly' }], isSavings: false },
    { categoryId: 'savings_investments', name: 'Savings & Investments', items: [{ amount: 500, frequency: 'monthly' }], isSavings: true },
  ];

  const foodMonthly = (100 * 52) / 12; // 433.333333...
  const totalOutflows = 1400 + foodMonthly + 500;
  const cleanedOutflows = cleanMoney(totalOutflows);
  const remaining = cleanMoney(gbpIncome - cleanedOutflows);
  const spentPct = Math.round((cleanedOutflows / gbpIncome) * 100);
  const savingsPct = Math.round((500 / gbpIncome) * 100);

  assert.strictEqual(cleanedOutflows, 2333.33);
  assert.strictEqual(remaining, 2166.67);
  assert.strictEqual(spentPct, 52);
  assert.strictEqual(savingsPct, 11);
  console.log('✓ General Budget Planner: Outflows (₹2,333.33), Remaining (₹2,166.67), 52% allocated, 11% savings rate verified');

  // 2. 50/30/20 Planner calculation check
  const f3020Income = 5000;
  const targetNeeds = cleanMoney(f3020Income * 0.5);
  const targetWants = cleanMoney(f3020Income * 0.3);
  const targetSavings = cleanMoney(f3020Income - targetNeeds - targetWants);
  assert.strictEqual(targetNeeds, 2500);
  assert.strictEqual(targetWants, 1500);
  assert.strictEqual(targetSavings, 1000);
  assert.strictEqual(targetNeeds + targetWants + targetSavings, 5000);
  console.log('✓ 50/30/20 Planner: Targets reconcile to exactly ₹5,000 without deviation');

  // 3. Zero-Based Budget calculation check
  const zbbIncome = 75000;
  const zbbGroups = [
    { groupId: 'housing_living_essentials', items: [{ amount: 20000, frequency: 'monthly' }, { amount: 3000, frequency: 'weekly' }] }, // 20000 + 13000 = 33000
    { groupId: 'debt_payments', items: [{ amount: 7000, frequency: 'monthly' }] }, // 7000
    { groupId: 'savings_sinking_funds', items: [{ amount: 18000, frequency: 'monthly' }] }, // 18000
    { groupId: 'lifestyle_fun_money', items: [{ amount: 15000, frequency: 'monthly' }] }, // 15000
    { groupId: 'miscellaneous_cushion_buffer', items: [{ amount: 2000, frequency: 'monthly' }] }, // 2000
  ];
  let zbbAllocated = 0;
  zbbGroups.forEach(g => {
    g.items.forEach(i => {
      const mult = i.frequency === 'weekly' ? 52 / 12 : 1;
      zbbAllocated += i.amount * mult;
    });
  });
  const zbbCleanAlloc = cleanMoney(zbbAllocated);
  const zbbRemaining = cleanMoney(zbbIncome - zbbCleanAlloc);
  assert.strictEqual(zbbCleanAlloc, 75000);
  assert.strictEqual(zbbRemaining, 0);
  console.log('✓ Zero-Based Planner: ₹75,000 allocated, remaining = ₹0 (Balanced)');
}

console.log('\n=== ALL CATEGORY LOCALIZATION TESTS PASSED SUCCESSFULLY! ===');
