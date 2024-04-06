import styled from 'styled-components';
import bcg from '../../images/gradient.webp'

export const SectionContainer = styled.section`
  overflow: clip;
  min-height: 100vh;
  background-image: url(${bcg});
  background-position: top;

  @media only screen and (min-width: 768px) {
    height: 100vh;
    background-image:none;
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  @media only screen and (min-width: 768px) {
    gap: 20px;
  }

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    height: calc(100vh - 80px);
    gap: 0;
  }
`;

export const GradientRightBottom = styled.div`
  z-index: -20;
  position: absolute;
  width: 362.381px;
  height: 362.381px;
  border-radius: 362.381px;
  background: linear-gradient(220deg, #6D54EB 28.31%, #652392 66.76%);
  filter: blur(121.80889129638672px);
  top: 241.62px;
  left: 122.29px;

  @media only screen and (min-width: 768px) {
    width: 893px;
    height: 901px;
    border-radius: 901px;
    background: linear-gradient(220deg, rgba(109, 84, 235, 0.60) 28.31%, rgba(101, 35, 146, 0.60) 66.76%);
    filter: blur(200px);
    top: 450px;
    left: 298px;
  }

  @media only screen and (min-width: 1280px) {
    width: 893px;
    height: 901px;
    border-radius: 901px;
    background: linear-gradient(220deg, rgba(109, 84, 235, 0.60) 28.31%, rgba(101, 35, 146, 0.60) 66.76%);
    top: 197px;
    left: 682px;
  }
`;

export const GradientRightTop = styled.div`
  z-index: -20;
  position: absolute;
  width: 539px;
  height: 539px;
  border-radius: 539px;
  background: rgba(47, 21, 176, 0.73);
  filter: blur(100px);

  @media only screen and (min-width: 768px) {
    width: 549px;
    height: 554px;
    border-radius: 554px;
    background: linear-gradient(211deg, #652392 39.99%, #341FA0 59.67%);
    filter: blur(150px);
    top: -246px;
    left: 314px;
  }

  @media only screen and (min-width: 1280px) {
    width: 363px;
    height: 366.105px;
    border-radius: 366.105px;
    background: #302E8E;
    top: 71.43px;
    left: 1113px;
  }
`;

export const GradientLeftBottom = styled.div`
  z-index: -20;
  position: absolute;
  width: 454px;
  height: 454px;
  border-radius: 454px;
  background: rgba(47, 21, 176, 0.73);
  filter: blur(100px);
  top: -9px;
  right: -87px;

  @media only screen and (min-width: 768px) {
    width: 819px;
    height: 825px;
    border-radius: 825px;
    background: linear-gradient(207deg, rgba(52, 31, 160, 0.80) 46.11%, rgba(101, 35, 146, 0.80) 63.65%);
    filter: blur(200px);
    top: 529px;
    right: 245px;
  }

  @media only screen and (min-width: 1280px) {
    width: 760px;
    height: 766px;
    border-radius: 766px;
    background: linear-gradient(207deg, #341FA0 46.11%, #652392 63.65%);
    top: 189px;
    right: 700px;
  }
`;

export const GradientLeftTop = styled.div`
  z-index: -20;
  position: absolute;
  width: 434.249px;
  height: 434.249px;
  border-radius: 434.249px;
  background: linear-gradient(220deg, rgba(109, 84, 235, 0.73) 28.31%, rgba(101, 35, 146, 0.73) 66.76%);
  filter: blur(121.80889129638672px);
  top: -244px;
  right: 166.75px;

  @media only screen and (min-width: 768px) {
    width: 739px;
    height: 745px;
    border-radius: 745px;
    background: linear-gradient(220deg, rgba(109, 84, 235, 0.60) 28.31%, rgba(101, 35, 146, 0.60) 66.76%);
    filter: blur(200px);
    top: -46px;
    right: 500px;
  }

  @media only screen and (min-width: 1280px) {
    width: 739px;
    height: 745px;
    border-radius: 745px;
    background: linear-gradient(220deg, rgba(109, 84, 235, 0.60) 28.31%, rgba(101, 35, 146, 0.60) 66.76%);
    top: -210.29px;
    right: 748px;
  }
`;

export const NavAndBalanceWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: calc(50% - 16px);
  }

  @media only screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 32px;
  }

  @media only screen and (min-width: 1280px) {
    flex-direction: column;
    width: 464px;
    position: relative;
    height: calc(100vh - 80px);

    &::after {
      content: '';
      width: 1px;
      height: 100%;
      position: absolute;
      right: 0;
      background-color: var(--transparency-60);
    }
  }
`;

// import styled from 'styled-components';
// import { StyledContainer } from '../../styles/GlobalStyles';

// export const StyledDashBoardContainer = styled(StyledContainer)`
//   @media only screen and (min-width: 768px) {
//     display: flex;
//     flex-direction: row;
//     padding: 0;
//     justify-content: space-between;
//     margin-bottom: 20px;

//     &::before {
//       content: '';
//       width: 330px;
//       height: 333px;
//       border-radius: 333px;
//       background: #b223c4;
//       position: absolute;
//       left: 420px;
//       top: 600px;

//       filter: blur(150px);
//     }
//   }
//   @media only screen and (min-width: 1280px) {
//     flex-direction: column;
//     max-width: 480px;
//     padding: 0;
//     margin: 0;
//     height: calc(100vh - 70px);
//     justify-content: space-between;
//     gap: 32px;
//     border-right: 1px solid ${({ theme }) => theme.colors.subColor};
//     &::after {
//       content: '';
//       width: 285px;
//       height: 265.381px;
//       top: 430px;
//       left: calc(100vw - 400px);
//       z-index: -1;
//       position: absolute;
//       border-radius: 362.381px;
//       background: linear-gradient(220deg, #cd54eb 28.31%, #9902ff 66.76%);
//       filter: blur(150px);
//     }
//   }
// `;

// export const StyledDashBoardBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   align-items: center;
//   gap: 12px;

//   margin-top: 12px;
//   margin-bottom: 32px;
//   @media only screen and (min-width: 768px) {
//     gap: 28px;
//     margin-bottom: 0;
//     margin-top: 40px;
//     align-items: baseline;
//   }
//   @media only screen and (min-width: 1280px) {
//     &::before {
//       content: '';
//       width: 739px;
//       height: 500px;
//       border-radius: 366.105px;
//       background: #5e3ede;

//       filter: blur(200px);
//       z-index: -1;

//       position: absolute;
//       left: -30px;
//       top: 100px;
//     }
//     &::after {
//       content: '';
//       width: 363px;
//       height: 366px;
//       border-radius: 366px;
//       background: #2f2da3;
//       z-index: -1;
//       filter: blur(150px);
//       position: absolute;
//       left: calc(100vw - 450px);
//       top: 80px;
//     }
//   }
// `;

// export const StyledDeskContainer = styled(StyledContainer)`
//   @media only screen and (max-width: 767px) {
//     padding-left: 0;
//     padding-right: 0;
//   }
//   @media only screen and (min-width: 1280px) {
//     display: grid;
//     grid-template-columns: 480px auto;
//     padding-left: 0;
//     padding-right: 0;
//     gap: 69px;
//   }
// `;
