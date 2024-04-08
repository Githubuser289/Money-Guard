import styled from 'styled-components';

export const ChartContainer = styled.div`
  width: 100%;
  padding-bottom: 12px;

  @media (min-width: 1280px) {
    padding-left: 84px;
  }

  @media (min-width: 768px) {
    padding-left: 33px;
    padding-bottom: 152px;
  }
`;

export const StatisticsTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 30px;
  color: #fbfbfb;
  padding-bottom: 8px;
  padding-top: 8px;
`;

export const ChartWrapper = styled.div`
  width: 280px;
  height: 280px;
  position: relative;
`;

export const ExpenseSummary = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 18px;
  font-family: 'Poppins-SemiBold', sans-serif;
  color: var(--white);
`;

export const ExpenseTotal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 18px;
  font-family: 'Poppins-SemiBold', sans-serif;
  color: white;
`;
