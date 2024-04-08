import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';

function Balance() {
  const user = useSelector(selectUser);
  const balance = user.balance.toFixed(2);

  return (
    <>
      <p>Your balance</p>
      <div>
        <span>₴ </span> {balance}
      </div>
    </>
  );
}

export default Balance;
