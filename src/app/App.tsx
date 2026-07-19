import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import '@/styles/globals.css';
import { store } from '@/app/store';
import { router } from '@/routes/AppRoute';
import ErrorBoundary from '@components/common/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
