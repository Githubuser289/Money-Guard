import logo from '../images/logo desktop.svg'
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { ExitIcon, HeaderContainer, RightSide } from "./Header.styled";
import Modal from "react-responsive-modal";
import LogoutForm from "components/Logout/LogoutForm";
import { useState } from "react";
import "./Header.css";


const Header =()=>{
const user = useSelector(selectUser);
const [open, setOpen] = useState(false)

 const onOpenModal = ()=>setOpen(true);
 const onCloseModal = () => setOpen(false);

return (
    <HeaderContainer>
        <div>
        <img src = {logo}/>
        </div>

        <RightSide>
    {user.name} 
    <div>|</div>
    <button onClick={onOpenModal} >
         <ExitIcon/>
     <span>Exit</span>
     </button>
    
    <Modal open = {open} onClose ={onCloseModal} center 
           classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
            overlayAnimationIn: 'customEnterOverlayAnimation',
            overlayAnimationOut: 'customLeaveOverlayAnimation',
            modalAnimationIn: 'customEnterModalAnimation',
            modalAnimationOut: 'customLeaveModalAnimation',
          }}>
        <LogoutForm/>
    </Modal>

    
     </RightSide>
    </HeaderContainer>
)
}
export default Header;



////////////////////////////

./Header.css
.customOverlay {
    background:  rgba(255, 255, 255, 0.4); 
  }
  .customModal {
    background: none;
    padding: 0;
    border-radius: 8px;
    /* background: #b2dbbf; */
    max-width: 500px;
    width: 100%;
    box-shadow:none;
  }
  @keyframes customEnterOverlayAnimation {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes customLeaveOverlayAnimation {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  
  @keyframes customEnterModalAnimation {
    0% {
      transform: scale(0.2);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes customLeaveModalAnimation {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.2);
    }
  }