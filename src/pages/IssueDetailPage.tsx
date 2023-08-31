import { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { RootState } from '../redux/store';
import { getIssueDetail } from '../redux/issueSlice';
import { AiOutlineComment } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import ReactMarkdown from 'react-markdown';
import Skeleton from '../components/Skeleton';
import { styled } from 'styled-components';

const IssueDetailPage = () => {
  const dispatch = useAppDispatch();
  const issue = useAppSelector((state: RootState) => state.issues.issue);
  const isLoading = useAppSelector((state: RootState) => state.issues.isLoading);

  const issueId = parseInt(window.location.hash.split('/')[2]);

  useEffect(() => {
    dispatch(getIssueDetail(issueId));
  }, []);

  return isLoading ? (
    <Skeleton></Skeleton>
  ) : (
    <IssueDetailContainer>
      <HeaderBox>
        <div style={{ width: '10%' }}>
          {issue.avatarUrl ? (
            <img
              src={issue.avatarUrl}
              style={{ width: '100%', height: '100%', borderRadius: '70%' }}
            ></img>
          ) : (
            <CgProfile></CgProfile>
          )}
        </div>
        <div style={{ width: '80%' }}>
          <p style={{ fontWeight: 700 }}>
            [#{issue.number}]&nbsp; &nbsp;📌 Title: {issue.title}
          </p>
          <p>
            ✍🏻 작성자: {issue.user}&nbsp; &nbsp;🗓️ 작성일: {issue.updatedAt}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <AiOutlineComment size={30} />
          <p>{issue.comments}개</p>
        </div>
      </HeaderBox>
      <BodyBox>
        <ReactMarkdown children={issue.body}></ReactMarkdown>
      </BodyBox>
    </IssueDetailContainer>
  );
};

export default IssueDetailPage;

const IssueDetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderBox = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  border: 0.2px solid var(--primary, #545f71);
  background: #fff;
`;

const BodyBox = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
  border-radius: 0rem 0rem 0.625rem 0.625rem;
  border-right: 0.2px solid var(--primary, #24292f);
  border-bottom: 0.2px solid var(--primary, #24292f);
  border-left: 0.2px solid var(--primary, #24292f);
  background: #fff;
`;