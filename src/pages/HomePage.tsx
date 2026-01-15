import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>SeatJSON</h1>
        <p className={styles.subtitle}>
          A simple JSON format for describing venue seating layouts.
        </p>

        <Link to="/docs" className={styles.ctaButton}>
          See the Spec
        </Link>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Zones</h2>
            <p className={styles.cardText}>
              Organize seats into logical sections like Orchestra, Balcony, or VIP.
              Each zone can have its own properties, pricing, and visual styling.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>LLM-Ready</h2>
            <p className={styles.cardText}>
              Simple, readable JSON designed for both humans and AI.
              Clean structure makes it easy to generate, parse, and understand.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Extensible Metadata</h2>
            <p className={styles.cardText}>
              Add your own custom properties to zones, rows, and seats.
              Store pricing, accessibility info, or any domain-specific data.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Implementation Agnostic</h2>
            <p className={styles.cardText}>
              Render with HTML, Canvas, SVG, WebGL, or any technology you choose.
              The format describes data, not presentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
