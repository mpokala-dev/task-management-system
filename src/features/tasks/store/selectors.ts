import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

const selectTasksState = (state: RootState) => state.tasks;

export const selectRecentTasks = (state: RootState) => selectTasksState(state).recentTasks;

/**
 * Derives task statistics from the raw task list.
 * createSelector memoizes the result: it only recomputes when
 * `selectRecentTasks`'s output actually changes (a new array reference),
 * not on every single Redux state change or component re-render.
 * Without this, filtering four times over would re-run on every render,
 * even when unrelated state (like auth) changes.
 */
export const selectTaskStatistics = createSelector(selectRecentTasks, (tasks) => {
  const today = new Date().toISOString().slice(0, 10);

  return {
    highPriority: tasks.filter((task) => task.priority === 'high').length,
    dueToday: tasks.filter((task) => task.dueDate === today).length,
    completed: tasks.filter((task) => task.status === 'completed').length,
    pending: tasks.filter((task) => task.status !== 'completed').length,
  };
});
