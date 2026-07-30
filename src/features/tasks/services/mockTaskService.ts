import type { Task } from '../types';

const MOCK_RECENT_TASKS: Task[] = [
  {
    id: '1',
    title: 'Review onboarding flow',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2026-07-30',
  },
  {
    id: '2',
    title: 'Prepare sprint demo',
    status: 'todo',
    priority: 'medium',
    dueDate: '2026-07-31',
  },
  {
    id: '3',
    title: 'Update API documentation',
    status: 'completed',
    priority: 'low',
    dueDate: '2026-07-25',
  },
];

const MOCK_DELAY_MS = 500;

export function fetchRecentTasks(): Promise<Task[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_RECENT_TASKS), MOCK_DELAY_MS);
  });
}
