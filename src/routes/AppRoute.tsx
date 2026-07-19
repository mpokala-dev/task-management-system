// src/routes/AppRoute.tsx
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login/LoginPage';
import Dashboard from '@/pages/Dashboard';
import NotFound from '@/pages/NotFound';
import RouteErrorBoundary from '@/components/common/ErrorBoundary/RouteErrorBoundary';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.DASHBOARD, element: <Dashboard /> },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [{ path: ROUTES.LOGIN, element: <Login /> }],
  },
  {
    path: ROUTES.NOT_FOUND,
    errorElement: <RouteErrorBoundary />,
    element: <NotFound />,
  },
]);
