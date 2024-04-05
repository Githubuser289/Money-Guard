import LoginForm from 'components/LoginForm/LoginForm';
import {
  Container,
  FormContainer,
} from 'components/LoginForm/LoginForm.styled';
import React from 'react';

const LoginPage = () => {
  return (
    <Container>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
