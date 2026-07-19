import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { ROUTES } from '@/constants/routes';
import { useTheme } from '@/contexts/useTheme';

function Home() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const theme = useTheme();

  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>
        Home Page {isAuthenticated ? ' logged in' : ' Sign up'}
      </h1>
      <Link to={ROUTES.LOGIN}>Sign in</Link>
    </>
  );
}

export default Home;
