/**
 * Currency utility helpers for My Real Budget
 * Designed for US default ($) while architected for multi-currency extensibility.
 */

export interface CurrencyFormatOptions {
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  compact?: boolean;
}

export function formatCurrency(
  amount: number,
  options: CurrencyFormatOptions = {}
): string {
  const {
    currency = 'USD',
    minimumFractionDigits = 0,
    maximumFractionDigits = 2,
    compact = false,
  } = options;

  if (isNaN(amount) || amount === null || amount === undefined) {
    return '$0';
  }

  // If amount has no cents and no explicit fraction digits specified, display integer
  const hasCents = amount % 1 !== 0;
  const minDigits = options.minimumFractionDigits !== undefined 
    ? options.minimumFractionDigits 
    : (hasCents ? 2 : 0);
  const maxDigits = options.maximumFractionDigits !== undefined 
    ? options.maximumFractionDigits 
    : (hasCents ? 2 : 0);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
    notation: compact ? 'compact' : 'standard',
  }).format(amount);
}

export function parseCurrencyInput(value: string | number): number {
  if (typeof value === 'number') {
    return isNaN(value) ? 0 : value;
  }
  if (!value) return 0;
  const cleaned = value.toString().replace(/[^0-9.-]/g, '');
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}
