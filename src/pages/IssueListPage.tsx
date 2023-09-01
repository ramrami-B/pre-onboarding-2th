import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { getIssues } from '../redux/issueSlice';
import { useAppSelector } from '../hooks/useAppSelector';
import { RootState } from '../redux/store';
import { styled } from 'styled-components';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Skeleton from '../components/ui/Loading';
import IssueListItem from '../components/issue/IssueListItem';
import AdBanner from '../components/ui/AdBanner';
import Error from '../components/ui/Error';
import Loading from '../components/ui/Loading';

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
    <Error></Error>
  ) : (
    <>
      {Object.values(issues).map((issue: any, index: number) =>
        isLoading ? (
          <Loading key={index}></Loading>
        ) : (
          <IssueListItemContainer key={index}>
            {index !== 0 && index % 4 === 0 && <AdBanner></AdBanner>}
            <IssueListItem key={index} target={target} issue={issue}></IssueListItem>
          </IssueListItemContainer>
        ),
      )}
    </>
  );
};

export default IssueListPage;

const IssueListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
