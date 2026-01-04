import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={{ padding: '64px 48px', fontFamily: 'system-ui, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '72px', fontWeight: 700, margin: '0 0 16px' }}>SeatJSON</h1>
      <p style={{ fontSize: '20px', color: '#666', margin: '0 0 32px' }}>
        A simple JSON format for describing venue seating layouts.
      </p>

      <Link
        to="/docs"
        style={{
          display: 'inline-block',
          padding: '16px 48px',
          background: '#000',
          color: '#fff',
          fontSize: '18px',
          fontWeight: 600,
          textDecoration: 'none',
          borderRadius: '8px',
          margin: '0 0 64px'
        }}
      >
        See the Spec
      </Link>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '32px',
        marginTop: '64px'
      }}>
        <div>
          <h2 style={{ fontSize: '24px', margin: '0 0 12px' }}>Zones</h2>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Organize seats into logical sections like Orchestra, Balcony, or VIP.
            Each zone can have its own properties, pricing, and visual styling.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: '24px', margin: '0 0 12px' }}>LLM-Ready</h2>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Simple, readable JSON designed for both humans and AI.
            Clean structure makes it easy to generate, parse, and understand.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: '24px', margin: '0 0 12px' }}>Extensible Metadata</h2>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Add your own custom properties to zones, rows, and seats.
            Store pricing, accessibility info, or any domain-specific data.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: '24px', margin: '0 0 12px' }}>Implementation Agnostic</h2>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Render with HTML, Canvas, SVG, WebGL, or any technology you choose.
            The format describes data, not presentation.
          </p>
        </div>
      </div>
    </div>
  );
}
