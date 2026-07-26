import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { ROUTES } from '@/constants/routes';
import { useTheme } from '@/contexts/useTheme';

function Home() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const theme = useTheme();

  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>Home Page</h1>
      <h2 style={{ color: 'greenyellow' }}>
        {' '}
        {isAuthenticated
          ? 'You are logged in, you can view Dashboard'
          : 'Please Sign in to view Dashboard'}
      </h2>
      <Link to={ROUTES.LOGIN}>Sign in</Link>
    </>
  );
}

export default Home;
