export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  TASKS: '/tasks',
  TASK_DETAIL: '/tasks/:id',
  PROJECTS: '/projects',
  PROJECT_DETAILS: '/projects/:projectId',
  USERS: '/users',
  SETTINGS: '/settings',
  NOT_FOUND: '*',
  SAMPLE_DASHBOARD: '/sample_dashboard',
} as const;

export function buildTaskDetailPath(id: string): string {
  return `/tasks/${id}`;
}
