import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { getIssues } from '../redux/issueSlice';
import { useAppSelector } from '../hooks/useAppSelector';
import { RootState } from '../redux/store';
import { styled } from 'styled-components';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

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
          <div>로딩 중...</div>
        ) : (
          <IssueItemBox key={index} ref={target}>
            <div>
              <p>
                #{issue.number} {issue.title}
              </p>
              <p>
                작성자: {issue.user.login}, 작성일: {issue.updated_at}
              </p>
            </div>
            <p>{issue.comments}</p>
          </IssueItemBox>
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

const IssueItemBox = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
