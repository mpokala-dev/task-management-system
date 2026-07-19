import { createContext } from 'react';
import type { Theme } from '@/config/theme';

export const ThemeContext = createContext<Theme | undefined>(undefined);
