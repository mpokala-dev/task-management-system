import styles from './EnvironmentError.module.css';
import type { EnvValidationResult } from '@/config/env';

interface EnvironmentErrorProps {
  validation: EnvValidationResult;
}

function EnvironmentError({ validation }: EnvironmentErrorProps) {
  return (
    <div className={styles.container}>
      <h1>Configuration Error</h1>
      <p>The application cannot start because required environment variables are missing:</p>
      <ul>
        {validation.missing.map((key) => (
          <li key={key}>
            <code>{key}</code>
          </li>
        ))}
      </ul>
      <p>
        Check your <code>.env</code> file against <code>.env.example</code>, then restart the dev
        server.
      </p>
    </div>
  );
}

export default EnvironmentError;
