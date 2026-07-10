import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Task } from '@/types/tasks';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<{ id: string; updates: Partial<Task> }>) => {
      const { id, updates } = action.payload;
      const task = state.find((t) => t.id === id);
      if (task) {
        Object.assign(task, updates);
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.findIndex((t) => t.id === id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default taskSlice.reducer;
