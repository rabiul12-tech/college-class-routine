// pages/most-almost.js
import { useState, useEffect } from "react";
import lessonData from "./data/mostAlmost.json";
import Link from "next/link";

export default function MostAlmost() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getColorScheme = (id) => {
    const schemes = {
      1: { primary: "#6366f1", light: "#e0e7ff", border: "#c7d2fe" }, // most/most of - indigo
      2: { primary: "#10b981", light: "#d1fae5", border: "#a7f3d0" }, // the most - emerald
      3: { primary: "#f59e0b", light: "#fef3c7", border: "#fcd34d" }, // mostly - amber
      4: { primary: "#ef4444", light: "#fee2e2", border: "#fecaca" }, // almost all - red
      5: { primary: "#8b5cf6", light: "#ede9fe", border: "#ddd6fe" }, // almost/nearly - violet
      6: { primary: "#06b6d4", light: "#cffafe", border: "#a5f3fc" }, // special rules - cyan
    };
    return schemes[id] || schemes[1];
  };

  const highlightKeywords = (text) => {
    let highlighted = text;
    // Highlight main keywords
    const keywords = {
      most: "#6366f1",
      "most of": "#6366f1",
      "the most": "#10b981",
      mostly: "#f59e0b",
      almost: "#8b5cf6",
      nearly: "#8b5cf6",
      "almost all": "#ef4444",
      "not nearly": "#06b6d4",
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
          padding: 12px 20px; /* Increased padding */
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
          font-size: 42px; /* 32px + 10px */
          margin-bottom: 12px;
          font-weight: 700;
          color: #1e293b;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .subtitle {
          font-size: 28px; /* 18px + 10px */
          margin: 0;
          color: #64748b;
          font-weight: 500;
        }

        /* --- Quick Reference Banner --- */
        .banner-container {
          padding: 28px;
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 3px solid #e2e8f0;
          margin-bottom: 40px;
        }
        .banner-grid {
          display: grid;
          /* Increased minmax to accommodate larger text */
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          text-align: center;
        }
        .banner-card {
          padding: 24px 20px;
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .banner-word {
          font-size: 26px; /* 16px + 10px */
          font-weight: 700;
          margin-bottom: 8px;
        }
        .banner-meaning {
          font-size: 23px; /* 13px + 10px */
          color: #64748b;
          font-weight: 500;
          line-height: 1.4;
        }

        /* --- Sections --- */
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
          width: 60px; /* Increased size */
          height: 60px; /* Increased size */
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 28px; /* 18px + 10px */
          margin-right: 20px;
          flex-shrink: 0;
        }
        .section-title {
          font-size: 34px; /* 24px + 10px */
          font-weight: 700;
          margin: 0;
          margin-bottom: 8px;
        }
        .section-meaning {
          font-size: 26px; /* 16px + 10px */
          opacity: 0.8;
          font-weight: 500;
        }

        /* --- Subsections --- */
        .subsection-container {
          display: grid;
          gap: 32px;
        }
        .subsection-box {
          padding: 28px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }
        .sub-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom-width: 1px;
          border-bottom-style: solid;
          flex-wrap: wrap; /* Allow wrapping on small screens */
          gap: 10px;
        }
        .sub-title {
          font-size: 28px; /* 18px + 10px */
          font-weight: 600;
          margin: 0;
          flex: 1;
        }
        .sub-tag {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 23px; /* 13px + 10px */
          font-weight: 600;
          white-space: nowrap;
        }

        /* --- Content Grid (Structure, Examples, Explanation) --- */
        .content-grid {
          display: grid;
          gap: 24px;
          /* Responsive Layout: 3 columns on Desktop, 1 on Mobile */
          grid-template-columns: 1fr;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr 1fr 1fr;
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
          overflow: hidden;
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
          overflow-x: auto; /* Handle table overflow */
        }
        .summary-title {
          font-size: 36px; /* 26px + 10px */
          margin-bottom: 32px;
          font-weight: 700;
          color: #1e293b;
          text-align: center;
        }
        .summary-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          min-width: 800px; /* Ensure table doesn't squash on mobile */
        }
        .th-cell {
          text-align: left;
          padding: 18px 16px;
          background-color: #4f46e5;
          color: white;
          font-weight: 600;
          font-size: 23px; /* 13px + 10px */
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .td-cell {
          padding: 16px;
          border-bottom: 1px solid #e2e8f0;
          font-size: 24px; /* 14px + 10px */
        }
        .td-structure {
          font-family: "JetBrains Mono", monospace;
          font-size: 23px; /* 13px + 10px */
          font-weight: 500;
          color: #475569;
        }
        .code-pill {
          font-family: "JetBrains Mono", "Fira Code", monospace;
          background-color: #f1f5f9;
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 23px; /* 13px + 10px */
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
          /* Responsive: 2 cols on desktop, 1 on mobile */
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          font-size: 24px; /* 14px + 10px */
        }
        .difference-card {
          padding: 20px;
          border-radius: 12px;
          border-width: 2px;
          border-style: solid;
        }
        .diff-header {
          display: block;
          margin-bottom: 8px;
          font-weight: bold;
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

        /* --- Utilities --- */
        .strong-text {
          font-weight: 700;
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

        {/* Quick Reference Banner */}
        <div className="banner-container">
          <div className="banner-grid">
            {[
              { word: "MOST", meaning: "General majority", color: "#6366f1" },
              { word: "THE MOST", meaning: "Superlative", color: "#10b981" },
              { word: "MOSTLY", meaning: "Mainly", color: "#f59e0b" },
              {
                word: "ALMOST ALL",
                meaning: "Very large majority",
                color: "#ef4444",
              },
              {
                word: "ALMOST/NEARLY",
                meaning: "About 90%",
                color: "#8b5cf6",
              },
            ].map((item) => (
              <div
                key={item.word}
                className="banner-card"
                style={{
                  backgroundColor: `${item.color}15`,
                  border: `2px solid ${item.color}40`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 8px 24px ${item.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="banner-word" style={{ color: item.color }}>
                  {item.word}
                </div>
                <div className="banner-meaning">{item.meaning}</div>
              </div>
            ))}
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
                      boxShadow: `0 4px 12px ${colors.primary}40`,
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
                    {section.meaning && (
                      <div
                        className="section-meaning"
                        style={{ color: colors.primary }}
                      >
                        {section.meaning}
                      </div>
                    )}
                  </div>
                </div>

                {/* Subsections */}
                <div className="subsection-container">
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
                        className="sub-header"
                        style={{ borderBottomColor: colors.light }}
                      >
                        <h3
                          className="sub-title"
                          style={{ color: colors.primary }}
                        >
                          {sub.title}
                        </h3>
                        {sub.meaning && (
                          <div
                            className="sub-tag"
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
          <div style={{ overflowX: "auto" }}>
            <table className="summary-table">
              <thead>
                <tr>
                  {["Phrase", "Meaning", "Structure", "Example"].map(
                    (header, index) => (
                      <th
                        key={header}
                        className="th-cell"
                        style={{
                          borderRight: index < 3 ? "1px solid #6366f1" : "none",
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
                      className="td-cell strong-text"
                      style={{ color: "#1e293b" }}
                    >
                      {row.phrase}
                    </td>
                    <td className="td-cell" style={{ color: "#475569" }}>
                      {row.meaning}
                    </td>
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
          <h3 className="differences-title">🎯 Key Differences</h3>
          <div className="differences-grid">
            <div
              className="difference-card"
              style={{
                backgroundColor: "#e0e7ff",
                borderColor: "#6366f1",
              }}
            >
              <strong className="diff-header" style={{ color: "#6366f1" }}>
                MOST vs MOST OF
              </strong>
              <span style={{ color: "#6366f1" }}>
                General (most) vs Specific (most of)
              </span>
            </div>
            <div
              className="difference-card"
              style={{
                backgroundColor: "#fef3c7",
                borderColor: "#f59e0b",
              }}
            >
              <strong className="diff-header" style={{ color: "#f59e0b" }}>
                MOSTLY vs ALMOST
              </strong>
              <span style={{ color: "#f59e0b" }}>
                Mainly (mostly) vs Nearly (almost)
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>MOST • MOSTLY • ALMOST study sheet • Clear usage patterns</p>
        </footer>
      </main>
    </>
  );
}
