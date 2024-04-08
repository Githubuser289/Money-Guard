import styled from 'styled-components';

export const StatisticsTableContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StatisticsInfo = styled.div`
  width: 250px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 108px;
  border-radius: 8px;
  box-shadow: 0 4px 60px 0 rgba(0, 0, 0, 0.25);
  background: rgba(82, 59, 126, 0.6);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #fbfbfb;
  margin-top: 5px;

  @media (min-width: 768px) {
    width: 379px;
    gap: 206px;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding-top: 20px;
  padding-bottom: 15px;
  margin-top: 10px;
  border-bottom: 2px solid rgba(217, 209, 209, 0.3);
  @media (min-width: 768px) {
    gap: 25px;
  }
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  max-height: 200px;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Expenses = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fbfbfb;
  display: flex;
  align-items: center;
  padding: 16px 28px 3px;
  gap: 135px;

  @media (min-width: 768px) {
    padding-top: 10px;
    gap: 225px;
  }
`;

export const Income = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fbfbfb;
  display: flex;
  align-items: center;
  padding: 16px 28px 3px;
  gap: 152px;

  @media (min-width: 768px) {
    gap: 240px;
  }
`;

export const CategoryName = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #fbfbfb;
  padding-right: 50px;

  @media (min-width: 768px) {
    padding-right: 137px;
  }
`;

export const CategoryTotal = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-align: right;
  color: #fbfbfb;
  padding-right: 10px;
`;

export const NoTransactionsText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fbfbfb;
  text-align: center;
  padding-top: 20px;
  overflow: hidden;
`;

export const ExpensesSum = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-align: right;
  color: #ff868d;
`;

export const IncomeSum = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-align: right;
  color: #ffb627;
`;

export const Rectangle = styled.div`
  border-radius: 2px;
  width: 24px;
  height: 24px;
`;
