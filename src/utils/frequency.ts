/**
 * Payment Frequency normalization helpers
 * 
 * Annualized conversion:
 * - Weekly: amount * 52 / 12
 * - Every 2 weeks: amount * 26 / 12
 * - Monthly: amount
 * - Quarterly: amount * 4 / 12
 * - Yearly: amount / 12
 */

export type FrequencyType = 'weekly' | 'biweekly' | 'monthly' | 'quarterly' | 'semiannual' | 'yearly';

export interface FrequencyOption {
  id: FrequencyType;
  label: string;
  shortLabel: string;
  description: string;
}

export const FREQUENCY_OPTIONS: FrequencyOption[] = [
  { id: 'weekly', label: 'Weekly', shortLabel: '/wk', description: '52 times per year' },
  { id: 'biweekly', label: 'Every 2 weeks', shortLabel: '/2wks', description: '26 times per year' },
  { id: 'monthly', label: 'Monthly', shortLabel: '/mo', description: 'Once per month' },
  { id: 'quarterly', label: 'Quarterly', shortLabel: '/qtr', description: '4 times per year' },
  { id: 'semiannual', label: 'Semi-Annual', shortLabel: '/6mo', description: 'Twice per year' },
  { id: 'yearly', label: 'Yearly', shortLabel: '/yr', description: 'Once per year' },
];

export function normalizeToMonthly(amount: number, frequency: FrequencyType): number {
  if (isNaN(amount) || !Number.isFinite(amount) || amount <= 0) return 0;

  switch (frequency) {
    case 'weekly':
      return (amount * 52) / 12;
    case 'biweekly':
      return (amount * 26) / 12;
    case 'monthly':
      return amount;
    case 'quarterly':
      return (amount * 4) / 12;
    case 'semiannual':
      return (amount * 2) / 12;
    case 'yearly':
      return amount / 12;
    default:
      return amount;
  }
}

export function getFrequencyLabel(frequency: FrequencyType): string {
  const match = FREQUENCY_OPTIONS.find((f) => f.id === frequency);
  return match ? match.label : 'Monthly';
}
