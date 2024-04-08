import { Route, Routes } from 'react-router-dom';
import { lazy,Suspense } from 'react';
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
const HomeTab = lazy(() => import('../pages/HomeTab/HomeTab'));
const StatisticsTab = lazy(() =>
  import('../pages/StatisticsTab/StatisticsTab')
);

function App() {
  return (
    <Routes>
     <Route path="/" element={<SharedLayout />}> 
        <Route 
          path="/registration" 
          element={ 
            <Suspense fallback={<div>Loading...</div>}> 
              <RestrictedRoute 
                redirectTo="/dashboard" 
                component={<RegistrationPage />} 
              /> 
            </Suspense> 
          } 
        /> 
 
        <Route 
          index 
          path="/login" 
          element={ 
            <Suspense fallback={<div>Loading...</div>}> 
              <RestrictedRoute 
                redirectTo="/dashboard" 
                component={<LoginPage />} 
              /> 
            </Suspense> 
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
