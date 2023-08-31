import { styled } from 'styled-components';
import { colors } from '../../constants/colors';

const Loading = () => {
  return (
    <LoadingContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <TitleBox></TitleBox>
        <InfoBox></InfoBox>
      </div>
      <CommentBox></CommentBox>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: ${colors.white};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const TitleBox = styled.div`
  width: 13.1875rem;
  height: 1rem;
  flex-shrink: 0;
  background: ${colors.gray};
  border-radius: 0.2rem;
`;

const InfoBox = styled.div`
  width: 25.1875rem;
  height: 1rem;
  flex-shrink: 0;
  background: linear-gradient(
    90deg,
    ${colors.gray} 0%,
    rgba(217, 217, 217, 0.7) 29.29%,
    rgba(217, 217, 217, 0.5) 51.68%,
    rgba(217, 217, 217, 0.7) 73.44%,
    ${colors.gray} 100%
  );
  border-radius: 0.2rem;
`;

const CommentBox = styled.div`
  width: 3.75rem;
  height: 2.5rem;
  flex-shrink: 0;
  background: linear-gradient(
    90deg,
    ${colors.gray} 0%,
    rgba(217, 217, 217, 0.67) 36.96%,
    rgba(217, 217, 217, 0.5) 55.58%,
    rgba(217, 217, 217, 0.74) 79.14%,
    ${colors.gray} 97.92%
  );
  border-radius: 0.2rem;
`;
