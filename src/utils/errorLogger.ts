/**
 * Centralized error logging. Currently logs to console; this is the
 * single place a real logging service (e.g. Sentry.captureException)
 * would be wired in — see TMAS-XX (Sentry integration).
 *
 * Used by ErrorBoundary, RouteErrorBoundary, and authSlice, so all
 * error handling in the app funnels through one consistent mechanism.
 */
export function logError(context: string, error: unknown): void {
  console.error(`[${context}]`, error);
}
