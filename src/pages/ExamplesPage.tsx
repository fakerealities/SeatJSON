import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ExamplesPage() {
  const smallTheater = {
    "$schema": "https://seatjson.com/schema.json",
    "version": "0.1",
    "venue": {
      "id": "theater-royal",
      "name": "The Royal",
      "type": "theater",
      "capacity": 300
    },
    "stage": {
      "position": [0, 1],
      "orientation": 0,
      "bounds": [[-6, 0], [6, 0], [6, 2], [-6, 2]]
    },
    "levels": [
      {
        "id": "stalls",
        "name": "Stalls",
        "elevation": 0,
        "sections": [
          {
            "id": "orchestra-center",
            "name": "Orchestra Center",
            "rows": [
              {
                "id": "A",
                "type": "parametric",
                "seatCount": 18,
                "layout": "arc",
                "center": [0, 5.5],
                "radius": 8.5,
                "startAngle": -60,
                "endAngle": 60
              },
              {
                "id": "B",
                "type": "parametric",
                "seatCount": 20,
                "layout": "arc",
                "center": [0, 6.5],
                "radius": 9.5,
                "startAngle": -65,
                "endAngle": 65
              }
            ]
          }
        ]
      },
      {
        "id": "balcony",
        "name": "Balcony",
        "elevation": 4.5,
        "sections": [
          {
            "id": "balcony-center",
            "name": "Balcony Center",
            "rows": [
              {
                "id": "A",
                "type": "parametric",
                "seatCount": 24,
                "layout": "arc",
                "center": [0, 8],
                "radius": 12,
                "startAngle": -70,
                "endAngle": 70
              }
            ]
          }
        ]
      }
    ],
    "zones": [
      {
        "id": "premium",
        "name": "Premium",
        "type": "pricing",
        "properties": {
          "pricingTierId": "tier:premium",
          "price": 150
        },
        "geometry": {
          "type": "circle",
          "center": [0, 6],
          "radius": 10
        }
      },
      {
        "id": "wheelchair-platform",
        "name": "Wheelchair Platform",
        "type": "accessibility",
        "properties": {
          "wheelchairOnly": true
        },
        "geometry": {
          "type": "rectangle",
          "min": [-2, 10],
          "max": [2, 11]
        }
      }
    ]
  };

  const largeStadium = {
    "$schema": "https://seatjson.com/schema.json",
    "version": "0.1",
    "venue": {
      "id": "big-stadium",
      "name": "Big Stadium",
      "type": "stadium",
      "capacity": 40000
    },
    "tiling": {
      "scheme": "xyz",
      "minZoom": 0,
      "maxZoom": 4,
      "bounds": [[-100, -100], [100, 100]],
      "tileUrl": "https://cdn.example.com/seatjson/big-stadium/{z}/{x}/{y}.json"
    },
    "levels": [
      {
        "id": "lower-bowl",
        "name": "Lower Bowl",
        "elevation": 0,
        "sections": [
          {
            "id": "club-west",
            "name": "Club West",
            "bounds": [[-50, -40], [-30, 20]]
          },
          {
            "id": "club-east",
            "name": "Club East",
            "bounds": [[30, -40], [50, 20]]
          }
        ]
      }
    ],
    "zones": [
      {
        "id": "club-pricing",
        "name": "Club Level",
        "type": "pricing",
        "properties": {
          "pricingTierId": "club",
          "price": 250
        },
        "geometry": {
          "type": "polygon",
          "coordinates": [[-50, -40], [-30, -40], [-30, 20], [-50, 20]]
        }
      },
      {
        "id": "standing-terrace",
        "name": "Standing Terrace",
        "type": "accessibility",
        "properties": {
          "standing": true,
          "capacity": 2500
        },
        "geometry": {
          "type": "rectangle",
          "min": [-30, -80],
          "max": [30, -60]
        }
      }
    ]
  };

  const airplane = {
    "$schema": "https://seatjson.com/schema.json",
    "version": "0.1",
    "venue": {
      "id": "aircraft-a320",
      "name": "A320 (generic)",
      "type": "other",
      "capacity": 180,
      "metadata": {
        "venueType": "aircraft",
        "aircraftModel": "A320"
      }
    },
    "levels": [
      {
        "id": "main-deck",
        "name": "Main Deck",
        "elevation": 0,
        "sections": [
          {
            "id": "business",
            "name": "Business Class",
            "rows": [
              {
                "id": "1",
                "type": "explicit",
                "seats": [
                  { "id": "1A", "position": [-1.2, 3.0] },
                  { "id": "1B", "position": [-0.72, 3.0] },
                  { "id": "1C", "position": [-0.24, 3.0] },
                  { "id": "1D", "position": [0.24, 3.0] },
                  { "id": "1E", "position": [0.72, 3.0] },
                  { "id": "1F", "position": [1.2, 3.0] }
                ],
                "metadata": {
                  "serviceClass": "business"
                }
              }
            ],
            "metadata": {
              "serviceClass": "business"
            }
          },
          {
            "id": "economy",
            "name": "Economy Class",
            "rows": [
              {
                "id": "10",
                "type": "explicit",
                "seats": [
                  { "id": "10A", "position": [-1.2, 10.0] },
                  { "id": "10B", "position": [-0.72, 10.0] },
                  { "id": "10C", "position": [-0.24, 10.0] },
                  { "id": "10D", "position": [0.24, 10.0] },
                  { "id": "10E", "position": [0.72, 10.0] },
                  { "id": "10F", "position": [1.2, 10.0] }
                ],
                "metadata": {
                  "serviceClass": "economy"
                }
              }
            ],
            "metadata": {
              "serviceClass": "economy"
            }
          }
        ]
      }
    ],
    "zones": [
      {
        "id": "galley-forward",
        "name": "Forward Galley",
        "type": "facility",
        "properties": {
          "facilityType": "galley"
        },
        "geometry": {
          "type": "rectangle",
          "min": [-1.2, 0],
          "max": [1.2, 1.8]
        }
      },
      {
        "id": "lavatory-aft",
        "name": "Aft Lavatory",
        "type": "facility",
        "properties": {
          "facilityType": "lavatory"
        },
        "geometry": {
          "type": "rectangle",
          "min": [-1.2, 28],
          "max": [1.2, 30]
        }
      },
      {
        "id": "business-pricing",
        "name": "Business Class Pricing",
        "type": "pricing",
        "properties": {
          "pricingTierId": "business",
          "price": 1200
        },
        "geometry": {
          "type": "rectangle",
          "min": [-1.5, 2.5],
          "max": [1.5, 8]
        }
      }
    ]
  };

  const concertVenue = {
    "$schema": "https://seatjson.com/schema.json",
    "version": "0.1",
    "venue": {
      "id": "warehouse-venue",
      "name": "Warehouse Venue",
      "type": "concert_hall",
      "capacity": 4500,
      "metadata": {
        "venueType": "concertVenue"
      }
    },
    "stage": {
      "position": [0, 1.5],
      "orientation": 0,
      "bounds": [[-8, 0], [8, 0], [8, 3], [-8, 3]]
    },
    "levels": [
      {
        "id": "main",
        "name": "Main Floor",
        "elevation": 0,
        "sections": [
          {
            "id": "seated-bowl",
            "name": "Seated Bowl",
            "rows": [
              {
                "id": "A",
                "type": "parametric",
                "seatCount": 30,
                "layout": "arc",
                "center": [0, 40],
                "radius": 20,
                "startAngle": -80,
                "endAngle": 80
              }
            ]
          }
        ]
      }
    ],
    "zones": [
      {
        "id": "ga-floor",
        "name": "GA Floor",
        "type": "accessibility",
        "properties": {
          "standing": true,
          "capacity": 3500,
          "generalAdmission": true
        },
        "geometry": {
          "type": "rectangle",
          "min": [-15, 3],
          "max": [15, 35]
        }
      },
      {
        "id": "immersive-maze",
        "name": "Immersive Maze (Closed)",
        "type": "accessibility",
        "properties": {
          "inaccessible": true
        },
        "geometry": {
          "type": "rectangle",
          "min": [10, 10],
          "max": [14, 18]
        }
      }
    ]
  };

  return (
    <div style={{ padding: '48px 64px', maxWidth: '1200px' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 700, margin: '0 0 16px' }}>Examples</h1>
      <p style={{ fontSize: '18px', color: '#666', margin: '0 0 48px' }}>
        Real-world examples of SeatJSON files for different venue types.
      </p>

      {/* Small Theater */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 600, margin: '0 0 16px' }}>Small Theater</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '24px' }}>
          A 300-seat theater with curved rows, multiple levels (stalls and balcony), pricing zones, and wheelchair accessibility.
        </p>

        <SyntaxHighlighter
          language="json"
          style={vscDarkPlus}
          customStyle={{
            borderRadius: '8px',
            fontSize: '14px',
            padding: '24px',
          }}
          showLineNumbers
        >
          {JSON.stringify(smallTheater, null, 2)}
        </SyntaxHighlighter>
      </section>

      {/* Large Stadium */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 600, margin: '0 0 16px' }}>Large Stadium</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '24px' }}>
          A 40,000-seat stadium with tiling enabled for incremental loading. Includes club sections, standing terraces, and multiple pricing tiers.
        </p>

        <SyntaxHighlighter
          language="json"
          style={vscDarkPlus}
          customStyle={{
            borderRadius: '8px',
            fontSize: '14px',
            padding: '24px',
          }}
          showLineNumbers
        >
          {JSON.stringify(largeStadium, null, 2)}
        </SyntaxHighlighter>
      </section>

      {/* Airplane */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 600, margin: '0 0 16px' }}>Aircraft (A320)</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '24px' }}>
          A narrow-body aircraft with 180 seats, business and economy cabins, galleys, and lavatories marked as facility zones.
        </p>

        <SyntaxHighlighter
          language="json"
          style={vscDarkPlus}
          customStyle={{
            borderRadius: '8px',
            fontSize: '14px',
            padding: '24px',
          }}
          showLineNumbers
        >
          {JSON.stringify(airplane, null, 2)}
        </SyntaxHighlighter>
      </section>

      {/* Concert Venue */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 600, margin: '0 0 16px' }}>Concert Venue</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '24px' }}>
          A warehouse-style concert venue with general admission standing pit (3,500 capacity), seated bowl, and inaccessible zones for special installations.
        </p>

        <SyntaxHighlighter
          language="json"
          style={vscDarkPlus}
          customStyle={{
            borderRadius: '8px',
            fontSize: '14px',
            padding: '24px',
          }}
          showLineNumbers
        >
          {JSON.stringify(concertVenue, null, 2)}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
