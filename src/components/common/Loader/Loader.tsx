import styles from './Loader.module.css';
import type { LoaderProps } from './Loader.types';

function Loader({ label = 'Loading...', fullScreen = false }: LoaderProps) {
  return (
    <div className={`${styles.container} ${fullScreen ? styles.fullScreen : ''}`} role="status">
      <div className={styles.spinner} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default Loader;
