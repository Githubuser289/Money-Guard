import { useSelector } from 'react-redux';
import {
  HeaderContainer,
  ImgHeaderStyled,
  LogoHeaderContainer,
  LogoHeaderText,
  RightSide,
  UserName,
} from './Header.styled';
import { selectUser } from '../../redux/selectors';
import logo from '../../images/logo_money_guard.svg';
import './Header.css';
import verticalline from '../../images/Vector 4.svg';
import ExitBtn from './ExitButton';

const Header = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <HeaderContainer>
        <LogoHeaderContainer>
          <ImgHeaderStyled src={logo} alt="logo" />
          <LogoHeaderText>Money Guard</LogoHeaderText>
        </LogoHeaderContainer>

        <RightSide>
          <UserName>{user.username}</UserName>

          <div>
            <img src={verticalline} alt="vertical line" />
          </div>

          <ExitBtn />
        </RightSide>
      </HeaderContainer>
    </>
  );
};
export default Header;
