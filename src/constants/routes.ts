export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  TASKS: '/tasks',
  TASK_DETAILS: '/tasks/:taskId',
  PROJECTS: '/projects',
  PROJECT_DETAILS: '/projects/:projectId',
  USERS: '/users',
  SETTINGS: '/settings',
  NOT_FOUND: '*',
} as const;

export const routePath = {
  taskDetails: (taskId: string) => `${ROUTES.TASKS}/${taskId}`,
  projectDetails: (projectId: string) => `${ROUTES.PROJECTS}/${projectId}`,
} as const;
