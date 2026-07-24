import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { ROUTES } from '@/constants/routes';
import { useTheme } from '@/contexts/useTheme';
import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input';
import Card from '@/components/common/Card';

function Home() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const theme = useTheme();

  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>
        Home Page {isAuthenticated ? ' logged in' : ' Sign up'}
      </h1>
      <Card className="custom-card">
        <Input label="Username" placeholder="Enter your username" />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          error="Password is required"
        />
        <Input label="Email" type="email" placeholder="Enter your email" />
        <Button> Click me </Button>
      </Card>
      <Link to={ROUTES.LOGIN}>Sign in</Link>
    </>
  );
}

export default Home;
