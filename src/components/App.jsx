import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from '../routes/PrivateRoute';
import MediaRoutes from '../routes/MediaRoutes';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { RestrictedRoute } from 'routes/RestrictedRoute';

// lazy loading
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const DashboardPage = lazy(() =>
  import('../pages/DashboardPage/DashboardPage')
);
const CurrencyTab = lazy(() => import('../pages/CurrencyTab/CurrencyTab'));
const HomeTab = lazy(() => import('../pages/HomePage/HomePage'));
const StatisticsTab = lazy(() => import('../pages/StatisticTab/StatisticTab'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/registration"
          element={
            <RestrictedRoute
              redirectTo="/dashboard"
              component={<RegistrationPage />}
            />
          }
        />

        <Route
          index
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/dashboard"
              component={<LoginPage />}
            />
          }
        />
      </Route>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
        }
      >
        <Route index element={<HomeTab />} />
        <Route path="statistics" element={<StatisticsTab />} />
        <Route
          path="currency"
          element={
            <MediaRoutes>
              <CurrencyTab />
            </MediaRoutes>
          }
        />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
