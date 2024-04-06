import {
  CustomButton,
  EmailIcon,
  ErrorMessageStyled,
  FormRegisterStyled,
  IconContainer,
  ImgStyled,
  InputContainer,
  InputStyled,
  LogoContainer,
  LogoText,
  PasswordBar,
  PasswordIcon,
  UserIcon,
} from './RegistrationForm.styled';
import logo from '../../images/logo_money_guard.svg';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/operations';
import { toast } from 'react-toastify';
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordc: '',
  };
  const onSubmit = (values, { resetForm }) => {
    const response = dispatch(
      register({
        username: values.name,
        email: values.email,
        password: values.password,
        // username: 'iuser188',
        // email: 'email188@server.com',
        // password: 'wps99188',
      })
    );

    if (response.error) {
      toast.error('Register failed. Please check your credentials.', {
        autoClose: 1200,
      });
    } else {
      toast.success(`Welcome ${response.user.username}!`, {
        autoClose: 1200,
      });
      resetForm();
      navigate('/dashboard');
    }

    // setTimeout(() => {
    //     navigate.push('/dashboard');
    //     setSubmitting(false);
    // },1000);

    console.log('Form data', values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Must have min 6 characters')
      .max(12, 'Must have max 12 characters'),
    passwordc: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Re-enter the password'),
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmiting, values }) => (
          <FormRegisterStyled>
          <LogoContainer>
        <ImgStyled src={logo} alt='logo' />
        <LogoText>Money Guard</LogoText>
        </LogoContainer>

            <InputContainer>
              <IconContainer>
                <UserIcon />
              </IconContainer>
              <InputStyled placeholder="Name" name="name" type="text" />
            </InputContainer>
            <ErrorMessageStyled>
              <ErrorMessage component="span" name="name" />
            </ErrorMessageStyled>
            <InputContainer>
              <IconContainer>
                <EmailIcon />
              </IconContainer>
              <InputStyled placeholder="E-mail" name="email" type="email" />
            </InputContainer>

            <ErrorMessageStyled>
              <ErrorMessage component="span" name="email" />
            </ErrorMessageStyled>

            <InputContainer>
              <IconContainer>
                <PasswordIcon />
              </IconContainer>
              <InputStyled
                placeholder="Password"
                name="password"
                type="password"
              />
            </InputContainer>

            <ErrorMessageStyled>
              <ErrorMessage component="span" name="password" />
            </ErrorMessageStyled>

            <InputContainer>
              <IconContainer>
                <PasswordIcon />
              </IconContainer>
              <InputStyled
                placeholder="Confirm password"
                name="passwordc"
                type="password"
              />
            </InputContainer>

            <PasswordBar password={values.password} />
            <ErrorMessageStyled>
              <ErrorMessage component="span" name="passwordc" />
            </ErrorMessageStyled>

            <CustomButton type="submit">REGISTER</CustomButton>

            <CustomButton isNavLink to="/login">
              LOG IN
            </CustomButton>
          </FormRegisterStyled>
        )}
      </Formik>
    </>
  );
};
export default RegistrationForm;
