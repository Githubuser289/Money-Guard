import { IoExitOutline } from 'react-icons/io5';
// import Modal from "react-responsive-modal";
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;
`;
//************************************* */
export const LogoHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoHeaderText = styled.h2`
  font-weight: 400;
  font-size: 13px;
  height: 1.5%;
  color: white;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
`;

export const ImgHeaderStyled = styled.img`
  width: 17px;
  height: 17px;

  @media screen and (min-width: 768px) {
    width: 23px;
    height: 23px;
  }
`;

//****************************************** */
export const RightSide = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-end;
  width: 45%;
  gap: 5px;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
export const ExitButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0;
  border: none;
  background: none;
  color: rgba(251, 252, 251, 0.6);
  cursor: pointer;
`;
export const ExitText = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const ExitIcon = styled(IoExitOutline)`
  width: 20px;
  height: 50px;
`;
export const UserName = styled.div`
  color: rgba(251, 252, 251, 0.6);
`;

//  export const StyledModal = styled(Modal)`
//  background: none;
//  `
