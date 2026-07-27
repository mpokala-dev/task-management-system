export const API_ERROR_MESSAGES = {
  NETWORK: 'Network error. Please check your internet connection.',
  DEFAULT: 'Something went wrong. Please try again.',
  UNAUTHORIZED: 'Session expired. Please log in again.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Internal server error. Please try again later.',
} as const;

export const AUTH_ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'The email or password you entered is incorrect. Please try again.',
  SERVER_ERROR: 'Something went wrong on our end. Please try again in a moment.',
  SESSION_EXPIRED: 'Your session has expired. Please log in again.',
  NETWORK_ERROR: 'Unable to connect. Please check your internet connection and try again.',
  DEFAULT: "We couldn't log you in. Please try again.",
} as const;
