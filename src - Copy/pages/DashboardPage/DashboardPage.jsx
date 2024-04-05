// import Balance from 'components/Balance/Balance';
// import Currency from 'components/Currency/Currency';
// import Header from 'components/Header/Header';
// import Navigation from 'components/Navigation/Navigation';
// import Loader from 'components/Loader/Loader';
// import ScrollButton from 'components/ScrollButton/ScrollButton';
import React, { Suspense } from 'react'; // , { Suspense }
import { Outlet } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
// import {
//   StyledDashBoardBox,
//   StyledDashBoardContainer,
//   StyledDeskContainer,
// } from './DashboardPage.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import Loader from 'components/Loader/Loader';

const DashboardPage = () => {
  // const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  let userIsLogged = useSelector(selectIsLoggedIn);
  // userIsLogged = true;
  return (
    <>
      {/* if user is not logged in, display LogIn modal*/}
      {/* else go to Home page */}
      {!userIsLogged ? (
        <div>
          <div>fundalul cu imaginea</div>
          <p>modal Login/Register</p>
        </div>
      ) : (
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      )}

      {/* <Header />
      <StyledDeskContainer>
        <StyledDashBoardContainer>
          <StyledDashBoardBox>
            <Navigation />
            <Balance />
          </StyledDashBoardBox>
          {isTablet && <Currency />}
        </StyledDashBoardContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ScrollButton />
      </StyledDeskContainer> */}
    </>
  );
};

export default DashboardPage;
