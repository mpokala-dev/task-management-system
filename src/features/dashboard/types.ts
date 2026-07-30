export interface TaskSummary {
  total: number;
  inProgress: number;
  completed: number;
  overdue: number;
}

export interface DashboardState {
  summary: TaskSummary | null;
  loading: boolean;
  error: string | null;
}
