import { styled } from 'styled-components';
import { AiOutlineComment } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { colors } from '../../constants/colors';
import { dateFormatter } from '../../utils/dateFormatter';

const IssueDetailHead = ({ issue }: any) => {
  return (
    <HeadContainer>
      <h2>
        [#{issue.number}]&nbsp; &nbsp;{issue.title}
      </h2>
      <InfoBox>
        <PostInfo>
          {issue.avatarUrl ? (
            <ProfileImageWrapper>
              <img src={issue.avatarUrl} style={{ width: '100%', borderRadius: '70%' }}></img>
            </ProfileImageWrapper>
          ) : (
            <CgProfile size={70}></CgProfile>
          )}
          <WriterDateWrapper>
            <span>✍🏻 작성자: {issue.user}</span>
            <span>🗓️ 작성일: {dateFormatter(issue.updatedAt)}</span>
          </WriterDateWrapper>
        </PostInfo>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <AiOutlineComment size={30} />
          <p>{issue.comments}개</p>
        </div>
      </InfoBox>
    </HeadContainer>
  );
};

export default IssueDetailHead;

const HeadContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  border: 0.2px solid var(--primary, ${colors.primary});
  background: #fff;

  @media (max-width: 425px) {
    width: 95%;
    padding: 0;
    border: none;
    border-bottom: 0.2px solid var(--primary, ${colors.primary});
    border-radius: 0;
  }
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const PostInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 425px) {
    align-items: center;
  }

  @media (max-width: 320px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const ProfileImageWrapper = styled.div`
  width: 3rem;
`;

const WriterDateWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
