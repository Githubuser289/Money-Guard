import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import { Outlet, useLocation } from 'react-router-dom';
// import Balance from '../../components/Balance/Balance';
import Container from '../../components/Container/Container';
import {
  DashboardContainer,
  GradientLeftBottom,
  GradientLeftTop,
  GradientRightBottom,
  GradientRightTop,
  LeftContainer,
  NavAndBalanceWrapper,
  SectionContainer,
} from './DashboardPage.styled';
import { useMediaQuery } from 'react-responsive';
// import CurrencyPage from '../CurrencyPage';
import { useDispatch } from 'react-redux';
import { getAllTransactions, getCategories } from 'redux/operations';

function DashboardPage() {
  const dispatch = useDispatch();

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const location = useLocation();
  const currentPage = location.pathname
    .replace('dashboard', '')
    .replaceAll('/', '');

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAllTransactions());
  }, [dispatch]);

  return (
    <SectionContainer>
      <Header />
      <Container>
        <DashboardContainer>
          <GradientLeftTop />
          <GradientLeftBottom />
          {isTabletOrDesktop && (
            <>
              <GradientRightBottom />
              <GradientRightTop />
            </>
          )}
          <LeftContainer>
            <NavAndBalanceWrapper>
              <Navigation />
              {!isTabletOrDesktop &&
                (currentPage === 'home' || currentPage === '') && <Balance />}
              {isTabletOrDesktop && <Balance />}
            </NavAndBalanceWrapper>
            {isTabletOrDesktop && <CurrencyPage />}
          </LeftContainer>
   {/*       <Suspense fallback={<Loader/>}>*/}
            <Outlet />
       {/*   </Suspense>*/}
        </DashboardContainer>
      </Container>
    </SectionContainer>
  );
}

export default DashboardPage;

// // import Balance from 'components/Balance/Balance';
// // import Currency from 'components/Currency/Currency';
// import Header from 'components/Header/Header';
// import Navigation from 'components/Navigation/Navigation';
// import Loader from 'components/Loader/Loader';
// // import ScrollButton from 'components/ScrollButton/ScrollButton';
// import React, { Suspense } from 'react'; // , { Suspense }
// import { Outlet } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
// import {
//   StyledDashBoardBox,
//   StyledDashBoardContainer,
//   StyledDeskContainer,
// } from './DashboardPage.styled';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/selectors';
// import Loader from 'components/Loader/Loader';

// const DashboardPage = () => {
//   const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
//   let userIsLogged = useSelector(selectIsLoggedIn);
//   userIsLogged = true;
//   return (
//     <>
//       {/* if user is not logged in, display LogIn modal*/}
//       {/* else go to Home page */}
//       {!userIsLogged ? (
//         <div>
//           <div>fundalul cu imaginea</div>
//           <p>modal Login/Register</p>
//         </div>
//       ) : (
//         <Suspense fallback={<Loader />}>
//           <Outlet />
//         </Suspense>
//       )}

//       <Header />
//       <StyledDeskContainer>
//         <StyledDashBoardContainer>
//           <StyledDashBoardBox>
//             <Navigation />
//             <Balance />
//           </StyledDashBoardBox>
//           {isTablet && <Currency />}
//         </StyledDashBoardContainer>
//         <Suspense fallback={<Loader />}>
//           <Outlet />
//         </Suspense>
//         <ScrollButton />
//       </StyledDeskContainer>
//     </>
//   );
// };

// export default DashboardPage;
