// pages/to-vs-for.js
import { useState, useEffect } from "react";
import lessonData from "./data/toVsFor.json";
import Link from "next/link";
export default function ToVsFor() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getColorScheme = (id) => {
    const schemes = {
      1: { primary: "#6366f1", light: "#e0e7ff", border: "#c7d2fe" }, // purpose - indigo
      2: { primary: "#10b981", light: "#d1fae5", border: "#a7f3d0" }, // function - emerald
      3: { primary: "#f59e0b", light: "#fef3c7", border: "#fcd34d" }, // destination - amber
      4: { primary: "#ef4444", light: "#fee2e2", border: "#fecaca" }, // to me vs for me - red
      5: { primary: "#8b5cf6", light: "#ede9fe", border: "#ddd6fe" }, // helping - violet
      6: { primary: "#06b6d4", light: "#cffafe", border: "#a5f3fc" }, // special note - cyan
    };
    return schemes[id] || schemes[1];
  };

  const highlightPrepositions = (text) => {
    let highlighted = text;

    // Highlight "to" and "for" in different colors
    highlighted = highlighted.replace(
      /\bto\b/g,
      '<strong style="color: #6366f1">to</strong>'
    );
    highlighted = highlighted.replace(
      /\bfor\b/g,
      '<strong style="color: #10b981">for</strong>'
    );

    // Highlight verb patterns
    highlighted = highlighted.replace(
      /(to \w+)\b/g,
      '<strong style="color: #f59e0b">$1</strong>'
    );
    highlighted = highlighted.replace(
      /(for \w+ing)\b/g,
      '<strong style="color: #8b5cf6">$1</strong>'
    );

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
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#6366f1",
                marginBottom: "8px",
              }}
            >
              TO
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#64748b",
                maxWidth: "200px",
              }}
            >
              Purpose (action) • Destination • Opinion
            </div>
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#c7d2fe",
              fontWeight: 300,
            }}
          >
            vs
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#10b981",
                marginBottom: "8px",
              }}
            >
              FOR
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#64748b",
                maxWidth: "200px",
              }}
            >
              Purpose (noun) • Function • Benefit • Helping
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
                  alignItems: "center",
                  marginBottom: "32px",
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
                <h2
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    color: colors.primary,
                    margin: 0,
                  }}
                >
                  {section.heading}
                </h2>
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
                    {/* Subsection Title */}
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        color: colors.primary,
                        marginBottom: "20px",
                        paddingBottom: "12px",
                        borderBottom: `1px solid ${colors.light}`,
                      }}
                    >
                      {sub.title}
                    </h3>

                    <div
                      style={{
                        display: "grid",
                        gap: "28px",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        alignItems: "start",
                      }}
                    >
                      {/* Structure */}
                      <div>
                        <h4
                          style={{
                            fontSize: "14px",
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
                                padding: "16px 20px",
                                backgroundColor: colors.light,
                                borderRadius: "10px",
                                border: `2px solid ${colors.border}`,
                                fontSize: "15px",
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
                            fontSize: "14px",
                            fontWeight: 600,
                            color: colors.primary,
                            marginBottom: "12px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Examples
                        </h4>
                        <div style={{ display: "grid", gap: "14px" }}>
                          {sub.examples.map((ex, i) => (
                            <div
                              key={i}
                              style={{
                                padding: "18px 20px",
                                backgroundColor: "white",
                                borderRadius: "10px",
                                border: "2px solid #e2e8f0",
                                fontSize: "16px",
                                fontFamily:
                                  "'JetBrains Mono', 'Fira Code', monospace",
                                color: "#1e293b",
                                transition: "all 0.2s ease",
                                cursor: "pointer",
                                position: "relative",
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.transform = "translateX(8px)";
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
                                  width: "6px",
                                  backgroundColor: colors.primary,
                                  borderRadius: "6px 0 0 6px",
                                }}
                              />
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: highlightPrepositions(ex),
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
                            fontSize: "14px",
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
                            padding: "24px",
                            backgroundColor: colors.light,
                            borderRadius: "10px",
                            border: `2px solid ${colors.border}`,
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "15px",
                              lineHeight: 1.6,
                              color: colors.primary,
                              margin: 0,
                              fontWeight: 500,
                            }}
                          >
                            {sub.explanation}
                          </p>
                        </div>

                        {/* Special Note */}
                        {sub.specialNote && (
                          <div
                            style={{
                              marginTop: "16px",
                              padding: "16px",
                              backgroundColor: "#fef3c7",
                              borderRadius: "8px",
                              border: "2px solid #f59e0b",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "10px",
                              }}
                            >
                              <div
                                style={{
                                  color: "#d97706",
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                }}
                              >
                                💡
                              </div>
                              <div>
                                <strong
                                  style={{
                                    color: "#92400e",
                                    display: "block",
                                    marginBottom: "4px",
                                    fontSize: "13px",
                                  }}
                                >
                                  Note
                                </strong>
                                <p
                                  style={{
                                    color: "#92400e",
                                    margin: 0,
                                    fontSize: "14px",
                                    lineHeight: 1.4,
                                  }}
                                >
                                  {sub.specialNote}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
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
          Quick Reference Table
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
                {["Meaning", "Use", "Structure", "Example"].map(
                  (header, index) => (
                    <th
                      key={header}
                      style={{
                        textAlign: "left",
                        padding: "20px 16px",
                        backgroundColor: "#4f46e5",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "14px",
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
                      padding: "18px 16px",
                      borderBottom: "1px solid #e2e8f0",
                      fontWeight: 600,
                      color: "#1e293b",
                      fontSize: "14px",
                    }}
                  >
                    {row.meaning}
                  </td>
                  <td
                    style={{
                      padding: "18px 16px",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#475569",
                      fontSize: "14px",
                    }}
                  >
                    {row.use}
                  </td>
                  <td
                    style={{
                      padding: "18px 16px",
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
                      padding: "18px 16px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <code
                      style={{
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        backgroundColor: "#f1f5f9",
                        padding: "8px 12px",
                        borderRadius: "8px",
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

      {/* Golden Rules */}
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
          🎯 Golden Rules
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
            <strong
              style={{
                color: "#6366f1",
                display: "block",
                marginBottom: "8px",
                fontSize: "16px",
              }}
            >
              TO + Verb 1
            </strong>
            <span style={{ color: "#6366f1" }}>
              For purpose (action) and destination
            </span>
          </div>
          <div
            style={{
              padding: "24px",
              backgroundColor: "#d1fae5",
              borderRadius: "12px",
              border: "3px solid #10b981",
            }}
          >
            <strong
              style={{
                color: "#10b981",
                display: "block",
                marginBottom: "8px",
                fontSize: "16px",
              }}
            >
              FOR + Noun/Ing
            </strong>
            <span style={{ color: "#10b981" }}>
              For purpose (noun), function, and helping
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
        <p>TO vs. FOR study sheet • Clear preposition patterns</p>
      </footer>
    </main>
  );
}
