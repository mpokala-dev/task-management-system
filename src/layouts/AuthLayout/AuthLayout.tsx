/** Responsible for:

Login
Register
Forgot Password


**/

import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';

function AuthLayout() {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
