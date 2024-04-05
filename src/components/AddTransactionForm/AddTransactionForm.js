import { CustomButton } from "components/RegistrationForm/RegistrationForm.styled";
import { Formik } from "formik";
import styled from "styled-components";

export const TransactionForm = styled.form`
display: flex;
flex-direction: column;
border:2px solid red;
gap:40px;
padding: 40px 20px;
`;

export const SelectInput = styled.select`
 width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding: 0 0 0 35px ;
  margin-top:25px;
  position: relative;
  &::placeholder {
    font-size: 18px;
    line-height: 1.5;
    text-align:center;
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
  
`


export const ContainerTransaction = styled.div`
display: flex;
justify-content: space-between;
`
export const AmountInput = styled.input`
width: 30%;
background-color: transparent;
border: none;
border-bottom: 1px solid rgba(255, 255, 255, 0.4);

&::placeholder {
    font-size: 18px;
    line-height: 1.5;
    text-align:center;
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
`

export const DateContainer = styled.div`
width: 55%;
display: flex;
justify-content: space-between;
align-items: center;
`
export const CommentInput = styled.input`
 background-color: transparent;
width: 100%;
border: none;
border-bottom: 1px solid rgba(255, 255, 255, 0.4);

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
`
const AddButton = styled(CustomButton)`
`