import { styled } from 'styled-components';

const AdBanner = () => {
  const handlerOpenWanted = () => {
    window.open('https://www.wanted.co.kr/');
  };
  return (
    <AdBannerBox onClick={handlerOpenWanted}>
      <AdImage src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"></AdImage>
      <h3>(광고) 모두가 나답게 일하고 즐겁게 성장할 수 있도록</h3>
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
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const AdImage = styled.img`
  width: 15%;
`;
