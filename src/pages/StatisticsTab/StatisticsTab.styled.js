import styled from 'styled-components';
import { StyledContainer } from '../../styles/GlobalStyles';

export const StatisticsPageContainer = styled.div`
  background: linear-gradient(207deg, #341fa0 44.63%, #652392 88.57%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  height: auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StatisticCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 320px;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const StyledStatisticDivMain = styled(StyledContainer)`
  color: white;
  display: block;
  position: relative;

  @media only screen and (min-width: 768px) {
    display: flex;
    margin: 0;
    justify-content: space-between;

    max-width: 100%;
    height: 720px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 803px;
    height: calc(100vh - 70px);

    padding: 20px 20px 0 0;
  }
`;
export const StyledStatisticDivChart = styled.div`
  position: relative;
  width: 280px;
  padding: 16px 0;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 336px;
    padding: 0;
    margin: 0;
  }
  @media only screen and (min-width: 1280px) {
    width: 288px;
  }
`;
export const StyledStatisticTitle = styled.h2`
  color: ${({ theme }) => theme.colors.mainWhite};
  text-align: left;
  font-size: 30px;
  font-weight: 400;
  max-width: 280px;
`;
