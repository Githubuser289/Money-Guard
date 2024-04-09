import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import {
  BalanceValue,
  StyledBalanceContainer,
  StyledH,
} from './Balance.styled';

function Balance() {
  const user = useSelector(selectUser);
  const balance = user.balance.toFixed(2);

  return (
    <StyledBalanceContainer>
      <StyledH>Your balance</StyledH>
      <BalanceValue>
        <span>₴ </span>
        {balance}
      </BalanceValue>
    </StyledBalanceContainer>
  );
}

export default Balance;
