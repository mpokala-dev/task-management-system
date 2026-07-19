import { Component } from 'react';
import type { ErrorInfo } from 'react';
import type { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';
import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.fallback}>
          <h2>Something went wrong</h2>
          <p>We're sorry — an unexpected error occurred. You can try again below.</p>
          <button onClick={this.handleRetry} className={styles.retryButton}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
