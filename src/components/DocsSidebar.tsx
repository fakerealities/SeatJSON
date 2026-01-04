import { Link, useLocation } from 'react-router-dom';

export default function DocsSidebar() {
  const location = useLocation();

  const links = [
    { path: '/docs', label: 'TypeScript Types' },
    { path: '/docs/schema', label: 'JSON Schema' },
    { path: '/docs/examples', label: 'Examples' },
  ];

  return (
    <div style={{
      width: '240px',
      borderRight: '1px solid #e5e5e5',
      padding: '32px 24px',
      height: '100vh',
      position: 'sticky',
      top: 0,
    }}>
      <h3 style={{
        fontSize: '14px',
        fontWeight: 600,
        margin: '0 0 16px',
        color: '#666',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        Documentation
      </h3>
      <nav>
        {links.map(link => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              display: 'block',
              padding: '8px 12px',
              marginBottom: '4px',
              borderRadius: '6px',
              textDecoration: 'none',
              color: location.pathname === link.path ? '#000' : '#666',
              background: location.pathname === link.path ? '#f5f5f5' : 'transparent',
              fontWeight: location.pathname === link.path ? 600 : 400,
              fontSize: '14px',
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
