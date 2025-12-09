import Link from "next/link";
import { prefixCategories } from "../../data/adverb";
import { suffixCategories } from "../../data/adverb";

export default function AffixHome() {
  return (
    <>
      <div className="container">
        <nav>
          <Link
            href="/qa/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              backgroundColor: "#f8f9fa",
              border: "1px solid #dee2e6",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              color: "#495057",
              transition: "all 0.2s ease",
            }}
          >
            ← Back Home
          </Link>
        </nav>
        <header className="header">
          <h1>📚 English Affix Learning Tool</h1>
          <p className="subtitle">
            Master {prefixCategories.length} prefixes and{" "}
            {suffixCategories.length} suffixes with examples and definitions
          </p>
        </header>

        <div className="stats">
          <div className="stat-card">
            <h3>Total Prefixes</h3>
            <p className="stat-number">{prefixCategories.length}</p>
          </div>
          <div className="stat-card">
            <h3>Total Suffixes</h3>
            <p className="stat-number">{suffixCategories.length}</p>
          </div>
          <div className="stat-card">
            <h3>Total Examples</h3>
            <p className="stat-number">
              {prefixCategories.reduce(
                (acc, cat) => acc + cat.examples.length,
                0
              ) +
                suffixCategories.reduce(
                  (acc, cat) => acc + cat.examples.length,
                  0
                )}
            </p>
          </div>
        </div>

        <div className="controls">
          <input
            type="text"
            placeholder="Search prefixes, suffixes, or words..."
            className="search-input"
            id="searchInput"
          />
          <div className="filter-buttons">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Prefixes</button>
            <button className="filter-btn">Suffixes</button>
            <button className="filter-btn">Common</button>
          </div>
        </div>

        <h2 className="section-title">📌 Prefixes</h2>
        <div className="prefix-grid">
          {prefixCategories.map((category, index) => (
            <div key={`prefix-${index}`} className="prefix-card">
              <div className="prefix-header">
                <h2 className="prefix">{category.prefix}</h2>
                <span className="meaning">{category.meaning}</span>
              </div>
              <div className="examples">
                <h4>Examples:</h4>
                <ul>
                  {category.examples.map(
                    (example, exIndex) =>
                      example.word && (
                        <li
                          key={`prefix-ex-${exIndex}`}
                          className="example-item"
                        >
                          <strong className="example-word">
                            {example.word}
                          </strong>
                          <span className="example-definition">
                            {" "}
                            - {example.definition}
                          </span>
                        </li>
                      )
                  )}
                </ul>
              </div>
              <div className="card-footer">
                <span className="count">
                  {category.examples.filter((e) => e.word).length} examples
                </span>
                <span className="affix-type">Prefix</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title">📌 Suffixes</h2>
        <div className="prefix-grid">
          {suffixCategories.map((category, index) => (
            <div key={`suffix-${index}`} className="prefix-card suffix-card">
              <div className="prefix-header">
                <h2 className="prefix">{category.suffix}</h2>
                <span className="meaning">{category.meaning}</span>
              </div>
              <div className="examples">
                <h4>Examples:</h4>
                <ul>
                  {category.examples.map(
                    (example, exIndex) =>
                      example.word && (
                        <li
                          key={`suffix-ex-${exIndex}`}
                          className="example-item"
                        >
                          <strong className="example-word">
                            {example.word}
                          </strong>
                          <span className="example-definition">
                            {" "}
                            - {example.definition}
                          </span>
                        </li>
                      )
                  )}
                </ul>
              </div>
              <div className="card-footer">
                <span className="count">
                  {category.examples.filter((e) => e.word).length} examples
                </span>
                <span className="affix-type suffix-type">Suffix</span>
              </div>
            </div>
          ))}
        </div>

        <footer className="footer">
          <p>Created with Next.js • Affix Learning Tool • All data included</p>
          <p className="hint">💡 Tip: Click on any affix card to focus on it</p>
        </footer>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
          color: #333;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid #eaeaea;
        }

        .header h1 {
          font-size: 2.8rem;
          color: #2d3748;
          margin-bottom: 10px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #718096;
          font-weight: 500;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 25px;
          border-radius: 15px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          opacity: 0.9;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
        }

        .section-title {
          font-size: 2rem;
          color: #2d3748;
          margin: 40px 0 20px 0;
          padding-bottom: 10px;
          border-bottom: 2px solid #eaeaea;
        }

        .controls {
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .search-input {
          padding: 15px 25px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          width: 100%;
        }

        .search-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .filter-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 20px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .filter-btn:hover {
          border-color: #667eea;
          color: #667eea;
        }

        .filter-btn.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .prefix-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }

        .prefix-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .prefix-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(45deg, #667eea, #764ba2);
        }

        .suffix-card::before {
          background: linear-gradient(45deg, #4caf50, #2196f3);
        }

        .prefix-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .suffix-card:hover {
          border-color: #4caf50;
        }

        .prefix-header {
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 15px;
        }

        .prefix {
          font-size: 2.6rem;
          font-weight: bold;
          color: #2d3748;
          margin: 0;
        }

        .meaning {
          background: #edf2f7;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 1.9rem;
          font-weight: 600;
          color: #4a5568;
        }

        .examples h4 {
          color: #4a5568;
          margin-bottom: 15px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .example-item {
          margin-bottom: 12px;
          list-style: none;
          padding-left: 0;
          display: flex;
          align-items: flex-start;
          line-height: 1.5;
          font-size: 1.9rem;
        }

        .example-item::before {
          content: "•";
          color: #667eea;
          font-weight: bold;
          margin-right: 10px;
          flex-shrink: 0;
        }

        .example-word {
          color: #2d3748;
          font-weight: 600;
          margin-right: 5px;
          flex-shrink: 0;
        }

        .example-definition {
          color: #718096;
          flex: 1;
        }

        .card-footer {
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: #a0aec0;
        }

        .count {
          background: #f7fafc;
          padding: 4px 12px;
          border-radius: 12px;
          font-weight: 500;
        }

        .affix-type {
          background: #667eea;
          color: white;
          padding: 4px 12px;
          border-radius: 12px;
          font-weight: 500;
          font-size: 0.8rem;
        }

        .suffix-type {
          background: #4caf50;
        }

        .footer {
          text-align: center;
          padding: 25px;
          color: #718096;
          border-top: 2px solid #eaeaea;
          margin-top: 40px;
        }

        .footer p {
          margin-bottom: 10px;
        }

        .hint {
          font-size: 0.9rem;
          color: #667eea;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .container {
            padding: 20px;
          }

          .header h1 {
            font-size: 2rem;
          }

          .prefix-grid {
            grid-template-columns: 1fr;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .filter-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .prefix-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .example-item {
            flex-direction: column;
            gap: 5px;
          }
        }
      `}</style>
    </>
  );
}
