/**
 * Centralized environment variable access and validation.
 *
 * Add new variables here rather than reading import.meta.env directly
 * elsewhere in the codebase, so every environment variable the app
 * depends on is declared, typed, and validated in exactly one place.
 */

interface EnvVarDefinition {
  key: string;
  required: boolean;
  fallback?: string;
}

const ENV_VARS: readonly EnvVarDefinition[] = [
  { key: 'VITE_API_BASE_URL', required: true, fallback: 'http://localhost:3000/api' },
];

export interface EnvValidationResult {
  isValid: boolean;
  missing: string[];
}

function isValidUrl(value: string): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

function validateEnv(): EnvValidationResult {
  const missing: string[] = [];

  for (const varDef of ENV_VARS) {
    const value = import.meta.env[varDef.key];
    if (!value && varDef.required && !varDef.fallback) {
      missing.push(varDef.key);
    } else if (value && !isValidUrl(value)) {
      missing.push(`${varDef.key} (invalid URL format)`);
    }
  }

  return { isValid: missing.length === 0, missing };
}

export const envValidation = validateEnv();

if (!envValidation.isValid) {
  console.error(
    `Missing required environment variable(s): ${envValidation.missing.join(', ')}. ` +
      'See .env.example for the full list of required variables.',
  );
}

export const env = Object.freeze({
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
});
