import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function JsonSchemaPage() {
  return (
    <div style={{ padding: '48px 64px', maxWidth: '1200px' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 700, margin: '0 0 16px' }}>JSON Schema</h1>
      <p style={{ fontSize: '18px', color: '#666', margin: '0 0 24px' }}>
        Validate SeatJSON files with the official JSON Schema.
      </p>

      <div style={{
        background: '#f8f9fa',
        padding: '16px 24px',
        borderRadius: '8px',
        marginBottom: '48px',
        borderLeft: '4px solid #000'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 8px' }}>Schema URL</h3>
        <code style={{
          fontSize: '14px',
          fontFamily: 'monospace',
          color: '#333'
        }}>
          https://seatjson.com/schema.json
        </code>
      </div>

      <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '0 0 16px' }}>Using the Schema</h2>

      <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '24px' }}>
        Add the <code>$schema</code> property to your SeatJSON files for validation and auto-completion:
      </p>

      <SyntaxHighlighter
        language="json"
        style={vscDarkPlus}
        customStyle={{
          borderRadius: '8px',
          fontSize: '14px',
          padding: '24px',
          marginBottom: '48px'
        }}
      >
{`{
  "$schema": "https://seatjson.com/schema.json",
  "version": "0.1",
  "venue": {
    "id": "my-venue",
    "name": "My Venue",
    "type": "theater"
  },
  "levels": [...]
}`}
      </SyntaxHighlighter>

      <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '0 0 16px' }}>Benefits</h2>

      <div style={{ marginBottom: '48px' }}>
        <ul style={{ color: '#666', lineHeight: '1.8', paddingLeft: '24px' }}>
          <li><strong>Validation</strong> - Automatically validate SeatJSON files in CI/CD</li>
          <li><strong>Editor Support</strong> - Get autocomplete and inline errors in VS Code</li>
          <li><strong>Type Safety</strong> - Catch errors before runtime</li>
          <li><strong>Documentation</strong> - Machine-readable format specification</li>
        </ul>
      </div>

      <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '0 0 16px' }}>Full Schema</h2>

      <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '24px' }}>
        View or download the complete JSON Schema:
      </p>

      <a
        href="/schema.json"
        download
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          background: '#000',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: 600,
          marginBottom: '24px'
        }}
      >
        Download schema.json
      </a>
    </div>
  );
}
