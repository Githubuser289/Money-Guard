// import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
// import MobileList from 'components/TransactionsList/MobileList';
// import TransactionsList from 'components/TransactionsList/TransactionsList';
import React, { useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
// import { StyledHomePageContainer } from './HomePage.styled';

// import { useNavigate } from 'react-router-dom';

import { AddButton, AddIcon, HomeContainer } from './HomeTab.styled';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import Modal from 'react-modal';


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


const HomeTab = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  // const isTablet = useMediaQuery({
  //   query: '(min-width:768px)',
  // });
  // const navigate = useNavigate();

  // const handleStatistics = () => {
  //   navigate('statistics');
  // };
  return (
    <>
    <div>
      {/* <StyledHomePageContainer> */}
      HomeTab
      {/* {isTablet ? <TransactionsList /> : <MobileList />}
      <ButtonAddTransactions />
      </StyledHomePageContainer> */}

       <AddButton onClick={openModal}>
<AddIcon/>
</AddButton>
<Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >

       <AddTransactionForm closeModal={closeModal}/>

      </Modal>
      
    </div>
   
   

    </>
  );
};

export default HomeTab;
