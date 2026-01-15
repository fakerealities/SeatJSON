import { Link, useLocation } from 'react-router-dom';
import styles from './DocsSidebar.module.css';

export default function DocsSidebar() {
  const location = useLocation();

  const links = [
    { path: '/docs', label: 'TypeScript Types' },
    { path: '/docs/schema', label: 'JSON Schema' },
    { path: '/docs/examples', label: 'Examples' },
  ];

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.heading}>
        Documentation
      </h3>
      <nav className={styles.nav}>
        {links.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`${styles.link} ${location.pathname === link.path ? styles.linkActive : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
