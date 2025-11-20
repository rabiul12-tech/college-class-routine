// pages/gerunds-infinitives.js
import { useState, useEffect } from "react";
import lessonData from "./data/gerundsInfinitives.json";
import Link from "next/link";
export default function GerundsInfinitives() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getColorScheme = (id) => {
    const schemes = {
      1: { primary: "#6366f1", light: "#e0e7ff", border: "#c7d2fe" }, // definitions - indigo
      2: { primary: "#10b981", light: "#d1fae5", border: "#a7f3d0" }, // starting sentences - emerald
      3: { primary: "#f59e0b", light: "#fef3c7", border: "#fcd34d" }, // purpose - amber
      4: { primary: "#ef4444", light: "#fee2e2", border: "#fecaca" }, // verb groups - red
      5: { primary: "#8b5cf6", light: "#ede9fe", border: "#ddd6fe" }, // meaning changes - violet
    };
    return schemes[id] || schemes[1];
  };

  const highlightPatterns = (text) => {
    let highlighted = text;

    // Highlight gerunds and infinitives
    highlighted = highlighted.replace(
      /(\w+ing)\b/g,
      '<strong style="color: #6366f1">$1</strong>'
    );
    highlighted = highlighted.replace(
      /(to \w+)\b/g,
      '<strong style="color: #10b981">$1</strong>'
    );

    // Highlight key verbs
    const keyVerbs = [
      "remember",
      "forget",
      "try",
      "stop",
      "regret",
      "avoid",
      "manage",
      "refuse",
    ];
    keyVerbs.forEach((verb) => {
      const regex = new RegExp(`\\b${verb}\\b`, "gi");
      highlighted = highlighted.replace(
        regex,
        `<strong style="color: #ef4444">${verb}</strong>`
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
              GERUNDS
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#64748b",
                maxWidth: "200px",
                lineHeight: 1.4,
              }}
            >
              <strong style={{ color: "#6366f1" }}>Form:</strong> verb + ing
              <br />
              <strong style={{ color: "#6366f1" }}>Function:</strong> acts as
              noun
              <br />
              <strong style={{ color: "#6366f1" }}>Use:</strong> common subjects
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
              INFINITIVES
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#64748b",
                maxWidth: "200px",
                lineHeight: 1.4,
              }}
            >
              <strong style={{ color: "#10b981" }}>Form:</strong> to + verb
              <br />
              <strong style={{ color: "#10b981" }}>Function:</strong>{" "}
              purpose/goals
              <br />
              <strong style={{ color: "#10b981" }}>Use:</strong> after specific
              verbs
            </div>
          </div>
        </div>
      </div>

      {/* Critical Warning */}
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
              Critical: Some verbs change meaning completely!
            </strong>
            <div
              style={{ color: "#92400e", fontSize: "14px", marginTop: "4px" }}
            >
              remember, forget, try, stop, regret → different meanings with
              gerunds vs infinitives
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
                                  __html: highlightPatterns(ex),
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
                {["Use", "Gerund", "Infinitive"].map((header, index) => (
                  <th
                    key={header}
                    style={{
                      textAlign: "center",
                      padding: "20px 16px",
                      backgroundColor: "#4f46e5",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      borderRight: index < 2 ? "1px solid #6366f1" : "none",
                    }}
                  >
                    {header}
                  </th>
                ))}
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
                    {row.use}
                  </td>
                  <td
                    style={{
                      padding: "18px 16px",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#6366f1",
                      fontSize: "14px",
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    {row.gerund}
                  </td>
                  <td
                    style={{
                      padding: "18px 16px",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#10b981",
                      fontSize: "14px",
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    {row.infinitive}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Rules */}
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
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#6366f1",
                marginBottom: "12px",
              }}
            >
              GERUND RULES
            </div>
            <div
              style={{ color: "#6366f1", lineHeight: 1.5, textAlign: "left" }}
            >
              • Use as <strong>subject</strong> of sentence
              <br />• After specific <strong>verbs</strong> (avoid, enjoy)
              <br />• For <strong>activities</strong> and{" "}
              <strong>experiences</strong>
              <br />• With <strong>prepositions</strong>
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
                fontSize: "18px",
                fontWeight: 700,
                color: "#10b981",
                marginBottom: "12px",
              }}
            >
              INFINITIVE RULES
            </div>
            <div
              style={{ color: "#10b981", lineHeight: 1.5, textAlign: "left" }}
            >
              • Use for <strong>purpose</strong> (why?)
              <br />• After specific <strong>verbs</strong> (want, decide)
              <br />• For <strong>goals</strong> and <strong>intentions</strong>
              <br />• With <strong>objects</strong> (ask someone to do)
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
          Gerunds & Infinitives study sheet • Master when to use -ing vs to +
          verb
        </p>
      </footer>
    </main>
  );
}
