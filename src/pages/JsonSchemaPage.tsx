import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './JsonSchemaPage.module.css';

export default function JsonSchemaPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>JSON Schema</h1>
      <p className={styles.subtitle}>
        Validate SeatJSON files with the official JSON Schema.
      </p>

      <div className={styles.schemaBox}>
        <h3 className={styles.schemaBoxTitle}>Schema URL</h3>
        <code className={styles.schemaUrl}>
          https://seatjson.com/schema.json
        </code>
      </div>

      <h2 className={styles.sectionTitle}>Using the Schema</h2>

      <p className={styles.text}>
        Add the <code className={styles.inlineCode}>$schema</code> property to your SeatJSON files for validation and auto-completion:
      </p>

      <SyntaxHighlighter
        language="json"
        style={vscDarkPlus}
        customStyle={{
          borderRadius: '8px',
          fontSize: '14px',
          padding: '24px',
          marginBottom: '48px',
          background: '#12121a',
          border: '1px solid #1a1a2e',
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

      <h2 className={styles.sectionTitle}>Benefits</h2>

      <ul className={styles.benefitsList}>
        <li><strong className={styles.highlight}>Validation</strong> - Automatically validate SeatJSON files in CI/CD</li>
        <li><strong className={styles.highlight}>Editor Support</strong> - Get autocomplete and inline errors in VS Code</li>
        <li><strong className={styles.highlight}>Type Safety</strong> - Catch errors before runtime</li>
        <li><strong className={styles.highlight}>Documentation</strong> - Machine-readable format specification</li>
      </ul>

      <h2 className={styles.sectionTitle}>Full Schema</h2>

      <p className={styles.text}>
        View or download the complete JSON Schema:
      </p>

      <a href="/schema.json" download className={styles.downloadButton}>
        Download schema.json
      </a>
    </div>
  );
}
