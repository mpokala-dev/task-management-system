import type { ReactNode } from 'react';
import { theme } from '@/config/theme';
import { ThemeContext } from './theme-context';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
