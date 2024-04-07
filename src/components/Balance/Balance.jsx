import React from 'react';
import { useSelector } from 'react-redux';
import { selectSummary } from '../../redux/selectors';

function Balance() {
  const summary = useSelector(selectSummary);
  console.log('summary ', summary);
  const balance = (summary.incomeSummary - summary.expenseSummary).toFixed(2);

  return (
    <>
      Your balance
      <div>
        <span>₴ </span> {balance}
      </div>
    </>
  );
}

export default Balance;
