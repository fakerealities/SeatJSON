import { Outlet } from 'react-router-dom';
import DocsSidebar from './DocsSidebar';
import styles from './DocsLayout.module.css';

export default function DocsLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <DocsSidebar />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
