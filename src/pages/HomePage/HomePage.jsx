// import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
// import MobileList from 'components/TransactionsList/MobileList';
// import TransactionsList from 'components/TransactionsList/TransactionsList';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { StyledHomePageContainer } from './HomePage.styled';

const HomeTab = () => {
  const isTablet = useMediaQuery({
    query: '(min-width:768px)',
  });
  return (
    <StyledHomePageContainer>
      {isTablet ? <TransactionsList /> : <MobileList />}
      <ButtonAddTransactions />
    </StyledHomePageContainer>
  );
};

export default HomeTab;
