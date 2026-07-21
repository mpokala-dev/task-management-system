import type { LoginCredentials, LoginResponse } from '../types';

const MOCK_USER = {
  id: '1',
  name: 'Madhuri Pokala',
  email: 'madhuri@example.com',
};

const MOCK_CREDENTIALS = {
  email: 'madhuri@example.com',
  password: 'password123',
};

const MOCK_DELAY_MS = 600;

export function mockLogin(credentials: LoginCredentials): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.email === MOCK_CREDENTIALS.email &&
        credentials.password === MOCK_CREDENTIALS.password
      ) {
        resolve({
          user: MOCK_USER,
          token: 'mock-jwt-token-' + Date.now(),
        });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, MOCK_DELAY_MS);
  });
}
