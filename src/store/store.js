
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { noteSlice } from './note';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    note: noteSlice.reducer,
  },
});