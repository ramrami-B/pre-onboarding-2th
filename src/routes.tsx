// routes.tsx
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import IssueListPage from './pages/IssueListPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={IssueListPage} />
    </Routes>
  );
};

export default AppRoutes;
