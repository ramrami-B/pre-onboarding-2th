import { styled } from 'styled-components';
import Logo from '../assets/logo.svg';
import { colors } from '../constants/colors';

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderContainer>
        <LogoImage src={Logo}></LogoImage>
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

  @media (max-width: 425px) {
    height: 4rem;
  }
`;

const HeaderContainer = styled.div`
  width: fit-content;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0 0.8rem;

  @media (max-width: 320px) {
    width: 2rem;
    height: 2rem;
  }
`;
