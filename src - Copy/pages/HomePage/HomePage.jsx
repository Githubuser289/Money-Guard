// import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
// import MobileList from 'components/TransactionsList/MobileList';
// import TransactionsList from 'components/TransactionsList/TransactionsList';
import React from 'react';
// import { useMediaQuery } from 'react-responsive';
// import { StyledHomePageContainer } from './HomePage.styled';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomeTab = () => {
  // const isTablet = useMediaQuery({
  //   query: '(min-width:768px)',
  // });
  const navigate = useNavigate();

  const handleStatistics = () => {
    navigate('/statistics');
  };
  return (
    <div>
      {/* <StyledHomePageContainer> */}
      <div className="homebar">
        <p>sigla MoneyGuard</p>
        <div className="userexit">
          <div>username</div>
          <div>icon+Exit</div>
        </div>
      </div>
      <div className="container">
        <div className="leftdiv">
          LEFT DIV
          <button>Home</button>
          <button onClick={handleStatistics}>Statistics</button>
        </div>
        <div className="rightdiv">RIGHT DIV</div>
      </div>
      {/* {isTablet ? <TransactionsList /> : <MobileList />}
      <ButtonAddTransactions />
      </StyledHomePageContainer> */}
    </div>
  );
};

export default HomeTab;
