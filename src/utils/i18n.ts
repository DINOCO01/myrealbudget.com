/**
 * Internationalization (i18n) system for My Real Budget.
 * Supported languages:
 * - en: English (default)
 * - es: Spanish (Español)
 * - fr: French (Français)
 * - de: German (Deutsch)
 * - pt: Portuguese (Português)
 */

import { HOME_FAQ_TRANSLATIONS } from '../data/homeFaqs';
import { LEARN_TRANSLATIONS } from '../data/learnArticles';
import { PAGE_FAQ_TRANSLATIONS } from '../data/pageFaqs';
import { ARTICLE_CONTENT_TRANSLATIONS } from '../data/learnArticleContent';
import { TEMPLATES_TRANSLATIONS } from '../data/templatesTranslations';
import { EDITORIAL_TRANSLATIONS } from '../data/editorialTranslations';
import { SECONDARY_PAGES_TRANSLATIONS } from '../data/secondaryPagesTranslations';

export interface LanguageConfig {
  code: string;
  label: string;
}

export const SUPPORTED_LANGUAGES: Record<string, LanguageConfig> = {
  en: { code: 'en', label: 'English' },
  es: { code: 'es', label: 'Español' },
  fr: { code: 'fr', label: 'Français' },
  de: { code: 'de', label: 'Deutsch' },
  pt: { code: 'pt', label: 'Português' },
};

export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGE_STORAGE_KEY = 'myrealbudget_language';

