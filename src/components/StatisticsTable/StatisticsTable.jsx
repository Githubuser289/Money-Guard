import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coloredCategoriesMap } from 'components/Chart/Chart';
import { getSummary, getCategories } from '../../redux/operations.js';
import { selectSummary } from '../../redux/selectors';
import {
  CategoryContainer,
  CategoryName,
  CategoryTotal,
  DataContainer,
  Expenses,
  ExpensesSum,
  Income,
  IncomeSum,
  NoTransactionsText,
  Rectangle,
  StatisticsInfo,
  StatisticsTableContainer,
  ListContainer,
} from './StatisticsTable.styled.js';

export const formatNumber = number => {
  if (isNaN(number)) {
    return '0.00';
  }
  return Math.abs(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$& ');
};

const StatisticsTable = () => {
  // This text is used only for example
  const placeholderText = [
    { name: 'Category 1', total: 100, color: '#ff0000' },
    { name: 'Category 2', total: 200, color: '#40ff00' },
    { name: 'Category 3', total: 300, color: '#8000ff' },
    { name: 'Category 4', total: 100, color: '#ff0000' },
    { name: 'Category 5', total: 200, color: '#40ff00' },
    { name: 'Category 3', total: 300, color: '#8000ff' },
  ];

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
    <StatisticsTableContainer>
      <StatisticsInfo>
        <p className="category">Category</p>
        <p className="sum">Sum</p>
      </StatisticsInfo>
      <ListContainer>
        {periodSummary.length ? (
          periodSummary.map((category, index) => (
            <div key={index}>
              <DataContainer>
                <CategoryContainer>
                  <Rectangle style={{ backgroundColor: category.color }} />
                  <CategoryName>{category.name}</CategoryName>
                  <CategoryTotal>{formatNumber(category.total)}</CategoryTotal>
                </CategoryContainer>
              </DataContainer>
            </div>
          ))
        ) : (
          <div>
            {/* {placeholderText.map((category, index) => (
              <div key={index}>
                <DataContainer>
                  <CategoryContainer>
                    <Rectangle style={{ backgroundColor: category.color }} />
                    <CategoryName>{category.name}</CategoryName>
                    <CategoryTotal>
                      {formatNumber(category.total)}
                    </CategoryTotal>
                  </CategoryContainer>
                </DataContainer>
              </div>
            ))} */}
            <div>
              <NoTransactionsText>
                You don't have any transactions in this period
              </NoTransactionsText>
            </div>
          </div>
        )}
      </ListContainer>

      <Expenses>
        <h3>Expenses:</h3>
        <ExpensesSum>{formatNumber(summary.expenseSummary)}</ExpensesSum>
      </Expenses>
      <Income>
        <h3>Income:</h3>
        <IncomeSum>{formatNumber(summary.incomeSummary)}</IncomeSum>
      </Income>
    </StatisticsTableContainer>
  );
};

export default StatisticsTable;
