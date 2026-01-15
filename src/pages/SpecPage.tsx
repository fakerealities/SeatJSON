import styles from './SpecPage.module.css';

export default function SpecPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>The Spec</h1>
        <p className={styles.subtitle}>
          SeatJSON is a simple JSON format for describing venue seating layouts.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Core Structure</h2>
          <p className={styles.text}>
            Every SeatJSON file has these top-level fields:
          </p>
          <pre className={styles.codeBlock}>{`{
  "version": "0.1",
  "venue": { /* venue info */ },
  "stage": { /* stage position */ },
  "tiling": { /* optional - for large venues */ },
  "levels": [ /* venue levels (stalls, balcony, etc.) */ ],
  "zones": [ /* overlays like pricing, accessibility */ ]
}`}</pre>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Levels</h2>
          <p className={styles.text}>
            Venues are organized into levels representing physical floors. Each level has an elevation
            in meters and contains sections.
          </p>
          <pre className={styles.codeBlock}>{`{
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
          <p className={styles.textSmall}>
            This hierarchical structure (levels → sections → rows → seats) works for theaters,
            stadiums, arenas, and any multi-level venue.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Zones</h2>
          <p className={styles.text}>
            Zones are overlays that define regions with specific properties. Think pricing tiers,
            accessibility areas, or view quality ratings. They're completely separate from the seat geometry.
          </p>
          <pre className={styles.codeBlock}>{`{
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
          <p className={styles.textSmall}>
            This zone marks a rectangular area as "premium" with custom pricing properties.
            You can create zones for anything: accessibility, view quality, or custom business logic.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Parametric Rows</h2>
          <p className={styles.text}>
            Instead of defining every seat's position, describe the pattern. Perfect for regular seating.
          </p>
          <pre className={styles.codeBlock}>{`{
  "id": "A",
  "type": "parametric",
  "seatCount": 20,
  "layout": "linear",
  "start": [-10, 5],
  "end": [10, 5]
}`}</pre>
          <p className={styles.textSmall}>
            This creates 20 seats in a straight line from point A to point B. The system automatically
            calculates each seat's position.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Arc Rows</h2>
          <p className={styles.text}>
            For curved rows common in theaters:
          </p>
          <pre className={styles.codeBlock}>{`{
  "id": "B",
  "type": "parametric",
  "seatCount": 24,
  "layout": "arc",
  "center": [0, 8],
  "radius": 12,
  "startAngle": -60,
  "endAngle": 60
}`}</pre>
          <p className={styles.textSmall}>
            Creates 24 seats along a curved arc. Angles are in degrees.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tiling</h2>
          <p className={styles.text}>
            For massive venues (stadiums with 50,000+ seats), SeatJSON supports tiling to load
            geometry incrementally:
          </p>
          <pre className={styles.codeBlock}>{`{
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
          <p className={styles.textSmall}>
            When tiling is present, the main file becomes a manifest and geometry lives in separate
            tile files. Small venues can ignore this and keep everything inline.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Custom Metadata</h2>
          <p className={styles.text}>
            Add any custom properties you need via the metadata field:
          </p>
          <pre className={styles.codeBlock}>{`{
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
          <p className={styles.textSmall}>
            The format doesn't prescribe what metadata you can add. Store pricing, accessibility info,
            or any domain-specific data you need.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Coordinate System</h2>
          <p className={styles.text}>
            Uses a simple 2D coordinate system measured in meters:
          </p>
          <ul className={styles.list}>
            <li>Origin (0, 0) is typically at center stage</li>
            <li>X-axis: left (-) to right (+)</li>
            <li>Y-axis: stage/front (-) to back (+)</li>
            <li>All measurements in meters</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Implementation Agnostic</h2>
          <p className={styles.text}>
            SeatJSON is just data. Render it however you want:
          </p>
          <ul className={styles.list}>
            <li>HTML divs with absolute positioning</li>
            <li>Canvas 2D rendering</li>
            <li>SVG graphics</li>
            <li>WebGL/Three.js for 3D visualization</li>
            <li>Native mobile views</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
