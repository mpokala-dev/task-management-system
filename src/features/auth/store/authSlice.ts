import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockLogin, mockRestoreSession } from '../services/mockAuthService';
import { authStorage } from '../services/authStorage';
import { getAuthErrorMessage } from '../utils/getAuthErrorMessage';
import { logError } from '@/utils/errorLogger';
import type { AuthState, LoginCredentials, LoginResponse, User } from '../types';

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  sessionChecked: false,
};

export const login = createAsyncThunk<LoginResponse, LoginCredentials, { rejectValue: string }>(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await mockLogin(credentials);
      return response;
    } catch (error) {
      logError('auth/login', error);
      // const message = error instanceof Error ? error.message : 'Login failed';
      return rejectWithValue(getAuthErrorMessage(error));
    }
  },
);

export const restoreSession = createAsyncThunk<User, void, { rejectValue: string }>(
  'auth/restoreSession',
  async (_, { rejectWithValue }) => {
    const token = authStorage.get();
    if (!token) {
      return rejectWithValue('No session found');
    }
    try {
      return await mockRestoreSession(token);
    } catch (error) {
      authStorage.clear();
      // const message = error instanceof Error ? error.message : 'Session expired';
      logError('auth/restoreSession', error);
      return rejectWithValue(getAuthErrorMessage(error));
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      authStorage.clear();
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        authStorage.save(action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Login failed';
      })
      .addCase(restoreSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(restoreSession.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.token = authStorage.get();
        state.sessionChecked = true;
      })
      .addCase(restoreSession.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.sessionChecked = true;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
