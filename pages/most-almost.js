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
    <main
      style={{
        padding: "32px 24px",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        lineHeight: 1.6,
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
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
      {/* Header */}
      <header
        style={{
          marginBottom: "48px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "12px",
            fontWeight: 700,
            color: "#1e293b",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          {lessonData.title}
        </h1>
        <p
          style={{
            fontSize: "18px",
            margin: 0,
            color: "#64748b",
            fontWeight: 500,
          }}
        >
          {lessonData.subtitle}
        </p>
      </header>

      {/* Quick Reference Banner */}
      <div
        style={{
          padding: "28px",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          border: "3px solid #e2e8f0",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            textAlign: "center",
          }}
        >
          {[
            { word: "MOST", meaning: "General majority", color: "#6366f1" },
            { word: "THE MOST", meaning: "Superlative", color: "#10b981" },
            { word: "MOSTLY", meaning: "Mainly", color: "#f59e0b" },
            {
              word: "ALMOST ALL",
              meaning: "Very large majority",
              color: "#ef4444",
            },
            { word: "ALMOST/NEARLY", meaning: "About 90%", color: "#8b5cf6" },
          ].map((item, index) => (
            <div
              key={item.word}
              style={{
                padding: "20px 16px",
                backgroundColor: `${item.color}15`,
                borderRadius: "12px",
                border: `2px solid ${item.color}40`,
                transition: "all 0.3s ease",
                cursor: "pointer",
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
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: item.color,
                  marginBottom: "8px",
                }}
              >
                {item.word}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#64748b",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {item.meaning}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sections Grid */}
      <div
        style={{
          display: "grid",
          gap: "40px",
          marginBottom: "48px",
        }}
      >
        {lessonData.sections.map((section, sectionIndex) => {
          const colors = getColorScheme(section.id);
          return (
            <section
              key={section.id}
              style={{
                padding: "32px",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: `2px solid ${colors.border}`,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                opacity: isVisible ? 1 : 0,
                transition: `all 0.5s ease-out ${sectionIndex * 0.1}s`,
              }}
            >
              {/* Section Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "28px",
                  paddingBottom: "20px",
                  borderBottom: `2px solid ${colors.light}`,
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}99 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "18px",
                    marginRight: "20px",
                    flexShrink: 0,
                    boxShadow: `0 4px 12px ${colors.primary}40`,
                  }}
                >
                  {section.id}
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: colors.primary,
                      margin: 0,
                      marginBottom: section.meaning ? "8px" : "0",
                    }}
                  >
                    {section.heading}
                  </h2>
                  {section.meaning && (
                    <div
                      style={{
                        fontSize: "16px",
                        color: colors.primary,
                        opacity: 0.8,
                        fontWeight: 500,
                      }}
                    >
                      {section.meaning}
                    </div>
                  )}
                </div>
              </div>

              {/* Subsections */}
              <div
                style={{
                  display: "grid",
                  gap: "32px",
                }}
              >
                {section.subsections.map((sub, subIndex) => (
                  <div
                    key={subIndex}
                    style={{
                      padding: "28px",
                      backgroundColor:
                        subIndex % 2 === 0 ? "#fafafa" : "#f8fafc",
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    {/* Subsection Title & Meaning */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                        paddingBottom: "12px",
                        borderBottom: `1px solid ${colors.light}`,
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: colors.primary,
                          margin: 0,
                          flex: 1,
                        }}
                      >
                        {sub.title}
                      </h3>
                      {sub.meaning && (
                        <div
                          style={{
                            padding: "6px 12px",
                            backgroundColor: colors.light,
                            borderRadius: "8px",
                            fontSize: "13px",
                            color: colors.primary,
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            marginLeft: "16px",
                          }}
                        >
                          {sub.meaning}
                        </div>
                      )}
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gap: "24px",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        alignItems: "start",
                      }}
                    >
                      {/* Structure */}
                      <div>
                        <h4
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: colors.primary,
                            marginBottom: "12px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Structure
                        </h4>
                        <div style={{ display: "grid", gap: "10px" }}>
                          {sub.structure.map((item, i) => (
                            <div
                              key={i}
                              style={{
                                padding: "14px 16px",
                                backgroundColor: colors.light,
                                borderRadius: "8px",
                                border: `2px solid ${colors.border}`,
                                fontSize: "14px",
                                color: colors.primary,
                                fontWeight: 600,
                                fontFamily: "'JetBrains Mono', monospace",
                                textAlign: "center",
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
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: colors.primary,
                            marginBottom: "12px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Examples
                        </h4>
                        <div style={{ display: "grid", gap: "12px" }}>
                          {sub.examples.map((ex, i) => (
                            <div
                              key={i}
                              style={{
                                padding: "16px 18px",
                                backgroundColor: "white",
                                borderRadius: "8px",
                                border: "2px solid #e2e8f0",
                                fontSize: "15px",
                                fontFamily:
                                  "'JetBrains Mono', 'Fira Code', monospace",
                                color: "#1e293b",
                                transition: "all 0.2s ease",
                                cursor: "pointer",
                                position: "relative",
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.transform = "translateX(6px)";
                                e.target.style.backgroundColor = "#f1f5f9";
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.transform = "translateX(0)";
                                e.target.style.backgroundColor = "white";
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  left: "0",
                                  top: "0",
                                  bottom: "0",
                                  width: "4px",
                                  backgroundColor: colors.primary,
                                  borderRadius: "4px 0 0 4px",
                                }}
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
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: colors.primary,
                            marginBottom: "12px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Short Explanation
                        </h4>
                        <div
                          style={{
                            padding: "20px",
                            backgroundColor: colors.light,
                            borderRadius: "8px",
                            border: `2px solid ${colors.border}`,
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "14px",
                              lineHeight: 1.6,
                              color: colors.primary,
                              margin: 0,
                              fontWeight: 500,
                            }}
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
      <section
        style={{
          padding: "40px 32px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          border: "2px solid #e2e8f0",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "26px",
            marginBottom: "32px",
            fontWeight: 700,
            color: "#1e293b",
            textAlign: "center",
          }}
        >
          Quick Summary Table
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <thead>
              <tr>
                {["Phrase", "Meaning", "Structure", "Example"].map(
                  (header, index) => (
                    <th
                      key={header}
                      style={{
                        textAlign: "left",
                        padding: "18px 16px",
                        backgroundColor: "#4f46e5",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
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
                    style={{
                      padding: "16px",
                      borderBottom: "1px solid #e2e8f0",
                      fontWeight: 600,
                      color: "#1e293b",
                      fontSize: "14px",
                    }}
                  >
                    {row.phrase}
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#475569",
                      fontSize: "14px",
                    }}
                  >
                    {row.meaning}
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#475569",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    {row.structure}
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <code
                      style={{
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        backgroundColor: "#f1f5f9",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        fontSize: "13px",
                        color: "#1e293b",
                        border: "1px solid #e2e8f0",
                        display: "inline-block",
                      }}
                    >
                      {row.example}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Differences */}
      <div
        style={{
          padding: "32px",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          border: "2px solid #e2e8f0",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#1e293b",
            marginBottom: "24px",
          }}
        >
          🎯 Key Differences
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            fontSize: "14px",
          }}
        >
          <div
            style={{
              padding: "20px",
              backgroundColor: "#e0e7ff",
              borderRadius: "12px",
              border: "2px solid #6366f1",
            }}
          >
            <strong
              style={{
                color: "#6366f1",
                display: "block",
                marginBottom: "8px",
              }}
            >
              MOST vs MOST OF
            </strong>
            <span style={{ color: "#6366f1" }}>
              General (most) vs Specific (most of)
            </span>
          </div>
          <div
            style={{
              padding: "20px",
              backgroundColor: "#fef3c7",
              borderRadius: "12px",
              border: "2px solid #f59e0b",
            }}
          >
            <strong
              style={{
                color: "#f59e0b",
                display: "block",
                marginBottom: "8px",
              }}
            >
              MOSTLY vs ALMOST
            </strong>
            <span style={{ color: "#f59e0b" }}>
              Mainly (mostly) vs Nearly (almost)
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "60px",
          textAlign: "center",
          padding: "32px",
          color: "#94a3b8",
          fontSize: "15px",
          borderTop: "2px solid #e2e8f0",
        }}
      >
        <p>MOST • MOSTLY • ALMOST study sheet • Clear usage patterns</p>
      </footer>
    </main>
  );
}
