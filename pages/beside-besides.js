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
            fontSize: "36px",
            marginBottom: "12px",
            fontWeight: 700,
            color: "#1e293b",
            letterSpacing: "-0.02em",
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

      {/* Quick Comparison Banner */}
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#6366f1",
                marginBottom: "12px",
              }}
            >
              BESIDE
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#64748b",
                maxWidth: "200px",
                lineHeight: 1.4,
              }}
            >
              <strong style={{ color: "#6366f1" }}>Location:</strong> next to
              <br />
              <strong style={{ color: "#6366f1" }}>Comparison:</strong> compared
              with
            </div>
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#c7d2fe",
              fontWeight: 300,
            }}
          >
            vs
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#10b981",
                marginBottom: "12px",
              }}
            >
              BESIDES
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#64748b",
                maxWidth: "200px",
                lineHeight: 1.4,
              }}
            >
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
      <div
        style={{
          padding: "24px",
          backgroundColor: "#fef3c7",
          borderRadius: "12px",
          border: "3px solid #f59e0b",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "#d97706",
            }}
          >
            ⚠️
          </div>
          <div>
            <strong style={{ color: "#92400e", fontSize: "16px" }}>
              They sound similar but have completely different meanings!
            </strong>
            <div
              style={{ color: "#92400e", fontSize: "14px", marginTop: "4px" }}
            >
              Using the wrong one changes the meaning entirely
            </div>
          </div>
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
                      fontSize: "26px",
                      fontWeight: 700,
                      color: colors.primary,
                      margin: 0,
                      marginBottom: section.note ? "8px" : "0",
                    }}
                  >
                    {section.heading}
                  </h2>
                  {section.note && (
                    <div
                      style={{
                        fontSize: "16px",
                        color: colors.primary,
                        opacity: 0.8,
                        fontWeight: 500,
                        fontStyle: "italic",
                      }}
                    >
                      {section.note}
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
                {["Word", "Type", "Meaning", "Structure", "Example"].map(
                  (header, index) => (
                    <th
                      key={header}
                      style={{
                        textAlign: "left",
                        padding: "18px 12px",
                        backgroundColor: "#4f46e5",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
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
                    style={{
                      padding: "16px 12px",
                      borderBottom: "1px solid #e2e8f0",
                      fontWeight: 600,
                      color: row.word.includes("beside")
                        ? "#6366f1"
                        : "#10b981",
                      fontSize: "13px",
                    }}
                  >
                    {row.word}
                  </td>
                  <td
                    style={{
                      padding: "16px 12px",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#475569",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    {row.type}
                  </td>
                  <td
                    style={{
                      padding: "16px 12px",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#475569",
                      fontSize: "13px",
                    }}
                  >
                    {row.meaning}
                  </td>
                  <td
                    style={{
                      padding: "16px 12px",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#475569",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    {row.structure}
                  </td>
                  <td
                    style={{
                      padding: "16px 12px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <code
                      style={{
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        backgroundColor: "#f1f5f9",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        fontSize: "12px",
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
          🎯 Key Difference
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
            fontSize: "15px",
          }}
        >
          <div
            style={{
              padding: "24px",
              backgroundColor: "#e0e7ff",
              borderRadius: "12px",
              border: "3px solid #6366f1",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#6366f1",
                marginBottom: "12px",
              }}
            >
              BESIDE
            </div>
            <div style={{ color: "#6366f1", lineHeight: 1.5 }}>
              <strong>Location:</strong> next to something
              <br />
              <strong>Comparison:</strong> compared with something
              <br />
              <em>Physical or comparative relationship</em>
            </div>
          </div>
          <div
            style={{
              padding: "24px",
              backgroundColor: "#d1fae5",
              borderRadius: "12px",
              border: "3px solid #10b981",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#10b981",
                marginBottom: "12px",
              }}
            >
              BESIDES
            </div>
            <div style={{ color: "#10b981", lineHeight: 1.5 }}>
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
        <p>
          BESIDE vs. BESIDES study sheet • Clear distinction between location
          and logic
        </p>
      </footer>
    </main>
  );
}