export const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    // Navigation & Header
    'nav.navigation': 'Navigation',
    'nav.preferences': 'Preferences',
    'nav.budget_planner': 'Budget Planner',
    'nav.f3020_budget': '50/30/20 Budget',
    'nav.f3020_compact': '50/30/20',
    'nav.zero_based_budget': 'Zero-Based Budget',
    'nav.zero_based_compact': 'Zero-Based',
    'nav.templates': 'Templates',
    'nav.learn': 'Learn',
    'nav.start_budget': 'Start Budget Planner',
    'nav.theme': 'Theme Mode',
    'nav.brand': 'My Real Budget',

    // Common Controls & Badges
    'common.autosaved': 'Autosaved locally to this device',
    'common.export_csv': 'Export CSV',
    'common.reset_defaults': 'Reset Defaults',
    'common.currency': 'Currency',
    'common.language': 'Language',
    'common.method': 'Budgeting Method:',
    'common.general_budget': 'General Budget',
    'common.f3020_method': '50/30/20 Method',
    'common.zero_based_method': 'Zero-Based Method',
    'common.spreadsheet_templates': 'Spreadsheet Templates',
    'common.try_another_method': 'Want to try another budgeting method?',
    'common.add_item': 'Add item',
    'common.add_income': 'Add Income Stream',
    'common.add_category': 'Add Custom Expense Category',
    'common.add_allocation_group': 'Add New Allocation Group',
    'common.new_allocation': 'New Allocation',
    'common.expand_all': 'Expand all',
    'common.collapse_all': 'Collapse all',
    'common.per_month': '/mo',
    'common.private_local': '100% Private & Local',
    'common.no_account': 'No Account Needed',
    'common.free_templates': 'Free Templates & Tools',
    'common.remove_item': 'Remove item',
    'common.remove_category': 'Remove entire category',

    // Frequencies
    'freq.weekly': 'Weekly',
    'freq.biweekly': 'Bi-weekly',
    'freq.monthly': 'Monthly',
    'freq.quarterly': 'Quarterly',
    'freq.yearly': 'Yearly',

    // Summary & Metrics
    'summary.budget_summary': 'Budget Summary',
    'summary.monthly_income': 'Monthly Income',
    'summary.planned_expenses': 'Planned Expenses',
    'summary.total_allocated': 'Total Allocated',
    'summary.remaining': 'Remaining',
    'summary.left_to_assign': 'Left to Assign',
    'summary.monthly_surplus': 'Monthly Surplus',
    'summary.monthly_deficit': 'Monthly Deficit',
    'summary.net_balance': 'Net Balance',
    'summary.net_cash_flow': 'Net Cash Flow',
    'summary.balanced': 'Balanced',
    'summary.over_budget': 'Over Budget',
    'summary.over_allocated': 'Over-Allocated',
    'summary.surplus': 'Surplus',
    'summary.deficit': 'Deficit',
    'summary.target': 'Target',
    'summary.actual': 'Actual',
    'summary.on_target': 'On Target',
    'summary.under': 'under',
    'summary.over': 'over',
    'summary.outflows': 'Outflows',
    'summary.actual_outflow': 'Actual Outflow:',
    'summary.cash_breakdown': 'Cash Flow Breakdown',
    'summary.top_categories': 'Largest Monthly Expenses',
    'summary.spent_pct': '{pct}% spent',
    'summary.assigned_pct': '{pct}% assigned',
    'summary.available_pct': '100% available',
    'summary.income_spent': 'Income Spent',
    'summary.income_remaining': 'Income Remaining',
    'summary.savings_investments': 'Savings & Investments',
    'summary.remaining_cash': 'Remaining Cash',
    'gbp.start_entering': 'Start by entering your monthly take-home salary or wages above.',

    // General Budget Planner Specific
    'gbp.heading': 'Online Monthly Budget Planner',
    'gbp.subtitle': 'Plan your income and expenses with automatic payment frequency normalization. Understand where every dollar goes and create a budget tailored to your real life.',
    'gbp.income_section': '1. Monthly Income',
    'gbp.income_desc': 'Enter all income streams. Choose how often you get paid.',
    'gbp.normalized_total': 'Normalized Total',
    'gbp.expenses_section': '2. Planned Expenses',
    'gbp.expenses_desc': 'Set amounts and select frequencies. Yearly and weekly items are annualized to monthly.',
    'gbp.normalized_expenses': 'Normalized Expenses',
    'gbp.live_assessment': 'Dynamic Budget Insights',
    'gbp.empty_categories': 'No expense categories with values yet.',

    // 50/30/20 Planner Specific
    'f3020.heading': '50/30/20 Budget Calculator & Planner',
    'f3020.subtitle': 'Balance your finances with the classic 50/30/20 rule. Allocate 50% of your take-home pay to Needs, 30% to Wants, and 20% to Savings and Debt.',
    'f3020.take_home_label': 'Monthly Take-Home Pay (After Taxes)',
    'f3020.take_home_desc': 'Enter your total net monthly income. If paid biweekly, multiply your paycheck by 26 and divide by 12.',
    'f3020.needs_title': 'Needs',
    'f3020.needs_target_label': '(Target: 50%)',
    'f3020.needs_desc': 'Housing, utilities, groceries, gas/transit, insurance, minimum debt payments.',
    'f3020.add_need': 'Add Need Line Item',
    'f3020.wants_title': 'Wants',
    'f3020.wants_target_label': '(Target: 30%)',
    'f3020.wants_desc': 'Dining out, entertainment, shopping, subscriptions, vacations, hobbies.',
    'f3020.add_want': 'Add Want Line Item',
    'f3020.savings_title': 'Savings & Debt',
    'f3020.savings_target_label': '(Target: 20%)',
    'f3020.savings_desc': 'Emergency fund, retirement accounts, investments, extra debt payoff.',
    'f3020.add_saving': 'Add Savings / Debt Item',
    'f3020.rule_summary': '50/30/20 Rule Breakdown',
    'f3020.net_monthly_income': 'Net Monthly Income',
    'f3020.unassigned_cash': 'Unassigned Cash:',

    // Zero-Based Planner Specific
    'zbb.heading': 'Zero-Based Budget Calculator & Planner',
    'zbb.subtitle': 'Give every dollar a job until zero dollars remain unassigned. Allocate all your income across fixed needs, lifestyle spending, debt payoffs, and savings.',
    'zbb.monthly_net_income': 'Monthly Net Income',
    'zbb.income_desc': 'Your total after-tax take-home earnings for the month.',
    'zbb.add_group': 'Add Allocation Group',
    'zbb.allocated_progress': 'Total Assigned Progress',
    'zbb.envelopes_summary': 'Envelopes & Category Breakdown',
    'zbb.zero_balance_rule': 'The Zero-Based Formula',
    'zbb.zero_balance_desc': 'Income − All Allocations = 0',
    'zbb.income_label': 'Total Net Monthly Income to Assign',
    'zbb.income_sub': 'The starting pool of money for the month. Your objective is to allocate every cent until $0 remains.',
    'zbb.left_to_assign': 'Left to Assign',
    'zbb.budget_balanced': 'Budget Balanced',
    'zbb.over_allocated': 'Over Allocated',
    'zbb.zero_balance_title': 'Zero-Based Balance',
    'zbb.income_pool': 'Income Pool',
    'zbb.total_allocated': 'Total Allocated',
    'zbb.allocation_rate': 'Allocation Rate',
    'zbb.assigned_vs_available': 'Assigned vs Available',
    'zbb.strategy_title': 'How to reach Zero:',
    'zbb.strategy_leftover': 'If money is left over: Do not leave it floating. Assign it to extra debt principal, retirement, or an irregular expense sinking fund.',
    'zbb.strategy_negative': 'If negative: You have assigned more than you make. Trim dining out, discretionary shopping, or entertainment until the balance hits $0.',
    'zbb.add_item_to': 'Add item to {group}',
    'zbb.goal_reached_msg': '<strong>Goal reached!</strong> Your budget is balanced to zero. Every dollar has a designated purpose.',
    'zbb.left_to_assign_msg': 'You have <strong>{amount}</strong> left to assign. Assign remainder until {zero} remains.',
    'zbb.over_allocated_msg': 'You have allocated <strong class="text-[#ee0000]">{amount}</strong> more than your income.',
    'zbb.badge_balanced': 'Balanced ({zero})',
    'zbb.badge_left': '{amount} Left to Assign',
    'zbb.badge_over': '{amount} Over Allocated',
    'zbb.sub_balanced': 'All income allocated to zero.',
    'zbb.sub_left': 'Assign remainder until {zero}.',
    'zbb.sub_over': 'Allocated exceeds income.',
    'zbb.pct_assigned': '{pct}% assigned',
    'prompt.new_group_default': 'Special Allocation Group',

    // Homepage Specific
    'home.eyebrow': 'Practical Cash Flow Planning',
    'home.hero_title': 'Budget Planner for Real-Life Money Management',
    'home.hero_p': 'Take command of your personal finances with an intuitive online budget planner designed for realistic cash flow. Model monthly income, balance needs and wants with the 50/30/20 rule, assign every dollar with zero-based budgeting, and download free customizable spreadsheet templates.',
    'home.explore_methods': 'Explore Budget Methods',
    'home.preview_title': 'YOUR MONTHLY BUDGET',
    'home.preview_takehome': 'Monthly Take-Home',
    'home.preview_income': 'Income',
    'home.preview_distribution': 'Cash Distribution',
    'home.preview_assigned': '100% Assigned',
    'home.preview_needs': 'Needs',
    'home.preview_needs_sub': 'Rent, groceries, bills',
    'home.preview_wants': 'Wants',
    'home.preview_wants_sub': 'Dining, leisure, hobby',
    'home.preview_savings': 'Savings',
    'home.preview_savings_sub': 'Emergency fund, debt',
    'home.preview_remaining': 'Remaining Unassigned',
    'home.core_capabilities': 'Core Capabilities',
    'home.built_for_real_life': 'An Online Budget Planner Built for Real Life',
    'home.choose_how_to_budget': 'Choose how you want to budget',
    'home.open_f3020': 'Open 50/30/20 Planner →',
    'home.open_zbb': 'Open Zero-Based Planner →',
    'home.open_gbp': 'Open General Planner →',

    // Templates Page Specific
    'templates.eyebrow': 'Templates Catalog',
    'templates.heading': 'Budget Templates Directory',
    'templates.desc': 'Find the right budgeting spreadsheet for your specific situation. Every template is completely free to download or use with our online planners.',
    'templates.who_for': 'Who it is for:',
    'templates.get_template': 'Get Template',
    'templates.online_tool': 'Online Tool',
    'templates.help_title': 'Need help picking a template?',

    // Learn Page Specific
    'learn.eyebrow': 'Knowledge Center',
    'learn.heading': 'Budgeting Learning Center',
    'learn.desc': 'Clear, jargon-free guides to help you understand where your money goes, select the best budgeting method, and build sustainable financial habits.',
    'learn.read_guide': 'Read Full Guide',
    'learn.put_into_practice': 'Put Knowledge Into Practice',
    'learn.ready_to_plan': 'Ready to plan your numbers?',
    'learn.open_planner': 'Open Budget Planner',

    // Footer Specific
    'footer.mission': 'Build a budget that actually works for you. Plan your cash flow with real numbers, normalized payment frequencies, and zero guesswork.',
    'footer.budget_methods': 'Budget Methods',
    'footer.general_planner': 'General Budget Planner',
    'footer.f3020_rule': '50/30/20 Budget Rule',
    'footer.zero_based': 'Zero-Based Budget',
    'footer.freq_normalization': 'Frequency Normalization',
    'footer.templates_tools': 'Templates & Tools',
    'footer.planner_template': 'Budget Planner Template',
    'footer.all_templates': 'All Budget Templates',
    'footer.simple_monthly': 'Simple Monthly Template',
    'footer.student_template': 'Student Budget Template',
    'footer.household_template': 'Couples & Household Template',
    'footer.learn_guides': 'Learn & Guides',
    'footer.learning_hub': 'Learning Hub',
    'footer.what_is_budget': 'What Is a Budget?',
    'footer.how_to_create': 'How to Create a Monthly Budget',
    'footer.f3020_explained': '50/30/20 Explained',
    'footer.zbb_explained': 'Zero-Based Explained',
    'footer.f3020_vs_zbb': '50/30/20 vs Zero-Based',
    'footer.copyright': '© {year} My Real Budget (myrealbudget.com). All rights reserved.',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.disclaimer': 'Educational budgeting tools. Not intended as formal investment, tax, or legal advisory.',

    // Dynamic Interpretations
    'interpret.general_surplus': 'Surplus: Your planned spending is {amount} below your income.',
    'interpret.general_deficit': 'Deficit: Your planned spending is {amount} above your income.',
    'interpret.general_balanced': 'Balanced: Your budget is balanced. Every dollar of your income is allocated.',
    'interpret.general_empty': 'Enter your monthly income and planned expenses to balance your budget.',
    'interpret.general_insight_surplus': 'Your planned spending is {amount} below your income ({pct}% of net income remaining).',
    'interpret.general_insight_deficit': 'Your planned spending exceeds your income by {amount} per month.',
    'interpret.general_insight_balanced': 'Your budget balances to exactly zero. Every dollar of your income is allocated.',
    'interpret.general_largest': '{name} is your largest category at {amount}/month ({pct}% of expenses, {incPct}% of income).',
    'interpret.general_savings': 'Planned savings rate: {pct}% of net income.',
    'interpret.general_zero_savings': 'Currently 0% of income is allocated toward savings categories.',
    'interpret.f3020_empty': 'Enter your monthly take-home pay to calculate your 50/30/20 benchmark.',
    'interpret.f3020_needs_over': 'Your Needs take up {pct}% ({amount} over the 50% target).',
    'interpret.f3020_needs_ok': 'Your Needs are at {pct}% of net income (within the 50% target).',
    'interpret.f3020_wants_over': 'Your Wants are {pct}% ({amount} over target).',
    'interpret.f3020_wants_ok': 'Your Wants sit at {pct}%, staying within your 30% lifestyle budget.',
    'interpret.f3020_savings_ok': 'Your Savings & Debt allocations are {pct}% of net pay, meeting or exceeding the 20% target.',
    'interpret.f3020_savings_under': 'Your savings rate is currently {pct}% ({amount} under target).',
    'interpret.f3020_unassigned_over': 'Over allocated: Planned allocations exceed your monthly take-home pay by {amount}.',
    'interpret.f3020_unassigned_balanced': 'Your budget is balanced across Needs, Wants, and Savings.',
    'interpret.f3020_unassigned_surplus': 'You have {amount} remaining unallocated each month.',
    'interpret.zbb_balanced': 'Your budget is balanced to zero. Every dollar has an assigned purpose.',
    'interpret.zbb_under': 'You still have {amount} left to assign. Assign until 0 remains.',
    'interpret.zbb_over': 'You have allocated {amount} more than your income. Reduce allocations to balance to zero.',
    'interpret.zbb_over_badge': '{amount} Over Allocated',
    'interpret.zbb_allocated_exceeds': 'Allocated exceeds income.',

    // Confirmation Prompts & Dialogs
    'confirm.reset_general': 'Reset all values to default sample numbers? Any custom items will be cleared.',
    'confirm.reset_f3020': 'Reset 50/30/20 planner to sample numbers?',
    'confirm.reset_zbb': 'Reset zero-based planner to default sample values?',
    'confirm.delete_category': 'Delete category "{name}" and all its items?',
    'confirm.delete_group': 'Delete the "{name}" group?',
    'prompt.new_group_name': 'Enter a name for your new allocation group:',
    'prompt.new_category_name': 'Enter name for new expense category:',

    // Accessibility
    'aria.toggle_category': 'Toggle category items',
    'aria.category_name': 'Category name',
    'aria.expense_item_name': 'Expense item name',
    'aria.expense_amount': 'Expense amount',
    'aria.expense_frequency': 'Expense frequency',
    'aria.income_item_name': 'Income source name',
    'aria.income_amount': 'Income amount',
    'aria.income_frequency': 'Income frequency',
    'aria.remove_income': 'Remove income source',
    'aria.toggle_needs': 'Toggle Needs items',
    'aria.toggle_wants': 'Toggle Wants items',
    'aria.toggle_savings': 'Toggle Savings items',

    // Methodologies section
    'methods.eyebrow': 'Methodologies',
    'methods.subtitle': 'Different financial stages call for different tools. Select the method that fits your goals, income flow, and lifestyle.',
    'methods.f3020_desc': 'A simple percentage-based starting point. Divides take-home pay into 50% Needs, 30% Wants, and 20% Savings & Debt.',
    'methods.f3020_b1': 'Quick target calculations',
    'methods.f3020_b2': 'Low-maintenance overhead',
    'methods.f3020_b3': 'Ideal for beginners & consistency',
    'methods.zbb_desc': 'Give every dollar a job. Assign your entire income toward expenses, debt payoff, or savings until exactly $0 remains unassigned.',
    'methods.zbb_b1': 'Aggressive debt payoff & savings',
    'methods.zbb_b2': 'Helps reduce untracked spending',
    'methods.zbb_b3': 'Interactive zero-balance meter',
    'methods.gbp_desc': 'Build a custom monthly budget around your real numbers. Normalize weekly, biweekly, and annual bills into a coherent monthly picture.',
    'methods.gbp_b1': 'Custom categories & line items',
    'methods.gbp_b2': 'Weekly/yearly frequency normalization',
    'methods.gbp_b3': 'Plain-language interpretation',

    // Homepage Capabilities
    'home.built_desc': 'My Real Budget provides modern financial planning tools directly in your browser. Whether you are balancing paychecks week-to-week or planning annual savings goals, our suite helps you model, organize, and execute an actionable spending plan without spreadsheets breaking or bank accounts being exposed.',
    'home.feat1_title': 'Create a Monthly Budget',
    'home.feat1_desc': 'Organize all sources of income, fixed obligations, and variable expenses into a synchronized monthly balance sheet with automated totals.',
    'home.feat2_title': 'Plan Weekly Spending',
    'home.feat2_desc': 'Translate monthly targets into practical weekly allowances so day-to-day grocery runs and dining choices do not derail your bottom line.',
    'home.feat3_title': 'Apply the 50/30/20 Rule',
    'home.feat3_desc': 'Distribute after-tax income across 50% essentials, 30% lifestyle choices, and 20% savings and debt acceleration in seconds.',
    'home.feat4_title': 'Create a Zero-Based Budget',
    'home.feat4_desc': 'Assign purpose to every single dollar until unassigned cash reaches zero, giving you a clearer plan for where your money is intended to go.',
    'home.feat5_title': 'Normalize Billing Frequencies',
    'home.feat5_desc': 'Convert weekly paychecks, bi-weekly subscriptions, and semi-annual insurance premiums into true monthly mathematical equivalents.',
    'home.feat6_title': 'Use Budget Planner Templates',
    'home.feat6_desc': 'Export ready-to-run worksheets directly formatted for Google Sheets, Microsoft Excel, and offline personal financial recordkeeping.',

    // Homepage Journey
    'home.journey_eyebrow': 'The Journey',
    'home.how_it_works': 'How My Real Budget Works',
    'home.how_it_works_sub': 'A clear, step-by-step workflow designed to replace financial anxiety with clarity.',
    'home.step1_num': 'Step 01',
    'home.step1_title': 'Build',
    'home.step1_desc': 'Enter your income and planned expenses. Select payment frequencies like weekly groceries or yearly car insurance—our engine normalizes everything into true monthly equivalents.',
    'home.step2_num': 'Step 02',
    'home.step2_title': 'Understand',
    'home.step2_desc': 'See your total inflows, outflows, and remaining cash. Read automated, plain-language insights on your largest spending categories, savings rate, and whether your budget balances.',
    'home.step3_num': 'Step 03',
    'home.step3_title': 'Improve',
    'home.step3_desc': 'Identify specific areas to adjust. Make fine-tuned tweaks, rebalance toward zero, export your plan as a spreadsheet, or download printable templates to stay on track.',

    // Homepage Featured & CTA
    'home.templates_heading': 'Ready-to-Use Budget Templates',
    'home.templates_sub': 'Prefer a spreadsheet? Download clean CSV templates compatible with Microsoft Excel, Google Sheets, and Apple Numbers.',
    'home.browse_templates': 'Browse all templates →',
    'home.format_csv': 'Format: CSV / Sheets',
    'home.view_download': 'View & Download →',
    'home.learn_heading': 'Master Your Money With Real Guides',
    'home.learn_sub': 'In-depth guides on budgeting fundamentals, method comparisons, and realistic cash flow strategies.',
    'home.view_guides': 'View all guides →',
    'home.read_article': 'Read full article →',
    'home.faq_heading': 'Frequently Asked Questions About Budget Planning',
    'home.faq_sub': 'Everything you need to know about setting up a realistic budget, choosing between the 50/30/20 rule and zero-based budgeting, and using free planner templates.',
    'home.cta_eyebrow': 'Get Started Today',
    'home.cta_heading': 'Ready to build a budget that actually works?',
    'home.cta_sub': 'No accounts. No credit cards. No connecting bank logins. Just clean, realistic numbers to give you control over your financial life.',
    'home.open_free_planner': 'Open Free Budget Planner',
    'home.download_templates': 'Download Templates',

    // Actions & Core Strings
    'actions.delete': 'Delete',
    'actions.save': 'Save',
    'actions.reset': 'Reset',
    'common.income': 'Income',
    'common.expenses': 'Expenses',
    'common.needs': 'Needs',
    'common.wants': 'Wants',
    'common.savings': 'Savings',
    'common.debt': 'Debt',
    'common.over_budget': 'Over Budget',
    'common.under_allocated': 'Under-Allocated',
    'common.new_need': 'New Need Line Item',
    'common.new_want': 'New Want Line Item',
    'common.new_savings': 'New Savings / Debt Item',
    'confirm.reset_503020': 'Reset 50/30/20 planner to sample numbers?',

    // Switcher HTML descriptions
    'gbp.switch_methods_desc': 'Switch to the <a href="/50-30-20-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">50/30/20 Method</a> for percentage-based targets, or the <a href="/zero-based-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Zero-Based Method</a> to allocate every dollar to zero.',
    'f3020.switch_methods_desc': 'Switch to the <a href="/budget-planner/" class="text-[#0070f3] underline hover:text-[#0761d1]">General Budget</a> for flexible categories, or the <a href="/zero-based-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Zero-Based Method</a> to allocate every dollar to zero.',
    'zbb.switch_methods_desc': 'Switch to the <a href="/budget-planner/" class="text-[#0070f3] underline hover:text-[#0761d1]">General Budget</a> for flexible categories, or the <a href="/50-30-20-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">50/30/20 Method</a> for percentage-based targets.',

    // Planners & Guides
    'f3020.eyebrow': 'Budgeting Framework',
    'f3020.guide_title': 'Remember: 50/30/20 is a guide, not a law',
    'f3020.guide_desc': 'In high-cost-of-living metropolitan areas, housing alone often consumes 35–45% of income, pushing Needs toward 60%. If your Needs are higher, look to balance by temporarily scaling back Wants rather than abandoning the plan entirely.',
    'f3020.calc_eyebrow': 'Interactive Calculator',
    'f3020.calc_title': 'Interactive 50/30/20 Planner & Target Comparison',
    'f3020.calc_desc': 'Enter your net income to generate automatic benchmark targets, then plug in your actual items to see how closely your real spending aligns.',
    'zbb.eyebrow': 'Intentional Cash Flow',
    'zbb.calc_eyebrow': 'Interactive Tool',
    'zbb.calc_title': 'Interactive Zero-Based Budget Builder',
    'zbb.calc_desc': 'Enter your total net income, assign dollars to your custom category envelopes, and watch the balance meter reach zero.',

    // Templates UI
    'templates.quick_jump': 'Quick Jump:',
    'templates.download_csv': 'Download CSV',
    'templates.use_tool': 'Use Interactive Tool',
    'templates.best_for': 'Best For & Target Audience',
    'templates.structure_highlights': 'Template Structure & Highlights',

    // Learn UI
    'learn.try_f3020_tool': 'Try the 50/30/20 Budget Tool',
    'learn.compare_zbb': 'Compare with Zero-Based Budget',

    // Error Pages
    'error.404_eyebrow': 'Error 404 • Page Not Found',
    'error.404_title': "This Page Isn't in the Budget",
    'error.404_desc': 'The link you followed may be outdated, or the address may have been mistyped. Rest assured, your saved budget calculations on your device remain safe.',
    'error.return_home': 'Return to Home',
    'error.popular_destinations': 'Popular Destinations',
    'error.500_eyebrow': 'Error 500 • Internal Error',
    'error.500_title': 'Something Went Temporarily Wrong',
    'error.500_desc': "We encountered an unexpected technical issue processing this request. Because your budgets are calculated and saved in your device's browser, your data is completely intact.",
    'error.reload_page': 'Reload Page',
    'error.data_safe': 'Your Local Data Is Safe',
    'error.data_safe_desc': "My Real Budget doesn't transmit your calculations to remote databases. If this error persists, our technical team may be rolling out an update. Please check back in a few minutes.",

    // Accessibility & Controls
    'aria.select_currency': 'Select Budget Currency',
    'aria.select_language': 'Select Interface Language',
    'aria.switch_light': 'Switch to light mode',
    'aria.switch_dark': 'Switch to dark mode',
  },
  es: {
    // Navigation & Header
    'nav.navigation': 'Navegación',
    'nav.preferences': 'Preferencias',
    'nav.budget_planner': 'Planificador',
    'nav.f3020_budget': 'Presupuesto 50/30/20',
    'nav.f3020_compact': '50/30/20',
    'nav.zero_based_budget': 'Presupuesto Base Cero',
    'nav.zero_based_compact': 'Base Cero',
    'nav.templates': 'Plantillas',
    'nav.learn': 'Aprender',
    'nav.start_budget': 'Iniciar Planificador',
    'nav.theme': 'Modo de Tema',
    'nav.brand': 'My Real Budget',

    // Common Controls & Badges
    'common.autosaved': 'Guardado localmente en este dispositivo',
    'common.export_csv': 'Exportar CSV',
    'common.reset_defaults': 'Restablecer Valores',
    'common.currency': 'Moneda',
    'common.language': 'Idioma',
    'common.method': 'Método de Presupuesto:',
    'common.general_budget': 'Presupuesto General',
    'common.f3020_method': 'Método 50/30/20',
    'common.zero_based_method': 'Método Base Cero',
    'common.spreadsheet_templates': 'Plantillas de Hojas',
    'common.try_another_method': '¿Quieres probar otro método de presupuesto?',
    'common.add_item': 'Agregar elemento',
    'common.add_income': 'Agregar Fuente de Ingresos',
    'common.add_category': 'Agregar Categoría Personalizada',
    'common.add_allocation_group': 'Agregar Nuevo Grupo de Asignación',
    'common.new_allocation': 'Nueva Asignación',
    'common.expand_all': 'Expandir todo',
    'common.collapse_all': 'Contraer todo',
    'common.per_month': '/mes',
    'common.private_local': '100% Privado y Local',
    'common.no_account': 'Sin Cuenta Necesaria',
    'common.free_templates': 'Plantillas y Herramientas Gratis',
    'common.remove_item': 'Eliminar elemento',
    'common.remove_category': 'Eliminar categoría completa',

    // Frequencies
    'freq.weekly': 'Semanal',
    'freq.biweekly': 'Quincenal',
    'freq.monthly': 'Mensual',
    'freq.quarterly': 'Trimestral',
    'freq.yearly': 'Anual',

    // Summary & Metrics
    'summary.budget_summary': 'Resumen del Presupuesto',
    'summary.monthly_income': 'Ingreso Mensual',
    'summary.planned_expenses': 'Gastos Planificados',
    'summary.total_allocated': 'Total Asignado',
    'summary.remaining': 'Restante',
    'summary.left_to_assign': 'Por Asignar',
    'summary.monthly_surplus': 'Superávit Mensual',
    'summary.monthly_deficit': 'Déficit Mensual',
    'summary.net_balance': 'Balance Neto',
    'summary.net_cash_flow': 'Flujo de Caja Neto',
    'summary.balanced': 'Equilibrado',
    'summary.over_budget': 'Sobre Presupuesto',
    'summary.over_allocated': 'Sobre-Asignado',
    'summary.surplus': 'Superávit',
    'summary.deficit': 'Déficit',
    'summary.target': 'Objetivo',
    'summary.actual': 'Real',
    'summary.on_target': 'En Objetivo',
    'summary.under': 'debajo',
    'summary.over': 'encima',
    'summary.outflows': 'Salidas',
    'summary.actual_outflow': 'Salida Real:',
    'summary.cash_breakdown': 'Desglose de Flujo de Caja',
    'summary.top_categories': 'Mayores Gastos Mensuales',
    'summary.spent_pct': '{pct}% gastado',
    'summary.assigned_pct': '{pct}% asignado',
    'summary.available_pct': '100% disponible',
    'summary.income_spent': 'Ingresos Gastados',
    'summary.income_remaining': 'Ingresos Restantes',
    'summary.savings_investments': 'Ahorros e Inversiones',
    'summary.remaining_cash': 'Dinero Restante',
    'gbp.start_entering': 'Comienza ingresando tu salario neto mensual arriba.',

    // General Budget Planner Specific
    'gbp.heading': 'Planificador de Presupuesto Mensual',
    'gbp.subtitle': 'Planifica tus ingresos y gastos con normalización automática de frecuencia. Entiende a dónde va tu dinero y diseña un presupuesto realista.',
    'gbp.income_section': '1. Ingresos Mensuales',
    'gbp.income_desc': 'Ingresa todas tus fuentes de ingresos. Elige con qué frecuencia cobras.',
    'gbp.normalized_total': 'Total Normalizado',
    'gbp.expenses_section': '2. Gastos Planificados',
    'gbp.expenses_desc': 'Define montos y frecuencias. Los gastos anuales y semanales se normalizan a mensuales.',
    'gbp.normalized_expenses': 'Gastos Normalizados',
    'gbp.live_assessment': 'Perspectivas Dinámicas del Presupuesto',
    'gbp.empty_categories': 'Aún no hay categorías de gastos con valores.',

    // 50/30/20 Planner Specific
    'f3020.heading': 'Calculadora y Planificador 50/30/20',
    'f3020.subtitle': 'Equilibra tus finanzas con la regla clásica 50/30/20. Asigna 50% a Necesidades, 30% a Deseos y 20% a Ahorros y Deudas.',
    'f3020.take_home_label': 'Ingreso Neto Mensual (Después de Impuestos)',
    'f3020.take_home_desc': 'Ingresa tu ingreso neto mensual total. Si cobras quincenalmente, multiplica tu sueldo por 26 y divide entre 12.',
    'f3020.needs_title': 'Necesidades',
    'f3020.needs_target_label': '(Objetivo: 50%)',
    'f3020.needs_desc': 'Vivienda, servicios, comida, transporte, seguro, pagos mínimos de deudas.',
    'f3020.add_need': 'Agregar Línea de Necesidad',
    'f3020.wants_title': 'Deseos',
    'f3020.wants_target_label': '(Objetivo: 30%)',
    'f3020.wants_desc': 'Restaurantes, entretenimiento, compras, suscripciones, vacaciones, ocio.',
    'f3020.add_want': 'Agregar Línea de Deseo',
    'f3020.savings_title': 'Ahorros y Deudas',
    'f3020.savings_target_label': '(Objetivo: 20%)',
    'f3020.savings_desc': 'Fondo de emergencia, jubilación, inversiones, pago acelerado de deuda.',
    'f3020.add_saving': 'Agregar Línea de Ahorro/Deuda',
    'f3020.rule_summary': 'Desglose de la Regla 50/30/20',
    'f3020.net_monthly_income': 'Ingreso Mensual Neto',
    'f3020.unassigned_cash': 'Dinero sin Asignar:',

    // Zero-Based Planner Specific
    'zbb.heading': 'Calculadora y Planificador Base Cero',
    'zbb.subtitle': 'Asigna un propósito a cada unidad monetaria hasta que reste cero por asignar.',
    'zbb.monthly_net_income': 'Ingreso Neto Mensual',
    'zbb.income_desc': 'Tus ingresos netos totales después de impuestos para el mes.',
    'zbb.add_group': 'Agregar Grupo de Asignación',
    'zbb.allocated_progress': 'Progreso Total Asignado',
    'zbb.envelopes_summary': 'Desglose por Categorías',
    'zbb.zero_balance_rule': 'La Fórmula Base Cero',
    'zbb.zero_balance_desc': 'Ingresos − Todas las Asignaciones = 0',
    'zbb.income_label': 'Ingreso Mensual Neto Total a Asignar',
    'zbb.income_sub': 'El fondo inicial de dinero para el mes. Tu objetivo es asignar cada centavo hasta que queden $0.',
    'zbb.left_to_assign': 'Por Asignar',
    'zbb.budget_balanced': 'Presupuesto Equilibrado',
    'zbb.over_allocated': 'Sobre Asignado',
    'zbb.zero_balance_title': 'Balance Base Cero',
    'zbb.income_pool': 'Fondo de Ingresos',
    'zbb.total_allocated': 'Total Asignado',
    'zbb.allocation_rate': 'Tasa de Asignación',
    'zbb.assigned_vs_available': 'Asignado vs Disponible',
    'zbb.strategy_title': 'Cómo llegar a Cero:',
    'zbb.strategy_leftover': 'Si sobra dinero: No lo dejes flotando. Asígnalo a pago de deudas, retiro o fondo para imprevistos.',
    'zbb.strategy_negative': 'Si es negativo: Has asignado más de lo que ganas. Reduce salidas o compras discrecionales hasta alcanzar $0.',
    'zbb.add_item_to': 'Agregar elemento a {group}',
    'zbb.goal_reached_msg': '<strong>¡Objetivo cumplido!</strong> Tu presupuesto está equilibrado a cero. Cada unidad monetaria tiene un destino asignado.',
    'zbb.left_to_assign_msg': 'Tienes <strong>{amount}</strong> por asignar. Asigna el resto hasta que queden {zero}.',
    'zbb.over_allocated_msg': 'Has asignado <strong class="text-[#ee0000]">{amount}</strong> más que tus ingresos.',
    'zbb.badge_balanced': 'Equilibrado ({zero})',
    'zbb.badge_left': '{amount} Por Asignar',
    'zbb.badge_over': '{amount} Sobre Asignado',
    'zbb.sub_balanced': 'Todos los ingresos asignados a cero.',
    'zbb.sub_left': 'Asigna el resto hasta {zero}.',
    'zbb.sub_over': 'Lo asignado excede los ingresos.',
    'zbb.pct_assigned': '{pct}% asignado',
    'prompt.new_group_default': 'Grupo de Asignación Especial',

    // Homepage Specific
    'home.eyebrow': 'Planificación Práctica de Flujo de Caja',
    'home.hero_title': 'Planificador de Presupuesto para el Dinero Real',
    'home.hero_p': 'Toma el control de tus finanzas personales con un planificador online intuitivo diseñado para un flujo de caja realista. Modela ingresos mensuales, equilibra necesidades y deseos con la regla 50/30/20 y descarga plantillas gratuitas.',
    'home.explore_methods': 'Explorar Métodos de Presupuesto',
    'home.preview_title': 'TU PRESUPUESTO MENSUAL',
    'home.preview_takehome': 'Ingreso Neto Mensual',
    'home.preview_income': 'Ingresos',
    'home.preview_distribution': 'Distribución del Dinero',
    'home.preview_assigned': '100% Asignado',
    'home.preview_needs': 'Necesidades',
    'home.preview_needs_sub': 'Alquiler, comida, servicios',
    'home.preview_wants': 'Deseos',
    'home.preview_wants_sub': 'Restaurantes, ocio, aficiones',
    'home.preview_savings': 'Ahorros',
    'home.preview_savings_sub': 'Fondo de emergencia, deudas',
    'home.preview_remaining': 'Restante sin Asignar',
    'home.core_capabilities': 'Capacidades Principales',
    'home.built_for_real_life': 'Un Planificador Creado para la Vida Real',
    'home.choose_how_to_budget': 'Elige cómo quieres presupuestar',
    'home.open_f3020': 'Abrir Planificador 50/30/20 →',
    'home.open_zbb': 'Abrir Planificador Base Cero →',
    'home.open_gbp': 'Abrir Planificador General →',

    // Templates Page Specific
    'templates.eyebrow': 'Catálogo de Plantillas',
    'templates.heading': 'Directorio de Plantillas de Presupuesto',
    'templates.desc': 'Encuentra la plantilla adecuada para tu situación. Cada hoja de cálculo es completamente gratuita para descargar o usar en línea.',
    'templates.who_for': 'Para quién es:',
    'templates.get_template': 'Obtener Plantilla',
    'templates.online_tool': 'Herramienta Online',
    'templates.help_title': '¿Necesitas ayuda para elegir una plantilla?',

    // Learn Page Specific
    'learn.eyebrow': 'Centro de Conocimiento',
    'learn.heading': 'Centro de Aprendizaje de Presupuestos',
    'learn.desc': 'Guías claras y directas para ayudarte a entender tus finanzas, elegir el mejor método y construir hábitos duraderos.',
    'learn.read_guide': 'Leer Guía Completa',
    'learn.put_into_practice': 'Pon el Conocimiento en Práctica',
    'learn.ready_to_plan': '¿Listo para calcular tus números?',
    'learn.open_planner': 'Abrir Planificador de Presupuesto',

    // Footer Specific
    'footer.mission': 'Crea un presupuesto que realmente funcione para ti. Planifica tu flujo de caja con números reales y frecuencias normalizadas.',
    'footer.budget_methods': 'Métodos de Presupuesto',
    'footer.general_planner': 'Planificador de Presupuesto General',
    'footer.f3020_rule': 'Regla de Presupuesto 50/30/20',
    'footer.zero_based': 'Presupuesto Base Cero',
    'footer.freq_normalization': 'Normalización de Frecuencias',
    'footer.templates_tools': 'Plantillas y Herramientas',
    'footer.planner_template': 'Plantilla de Planificador de Presupuesto',
    'footer.all_templates': 'Todas las Plantillas de Presupuesto',
    'footer.simple_monthly': 'Plantilla Mensual Simple',
    'footer.student_template': 'Plantilla para Estudiantes',
    'footer.household_template': 'Plantilla para Parejas y Hogar',
    'footer.learn_guides': 'Aprender y Guías',
    'footer.learning_hub': 'Centro de Aprendizaje',
    'footer.what_is_budget': '¿Qué es un Presupuesto?',
    'footer.how_to_create': 'Cómo Crear un Presupuesto Mensual',
    'footer.f3020_explained': '50/30/20 Explicado',
    'footer.zbb_explained': 'Base Cero Explicado',
    'footer.f3020_vs_zbb': '50/30/20 vs Base Cero',
    'footer.copyright': '© {year} My Real Budget (myrealbudget.com). Todos los derechos reservados.',
    'footer.about': 'Sobre Nosotros',
    'footer.contact': 'Contacto',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos y Condiciones',
    'footer.disclaimer': 'Herramientas educativas de presupuesto. No constituye asesoría formal de inversiones, impuestos o legal.',

    // Dynamic Interpretations
    'interpret.general_surplus': 'Superávit: Tus gastos planificados están {amount} por debajo de tus ingresos.',
    'interpret.general_deficit': 'Déficit: Tus gastos planificados son {amount} superiores a tus ingresos.',
    'interpret.general_balanced': 'Equilibrado: Tu presupuesto está equilibrado. Todos tus ingresos están asignados.',
    'interpret.general_empty': 'Ingresa tus ingresos y gastos para balancear tu presupuesto.',
    'interpret.general_insight_surplus': 'Tus gastos planificados están {amount} por debajo de tus ingresos ({pct}% restante).',
    'interpret.general_insight_deficit': 'Tus gastos planificados superan tus ingresos por {amount} al mes.',
    'interpret.general_insight_balanced': 'Tu presupuesto se equilibra exactamente a cero. Todos los ingresos están asignados.',
    'interpret.general_largest': '{name} es tu categoría más grande con {amount}/mes ({pct}% de gastos, {incPct}% de ingresos).',
    'interpret.general_savings': 'Tasa de ahorro planificada: {pct}% de los ingresos netos.',
    'interpret.general_zero_savings': 'Actualmente el 0% de los ingresos está destinado al ahorro.',
    'interpret.f3020_empty': 'Ingresa tu ingreso neto mensual para calcular tu meta 50/30/20.',
    'interpret.f3020_needs_over': 'Tus Necesidades ocupan el {pct}% ({amount} sobre el objetivo del 50%).',
    'interpret.f3020_needs_ok': 'Tus Necesidades están en el {pct}% del ingreso neto (dentro del objetivo del 50%).',
    'interpret.f3020_wants_over': 'Tus Deseos representan el {pct}% ({amount} sobre el objetivo).',
    'interpret.f3020_wants_ok': 'Tus Deseos se sitúan en el {pct}%, dentro de tu presupuesto del 30%.',
    'interpret.f3020_savings_ok': 'Tus Ahorros y Deudas son el {pct}% del salario neto, cumpliendo la meta del 20%.',
    'interpret.f3020_savings_under': 'Tu tasa de ahorro es actualmente del {pct}% ({amount} bajo el objetivo).',
    'interpret.f3020_unassigned_over': 'Sobre-asignado: Las asignaciones superan tu sueldo neto en {amount}.',
    'interpret.f3020_unassigned_balanced': 'Tu presupuesto está equilibrado en Necesidades, Deseos y Ahorros.',
    'interpret.f3020_unassigned_surplus': 'Tienes {amount} restante sin asignar cada mes.',
    'interpret.zbb_balanced': 'Tu presupuesto está equilibrado a cero. Cada unidad tiene un fin asignado.',
    'interpret.zbb_under': 'Aún tienes {amount} por asignar. Asigna hasta que reste 0.',
    'interpret.zbb_over': 'Has asignado {amount} más que tus ingresos. Reduce asignaciones para llegar a cero.',
    'interpret.zbb_over_badge': '{amount} Sobre-Asignado',
    'interpret.zbb_allocated_exceeds': 'Lo asignado supera los ingresos.',

    // Confirmation Prompts & Dialogs
    'confirm.reset_general': '¿Restablecer todos los valores a los números de ejemplo? Se borrarán los elementos personalizados.',
    'confirm.reset_f3020': '¿Restablecer el planificador 50/30/20 a números de muestra?',
    'confirm.reset_zbb': '¿Restablecer el planificador base cero a valores predeterminados?',
    'confirm.delete_category': '¿Eliminar la categoría "{name}" y todos sus elementos?',
    'confirm.delete_group': '¿Eliminar el grupo "{name}"?',
    'prompt.new_group_name': 'Ingresa un nombre para tu nuevo grupo de asignación:',
    'prompt.new_category_name': 'Ingresa el nombre de la nueva categoría de gastos:',

    // Accessibility
    'aria.toggle_category': 'Alternar elementos de categoría',
    'aria.category_name': 'Nombre de categoría',
    'aria.expense_item_name': 'Nombre del gasto',
    'aria.expense_amount': 'Monto del gasto',
    'aria.expense_frequency': 'Frecuencia del gasto',
    'aria.income_item_name': 'Nombre de fuente de ingresos',
    'aria.income_amount': 'Monto de ingresos',
    'aria.income_frequency': 'Frecuencia de ingresos',
    'aria.remove_income': 'Eliminar fuente de ingresos',
    'aria.toggle_needs': 'Alternar elementos de Necesidades',
    'aria.toggle_wants': 'Alternar elementos de Deseos',
    'aria.toggle_savings': 'Alternar elementos de Ahorros',

    // Methodologies section
    'methods.eyebrow': 'Metodologías',
    'methods.subtitle': 'Las diferentes etapas financieras requieren diferentes herramientas. Selecciona el método que se adapte a tus metas, ingresos y estilo de vida.',
    'methods.f3020_desc': 'Un punto de partida sencillo basado en porcentajes. Divide el sueldo neto en 50% Necesidades, 30% Deseos y 20% Ahorro y Deudas.',
    'methods.f3020_b1': 'Cálculos rápidos de objetivos',
    'methods.f3020_b2': 'Bajo esfuerzo de mantenimiento',
    'methods.f3020_b3': 'Ideal para principiantes y constancia',
    'methods.zbb_desc': 'Dale una función a cada unidad monetaria. Asigna todos tus ingresos a gastos, deudas o ahorros hasta que queden exactamente $0 sin asignar.',
    'methods.zbb_b1': 'Amortización acelerada de deudas y ahorro',
    'methods.zbb_b2': 'Ayuda a reducir gastos no registrados',
    'methods.zbb_b3': 'Medidor interactivo de balance cero',
    'methods.gbp_desc': 'Diseña un presupuesto mensual personalizado con tus cifras reales. Normaliza gastos semanales, quincenales y anuales en un panorama coherente.',
    'methods.gbp_b1': 'Categorías y partidas personalizadas',
    'methods.gbp_b2': 'Normalización semanal/anual de frecuencias',
    'methods.gbp_b3': 'Análisis claro en lenguaje cotidiano',

    // Homepage Capabilities
    'home.built_desc': 'My Real Budget ofrece herramientas modernas de finanzas en tu navegador. Modela, organiza y ejecuta un plan de gastos realista sin hojas de cálculo complejas ni exponer cuentas bancarias.',
    'home.feat1_title': 'Crea un Presupuesto Mensual',
    'home.feat1_desc': 'Organiza fuentes de ingresos, obligaciones fijas y gastos variables en un balance mensual sincronizado.',
    'home.feat2_title': 'Planifica Gastos Semanales',
    'home.feat2_desc': 'Convierte metas mensuales en asignaciones semanales prácticas para evitar desvíos.',
    'home.feat3_title': 'Aplica la Regla 50/30/20',
    'home.feat3_desc': 'Distribuye ingresos netos en 50% esenciales, 30% estilo de vida y 20% ahorro y deudas en segundos.',
    'home.feat4_title': 'Crea un Presupuesto Base Cero',
    'home.feat4_desc': 'Asigna un propósito a cada unidad hasta que lo no asignado llegue a cero.',
    'home.feat5_title': 'Normaliza Frecuencias de Pago',
    'home.feat5_desc': 'Convierte sueldos semanales, abonos y seguros anuales a equivalentes mensuales exactos.',
    'home.feat6_title': 'Usa Plantillas de Presupuesto',
    'home.feat6_desc': 'Exporta hojas de cálculo listas para Google Sheets, Microsoft Excel y registros personales.',

    // Homepage Journey
    'home.journey_eyebrow': 'El Proceso',
    'home.how_it_works': 'Cómo Funciona My Real Budget',
    'home.how_it_works_sub': 'Un flujo paso a paso diseñado para sustituir la incertidumbre por claridad.',
    'home.step1_num': 'Paso 01',
    'home.step1_title': 'Construir',
    'home.step1_desc': 'Ingresa ingresos y gastos previstos. Selecciona frecuencias como compras semanales o seguro anual: nuestro motor lo normaliza todo.',
    'home.step2_num': 'Paso 02',
    'home.step2_title': 'Comprender',
    'home.step2_desc': 'Visualiza entradas, salidas y dinero restante con análisis automáticos en lenguaje claro.',
    'home.step3_num': 'Paso 03',
    'home.step3_title': 'Mejorar',
    'home.step3_desc': 'Ajusta partidas, equilibra hacia cero, exporta a hoja de cálculo o descarga plantillas.',

    // Homepage Featured & CTA
    'home.templates_heading': 'Plantillas de Presupuesto Listas para Usar',
    'home.templates_sub': '¿Prefieres una hoja de cálculo? Descarga plantillas CSV compatibles con Excel, Google Sheets y Numbers.',
    'home.browse_templates': 'Ver todas las plantillas →',
    'home.format_csv': 'Formato: CSV / Hojas',
    'home.view_download': 'Ver y Descargar →',
    'home.learn_heading': 'Domina tu Dinero con Guías Prácticas',
    'home.learn_sub': 'Guías completas sobre conceptos básicos de presupuesto, comparativas de métodos y estrategias.',
    'home.view_guides': 'Ver todas las guías →',
    'home.read_article': 'Leer artículo completo →',
    'home.faq_heading': 'Preguntas Frecuentes sobre Planificación de Presupuesto',
    'home.faq_sub': 'Todo lo que necesitas saber para crear un presupuesto realista y elegir el mejor método.',
    'home.cta_eyebrow': 'Empieza Hoy',
    'home.cta_heading': '¿Listo para crear un presupuesto que funcione?',
    'home.cta_sub': 'Sin cuentas ni tarjetas de crédito ni accesos bancarios. Solo números claros y realistas para controlar tu dinero.',
    'home.open_free_planner': 'Abrir Planificador Gratis',
    'home.download_templates': 'Descargar Plantillas',

    // Actions & Core Strings
    'actions.delete': 'Eliminar',
    'actions.save': 'Guardar',
    'actions.reset': 'Restablecer',
    'common.income': 'Ingresos',
    'common.expenses': 'Gastos',
    'common.needs': 'Necesidades',
    'common.wants': 'Deseos',
    'common.savings': 'Ahorros',
    'common.debt': 'Deuda',
    'common.over_budget': 'Sobre Presupuesto',
    'common.under_allocated': 'Sub-Asignado',
    'common.new_need': 'Nueva Línea de Necesidad',
    'common.new_want': 'Nueva Línea de Deseo',
    'common.new_savings': 'Nueva Línea de Ahorro/Deuda',
    'confirm.reset_503020': '¿Restablecer el planificador 50/30/20 a números de muestra?',

    // Switcher HTML descriptions
    'gbp.switch_methods_desc': 'Cambia al <a href="/50-30-20-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Método 50/30/20</a> para objetivos porcentuales, o al <a href="/zero-based-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Método Base Cero</a> para asignar cada unidad a cero.',
    'f3020.switch_methods_desc': 'Cambia al <a href="/budget-planner/" class="text-[#0070f3] underline hover:text-[#0761d1]">Presupuesto General</a> para categorías flexibles, o al <a href="/zero-based-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Método Base Cero</a> para asignar cada unidad a cero.',
    'zbb.switch_methods_desc': 'Cambia al <a href="/budget-planner/" class="text-[#0070f3] underline hover:text-[#0761d1]">Presupuesto General</a> para categorías flexibles, o al <a href="/50-30-20-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Método 50/30/20</a> para objetivos porcentuales.',

    // Planners & Guides
    'f3020.eyebrow': 'Marco de Presupuesto',
    'f3020.guide_title': 'Recuerda: 50/30/20 es una guía, no una ley',
    'f3020.guide_desc': 'En ciudades caras, la vivienda suele consumir entre el 35% y el 45% del sueldo, llevando las Necesidades al 60%. Si es tu caso, compensa reduciendo Deseos en lugar de abandonar el plan.',
    'f3020.calc_eyebrow': 'Calculadora Interactiva',
    'f3020.calc_title': 'Planificador Interactivo 50/30/20 y Comparación con Objetivos',
    'f3020.calc_desc': 'Ingresa tu ingreso neto para generar metas automáticas y compara tus gastos reales.',
    'zbb.eyebrow': 'Flujo de Caja Intencional',
    'zbb.calc_eyebrow': 'Herramienta Interactiva',
    'zbb.calc_title': 'Constructor Interactivo de Presupuesto Base Cero',
    'zbb.calc_desc': 'Ingresa tu ingreso neto, asigna dinero a tus categorías y observa cómo el medidor llega a cero.',

    // Templates UI
    'templates.quick_jump': 'Acceso Rápido:',
    'templates.download_csv': 'Descargar CSV',
    'templates.use_tool': 'Usar Herramienta Interactiva',
    'templates.best_for': 'Ideal Para y Audiencia',
    'templates.structure_highlights': 'Estructura y Características',

    // Learn UI
    'learn.try_f3020_tool': 'Probar la Herramienta 50/30/20',
    'learn.compare_zbb': 'Comparar con Presupuesto Base Cero',

    // Error Pages
    'error.404_eyebrow': 'Error 404 • Página No Encontrada',
    'error.404_title': 'Esta Página No Está en el Presupuesto',
    'error.404_desc': 'El enlace puede estar desactualizado o mal escrito. Tus datos guardados localmente siguen seguros.',
    'error.return_home': 'Volver al Inicio',
    'error.popular_destinations': 'Destinos Populares',
    'error.500_eyebrow': 'Error 500 • Error Interno',
    'error.500_title': 'Algo Salió Mal Temporalmente',
    'error.500_desc': 'Ocurrió un problema técnico inesperado. Debido a que tus presupuestos se calculan y guardan en tu navegador, tus datos están intactos.',
    'error.reload_page': 'Recargar Página',
    'error.data_safe': 'Tus Datos Locales Están Seguros',
    'error.data_safe_desc': 'My Real Budget no envía tus cálculos a bases de datos remotas. Vuelve a intentarlo en unos minutos.',

    // Accessibility & Controls
    'aria.select_currency': 'Seleccionar Moneda del Presupuesto',
    'aria.select_language': 'Seleccionar Idioma de la Interfaz',
    'aria.switch_light': 'Cambiar a modo claro',
    'aria.switch_dark': 'Cambiar a modo oscuro',
  },
  fr: {
    // Navigation & Header
    'nav.navigation': 'Navigation',
    'nav.preferences': 'Préférences',
    'nav.budget_planner': 'Planificateur',
    'nav.f3020_budget': 'Budget 50/30/20',
    'nav.f3020_compact': '50/30/20',
    'nav.zero_based_budget': 'Budget Base Zéro',
    'nav.zero_based_compact': 'Base Zéro',
    'nav.templates': 'Modèles',
    'nav.learn': 'Apprendre',
    'nav.start_budget': 'Démarrer le Budget',
    'nav.theme': 'Mode Thème',
    'nav.brand': 'My Real Budget',

    // Common Controls & Badges
    'common.autosaved': 'Enregistré localement sur cet appareil',
    'common.export_csv': 'Exporter CSV',
    'common.reset_defaults': 'Réinitialiser',
    'common.currency': 'Devise',
    'common.language': 'Langue',
    'common.method': 'Méthode de Budget :',
    'common.general_budget': 'Budget Général',
    'common.f3020_method': 'Méthode 50/30/20',
    'common.zero_based_method': 'Méthode Base Zéro',
    'common.spreadsheet_templates': 'Modèles Tableur',
    'common.try_another_method': 'Envie d\'essayer une autre méthode ?',
    'common.add_item': 'Ajouter un élément',
    'common.add_income': 'Ajouter une Source de Revenus',
    'common.add_category': 'Ajouter une Catégorie Personnalisée',
    'common.add_allocation_group': 'Ajouter un Groupe d\'Allocation',
    'common.new_allocation': 'Nouvelle Allocation',
    'common.expand_all': 'Tout déplier',
    'common.collapse_all': 'Tout replier',
    'common.per_month': '/mois',
    'common.private_local': '100% Privé et Local',
    'common.no_account': 'Aucun Compte Requis',
    'common.free_templates': 'Modèles et Outils Gratuits',
    'common.remove_item': 'Supprimer l\'élément',
    'common.remove_category': 'Supprimer toute la catégorie',

    // Frequencies
    'freq.weekly': 'Hebdomadaire',
    'freq.biweekly': 'Bihebdomadaire',
    'freq.monthly': 'Mensuel',
    'freq.quarterly': 'Trimestriel',
    'freq.yearly': 'Annuel',

    // Summary & Metrics
    'summary.budget_summary': 'Résumé du Budget',
    'summary.monthly_income': 'Revenu Mensuel',
    'summary.planned_expenses': 'Dépenses Prévues',
    'summary.total_allocated': 'Total Alloué',
    'summary.remaining': 'Restant',
    'summary.left_to_assign': 'Reste à Assigner',
    'summary.monthly_surplus': 'Surplus Mensuel',
    'summary.monthly_deficit': 'Déficit Mensuel',
    'summary.net_balance': 'Solde Net',
    'summary.net_cash_flow': 'Flux de Trésorerie Net',
    'summary.balanced': 'Équilibré',
    'summary.over_budget': 'Dépassement',
    'summary.over_allocated': 'Sur-Alloué',
    'summary.surplus': 'Surplus',
    'summary.deficit': 'Déficit',
    'summary.target': 'Cible',
    'summary.actual': 'Réel',
    'summary.on_target': 'Sur la Cible',
    'summary.under': 'en dessous',
    'summary.over': 'au-dessus',
    'summary.outflows': 'Dépenses',
    'summary.actual_outflow': 'Dépenses Réelles :',
    'summary.cash_breakdown': 'Répartition de Trésorerie',
    'summary.top_categories': 'Principales Dépenses Mensuelles',
    'summary.spent_pct': '{pct}% dépensé',
    'summary.assigned_pct': '{pct}% alloué',
    'summary.available_pct': '100% disponible',
    'summary.income_spent': 'Revenus Dépensés',
    'summary.income_remaining': 'Revenus Restants',
    'summary.savings_investments': 'Épargne et Investissements',
    'summary.remaining_cash': 'Argent Restant',
    'gbp.start_entering': 'Commencez par saisir votre salaire net mensuel ci-dessus.',

    // General Budget Planner Specific
    'gbp.heading': 'Planificateur de Budget Mensuel',
    'gbp.subtitle': 'Planifiez vos revenus et dépenses avec normalisation automatique des fréquences. Comprenez où va votre argent.',
    'gbp.income_section': '1. Revenu Mensuel',
    'gbp.income_desc': 'Entrez toutes vos sources de revenus. Choisissez votre fréquence de versement.',
    'gbp.normalized_total': 'Total Normalisé',
    'gbp.expenses_section': '2. Dépenses Prévues',
    'gbp.expenses_desc': 'Définissez montants et fréquences. Les dépenses annuelles et hebdomadaires sont annualisées par mois.',
    'gbp.normalized_expenses': 'Dépenses Normalisées',
    'gbp.live_assessment': 'Aperçu Dynamique du Budget',
    'gbp.empty_categories': 'Aucune catégorie avec des montants pour le moment.',

    // 50/30/20 Planner Specific
    'f3020.heading': 'Calculateur et Planificateur de Budget 50/30/20',
    'f3020.subtitle': 'Équilibrez vos finances avec la règle 50/30/20 : 50 % Besoins, 30 % Envies, 20 % Épargne et Dettes.',
    'f3020.take_home_label': 'Salaire Net Mensuel (Après Impôts)',
    'f3020.take_home_desc': 'Entrez votre revenu net mensuel. Si payé aux deux semaines, multipliez par 26 et divisez par 12.',
    'f3020.needs_title': 'Besoins',
    'f3020.needs_target_label': '(Cible : 50%)',
    'f3020.needs_desc': 'Logement, factures, courses, transport, assurances, remboursements minimaux.',
    'f3020.add_need': 'Ajouter un Élément de Besoin',
    'f3020.wants_title': 'Envies',
    'f3020.wants_target_label': '(Cible : 30%)',
    'f3020.wants_desc': 'Restaurants, sorties, shopping, abonnements, vacances, loisirs.',
    'f3020.add_want': 'Ajouter un Élément d\'Envie',
    'f3020.savings_title': 'Épargne et Dettes',
    'f3020.savings_target_label': '(Cible : 20%)',
    'f3020.savings_desc': 'Fonds d\'urgence, retraite, investissements, remboursement accéléré.',
    'f3020.add_saving': 'Ajouter un Élément d\'Épargne/Dette',
    'f3020.rule_summary': 'Répartition de la Règle 50/30/20',
    'f3020.net_monthly_income': 'Revenu Mensuel Net',
    'f3020.unassigned_cash': 'Trésorerie non Allouée :',

    // Zero-Based Planner Specific
    'zbb.heading': 'Calculateur et Planificateur Budget Base Zéro',
    'zbb.subtitle': 'Donnez une mission à chaque montant jusqu\'à ce que zéro reste à allouer.',
    'zbb.monthly_net_income': 'Revenu Net Mensuel',
    'zbb.income_desc': 'Votre revenu net total après impôts pour le mois.',
    'zbb.add_group': 'Ajouter un Groupe',
    'zbb.allocated_progress': 'Progression Totale Allouée',
    'zbb.envelopes_summary': 'Répartition par Catégories',
    'zbb.zero_balance_rule': 'La Formule Base Zéro',
    'zbb.zero_balance_desc': 'Revenus − Toutes les Allocations = 0',
    'zbb.income_label': 'Revenu Net Mensuel Total à Allouer',
    'zbb.income_sub': 'Le montant de départ pour le mois. Votre objectif est d’allouer chaque centime jusqu’à ce qu’il reste 0.',
    'zbb.left_to_assign': 'Reste à Allouer',
    'zbb.budget_balanced': 'Budget Équilibré',
    'zbb.over_allocated': 'Sur-Alloué',
    'zbb.zero_balance_title': 'Solde Base Zéro',
    'zbb.income_pool': 'Total des Revenus',
    'zbb.total_allocated': 'Total Alloué',
    'zbb.allocation_rate': 'Taux d’Allocation',
    'zbb.assigned_vs_available': 'Alloué vs Disponible',
    'zbb.strategy_title': 'Comment atteindre Zéro :',
    'zbb.strategy_leftover': 'S\'il reste de l\'argent : Ne le laissez pas flotter. Allouez-le à la dette, à la retraite ou à un fonds de prévoyance.',
    'zbb.strategy_negative': 'Si c\'est négatif : Vous avez alloué plus que vos revenus. Réduisez les sorties jusqu’à ce que le solde atteigne 0.',
    'zbb.add_item_to': 'Ajouter un élément à {group}',
    'zbb.goal_reached_msg': '<strong>Objectif atteint !</strong> Votre budget est équilibré à zéro. Chaque unité a une affectation précise.',
    'zbb.left_to_assign_msg': 'Il vous reste <strong>{amount}</strong> à allouer. Continuez jusqu’à ce qu’il reste {zero}.',
    'zbb.over_allocated_msg': 'Vous avez alloué <strong class="text-[#ee0000]">{amount}</strong> de plus que vos revenus.',
    'zbb.badge_balanced': 'Équilibré ({zero})',
    'zbb.badge_left': '{amount} Reste à Allouer',
    'zbb.badge_over': '{amount} Sur-Alloué',
    'zbb.sub_balanced': 'Tous les revenus alloués à zéro.',
    'zbb.sub_left': 'Allouez le reste jusqu’à {zero}.',
    'zbb.sub_over': 'Les montants alloués dépassent les revenus.',
    'zbb.pct_assigned': '{pct}% alloué',
    'prompt.new_group_default': 'Groupe d\'Allocation Spécial',

    // Homepage Specific
    'home.eyebrow': 'Planification Pratique de Trésorerie',
    'home.hero_title': 'Planificateur de Budget Conçu pour la Vraie Vie',
    'home.hero_p': 'Prenez le contrôle de vos finances personnelles avec un planificateur intuitif. Modélisez vos revenus, équilibrez vos dépenses avec la règle 50/30/20 et téléchargez des modèles gratuits.',
    'home.explore_methods': 'Explorer les Méthodes de Budget',
    'home.preview_title': 'VOTRE BUDGET MENSUEL',
    'home.preview_takehome': 'Revenu Net Mensuel',
    'home.preview_income': 'Revenu',
    'home.preview_distribution': 'Répartition du Budget',
    'home.preview_assigned': '100% Alloué',
    'home.preview_needs': 'Besoins',
    'home.preview_needs_sub': 'Loyer, courses, factures',
    'home.preview_wants': 'Envies',
    'home.preview_wants_sub': 'Sorties, loisirs, shopping',
    'home.preview_savings': 'Épargne',
    'home.preview_savings_sub': 'Fonds d\'urgence, dettes',
    'home.preview_remaining': 'Reste non Alloué',
    'home.core_capabilities': 'Capacités Principales',
    'home.built_for_real_life': 'Un Planificateur en Ligne pour la Vie Réelle',
    'home.choose_how_to_budget': 'Choisissez votre méthode de budget',
    'home.open_f3020': 'Ouvrir Planificateur 50/30/20 →',
    'home.open_zbb': 'Ouvrir Planificateur Base Zéro →',
    'home.open_gbp': 'Ouvrir Planificateur Général →',

    // Templates Page Specific
    'templates.eyebrow': 'Catalogue de Modèles',
    'templates.heading': 'Répertoire des Modèles de Budget',
    'templates.desc': 'Trouvez la feuille de calcul adaptée à vos besoins. Tous les modèles sont entièrement gratuits à télécharger ou utiliser en ligne.',
    'templates.who_for': 'Pour qui :',
    'templates.get_template': 'Obtenir le Modèle',
    'templates.online_tool': 'Outil en Ligne',
    'templates.help_title': 'Besoin d\'aide pour choisir un modèle ?',

    // Learn Page Specific
    'learn.eyebrow': 'Centre de Connaissances',
    'learn.heading': 'Centre d\'Apprentissage du Budget',
    'learn.desc': 'Des guides pratiques pour vous aider à comprendre où va votre argent et bâtir des habitudes financières saines.',
    'learn.read_guide': 'Lire le Guide Complet',
    'learn.put_into_practice': 'Mettre les Connaissances en Pratique',
    'learn.ready_to_plan': 'Prêt à planifier vos chiffres ?',
    'learn.open_planner': 'Ouvrir le Planificateur',

    // Footer Specific
    'footer.mission': 'Créez un budget qui fonctionne pour vous. Planifiez votre trésorerie avec des chiffres réels et sans devinettes.',
    'footer.budget_methods': 'Méthodes de Budget',
    'footer.general_planner': 'Planificateur Général',
    'footer.f3020_rule': 'Règle de Budget 50/30/20',
    'footer.zero_based': 'Budget Base Zéro',
    'footer.freq_normalization': 'Normalisation des Fréquences',
    'footer.templates_tools': 'Modèles et Outils',
    'footer.planner_template': 'Modèle de Planificateur',
    'footer.all_templates': 'Tous les Modèles de Budget',
    'footer.simple_monthly': 'Modèle Mensuel Simple',
    'footer.student_template': 'Modèle pour Étudiants',
    'footer.household_template': 'Modèle Couples et Famille',
    'footer.learn_guides': 'Apprendre et Guides',
    'footer.learning_hub': 'Centre de Conseils',
    'footer.what_is_budget': 'Qu\'est-ce qu\'un Budget ?',
    'footer.how_to_create': 'Comment Créer un Budget Mensuel',
    'footer.f3020_explained': '50/30/20 Expliqué',
    'footer.zbb_explained': 'Base Zéro Expliqué',
    'footer.f3020_vs_zbb': '50/30/20 vs Base Zéro',
    'footer.copyright': '© {year} My Real Budget (myrealbudget.com). Tous droits réservés.',
    'footer.about': 'À Propos',
    'footer.contact': 'Contact',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions Générales',
    'footer.disclaimer': 'Outils de budgétisation éducatifs. Ne constitue pas un conseil financier, fiscal ou juridique officiel.',

    // Dynamic Interpretations
    'interpret.general_surplus': 'Surplus : Vos dépenses prévues sont {amount} inférieures à vos revenus.',
    'interpret.general_deficit': 'Déficit : Vos dépenses prévues sont {amount} supérieures à vos revenus.',
    'interpret.general_balanced': 'Équilibré : Votre budget est équilibré. Tous vos revenus sont alloués.',
    'interpret.general_empty': 'Entrez vos revenus et vos dépenses pour équilibrer votre budget.',
    'interpret.general_insight_surplus': 'Vos dépenses prévues sont {amount} inférieures à vos revenus ({pct}% de revenus restant).',
    'interpret.general_insight_deficit': 'Vos dépenses prévues dépassent vos revenus de {amount} par mois.',
    'interpret.general_insight_balanced': 'Votre budget s\'équilibre exactement à zéro. Tous les revenus sont alloués.',
    'interpret.general_largest': '{name} est votre plus grande catégorie avec {amount}/mois ({pct}% des dépenses, {incPct}% des revenus).',
    'interpret.general_savings': 'Taux d\'épargne prévu : {pct}% du revenu net.',
    'interpret.general_zero_savings': 'Actuellement 0% des revenus est alloué à l\'épargne.',
    'interpret.f3020_empty': 'Entrez votre salaire net mensuel pour calculer vos repères 50/30/20.',
    'interpret.f3020_needs_over': 'Vos Besoins représentent {pct}% ({amount} au-dessus de la cible de 50%).',
    'interpret.f3020_needs_ok': 'Vos Besoins sont à {pct}% du revenu net (dans la cible de 50%).',
    'interpret.f3020_wants_over': 'Vos Envies sont à {pct}% ({amount} au-dessus de la cible).',
    'interpret.f3020_wants_ok': 'Vos Envies sont à {pct}%, restant dans votre budget de 30%.',
    'interpret.f3020_savings_ok': 'Vos allocations d\'Épargne et Dettes sont à {pct}%, atteignant la cible de 20%.',
    'interpret.f3020_savings_under': 'Votre taux d\'épargne est actuellement de {pct}% ({amount} sous la cible).',
    'interpret.f3020_unassigned_over': 'Sur-alloué : Les allocations dépassent votre salaire net de {amount}.',
    'interpret.f3020_unassigned_balanced': 'Votre budget est équilibré entre Besoins, Envies et Épargne.',
    'interpret.f3020_unassigned_surplus': 'Il vous reste {amount} non alloué chaque mois.',
    'interpret.zbb_balanced': 'Votre budget est équilibré à zéro. Chaque montant a un rôle défini.',
    'interpret.zbb_under': 'Il vous reste {amount} à assigner. Allouez jusqu\'à atteindre 0.',
    'interpret.zbb_over': 'Vous avez alloué {amount} de plus que vos revenus. Réduisez pour atteindre zéro.',
    'interpret.zbb_over_badge': '{amount} Sur-Alloué',
    'interpret.zbb_allocated_exceeds': 'Les montants alloués dépassent les revenus.',

    // Confirmation Prompts & Dialogs
    'confirm.reset_general': 'Réinitialiser toutes les valeurs aux chiffres d\'exemple ? Les éléments personnalisés seront effacés.',
    'confirm.reset_f3020': 'Réinitialiser le planificateur 50/30/20 aux valeurs d\'exemple ?',
    'confirm.reset_zbb': 'Réinitialiser le planificateur base zéro aux valeurs par défaut ?',
    'confirm.delete_category': 'Supprimer la catégorie "{name}" et tous ses éléments ?',
    'confirm.delete_group': 'Supprimer le groupe "{name}" ?',
    'prompt.new_group_name': 'Entrez un nom pour votre nouveau groupe d\'allocation :',
    'prompt.new_category_name': 'Entrez le nom de la nouvelle catégorie de dépenses :',

    // Accessibility
    'aria.toggle_category': 'Développer ou masquer les éléments de catégorie',
    'aria.category_name': 'Nom de catégorie',
    'aria.expense_item_name': 'Nom de dépense',
    'aria.expense_amount': 'Montant de dépense',
    'aria.expense_frequency': 'Fréquence de dépense',
    'aria.income_item_name': 'Nom de source de revenu',
    'aria.income_amount': 'Montant de revenu',
    'aria.income_frequency': 'Fréquence de revenu',
    'aria.remove_income': 'Supprimer la source de revenu',
    'aria.toggle_needs': 'Développer ou masquer les Besoins',
    'aria.toggle_wants': 'Développer ou masquer les Envies',
    'aria.toggle_savings': 'Développer ou masquer l\'Épargne',

    // Methodologies section
    'methods.eyebrow': 'Méthodologies',
    'methods.subtitle': 'Chaque étape financière nécessite des outils adaptés. Choisissez la méthode qui convient à vos objectifs, vos revenus et votre mode de vie.',
    'methods.f3020_desc': 'Un point de départ simple basé sur des pourcentages. Répartissez votre revenu net : 50% Besoins, 30% Envies et 20% Épargne & Dettes.',
    'methods.f3020_b1': 'Calculs rapides des objectifs',
    'methods.f3020_b2': 'Faible effort d\'entretien',
    'methods.f3020_b3': 'Idéal pour débuter et rester régulier',
    'methods.zbb_desc': 'Donnez un rôle à chaque euro. Affectez l\'intégralité de vos revenus aux dépenses, dettes ou épargne jusqu\'à ce qu\'il reste exactement 0€ non alloué.',
    'methods.zbb_b1': 'Remboursement de dettes et épargne accélérés',
    'methods.zbb_b2': 'Aide à éliminer les dépenses superflues',
    'methods.zbb_b3': 'Indicateur interactif d\'équilibre à zéro',
    'methods.gbp_desc': 'Créez un budget mensuel sur mesure avec vos vrais chiffres. Normalisez vos dépenses hebdomadaires, bimensuelles et annuelles en une vue claire.',
    'methods.gbp_b1': 'Catégories et postes personnalisés',
    'methods.gbp_b2': 'Normalisation des fréquences hebdomadaires/annuelles',
    'methods.gbp_b3': 'Analyses claires et directes',

    // Homepage Capabilities
    'home.built_desc': 'My Real Budget offre des outils financiers modernes dans votre navigateur. Modélisez, organisez et suivez vos dépenses réelles sans tableurs complexes ni partage de comptes bancaires.',
    'home.feat1_title': 'Créer un Budget Mensuel',
    'home.feat1_desc': 'Organisez vos revenus, charges fixes et dépenses variables dans un aperçu synchronisé.',
    'home.feat2_title': 'Planifier les Dépenses Hebdomadaires',
    'home.feat2_desc': 'Convertissez les objectifs mensuels en allocations hebdomadaires pour éviter les dérapages.',
    'home.feat3_title': 'Appliquer la Règle 50/30/20',
    'home.feat3_desc': 'Répartissez instantanément vos revenus : 50% essentiels, 30% loisirs et 20% épargne.',
    'home.feat4_title': 'Construire un Budget Base Zéro',
    'home.feat4_desc': 'Donnez une mission à chaque euro jusqu\'à ce que le solde non alloué atteigne zéro.',
    'home.feat5_title': 'Normaliser les Fréquences',
    'home.feat5_desc': 'Convertissez salaires hebdomadaires et assurances annuelles en équivalents mensuels exacts.',
    'home.feat6_title': 'Utiliser des Modèles de Budget',
    'home.feat6_desc': 'Exportez des feuilles de calcul prêtes pour Google Sheets, Excel et vos finances personnelles.',

    // Homepage Journey
    'home.journey_eyebrow': 'Le Processus',
    'home.how_it_works': 'Comment Fonctionne My Real Budget',
    'home.how_it_works_sub': 'Un parcours étape par étape conçu pour remplacer l\'incertitude par la clarté financière.',
    'home.step1_num': 'Étape 01',
    'home.step1_title': 'Construire',
    'home.step1_desc': 'Saisissez vos revenus et dépenses prévues. Sélectionnez les fréquences : notre moteur normalise tout en montants mensuels.',
    'home.step2_num': 'Étape 02',
    'home.step2_title': 'Comprendre',
    'home.step2_desc': 'Visualisez entrées, sorties et solde restant avec des analyses automatiques en clair.',
    'home.step3_num': 'Étape 03',
    'home.step3_title': 'Améliorer',
    'home.step3_desc': 'Ajustez vos postes, visez l\'équilibre, exportez en CSV ou téléchargez des modèles.',

    // Homepage Featured & CTA
    'home.templates_heading': 'Modèles de Budget Prêts à l\'Emploi',
    'home.templates_sub': 'Vous préférez un tableur ? Téléchargez nos modèles CSV compatibles avec Excel, Google Sheets et Numbers.',
    'home.browse_templates': 'Voir tous les modèles →',
    'home.format_csv': 'Format : CSV / Tableur',
    'home.view_download': 'Voir & Télécharger →',
    'home.learn_heading': 'Maîtrisez Votre Argent avec des Guides Pratiques',
    'home.learn_sub': 'Guides complets sur les bases du budget, comparatifs de méthodes et stratégies éprouvées.',
    'home.view_guides': 'Voir tous les guides →',
    'home.read_article': 'Lire l\'article complet →',
    'home.faq_heading': 'Questions Fréquentes sur la Planification Budgétaire',
    'home.faq_sub': 'Tout ce qu\'il faut savoir pour créer un budget réaliste et choisir la bonne méthode.',
    'home.cta_eyebrow': 'Commencez Dès Aujourd\'hui',
    'home.cta_heading': 'Prêt à créer un budget qui fonctionne vraiment ?',
    'home.cta_sub': 'Sans compte, sans carte bancaire et sans connexion à vos comptes. Juste des chiffres clairs pour maîtriser votre argent.',
    'home.open_free_planner': 'Ouvrir le Planificateur Gratuit',
    'home.download_templates': 'Télécharger les Modèles',

    // Actions & Core Strings
    'actions.delete': 'Supprimer',
    'actions.save': 'Enregistrer',
    'actions.reset': 'Réinitialiser',
    'common.income': 'Revenus',
    'common.expenses': 'Dépenses',
    'common.needs': 'Besoins',
    'common.wants': 'Envies',
    'common.savings': 'Épargne',
    'common.debt': 'Dettes',
    'common.over_budget': 'Budget Dépassé',
    'common.under_allocated': 'Sous-Alloué',
    'common.new_need': 'Nouvelle Ligne de Besoin',
    'common.new_want': 'Nouvelle Ligne d\'Envie',
    'common.new_savings': 'Nouvelle Ligne d\'Épargne/Dette',
    'confirm.reset_503020': 'Réinitialiser le planificateur 50/30/20 aux valeurs d\'exemple ?',

    // Switcher HTML descriptions
    'gbp.switch_methods_desc': 'Passez à la <a href="/50-30-20-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Méthode 50/30/20</a> pour des objectifs en pourcentage, ou au <a href="/zero-based-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Budget Base Zéro</a> pour affecter chaque montant à zéro.',
    'f3020.switch_methods_desc': 'Passez au <a href="/budget-planner/" class="text-[#0070f3] underline hover:text-[#0761d1]">Budget Général</a> pour des catégories flexibles, ou au <a href="/zero-based-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Budget Base Zéro</a> pour affecter chaque montant à zéro.',
    'zbb.switch_methods_desc': 'Passez au <a href="/budget-planner/" class="text-[#0070f3] underline hover:text-[#0761d1]">Budget Général</a> pour des catégories flexibles, ou à la <a href="/50-30-20-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Méthode 50/30/20</a> pour des objectifs en pourcentage.',

    // Planners & Guides
    'f3020.eyebrow': 'Cadre Budgétaire',
    'f3020.guide_title': 'Rappel : Le 50/30/20 est un guide, pas une loi rigide',
    'f3020.guide_desc': 'Dans les zones à coût de la vie élevé, le logement consomme souvent 35% à 45% des revenus, portant les Besoins à 60%. Réduisez alors les Envies plutôt que d\'abandonner la méthode.',
    'f3020.calc_eyebrow': 'Calculateur Interactif',
    'f3020.calc_title': 'Planificateur 50/30/20 Interactif & Comparaison aux Cibles',
    'f3020.calc_desc': 'Saisissez votre revenu net pour générer vos repères automatiques et comparez avec vos dépenses réelles.',
    'zbb.eyebrow': 'Gestion Précise de Trésorerie',
    'zbb.calc_eyebrow': 'Outil Interactif',
    'zbb.calc_title': 'Constructeur Interactif de Budget Base Zéro',
    'zbb.calc_desc': 'Saisissez votre revenu net, allouez chaque montant et observez la jauge atteindre zéro.',

    // Templates UI
    'templates.quick_jump': 'Accès Rapide :',
    'templates.download_csv': 'Télécharger CSV',
    'templates.use_tool': 'Utiliser l\'Outil en Ligne',
    'templates.best_for': 'Idéal Pour & Public Cible',
    'templates.structure_highlights': 'Structure & Points Clés',

    // Learn UI
    'learn.try_f3020_tool': 'Essayer l\'Outil 50/30/20',
    'learn.compare_zbb': 'Comparer avec le Budget Base Zéro',

    // Error Pages
    'error.404_eyebrow': 'Erreur 404 • Page Non Trouvée',
    'error.404_title': 'Cette Page N\'est Pas au Budget',
    'error.404_desc': 'Le lien est peut-être expiré ou erroné. Vos données enregistrées localement restent protégées.',
    'error.return_home': 'Retour à l\'Accueil',
    'error.popular_destinations': 'Destinations Populaires',
    'error.500_eyebrow': 'Erreur 500 • Erreur Interne',
    'error.500_title': 'Un Problème Technique Est Survenu',
    'error.500_desc': 'Une erreur inattendue est survenue. Vos données étant calculées et enregistrées dans votre navigateur, elles restent intactes.',
    'error.reload_page': 'Recharger la Page',
    'error.data_safe': 'Vos Données Locales Sont en Sécurité',
    'error.data_safe_desc': 'My Real Budget ne transmet pas vos calculs à des serveurs distants. Veuillez réessayer dans un instant.',

    // Accessibility & Controls
    'aria.select_currency': 'Sélectionner la Devise du Budget',
    'aria.select_language': 'Sélectionner la Langue de l\'Interface',
    'aria.switch_light': 'Passer en mode clair',
    'aria.switch_dark': 'Passer en mode sombre',
  },
  de: {
    // Navigation & Header
    'nav.navigation': 'Navigation',
    'nav.preferences': 'Einstellungen',
    'nav.budget_planner': 'Budgetplaner',
    'nav.f3020_budget': '50/30/20 Budget',
    'nav.f3020_compact': '50/30/20',
    'nav.zero_based_budget': 'Nullbasiertes Budget',
    'nav.zero_based_compact': 'Null-basiert',
    'nav.templates': 'Vorlagen',
    'nav.learn': 'Lernen',
    'nav.start_budget': 'Budgetplaner starten',
    'nav.theme': 'Designmodus',
    'nav.brand': 'My Real Budget',

    // Common Controls & Badges
    'common.autosaved': 'Lokal auf diesem Gerät gespeichert',
    'common.export_csv': 'CSV exportieren',
    'common.reset_defaults': 'Standard zurücksetzen',
    'common.currency': 'Währung',
    'common.language': 'Sprache',
    'common.method': 'Budgetierungsmethode:',
    'common.general_budget': 'Allgemeines Budget',
    'common.f3020_method': '50/30/20 Methode',
    'common.zero_based_method': 'Nullbasierte Methode',
    'common.spreadsheet_templates': 'Tabellenvorlagen',
    'common.try_another_method': 'Möchten Sie eine andere Methode ausprobieren?',
    'common.add_item': 'Element hinzufügen',
    'common.add_income': 'Einkommensquelle hinzufügen',
    'common.add_category': 'Neue Ausgabenkategorie hinzufügen',
    'common.add_allocation_group': 'Neue Zuweisungsgruppe hinzufügen',
    'common.new_allocation': 'Neue Zuweisung',
    'common.expand_all': 'Alle ausklappen',
    'common.collapse_all': 'Alle einklappen',
    'common.per_month': '/Monat',
    'common.private_local': '100% Privat & Lokal',
    'common.no_account': 'Kein Konto Erforderlich',
    'common.free_templates': 'Kostenlose Vorlagen & Tools',
    'common.remove_item': 'Element entfernen',
    'common.remove_category': 'Gesamte Kategorie entfernen',

    // Frequencies
    'freq.weekly': 'Wöchentlich',
    'freq.biweekly': 'Zweiwöchentlich',
    'freq.monthly': 'Monatlich',
    'freq.quarterly': 'Vierteljährlich',
    'freq.yearly': 'Jährlich',

    // Summary & Metrics
    'summary.budget_summary': 'Budget-Übersicht',
    'summary.monthly_income': 'Monatliches Einkommen',
    'summary.planned_expenses': 'Geplante Ausgaben',
    'summary.total_allocated': 'Gesamt Zugewiesen',
    'summary.remaining': 'Verbleibend',
    'summary.left_to_assign': 'Noch Zuzuweisen',
    'summary.monthly_surplus': 'Monatlicher Überschuss',
    'summary.monthly_deficit': 'Monatliches Defizit',
    'summary.net_balance': 'Nettosaldo',
    'summary.net_cash_flow': 'Netto-Cashflow',
    'summary.balanced': 'Ausgeglichen',
    'summary.over_budget': 'Über Budget',
    'summary.over_allocated': 'Überzugewiesen',
    'summary.surplus': 'Überschuss',
    'summary.deficit': 'Defizit',
    'summary.target': 'Ziel',
    'summary.actual': 'Tatsächlich',
    'summary.on_target': 'Im Ziel',
    'summary.under': 'unter',
    'summary.over': 'über',
    'summary.outflows': 'Ausgaben',
    'summary.actual_outflow': 'Tatsächliche Ausgaben:',
    'summary.cash_breakdown': 'Cashflow-Aufschlüsselung',
    'summary.top_categories': 'Größte monatliche Ausgaben',
    'summary.spent_pct': '{pct}% ausgegeben',
    'summary.assigned_pct': '{pct}% zugewiesen',
    'summary.available_pct': '100% verfügbar',
    'summary.income_spent': 'Ausgegebenes Einkommen',
    'summary.income_remaining': 'Verbleibendes Einkommen',
    'summary.savings_investments': 'Sparen & Investitionen',
    'summary.remaining_cash': 'Verbleibendes Geld',
    'gbp.start_entering': 'Geben Sie zunächst oben Ihr monatliches Nettoeinkommen ein.',

    // General Budget Planner Specific
    'gbp.heading': 'Online-Monatsbudgetplaner',
    'gbp.subtitle': 'Planen Sie Ihre Einnahmen und Ausgaben mit automatischer Häufigkeitsnormalisierung. Behalten Sie die volle Kontrolle über Ihren Cashflow.',
    'gbp.income_section': '1. Monatliches Einkommen',
    'gbp.income_desc': 'Geben Sie alle Einkommensquellen und Zahlungsintervalle ein.',
    'gbp.normalized_total': 'Normalisierte Summe',
    'gbp.expenses_section': '2. Geplante Ausgaben',
    'gbp.expenses_desc': 'Beträge und Intervalle festlegen. Jährliche und wöchentliche Posten werden monatlich berechnet.',
    'gbp.normalized_expenses': 'Normalisierte Ausgaben',
    'gbp.live_assessment': 'Dynamische Budget-Einblicke',
    'gbp.empty_categories': 'Bisher keine Ausgabenkategorien erfasst.',

    // 50/30/20 Planner Specific
    'f3020.heading': '50/30/20 Budgetrechner & Planer',
    'f3020.subtitle': 'Bringen Sie Ihre Finanzen mit der 50/30/20-Regel ins Gleichgewicht: 50% Bedürfnisse, 30% Wünsche, 20% Ersparnisse und Schuldenabbau.',
    'f3020.take_home_label': 'Monatliches Nettoeinkommen (Nach Steuern)',
    'f3020.take_home_desc': 'Geben Sie Ihr monatliches Nettoeinkommen ein. Bei zweiwöchentlicher Auszahlung: Gehalt × 26 / 12.',
    'f3020.needs_title': 'Bedürfnisse',
    'f3020.needs_target_label': '(Ziel: 50%)',
    'f3020.needs_desc': 'Miete, Nebenkosten, Lebensmittel, Mobilität, Versicherungen, Mindestrückzahlungen.',
    'f3020.add_need': 'Bedürfnis-Posten hinzufügen',
    'f3020.wants_title': 'Wünsche',
    'f3020.wants_target_label': '(Ziel: 30%)',
    'f3020.wants_desc': 'Essen gehen, Freizeit, Shopping, Abos, Urlaub, Hobbys.',
    'f3020.add_want': 'Wunsch-Posten hinzufügen',
    'f3020.savings_title': 'Ersparnisse & Schulden',
    'f3020.savings_target_label': '(Ziel: 20%)',
    'f3020.savings_desc': 'Notgroschen, Altersvorsorge, Investitionen, zusätzliche Schuldentilgung.',
    'f3020.add_saving': 'Spar- / Schuldenposten hinzufügen',
    'f3020.rule_summary': '50/30/20 Regel-Aufschlüsselung',
    'f3020.net_monthly_income': 'Monatliches Nettoeinkommen',
    'f3020.unassigned_cash': 'Nicht zugewiesenes Geld:',

    // Zero-Based Planner Specific
    'zbb.heading': 'Nullbasierter Budgetrechner & Planer',
    'zbb.subtitle': 'Geben Sie jedem Betrag eine feste Aufgabe, bis 0 verbleibt.',
    'zbb.monthly_net_income': 'Monatliches Nettoeinkommen',
    'zbb.income_desc': 'Ihr gesamtes Nettoeinkommen für den Monat.',
    'zbb.add_group': 'Zuweisungsgruppe hinzufügen',
    'zbb.allocated_progress': 'Zugewiesener Gesamtfortschritt',
    'zbb.envelopes_summary': 'Kategorien-Aufschlüsselung',
    'zbb.zero_balance_rule': 'Die Nullbasis-Formel',
    'zbb.zero_balance_desc': 'Einkommen − Alle Zuweisungen = 0',
    'zbb.income_label': 'Monatliches Nettoeinkommen zum Zuteilen',
    'zbb.income_sub': 'Der Ausgangsbetrag für den Monat. Ihr Ziel ist es, jeden Cent zuzuweisen, bis 0 verbleibt.',
    'zbb.left_to_assign': 'Noch Zuzuweisen',
    'zbb.budget_balanced': 'Budget Ausgeglichen',
    'zbb.over_allocated': 'Überallokiert',
    'zbb.zero_balance_title': 'Null-basierter Saldo',
    'zbb.income_pool': 'Einkommenspool',
    'zbb.total_allocated': 'Gesamt Zugewiesen',
    'zbb.allocation_rate': 'Zuteilungsquote',
    'zbb.assigned_vs_available': 'Zugewiesen vs Verfügbar',
    'zbb.strategy_title': 'So erreichen Sie Null:',
    'zbb.strategy_leftover': 'Wenn Geld übrig bleibt: Nicht ungenutzt lassen. Weisen Sie es Schuldentilgung, Altersvorsorge oder Rücklagen zu.',
    'zbb.strategy_negative': 'Wenn negativ: Sie haben mehr zugewiesen als Sie einnehmen. Reduzieren Sie Ausgaben, bis 0 erreicht ist.',
    'zbb.add_item_to': 'Element zu {group} hinzufügen',
    'zbb.goal_reached_msg': '<strong>Ziel erreicht!</strong> Ihr Budget ist auf null ausgeglichen. Jeder Cent hat eine feste Aufgabe.',
    'zbb.left_to_assign_msg': 'Sie haben noch <strong>{amount}</strong> zuzuweisen. Weisen Sie zu, bis {zero} verbleibt.',
    'zbb.over_allocated_msg': 'Sie haben <strong class="text-[#ee0000]">{amount}</strong> mehr zugewiesen als Ihr Einkommen.',
    'zbb.badge_balanced': 'Ausgeglichen ({zero})',
    'zbb.badge_left': '{amount} Noch Zuzuweisen',
    'zbb.badge_over': '{amount} Überallokiert',
    'zbb.sub_balanced': 'Gesamtes Einkommen auf Null zugewiesen.',
    'zbb.sub_left': 'Restbetrag zuweisen bis {zero}.',
    'zbb.sub_over': 'Zuweisung übersteigt Einkommen.',
    'zbb.pct_assigned': '{pct}% zugewiesen',
    'prompt.new_group_default': 'Spezielle Zuteilungsgruppe',

    // Homepage Specific
    'home.eyebrow': 'Praktische Cashflow-Planung',
    'home.hero_title': 'Budgetplaner für das echte finanzielle Leben',
    'home.hero_p': 'Übernehmen Sie die Kontrolle über Ihre Finanzen mit einem intuitiven Online-Budgetplaner. Modellieren Sie Einnahmen, balancieren Sie Ausgaben mit der 50/30/20-Regel und laden Sie Tabellenvorlagen herunter.',
    'home.explore_methods': 'Budgetierungsmethoden entdecken',
    'home.preview_title': 'IHR MONATLICHES BUDGET',
    'home.preview_takehome': 'Monatliches Netto',
    'home.preview_income': 'Einkommen',
    'home.preview_distribution': 'Mittelverteilung',
    'home.preview_assigned': '100% Zugewiesen',
    'home.preview_needs': 'Bedürfnisse',
    'home.preview_needs_sub': 'Miete, Lebensmittel, Rechnungen',
    'home.preview_wants': 'Wünsche',
    'home.preview_wants_sub': 'Essen gehen, Freizeit, Hobbys',
    'home.preview_savings': 'Ersparnisse',
    'home.preview_savings_sub': 'Notgroschen, Schulden',
    'home.preview_remaining': 'Verbleibend Nicht Zugewiesen',
    'home.core_capabilities': 'Kernfunktionen',
    'home.built_for_real_life': 'Ein Budgetplaner für das echte Leben',
    'home.choose_how_to_budget': 'Wählen Sie Ihre Budgetierungsmethode',
    'home.open_f3020': '50/30/20-Planer öffnen →',
    'home.open_zbb': 'Nullbasierten Planer öffnen →',
    'home.open_gbp': 'Allgemeinen Planer öffnen →',

    // Templates Page Specific
    'templates.eyebrow': 'Vorlagenkatalog',
    'templates.heading': 'Budgetvorlagen-Verzeichnis',
    'templates.desc': 'Finden Sie die passende Tabellenvorlage für Ihre Situation. Alle Vorlagen können kostenlos heruntergeladen oder online genutzt werden.',
    'templates.who_for': 'Geeignet für:',
    'templates.get_template': 'Vorlage holen',
    'templates.online_tool': 'Online-Tool',
    'templates.help_title': 'Hilfe bei der Auswahl einer Vorlage?',

    // Learn Page Specific
    'learn.eyebrow': 'Wissenszentrum',
    'learn.heading': 'Budgeting-Lernzentrum',
    'learn.desc': 'Klare Anleitungen, die Ihnen helfen, Ihre Finanzen zu verstehen und nachhaltige Gewohnheiten aufzubauen.',
    'learn.read_guide': 'Vollständigen Leitfaden lesen',
    'learn.put_into_practice': 'Wissen in die Praxis umsetzen',
    'learn.ready_to_plan': 'Bereit für Ihre Zahlen?',
    'learn.open_planner': 'Budgetplaner öffnen',

    // Footer Specific
    'footer.mission': 'Erstellen Sie ein Budget, das wirklich funktioniert. Planen Sie Ihren Cashflow mit echten Zahlen und ohne Schätzfehler.',
    'footer.budget_methods': 'Budget-Methoden',
    'footer.general_planner': 'Allgemeiner Budgetplaner',
    'footer.f3020_rule': '50/30/20 Budgetregel',
    'footer.zero_based': 'Nullbasiertes Budget',
    'footer.freq_normalization': 'Häufigkeitsnormalisierung',
    'footer.templates_tools': 'Vorlagen & Tools',
    'footer.planner_template': 'Budgetplaner-Vorlage',
    'footer.all_templates': 'Alle Budgetvorlagen',
    'footer.simple_monthly': 'Einfache Monatsvorlage',
    'footer.student_template': 'Studenten-Budgetvorlage',
    'footer.household_template': 'Haushalts-Vorlage',
    'footer.learn_guides': 'Lernen & Ratgeber',
    'footer.learning_hub': 'Lern-Hub',
    'footer.what_is_budget': 'Was ist ein Budget?',
    'footer.how_to_create': 'Monatsbudget erstellen',
    'footer.f3020_explained': '50/30/20 Erklärt',
    'footer.zbb_explained': 'Nullbasiert Erklärt',
    'footer.f3020_vs_zbb': '50/30/20 vs. Nullbasiert',
    'footer.copyright': '© {year} My Real Budget (myrealbudget.com). Alle Rechte vorbehalten.',
    'footer.about': 'Über Uns',
    'footer.contact': 'Kontakt',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.terms': 'AGB',
    'footer.disclaimer': 'Pädagogische Budgetierungstools. Keine formelle Anlage-, Steuer- oder Rechtsberatung.',

    // Dynamic Interpretations
    'interpret.general_surplus': 'Überschuss: Ihre geplanten Ausgaben liegen {amount} unter Ihrem Einkommen.',
    'interpret.general_deficit': 'Defizit: Ihre geplanten Ausgaben liegen {amount} über Ihrem Einkommen.',
    'interpret.general_balanced': 'Ausgeglichen: Ihr Budget ist ausgeglichen. Ihr gesamtes Einkommen ist zugewiesen.',
    'interpret.general_empty': 'Geben Sie Ihr Einkommen und Ihre Ausgaben ein, um Ihr Budget auszugleichen.',
    'interpret.general_insight_surplus': 'Ihre geplanten Ausgaben liegen {amount} unter Ihrem Einkommen ({pct}% verbleibend).',
    'interpret.general_insight_deficit': 'Ihre geplanten Ausgaben übersteigen Ihr Einkommen um {amount} pro Monat.',
    'interpret.general_insight_balanced': 'Ihr Budget ist genau auf Null ausgeglichen. Jeder Betrag ist zugewiesen.',
    'interpret.general_largest': '{name} ist Ihre größte Kategorie mit {amount}/Monat ({pct}% der Ausgaben, {incPct}% des Einkommens).',
    'interpret.general_savings': 'Geplante Sparquote: {pct}% des Nettoeinkommens.',
    'interpret.general_zero_savings': 'Derzeit sind 0% des Einkommens für Sparkategorien vorgesehen.',
    'interpret.f3020_empty': 'Geben Sie Ihr Nettoeinkommen ein, um Ihren 50/30/20-Benchmark zu berechnen.',
    'interpret.f3020_needs_over': 'Ihre Bedürfnisse machen {pct}% aus ({amount} über dem 50%-Ziel).',
    'interpret.f3020_needs_ok': 'Ihre Bedürfnisse liegen bei {pct}% des Nettoeinkommens (im 50%-Ziel).',
    'interpret.f3020_wants_over': 'Ihre Wünsche liegen bei {pct}% ({amount} über dem Ziel).',
    'interpret.f3020_wants_ok': 'Ihre Wünsche liegen bei {pct}% und bleiben im 30%-Budget.',
    'interpret.f3020_savings_ok': 'Ihre Spar- und Schuldenquote liegt bei {pct}% und erreicht das 20%-Ziel.',
    'interpret.f3020_savings_under': 'Ihre Sparquote liegt derzeit bei {pct}% ({amount} unter dem Ziel).',
    'interpret.f3020_unassigned_over': 'Überzugewiesen: Geplante Zuweisungen übersteigen Ihr Einkommen um {amount}.',
    'interpret.f3020_unassigned_balanced': 'Ihr Budget ist über alle drei Kategorien hinweg ausgeglichen.',
    'interpret.f3020_unassigned_surplus': 'Sie haben jeden Monat noch {amount} nicht zugewiesen.',
    'interpret.zbb_balanced': 'Ihr Budget ist auf Null ausgeglichen. Jeder Betrag hat einen festen Zweck.',
    'interpret.zbb_under': 'Sie haben noch {amount} zuzuweisen. Weisen Sie zu, bis 0 verbleibt.',
    'interpret.zbb_over': 'Sie haben {amount} mehr als Ihr Einkommen zugewiesen. Reduzieren Sie Zuweisungen.',
    'interpret.zbb_over_badge': '{amount} Überzugewiesen',
    'interpret.zbb_allocated_exceeds': 'Zuweisungen übersteigen das Einkommen.',

    // Confirmation Prompts & Dialogs
    'confirm.reset_general': 'Alle Werte auf Standard-Beispielzahlen zurücksetzen? Benutzerdefinierte Einträge werden gelöscht.',
    'confirm.reset_f3020': '50/30/20-Planer auf Beispielwerte zurücksetzen?',
    'confirm.reset_zbb': 'Nullbasierten Planer auf Standardwerte zurücksetzen?',
    'confirm.delete_category': 'Kategorie "{name}" und alle Einträge löschen?',
    'confirm.delete_group': 'Gruppe "{name}" löschen?',
    'prompt.new_group_name': 'Geben Sie einen Namen für Ihre neue Zuweisungsgruppe ein:',
    'prompt.new_category_name': 'Name für neue Ausgabenkategorie eingeben:',

    // Accessibility
    'aria.toggle_category': 'Kategorie-Einträge umschalten',
    'aria.category_name': 'Kategoriename',
    'aria.expense_item_name': 'Ausgabenposten-Name',
    'aria.expense_amount': 'Ausgabenbetrag',
    'aria.expense_frequency': 'Ausgabenhäufigkeit',
    'aria.income_item_name': 'Einkommensquellen-Name',
    'aria.income_amount': 'Einkommensbetrag',
    'aria.income_frequency': 'Einkommenshäufigkeit',
    'aria.remove_income': 'Einkommensquelle entfernen',
    'aria.toggle_needs': 'Bedürfnisse umschalten',
    'aria.toggle_wants': 'Wünsche umschalten',
    'aria.toggle_savings': 'Ersparnisse umschalten',

    // Methodologies section
    'methods.eyebrow': 'Methoden',
    'methods.subtitle': 'Unterschiedliche finanzielle Lebensphasen erfordern unterschiedliche Werkzeuge. Wählen Sie die Methode, die am besten zu Ihren Zielen, Einnahmen und Ihrem Alltag passt.',
    'methods.f3020_desc': 'Ein einfacher, prozentbasierter Einstieg. Teilen Sie Ihr Nettoeinkommen in 50% Grundbedürfnisse, 30% persönliche Wünsche und 20% Sparen & Schuldentilgung auf.',
    'methods.f3020_b1': 'Schnelle Zielwert-Berechnungen',
    'methods.f3020_b2': 'Geringer Pflegeaufwand',
    'methods.f3020_b3': 'Ideal für Einsteiger und Beständigkeit',
    'methods.zbb_desc': 'Geben Sie jedem Euro eine feste Aufgabe. Verteilen Sie Ihr gesamtes Einkommen auf Ausgaben, Schulden und Ersparnisse, bis genau 0€ unzugewiesen bleiben.',
    'methods.zbb_b1': 'Schnellere Schuldentilgung & gezieltes Sparen',
    'methods.zbb_b2': 'Verhindert unbemerktes Versickern von Geld',
    'methods.zbb_b3': 'Interaktive Null-Balance-Fortschrittsanzeige',
    'methods.gbp_desc': 'Erstellen Sie ein individuelles Monatsbudget mit Ihren realen Zahlen. Gleicht wöchentliche, zweiwöchentliche und jährliche Beträge automatisch auf Monatsbasis ab.',
    'methods.gbp_b1': 'Eigene Kategorien & flexible Posten',
    'methods.gbp_b2': 'Automatische Häufigkeits-Normalisierung',
    'methods.gbp_b3': 'Verständliche Finanzanalysen in Klartext',

    // Homepage Capabilities
    'home.built_desc': 'My Real Budget bietet moderne Finanzwerkzeuge direkt im Browser. Modellieren, organisieren und steuern Sie realistische Ausgaben – ohne komplizierte Tabellen oder Bankkonto-Freigaben.',
    'home.feat1_title': 'Monatsbudget erstellen',
    'home.feat1_desc': 'Ordnen Sie Einnahmen, feste Verpflichtungen und variable Ausgaben in einer synchronisierten Monatsübersicht.',
    'home.feat2_title': 'Wöchentliche Ausgaben planen',
    'home.feat2_desc': 'Wandeln Sie Monatsziele in praktische Wochenbudgets um, um Budgetüberschreitungen zu vermeiden.',
    'home.feat3_title': 'Die 50/30/20-Regel anwenden',
    'home.feat3_desc': 'Teilen Sie Ihr Nettoeinkommen in Sekunden in 50% Notwendiges, 30% Lebensstil und 20% Ersparnisse auf.',
    'home.feat4_title': 'Nullbasiertes Budget aufbauen',
    'home.feat4_desc': 'Weisen Sie jedem Euro einen Zweck zu, bis der verbleibende Betrag genau Null ergibt.',
    'home.feat5_title': 'Zahlungsintervalle normalisieren',
    'home.feat5_desc': 'Wandeln Sie Wochenlöhne, Quartalsbeiträge und Jahresversicherungen in exakte Monatsbeträge um.',
    'home.feat6_title': 'Budgetvorlagen nutzen',
    'home.feat6_desc': 'Exportieren Sie sofort einsetzbare Tabellen für Google Sheets, Excel und persönliche Aufzeichnungen.',

    // Homepage Journey
    'home.journey_eyebrow': 'Der Ablauf',
    'home.how_it_works': 'So funktioniert My Real Budget',
    'home.how_it_works_sub': 'Ein schrittweiser Prozess, der finanzielle Unsicherheit durch verlässliche Klarheit ersetzt.',
    'home.step1_num': 'Schritt 01',
    'home.step1_title': 'Erfassen',
    'home.step1_desc': 'Tragen Sie Einkommen und geplante Ausgaben ein. Wählen Sie Intervalle – unser System rechnet alles monatlich um.',
    'home.step2_num': 'Schritt 02',
    'home.step2_title': 'Verstehen',
    'home.step2_desc': 'Sehen Sie Einnahmen, Ausgaben und verbleibendes Geld mit automatischen Auswertungen auf einen Blick.',
    'home.step3_num': 'Schritt 03',
    'home.step3_title': 'Optimieren',
    'home.step3_desc': 'Passen Sie Posten an, gleichen Sie auf Null aus, exportieren Sie als CSV oder laden Sie Vorlagen herunter.',

    // Homepage Featured & CTA
    'home.templates_heading': 'Sofort einsatzbereite Budgetvorlagen',
    'home.templates_sub': 'Bevorzugen Sie eine Tabelle? Laden Sie kostenlose CSV-Vorlagen herunter – kompatibel mit Excel, Google Sheets und Numbers.',
    'home.browse_templates': 'Alle Vorlagen ansehen →',
    'home.format_csv': 'Format: CSV / Tabellen',
    'home.view_download': 'Ansehen & Herunterladen →',
    'home.learn_heading': 'Finanzwissen mit praxisnahen Leitfäden',
    'home.learn_sub': 'Umfassende Anleitungen zu Budget-Grundlagen, Methodenvergleichen und bewährten Geldstrategien.',
    'home.view_guides': 'Alle Leitfäden ansehen →',
    'home.read_article': 'Vollständigen Artikel lesen →',
    'home.faq_heading': 'Häufig gestellte Fragen zur Budgetplanung',
    'home.faq_sub': 'Alles, was Sie wissen müssen, um ein realistisches Budget zu erstellen und die beste Methode zu wählen.',
    'home.cta_eyebrow': 'Heute starten',
    'home.cta_heading': 'Bereit für ein Budget, das wirklich funktioniert?',
    'home.cta_sub': 'Kein Account, keine Kreditkarte, keine Verknüpfung mit der Bank. Nur klare, ehrliche Zahlen für Ihre Finanzen.',
    'home.open_free_planner': 'Kostenlosen Planer öffnen',
    'home.download_templates': 'Vorlagen herunterladen',

    // Actions & Core Strings
    'actions.delete': 'Löschen',
    'actions.save': 'Speichern',
    'actions.reset': 'Zurücksetzen',
    'common.income': 'Einkommen',
    'common.expenses': 'Ausgaben',
    'common.needs': 'Bedürfnisse',
    'common.wants': 'Wünsche',
    'common.savings': 'Ersparnisse',
    'common.debt': 'Schulden',
    'common.over_budget': 'Über Budget',
    'common.under_allocated': 'Unter-Zugewiesen',
    'common.new_need': 'Neuer Bedürfnisposten',
    'common.new_want': 'Neuer Wunschposten',
    'common.new_savings': 'Neuer Spar-/Schuldenposten',
    'confirm.reset_503020': '50/30/20-Planer auf Beispielwerte zurücksetzen?',

    // Switcher HTML descriptions
    'gbp.switch_methods_desc': 'Wechseln Sie zur <a href="/50-30-20-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">50/30/20-Methode</a> für prozentuale Zielwerte oder zum <a href="/zero-based-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Nullbasierten Budget</a>, um jeden Euro auf Null zuzuweisen.',
    'f3020.switch_methods_desc': 'Wechseln Sie zum <a href="/budget-planner/" class="text-[#0070f3] underline hover:text-[#0761d1]">Allgemeinen Budget</a> für flexible Kategorien oder zum <a href="/zero-based-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Nullbasierten Budget</a>, um jeden Euro auf Null zuzuweisen.',
    'zbb.switch_methods_desc': 'Wechseln Sie zum <a href="/budget-planner/" class="text-[#0070f3] underline hover:text-[#0761d1]">Allgemeinen Budget</a> für flexible Kategorien oder zur <a href="/50-30-20-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">50/30/20-Methode</a> für prozentuale Zielwerte.',

    // Planners & Guides
    'f3020.eyebrow': 'Budgetierungsrahmen',
    'f3020.guide_title': 'Denken Sie daran: 50/30/20 ist ein Leitfaden, kein starres Gesetz',
    'f3020.guide_desc': 'In teuren Städten macht Wohnen oft 35% bis 45% des Einkommens aus, wodurch Grundbedürfnisse 60% erreichen. Passen Sie in diesem Fall die Wünsche an, anstatt das Budget aufzugeben.',
    'f3020.calc_eyebrow': 'Interaktiver Rechner',
    'f3020.calc_title': 'Interaktiver 50/30/20-Planer & Zielwert-Vergleich',
    'f3020.calc_desc': 'Geben Sie Ihr Nettoeinkommen ein, um automatische Richtwerte zu erhalten und mit Ihren tatsächlichen Ausgaben zu vergleichen.',
    'zbb.eyebrow': 'Gezielte Finanzplanung',
    'zbb.calc_eyebrow': 'Interaktives Werkzeug',
    'zbb.calc_title': 'Interaktiver Nullbasierter Budgetplaner',
    'zbb.calc_desc': 'Geben Sie Ihr Nettoeinkommen ein, weisen Sie Gelder Ihren Kategorien zu und beobachten Sie, wie die Anzeige Null erreicht.',

    // Templates UI
    'templates.quick_jump': 'Direkt springen:',
    'templates.download_csv': 'CSV herunterladen',
    'templates.use_tool': 'Online-Tool nutzen',
    'templates.best_for': 'Ideal für & Zielgruppe',
    'templates.structure_highlights': 'Aufbau & Besonderheiten',

    // Learn UI
    'learn.try_f3020_tool': '50/30/20-Tool ausprobieren',
    'learn.compare_zbb': 'Mit Nullbasiertem Budget vergleichen',

    // Error Pages
    'error.404_eyebrow': 'Fehler 404 • Seite nicht gefunden',
    'error.404_title': 'Diese Seite ist nicht im Budget',
    'error.404_desc': 'Der Link ist möglicherweise veraltet oder falsch geschrieben. Ihre lokal gespeicherten Daten sind sicher.',
    'error.return_home': 'Zur Startseite',
    'error.popular_destinations': 'Beliebte Seiten',
    'error.500_eyebrow': 'Fehler 500 • Interner Serverfehler',
    'error.500_title': 'Ein technisches Problem ist aufgetreten',
    'error.500_desc': 'Es gab einen unerwarteten Fehler. Da Ihre Budgets lokal im Browser berechnet und gespeichert werden, sind Ihre Daten unversehrt.',
    'error.reload_page': 'Seite neu laden',
    'error.data_safe': 'Ihre lokalen Daten sind sicher',
    'error.data_safe_desc': 'My Real Budget überträgt Ihre Berechnungen nicht an externe Datenbanken. Bitte versuchen Sie es in wenigen Minuten erneut.',

    // Accessibility & Controls
    'aria.select_currency': 'Budgetwährung auswählen',
    'aria.select_language': 'Oberflächensprache auswählen',
    'aria.switch_light': 'Zu hellem Modus wechseln',
    'aria.switch_dark': 'Zu dunklem Modus wechseln',
  },
  pt: {
    // Navigation & Header
    'nav.navigation': 'Navegação',
    'nav.preferences': 'Preferências',
    'nav.budget_planner': 'Planejador',
    'nav.f3020_budget': 'Orçamento 50/30/20',
    'nav.f3020_compact': '50/30/20',
    'nav.zero_based_budget': 'Orçamento Base Zero',
    'nav.zero_based_compact': 'Base Zero',
    'nav.templates': 'Modelos',
    'nav.learn': 'Aprender',
    'nav.start_budget': 'Iniciar Planejador',
    'nav.theme': 'Modo de Tema',
    'nav.brand': 'My Real Budget',

    // Common Controls & Badges
    'common.autosaved': 'Salvo localmente neste dispositivo',
    'common.export_csv': 'Exportar CSV',
    'common.reset_defaults': 'Redefinir Padrões',
    'common.currency': 'Moeda',
    'common.language': 'Idioma',
    'common.method': 'Método de Orçamento:',
    'common.general_budget': 'Orçamento Geral',
    'common.f3020_method': 'Método 50/30/20',
    'common.zero_based_method': 'Método Base Zero',
    'common.spreadsheet_templates': 'Modelos de Planilha',
    'common.try_another_method': 'Quer experimentar outro método de orçamento?',
    'common.add_item': 'Adicionar item',
    'common.add_income': 'Adicionar Fonte de Renda',
    'common.add_category': 'Adicionar Categoria Personalizada',
    'common.add_allocation_group': 'Adicionar Novo Grupo de Alocação',
    'common.new_allocation': 'Nova Alocação',
    'common.expand_all': 'Expandir tudo',
    'common.collapse_all': 'Recolher tudo',
    'common.per_month': '/mês',
    'common.private_local': '100% Privado e Local',
    'common.no_account': 'Sem Conta Necessária',
    'common.free_templates': 'Modelos e Ferramentas Grátis',
    'common.remove_item': 'Remover item',
    'common.remove_category': 'Remover categoria inteira',

    // Frequencies
    'freq.weekly': 'Semanal',
    'freq.biweekly': 'Quinzenal',
    'freq.monthly': 'Mensal',
    'freq.quarterly': 'Trimestral',
    'freq.yearly': 'Anual',

    // Summary & Metrics
    'summary.budget_summary': 'Resumo do Orçamento',
    'summary.monthly_income': 'Renda Mensal',
    'summary.planned_expenses': 'Despesas Planejadas',
    'summary.total_allocated': 'Total Alocado',
    'summary.remaining': 'Restante',
    'summary.left_to_assign': 'Restante para Alocar',
    'summary.monthly_surplus': 'Superávit Mensual',
    'summary.monthly_deficit': 'Déficit Mensal',
    'summary.net_balance': 'Saldo Líquido',
    'summary.net_cash_flow': 'Fluxo de Caixa Líquido',
    'summary.balanced': 'Equilibrado',
    'summary.over_budget': 'Acima do Orçamento',
    'summary.over_allocated': 'Superalocado',
    'summary.surplus': 'Superávit',
    'summary.deficit': 'Déficit',
    'summary.target': 'Meta',
    'summary.actual': 'Real',
    'summary.on_target': 'Na Meta',
    'summary.under': 'abaixo',
    'summary.over': 'acima',
    'summary.outflows': 'Saídas',
    'summary.actual_outflow': 'Saída Real:',
    'summary.cash_breakdown': 'Detalhamento do Fluxo',
    'summary.top_categories': 'Maiores Despesas Mensais',
    'summary.spent_pct': '{pct}% gasto',
    'summary.assigned_pct': '{pct}% alocado',
    'summary.available_pct': '100% disponível',
    'summary.income_spent': 'Renda Gasta',
    'summary.income_remaining': 'Renda Restante',
    'summary.savings_investments': 'Poupança e Investimentos',
    'summary.remaining_cash': 'Dinheiro Restante',
    'gbp.start_entering': 'Comece inserindo seu salário líquido mensal acima.',

    // General Budget Planner Specific
    'gbp.heading': 'Planejador de Orçamento Mensal',
    'gbp.subtitle': 'Planeje sua renda e despesas com normalização automática de frequência. Entenda para onde vai seu dinheiro e crie um plano adaptado à sua vida real.',
    'gbp.income_section': '1. Renda Mensal',
    'gbp.income_desc': 'Insira todas as fontes de renda. Escolha com que frequência você recebe.',
    'gbp.normalized_total': 'Total Normalizado',
    'gbp.expenses_section': '2. Despesas Planejadas',
    'gbp.expenses_desc': 'Defina valores e frequências. Despesas anuais e semanais são convertidas para o mês.',
    'gbp.normalized_expenses': 'Despesas Normalizadas',
    'gbp.live_assessment': 'Insights do Orçamento',
    'gbp.empty_categories': 'Nenhuma categoria com valores ainda.',

    // 50/30/20 Planner Specific
    'f3020.heading': 'Calculadora e Planejador 50/30/20',
    'f3020.subtitle': 'Equilibre suas finanças com a regra clássica 50/30/20: 50% Necessidades, 30% Desejos e 20% Poupança e Dívidas.',
    'f3020.take_home_label': 'Renda Líquida Mensal (Após Impostos)',
    'f3020.take_home_desc': 'Insira sua renda líquida mensal total. Se quinzenal, multiplique seu pagamento por 26 e divida por 12.',
    'f3020.needs_title': 'Necessidades',
    'f3020.needs_target_label': '(Meta: 50%)',
    'f3020.needs_desc': 'Moradia, serviços, compras de mercado, transporte, seguros, pagamentos mínimos.',
    'f3020.add_need': 'Adicionar Item de Necessidade',
    'f3020.wants_title': 'Desejos',
    'f3020.wants_target_label': '(Meta: 30%)',
    'f3020.wants_desc': 'Restaurantes, lazer, compras, assinaturas, viagens, hobbies.',
    'f3020.add_want': 'Adicionar Item de Desejo',
    'f3020.savings_title': 'Poupança e Dívidas',
    'f3020.savings_target_label': '(Meta: 20%)',
    'f3020.savings_desc': 'Fundo de emergência, aposentadoria, investimentos, quitação de dívidas.',
    'f3020.add_saving': 'Adicionar Item de Poupança/Dívida',
    'f3020.rule_summary': 'Detalhamento da Regra 50/30/20',
    'f3020.net_monthly_income': 'Renda Líquida Mensal',
    'f3020.unassigned_cash': 'Dinheiro não Alocado:',

    // Zero-Based Planner Specific
    'zbb.heading': 'Calculadora e Planejador Base Zero',
    'zbb.subtitle': 'Dê um destino a cada valor até restar zero para alocar. Distribua toda a renda em necessidades, estilo de vida, dívidas e poupança.',
    'zbb.monthly_net_income': 'Renda Líquida Mensal',
    'zbb.income_desc': 'Sua renda líquida total após impostos para o mês.',
    'zbb.add_group': 'Adicionar Grupo de Alocação',
    'zbb.allocated_progress': 'Progresso Total Alocado',
    'zbb.envelopes_summary': 'Detalhamento por Categorias',
    'zbb.zero_balance_rule': 'A Fórmula Base Zero',
    'zbb.zero_balance_desc': 'Renda − Todas as Alocações = 0',
    'zbb.income_label': 'Renda Líquida Mensal Total a Alocar',
    'zbb.income_sub': 'O valor inicial para o mês. Seu objetivo é alocar cada centavo até que restem 0.',
    'zbb.left_to_assign': 'Por Alocar',
    'zbb.budget_balanced': 'Orçamento Equilibrado',
    'zbb.over_allocated': 'Superalocado',
    'zbb.zero_balance_title': 'Saldo Base Zero',
    'zbb.income_pool': 'Total de Renda',
    'zbb.total_allocated': 'Total Alocado',
    'zbb.allocation_rate': 'Taxa de Alocação',
    'zbb.assigned_vs_available': 'Alocado vs Disponível',
    'zbb.strategy_title': 'Como chegar a Zero:',
    'zbb.strategy_leftover': 'Se sobrar dinheiro: Não o deixe flutuando. Aloque em amortização de dívidas, aposentadoria ou reserva para imprevistos.',
    'zbb.strategy_negative': 'Se estiver negativo: Você alocou mais do que ganha. Reduza lazer ou compras discricionárias até chegar a 0.',
    'zbb.add_item_to': 'Adicionar item a {group}',
    'zbb.goal_reached_msg': '<strong>Meta alcançada!</strong> Seu orçamento está equilibrado a zero. Cada centavo tem um destino definido.',
    'zbb.left_to_assign_msg': 'Você tem <strong>{amount}</strong> por alocar. Aloque o restante até chegar a {zero}.',
    'zbb.over_allocated_msg': 'Você alocou <strong class="text-[#ee0000]">{amount}</strong> a mais do que sua renda.',
    'zbb.badge_balanced': 'Equilibrado ({zero})',
    'zbb.badge_left': '{amount} Por Alocar',
    'zbb.badge_over': '{amount} Superalocado',
    'zbb.sub_balanced': 'Toda a renda alocada a zero.',
    'zbb.sub_left': 'Aloque o restante até {zero}.',
    'zbb.sub_over': 'Alocação excede a renda.',
    'zbb.pct_assigned': '{pct}% alocado',
    'prompt.new_group_default': 'Grupo de Alocação Especial',

    // Homepage Specific
    'home.eyebrow': 'Planejamento Prático de Fluxo de Caixa',
    'home.hero_title': 'Planejador de Orçamento para o Dinheiro Real',
    'home.hero_p': 'Assuma o comando das suas finanças com um planejador online intuitivo criado para um fluxo de caixa realista. Modele sua renda, equilibre despesas com a regra 50/30/20 e baixe modelos gratuitos.',
    'home.explore_methods': 'Explorar Métodos de Orçamento',
    'home.preview_title': 'SEU ORÇAMENTO MENSAL',
    'home.preview_takehome': 'Renda Líquida Mensal',
    'home.preview_income': 'Renda',
    'home.preview_distribution': 'Distribuição do Dinheiro',
    'home.preview_assigned': '100% Alocado',
    'home.preview_needs': 'Necessidades',
    'home.preview_needs_sub': 'Aluguel, compras, contas',
    'home.preview_wants': 'Desejos',
    'home.preview_wants_sub': 'Restaurantes, lazer, hobbies',
    'home.preview_savings': 'Poupança',
    'home.preview_savings_sub': 'Fundo de emergência, dívidas',
    'home.preview_remaining': 'Restante não Alocado',
    'home.core_capabilities': 'Recursos Principais',
    'home.built_for_real_life': 'Um Planejador Feito para a Vida Real',
    'home.choose_how_to_budget': 'Escolha como você quer orçar',
    'home.open_f3020': 'Abrir Planejador 50/30/20 →',
    'home.open_zbb': 'Abrir Planejador Base Zero →',
    'home.open_gbp': 'Abrir Planejador Geral →',

    // Templates Page Specific
    'templates.eyebrow': 'Catálogo de Modelos',
    'templates.heading': 'Diretório de Modelos de Orçamento',
    'templates.desc': 'Encontre a planilha perfeita para sua situação. Todos os modelos são totalmente gratuitos para baixar ou usar online.',
    'templates.who_for': 'Indicado para:',
    'templates.get_template': 'Obter Modelo',
    'templates.online_tool': 'Ferramenta Online',
    'templates.help_title': 'Precisa de ajuda para escolher um modelo?',

    // Learn Page Specific
    'learn.eyebrow': 'Central de Conhecimento',
    'learn.heading': 'Central de Aprendizado de Orçamento',
    'learn.desc': 'Guias práticos para ajudar você a entender para onde vai seu dinheiro, escolher o melhor método e construir hábitos financeiros sustentáveis.',
    'learn.read_guide': 'Ler Guia Completo',
    'learn.put_into_practice': 'Coloque em Prática',
    'learn.ready_to_plan': 'Pronto para planejar seus números?',
    'learn.open_planner': 'Abrir Planejador de Orçamento',

    // Footer Specific
    'footer.mission': 'Crie um orçamento que realmente funcione para você. Planeje seu fluxo de caixa com números reais e sem suposições.',
    'footer.budget_methods': 'Métodos de Orçamento',
    'footer.general_planner': 'Planejador de Orçamento Geral',
    'footer.f3020_rule': 'Regra de Orçamento 50/30/20',
    'footer.zero_based': 'Orçamento Base Zero',
    'footer.freq_normalization': 'Normalização de Frequência',
    'footer.templates_tools': 'Modelos e Ferramentas',
    'footer.planner_template': 'Modelo de Planejador',
    'footer.all_templates': 'Todos os Modelos de Orçamento',
    'footer.simple_monthly': 'Modelo Mensal Simples',
    'footer.student_template': 'Modelo para Estudantes',
    'footer.household_template': 'Modelo para Casais e Família',
    'footer.learn_guides': 'Aprender e Guias',
    'footer.learning_hub': 'Hub de Aprendizado',
    'footer.what_is_budget': 'O que é um Orçamento?',
    'footer.how_to_create': 'Como Criar um Orçamento Mensal',
    'footer.f3020_explained': '50/30/20 Explicado',
    'footer.zbb_explained': 'Base Zero Explicado',
    'footer.f3020_vs_zbb': '50/30/20 vs Base Zero',
    'footer.copyright': '© {year} My Real Budget (myrealbudget.com). Todos os direitos reservados.',
    'footer.about': 'Sobre Nós',
    'footer.contact': 'Contato',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos e Condições',
    'footer.disclaimer': 'Ferramentas educacionais de orçamento. Não substitui consultoria formal financeira, fiscal ou jurídica.',

    // Dynamic Interpretations
    'interpret.general_surplus': 'Superávit: Seus gastos planejados estão {amount} abaixo da sua renda.',
    'interpret.general_deficit': 'Déficit: Suas despesas planejadas são {amount} superiores à sua renda.',
    'interpret.general_balanced': 'Equilibrado: Seu orçamento está equilibrado. Toda a sua renda está alocada.',
    'interpret.general_empty': 'Insira sua renda e despesas para equilibrar seu orçamento.',
    'interpret.general_insight_surplus': 'Seus gastos planejados estão {amount} abaixo da sua renda ({pct}% restante).',
    'interpret.general_insight_deficit': 'Suas despesas planejadas superam sua renda em {amount} por mês.',
    'interpret.general_insight_balanced': 'Seu orçamento equilibra exatamente em zero. Toda a renda está alocada.',
    'interpret.general_largest': '{name} é sua maior categoria com {amount}/mês ({pct}% das despesas, {incPct}% da renda).',
    'interpret.general_savings': 'Taxa de poupança planejada: {pct}% da renda líquida.',
    'interpret.general_zero_savings': 'Atualmente 0% da renda está alocada para poupança.',
    'interpret.f3020_empty': 'Insira sua renda líquida mensal para calcular suas metas 50/30/20.',
    'interpret.f3020_needs_over': 'Suas Necessidades ocupam {pct}% ({amount} acima da meta de 50%).',
    'interpret.f3020_needs_ok': 'Suas Necessidades estão em {pct}% da renda líquida (dentro da meta de 50%).',
    'interpret.f3020_wants_over': 'Seus Desejos ocupam {pct}% ({amount} acima da meta).',
    'interpret.f3020_wants_ok': 'Seus Desejos estão em {pct}%, dentro do seu orçamento de 30%.',
    'interpret.f3020_savings_ok': 'Suas alocações de Poupança e Dívidas estão em {pct}%, atingindo a meta de 20%.',
    'interpret.f3020_savings_under': 'Sua taxa de poupança é atualmente de {pct}% ({amount} abaixo da meta).',
    'interpret.f3020_unassigned_over': 'Superalocado: As alocações planejadas superam sua renda líquida em {amount}.',
    'interpret.f3020_unassigned_balanced': 'Seu orçamento está equilibrado entre Necessidades, Desejos e Poupança.',
    'interpret.f3020_unassigned_surplus': 'Você tem {amount} restante não alocado a cada mês.',
    'interpret.zbb_balanced': 'Seu orçamento está balanceado a zero. Cada valor tem um destino definido.',
    'interpret.zbb_under': 'Você ainda tem {amount} para alocar. Aloque até sobrar 0.',
    'interpret.zbb_over': 'Você alocou {amount} a mais do que sua renda. Reduza para chegar a zero.',
    'interpret.zbb_over_badge': '{amount} Superalocado',
    'interpret.zbb_allocated_exceeds': 'O valor alocado supera a renda.',

    // Confirmation Prompts & Dialogs
    'confirm.reset_general': 'Redefinir todos os valores para os números de exemplo? Itens personalizados serão limpos.',
    'confirm.reset_f3020': 'Redefinir o planejador 50/30/20 para valores de exemplo?',
    'confirm.reset_zbb': 'Redefinir o planejador base zero para valores padrão?',
    'confirm.delete_category': 'Excluir a categoria "{name}" e todos os seus itens?',
    'confirm.delete_group': 'Excluir o grupo "{name}"?',
    'prompt.new_group_name': 'Digite um nome para seu novo grupo de alocação:',
    'prompt.new_category_name': 'Digite o nome da nova categoria de despesas:',

    // Accessibility
    'aria.toggle_category': 'Alternar itens da categoria',
    'aria.category_name': 'Nome da categoria',
    'aria.expense_item_name': 'Nome do item de despesa',
    'aria.expense_amount': 'Valor da despesa',
    'aria.expense_frequency': 'Frequência da despesa',
    'aria.income_item_name': 'Nome da fonte de renda',
    'aria.income_amount': 'Valor da renda',
    'aria.income_frequency': 'Frequência da renda',
    'aria.remove_income': 'Remover fonte de renda',
    'aria.toggle_needs': 'Alternar itens de Necessidades',
    'aria.toggle_wants': 'Alternar itens de Desejos',
    'aria.toggle_savings': 'Alternar itens de Poupança',

    // Methodologies section
    'methods.eyebrow': 'Metodologias',
    'methods.subtitle': 'Diferentes fases financeiras exigem diferentes ferramentas. Escolha o método que melhor se adapta aos seus objetivos, renda e estilo de vida.',
    'methods.f3020_desc': 'Um ponto de partida simples baseado em porcentagens. Divida o salário líquido em 50% Necessidades, 30% Desejos e 20% Poupança e Dívidas.',
    'methods.f3020_b1': 'Cálculos rápidos de metas',
    'methods.f3020_b2': 'Baixo esforço de manutenção',
    'methods.f3020_b3': 'Ideal para iniciantes e consistência',
    'methods.zbb_desc': 'Dê um propósito a cada centavo. Aloque toda a sua renda em despesas, dívidas ou poupança até restar exatamente $0 não alocado.',
    'methods.zbb_b1': 'Quitação acelerada de dívidas e poupança',
    'methods.zbb_b2': 'Ajuda a eliminar desperdícios financeiros',
    'methods.zbb_b3': 'Indicador interativo de saldo zero',
    'methods.gbp_desc': 'Construa um orçamento mensal personalizado com seus números reais. Normaliza despesas semanais, quinzenais e anuais em uma visão clara.',
    'methods.gbp_b1': 'Categorias e itens personalizados',
    'methods.gbp_b2': 'Normalização semanal/anual de frequências',
    'methods.gbp_b3': 'Análises claras e diretas em linguagem simples',

    // Homepage Capabilities
    'home.built_desc': 'O My Real Budget oferece ferramentas financeiras modernas no seu navegador. Modele, organize e execute um plano de gastos realista sem planilhas complexas nem exposição de contas bancárias.',
    'home.feat1_title': 'Crie um Orçamento Mensal',
    'home.feat1_desc': 'Organize fontes de renda, despesas fixas e gastos variáveis em um resumo mensal sincronizado.',
    'home.feat2_title': 'Planeje Gastos Semanais',
    'home.feat2_desc': 'Converta metas mensais em limites semanais práticos para evitar surpresas.',
    'home.feat3_title': 'Aplique a Regra 50/30/20',
    'home.feat3_desc': 'Distribua a renda líquida em 50% essenciais, 30% estilo de vida e 20% poupança e dívidas em segundos.',
    'home.feat4_title': 'Construa um Orçamento Base Zero',
    'home.feat4_desc': 'Atribua um destino a cada unidade monetária até que o valor não alocado chegue a zero.',
    'home.feat5_title': 'Normalize Frequências de Pagamento',
    'home.feat5_desc': 'Converta salários semanais e seguros anuais em equivalentes mensais exatos.',
    'home.feat6_title': 'Use Modelos de Orçamento',
    'home.feat6_desc': 'Exporte planilhas prontas para Google Sheets, Microsoft Excel e registros pessoais.',

    // Homepage Journey
    'home.journey_eyebrow': 'O Processo',
    'home.how_it_works': 'Como Funciona o My Real Budget',
    'home.how_it_works_sub': 'Um fluxo passo a passo criado para substituir a incerteza pela clareza financeira.',
    'home.step1_num': 'Passo 01',
    'home.step1_title': 'Construir',
    'home.step1_desc': 'Insira receitas e despesas planejadas. Selecione as frequências: nosso sistema normaliza tudo mensalmente.',
    'home.step2_num': 'Passo 02',
    'home.step2_title': 'Compreender',
    'home.step2_desc': 'Visualize entradas, saídas e saldo restante com análises automáticas e claras.',
    'home.step3_num': 'Passo 03',
    'home.step3_title': 'Melhorar',
    'home.step3_desc': 'Ajuste valores, equilibre até zero, exporte para planilha ou baixe modelos.',

    // Homepage Featured & CTA
    'home.templates_heading': 'Modelos de Orçamento Prontos para Usar',
    'home.templates_sub': 'Prefere uma planilha? Baixe modelos CSV gratuitos compatíveis com Excel, Google Sheets e Numbers.',
    'home.browse_templates': 'Ver todos os modelos →',
    'home.format_csv': 'Formato: CSV / Planilhas',
    'home.view_download': 'Ver & Baixar →',
    'home.learn_heading': 'Domine Suas Finanças com Guias Práticos',
    'home.learn_sub': 'Guias completos sobre fundamentos de orçamento, comparações de métodos e estratégias.',
    'home.view_guides': 'Ver todos os guias →',
    'home.read_article': 'Ler artigo completo →',
    'home.faq_heading': 'Perguntas Frequentes sobre Planejamento Orçamentário',
    'home.faq_sub': 'Tudo o que você precisa saber para criar um orçamento realista e escolher o melhor método.',
    'home.cta_eyebrow': 'Comece Hoje',
    'home.cta_heading': 'Pronto para criar um orçamento que realmente funciona?',
    'home.cta_sub': 'Sem contas, sem cartão de crédito e sem conexão bancária. Apenas números claros para controlar seu dinheiro.',
    'home.open_free_planner': 'Abrir Planejador Gratuito',
    'home.download_templates': 'Baixar Modelos',

    // Actions & Core Strings
    'actions.delete': 'Excluir',
    'actions.save': 'Salvar',
    'actions.reset': 'Redefinir',
    'common.income': 'Renda',
    'common.expenses': 'Despesas',
    'common.needs': 'Necessidades',
    'common.wants': 'Desejos',
    'common.savings': 'Poupança',
    'common.debt': 'Dívidas',
    'common.over_budget': 'Acima do Orçamento',
    'common.under_allocated': 'Subalocado',
    'common.new_need': 'Nova Linha de Necessidade',
    'common.new_want': 'Nova Linha de Desejo',
    'common.new_savings': 'Nova Linha de Poupança/Dívida',
    'confirm.reset_503020': 'Redefinir o planejador 50/30/20 para valores de amostra?',

    // Switcher HTML descriptions
    'gbp.switch_methods_desc': 'Mude para o <a href="/50-30-20-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Método 50/30/20</a> para metas percentuais, ou para o <a href="/zero-based-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Orçamento Base Zero</a> para alocar cada centavo a zero.',
    'f3020.switch_methods_desc': 'Mude para o <a href="/budget-planner/" class="text-[#0070f3] underline hover:text-[#0761d1]">Orçamento Geral</a> para categorias flexíveis, ou para o <a href="/zero-based-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Orçamento Base Zero</a> para alocar cada centavo a zero.',
    'zbb.switch_methods_desc': 'Mude para o <a href="/budget-planner/" class="text-[#0070f3] underline hover:text-[#0761d1]">Orçamento Geral</a> para categorias flexíveis, ou para o <a href="/50-30-20-budget/" class="text-[#0070f3] underline hover:text-[#0761d1]">Método 50/30/20</a> para metas percentuais.',

    // Planners & Guides
    'f3020.eyebrow': 'Estrutura Orçamentária',
    'f3020.guide_title': 'Lembre-se: 50/30/20 é um guia, não uma regra rígida',
    'f3020.guide_desc': 'Em cidades de custo alto, a moradia costuma consumir de 35% a 45% da renda, elevando as Necessidades a 60%. Ajuste os Desejos em vez de desistir do planejamento.',
    'f3020.calc_eyebrow': 'Calculadora Interativa',
    'f3020.calc_title': 'Planejador 50/30/20 Interativo e Comparação de Metas',
    'f3020.calc_desc': 'Insira sua renda líquida para gerar metas automáticas e comparar com seus gastos reais.',
    'zbb.eyebrow': 'Fluxo de Caixa Intencional',
    'zbb.calc_eyebrow': 'Ferramenta Interativa',
    'zbb.calc_title': 'Construtor Interativo de Orçamento Base Zero',
    'zbb.calc_desc': 'Insira sua renda líquida, aloque valores nas categorias e veja o medidor atingir o zero.',

    // Templates UI
    'templates.quick_jump': 'Acesso Rápido:',
    'templates.download_csv': 'Baixar CSV',
    'templates.use_tool': 'Usar Ferramenta Online',
    'templates.best_for': 'Ideal Para & Público',
    'templates.structure_highlights': 'Estrutura & Destaques',

    // Learn UI
    'learn.try_f3020_tool': 'Testar a Ferramenta 50/30/20',
    'learn.compare_zbb': 'Comparar com Orçamento Base Zero',

    // Error Pages
    'error.404_eyebrow': 'Erro 404 • Página Não Encontrada',
    'error.404_title': 'Esta Página Não Está no Orçamento',
    'error.404_desc': 'O link pode estar expirado ou incorreto. Seus dados salvos localmente continuam seguros.',
    'error.return_home': 'Voltar ao Início',
    'error.popular_destinations': 'Destinos Populares',
    'error.500_eyebrow': 'Erro 500 • Erro Interno',
    'error.500_title': 'Ocorreu um Problema Técnico Temporário',
    'error.500_desc': 'Ocorreu um erro inesperado. Como seus orçamentos são calculados e salvos localmente no navegador, seus dados estão seguros.',
    'error.reload_page': 'Recarregar Página',
    'error.data_safe': 'Seus Dados Locais Estão Seguros',
    'error.data_safe_desc': 'O My Real Budget não envia seus cálculos para bancos de dados externos. Tente novamente em alguns minutos.',

    // Accessibility & Controls
    'aria.select_currency': 'Selecionar Moeda do Orçamento',
    'aria.select_language': 'Selecionar Idioma da Interface',
    'aria.switch_light': 'Alternar para modo claro',
    'aria.switch_dark': 'Alternar para modo escuro',
  },
};

