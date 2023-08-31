import { styled } from 'styled-components';
import { AiOutlineComment } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface IssueListItemProps {
  target: any;
  issue: any;
}

const IssueListItem = ({ target, issue }: IssueListItemProps) => {
  return (
    <Link to={`/issue/${issue.number}`} style={{ textDecoration: 'none', color: '#000' }}>
      <IssueItemBox ref={target} id="issue-list-item">
        <div>
          <p style={{ fontWeight: 700 }}>
            [#{issue.number}]&nbsp; &nbsp;📌 Title: {issue.title}
          </p>
          <p>
            ✍🏻 작성자: {issue.user.login}&nbsp; &nbsp;🗓️ 작성일: {issue.updated_at}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <AiOutlineComment size={30} />
          <p>{issue.comments}개</p>
        </div>
      </IssueItemBox>
    </Link>
  );
};

export default IssueListItem;

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
