import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '@/app/store';
import { router } from '@/routes/AppRoute';
import ErrorBoundary from '@components/common/ErrorBoundary/ErrorBoundary';
import EnvironmentError from '@components/common/EnvironmentError';
import { envValidation } from '@/config/env';

function App() {
  if (!envValidation.isValid) {
    return <EnvironmentError validation={envValidation} />;
  }

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
