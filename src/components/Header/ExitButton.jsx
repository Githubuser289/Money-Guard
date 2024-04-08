import { useState } from "react";
import { ExitButton, ExitIcon, ExitText } from "./Header.styled";
import Modal from 'react-modal';
import LogoutForm from "components/Logout/LogoutForm";


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      border: 'none',
      backgroundColor: "rgba(91, 13, 218, 0.9)",
      transform: 'translate(-50%, -50%)',
      // backdropFilter: 'blur(20px)',
      borderRadius: '8px',
      padding:'0',
      backdropFilter: 'blur(40px)',
    //   padding:'20px 10px',
  
    },
    overlay:{
      backgroundColor: 'rgba(136, 134, 134, 0.25)',
      backdropFilter: 'blur(1.5px)',
    },
  
  };
const ExitBtn = () =>{
    const [IsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (<>
        <ExitButton onClick={openModal}>
        <ExitIcon />
        <ExitText>Exit</ExitText>
      </ExitButton>
      <Modal
        isOpen={IsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=""
      >
        <LogoutForm closeModal={closeModal} />
      </Modal>
      </>
    )
}
export default ExitBtn;