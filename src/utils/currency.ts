/**
 * Currency configuration and formatting for My Real Budget.
 * Supports USD ($), EUR (€), GBP (£), INR (₹), CAD (C$), and AUD (A$).
 * Default: USD ($).
 * NOTE: This is NOT a currency converter. Numeric values are preserved.
 */

export interface CurrencyConfig {
  code: string;
  symbol: string;
  label: string;
  narrowSymbol: string;
}

export const SUPPORTED_CURRENCIES: Record<string, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', label: 'USD ($)', narrowSymbol: '$' },
  EUR: { code: 'EUR', symbol: '€', label: 'EUR (€)', narrowSymbol: '€' },
  GBP: { code: 'GBP', symbol: '£', label: 'GBP (£)', narrowSymbol: '£' },
  INR: { code: 'INR', symbol: '₹', label: 'INR (₹)', narrowSymbol: '₹' },
  CAD: { code: 'CAD', symbol: 'C$', label: 'CAD (C$)', narrowSymbol: 'C$' },
  AUD: { code: 'AUD', symbol: 'A$', label: 'AUD (A$)', narrowSymbol: 'A$' },
  CNY: { code: 'CNY', symbol: '¥', label: 'CNY (¥)', narrowSymbol: '¥' },
};

export const DEFAULT_CURRENCY = 'USD';
export const CURRENCY_STORAGE_KEY = 'myrealbudget_currency';

/**
 * Shared money comparison tolerance.
 * For currencies with 2 decimal digits (cents, pence, paise, centimes),
 * 0.005 is half a cent/paisa, absorbing floating-point residue
 * without masking genuine differences.
 */
export const MONEY_TOLERANCE = 0.005;

export function roundToCents(amount: number): number {
  if (isNaN(amount) || !Number.isFinite(amount) || Math.abs(amount) > Number.MAX_SAFE_INTEGER / 100) return 0;
  const rounded = Math.round((amount + Number.EPSILON) * 100) / 100;
  return Number.isFinite(rounded) ? rounded : 0;
}

export function cleanMoney(amount: number, tolerance = MONEY_TOLERANCE): number {
  if (isNaN(amount) || !Number.isFinite(amount) || Math.abs(amount) > Number.MAX_SAFE_INTEGER / 100) return 0;
  const rounded = Math.round(amount * 100) / 100;
  if (!Number.isFinite(rounded)) return 0;
  return (Math.abs(rounded) < tolerance || Object.is(rounded, -0)) ? 0 : rounded;
}

export function isMoneyZero(amount: number, tolerance = MONEY_TOLERANCE): boolean {
  if (isNaN(amount) || !Number.isFinite(amount)) return true;
  return Math.abs(amount) < tolerance;
}

export function sanitizeAmount(val: any): number {
  const n = typeof val === 'number' ? val : parseFloat(val);
  if (isNaN(n) || !Number.isFinite(n) || n <= 0 || n > Number.MAX_SAFE_INTEGER / 100) return 0;
  return Math.round(n * 100) / 100;
}

export function getCurrencyConfig(code?: string): CurrencyConfig {
  if (!code) return SUPPORTED_CURRENCIES[DEFAULT_CURRENCY];
  const upper = code.toUpperCase();
  return SUPPORTED_CURRENCIES[upper] || SUPPORTED_CURRENCIES[DEFAULT_CURRENCY];
}

export function getCurrencySymbol(code?: string): string {
  return getCurrencyConfig(code).symbol;
}

export function getSelectedCurrency(): string {
  if (typeof window === 'undefined') return DEFAULT_CURRENCY;
  try {
    const saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
    if (saved && SUPPORTED_CURRENCIES[saved.toUpperCase()]) {
      return saved.toUpperCase();
    }
  } catch (e) { }
  return DEFAULT_CURRENCY;
}

function getActiveLanguage(): string {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('myrealbudget_language');
      if (saved) return saved.toLowerCase();
      if (typeof navigator !== 'undefined') {
        const langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language];
        for (const raw of langs) {
          if (!raw) continue;
          const lower = raw.toLowerCase().trim();
          const code = lower.split('-')[0];
          if (code === 'zh' || lower.startsWith('zh')) return 'zh';
          if (code === 'es') return 'es';
          if (code === 'fr') return 'fr';
          if (code === 'de') return 'de';
          if (code === 'pt') return 'pt';
          if (code === 'en') return 'en';
        }
      }
    } catch (e) { }
  }
  return 'en';
}

export function setSelectedCurrency(code: string): void {
  const upper = code.toUpperCase();
  if (!SUPPORTED_CURRENCIES[upper]) return;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, upper);
    } catch (e) { }
    // Update live DOM currency representations
    updateDocumentCurrencies(upper);
    // Dispatch custom event for reactive UI updates
    window.dispatchEvent(
      new CustomEvent('myrealbudget:currency-change', {
        detail: { currency: upper, config: SUPPORTED_CURRENCIES[upper] },
      })
    );
  }
}