// Integrate localized FAQ, Learn card metadata, subpage FAQs, and article content into TRANSLATIONS
const FAQ_LEARN_EXTRAS: Record<string, Record<string, string>> = {
  en: {
    'home.faq_heading': 'Frequently Asked Questions About Budget Planning',
    'home.faq_sub': 'Everything you need to know about setting up a realistic budget, choosing between the 50/30/20 rule and zero-based budgeting, and using free planner templates.',
    'home.learn_heading': 'Master Your Money With Real Guides',
    'home.learn_sub': 'In-depth guides on budgeting fundamentals, method comparisons, and realistic cash flow strategies.',
    'home.view_guides': 'View all guides →',
    'home.read_article': 'Read full article →',
    'learn.ready_to_plan_desc': 'Reading guides is helpful, but seeing your real cash flow numbers in an interactive tool creates immediate clarity.',
  },
  es: {
    'home.faq_heading': 'Preguntas Frecuentes sobre la Planificación de Presupuesto',
    'home.faq_sub': 'Todo lo que necesita saber para crear un presupuesto realista, elegir entre la regla 50/30/20 y el presupuesto base cero, y utilizar plantillas gratuitas.',
    'home.learn_heading': 'Domine su Dinero con Guías Prácticas',
    'home.learn_sub': 'Guías detalladas sobre fundamentos presupuestarios, comparativas de métodos y estrategias reales de flujo de caja.',
    'home.view_guides': 'Ver todas las guías →',
    'home.read_article': 'Leer artículo completo →',
    'learn.ready_to_plan_desc': 'Leer guías es útil, pero ver sus cifras reales en una herramienta interactiva aporta claridad inmediata.',
  },
  fr: {
    'home.faq_heading': 'Foire Aux Questions sur la Gestion Budgétaire',
    'home.faq_sub': 'Tout ce qu\'il faut savoir pour concevoir un budget réaliste, choisir entre la règle 50/30/20 et le budget base zéro, et utiliser nos modèles gratuits.',
    'home.learn_heading': 'Maîtrisez Vos Finances avec des Guides Concrets',
    'home.learn_sub': 'Des guides détaillés sur les fondamentaux du budget, la comparaison des méthodes et les stratégies de trésorerie concrètes.',
    'home.view_guides': 'Voir tous les guides →',
    'home.read_article': 'Lire l\'article complet →',
    'learn.ready_to_plan_desc': 'Lire des guides est utile, mais visualiser ses vrais chiffres dans un outil interactif apporte une clarté immédiate.',
  },
  de: {
    'home.faq_heading': 'Häufig gestellte Fragen zur Budgetplanung',
    'home.faq_sub': 'Alles, was Sie wissen müssen, um ein realistisches Budget aufzustellen, zwischen 50/30/20 und Null-basiertem Planen zu wählen und Vorlagen zu nutzen.',
    'home.learn_heading': 'Meistern Sie Ihre Finanzen mit praxisnahen Leitfäden',
    'home.learn_sub': 'Fundierte Leitfäden zu Budget-Grundlagen, Methodenvergleichen und realistischen Cashflow-Strategien.',
    'home.view_guides': 'Alle Leitfäden ansehen →',
    'home.read_article': 'Vollständigen Artikel lesen →',
    'learn.ready_to_plan_desc': 'Leitfäden zu lesen hilft, doch erst reale Zahlen in einem interaktiven Werkzeug schaffen sofortige Klarheit.',
  },
  pt: {
    'home.faq_heading': 'Perguntas Frequentes sobre Planejamento de Orçamento',
    'home.faq_sub': 'Tudo o que você precisa saber para montar um orçamento realista, escolher entre a regra 50/30/20 e o base zero, e usar modelos gratuitos.',
    'home.learn_heading': 'Domine suas Finanças com Guias Práticos',
    'home.learn_sub': 'Guias completos sobre fundamentos de orçamento, comparações de métodos e estratégias reais de fluxo de caixa.',
    'home.view_guides': 'Ver todos os guias →',
    'home.read_article': 'Ler artigo completo →',
    'learn.ready_to_plan_desc': 'Ler guias ajuda, mas ver seus números reais em uma ferramenta interativa traz clareza imediata.',
  },
};

