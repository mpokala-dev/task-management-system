// src/routes/AppRoute.tsx
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login/LoginPage';
import Dashboard from '@/pages/Dashboard';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/dashboard', element: <Dashboard /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [{ path: '/login', element: <Login /> }],
  },
  { path: '*', element: <NotFound /> },
]);
