// pages/beside-besides.js
import { useState, useEffect } from "react";
import lessonData from "./data/besideBesides.json";
import Link from "next/link";

export default function BesideBesides() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getColorScheme = (id) => {
    const schemes = {
      1: { primary: "#6366f1", light: "#e0e7ff", border: "#c7d2fe" }, // beside - indigo
      2: { primary: "#10b981", light: "#d1fae5", border: "#a7f3d0" }, // besides - emerald
      3: { primary: "#ef4444", light: "#fee2e2", border: "#fecaca" }, // warning - red
    };
    return schemes[id] || schemes[1];
  };

  const highlightKeywords = (text) => {
    let highlighted = text;

    // Highlight main keywords
    const keywords = {
      beside: "#6366f1",
      besides: "#10b981",
      "next to": "#6366f1",
      "in addition to": "#10b981",
      "except for": "#10b981",
      "apart from": "#10b981",
      "compared with": "#6366f1",
    };

    Object.keys(keywords).forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi");
      highlighted = highlighted.replace(
        regex,
        `<strong style="color: ${keywords[keyword]}">${keyword}</strong>`
      );
    });

    return highlighted;
  };

  return (
    <>
      <style jsx global>{`
        /* --- Base Layout --- */
        .page-container {
          padding: 32px 24px;
          font-family: "Inter", "Segoe UI", system-ui, sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          line-height: 1.6;
          background-color: #f8fafc;
          min-height: 100vh;
          transition: opacity 0.5s ease-in-out;
        }

        /* --- Navigation --- */
        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background-color: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          cursor: pointer;
          font-size: 24px; /* 14px + 10px */
          font-weight: 500;
          color: #495057;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .nav-link:hover {
          background-color: #e9ecef;
        }

        /* --- Header --- */
        .header-section {
          margin-bottom: 48px;
          text-align: center;
          margin-top: 20px;
        }
        .main-title {
          font-size: 46px; /* 36px + 10px */
          margin-bottom: 12px;
          font-weight: 700;
          color: #1e293b;
          letter-spacing: -0.02em;
        }
        .subtitle {
          font-size: 28px; /* 18px + 10px */
          margin: 0;
          color: #64748b;
          font-weight: 500;
        }

        /* --- Quick Comparison Banner --- */
        .banner-container {
          padding: 28px;
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 3px solid #e2e8f0;
          margin-bottom: 40px;
        }
        .banner-flex {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }
        .banner-title {
          font-size: 38px; /* 28px + 10px */
          font-weight: 700;
          margin-bottom: 12px;
        }
        .banner-text {
          font-size: 25px; /* 15px + 10px */
          color: #64748b;
          max-width: 250px; /* Increased width for larger font */
          line-height: 1.4;
        }
        .banner-vs {
          font-size: 42px; /* 32px + 10px */
          color: #c7d2fe;
          font-weight: 300;
        }

        /* --- Warning Alert --- */
        .warning-container {
          padding: 24px;
          background-color: #fef3c7;
          border-radius: 12px;
          border: 3px solid #f59e0b;
          margin-bottom: 40px;
          text-align: center;
        }
        .warning-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .warning-icon {
          font-size: 34px; /* 24px + 10px */
          color: #d97706;
        }
        .warning-text-strong {
          color: #92400e;
          font-size: 26px; /* 16px + 10px */
          font-weight: bold;
        }
        .warning-text-small {
          color: #92400e;
          font-size: 24px; /* 14px + 10px */
          margin-top: 4px;
        }

        /* --- Sections Grid --- */
        .sections-wrapper {
          display: grid;
          gap: 40px;
          margin-bottom: 48px;
        }
        .section-card {
          padding: 32px;
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.5s ease-out;
        }
        .section-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom-width: 2px;
          border-bottom-style: solid;
        }
        .section-icon {
          width: 54px; /* Increased icon size */
          height: 54px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 28px; /* 18px + 10px */
          margin-right: 20px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .section-title {
          font-size: 36px; /* 26px + 10px */
          font-weight: 700;
          margin: 0;
          margin-bottom: 8px;
        }
        .section-note {
          font-size: 26px; /* 16px + 10px */
          opacity: 0.8;
          font-weight: 500;
          font-style: italic;
        }

        /* --- Subsections --- */
        .subsection-grid {
          display: grid;
          gap: 32px;
        }
        .subsection-box {
          padding: 28px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }
        .subsection-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom-width: 1px;
          border-bottom-style: solid;
          flex-wrap: wrap; /* Responsive wrapping */
          gap: 10px;
        }
        .subsection-title {
          font-size: 28px; /* 18px + 10px */
          font-weight: 600;
          margin: 0;
          flex: 1;
        }
        .subsection-tag {
          padding: 6px 16px;
          border-radius: 8px;
          font-size: 23px; /* 13px + 10px */
          font-weight: 600;
          white-space: nowrap;
        }

        /* --- Content Grid (Structure, Examples, Explanation) --- */
        .content-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: 1fr; /* Mobile default */
          align-items: start;
        }
        @media (min-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr 1fr 1fr; /* Desktop 3-col */
          }
        }

        .column-title {
          font-size: 23px; /* 13px + 10px */
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Structure Items */
        .structure-list {
          display: grid;
          gap: 10px;
        }
        .structure-item {
          padding: 14px 16px;
          border-radius: 8px;
          border-width: 2px;
          border-style: solid;
          font-size: 24px; /* 14px + 10px */
          font-weight: 600;
          font-family: "JetBrains Mono", monospace;
          text-align: center;
        }

        /* Examples */
        .example-list {
          display: grid;
          gap: 12px;
        }
        .example-item {
          padding: 16px 18px;
          background-color: white;
          border-radius: 8px;
          border: 2px solid #e2e8f0;
          font-size: 25px; /* 15px + 10px */
          font-family: "JetBrains Mono", "Fira Code", monospace;
          color: #1e293b;
          transition: all 0.2s ease;
          cursor: pointer;
          position: relative;
        }
        .example-item:hover {
          transform: translateX(6px);
          background-color: #f1f5f9;
        }
        .example-marker {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          border-radius: 4px 0 0 4px;
        }

        /* Explanation */
        .explanation-box {
          padding: 20px;
          border-radius: 8px;
          border-width: 2px;
          border-style: solid;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .explanation-text {
          font-size: 24px; /* 14px + 10px */
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }

        /* --- Summary Table --- */
        .summary-section {
          padding: 40px 32px;
          background-color: white;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 2px solid #e2e8f0;
          margin-bottom: 40px;
        }
        .summary-title {
          font-size: 36px; /* 26px + 10px */
          margin-bottom: 32px;
          font-weight: 700;
          color: #1e293b;
          text-align: center;
        }
        .table-wrapper {
          overflow-x: auto;
        }
        .summary-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          min-width: 800px; /* Force width to prevent squishing on mobile */
        }
        .th-cell {
          text-align: left;
          padding: 18px 12px;
          background-color: #4f46e5;
          color: white;
          font-weight: 600;
          font-size: 22px; /* 12px + 10px */
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .td-cell {
          padding: 16px 12px;
          border-bottom: 1px solid #e2e8f0;
          font-size: 23px; /* 13px + 10px */
          font-weight: 500;
          color: #475569;
        }
        .td-structure {
          font-family: "JetBrains Mono", monospace;
          font-size: 22px; /* 12px + 10px */
        }
        .code-pill {
          font-family: "JetBrains Mono", "Fira Code", monospace;
          background-color: #f1f5f9;
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 22px; /* 12px + 10px */
          color: #1e293b;
          border: 1px solid #e2e8f0;
          display: inline-block;
        }

        /* --- Key Differences --- */
        .differences-section {
          padding: 32px;
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 2px solid #e2e8f0;
          text-align: center;
        }
        .differences-title {
          font-size: 30px; /* 20px + 10px */
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 24px;
        }
        .differences-grid {
          display: grid;
          grid-template-columns: 1fr; /* Mobile Default */
          gap: 24px;
          font-size: 25px; /* 15px + 10px */
        }
        @media (min-width: 768px) {
          .differences-grid {
            grid-template-columns: repeat(2, 1fr); /* Desktop Split */
          }
        }
        .diff-card {
          padding: 24px;
          border-radius: 12px;
          border-width: 3px;
          border-style: solid;
        }
        .diff-card-title {
          font-size: 30px; /* 20px + 10px */
          font-weight: 700;
          margin-bottom: 12px;
        }
        .diff-card-content {
          line-height: 1.5;
        }

        /* --- Footer --- */
        .footer {
          margin-top: 60px;
          text-align: center;
          padding: 32px;
          color: #94a3b8;
          font-size: 25px; /* 15px + 10px */
          border-top: 2px solid #e2e8f0;
        }
      `}</style>

      <main className="page-container" style={{ opacity: isVisible ? 1 : 0 }}>
        <nav>
          <Link href="/qa/" className="nav-link">
            ← Back Home
          </Link>
        </nav>

        {/* Header */}
        <header className="header-section">
          <h1 className="main-title">{lessonData.title}</h1>
          <p className="subtitle">{lessonData.subtitle}</p>
        </header>

        {/* Quick Comparison Banner */}
        <div className="banner-container">
          <div className="banner-flex">
            <div style={{ textAlign: "center" }}>
              <div className="banner-title" style={{ color: "#6366f1" }}>
                BESIDE
              </div>
              <div className="banner-text">
                <strong style={{ color: "#6366f1" }}>Location:</strong> next to
                <br />
                <strong style={{ color: "#6366f1" }}>Comparison:</strong>{" "}
                compared with
              </div>
            </div>
            <div className="banner-vs">vs</div>
            <div style={{ textAlign: "center" }}>
              <div className="banner-title" style={{ color: "#10b981" }}>
                BESIDES
              </div>
              <div className="banner-text">
                <strong style={{ color: "#10b981" }}>Addition:</strong> in
                addition to
                <br />
                <strong style={{ color: "#10b981" }}>Exception:</strong> except
                for
                <br />
                <strong style={{ color: "#10b981" }}>Reason:</strong> moreover
              </div>
            </div>
          </div>
        </div>

        {/* Warning Alert */}
        <div className="warning-container">
          <div className="warning-content">
            <div className="warning-icon">⚠️</div>
            <div>
              <div className="warning-text-strong">
                They sound similar but have completely different meanings!
              </div>
              <div className="warning-text-small">
                Using the wrong one changes the meaning entirely
              </div>
            </div>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="sections-wrapper">
          {lessonData.sections.map((section, sectionIndex) => {
            const colors = getColorScheme(section.id);
            return (
              <section
                key={section.id}
                className="section-card"
                style={{
                  borderColor: colors.border,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${sectionIndex * 0.1}s`,
                }}
              >
                {/* Section Header */}
                <div
                  className="section-header"
                  style={{ borderBottomColor: colors.light }}
                >
                  <div
                    className="section-icon"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}99 100%)`,
                    }}
                  >
                    {section.id}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2
                      className="section-title"
                      style={{ color: colors.primary }}
                    >
                      {section.heading}
                    </h2>
                    {section.note && (
                      <div
                        className="section-note"
                        style={{ color: colors.primary }}
                      >
                        {section.note}
                      </div>
                    )}
                  </div>
                </div>

                {/* Subsections */}
                <div className="subsection-grid">
                  {section.subsections.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="subsection-box"
                      style={{
                        backgroundColor:
                          subIndex % 2 === 0 ? "#fafafa" : "#f8fafc",
                      }}
                    >
                      {/* Subsection Title & Meaning */}
                      <div
                        className="subsection-header"
                        style={{ borderBottomColor: colors.light }}
                      >
                        <h3
                          className="subsection-title"
                          style={{ color: colors.primary }}
                        >
                          {sub.title}
                        </h3>
                        {sub.meaning && (
                          <div
                            className="subsection-tag"
                            style={{
                              backgroundColor: colors.light,
                              color: colors.primary,
                            }}
                          >
                            {sub.meaning}
                          </div>
                        )}
                      </div>

                      <div className="content-grid">
                        {/* Structure */}
                        <div>
                          <h4
                            className="column-title"
                            style={{ color: colors.primary }}
                          >
                            Structure
                          </h4>
                          <div className="structure-list">
                            {sub.structure.map((item, i) => (
                              <div
                                key={i}
                                className="structure-item"
                                style={{
                                  backgroundColor: colors.light,
                                  borderColor: colors.border,
                                  color: colors.primary,
                                }}
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Examples */}
                        <div>
                          <h4
                            className="column-title"
                            style={{ color: colors.primary }}
                          >
                            Examples
                          </h4>
                          <div className="example-list">
                            {sub.examples.map((ex, i) => (
                              <div key={i} className="example-item">
                                <div
                                  className="example-marker"
                                  style={{ backgroundColor: colors.primary }}
                                />
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: highlightKeywords(ex),
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Explanation */}
                        <div>
                          <h4
                            className="column-title"
                            style={{ color: colors.primary }}
                          >
                            Short Explanation
                          </h4>
                          <div
                            className="explanation-box"
                            style={{
                              backgroundColor: colors.light,
                              borderColor: colors.border,
                            }}
                          >
                            <p
                              className="explanation-text"
                              style={{ color: colors.primary }}
                            >
                              {sub.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Summary Table */}
        <section className="summary-section">
          <h2 className="summary-title">Quick Summary Table</h2>
          <div className="table-wrapper">
            <table className="summary-table">
              <thead>
                <tr>
                  {["Word", "Type", "Meaning", "Structure", "Example"].map(
                    (header, index) => (
                      <th
                        key={header}
                        className="th-cell"
                        style={{
                          borderRight: index < 4 ? "1px solid #6366f1" : "none",
                        }}
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {lessonData.summary.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor: i % 2 === 0 ? "#fff" : "#f8fafc",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f1f5f9";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        i % 2 === 0 ? "#fff" : "#f8fafc";
                    }}
                  >
                    <td
                      className="td-cell"
                      style={{
                        fontWeight: 600,
                        color: row.word.includes("beside")
                          ? "#6366f1"
                          : "#10b981",
                      }}
                    >
                      {row.word}
                    </td>
                    <td className="td-cell">{row.type}</td>
                    <td className="td-cell">{row.meaning}</td>
                    <td className="td-cell td-structure">{row.structure}</td>
                    <td className="td-cell">
                      <code className="code-pill">{row.example}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Differences */}
        <div className="differences-section">
          <h3 className="differences-title">🎯 Key Difference</h3>
          <div className="differences-grid">
            <div
              className="diff-card"
              style={{
                backgroundColor: "#e0e7ff",
                borderColor: "#6366f1",
              }}
            >
              <div className="diff-card-title" style={{ color: "#6366f1" }}>
                BESIDE
              </div>
              <div className="diff-card-content" style={{ color: "#6366f1" }}>
                <strong>Location:</strong> next to something
                <br />
                <strong>Comparison:</strong> compared with something
                <br />
                <em>Physical or comparative relationship</em>
              </div>
            </div>
            <div
              className="diff-card"
              style={{
                backgroundColor: "#d1fae5",
                borderColor: "#10b981",
              }}
            >
              <div className="diff-card-title" style={{ color: "#10b981" }}>
                BESIDES
              </div>
              <div className="diff-card-content" style={{ color: "#10b981" }}>
                <strong>Addition:</strong> in addition to
                <br />
                <strong>Exception:</strong> except for
                <br />
                <strong>Reason:</strong> moreover
                <br />
                <em>Logical relationships and exceptions</em>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>
            BESIDE vs. BESIDES study sheet • Clear distinction between location
            and logic
          </p>
        </footer>
      </main>
    </>
  );
}
