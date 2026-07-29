import { STORAGE_KEYS } from '@/constants/storage';

export const authStorage = {
  save(token: string): void {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  },

  get(): string | null {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  clear(): void {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  },
};
