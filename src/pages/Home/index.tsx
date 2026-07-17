import { useAppSelector } from '../../app/hooks';

function Home() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return <h1>Home Page {isAuthenticated ? ' logged in' : ' (Not Authenticated)'}</h1>;
}

export default Home;