(['en', 'es', 'fr', 'de', 'pt'] as const).forEach((lang) => {
  Object.assign(
    TRANSLATIONS[lang],
    FAQ_LEARN_EXTRAS[lang] || {},
    HOME_FAQ_TRANSLATIONS[lang] || {},
    LEARN_TRANSLATIONS[lang] || {},
    PAGE_FAQ_TRANSLATIONS[lang] || {},
    ARTICLE_CONTENT_TRANSLATIONS[lang] || {},
    TEMPLATES_TRANSLATIONS[lang] || {},
    EDITORIAL_TRANSLATIONS[lang] || {},
    SECONDARY_PAGES_TRANSLATIONS[lang] || {}
  );
});

/**
 * Default Category and Group Display Names for all 5 languages.
 * Internal keys remain stable English identifiers.
 */
export const DEFAULT_CATEGORY_NAMES: Record<string, Record<string, string>> = {
  'Housing': { en: 'Housing', es: 'Vivienda', fr: 'Logement', de: 'Wohnen', pt: 'Moradia' },
  'Utilities': { en: 'Utilities', es: 'Servicios públicos', fr: 'Services publics', de: 'Nebenkosten', pt: 'Serviços públicos' },
  'Food & Groceries': { en: 'Food & Groceries', es: 'Comida y supermercado', fr: 'Alimentation et courses', de: 'Lebensmittel & Verpflegung', pt: 'Alimentação e compras' },
  'Transportation': { en: 'Transportation', es: 'Transporte', fr: 'Transports', de: 'Transport', pt: 'Transporte' },
  'Insurance': { en: 'Insurance', es: 'Seguros', fr: 'Assurances', de: 'Versicherungen', pt: 'Seguros' },
  'Healthcare & Medical': { en: 'Healthcare & Medical', es: 'Salud y medicina', fr: 'Santé et soins', de: 'Gesundheit & Medizin', pt: 'Saúde e medicina' },
  'Debt Payments': { en: 'Debt Payments', es: 'Pago de deudas', fr: 'Remboursement de dettes', de: 'Schuldenzahlungen', pt: 'Pagamento de dívidas' },
  'Subscriptions & Memberships': { en: 'Subscriptions & Memberships', es: 'Suscripciones y membresías', fr: 'Abonnements', de: 'Abonnements & Mitgliedschaften', pt: 'Assinaturas e membros' },
  'Subscriptions & Lifestyle': { en: 'Subscriptions & Lifestyle', es: 'Suscripciones y estilo de vida', fr: 'Abonnements et loisirs', de: 'Abos & Lebensstil', pt: 'Assinaturas e estilo de vida' },
  'Entertainment & Leisure': { en: 'Entertainment & Leisure', es: 'Entretenimiento y ocio', fr: 'Divertissement et loisirs', de: 'Unterhaltung & Freizeit', pt: 'Entretenimento e lazer' },
  'Shopping & Personal': { en: 'Shopping & Personal', es: 'Compras y personal', fr: 'Achats et personnel', de: 'Shopping & Persönliches', pt: 'Compras e pessoal' },
  'Education & Learning': { en: 'Education & Learning', es: 'Educación y aprendizaje', fr: 'Éducation et formation', de: 'Bildung & Lernen', pt: 'Educação e aprendizado' },
  'Travel & Vacations': { en: 'Travel & Vacations', es: 'Viajes y vacaciones', fr: 'Voyages et vacances', de: 'Reisen & Urlaub', pt: 'Viagens e férias' },
  'Children & Family': { en: 'Children & Family', es: 'Hijos y familia', fr: 'Enfants et famille', de: 'Kinder & Familie', pt: 'Filhos e família' },
  'Savings & Emergency Fund': { en: 'Savings & Emergency Fund', es: 'Ahorro y emergencia', fr: 'Épargne et fonds d\'urgence', de: 'Ersparnisse & Notgroschen', pt: 'Poupança e emergência' },
  'Savings & Investments': { en: 'Savings & Investments', es: 'Ahorros e inversiones', fr: 'Épargne et investissements', de: 'Ersparnisse & Investitionen', pt: 'Poupança e investimentos' },
  'Investments & Retirement': { en: 'Investments & Retirement', es: 'Inversiones y jubilación', fr: 'Investissements et retraite', de: 'Investitionen & Ruhestand', pt: 'Investimentos e aposentadoria' },
  'Other & Miscellaneous': { en: 'Other & Miscellaneous', es: 'Otros y varios', fr: 'Autre et divers', de: 'Sonstiges & Verschiedenes', pt: 'Outros e diversos' },
  // Zero-based group names
  'Monthly Income': { en: 'Monthly Income', es: 'Ingreso Mensual', fr: 'Revenu Mensuel', de: 'Monatliches Einkommen', pt: 'Renda Mensal' },
  'Fixed Essentials (Needs)': { en: 'Fixed Essentials (Needs)', es: 'Gastos Fijos Esenciales (Necesidades)', fr: 'Dépenses Fixes Essentielles (Besoins)', de: 'Feste Grundausgaben (Bedürfnisse)', pt: 'Essenciais Fixos (Necessidades)' },
  'Variable Living (Wants)': { en: 'Variable Living (Wants)', es: 'Gastos Variables (Deseos)', fr: 'Dépenses Variables (Envies)', de: 'Variable Lebenshaltung (Wünsche)', pt: 'Gastos Variáveis (Desejos)' },
  'Debt Reduction': { en: 'Debt Reduction', es: 'Reducción de Deuda', fr: 'Réduction de la Dette', de: 'Schuldenabbau', pt: 'Redução de Dívidas' },
  'Savings Goals': { en: 'Savings Goals', es: 'Metas de Ahorro', fr: 'Objectifs d\'Épargne', de: 'Sparziele', pt: 'Metas de Poupança' },
  'Housing & Living Essentials': { en: 'Housing & Living Essentials', es: 'Vivienda y Gastos Esenciales', fr: 'Logement et Dépenses Essentielles', de: 'Wohnen & Grundbedarf', pt: 'Moradia e Gastos Essenciais' },
  'Savings & Sinking Funds': { en: 'Savings & Sinking Funds', es: 'Ahorros y Fondos de Amortización', fr: 'Épargne et Fonds Dédiés', de: 'Sparen & Rücklagenfonds', pt: 'Poupança e Fundos Específicos' },
  'Lifestyle & Fun Money': { en: 'Lifestyle & Fun Money', es: 'Estilo de Vida y Ocio', fr: 'Mode de Vie & Plaisirs', de: 'Lebensstil & Taschengeld', pt: 'Estilo de Vida e Lazer' },
  'Miscellaneous Cushion Buffer': { en: 'Miscellaneous Cushion Buffer', es: 'Colchón para Imprevistos', fr: 'Réserve pour Imprévus', de: 'Puffer für Unvorhergesehenes', pt: 'Reserva para Imprevistos' },
  'Insurance & Healthcare': { en: 'Insurance & Healthcare', es: 'Seguros y Salud', fr: 'Assurance & Santé', de: 'Versicherung & Gesundheit', pt: 'Seguros e Saúde' },
};

