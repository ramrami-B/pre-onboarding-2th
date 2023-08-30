import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import PageLayout from './layout/PageLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PageLayout>
          <AppRoutes />
        </PageLayout>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
