import Modal from 'react-modal';
import { AddButton, AddIcon } from './AddButton.styled';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: 'none',
    backgroundColor: 'rgba(91, 13, 218, 0.9)',
    transform: 'translate(-50%, -50%)',
    // backdropFilter: 'blur(20px)',
    borderRadius: '8px',
    backdropFilter: 'blur(40px)',
    padding: '20px 10px',
  },
  overlay: {
    backgroundColor: 'rgba(136, 134, 134, 0.25)',
    backdropFilter: 'blur(1.5px)',
  },
};

const RoundAddBtn = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <AddButton onClick={openModal}>
        <AddIcon />
      </AddButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <AddTransactionForm closeModal={closeModal} />
      </Modal>
    </>
  );
};
export default RoundAddBtn;
