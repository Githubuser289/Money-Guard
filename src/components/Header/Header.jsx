import { useState } from "react";
import {useSelector} from "react-redux";
import { ExitButton, 
  ExitIcon, 
  ExitText, 
  HeaderContainer, 
  ImgHeaderStyled, 
  LogoHeaderContainer, 
  LogoHeaderText, 
  RightSide, 
  UserName } from "./Header.styled";
import Modal from 'react-modal';
import { selectUser } from "../../redux/selectors";
import logo from "../../images/logo_money_guard.svg"
import LogoutForm from "components/Logout/LogoutForm";
import "./Header.css";
import verticalline from "../../images/Vector 4.svg";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    // border: 'none',
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transform: 'translate(-50%, -50%)',
    backdropFilter: 'blur(20px)',
    borderRadius: '8px',

  },
  overlay:{
    backgroundColor: 'rgba(136, 134, 134, 0.25)',
    backdropFilter: 'blur(1.5px)',
  },

};



const Header =()=>{
    const user = useSelector(selectUser);
    const [modalIsOpen, setIsOpen] = useState(false);

  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
     <> 
        <HeaderContainer>
           <LogoHeaderContainer>
          <ImgHeaderStyled src={logo} alt='logo' />
          <LogoHeaderText>Money Guard</LogoHeaderText>
          </LogoHeaderContainer>
    
            <RightSide>
       <UserName>
        {user.username} 
       </UserName>
        
        <div>
            <img src = {verticalline} alt ="vertical line"/>
        </div>
        <ExitButton onClick={openModal} >
             <ExitIcon/>
         <ExitText >Exit</ExitText >
         </ExitButton>
         <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <LogoutForm closeModal={closeModal}/>
      </Modal>
         </RightSide>
        </HeaderContainer>
      </> 
    )
    }
    export default Header;