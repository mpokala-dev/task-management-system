import type { TaskSummary } from '../types';

const MOCK_SUMMARY: TaskSummary = {
  total: 24,
  inProgress: 8,
  completed: 12,
  overdue: 4,
};

const MOCK_DELAY_MS = 500;

export function fetchTaskSummary(): Promise<TaskSummary> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_SUMMARY), MOCK_DELAY_MS);
  });
}
