import styles from './Button.module.css';
import type { ButtonProps } from './Button.types';

function Button({
  variant = 'primary',
  loading = false,
  disabled,
  children,
  className,
  ...rest
}: ButtonProps) {
  const buttonStyles = `${styles.button} ${styles[variant]} ${className ?? ''}`;

  return (
    <button className={buttonStyles} disabled={disabled || loading} aria-busy={loading} {...rest}>
      {loading ? 'Loading...' : children}
    </button>
  );
}
export default Button;
