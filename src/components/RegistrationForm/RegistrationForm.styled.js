import styled, { css } from 'styled-components';
// import img from '../images/Rectangle.png'
import { RiUserFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { Form, Field } from 'formik';
import PasswordStrengthBar from 'react-password-strength-bar-with-style-item';
import { NavLink } from 'react-router-dom';

export const FormRegisterStyled = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  /* background-color: purple; */
  /* background-color: hsba(0, 0%, 0%, 0.25); */
  /* background-image: url(&{img}); */
`;

export const ImgStyledd = styled.img`
  width: 36px;
  height: 36px;
`;

export const InputStyled = styled(Field)`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding: 0 0 0 35px;
  margin-top: 25px;
  position: relative;

  &::placeholder {
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus,
  &:hover,
  &:active,
  &:visited,
  &:focus-visible {
    outline: none;
    font-size: 18px;
    line-height: 1.5;
  }

  &:focus::placeholder,
  &:active::placeholder {
    transform: translateY(-100%);
    opacity: 1;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.h2`
  color: white;
  margin-top: 0;
  margin-bottom: 0;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const IconContainer = styled.div`
  position: absolute;
  left: 5px;
`;
export const UserIcon = styled(RiUserFill)`
  color: rgba(255, 255, 255, 0.6);
  margin-top: 30px;
`;
export const EmailIcon = styled(MdEmail)`
  color: rgba(255, 255, 255, 0.6);
  margin-top: 30px;
`;
export const PasswordIcon = styled(IoMdLock)`
  color: rgba(255, 255, 255, 0.6);
  margin-top: 30px;
`;
export const PasswordBar = styled(PasswordStrengthBar)`
  width: 100%;
`;
export const ErrorMessageStyled = styled.span`
  color: #ff868d;
  font-size: 14px;
  margin-top: 2px;
`;
const buttonStyles = css`
  width: 250px;
  height: 50px;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomButtonBase = styled.button`
  && {
    ${buttonStyles}
    color: white;
    background: var(
      --button-gradient,
      linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
    );
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

    &:hover {
      color: #3a2f43;
    }
  }
`;

const CustomNavLinkBtnBase = styled(NavLink)`
  && {
    ${buttonStyles}
    background-color: #ffffff;
    color: #623f8b;
  }
`;

export const CustomButton = ({ isNavLink, customStyles, ...props }) => {
  const StyledComponent = isNavLink ? CustomNavLinkBtnBase : CustomButtonBase;
  return <StyledComponent {...props} />;
};
