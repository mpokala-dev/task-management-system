import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import '@/styles/globals.css';
import { store } from '@/app/store';
import { router } from '@/routes/AppRoute';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
