import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coloredCategoriesMap } from 'components/Chart/Chart';
import { getSummary, getCategories } from '../../redux/operations.js';
import styles from './StatisticsTable.module.css';
import { selectSummary } from '../../redux/selectors';

export const formatNumber = number => {
  if (isNaN(number)) {
    return '0.00';
  }
  return Math.abs(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$& ');
};

const StatisticsTable = () => {
  const summary = useSelector(selectSummary);
  const dispatch = useDispatch();

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    dispatch(getSummary({ month: currentMonth, year: currentYear }));
    dispatch(getCategories());
  }, [dispatch, currentMonth, currentYear]);

  const periodSummary = summary.categoriesSummary
    ? summary.categoriesSummary
        .filter(category => category.type === 'EXPENSE')
        .map(category => ({
          ...category,
          color: coloredCategoriesMap.get(category.name),
        }))
        .sort((a, b) => a.total - b.total)
    : [];

  return (
    <div className={styles.StatisticsTableContainer}>
      <div className={styles.statisticsInfo}>
        <p className={styles.category}>Category</p>
        <p className={styles.sum}>Sum</p>
      </div>
      <div>
        {periodSummary.length ? (
          periodSummary.map((category, index) => (
            <div key={index}>
              <div>
                <span />
                <p>{category.name}</p>
              </div>
              <p>{formatNumber(category.total)}</p>
            </div>
          ))
        ) : (
          <p className={styles.noTransactionsText}>
            You don't have any transactions in this period
          </p>
        )}
      </div>

      <div className={styles.expenses}>
        <h3>Expenses:</h3>
        <p className={styles.expensesSum}>
          {formatNumber(summary.expenseSummary)}
        </p>
      </div>
      <div className={styles.income}>
        <h3>Income:</h3>
        <p className={styles.incomeSum}>
          {formatNumber(summary.incomeSummary)}
        </p>
      </div>
    </div>
  );
};

export default StatisticsTable;
