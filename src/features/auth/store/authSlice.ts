import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    // login: (state: { isAuthenticated: boolean; user: { id: string; email: string } }, action: PayloadAction<{ id: string; email: string }>) => {
    //   state.isAuthenticated = true;
    //   state.user = action.payload;
    // },
    // logout: (state: { isAuthenticated: boolean; user: any }) => {
    //   state.isAuthenticated = false;
    //   state.user = null;
    // },
  },
});

export default authSlice.reducer;