/**
 * Default Item Display Names for all 5 languages.
 */
export const DEFAULT_ITEM_NAMES: Record<string, Record<string, string>> = {
  'Primary Salary (Take-home)': { en: 'Primary Salary (Take-home)', es: 'Salario Principal (Neto)', fr: 'Salaire Principal (Net)', de: 'Haupteinkommen (Netto)', pt: 'Salário Principal (Líquido)' },
  'Primary Net Salary': { en: 'Primary Net Salary', es: 'Salario Neto Principal', fr: 'Salaire Net Principal', de: 'Haupt-Nettoeinkommen', pt: 'Salário Líquido Principal' },
  'Side Income': { en: 'Side Income', es: 'Ingresos Secundarios', fr: 'Revenus Secondaires', de: 'Nebeneinkünfte', pt: 'Renda Extra' },
  'Freelance & Contract': { en: 'Freelance & Contract', es: 'Trabajo Freelance / Contratos', fr: 'Freelance & Contrats', de: 'Freiberuflich & Projekte', pt: 'Freelance e Contratos' },
  'Bonuses & Commission': { en: 'Bonuses & Commission', es: 'Bonos y Comisiones', fr: 'Primes et Commissions', de: 'Boni & Provisionen', pt: 'Bônus e Comissões' },
  'Rental Income': { en: 'Rental Income', es: 'Ingresos por Alquiler', fr: 'Revenus Locatifs', de: 'Mieteinnahmen', pt: 'Renda de Aluguel' },
  'Investment Income': { en: 'Investment Income', es: 'Rendimientos de Inversión', fr: 'Revenus de Placement', de: 'Kapitalerträge', pt: 'Rendimentos de Investimento' },
  'Other Income': { en: 'Other Income', es: 'Otros Ingresos', fr: 'Autres Revenus', de: 'Sonstige Einnahmen', pt: 'Outras Rendas' },
  'Rent or Mortgage': { en: 'Rent or Mortgage', es: 'Alquiler o Hipoteca', fr: 'Loyer ou Prêt Immobilier', de: 'Miete oder Hypothek', pt: 'Aluguel ou Hipoteca' },
  'Property Taxes & HOA': { en: 'Property Taxes & HOA', es: 'Impuestos de Propiedad y Comunidad', fr: 'Taxes Foncières & Copropriété', de: 'Grundsteuer & Hausgeld', pt: 'IPTU e Condomínio' },
  'Home Maintenance & Repairs': { en: 'Home Maintenance & Repairs', es: 'Mantenimiento del Hogar', fr: 'Entretien du Logement', de: 'Instandhaltung & Reparaturen', pt: 'Manutenção da Casa' },
  'Electricity': { en: 'Electricity', es: 'Electricidad', fr: 'Électricité', de: 'Strom', pt: 'Eletricidade' },
  'Electricity & Utilities': { en: 'Electricity & Utilities', es: 'Electricidad y Servicios', fr: 'Électricité et Factures', de: 'Strom & Nebenkosten', pt: 'Eletricidade e Contas' },
  'Water & Gas': { en: 'Water & Gas', es: 'Agua y Gas', fr: 'Eau et Gaz', de: 'Wasser & Gas', pt: 'Água e Gás' },
  'High-speed Internet': { en: 'High-speed Internet', es: 'Internet', fr: 'Internet Haut Débit', de: 'Internetanschluss', pt: 'Internet' },
  'Mobile Phone Plan': { en: 'Mobile Phone Plan', es: 'Plan de Telefonía Móvil', fr: 'Forfait Mobile', de: 'Mobilfunkvertrag', pt: 'Plano de Celular' },
  'Groceries & Household Supplies': { en: 'Groceries & Household Supplies', es: 'Supermercado y Hogar', fr: 'Courses & Produits Ménagers', de: 'Lebensmittel & Haushalt', pt: 'Compras de Mercado e Casa' },
  'Groceries & Household': { en: 'Groceries & Household', es: 'Supermercado y Hogar', fr: 'Courses & Entretien', de: 'Lebensmittel & Haushalt', pt: 'Supermercado e Casa' },
  'Dining Out & Takeaway': { en: 'Dining Out & Takeaway', es: 'Restaurantes y Comida para Llevar', fr: 'Restaurants & Plats à Emporter', de: 'Restaurant & Lieferservice', pt: 'Restaurantes e Delivery' },
  'Car Loan / Lease Payment': { en: 'Car Loan / Lease Payment', es: 'Cuota del Auto / Leasing', fr: 'Prêt Auto / Leasing', de: 'Autokredit / Leasing', pt: 'Financiamento do Carro' },
  'Car Payment': { en: 'Car Payment', es: 'Cuota del Auto', fr: 'Mensualité Auto', de: 'Autorate', pt: 'Parcela do Carro' },
  'Gas / Fuel / Charging': { en: 'Gas / Fuel / Charging', es: 'Gasolina / Carga', fr: 'Carburant / Recharge', de: 'Benzin / Laden', pt: 'Combustível / Recarga' },
  'Gasoline / Fuel': { en: 'Gasoline / Fuel', es: 'Gasolina / Combustible', fr: 'Carburant', de: 'Benzin / Kraftstoff', pt: 'Combustível' },
  'Public Transit / Rideshare': { en: 'Public Transit / Rideshare', es: 'Transporte Público / Taxi', fr: 'Transports Publics', de: 'ÖPNV / Fahrten', pt: 'Transporte Público' },
  'Car Maintenance & Tires': { en: 'Car Maintenance & Tires', es: 'Mantenimiento del Auto', fr: 'Entretien Auto & Pneus', de: 'Autowartung & Reifen', pt: 'Manutenção do Carro' },
  'Health & Dental Insurance': { en: 'Health & Dental Insurance', es: 'Seguro Médico y Dental', fr: 'Mutuelle & Santé', de: 'Krankenversicherung', pt: 'Plano de Saúde e Dental' },
  'Auto Insurance': { en: 'Auto Insurance', es: 'Seguro del Auto', fr: 'Assurance Auto', de: 'Kfz-Versicherung', pt: 'Seguro do Carro' },
  'Renters / Home Insurance': { en: 'Renters / Home Insurance', es: 'Seguro de Hogar / Inquilino', fr: 'Assurance Habitation', de: 'Hausratversicherung', pt: 'Seguro Residencial' },
  'Renters / Homeowners Insurance': { en: 'Renters / Homeowners Insurance', es: 'Seguro de Vivienda', fr: 'Assurance Habitation', de: 'Wohngebäudeversicherung', pt: 'Seguro Residencial' },
  'Life & Disability Insurance': { en: 'Life & Disability Insurance', es: 'Seguro de Vida e Invalidez', fr: 'Assurance Vie & Invalidité', de: 'Lebens- & Berufsunfähigkeit', pt: 'Seguro de Vida' },
  'Prescriptions & Medications': { en: 'Prescriptions & Medications', es: 'Medicamentos y Recetas', fr: 'Médicaments & Soins', de: 'Medikamente & Rezepte', pt: 'Medicamentos' },
  'Medical Co-pays & Prescriptions': { en: 'Medical Co-pays & Prescriptions', es: 'Copagos Médicos y Recetas', fr: 'Consultations & Médicaments', de: 'Zuzahlungen & Medikamente', pt: 'Consultas e Remédios' },
  'Co-pays & Doctor Visits': { en: 'Co-pays & Doctor Visits', es: 'Consultas Médicas y Copagos', fr: 'Consultations Médicales', de: 'Arztbesuche & Zuzahlungen', pt: 'Consultas Médicas' },
  'Student Loans': { en: 'Student Loans', es: 'Préstamos Estudiantiles', fr: 'Prêt Étudiant', de: 'Studienkredit', pt: 'Empréstimo Estudantil' },
  'Student Loan Payment': { en: 'Student Loan Payment', es: 'Pago de Préstamo Estudiantil', fr: 'Remboursement Prêt Étudiant', de: 'Studienkreditrate', pt: 'Parcela de Empréstimo Estudantil' },
  'Credit Card Payments': { en: 'Credit Card Payments', es: 'Pagos de Tarjeta de Crédito', fr: 'Paiements Carte de Crédit', de: 'Kreditkartenzahlungen', pt: 'Fatura do Cartão' },
  'Credit Card Minimum': { en: 'Credit Card Minimum', es: 'Pago Mínimo de Tarjeta', fr: 'Minimum Carte de Crédit', de: 'Kreditkarten-Mindestrate', pt: 'Mínimo do Cartão' },
  'Credit Card Debt': { en: 'Credit Card Debt', es: 'Deuda de Tarjeta de Crédito', fr: 'Dette de Carte de Crédit', de: 'Kreditkartenschulden', pt: 'Dívida de Cartão' },
  'Personal Loans': { en: 'Personal Loans', es: 'Préstamos Personales', fr: 'Prêts Personnels', de: 'Privatkredite', pt: 'Empréstimos Pessoais' },
  'Streaming Services (Netflix, Spotify, etc.)': { en: 'Streaming Services', es: 'Servicios de Streaming', fr: 'Services de Streaming', de: 'Streaming-Dienste', pt: 'Serviços de Streaming' },
  'Streaming & Apps': { en: 'Streaming & Apps', es: 'Streaming y Apps', fr: 'Streaming & Applications', de: 'Streaming & Apps', pt: 'Streaming e Aplicativos' },
  'Gym / Fitness Membership': { en: 'Gym / Fitness Membership', es: 'Gimnasio / Membresía', fr: 'Salle de Sport', de: 'Fitnessstudio', pt: 'Academia' },
  'Software & Cloud Storage': { en: 'Software & Cloud Storage', es: 'Software y Almacenamiento', fr: 'Logiciels & Stockage Cloud', de: 'Software & Cloud', pt: 'Softwares e Nuvem' },
  'Concerts, Movies & Activities': { en: 'Concerts, Movies & Activities', es: 'Conciertos y Actividades', fr: 'Concerts, Cinéma & Loisirs', de: 'Konzerte & Kino', pt: 'Shows, Cinema e Lazer' },
  'Entertainment & Fun Money': { en: 'Entertainment & Fun Money', es: 'Entretenimiento y Ocio', fr: 'Divertissement & Loisirs', de: 'Freizeit & Taschengeld', pt: 'Lazer e Diversão' },
  'Hobbies & Crafts': { en: 'Hobbies & Crafts', es: 'Pasatiempos y Manualidades', fr: 'Passions & Loisirs', de: 'Hobbys & Basteln', pt: 'Hobbies' },
  'Clothing & Footwear': { en: 'Clothing & Footwear', es: 'Ropa y Calzado', fr: 'Vêtements & Chaussures', de: 'Kleidung & Schuhe', pt: 'Roupas e Calçados' },
  'Haircuts & Personal Care': { en: 'Haircuts & Personal Care', es: 'Cuidado Personal y Peluquería', fr: 'Coiffure & Soins Personnels', de: 'Friseur & Körperpflege', pt: 'Corte de Cabelo e Cuidados' },
  'Books, Courses & Certifications': { en: 'Books, Courses & Certifications', es: 'Libros y Cursos', fr: 'Livres, Cours & Formations', de: 'Bücher & Kurse', pt: 'Livros e Cursos' },
  'Annual Travel & Holidays Fund': { en: 'Annual Travel & Holidays Fund', es: 'Fondo de Viajes y Vacaciones', fr: 'Fonds Vacances & Voyages', de: 'Urlaubskasse', pt: 'Fundo de Férias e Viagens' },
  'Childcare & School Activities': { en: 'Childcare & School Activities', es: 'Cuidado Infantil y Escuela', fr: 'Garde d\'Enfants & École', de: 'Kinderbetreuung & Schule', pt: 'Creche e Escola' },
  'Pet Food, Vet & Supplies': { en: 'Pet Food, Vet & Supplies', es: 'Mascotas, Comida y Veterinario', fr: 'Animaux, Vétérinaire & Nourriture', de: 'Tiernahrung & Tierarzt', pt: 'Pet, Veterinário e Ração' },
  'High-Yield Emergency Fund': { en: 'High-Yield Emergency Fund', es: 'Fondo de Emergencia', fr: 'Fonds d\'Urgence Rémunéré', de: 'Notgroschen-Tagesgeld', pt: 'Fundo de Emergência' },
  'Emergency Fund': { en: 'Emergency Fund', es: 'Fondo de Emergencia', fr: 'Fonds d\'Urgence', de: 'Notgroschen', pt: 'Fundo de Emergência' },
  'Short-term Savings Target': { en: 'Short-term Savings Target', es: 'Meta de Ahorro a Corto Plazo', fr: 'Épargne Court Terme', de: 'Kurzfristiges Sparziel', pt: 'Meta de Poupança Curto Prazo' },
  'Roth IRA / Brokerage Contribution': { en: 'Roth IRA / Brokerage Contribution', es: 'Inversión / Jubilación', fr: 'Placements & Retraite', de: 'Altersvorsorge / Depot', pt: 'Investimentos / Aposentadoria' },
  'Roth IRA / Retirement': { en: 'Roth IRA / Retirement', es: 'Jubilación / Inversiones', fr: 'Retraite & Investissements', de: 'Altersvorsorge & Depot', pt: 'Aposentadoria / Investimentos' },
  'Miscellaneous Buffer / Buffer Cash': { en: 'Miscellaneous Buffer', es: 'Colchón para Imprevistos', fr: 'Réserve pour Imprévus', de: 'Puffer für Unvorhergesehenes', pt: 'Reserva para Imprevistos' },
  'Rent / Mortgage': { en: 'Rent / Mortgage', es: 'Alquiler / Hipoteca', fr: 'Loyer / Prêt Immo', de: 'Miete / Hypothek', pt: 'Aluguel / Hipoteca' },
  'Groceries & Essentials': { en: 'Groceries & Essentials', es: 'Supermercado y Esenciales', fr: 'Courses & Produits de Base', de: 'Lebensmittel & Grundbedarf', pt: 'Supermercado e Essenciais' },
  'Utilities & Internet': { en: 'Utilities & Internet', es: 'Servicios e Internet', fr: 'Charges & Internet', de: 'Nebenkosten & Internet', pt: 'Contas de Consumo e Internet' },
  'Car Loan & Insurance': { en: 'Car Loan & Insurance', es: 'Préstamo de Auto y Seguro', fr: 'Prêt Auto & Assurance', de: 'Autokredit & Versicherung', pt: 'Financiamento e Seguro do Carro' },
  'Health & Prescriptions': { en: 'Health & Prescriptions', es: 'Salud y Recetas', fr: 'Santé & Médicaments', de: 'Gesundheit & Rezepte', pt: 'Saúde e Medicamentos' },
  'Entertainment & Hobbies': { en: 'Entertainment & Hobbies', es: 'Entretenimiento y Hobbies', fr: 'Loisirs & Passions', de: 'Freizeit & Hobbys', pt: 'Lazer e Hobbies' },
  'Streaming & Subscriptions': { en: 'Streaming & Subscriptions', es: 'Streaming y Suscripciones', fr: 'Streaming & Abonnements', de: 'Streaming & Abos', pt: 'Streaming e Assinaturas' },
  'Shopping & Personal Care': { en: 'Shopping & Personal Care', es: 'Compras y Cuidado Personal', fr: 'Shopping & Soins', de: 'Shopping & Körperpflege', pt: 'Compras e Cuidados Pessoais' },
  'Emergency Savings Account': { en: 'Emergency Savings Account', es: 'Cuenta de Ahorro para Emergencias', fr: 'Compte d\'Épargne d\'Urgence', de: 'Notgroschen-Konto', pt: 'Conta Poupança de Emergência' },
  'Extra Student Debt Paydown': { en: 'Extra Student Debt Paydown', es: 'Amortización Extra de Préstamo Estudiantil', fr: 'Remboursement Anticipé Dette Étudiante', de: 'Sondertilgung Studienkredit', pt: 'Amortização Extra de Dívida Estudantil' },
  'Freelance & Side Gig': { en: 'Freelance & Side Gig', es: 'Freelance e Ingresos Extra', fr: 'Freelance & Activités Secondaires', de: 'Freiberuflich & Nebentätigkeit', pt: 'Freelance e Renda Extra' },
  'Utilities (Power/Water/Gas)': { en: 'Utilities (Power/Water/Gas)', es: 'Servicios (Luz/Agua/Gas)', fr: 'Charges (Électricité/Eau/Gaz)', de: 'Nebenkosten (Strom/Wasser/Gas)', pt: 'Contas (Luz/Água/Gás)' },
  'Groceries': { en: 'Groceries', es: 'Supermercado', fr: 'Courses', de: 'Lebensmittel', pt: 'Supermercado' },
  'Transportation & Gas': { en: 'Transportation & Gas', es: 'Transporte y Combustible', fr: 'Transports & Carburant', de: 'Transport & Benzin', pt: 'Transporte e Combustível' },
  'Student Loan Minimum': { en: 'Student Loan Minimum', es: 'Cuota Mínima Préstamo Estudiantil', fr: 'Minimum Prêt Étudiant', de: 'Mindestrate Studienkredit', pt: 'Mínimo de Empréstimo Estudantil' },
  'Accelerated Extra Principal Payoff': { en: 'Accelerated Extra Principal Payoff', es: 'Amortización Acelerada de Capital', fr: 'Remboursement Accéléré du Principal', de: 'Beschleunigte Schuldentilgung', pt: 'Amortização Acelerada de Dívida' },
  'Emergency Cushion Fund': { en: 'Emergency Cushion Fund', es: 'Fondo Colchón de Emergencia', fr: 'Fonds de Réserve d\'Urgence', de: 'Notgroschen-Rücklage', pt: 'Fundo Reserva de Emergência' },
  'Annual Car Maintenance Sinking Fund': { en: 'Annual Car Maintenance Sinking Fund', es: 'Fondo para Mantenimiento Anual del Auto', fr: 'Fonds Entretien Auto Annuel', de: 'Rücklage für jährliche Autowartung', pt: 'Fundo Anual de Manutenção do Carro' },
  'Dining Out & Entertainment': { en: 'Dining Out & Entertainment', es: 'Restaurantes y Ocio', fr: 'Sorties & Divertissement', de: 'Gastronomie & Freizeit', pt: 'Restaurantes e Lazer' },
  'Subscriptions & Software': { en: 'Subscriptions & Software', es: 'Suscripciones y Software', fr: 'Abonnements & Logiciels', de: 'Abos & Software', pt: 'Assinaturas e Softwares' },
  'Personal Care & Clothing': { en: 'Personal Care & Clothing', es: 'Cuidado Personal y Ropa', fr: 'Soins Personnels & Vêtements', de: 'Körperpflege & Kleidung', pt: 'Cuidados Pessoais e Roupas' },
  'Checking Account Buffer (Zero cushion)': { en: 'Checking Account Buffer (Zero cushion)', es: 'Colchón en Cuenta Corriente (Buffer)', fr: 'Matelas Compte Courant (Réserve)', de: 'Girokonto-Puffer (Sicherheitsreserve)', pt: 'Reserva na Conta Corrente' },
  'Primary Salary (Take-home)': { en: 'Primary Salary (Take-home)', es: 'Salario Principal (Neto)', fr: 'Salaire Principal (Net)', de: 'Hauptgehalt (Netto)', pt: 'Salário Principal (Líquido)' },
  'Side Income': { en: 'Side Income', es: 'Ingreso Extra', fr: 'Revenu Complémentaire', de: 'Nebeneinkommen', pt: 'Renda Extra' },
  'Freelance & Contract': { en: 'Freelance & Contract', es: 'Freelance y Contratos', fr: 'Freelance & Missions', de: 'Freiberuflich & Aufträge', pt: 'Freelance e Contratos' },
  'Rent or Mortgage': { en: 'Rent or Mortgage', es: 'Alquiler o Hipoteca', fr: 'Loyer ou Prêt Immo', de: 'Miete oder Hypothek', pt: 'Aluguel ou Hipoteca' },
  'Maintenance & Repairs': { en: 'Maintenance & Repairs', es: 'Mantenimiento y Reparaciones', fr: 'Entretien & Réparations', de: 'Instandhaltung & Reparaturen', pt: 'Manutenção e Reparos' },
  'Electricity & Gas': { en: 'Electricity & Gas', es: 'Electricidad y Gas', fr: 'Électricité & Gaz', de: 'Strom & Gas', pt: 'Eletricidade e Gás' },
  'Water & Trash': { en: 'Water & Trash', es: 'Agua y Basura', fr: 'Eau & Déchets', de: 'Wasser & Müll', pt: 'Água e Lixo' },
  'Internet & Mobile Plan': { en: 'Internet & Mobile Plan', es: 'Internet y Telefonía', fr: 'Internet & Forfait Mobile', de: 'Internet & Mobilfunk', pt: 'Internet e Plano Celular' },
  'Dining Out & Coffee': { en: 'Dining Out & Coffee', es: 'Restaurantes y Café', fr: 'Restaurants & Café', de: 'Essen gehen & Kaffee', pt: 'Restaurantes e Café' },
  'Car Loan / Transit Pass': { en: 'Car Loan / Transit Pass', es: 'Préstamo de Auto / Abono de Transporte', fr: 'Prêt Auto / Pass Transports', de: 'Autokredit / ÖPNV-Ticket', pt: 'Financiamento do Carro / Transporte Público' },
  'Gas / Fuel': { en: 'Gas / Fuel', es: 'Gasolina / Combustible', fr: 'Carburant / Essence', de: 'Benzin / Kraftstoff', pt: 'Combustível / Gasolina' },
  'Auto Maintenance & Tires': { en: 'Auto Maintenance & Tires', es: 'Mantenimiento del Auto y Neumáticos', fr: 'Entretien Auto & Pneus', de: 'Autowartung & Reifen', pt: 'Manutenção do Carro e Pneus' },
};

