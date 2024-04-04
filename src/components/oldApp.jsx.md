import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PrivateRoute from '../routes/PrivateRoute';
import MediaRoutes from '../routes/MediaRoutes';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectExchangeData,
  selectIsLoggedIn,
  selectSummary,
  selectTransactions,
  selectUser,
} from '../redux/selectors';
import {
  addTransaction,
  getAllTransactions,
  getCategories,
  getExchangeData,
  getInfo,
  getSummary,
  logIn,
  logOut,
  register,
} from '../redux/operations';

// lazy loading
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const DashboardPage = lazy(() =>
  import('../pages/DashboardPage/DashboardPage')
);
const CurrencyTab = lazy(() => import('../pages/CurrencyTab/CurrecyTab'));
const HomeTab = lazy(() => import('../pages/HomePage/HomePage'));
const StatisticsTab = lazy(() => import('../pages/StatisticTab/StatisticTab'));

function App() {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectUser);
  const categories = useSelector(selectCategories);
  const transactions = useSelector(selectTransactions);
  const summary = useSelector(selectSummary);
  const exchangeRates = useSelector(selectExchangeData);

  const handleRegister = () => {
    dispatch(
      register({
        username: 'iuser16',
        email: 'email16@server.com',
        password: 'wps9916',
      })
    );
  };
  const handleLogin = () => {
    console.log('login');
    dispatch(
      logIn({
        email: 'email15@server.com',
        password: 'wps9915',
      })
    );
  };
  const handleLogout = () => {
    console.log('logout');
    dispatch(logOut());
  };

  const handleGetInfo = () => {
    console.log('getinfo');
    dispatch(getInfo());
  };

  const handleAddIncome = () => {
    console.log('handleAddIncome');
    const transaction1 = {
      transactionDate: '2024-03-25',
      type: 'INCOME',
      categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
      comment: 'another 1000',
      amount: 1000,
    };
    dispatch(addTransaction(transaction1));
  };

  const handleAddExpense = () => {
    console.log('handleAddExpense');
    // Pt a adauga o cheltuiala se foloseste ID-ul corespunzator
    // numelui cheltuielii din array-ul categories
  };

  const handleUpdate = () => {
    console.log('handleUpdate');
    // Pt a modifica o tranzactie se foloseste ID-ul corespunzator
    // din array-ul transactions
  };

  const handleGetAll = () => {
    console.log('handleGetAll');
    dispatch(getAllTransactions());
  };
  const handleGetCategories = () => {
    console.log('handleGetCategories');
    dispatch(getCategories());
  };
  const handleGetSummary = () => {
    console.log('handleGetSummary');
    dispatch(getSummary());
  };
  const handleDisplayRates = () => {
    console.log('handleDisplayRates');

    // Before querying the API for exchange rate,
    // check if an hour has passed,
    // otherwise the old data will remain
    let time;
    if (exchangeRates === null) {
      time = 0;
    } else {
      time = exchangeRates.timestamp;
    }
    const now = new Date();
    if (now - time > 3600000) dispatch(getExchangeData());
  };

  const handleDisplayValues = () => {
    console.log('userLoggedIn=', userLoggedIn);
    console.log('current user ', currentUser);
    console.log('categories ', categories);
    console.log('transactions ', transactions);
    console.log('summary ', summary);
    console.log('echange data ', exchangeRates);
  };
  //*************************** */
  //*************************** */
  //*************************** */
  // de aici in jos e partea care va ramane

  return (
    <Routes>
      <Route
        path="login"
        element={
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="registration"
        element={
          <Suspense fallback={<Loader />}>
            <RegistrationPage />{' '}
          </Suspense>
        }
      />

      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <DashboardPage />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <PrivateRoute>
              <HomeTab />
            </PrivateRoute>
          }
        />
        <Route
          path="statistics"
          element={
            <PrivateRoute>
              <StatisticsTab />
            </PrivateRoute>
          }
        />
        <Route
          path="currency"
          element={
            <PrivateRoute>
              <MediaRoutes>
                <Suspense fallback={<Loader />}>
                  <CurrencyTab />
                </Suspense>
              </MediaRoutes>
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <PageNotFound />
          </Suspense>
        }
      />
    </Routes>
    // <>
    //   <div>Ready for your code!</div>
    //   <br />
    //   <i>The code within App component is only for testing purposes</i>
    //   <br />
    //   <br />
    //   <p>current user={currentUser.username}</p>
    //   <button type="button" onClick={handleRegister}>
    //     Register
    //   </button>
    //   <button type="button" onClick={handleLogin}>
    //     Login
    //   </button>
    //   <button type="button" onClick={handleLogout}>
    //     Logout
    //   </button>
    //   <button type="button" onClick={handleGetInfo}>
    //     Get user info
    //   </button>
    //   <br />
    //   <br />
    //   <p>Before push buttons below, push Login button above</p>
    //   <br />
    //   <button type="button" onClick={handleAddIncome}>
    //     Add income
    //   </button>
    //   <button type="button" onClick={handleAddExpense}>
    //     Add expense
    //   </button>
    //   <button type="button" onClick={handleUpdate}>
    //     Update expense
    //   </button>
    //   <button type="button" onClick={handleGetAll}>
    //     Get all transactions
    //   </button>
    //   <button type="button" onClick={handleGetCategories}>
    //     Get categories
    //   </button>
    //   <button type="button" onClick={handleGetSummary}>
    //     Get summary
    //   </button>
    //   <br />
    //   <br />
    //   <button type="button" onClick={handleDisplayRates}>
    //     Get exchange rates
    //   </button>
    //   <button type="button" onClick={handleDisplayValues}>
    //     Display values
    //   </button>
    // </>
  );
}

export default App;
