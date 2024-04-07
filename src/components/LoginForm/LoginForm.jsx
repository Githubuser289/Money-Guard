import * as Yup from 'yup';
import logo from '../../images/logo_money_guard.svg';
import {
  CustomButton,
  EmailIcon,
  ErrorMessageStyled,
  IconContainer,
  InputContainer,
  InputStyled,
  LogoContainer,
  LogoText,
  PasswordIcon,
} from '../RegistrationForm/RegistrationForm.styled';
import {
  FormLoginStyled,
  FormikLogin,
  ImgStyled2,
  // ImgLogoStyled,
} from './LoginForm.styled';
import { ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { logIn } from '../../redux/operations';
import { toast } from 'react-toastify';
import { selectUser } from '../../redux/selectors';

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    const response = dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    if (response.error) {
      toast.error('Login failed. Please check your credentials.', {
        autoClose: 1200,
      });
    } else {
      toast.success(`You have successfully logged in ${user.name}.`, {
        autoClose: 1200,
      });
      resetForm();
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'The password must have min 6 characters')
      .max(12, 'The password must have max 12 characters'),
  });

  return (
    <>
      <FormikLogin
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <FormLoginStyled>
          <LogoContainer>
            <ImgStyled2 src={logo} alt="logo" />
            <LogoText>Money Guard</LogoText>
          </LogoContainer>

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

          <CustomButton type="submit">LOG IN</CustomButton>

          <CustomButton isNavLink to="/registration">
            REGISTER
          </CustomButton>
          {/* <ButtonStyled type="button">REGISTER</ButtonStyled> */}
        </FormLoginStyled>
      </FormikLogin>
    </>
  );
};
export default LoginForm;
