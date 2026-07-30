import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTaskSummary } from '../services/mockDashboardService';
import { logError } from '@/utils/errorLogger';
import type { DashboardState, TaskSummary } from '../types';

const initialState: DashboardState = {
  summary: null,
  loading: false,
  error: null,
};

export const loadDashboardSummary = createAsyncThunk<TaskSummary, void, { rejectValue: string }>(
  'dashboard/loadSummary',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchTaskSummary();
    } catch (error) {
      logError('dashboard/loadSummary', error);
      return rejectWithValue('Unable to load dashboard summary.');
    }
  },
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadDashboardSummary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadDashboardSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.summary = action.payload;
      })
      .addCase(loadDashboardSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unable to load dashboard summary.';
      });
  },
});

export default dashboardSlice.reducer;
