import styled from 'styled-components';
export const DashboardContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 93%;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-right: 20px;
  }
  @media (min-width: 1280px) {
    margin-left: 30px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 10px;
  align-items: center;
  @media (min-width: 768px) {
    &.tablet {
      flex-direction: row;
      margin-right: 10px;
    }
  }
  @media (min-width: 1280px) {
    &.desktop {
    }
  }
`;
export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-right: 33px;
  }
`;
