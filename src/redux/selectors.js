// import { createSelector } from '@reduxjs/toolkit';

/** AUTH selectors */
export const selectIsRegistered = state => state.auth.isRegistered;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectGetInfoPending = state => state.auth.getInfoPending;

export const selectUser = state => state.auth.user;

export const selectAuthError = state => state.auth.error;

/** transactions selectors */
export const selectTransactions = state => state.transactions.transactions;

export const selectCategories = state => state.transactions.categories;

export const selectSummary = state => state.transactions.summary;

export const selectExchangeData = state => state.transactions.exchangeData;

export const selectIsLoading = state => state.transactions.isLoading;
