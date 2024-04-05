import {
  Container,
  FormContainer,
} from 'components/LoginForm/LoginForm.styled';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import React from 'react';

const RegistrationPage = () => {
  return (
    <Container isregister="true">
      <FormContainer>
        <RegistrationForm />
      </FormContainer>
    </Container>
  );
};

export default RegistrationPage;
