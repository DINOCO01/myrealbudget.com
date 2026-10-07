export interface LearnArticleDef {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  readTime: string;
  category: string;
  summary: string;
  relatedSlugs: string[];
}

export const LEARN_ARTICLES: LearnArticleDef[] = [
  {
    slug: 'what-is-a-budget',
    title: 'What Is a Budget? The Real Purpose of Managing Your Cash Flow',
    metaTitle: 'What Is a Budget? Simple Guide & Practical Benefits | My Real Budget',
    metaDescription: 'Understand what a budget really is, why most traditional diets fail, and how a realistic cash flow plan provides financial freedom rather than restriction.',
    readTime: '4 min read',
    category: 'Budgeting Fundamentals',
    summary: 'A budget is not a punishment or a restrictive diet. It is simply an intentional plan for where your money goes before the month begins.',
    relatedSlugs: ['how-to-create-a-monthly-budget', '50-30-20-budget-explained'],
  },
  {
    slug: 'how-to-create-a-monthly-budget',
    title: 'How to Create a Monthly Budget: Step-by-Step Guide for Real Life',
    metaTitle: 'How to Create a Monthly Budget Step-by-Step | My Real Budget',
    metaDescription: 'Learn how to build a monthly budget that actually balances. Step-by-step guidance on calculating net income, listing fixed and variable expenses, and normalizing payment frequencies.',
    readTime: '6 min read',
    category: 'Guides & Walkthroughs',
    summary: 'Discover the exact process for gathering your numbers, normalizing irregular payments, and creating a working budget you can stick with.',
    relatedSlugs: ['what-is-a-budget', '50-30-20-vs-zero-based-budget'],
  },
  {
    slug: '50-30-20-budget-explained',
    title: '50/30/20 Budget Explained: Needs, Wants, and Savings Targets',
    metaTitle: '50/30/20 Budget Explained: Rule, Formula & Real Examples | My Real Budget',
    metaDescription: 'A complete breakdown of the 50/30/20 budgeting rule. Understand what counts as a Need vs Want, calculate your numbers, and adapt the framework to high-cost-of-living realities.',
    readTime: '5 min read',
    category: 'Budgeting Methods',
    summary: 'Master Senator Elizabeth Warren’s renowned framework dividing net income into 50% essential needs, 30% personal wants, and 20% savings & debt.',
    relatedSlugs: ['50-30-20-vs-zero-based-budget', 'zero-based-budget-explained'],
  },
  {
    slug: 'zero-based-budget-explained',
    title: 'Zero-Based Budget Explained: How to Give Every Dollar a Job',
    metaTitle: 'Zero-Based Budget Explained: Meaning, Steps & Examples | My Real Budget',
    metaDescription: 'Explore zero-based budgeting (ZBB). Discover how assigning every dollar a specific purpose eliminates financial leaks and accelerates debt payoff and savings.',
    readTime: '5 min read',
    category: 'Budgeting Methods',
    summary: 'Learn why Income minus Outflow equals Zero is one of the most effective strategies for debt elimination and intentional wealth building.',
    relatedSlugs: ['50-30-20-vs-zero-based-budget', 'how-to-create-a-monthly-budget'],
  },
  {
    slug: '50-30-20-vs-zero-based-budget',
    title: '50/30/20 vs Zero-Based Budget: Which Method Is Right for You?',
    metaTitle: '50/30/20 vs Zero-Based Budget: Comparison & Which to Choose | My Real Budget',
    metaDescription: 'Compare the 50/30/20 rule and Zero-Based budgeting head-to-head. Compare flexibility, daily effort, mindset, and discover which method fits your lifestyle.',
    readTime: '6 min read',
    category: 'Comparisons',
    summary: 'An honest comparison of the two most popular modern budgeting frameworks so you can choose the strategy that fits your psychological style.',
    relatedSlugs: ['50-30-20-budget-explained', 'zero-based-budget-explained'],
  },
];
