import styled from 'styled-components';
export const DashboardContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-left: 31px;

    &.desktop {
      margin-left: 10px;
    }
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
    margin-right: 25px;
  }
`;
