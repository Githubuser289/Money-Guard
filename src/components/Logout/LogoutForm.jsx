//  import { CustomButton } from 'components/RegistrationForm/RegistrationForm.styled'
import logo from '../../images/logo_money_guard.svg';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/operations';
import {
  ButtonsContainer,
  CancelButton,
  ContainerLogout,
  LogoutButton,
  LogoutMain,
} from './LogoutForm.styled';
import {
  ImgStyled,
  LogoContainer,
  LogoText,
} from 'components/RegistrationForm/RegistrationForm.styled';

const LogoutForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  return (
    <>
      <LogoutMain>
        <ContainerLogout>
          <LogoContainer>
            <ImgStyled src={logo} alt="logo" />
            <LogoText>Money Guard</LogoText>
          </LogoContainer>
          <span>Are you sure you want to log out?</span>
          <ButtonsContainer>
            <LogoutButton
              type="button"
              onClick={() => {
                dispatch(logOut());
              }}
            >
              LOGOUT
            </LogoutButton>
            <CancelButton onClick={closeModal}>CANCEL</CancelButton>
          </ButtonsContainer>
        </ContainerLogout>
      </LogoutMain>
    </>
  );
};
export default LogoutForm;
