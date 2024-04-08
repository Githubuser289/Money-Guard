import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import { useLocation } from 'react-router-dom';
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
import { useDispatch } from 'react-redux';
import {
  getAllTransactions,
  getCategories,
  getExchangeData,
  getInfo,
  getSummary,
} from '../../redux/operations';
import HomeTab from '../HomeTab/HomeTab';
import StatisticsTab from '../StatisticsTab/StatisticsTab';
import Balance from '../../components/Balance/Balance';
import CurrencyTab from '../../pages/CurrencyTab/CurrencyTab';

function DashboardPage() {
  const dispatch = useDispatch();

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const location = useLocation();
  const path = location.pathname;
  const currentPage = location.pathname
    .replace('dashboard', '')
    .replaceAll('/', '');

  useEffect(() => {
    dispatch(getInfo());
    dispatch(getCategories());
    dispatch(getAllTransactions());
    dispatch(getExchangeData());
    dispatch(getSummary());
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
            {isTabletOrDesktop && <CurrencyTab />}
          </LeftContainer>
          {/* <Suspense fallback={<Loader/>}>
          <Outlet />
            </Suspense> */}
          {path === '/dashboard' ? <HomeTab /> : <StatisticsTab />}
        </DashboardContainer>
      </Container>
    </SectionContainer>
  );
}

export default DashboardPage;
