import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{
      borderBottom: '1px solid #eee',
      padding: '20px 48px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <nav style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link to="/" style={{ fontWeight: 600, fontSize: '18px', textDecoration: 'none', color: '#000' }}>
          SeatJSON
        </Link>
        <Link to="/docs" style={{ textDecoration: 'none', color: '#666' }}>
          Docs
        </Link>
      </nav>
    </header>
  );
}
