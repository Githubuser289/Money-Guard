import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import PrivateRoute from '../routes/PrivateRoute';
import MediaRoutes from '../routes/MediaRoutes';

// lazy loading
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const DashboardPage = lazy(() =>
  import('../pages/DashboardPage/DashboardPage')
);
const CurrencyTab = lazy(() => import('../pages/CurrecyTab/CurrecyTab'));
const HomeTab = lazy(() => import('../pages/HomePage/HomePage'));
const StatisticsTab = lazy(() => import('../pages/StatisticTab/StatisticTab'));

export default App = () => {
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
  </Routes>;
};
