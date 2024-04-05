import Loader from 'components/Loader/Loader';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/selectors';

export const SharedLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (path === '/registration') return;
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [path, isLoggedIn, navigate]);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
