export default function SpecPage() {
  const codeStyle = {
    background: '#f5f5f5',
    padding: '16px',
    borderRadius: '6px',
    fontFamily: 'monospace',
    fontSize: '14px',
    overflowX: 'auto' as const,
    border: '1px solid #ddd'
  };

  return (
    <div style={{ padding: '64px 48px', fontFamily: 'system-ui, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 700, margin: '0 0 16px' }}>The Spec</h1>
      <p style={{ fontSize: '18px', color: '#666', margin: '0 0 48px' }}>
        SeatJSON is a simple JSON format for describing venue seating layouts.
      </p>

      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', margin: '0 0 16px' }}>Core Structure</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
          Every SeatJSON file has these top-level fields:
        </p>
        <pre style={codeStyle}>{`{
  "version": "0.1",
  "venue": { /* venue info */ },
  "stage": { /* stage position */ },
  "tiling": { /* optional - for large venues */ },
  "levels": [ /* venue levels (stalls, balcony, etc.) */ ],
  "zones": [ /* overlays like pricing, accessibility */ ]
}`}</pre>
      </section>

      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', margin: '0 0 16px' }}>Levels</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
          Venues are organized into levels representing physical floors. Each level has an elevation
          in meters and contains sections.
        </p>
        <pre style={codeStyle}>{`{
  "levels": [
    {
      "id": "stalls",
      "name": "Stalls",
      "elevation": 0,
      "sections": [...]
    },
    {
      "id": "dress-circle",
      "name": "Dress Circle",
      "elevation": 4.5,
      "sections": [...]
    },
    {
      "id": "balcony",
      "name": "Balcony",
      "elevation": 8.0,
      "sections": [...]
    }
  ]
}`}</pre>
        <p style={{ color: '#666', lineHeight: '1.6', marginTop: '16px', fontSize: '14px' }}>
          This hierarchical structure (levels → sections → rows → seats) works for theaters,
          stadiums, arenas, and any multi-level venue.
        </p>
      </section>

      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', margin: '0 0 16px' }}>Zones</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
          Zones are overlays that define regions with specific properties. Think pricing tiers,
          accessibility areas, or view quality ratings. They're completely separate from the seat geometry.
        </p>
        <pre style={codeStyle}>{`{
  "id": "premium-center",
  "name": "Premium Center",
  "type": "pricing",
  "properties": {
    "priceTier": 1,
    "price": 150
  },
  "geometry": {
    "type": "rectangle",
    "min": [-8, 5],
    "max": [8, 15]
  }
}`}</pre>
        <p style={{ color: '#666', lineHeight: '1.6', marginTop: '16px', fontSize: '14px' }}>
          This zone marks a rectangular area as "premium" with custom pricing properties.
          You can create zones for anything: accessibility, view quality, or custom business logic.
        </p>
      </section>

      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', margin: '0 0 16px' }}>Parametric Rows</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
          Instead of defining every seat's position, describe the pattern. Perfect for regular seating.
        </p>
        <pre style={codeStyle}>{`{
  "id": "A",
  "type": "parametric",
  "seatCount": 20,
  "layout": "linear",
  "start": [-10, 5],
  "end": [10, 5]
}`}</pre>
        <p style={{ color: '#666', lineHeight: '1.6', marginTop: '16px', fontSize: '14px' }}>
          This creates 20 seats in a straight line from point A to point B. The system automatically
          calculates each seat's position.
        </p>
      </section>

      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', margin: '0 0 16px' }}>Arc Rows</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
          For curved rows common in theaters:
        </p>
        <pre style={codeStyle}>{`{
  "id": "B",
  "type": "parametric",
  "seatCount": 24,
  "layout": "arc",
  "center": [0, 8],
  "radius": 12,
  "startAngle": -60,
  "endAngle": 60
}`}</pre>
        <p style={{ color: '#666', lineHeight: '1.6', marginTop: '16px', fontSize: '14px' }}>
          Creates 24 seats along a curved arc. Angles are in degrees.
        </p>
      </section>

      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', margin: '0 0 16px' }}>Tiling</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
          For massive venues (stadiums with 50,000+ seats), SeatJSON supports tiling to load
          geometry incrementally:
        </p>
        <pre style={codeStyle}>{`{
  "version": "0.1",
  "venue": { "id": "wembley-stadium", "capacity": 90000 },
  "tiling": {
    "scheme": "xyz",
    "minZoom": 0,
    "maxZoom": 5,
    "bounds": [[-100, -100], [100, 100]],
    "tileUrl": "https://cdn.example.com/venues/{z}/{x}/{y}.json"
  },
  "levels": [...]
}`}</pre>
        <p style={{ color: '#666', lineHeight: '1.6', marginTop: '16px', fontSize: '14px' }}>
          When tiling is present, the main file becomes a manifest and geometry lives in separate
          tile files. Small venues can ignore this and keep everything inline.
        </p>
      </section>

      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', margin: '0 0 16px' }}>Custom Metadata</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
          Add any custom properties you need via the metadata field:
        </p>
        <pre style={codeStyle}>{`{
  "id": "A",
  "type": "parametric",
  "seatCount": 20,
  "layout": "linear",
  "start": [-10, 5],
  "end": [10, 5],
  "metadata": {
    "rowLabel": "Row A",
    "vipRow": true,
    "cupholders": true,
    "yourCustomField": "anything"
  }
}`}</pre>
        <p style={{ color: '#666', lineHeight: '1.6', marginTop: '16px', fontSize: '14px' }}>
          The format doesn't prescribe what metadata you can add. Store pricing, accessibility info,
          or any domain-specific data you need.
        </p>
      </section>

      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', margin: '0 0 16px' }}>Coordinate System</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
          Uses a simple 2D coordinate system measured in meters:
        </p>
        <ul style={{ color: '#666', lineHeight: '1.8', paddingLeft: '24px' }}>
          <li>Origin (0, 0) is typically at center stage</li>
          <li>X-axis: left (-) to right (+)</li>
          <li>Y-axis: stage/front (-) to back (+)</li>
          <li>All measurements in meters</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '32px', margin: '0 0 16px' }}>Implementation Agnostic</h2>
        <p style={{ color: '#666', lineHeight: '1.6' }}>
          SeatJSON is just data. Render it however you want:
        </p>
        <ul style={{ color: '#666', lineHeight: '1.8', paddingLeft: '24px' }}>
          <li>HTML divs with absolute positioning</li>
          <li>Canvas 2D rendering</li>
          <li>SVG graphics</li>
          <li>WebGL/Three.js for 3D visualization</li>
          <li>Native mobile views</li>
        </ul>
      </section>
    </div>
  );
}