/**
 * Returns the translated category or group name, or the original if not a known default.
 */
export function translateCategoryName(name: string, lang?: string): string {
  if (!name) return '';
  const activeLang = lang || getSelectedLanguage();
  if (activeLang === 'en') return name;

  // Direct lookup by English key
  if (DEFAULT_CATEGORY_NAMES[name] && DEFAULT_CATEGORY_NAMES[name][activeLang]) {
    return DEFAULT_CATEGORY_NAMES[name][activeLang];
  }

  // Reverse search if name was previously translated from a default
  for (const group of Object.values(DEFAULT_CATEGORY_NAMES)) {
    for (const val of Object.values(group)) {
      if (val.toLowerCase() === name.trim().toLowerCase()) {
        return group[activeLang] || group.en || name;
      }
    }
  }

  return name;
}

/**
 * Returns the translated item name, or the original if custom.
 */
export function translateItemName(name: string, lang?: string): string {
  if (!name) return '';
  const activeLang = lang || getSelectedLanguage();
  if (activeLang === 'en') return name;

  if (DEFAULT_ITEM_NAMES[name] && DEFAULT_ITEM_NAMES[name][activeLang]) {
    return DEFAULT_ITEM_NAMES[name][activeLang];
  }

  for (const group of Object.values(DEFAULT_ITEM_NAMES)) {
    for (const val of Object.values(group)) {
      if (val.toLowerCase() === name.trim().toLowerCase()) {
        return group[activeLang] || group.en || name;
      }
    }
  }

  return name;
}

