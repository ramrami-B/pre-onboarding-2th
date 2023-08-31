import { styled } from 'styled-components';
import Header from '../components/Header';
import { colors } from '../constants/colors';

const PageLayout = ({ children }: any) => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Header></Header>
      <Layout>{children}</Layout>
    </div>
  );
};

export default PageLayout;

const Layout = styled.div`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  overflow: auto;
`;
