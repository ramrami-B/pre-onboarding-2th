import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { getIssues } from '../redux/issueSlice';
import { useAppSelector } from '../hooks/useAppSelector';
import { RootState } from '../redux/store';
import { styled } from 'styled-components';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Skeleton from '../components/Skeleton';
import IssueListItem from '../components/IssueListItem';

const IssueListPage = () => {
  const [page, setPage] = useState(1);
  const [observe, unobserve] = useIntersectionObserver(() => {
    setPage(page => page + 1);
  });

  const target = useRef(null);

  const dispatch = useAppDispatch();
  const issues = useAppSelector((state: RootState) => state.issues.issueList);
  const isLoading = useAppSelector((state: RootState) => state.issues.isLoading);

  useEffect(() => {
    dispatch(getIssues(page));
  }, [page]);

  useEffect(() => {
    if (target.current) {
      isLoading ? unobserve(target.current) : observe(target.current);
    }
  }, [isLoading]);

  return (
    <IssueListContainer>
      {Object.values(issues).map((issue: any, index: number) =>
        isLoading ? (
          <Skeleton key={index}></Skeleton>
        ) : (
          <IssueListItem key={index} target={target} issue={issue}></IssueListItem>
        ),
      )}
    </IssueListContainer>
  );
};

export default IssueListPage;
const IssueListContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
