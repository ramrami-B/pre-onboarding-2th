import { styled } from 'styled-components';
import Logo from '../assets/logo.svg';
import { colors } from '../constants/colors';

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderContainer>
        <img src={Logo} style={{ width: '3rem', height: '3rem', margin: '0 2rem' }} />
        <h1>facebook / react</h1>
      </HeaderContainer>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background-color: ${colors.white};
  z-index: 100;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

const HeaderContainer = styled.div`
  width: fit-content;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
`;
