import Card from '@/components/common/Card/Card';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { login } from '@features/auth/store/authSlice';
import { useState } from 'react';
import styles from './LoginPage.module.css';
import Input from '@/components/common/Input/Input';
import Button from '@/components/common/Button/Button';

function LoginPage() {
  // throw new Error(
  //   'Yet to Create Login Page - This is a placeholder for the login page. Please implement the login functionality here.',
  // );
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <p className={styles.wordmark}>Task Management System</p>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to organise your work</p>
        <form onSubmit={handleSubmit} noValidate={false} className={styles.form}>
          <Input
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.passwordField}>
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className={styles.toggleButton}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <Button type="submit" loading={loading} className={styles.submitButton}>
            Sign in
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
