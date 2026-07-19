import { useContext } from 'react';
import { ThemeContext } from './theme-context';
import type { Theme } from '@/config/theme';

export function useTheme(): Theme {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
