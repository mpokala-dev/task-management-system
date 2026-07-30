export type TaskStatus = 'todo' | 'in-progress' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string; // ISO date string
}

export interface TaskState {
  recentTasks: Task[];
  loading: boolean;
  error: string | null;
  initialized: boolean;
}
