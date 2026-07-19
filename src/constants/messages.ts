export const API_ERROR_MESSAGES = {
  NETWORK: 'Network error. Please check your internet connection.',
  DEFAULT: 'Something went wrong. Please try again.',
  UNAUTHORIZED: 'Session expired. Please log in again.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Internal server error. Please try again later.',
} as const;
