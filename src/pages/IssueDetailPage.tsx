import { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { RootState } from '../redux/store';
import { getIssueDetail } from '../redux/issueSlice';
import ReactMarkdown from 'react-markdown';
import Loading from '../components/ui/Loading';
import { styled } from 'styled-components';
import Error from '../components/ui/Error';
import { colors } from '../constants/colors';
import IssueDetailHead from '../components/issue/IssueDetailHead';

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
    <Error></Error>
  ) : isLoading ? (
    <Loading></Loading>
  ) : (
    <>
      <IssueDetailHead issue={issue}></IssueDetailHead>
      <BodyContainer>
        <ReactMarkdown children={issue.body}></ReactMarkdown>
      </BodyContainer>
    </>
  );
};

export default IssueDetailPage;

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