/**
 * Translate frequency code into localized string.
 */
export function getFrequencyLabel(freq: string, lang?: string): string {
  const activeLang = lang || getSelectedLanguage();
  const key = `freq.${freq}`;
  return t(key, activeLang);
}

export function t(
  key: string,
  langOrParams?: string | Record<string, any>,
  params?: Record<string, any>
): string {
  let activeLang: string;
  let finalParams: Record<string, any> | undefined;

  if (typeof langOrParams === 'object' && langOrParams !== null) {
    activeLang = getSelectedLanguage();
    finalParams = langOrParams;
  } else {
    activeLang = (typeof langOrParams === 'string' && langOrParams) ? langOrParams : getSelectedLanguage();
    finalParams = params;
  }

  const langTable = TRANSLATIONS[activeLang] || TRANSLATIONS[DEFAULT_LANGUAGE];
  let text = langTable[key] || TRANSLATIONS[DEFAULT_LANGUAGE][key] || key;
  if (finalParams) {
    Object.entries(finalParams).forEach(([paramKey, paramVal]) => {
      text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramVal));
    });
  }
  return text;
}

export function getSelectedLanguage(): string {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES[saved.toLowerCase()]) {
      return saved.toLowerCase();
    }
  } catch (e) {}
  return DEFAULT_LANGUAGE;
}

