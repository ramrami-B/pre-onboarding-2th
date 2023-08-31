import { styled } from 'styled-components';
import Logo from '../assets/logo.svg';

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
  width: 100vw;
  height: 15%;
`;

const HeaderContainer = styled.div`
  width: fit-content;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
`;