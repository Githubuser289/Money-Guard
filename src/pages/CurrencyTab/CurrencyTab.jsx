import Currency from '../../components/Currency/Currency';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors';

const CurrencyTab = () => {
  const isLoading = useSelector(selectIsLoading);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  // console.log('currencyTab', isTabletOrDesktop);
  return (
    <>
      {isLoading && isTabletOrDesktop && <div>Loading...</div>}
      {!isLoading && isTabletOrDesktop && <Currency />}
    </>
  );
};

export default CurrencyTab;
