import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();
  const isDocsActive = location.pathname.startsWith('/docs');

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          SeatJSON
        </Link>
        <Link to="/docs" className={`${styles.navLink} ${isDocsActive ? styles.navLinkActive : ''}`}>
          Docs
        </Link>
      </nav>
    </header>
  );
}
