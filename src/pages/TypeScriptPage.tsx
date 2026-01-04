import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
}

/**
 * Helper type for real-time seat status updates
 * (not part of SeatJSON format)
 */
export interface SeatStatus {
  seatId: string; // Full seat ID: "level-section-row-seat"
  status: 'available' | 'held' | 'sold' | 'blocked';
  timestamp?: number;
  metadata?: Record<string, unknown>;
}`;

  return (
    <div style={{ padding: '48px 64px', maxWidth: '1200px' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 700, margin: '0 0 16px' }}>TypeScript Types</h1>
      <p style={{ fontSize: '18px', color: '#666', margin: '0 0 48px' }}>
        Complete TypeScript definitions for the SeatJSON format.
      </p>

      <SyntaxHighlighter
        language="typescript"
        style={vscDarkPlus}
        customStyle={{
          borderRadius: '8px',
          fontSize: '14px',
          padding: '24px',
        }}
        showLineNumbers
      >
        {typeScriptCode}
      </SyntaxHighlighter>

      <div style={{ marginTop: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '0 0 16px' }}>Key Concepts</h2>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 8px' }}>Hierarchy</h3>
          <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
            SeatJSON uses a 4-level hierarchy: <strong>Levels</strong> → <strong>Sections</strong> → <strong>Rows</strong> → <strong>Seats</strong>
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 8px' }}>Parametric vs Explicit</h3>
          <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
            Rows can be <strong>parametric</strong> (defined by a pattern like arc or linear) or <strong>explicit</strong> (each seat position defined manually).
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 8px' }}>Zones</h3>
          <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
            Zones are geometric overlays with properties. Use them for pricing tiers, accessibility areas, view quality, or any custom classification.
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 8px' }}>Tiling</h3>
          <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
            Optional tiling support for massive venues (50,000+ seats). When enabled, the main file becomes a manifest and geometry lives in separate tile files.
          </p>
        </div>
      </div>
    </div>
  );
}
