import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '@/components/common/Card';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { login, clearError } from '@/features/auth/store/authSlice';
import { validateEmail, validatePassword } from '@/utils/validation';
import styles from './LoginPage.module.css';
import { ROUTES } from '@/constants/routes';

interface FormErrors {
  email?: string;
  password?: string;
}

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loading = useAppSelector((state) => state.auth.loading);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const authError = useAppSelector((state) => state.auth.error);

  useEffect(() => {
    if (isAuthenticated) {
      const from = (location.state as { from?: Location })?.from?.pathname ?? ROUTES.HOME;
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, location.state, navigate]);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError ?? undefined, password: passwordError ?? undefined });
      return;
    }

    setErrors({});
    dispatch(login({ email, password }));
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <p className={styles.wordmark}>TASK MANAGEMENT SYSTEM</p>
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>Sign in to organise your work.</p>
        {authError && (
          <div className={styles.authError} role="alert">
            {authError}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <Input
            label="Email"
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            autoComplete="email"
            value={email}
            error={errors.email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
              if (authError) dispatch(clearError());
            }}
          />

          <div className={styles.passwordField}>
            <Input
              label="Password"
              required
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="••••••••"
              autoComplete="current-password"
              value={password}
              error={errors.password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                if (authError) dispatch(clearError());
              }}
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
