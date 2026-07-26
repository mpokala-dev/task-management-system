/**
 * Reusable, framework-agnostic validation functions.
 * Each returns an error message string if invalid, or null if valid —
 * so callers can directly assign the result to an error state.
 */
import { EMAIL_REGEX } from '@/constants/validation';

export function validateRequired(value: string, fieldName: string): string | null {
  return value.trim() === '' ? `${fieldName} is required.` : null;
}

export function validateEmailFormat(value: string): string | null {
  if (value.trim() === '') return null; // required check handles empty case separately
  return EMAIL_REGEX.test(value) ? null : 'Enter a valid email address.';
}

export function validateEmail(value: string): string | null {
  return validateRequired(value, 'Email') ?? validateEmailFormat(value);
}

export function validatePassword(value: string): string | null {
  return validateRequired(value, 'Password');
}
