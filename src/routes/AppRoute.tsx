// src/routes/AppRoute.tsx
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login/LoginPage';
import Dashboard from '@/pages/Dashboard';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.DASHBOARD, element: <Dashboard /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [{ path: ROUTES.LOGIN, element: <Login /> }],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);
