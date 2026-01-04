/**
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
  rows?: Row[]; // Present when not using tiling, omitted when tiling is enabled
  bounds?: [[number, number], [number, number]]; // Optional bounds for reference
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

export type ZoneGeometry = PolygonGeometry | CircleGeometry | RectangleGeometry;

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
 * Individual tile files contain row geometry for a specific tile coordinate
 */
export interface TileData {
  z: number;
  x: number;
  y: number;
  bounds: [[number, number], [number, number]]; // Geographic bounds of this tile
  rows: TileRow[];
}

export type TileRow = (ParametricRow | ExplicitRow) & {
  sectionId: string; // Reference to parent section
  levelId: string; // Reference to parent level
}

/**
 * Helper type for real-time seat status updates (not part of SeatJSON format)
 */
export interface SeatStatus {
  seatId: string; // Full seat ID: "level-section-row-seat"
  status: 'available' | 'held' | 'sold' | 'blocked';
  timestamp?: number;
  metadata?: Record<string, unknown>;
}
