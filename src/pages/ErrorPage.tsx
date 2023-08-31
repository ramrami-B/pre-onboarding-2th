import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { RootState } from '../redux/store';
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useSelector((state: RootState) => state.issues.error);

  const handlerReloadButton = () => {
    navigate('/');
  };
  return (
    <ErrorContainert>
      <h1 style={{ color: '#E5361F' }}>🚨😵ERROR OCURED!!!😵🚨</h1>
      <h1>message: {error}</h1>
      <Button onClick={handlerReloadButton}>새로고침</Button>
    </ErrorContainert>
  );
};

export default ErrorPage;

const ErrorContainert = styled.div`
  width: 70%;
  margin: auto;
  border-radius: 0.625rem;
  border: 0.5px solid var(--primary, #24292f);
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
  padding: 8rem 1rem;
`;

const Button = styled.button`
  border: none;
  width: 10rem;
  height: 3rem;
  margin: auto;
  border-radius: 0.625rem;
  background: var(--primary, #24292f);
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
`;
