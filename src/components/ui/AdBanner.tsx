import { styled } from 'styled-components';
import { colors } from '../../constants/colors';

const AdBanner = () => {
  const handlerOpenWanted = () => {
    window.open('https://www.wanted.co.kr/');
  };
  return (
    <AdBannerBox onClick={handlerOpenWanted}>
      <AdImage src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"></AdImage>
      <p style={{ fontWeight: 600 }}>(광고) 모두가 나답게 일하고 즐겁게 성장할 수 있도록</p>
    </AdBannerBox>
  );
};

export default AdBanner;

const AdBannerBox = styled.div`
  width: 80%;
  height: 5rem;
  margin: auto;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  background: ${colors.white};
  border-bottom: 0.3px solid var(--primary, ${colors.primary});

  @media (max-width: 320px) {
    width: 100%;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }
`;

const AdImage = styled.img`
  width: 15%;

  @media (max-width: 320px) {
    width: 40%;
  }
`;
