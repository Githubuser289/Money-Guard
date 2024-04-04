import {Form, Formik} from 'formik';
import styled from 'styled-components';
import backLogIn from '../../images/login-bg/bg-login-web.webp';
import backRegister from '../../images/register-bg/bg-register-desktop.webp';



export const FormikLogin = styled(Formik)`
padding: 30px 0 30px 0;
`
export const ImgLogoStyled = styled.img`
margin-left:15%;
margin-bottom: 10px;

`

export const FormLoginStyled = styled(Form)`
  padding: 100px 20px 100px 20px ;
  /* background-color: purple; */
`
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

 
  @media screen and (min-width: 768px){
   width: 400px;
   min-width: auto;
   min-height: auto;
  }
  
  `
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
`