import type { LoginCredentials, LoginResponse, User } from '../types';

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
const SESSION_TTL_MS = 15 * 60 * 1000; // 15 minutes, for demo purposes

const createMockToken = () => {
  const issuedAt = Date.now();
  return `mock-token.${issuedAt}.${issuedAt + SESSION_TTL_MS}`;
};

const isTokenExpired = (token: string) => {
  const parts = token.split('.');
  const expiresAt = Number(parts[2]);
  if (!expiresAt || Number.isNaN(expiresAt)) return true;
  return Date.now() > expiresAt;
};

export function mockLogin(credentials: LoginCredentials): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.email === MOCK_CREDENTIALS.email &&
        credentials.password === MOCK_CREDENTIALS.password
      ) {
        resolve({
          user: MOCK_USER,
          token: createMockToken(),
        });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, MOCK_DELAY_MS);
  });
}

export function mockRestoreSession(token: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isTokenExpired(token)) {
        reject(new Error('Session Expired!'));
      } else {
        resolve(MOCK_USER);
      }
    }, 300);
  });
}
