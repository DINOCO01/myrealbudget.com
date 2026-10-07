export interface BudgetTemplateDef {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string;
  method: string;
  methodSlug: string;
  features: string[];
  csvContent: string;
}

export const BUDGET_TEMPLATES: BudgetTemplateDef[] = [
  {
    id: '50-30-20-template',
    slug: '50-30-20-budget-template',
    name: '50/30/20 Budget Template',
    shortDescription: 'The classic framework dividing net income into 50% Needs, 30% Wants, and 20% Savings & Debt.',
    fullDescription: 'A clean, pre-structured spreadsheet worksheet organized around the 50/30/20 framework. Provides ready-to-use rows and columns to map out essential needs, personal lifestyle wants, and savings goals in your preferred spreadsheet software.',
    targetAudience: 'Beginners, professionals, and anyone seeking a high-level, low-maintenance financial plan.',
    method: '50/30/20 Rule',
    methodSlug: '/50-30-20-budget/',
    features: [
      'Pre-categorized rows for 50% Needs, 30% Wants, and 20% Savings',
      'Structured columns for Planned Monthly Amount, Actual Amount, and Variance',
      'Sample line items for fixed bills, groceries, leisure, and debt payoff',
      'Universal compatibility with Google Sheets, Microsoft Excel, and Numbers',
    ],
    csvContent: `Category,Type,Planned Monthly Amount,Actual Amount,Variance
Primary Salary,Income,5000,5000,0
Additional Income,Income,0,0,0
Rent/Mortgage,Needs (50%),1500,1500,0
Groceries & Essentials,Needs (50%),450,420,-30
Utilities & Bills,Needs (50%),250,260,+10
Transportation & Gas,Needs (50%),300,290,-10
Health & Auto Insurance,Needs (50%),200,200,0
Dining & Social,Wants (30%),400,450,+50
Entertainment & Streaming,Wants (30%),150,150,0
Shopping & Personal,Wants (30%),200,180,-20
Travel & Leisure,Wants (30%),250,200,-50
Emergency Fund,Savings (20%),500,500,0
Retirement / IRA,Savings (20%),300,300,0
Extra Debt Payoff,Savings (20%),200,200,0`,
  },
  {
    id: 'zero-based-template',
    slug: 'zero-based-budget-template',
    name: 'Zero-Based Budget Template',
    shortDescription: 'Assign every dollar an intentional allocation so Income minus Allocations equals zero before the month starts.',
    fullDescription: 'An intentional budgeting template structured for zero-based allocation. Pre-grouped categories help you plan your income across living expenses, debt payments, and savings cushions so every dollar has a clear destination.',
    targetAudience: 'Goal-oriented planners, individuals tackling aggressive debt payoff, and detail-oriented budgeters.',
    method: 'Zero-Based Budgeting',
    methodSlug: '/zero-based-budget/',
    features: [
      'Pre-structured categories for housing, living, debt reduction, and savings',
      'Status column to track planned versus funded allocations',
      'Designated lines for recurring bills, student loans, and emergency buffers',
      'Ready to import into Google Sheets, Excel, or Apple Numbers',
    ],
    csvContent: `Category,Allocation Category,Planned Allocation,Actual Spent,Status
Income,Primary Paycheck,4500,4500,Funded
Income,Side Hustle / Extra,500,500,Funded
Housing,Rent or Mortgage,1400,1400,Paid
Housing,Utilities (Electric/Water/Gas),220,215,Paid
Living,Groceries,500,485,Active
Living,Transportation & Gas,250,260,Active
Protection,Insurances (Auto/Health/Renters),230,230,Paid
Debt,Student Loans (Minimum + Extra),450,450,Paid
Debt,Credit Card Balance Payoff,300,300,Paid
Savings,Emergency Buffer,400,400,Saved
Savings,Roth IRA Retirement,500,500,Invested
Lifestyle,Dining & Entertainment,250,260,Active
Lifestyle,Subscriptions,50,50,Paid
Buffer,Miscellaneous Cushion,150,100,Active`,
  },
  {
    id: 'simple-monthly-template',
    slug: 'simple-monthly-budget-template',
    name: 'Simple Monthly Budget Template',
    shortDescription: 'A straightforward, clutter-free income vs. expense planner focused on your net bottom line.',
    fullDescription: 'Ideal for those who want an uncomplicated overview of total money coming in versus total bills and discretionary spending going out. Includes reference columns for weekly, monthly, and annual intervals.',
    targetAudience: 'Anyone wanting a clear, no-nonsense snapshot of monthly cash flow without complex rules.',
    method: 'General Budget Planner',
    methodSlug: '/budget-planner/',
    features: [
      'Clean separation of income sources, fixed bills, and variable living expenses',
      'Frequency reference column for weekly, monthly, and yearly items',
      'Pre-calculated monthly reference values to guide cash flow setup',
      'Print-ready, single-sheet layout suitable for any spreadsheet program',
    ],
    csvContent: `Section,Item Name,Frequency,Entered Amount,Normalized Monthly
Income,Net Paycheck,Monthly,4200,4200
Expenses,Rent or Mortgage,Monthly,1350,1350
Expenses,Electric & Water,Monthly,160,160
Expenses,Internet & Mobile,Monthly,130,130
Expenses,Groceries,Weekly,125,541.67
Expenses,Car Payment,Monthly,290,290
Expenses,Auto Insurance,Yearly,1200,100
Expenses,Streaming & Subscriptions,Monthly,45,45
Expenses,Dining & Leisure,Monthly,250,250
Expenses,Student Loan,Monthly,175,175
Expenses,Savings Transfer,Monthly,400,400
Summary,Net Monthly Surplus,,,$758.33`,
  },
  {
    id: 'student-template',
    slug: 'student-budget-template',
    name: 'Student Budget Template',
    shortDescription: 'Tailored for college students and apprentices balancing part-time income, financial aid, and study costs.',
    fullDescription: 'Designed specifically around academic terms, semesters, student loans, tuition payments, textbook costs, shared room rent, and campus living expenses.',
    targetAudience: 'College, university, and vocational students managing tight or fluctuating funds.',
    method: 'Student Cash Flow',
    methodSlug: '/budget-planner/',
    features: [
      'Accounts for semester lump-sum financial aid and grants',
      'Separate tracking for academic supplies and textbook rentals',
      'Shared apartment / roommate utility splitting sections',
      'Low-income survival buffer recommendations',
    ],
    csvContent: `Term Category,Item,Frequency,Amount,Monthly Equivalent
Income,Part-time Campus Job,Weekly,220,953.33
Income,Stipend / Aid Disbursement,Quarterly,1500,500
Expense,Shared Rent (Room),Monthly,650,650
Expense,Campus Meal Plan / Groceries,Monthly,280,280
Expense,Textbooks & Class Fees,Quarterly,300,100
Expense,Public Transit Pass,Monthly,45,45
Expense,Phone Service,Monthly,40,40
Expense,Social & Club Dues,Monthly,60,60
Expense,Emergency Cushion,Monthly,50,50
Summary,Net Student Balance,,,$228.33`,
  },
  {
    id: 'household-couples-template',
    slug: 'household-couples-budget-template',
    name: 'Household & Couples Budget Template',
    shortDescription: 'Manage dual incomes, joint expenses, shared goals, and individual personal spending without friction.',
    fullDescription: 'A collaborative template structured for partners and households sharing rent, groceries, and childcare, while keeping transparency and personal autonomy intact.',
    targetAudience: 'Couples, families, and co-habitants managing shared living costs and combined finances.',
    method: 'Joint & Split Household Budget',
    methodSlug: '/budget-planner/',
    features: [
      'Dual salary and multiple contributor income tracking',
      'Joint household costs vs. individual discretionary fun money',
      'Family health, childcare, and pet care expense lines',
      'Shared savings targets for home purchase, family trips, or kids',
    ],
    csvContent: `Contributor,Category / Line Item,Frequency,Amount,Monthly Equivalent
Partner 1,Salary Take-Home,Monthly,4500,4500
Partner 2,Salary Take-Home,Monthly,3800,3800
Joint,Mortgage / Rent,Monthly,2100,2100
Joint,Homeowners Insurance & Tax,Yearly,2400,200
Joint,Household Groceries,Weekly,220,953.33
Joint,Family Utilities & High-Speed Web,Monthly,320,320
Joint,Childcare / Activities,Monthly,650,650
Joint,Family Health & Medical,Monthly,180,180
Joint,Shared Emergency Fund,Monthly,600,600
Partner 1,Individual Personal Allowance,Monthly,250,250
Partner 2,Individual Personal Allowance,Monthly,250,250
Joint,Vacation & Home Improvement Fund,Monthly,400,400
Summary,Total Household Surplus,,,$2396.67`,
  },
];
