import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '@/app/store';
import { router } from '@/routes/AppRoute';
import ErrorBoundary from '@components/common/ErrorBoundary/ErrorBoundary';
import EnvironmentError from '@components/common/EnvironmentError';
import { envValidation } from '@/config/env';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { restoreSession } from '@/features/auth/store/authSlice';

function AppContent() {
  const dispatch = useAppDispatch();
  const sessionChecked = useAppSelector((state) => state.auth.sessionChecked);

  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  if (!sessionChecked) {
    return <div>Checking session...</div>; // swap for your Loader component
  }

  return <RouterProvider router={router} />;
}
function App() {
  if (!envValidation.isValid) {
    return <EnvironmentError validation={envValidation} />;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Provider store={store}>
          <AppContent />
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
