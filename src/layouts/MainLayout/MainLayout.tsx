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
import { Outlet, NavLink } from 'react-router-dom';
import styles from './MainLayout.module.css';
import { ROUTES } from '@/constants/routes';

function MainLayout() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
        <b> . </b>
        <NavLink to={ROUTES.DASHBOARD}>Dashboard</NavLink>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
