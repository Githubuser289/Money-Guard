import { Form, Formik } from 'formik';
import styled from 'styled-components';
import backLogIn from '../../images/login-bg/bg-login-web.webp';
import backRegister from '../../images/register-bg/bg-register-desktop.webp';

export const FormikLogin = styled(Formik)`
  padding: 30px 0 30px 0;
`;

export const FormLoginStyled = styled(Form)`
  padding: 100px 20px 100px 20px;
  /* background-color: purple; */
`;
export const FormContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--Form-color, rgba(255, 255, 255, 0.1));
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 400px;
    min-width: auto;
    min-height: auto;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url(${props => (props.isregister ? backRegister : backLogIn)});
  background-color: #0f0739;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;
`;

export const LogoutMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* background-color:purple; */
  min-width: 100vw;
  min-height: 100vh;
`;
export const ContainerLogout = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 52px;
  max-width: 60vw;
  padding: 60px;
  color: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LogoutButton = styled.button`
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
  color: white;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );
  /* box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2); */

  &:hover {
    color: #3a2f43;
    box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.2),
      1px 9px 15px 0px rgba(0, 0, 0, 0.2), 2px 17px 12px -17px #111,
      0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const CancelButton = styled.button`
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
  background-color: #ffffff;
  color: rgba(98, 63, 139, 1);

  &:hover {
    color: #3a2f43;
    box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.2),
      1px 9px 15px 0px rgba(0, 0, 0, 0.2), 2px 17px 12px -17px #111,
      0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  }
`;
