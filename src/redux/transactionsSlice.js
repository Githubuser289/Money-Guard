import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  updateTransaction,
  getAllTransactions,
  getCategories,
  getSummary,
  getExchangeData,
  deleteTransaction,
} from './operations';

const initialState = {
  categories: [],
  transactions: [],
  summary: [],
  exchangeData: null,
  error: '',
  isLoading: true,
  isFinished: false,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        const index = state.transactions.findIndex(
          t => t.id === action.payload.id
        );
        state.transactions[index] = action.payload;
        state.isLoading = false;
      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(deleteTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        const index = state.transactions.findIndex(
          t => t.id === action.payload
        );
        state.transactions.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllTransactions.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllTransactions.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getSummary.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSummary.fulfilled, (state, action) => {
        state.summary = action.payload;
        state.isLoading = false;
      })
      .addCase(getSummary.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getExchangeData.pending, state => {
        state.isFinished = false;
      })
      .addCase(getExchangeData.fulfilled, (state, action) => {
        state.exchangeData = action.payload;
        state.isFinished = true;
      })
      .addCase(getExchangeData.rejected, (state, action) => {
        state.error = action.payload;
        state.isFinished = true;
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
