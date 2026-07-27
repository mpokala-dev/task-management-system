import type { LoginCredentials, LoginResponse, User } from '../types';

export class AuthServiceError extends Error {
  code: 'INVALID_CREDENTIALS' | 'SERVER_ERROR' | 'SESSION_EXPIRED';

  constructor(code: 'INVALID_CREDENTIALS' | 'SERVER_ERROR' | 'SESSION_EXPIRED', message: string) {
    super(message);
    this.code = code;
    this.name = 'AuthServiceError';
  }
}

const MOCK_USER: User = {
  id: '1',
  name: 'Madhuri Pokala',
  email: 'madhuri@example.com',
};

const MOCK_CREDENTIALS = {
  email: 'madhuri@example.com',
  password: 'password123',
};

const MOCK_DELAY_MS = 600;
const SESSION_TTL_MS = 15 * 60 * 1000;

function createMockToken(): string {
  const issuedAt = Date.now();
  return `mock-token.${issuedAt}.${issuedAt + SESSION_TTL_MS}`;
}

function isTokenExpired(token: string): boolean {
  const parts = token.split('.');
  const expiresAt = Number(parts[2]);
  if (!expiresAt || Number.isNaN(expiresAt)) return true;
  return Date.now() > expiresAt;
}

export function mockLogin(credentials: LoginCredentials): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulates an unexpected server-side failure, to exercise the
      // "generic handling for server errors" path without needing a real backend.
      if (credentials.email === 'server-error@example.com') {
        reject(new AuthServiceError('SERVER_ERROR', 'Internal mock server error (simulated)'));
        return;
      }

      if (
        credentials.email === MOCK_CREDENTIALS.email &&
        credentials.password === MOCK_CREDENTIALS.password
      ) {
        resolve({ user: MOCK_USER, token: createMockToken() });
      } else {
        reject(new AuthServiceError('INVALID_CREDENTIALS', 'Email or password did not match'));
      }
    }, MOCK_DELAY_MS);
  });
}

export function mockRestoreSession(token: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isTokenExpired(token)) {
        reject(new AuthServiceError('SESSION_EXPIRED', 'Token expired'));
      } else {
        resolve(MOCK_USER);
      }
    }, 300);
  });
}
