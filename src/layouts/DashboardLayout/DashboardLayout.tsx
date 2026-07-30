import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import styles from './DashboardLayout.module.css';

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.root}>
      <Header onMenuClick={() => setSidebarOpen((prev) => !prev)} />
      <div className={styles.body}>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
