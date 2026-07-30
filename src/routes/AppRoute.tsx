import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import ProtectedRoute from '@/routes/ProtectedRoute';
import PublicRoute from './PublicRoute';
import Home from '@/pages/Home';
import Login from '@/pages/Login/LoginPage';
import Dashboard from '@/pages/Dashboard';
import NotFound from '@/pages/NotFound';
import { ROUTES } from '@/constants/routes';
import RouteErrorBoundary from '@/components/common/ErrorBoundary/RouteErrorBoundary';
import DashboardLayout from '@/layouts/DashboardLayout/DashboardLayout';
import TaskDetail from '@/pages/TaskDetail';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      {
        errorElement: <RouteErrorBoundary />,
        children: [{ path: ROUTES.SAMPLE_DASHBOARD, element: <Dashboard forcePreview={true} /> }],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: ROUTES.DASHBOARD, element: <Dashboard /> },
          { path: ROUTES.TASK_DETAIL, element: <TaskDetail /> },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { element: <PublicRoute />, children: [{ path: ROUTES.LOGIN, element: <Login /> }] },
    ],
  },
  { path: ROUTES.NOT_FOUND, errorElement: <RouteErrorBoundary />, element: <NotFound /> },
]);
