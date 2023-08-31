import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { getIssues } from '../redux/issueSlice';
import { useAppSelector } from '../hooks/useAppSelector';
import { RootState } from '../redux/store';
import { styled } from 'styled-components';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Skeleton from '../components/LoadingPage';
import IssueListItem from '../components/IssueListItem';
import AdBanner from '../components/AdBanner';
import ErrorPage from '../components/ErrorPage';

const IssueListPage = () => {
  const [page, setPage] = useState(1);
  const [observe, unobserve, disconnect] = useIntersectionObserver(() => {
    setPage(page => page + 1);
  });

  const target = useRef(null);

  const dispatch = useAppDispatch();
  const issues = useAppSelector((state: RootState) => state.issues.issueList);
  const isLoading = useAppSelector((state: RootState) => state.issues.isLoading);
  const error = useAppSelector((state: RootState) => state.issues.error);

  useEffect(() => {
    dispatch(getIssues(page));
  }, [page]);

  useEffect(() => {
    if (target.current) {
      isLoading ? unobserve(target.current) : observe(target.current);
    }
  }, [isLoading]);

  return error ? (
    <ErrorPage></ErrorPage>
  ) : (
    <>
      {Object.values(issues).map((issue: any, index: number) =>
        isLoading ? (
          <Skeleton key={index}></Skeleton>
        ) : (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {index !== 0 && index % 4 === 0 && <AdBanner></AdBanner>}
            <IssueListItem key={index} target={target} issue={issue}></IssueListItem>
          </div>
        ),
      )}
    </>
  );
};

export default IssueListPage;
