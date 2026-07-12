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
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

function MainLayout() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>Header placeholder</header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
