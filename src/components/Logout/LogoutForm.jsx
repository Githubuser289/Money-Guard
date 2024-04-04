//  import { CustomButton } from 'components/RegistrationForm/RegistrationForm.styled'
import logo from '../images/logo.png'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/operations'
import { ButtonsContainer, CancelButton, ContainerLogout, LogoutButton, LogoutMain } from './LogoutForm.styled'


 const LogoutForm = () =>{
    const dispatch = useDispatch

const handleSubmit = () =>{
dispatch(logOut())
}

return (
    <>
    <LogoutMain>
    <ContainerLogout>
    <img src ={logo} alt = "logo"/>
    <span>Are you sure you want to log out?</span>
    <ButtonsContainer>
         <LogoutButton type='submit' onSubmit = {handleSubmit}>LOGOUT</LogoutButton>
    <CancelButton >CANCEL</CancelButton>
    
    </ButtonsContainer>
   </ContainerLogout>
    </LogoutMain>
    </>
)

 }
 export default LogoutForm