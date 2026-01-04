import { Outlet } from 'react-router-dom';
import DocsSidebar from './DocsSidebar';

export default function DocsLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <DocsSidebar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
