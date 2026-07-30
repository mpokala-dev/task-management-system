import { useState, useRef, useEffect } from 'react';
import { useAppSelector } from '@/app/hooks';
import { useLogout } from '@/features/auth/hooks/useLogout';
import styles from './Header.module.css';
import type { HeaderProps } from './Header.types';
import { Menu, Search, Bell } from 'lucide-react';

function Header({ onMenuClick }: HeaderProps) {
  const user = useAppSelector((state) => state.auth.user);
  const handleLogout = useLogout();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const initials = user?.name
    ? user.name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : '?';

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button
          type="button"
          className={styles.menuButton}
          onClick={onMenuClick}
          aria-label="Toggle navigation menu"
        >
          <Menu size={20} aria-hidden="true" />
        </button>
        <span className={styles.brand}>Task Management System</span>
      </div>

      <div className={styles.right}>
        <button type="button" className={styles.iconButton} aria-label="Search">
          <Search size={20} aria-hidden="true" />
        </button>
        <button type="button" className={styles.iconButton} aria-label="Notifications">
          <Bell size={18} aria-hidden="true" />
        </button>

        <div className={styles.menuWrapper} ref={menuRef}>
          <button
            type="button"
            className={styles.avatar}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={menuOpen}
            aria-label="Account menu"
          >
            {initials}
          </button>

          {menuOpen && (
            <div className={styles.dropdown} role="menu">
              <div className={styles.dropdownUser} role="none">
                <span className={styles.dropdownName}>{user?.name}</span>
                <span className={styles.dropdownEmail}>{user?.email}</span>
              </div>
              <button type="button" className={styles.dropdownItem} role="menuitem" disabled>
                Profile
              </button>
              <button
                type="button"
                className={styles.dropdownItem}
                role="menuitem"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
