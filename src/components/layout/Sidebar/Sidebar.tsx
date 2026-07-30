import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import styles from './Sidebar.module.css';
import type { SidebarProps } from './Sidebar.types';
import { LayoutDashboard, CheckSquare, Folder, Settings } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dashboard', path: ROUTES.DASHBOARD, icon: LayoutDashboard, enabled: true },
  { label: 'Tasks', path: '#', icon: CheckSquare, enabled: false },
  { label: 'Projects', path: '#', icon: Folder, enabled: false },
  { label: 'Settings', path: '#', icon: Settings, enabled: false },
];

function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} aria-hidden="true" />}
      <nav
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
        aria-label="Main navigation"
      >
        {NAV_ITEMS.map((item) =>
          item.enabled ? (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
              onClick={onClose}
            >
              <item.icon size={18} aria-hidden="true" />
              {item.label}
            </NavLink>
          ) : (
            <span key={item.label} className={`${styles.navItem} ${styles.disabled}`}>
              <item.icon size={18} aria-hidden="true" />
              {item.label}
            </span>
          ),
        )}
      </nav>
    </>
  );
}

export default Sidebar;
