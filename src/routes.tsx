// routes.tsx
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import IssueListPage from './pages/IssueListPage';
import IssueDetailPage from './pages/IssueDetailPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={IssueListPage} />
      <Route path="issue/:id" Component={IssueDetailPage} />
    </Routes>
  );
};

export default AppRoutes;
