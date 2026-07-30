import type { ReactNode } from 'react';

export type StatCardVariant = 'neutral' | 'warning' | 'success' | 'error';

export interface StatCardProps {
  label: string;
  value: number;
  icon: ReactNode;
  variant?: StatCardVariant;
  loading?: boolean;
}
