// src/features/tasks/store/taskSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecentTasks } from '../services/mockTaskService';
import { logError } from '@/utils/errorLogger';
import type { Task, TaskState } from '../types';

const initialState: TaskState = {
  recentTasks: [],
  loading: false,
  error: null,
  initialized: false,
};

export const loadRecentTasks = createAsyncThunk<Task[], void, { rejectValue: string }>(
  'tasks/loadRecentTasks',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchRecentTasks();
    } catch (error) {
      logError('tasks/loadRecentTasks', error);
      return rejectWithValue('Unable to load recent tasks.');
    }
  },
);

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadRecentTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadRecentTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.recentTasks = action.payload;
        state.initialized = true;
      })
      .addCase(loadRecentTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unable to load recent tasks.';
        state.initialized = true;
      });
  },
});

export default taskSlice.reducer;
