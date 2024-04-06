import { IoExitOutline } from "react-icons/io5";
// import Modal from "react-responsive-modal";
import styled from "styled-components";

export const HeaderContainer = styled.div`
/* border: 2px solid red; */
/* background-color: purple; */
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px;
background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;
`

export const RightSide = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
width: 20%;
`

export const ExitButton = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
gap: 10px;
padding:0;
border: none;
background:none;
color: rgba(251, 252, 251, 0.6);
cursor:pointer;
`

 export const ExitIcon = styled(IoExitOutline)`
 width:20px;
 height: 50px;
 `
export const UserName = styled.div`
color: rgba(251, 252, 251, 0.6);
`

//  export const StyledModal = styled(Modal)`
//  background: none;
//  `