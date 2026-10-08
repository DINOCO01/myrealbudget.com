import type { FrequencyType } from '../utils/frequency';

export interface BudgetItemData {
  id: string;
  name: string;
  amount: number;
  frequency: FrequencyType;
  notes?: string;
  isCustom?: boolean;
  isSavings?: boolean;
}

export interface BudgetCategoryData {
  id: string;
  name: string;
  icon?: string;
  description?: string;
  items: BudgetItemData[];
  isCustom?: boolean;
  isSavings?: boolean;
}

export const DEFAULT_INCOME_ITEMS: BudgetItemData[] = [
  { id: 'inc_salary', name: 'Primary Salary (Take-home)', amount: 4200, frequency: 'monthly' },
  { id: 'inc_side', name: 'Side Income', amount: 0, frequency: 'monthly' },
  { id: 'inc_freelance', name: 'Freelance & Contract', amount: 0, frequency: 'monthly' },
  { id: 'inc_bonuses', name: 'Bonuses & Commission', amount: 0, frequency: 'yearly' },
  { id: 'inc_rental', name: 'Rental Income', amount: 0, frequency: 'monthly' },
  { id: 'inc_investments', name: 'Investment Income', amount: 0, frequency: 'quarterly' },
  { id: 'inc_other', name: 'Other Income', amount: 0, frequency: 'monthly' },
];

export const DEFAULT_EXPENSE_CATEGORIES: BudgetCategoryData[] = [
  {
    id: 'cat_housing',
    name: 'Housing',
    items: [
      { id: 'exp_rent_mortgage', name: 'Rent or Mortgage', amount: 1400, frequency: 'monthly' },
      { id: 'exp_property_tax', name: 'Property Taxes & HOA', amount: 0, frequency: 'yearly' },
      { id: 'exp_home_repairs', name: 'Home Maintenance & Repairs', amount: 100, frequency: 'monthly' },
    ],
  },
  {
    id: 'cat_utilities',
    name: 'Utilities',
    items: [
      { id: 'exp_electricity', name: 'Electricity', amount: 95, frequency: 'monthly' },
      { id: 'exp_water_gas', name: 'Water & Gas', amount: 65, frequency: 'monthly' },
      { id: 'exp_internet', name: 'High-speed Internet', amount: 70, frequency: 'monthly' },
      { id: 'exp_phone', name: 'Mobile Phone Plan', amount: 60, frequency: 'monthly' },
    ],
  },
  {
    id: 'cat_food',
    name: 'Food & Groceries',
    items: [
      { id: 'exp_groceries', name: 'Groceries & Household Supplies', amount: 120, frequency: 'weekly' },
      { id: 'exp_dining_out', name: 'Dining Out & Takeaway', amount: 50, frequency: 'weekly' },
    ],
  },
  {
    id: 'cat_transportation',
    name: 'Transportation',
    items: [
      { id: 'exp_car_payment', name: 'Car Loan / Lease Payment', amount: 320, frequency: 'monthly' },
      { id: 'exp_fuel', name: 'Gas / Fuel / Charging', amount: 45, frequency: 'weekly' },
      { id: 'exp_transit', name: 'Public Transit / Rideshare', amount: 0, frequency: 'monthly' },
      { id: 'exp_car_maintenance', name: 'Car Maintenance & Tires', amount: 600, frequency: 'yearly' },
    ],
  },
  {
    id: 'cat_insurance',
    name: 'Insurance',
    items: [
      { id: 'exp_health_ins', name: 'Health & Dental Insurance', amount: 0, frequency: 'monthly' },
      { id: 'exp_auto_ins', name: 'Auto Insurance', amount: 1100, frequency: 'yearly' },
      { id: 'exp_renters_ins', name: 'Renters / Homeowners Insurance', amount: 240, frequency: 'yearly' },
      { id: 'exp_life_ins', name: 'Life & Disability Insurance', amount: 0, frequency: 'monthly' },
    ],
  },
  {
    id: 'cat_healthcare',
    name: 'Healthcare & Medical',
    items: [
      { id: 'exp_prescriptions', name: 'Prescriptions & Medications', amount: 25, frequency: 'monthly' },
      { id: 'exp_doctor_copays', name: 'Co-pays & Doctor Visits', amount: 40, frequency: 'monthly' },
    ],
  },
  {
    id: 'cat_debt',
    name: 'Debt Payments',
    items: [
      { id: 'exp_student_loan', name: 'Student Loans', amount: 180, frequency: 'monthly' },
      { id: 'exp_credit_cards', name: 'Credit Card Payments', amount: 0, frequency: 'monthly' },
      { id: 'exp_personal_loan', name: 'Personal Loans', amount: 0, frequency: 'monthly' },
    ],
  },
  {
    id: 'cat_subscriptions',
    name: 'Subscriptions & Memberships',
    items: [
      { id: 'exp_streaming', name: 'Streaming Services (Netflix, Spotify, etc.)', amount: 38, frequency: 'monthly' },
      { id: 'exp_gym', name: 'Gym / Fitness Membership', amount: 45, frequency: 'monthly' },
      { id: 'exp_software', name: 'Software & Cloud Storage', amount: 15, frequency: 'monthly' },
    ],
  },
  {
    id: 'cat_entertainment',
    name: 'Entertainment & Leisure',
    items: [
      { id: 'exp_outings', name: 'Concerts, Movies & Activities', amount: 80, frequency: 'monthly' },
      { id: 'exp_hobbies', name: 'Hobbies & Crafts', amount: 50, frequency: 'monthly' },
    ],
  },
  {
    id: 'cat_shopping',
    name: 'Shopping & Personal',
    items: [
      { id: 'exp_clothing', name: 'Clothing & Footwear', amount: 60, frequency: 'monthly' },
      { id: 'exp_personal_care', name: 'Haircuts & Personal Care', amount: 50, frequency: 'monthly' },
    ],
  },
  {
    id: 'cat_education',
    name: 'Education & Learning',
    items: [
      { id: 'exp_books_courses', name: 'Books, Courses & Certifications', amount: 0, frequency: 'monthly' },
    ],
  },
  {
    id: 'cat_travel',
    name: 'Travel & Vacations',
    items: [
      { id: 'exp_vacation_fund', name: 'Annual Travel & Holidays Fund', amount: 1200, frequency: 'yearly' },
    ],
  },
  {
    id: 'cat_family',
    name: 'Children & Family',
    items: [
      { id: 'exp_childcare', name: 'Childcare & School Activities', amount: 0, frequency: 'monthly' },
      { id: 'exp_pets', name: 'Pet Food, Vet & Supplies', amount: 65, frequency: 'monthly' },
    ],
  },
  {
    id: 'cat_savings',
    name: 'Savings & Emergency Fund',
    isSavings: true,
    items: [
      { id: 'exp_emergency_fund', name: 'High-Yield Emergency Fund', amount: 300, frequency: 'monthly', isSavings: true },
      { id: 'exp_short_term_savings', name: 'Short-term Savings Target', amount: 100, frequency: 'monthly', isSavings: true },
    ],
  },
  {
    id: 'cat_investments',
    name: 'Investments & Retirement',
    isSavings: true,
    items: [
      { id: 'exp_ira_brokerage', name: 'Roth IRA / Brokerage Contribution', amount: 250, frequency: 'monthly', isSavings: true },
    ],
  },
  {
    id: 'cat_other',
    name: 'Other & Miscellaneous',
    items: [
      { id: 'exp_buffer', name: 'Miscellaneous Buffer / Buffer Cash', amount: 75, frequency: 'monthly' },
    ],
  },
];
