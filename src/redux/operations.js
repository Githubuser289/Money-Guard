import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://wallet.b.goit.study/api/';

//************* */
// AUTH operations
//************* */
// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
function clearAuthHeader() {
  axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/sign-up', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      alert('Registration failed. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/sign-in', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      alert('Login failed. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.delete('/auth/sign-out');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getInfo = createAsyncThunk('auth/getInfo', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/users/current');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//********************* */
// transactions operations
//********************* */
export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      console.log('add transaction  ', transaction);
      const res = await axios.post('/transactions', transaction);
      return res.data;
    } catch (error) {
      alert('Failed adding transaction.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async ({ id, transaction }, thunkAPI) => {
    try {
      const res = await axios.patch(`/transactions/${id}`, transaction);
      return res.data;
    } catch (error) {
      alert('Failed updating transaction.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async ({ id, transaction }, thunkAPI) => {
    try {
      const res = await axios.delete(`/transactions/${id}`, transaction);
      return res.data;
    } catch (error) {
      alert('Failed deleting transaction.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/transactions');
      return res.data;
    } catch (error) {
      alert('Failed getting all transactions.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  'transactions/getCategories',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/transaction-categories');
      return res.data;
    } catch (error) {
      alert('Failed getting transaction categories.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSummary = createAsyncThunk(
  'transactions/getSummary',
  async (params, thunkAPI) => {
    try {
      const res = await axios.get('/transactions-summary', {
        params: {
          ...(params?.month !== undefined && { month: params.month }),
          ...(params?.year !== undefined && { year: params.year }),
        },
      });
      return res.data;
    } catch (error) {
      alert('Failed getting transactions summary.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//************************* */
// get currency exchange rates
//************************* */
export const getExchangeData = createAsyncThunk(
  'transactions/getExchangeRate',
  async (_, thunkAPI) => {
    try {
      const currencyAPI = axios.create({
        baseURL: `https://openexchangerates.org/api/`,
      });
      const MY_APP_ID = '7aa87ffdcdef473da08ec8f6f5ed3ec8';
      const res = await currencyAPI.get(`latest.json?app_id=${MY_APP_ID}`);
      return res.data;
    } catch (error) {
      alert('Failed getting exchange rates.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