export interface CurrencyFormatOptions {
  currency?: string;
  lang?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  compact?: boolean;
}

export function formatCurrency(
  amount: number,
  options: CurrencyFormatOptions = {}
): string {
  const sym = getCurrencySymbol(options.currency);
  if (amount === null || amount === undefined || isNaN(amount) || !Number.isFinite(amount)) {
    return `${sym}0`;
  }

  // Absorb floating point noise near zero so it never displays -0.00 or -$0.00
  amount = cleanMoney(amount);
  if (!Number.isFinite(amount) || isNaN(amount)) {
    return `${sym}0`;
  }

  const currencyCode = options.currency || getSelectedCurrency();
  const config = getCurrencyConfig(currencyCode);
  const lang = options.lang || getActiveLanguage();

  const hasCents = amount % 1 !== 0;
  const minDigits = options.minimumFractionDigits !== undefined
    ? options.minimumFractionDigits
    : (hasCents ? 2 : 0);
  const maxDigits = options.maximumFractionDigits !== undefined
    ? Math.max(options.maximumFractionDigits, minDigits)
    : Math.max(hasCents ? 2 : 0, minDigits);

  // Determine locale for number formatting based on language and currency
  let locale = 'en-US';
  if (currencyCode === 'INR' && lang === 'en') {
    locale = 'en-IN';
  } else {
    switch (lang) {
      case 'zh': locale = 'zh-CN'; break;
      case 'es': locale = 'es-ES'; break;
      case 'fr': locale = 'fr-FR'; break;
      case 'de': locale = 'de-DE'; break;
      case 'pt': locale = 'pt-BR'; break;
      default: locale = 'en-US'; break;
    }
  }

  const formattedNumber = new Intl.NumberFormat(locale, {
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
  }).format(Math.abs(amount));

  const sign = amount < 0 ? '-' : '';

  // In French and German, currency symbols are positioned after the number with a space
  if (lang === 'fr' || lang === 'de') {
    return `${sign}${formattedNumber}\u00A0${config.symbol}`;
  }

  // In English, Spanish, Portuguese, symbol is placed before
  return `${sign}${config.symbol}${formattedNumber}`;
}

export function parseCurrencyInput(value: string | number): number {
  return sanitizeAmount(value);
}

/**
 * Updates all DOM elements with currency-related data attributes:
 * - [data-mrb-currency-val]: updates to formatted number
 * - [data-mrb-currency-prefix-val]: updates to prefix + formatted number
 * - .currency-symbol, [data-mrb-currency-symbol]: updates to currency symbol
 */
export function updateDocumentCurrencies(currencyCode?: string): void {
  if (typeof document === 'undefined') return;
  const curr = currencyCode || getSelectedCurrency();
  const lang = getActiveLanguage();
  const sym = getCurrencySymbol(curr);

  // 1. Elements with numeric data attribute
  document.querySelectorAll<HTMLElement>('[data-mrb-currency-val]').forEach((el) => {
    const raw = el.getAttribute('data-mrb-currency-val');
    if (raw !== null) {
      const val = parseFloat(raw);
      el.textContent = formatCurrency(val, { currency: curr, lang });
    }
  });

  // 2. Elements with prefix + numeric data attribute
  document.querySelectorAll<HTMLElement>('[data-mrb-currency-prefix-val]').forEach((el) => {
    const raw = el.getAttribute('data-mrb-currency-prefix-val');
    if (raw !== null) {
      const val = parseFloat(raw);
      const prefix = el.getAttribute('data-mrb-currency-prefix') || '/ ';
      el.textContent = `${prefix}${formatCurrency(val, { currency: curr, lang })}`;
    }
  });

  // 3. Plain currency symbol decorators
  document.querySelectorAll<HTMLElement>('.currency-symbol, [data-mrb-currency-symbol]').forEach((el) => {
    el.textContent = sym;
  });
}

export function initCurrency(): void {
  if (typeof window === 'undefined') return;
  const current = getSelectedCurrency();

  // Sync all select elements on page
  const selects = document.querySelectorAll<HTMLSelectElement>('[data-mrb-currency-select]');
  selects.forEach((sel) => {
    sel.value = current;
    sel.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      setSelectedCurrency(target.value);
    });
  });

  window.addEventListener('myrealbudget:currency-change', (e: any) => {
    const curr = e.detail?.currency || current;
    document.querySelectorAll<HTMLSelectElement>('[data-mrb-currency-select]').forEach((sel) => {
      if (sel.value !== curr) sel.value = curr;
    });
    updateDocumentCurrencies(curr);
  });

  window.addEventListener('myrealbudget:language-change', () => {
    updateDocumentCurrencies();
  });

  // Initial update for static elements on page
  updateDocumentCurrencies(current);
}
