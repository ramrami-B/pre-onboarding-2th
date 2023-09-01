import { styled } from 'styled-components';
import { AiOutlineComment } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { colors } from '../../constants/colors';
import { dateFormatter } from '../../utils/dateFormatter';

interface IssueListItemProps {
  target: any;
  issue: any;
}

const IssueListItem = ({ target, issue }: IssueListItemProps) => {
  return (
    <Link to={`/issue/${issue.number}`} style={{ textDecoration: 'none', color: '#000' }}>
      <IssueItemBox ref={target} id="issue-list-item">
        <h3>
          [#{issue.number}]&nbsp; &nbsp;{issue.title}
        </h3>
        <WriterDateCommentsWrapper>
          <div>
            <p>✍🏻 작성자: {issue.user.login}</p>
            <p>🗓️ 작성일: {dateFormatter(issue.updated_at)}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AiOutlineComment size={30} />
            <p>{issue.comments}</p>
          </div>
        </WriterDateCommentsWrapper>
      </IssueItemBox>
    </Link>
  );
};

export default IssueListItem;

const IssueItemBox = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 1.5rem;
  background: ${colors.white};
  border-bottom: 0.3px solid var(--primary, ${colors.primary});

  @media (max-width: 320px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

const WriterDateCommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
`;
