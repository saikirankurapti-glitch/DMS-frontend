const getApiBaseUrl = (): string => {
  // 1. Check environment variable override (e.g. from .env file or hosting env)
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  // 2. If in local development, use Vite's proxy path
  if (import.meta.env.DEV) {
    return '/api/v1';
  }
  // 3. Fallback for production Azure Static Web Apps deployment
  return 'https://dms-backend-b4fddtefc6evbcfu.southeastasia-01.azurewebsites.net/api/v1';
};

export const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
  // Auth
  login: '/auth/login',
  logout: '/auth/logout',
  me: '/auth/me',

  // Users
  users: '/users',
  userById: (id: number) => `/users/${id}`,
  activateUser: (id: number) => `/users/${id}/activate`,
  deactivateUser: (id: number) => `/users/${id}/deactivate`,
  resetPassword: (id: number) => `/users/${id}/reset-password`,

  // Audit Logs
  auditLogs: '/audit-logs',
  auditActions: '/audit-logs/actions',
  auditEntityTypes: '/audit-logs/entity-types',

  // Templates
  templates: '/templates',
  templateById: (id: number) => `/templates/${id}`,
  publishedTemplates: '/templates/published',
  templateVersions: (id: number) => `/templates/${id}/versions`,
  templateVersionById: (templateId: number, versionId: number) => `/templates/${templateId}/versions/${versionId}`,
  templateImage: (templateId: number, filename: string) => `/templates/${templateId}/images/${filename}`,
};


