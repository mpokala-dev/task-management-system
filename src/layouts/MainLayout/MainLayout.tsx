/**Responsible for:

Header
Sidebar
Footer
Outlet

<Header />
<Sidebar />
<Outlet />
<Footer />
**/
import { Outlet, Link } from 'react-router-dom';
import styles from './MainLayout.module.css';
import { ROUTES } from '@/constants/routes';
import { useAppSelector } from '@/app/hooks';
import { useLogout } from '@/features/auth/hooks/useLogout';
import Button from '@components/common/Button';

function MainLayout() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const handleLogout = useLogout();

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Link to={ROUTES.HOME}>Home</Link>
        {'  | '}
        <Link to={ROUTES.SAMPLE_DASHBOARD}>Dashboard</Link>
        {isAuthenticated && '  | '}
        {isAuthenticated && (
          <Button variant="secondary" onClick={handleLogout} className={styles.logoutButton}>
            Log out
          </Button>
        )}
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
