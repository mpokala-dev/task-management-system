import { useNavigate, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import styles from './ErrorBoundary.module.css';

function RouteErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  let message = 'We are sorry - an enexpected error occured.';
  if (isRouteErrorResponse(error)) {
    message = error.statusText;
  } else if (error instanceof Error) {
    message = error.message;
  }
  console.log('Route error caught:', error);
  return (
    <div className={styles.errorBoundary}>
      <h1>Oops!</h1>
      <p className={styles.errorMessage}>{message}</p>
      <button onClick={() => navigate(-1)} className={styles.retryButton}>
        Go Back
      </button>
    </div>
  );
}

export default RouteErrorBoundary;
