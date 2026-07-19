/**
 * Centralized design tokens, mirroring the CSS custom properties
 * defined in styles/variables.css. This is the JS/TS-accessible layer
 * for components that need tokens programmatically (e.g. passing a
 * color to a charting library, or breakpoints to a media query hook)
 * rather than via CSS.
 *
 * Note: values here are manually kept in sync with variables.css.
 * They are not auto-generated from one source in this release.
 */

export const theme = {
  colors: {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    background: '#ffffff',
    surface: '#f8fafc',
    border: '#e5e7eb',
    textPrimary: '#111827',
    textSecondary: '#6b7280',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '16px',
    lineHeight: 1.5,
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
} as const;

export type Theme = typeof theme;
