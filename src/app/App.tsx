import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '@/app/store';
import { router } from '@/routes/AppRoute';
import ErrorBoundary from '@components/common/ErrorBoundary/ErrorBoundary';
import EnvironmentError from '@components/common/EnvironmentError';
import { envValidation } from '@/config/env';
import { ThemeProvider } from '@/contexts/ThemeContext';

function App() {
  if (!envValidation.isValid) {
    return <EnvironmentError validation={envValidation} />;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
