import styles from './Card.module.css';
import type { CardProps } from './Card.types';

function Card({ children, className }: CardProps) {
  return <div className={`${styles.card} ${className ?? ''}`}>{children}</div>;
}

export default Card;
