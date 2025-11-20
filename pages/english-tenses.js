// pages/english-tenses.js
import { useState, useEffect } from "react";
import lessonData from "./data/englishTenses.json";
import Link from "next/link";
export default function EnglishTenses() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getColorScheme = (id) => {
    const schemes = {
      1: { primary: "#6366f1", light: "#e0e7ff", border: "#c7d2fe" }, // simple - indigo
      2: { primary: "#10b981", light: "#d1fae5", border: "#a7f3d0" }, // continuous - emerald
      3: { primary: "#f59e0b", light: "#fef3c7", border: "#fcd34d" }, // perfect - amber
      4: { primary: "#ef4444", light: "#fee2e2", border: "#fecaca" }, // perfect continuous - red
      5: { primary: "#8b5cf6", light: "#ede9fe", border: "#ddd6fe" }, // summary - violet
    };
    return schemes[id] || schemes[1];
  };

  const highlightTensePatterns = (text) => {
    let highlighted = text;

    // Highlight tense structures
    const patterns = {
      "Base Verb": "#6366f1",
      "Verb 1": "#6366f1",
      "Verb 2": "#6366f1",
      "Verb 3": "#f59e0b",
      "Verb-ing": "#10b981",
      "am/are/is": "#10b981",
      "was/were": "#10b981",
      "will be": "#10b981",
      "have/has": "#f59e0b",
      had: "#f59e0b",
      "will have": "#f59e0b",
      "have/has been": "#ef4444",
      "had been": "#ef4444",
      "will have been": "#ef4444",
    };

    Object.keys(patterns).forEach((pattern) => {
      const regex = new RegExp(`\\b${pattern}\\b`, "gi");
      highlighted = highlighted.replace(
        regex,
        `<strong style="color: ${patterns[pattern]}">${pattern}</strong>`
      );
    });

    return highlighted;
  };

  const getTenseCategory = (tenseName) => {
    if (tenseName.includes("Simple")) return "simple";
    if (tenseName.includes("Continuous")) return "continuous";
    if (tenseName.includes("Perfect Continuous")) return "perfectContinuous";
    if (tenseName.includes("Perfect")) return "perfect";
    return "simple";
  };

  const getTenseColor = (category) => {
    const colors = {
      simple: "#6366f1",
      continuous: "#10b981",
      perfect: "#f59e0b",
      perfectContinuous: "#ef4444",
    };
    return colors[category] || "#64748b";
  };

  return (
    <main
      style={{
        padding: "32px 24px",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        maxWidth: "1400px",
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
            fontSize: "38px",
            marginBottom: "16px",
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
            fontSize: "20px",
            margin: 0,
            color: "#64748b",
            fontWeight: 500,
          }}
        >
          {lessonData.subtitle}
        </p>
      </header>

      {/* Quick Categories Overview */}
      <div
        style={{
          padding: "32px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          border: "3px solid #e2e8f0",
          marginBottom: "48px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "32px",
            fontWeight: 700,
            color: "#1e293b",
            textAlign: "center",
          }}
        >
          The Four Tense Categories
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {[
            {
              name: "Simple Tenses",
              desc: "Habits, states, facts",
              color: "#6366f1",
              examples: ["I work", "I worked", "I will work"],
            },
            {
              name: "Continuous Tenses",
              desc: "Temporary actions in progress",
              color: "#10b981",
              examples: ["I am working", "I was working", "I will be working"],
            },
            {
              name: "Perfect Tenses",
              desc: "Actions before another time",
              color: "#f59e0b",
              examples: ["I have worked", "I had worked", "I will have worked"],
            },
            {
              name: "Perfect Continuous",
              desc: "Duration of ongoing actions",
              color: "#ef4444",
              examples: [
                "I have been working",
                "I had been working",
                "I will have been working",
              ],
            },
          ].map((category, index) => (
            <div
              key={category.name}
              style={{
                padding: "28px 24px",
                backgroundColor: `${category.color}15`,
                borderRadius: "16px",
                border: `3px solid ${category.color}40`,
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = `0 12px 32px ${category.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: category.color,
                  marginBottom: "12px",
                }}
              >
                {category.name}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  color: "#64748b",
                  marginBottom: "20px",
                  lineHeight: 1.4,
                }}
              >
                {category.desc}
              </div>
              <div
                style={{
                  display: "grid",
                  gap: "8px",
                }}
              >
                {category.examples.map((example, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "white",
                      borderRadius: "6px",
                      border: `1px solid ${category.color}30`,
                      fontSize: "14px",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: category.color,
                      textAlign: "center",
                    }}
                  >
                    {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All 12 Tenses Table */}
      <section
        style={{
          padding: "40px 32px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          border: "2px solid #e2e8f0",
          marginBottom: "48px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "32px",
            fontWeight: 700,
            color: "#1e293b",
            textAlign: "center",
          }}
        >
          All 12 English Tenses Overview
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
                {["Tense", "Structure", "Use", "Example"].map(
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
              {lessonData.tensesTable.map((tense, i) => {
                const category = getTenseCategory(tense.tense);
                const color = getTenseColor(category);
                return (
                  <tr
                    key={tense.tense}
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
                        color: color,
                        fontSize: "15px",
                      }}
                    >
                      {tense.tense}
                    </td>
                    <td
                      style={{
                        padding: "18px 16px",
                        borderBottom: "1px solid #e2e8f0",
                        color: "#475569",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {tense.structure}
                    </td>
                    <td
                      style={{
                        padding: "18px 16px",
                        borderBottom: "1px solid #e2e8f0",
                        color: "#475569",
                        fontSize: "14px",
                      }}
                    >
                      {tense.use}
                    </td>
                    <td
                      style={{
                        padding: "18px 16px",
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    >
                      <code
                        style={{
                          fontFamily:
                            "'JetBrains Mono', 'Fira Code', monospace",
                          backgroundColor: "#f1f5f9",
                          padding: "8px 12px",
                          borderRadius: "8px",
                          fontSize: "14px",
                          color: "#1e293b",
                          border: "1px solid #e2e8f0",
                          display: "inline-block",
                        }}
                      >
                        {tense.example}
                      </code>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Sections */}
      <div
        style={{
          display: "grid",
          gap: "48px",
          marginBottom: "48px",
        }}
      >
        {lessonData.sections.map((section, sectionIndex) => {
          const colors = getColorScheme(section.id);
          return (
            <section
              key={section.id}
              style={{
                padding: "40px 32px",
                backgroundColor: "white",
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: `3px solid ${colors.border}`,
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
                  marginBottom: "36px",
                  paddingBottom: "24px",
                  borderBottom: `3px solid ${colors.light}`,
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}99 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "20px",
                    marginRight: "24px",
                    flexShrink: 0,
                    boxShadow: `0 6px 16px ${colors.primary}40`,
                  }}
                >
                  {section.id}
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontSize: "32px",
                      fontWeight: 700,
                      color: colors.primary,
                      margin: 0,
                      marginBottom: "12px",
                    }}
                  >
                    {section.heading}
                  </h2>
                  {section.description && (
                    <p
                      style={{
                        fontSize: "18px",
                        color: colors.primary,
                        opacity: 0.8,
                        fontWeight: 500,
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {section.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Subsections */}
              <div
                style={{
                  display: "grid",
                  gap: "36px",
                }}
              >
                {section.subsections.map((sub, subIndex) => (
                  <div
                    key={subIndex}
                    style={{
                      padding: "32px",
                      backgroundColor:
                        subIndex % 2 === 0 ? "#fafafa" : "#f8fafc",
                      borderRadius: "16px",
                      border: "2px solid #e2e8f0",
                    }}
                  >
                    {/* Subsection Title */}
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: 600,
                        color: colors.primary,
                        marginBottom: "24px",
                        paddingBottom: "16px",
                        borderBottom: `2px solid ${colors.light}`,
                      }}
                    >
                      {sub.title}
                    </h3>

                    <div
                      style={{
                        display: "grid",
                        gap: "32px",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        alignItems: "start",
                      }}
                    >
                      {/* Structure */}
                      <div>
                        <h4
                          style={{
                            fontSize: "15px",
                            fontWeight: 600,
                            color: colors.primary,
                            marginBottom: "16px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Structure
                        </h4>
                        <div style={{ display: "grid", gap: "14px" }}>
                          {sub.structure.map((item, i) => (
                            <div
                              key={i}
                              style={{
                                padding: "18px 20px",
                                backgroundColor: colors.light,
                                borderRadius: "12px",
                                border: `3px solid ${colors.border}`,
                                fontSize: "15px",
                                color: colors.primary,
                                fontWeight: 600,
                                fontFamily: "'JetBrains Mono', monospace",
                                textAlign: "center",
                                transition: "all 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.transform = "translateY(-2px)";
                                e.target.style.boxShadow = `0 4px 12px ${colors.primary}20`;
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.transform = "translateY(0)";
                                e.target.style.boxShadow = "none";
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
                            fontSize: "15px",
                            fontWeight: 600,
                            color: colors.primary,
                            marginBottom: "16px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Examples
                        </h4>
                        <div style={{ display: "grid", gap: "16px" }}>
                          {sub.examples.map((ex, i) => (
                            <div
                              key={i}
                              style={{
                                padding: "20px 22px",
                                backgroundColor: "white",
                                borderRadius: "12px",
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
                                  __html: highlightTensePatterns(ex),
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
                            fontSize: "15px",
                            fontWeight: 600,
                            color: colors.primary,
                            marginBottom: "16px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Explanation
                        </h4>
                        <div
                          style={{
                            padding: "28px",
                            backgroundColor: colors.light,
                            borderRadius: "12px",
                            border: `3px solid ${colors.border}`,
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "16px",
                              lineHeight: 1.7,
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

      {/* Final Summary */}
      <div
        style={{
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          border: "3px solid #8b5cf6",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#8b5cf6",
            marginBottom: "24px",
          }}
        >
          🎯 Master the 12 Tenses
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "32px",
            fontSize: "16px",
            textAlign: "left",
          }}
        >
          <div
            style={{
              padding: "28px",
              backgroundColor: "#e0e7ff",
              borderRadius: "16px",
              border: "3px solid #6366f1",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#6366f1",
                marginBottom: "16px",
              }}
            >
              Key Principles
            </div>
            <ul
              style={{
                color: "#6366f1",
                lineHeight: 1.6,
                margin: 0,
                paddingLeft: "20px",
              }}
            >
              <li>Simple tenses = Permanent situations</li>
              <li>Continuous tenses = Temporary actions</li>
              <li>Perfect tenses = Time relationships</li>
              <li>Perfect Continuous = Duration emphasis</li>
            </ul>
          </div>
          <div
            style={{
              padding: "28px",
              backgroundColor: "#f0f9ff",
              borderRadius: "16px",
              border: "3px solid #06b6d4",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#06b6d4",
                marginBottom: "16px",
              }}
            >
              Practice Tips
            </div>
            <ul
              style={{
                color: "#06b6d4",
                lineHeight: 1.6,
                margin: 0,
                paddingLeft: "20px",
              }}
            >
              <li>Create personal examples for each tense</li>
              <li>Focus on time relationships</li>
              <li>Practice with both stative and dynamic verbs</li>
              <li>Master the decision process for perfect forms</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "60px",
          textAlign: "center",
          padding: "40px",
          color: "#94a3b8",
          fontSize: "16px",
          borderTop: "2px solid #e2e8f0",
        }}
      >
        <p>
          Complete English Tenses Guide • Master all 12 tenses with clear
          structure and examples
        </p>
      </footer>
    </main>
  );
}
