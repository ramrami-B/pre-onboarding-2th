import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import PageLayout from './layout/PageLayout';

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <PageLayout>
          <AppRoutes />
        </PageLayout>
      </Provider>
    </HashRouter>
  );
};

export default App;
