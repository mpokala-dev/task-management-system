import styles from './StatCard.module.css';
import type { StatCardProps } from './StatCard.types';

function StatCard({ label, value, icon, variant = 'neutral', loading = false }: StatCardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.iconWrapper} aria-hidden="true">
        {icon}
      </div>
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        {loading ? (
          <div className={styles.skeleton} aria-hidden="true" />
        ) : (
          <span className={styles.value}>{value}</span>
        )}
      </div>
      <span className={styles.srOnly}>
        {label}: {loading ? 'loading' : value}
      </span>
    </div>
  );
}

export default StatCard;
