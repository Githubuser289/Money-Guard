import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { transactionsReducer } from './transactionsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer,
  },
});