export function setSelectedLanguage(lang: string): void {
  const lower = lang.toLowerCase();
  if (!SUPPORTED_LANGUAGES[lower]) return;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lower);
    } catch (e) {}
    // Update live DOM translations
    updateDocumentTranslations(lower);
    // Dispatch custom event for reactive UI updates
    window.dispatchEvent(
      new CustomEvent('myrealbudget:language-change', {
        detail: { language: lower, config: SUPPORTED_LANGUAGES[lower] },
      })
    );
  }
}

export function updateDocumentTranslations(targetLang?: string): void {
  if (typeof document === 'undefined') return;
  const lang = targetLang || getSelectedLanguage();

  // 1. Text elements
  document.querySelectorAll<HTMLElement>('[data-mrb-t]').forEach((el) => {
    const key = el.getAttribute('data-mrb-t');
    if (key) {
      if (key === 'footer.copyright') {
        el.textContent = t(key, lang, { year: new Date().getFullYear().toString() });
      } else {
        el.textContent = t(key, lang);
      }
    }
  });

  // 2. HTML elements
  document.querySelectorAll<HTMLElement>('[data-mrb-t-html]').forEach((el) => {
    const key = el.getAttribute('data-mrb-t-html');
    if (key) {
      el.innerHTML = t(key, lang);
    }
  });

  // 3. Placeholder elements
  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-mrb-t-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-mrb-t-placeholder');
    if (key) {
      el.placeholder = t(key, lang);
    }
  });

  // 4. Aria-label elements
  document.querySelectorAll<HTMLElement>('[data-mrb-t-aria]').forEach((el) => {
    const key = el.getAttribute('data-mrb-t-aria');
    if (key) {
      el.setAttribute('aria-label', t(key, lang));
    }
  });

  // 5. Title elements
  document.querySelectorAll<HTMLElement>('[data-mrb-t-title]').forEach((el) => {
    const key = el.getAttribute('data-mrb-t-title');
    if (key) {
      el.setAttribute('title', t(key, lang));
    }
  });

  // Sync html lang attribute
  if (document.documentElement) {
    document.documentElement.lang = lang;
  }
}

export function initLanguage(): void {
  if (typeof window === 'undefined') return;
  const current = getSelectedLanguage();

  // Sync all select elements on page
  const selects = document.querySelectorAll<HTMLSelectElement>('[data-mrb-lang-select]');
  selects.forEach((sel) => {
    sel.value = current;
    sel.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      setSelectedLanguage(target.value);
    });
  });

  window.addEventListener('myrealbudget:language-change', (e: any) => {
    const lang = e.detail?.language || current;
    document.querySelectorAll<HTMLSelectElement>('[data-mrb-lang-select]').forEach((sel) => {
      if (sel.value !== lang) sel.value = lang;
    });
  });

  // Run initial translation pass
  updateDocumentTranslations(current);

  // Dispatch initial language event so islands synchronize immediately
  window.dispatchEvent(
    new CustomEvent('myrealbudget:language-change', {
      detail: { language: current, config: SUPPORTED_LANGUAGES[current] },
    })
  );
}
