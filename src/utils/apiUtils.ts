import { API_BASE_URL } from '../config/api';

/**
 * Resolves the runtime API base URL used for manual fetch calls.
 * Falls back to local development default if no env override exists.
 */
export const resolveApiBaseUrl = (): string => {
  const envApiUrl = (import.meta as any)?.env?.VITE_API_URL as string | undefined;
  const base = envApiUrl || API_BASE_URL || 'https://dms-backend-b4fddtefc6evbcfu.southeastasia-01.azurewebsites.net/api/v1';
  return base.replace(/\/$/, '');
};

