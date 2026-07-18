import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { ROUTES } from '@/constants/routes';

function Home() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <h1>Home Page {isAuthenticated ? ' logged in' : ' Sign up'}</h1>
      <Link to={ROUTES.LOGIN}>Sign in</Link>
    </>
  );
}

export default Home;
