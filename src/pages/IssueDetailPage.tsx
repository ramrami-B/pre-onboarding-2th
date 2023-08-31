import { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { RootState } from '../redux/store';
import { getIssueDetail } from '../redux/issueSlice';
import { AiOutlineComment } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import ReactMarkdown from 'react-markdown';
import LoadingPage from '../components/LoadingPage';
import { styled } from 'styled-components';
import ErrorPage from '../components/ErrorPage';
import { colors } from '../constants/colors';

const IssueDetailPage = () => {
  const dispatch = useAppDispatch();

  const issue = useAppSelector((state: RootState) => state.issues.issue);
  const isLoading = useAppSelector((state: RootState) => state.issues.isLoading);
  const error = useAppSelector((state: RootState) => state.issues.error);

  const issueId = parseInt(window.location.hash.split('/')[2]);

  useEffect(() => {
    dispatch(getIssueDetail(issueId));
  }, []);

  return error ? (
    <ErrorPage></ErrorPage>
  ) : isLoading ? (
    <LoadingPage></LoadingPage>
  ) : (
    <div>
      <HeadContainer>
        <h2>
          [#{issue.number}]&nbsp; &nbsp;{issue.title}
        </h2>
        <InfoBox>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {issue.avatarUrl ? (
              <ProfileImageWrapper>
                <img
                  src={issue.avatarUrl}
                  style={{ width: '100%', height: '100%', borderRadius: '70%' }}
                ></img>
              </ProfileImageWrapper>
            ) : (
              <CgProfile size={70}></CgProfile>
            )}
            <p>
              ✍🏻 작성자: {issue.user}&nbsp; &nbsp;🗓️ 작성일: {issue.updatedAt}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <AiOutlineComment size={30} />
            <p>{issue.comments}개</p>
          </div>
        </InfoBox>
      </HeadContainer>
      <BodyContainer>
        <ReactMarkdown children={issue.body}></ReactMarkdown>
      </BodyContainer>
    </div>
  );
};

export default IssueDetailPage;

const HeadContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  border: 0.2px solid var(--primary, #545f71);
  background: #fff;
`;

const BodyContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
  border-radius: 0rem 0rem 0.625rem 0.625rem;
  border-right: 0.2px solid var(--primary, ${colors.primary});
  border-bottom: 0.2px solid var(--primary, ${colors.primary});
  border-left: 0.2px solid var(--primary, ${colors.primary});
  background: ${colors.white};
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileImageWrapper = styled.div`
  height: 3rem;
  width: 3rem;
`;
