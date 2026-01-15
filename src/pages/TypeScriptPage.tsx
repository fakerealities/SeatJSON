import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './TypeScriptPage.module.css';

export default function TypeScriptPage() {
  const typeScriptCode = `/**
 * SeatJSON Format Specification v0.1
 *
 * A simple JSON format for describing venue seating layouts.
 * Supports theaters, stadiums, arenas, and other seating venues.
 */

export interface SeatJSON {
  version: string;
  venue: VenueInfo;
  stage?: Stage;
  tiling?: TilingConfig;
  levels: Level[];
  zones: Zone[];
}

export interface VenueInfo {
  id: string;
  name: string;
  type: 'theater' | 'stadium' | 'arena' | 'concert_hall' | 'other';
  capacity?: number;
  metadata?: Record<string, unknown>;
}

export interface Stage {
  position: [number, number];
  orientation: number; // degrees, 0 = facing positive Y
  bounds?: [number, number][]; // polygon points
}

export interface TilingConfig {
  scheme: 'xyz';
  minZoom: number;
  maxZoom: number;
  bounds: [[number, number], [number, number]]; // [[minX, minY], [maxX, maxY]]
  tileUrl: string; // URL template with {z}/{x}/{y} placeholders
}

export interface Level {
  id: string;
  name: string;
  elevation: number; // meters above ground (0 = ground level)
  sections: Section[];
  metadata?: Record<string, unknown>;
}

export interface Section {
  id: string;
  name: string;
  rows?: Row[]; // Present when not using tiling
  bounds?: [[number, number], [number, number]]; // Optional bounds
  metadata?: Record<string, unknown>;
}

export type Row = ParametricRow | ExplicitRow;

export interface BaseRow {
  id: string;
  metadata?: Record<string, unknown>;
}

export interface ParametricRow extends BaseRow {
  type: 'parametric';
  seatCount: number;
  layout: 'linear' | 'arc';

  // For linear rows
  start?: [number, number];
  end?: [number, number];

  // For arc rows
  center?: [number, number];
  radius?: number;
  startAngle?: number; // degrees
  endAngle?: number; // degrees
}

export interface ExplicitRow extends BaseRow {
  type: 'explicit';
  seats: Seat[];
}

export interface Seat {
  id: string;
  position: [number, number];
  metadata?: Record<string, unknown>;
}

export interface Zone {
  id: string;
  name: string;
  type: string; // 'pricing', 'accessibility', 'view_quality', etc.
  properties: Record<string, unknown>;
  geometry: ZoneGeometry;
}

export type ZoneGeometry =
  | PolygonGeometry
  | CircleGeometry
  | RectangleGeometry;

export interface PolygonGeometry {
  type: 'polygon';
  coordinates: [number, number][];
}

export interface CircleGeometry {
  type: 'circle';
  center: [number, number];
  radius: number;
}

export interface RectangleGeometry {
  type: 'rectangle';
  min: [number, number];
  max: [number, number];
}

/**
 * Tile data format - used when tiling is enabled
 * Individual tile files contain row geometry
 */
export interface TileData {
  z: number;
  x: number;
  y: number;
  bounds: [[number, number], [number, number]];
  rows: TileRow[];
}

export type TileRow = (ParametricRow | ExplicitRow) & {
  sectionId: string; // Reference to parent section
  levelId: string; // Reference to parent level
}`;

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>TypeScript Types</h1>
      <p className={styles.subtitle}>
        Complete TypeScript definitions for the SeatJSON format.
      </p>

      <SyntaxHighlighter
        language="typescript"
        style={vscDarkPlus}
        customStyle={{
          borderRadius: '8px',
          fontSize: '14px',
          padding: '24px',
          background: '#12121a',
          border: '1px solid #1a1a2e',
        }}
        showLineNumbers
      >
        {typeScriptCode}
      </SyntaxHighlighter>

      <div className={styles.conceptsSection}>
        <h2 className={styles.sectionTitle}>Key Concepts</h2>

        <div className={styles.concept}>
          <h3 className={styles.conceptTitle}>Hierarchy</h3>
          <p className={styles.conceptText}>
            SeatJSON uses a 4-level hierarchy: <strong className={styles.highlight}>Levels</strong> → <strong className={styles.highlight}>Sections</strong> → <strong className={styles.highlight}>Rows</strong> → <strong className={styles.highlight}>Seats</strong>
          </p>
        </div>

        <div className={styles.concept}>
          <h3 className={styles.conceptTitle}>Parametric vs Explicit</h3>
          <p className={styles.conceptText}>
            Rows can be <strong className={styles.highlight}>parametric</strong> (defined by a pattern like arc or linear) or <strong className={styles.highlight}>explicit</strong> (each seat position defined manually).
          </p>
        </div>

        <div className={styles.concept}>
          <h3 className={styles.conceptTitle}>Zones</h3>
          <p className={styles.conceptText}>
            Zones are geometric overlays with properties. Use them for pricing tiers, accessibility areas, view quality, or any custom classification.
          </p>
        </div>

        <div className={styles.concept}>
          <h3 className={styles.conceptTitle}>Tiling</h3>
          <p className={styles.conceptText}>
            Optional tiling support for massive venues (50,000+ seats). When enabled, the main file becomes a manifest and geometry lives in separate tile files.
          </p>
        </div>
      </div>
    </div>
  );
}
