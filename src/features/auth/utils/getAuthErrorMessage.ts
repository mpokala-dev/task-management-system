import { AUTH_ERROR_MESSAGES } from '@/constants/messages';
import { AuthServiceError } from '../services/mockAuthService';

export function getAuthErrorMessage(error: unknown): string {
  if (error instanceof AuthServiceError) {
    switch (error.code) {
      case 'INVALID_CREDENTIALS':
        return AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS;
      case 'SESSION_EXPIRED':
        return AUTH_ERROR_MESSAGES.SESSION_EXPIRED ?? AUTH_ERROR_MESSAGES.DEFAULT;
      case 'SERVER_ERROR':
      default:
        return AUTH_ERROR_MESSAGES.SERVER_ERROR;
    }
  }

  if (error instanceof Error && error.message.toLowerCase().includes('network')) {
    return AUTH_ERROR_MESSAGES.NETWORK_ERROR;
  }

  return AUTH_ERROR_MESSAGES.DEFAULT;
}
