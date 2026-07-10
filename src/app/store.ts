import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@auth/store/authSlice';
import dashboardReducer from '@dashboard/store/dashboardSlice';
import taskReducer from '@tasks/store/taskSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
