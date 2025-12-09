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
      1: { primary: "#6366f1", light: "#e0e7ff", border: "#c7d2fe" },
      2: { primary: "#10b981", light: "#d1fae5", border: "#a7f3d0" },
      3: { primary: "#f59e0b", light: "#fef3c7", border: "#fcd34d" },
      4: { primary: "#ef4444", light: "#fee2e2", border: "#fecaca" },
      5: { primary: "#8b5cf6", light: "#ede9fe", border: "#ddd6fe" },
    };
    return schemes[id] || schemes[1];
  };

  const highlightPatterns = (text) => {
    let highlighted = text;
    highlighted = highlighted.replace(
      /(\w+ing)\b/g,
      '<strong style="color: #6366f1">$1</strong>'
    );
    highlighted = highlighted.replace(
      /(to \w+)\b/g,
      '<strong style="color: #10b981">$1</strong>'
    );
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

  // Styles object
  const styles = {
    container: {
      padding: "clamp(20px, 4vw, 32px) clamp(16px, 3vw, 24px)",
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      maxWidth: "1200px",
      margin: "0 auto",
      lineHeight: 1.6,
      backgroundColor: "#f8fafc",
      minHeight: "100vh",
      opacity: isVisible ? 1 : 0,
      transition: "opacity 0.5s ease-in-out",
    },
    navLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 16px",
      backgroundColor: "#f8f9fa",
      border: "1px solid #dee2e6",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "24px",
      fontWeight: "500",
      color: "#495057",
      transition: "all 0.2s ease",
      textDecoration: "none",
      width: "fit-content",
      marginBottom: "32px",
      "&:hover": {
        backgroundColor: "#e9ecef",
        transform: "translateY(-1px)",
      },
    },
    header: {
      marginBottom: "clamp(32px, 6vw, 48px)",
      textAlign: "center",
    },
    title: {
      fontSize: "clamp(28px, 5vw, 36px)",
      marginBottom: "12px",
      fontWeight: 700,
      color: "#1e293b",
      letterSpacing: "-0.02em",
    },
    subtitle: {
      fontSize: "clamp(26px, 3vw, 28px)",
      margin: 0,
      color: "#64748b",
      fontWeight: 500,
    },
    comparisonBanner: {
      padding: "clamp(20px, 4vw, 28px)",
      backgroundColor: "white",
      borderRadius: "16px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
      border: "3px solid #e2e8f0",
      marginBottom: "clamp(32px, 5vw, 40px)",
    },
    comparisonInner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "clamp(20px, 8vw, 60px)",
      flexWrap: "wrap",
    },
    comparisonItem: {
      textAlign: "center",
      minWidth: "200px",
    },
    comparisonTitle: {
      fontSize: "clamp(22px, 4vw, 28px)",
      fontWeight: 700,
      marginBottom: "12px",
    },
    comparisonDesc: {
      fontSize: "25px",
      color: "#64748b",
      maxWidth: "200px",
      lineHeight: 1.4,
      margin: "0 auto",
    },
    vsText: {
      fontSize: "clamp(24px, 5vw, 32px)",
      color: "#c7d2fe",
      fontWeight: 300,
    },
    warning: {
      padding: "clamp(16px, 3vw, 24px)",
      backgroundColor: "#fef3c7",
      borderRadius: "12px",
      border: "3px solid #f59e0b",
      marginBottom: "clamp(32px, 5vw, 40px)",
      textAlign: "center",
    },
    warningInner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      flexWrap: "wrap",
    },
    warningIcon: {
      fontSize: "clamp(20px, 4vw, 24px)",
      color: "#d97706",
    },
    warningTitle: {
      color: "#92400e",
      fontSize: "clamp(14px, 3vw, 16px)",
      fontWeight: 600,
      marginBottom: "4px",
    },
    warningText: {
      color: "#92400e",
      fontSize: "clamp(12px, 2.5vw, 14px)",
      marginTop: "4px",
    },
    sectionsGrid: {
      display: "grid",
      gap: "clamp(24px, 5vw, 40px)",
      marginBottom: "clamp(32px, 6vw, 48px)",
    },
    section: {
      padding: "clamp(20px, 4vw, 32px)",
      backgroundColor: "white",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      opacity: isVisible ? 1 : 0,
      transition: `all 0.5s ease-out`,
    },
    sectionHeader: {
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "clamp(20px, 4vw, 28px)",
      paddingBottom: "20px",
      borderBottom: "2px solid",
    },
    sectionNumber: {
      width: "44px",
      height: "44px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: 700,
      fontSize: "18px",
      marginRight: "20px",
      flexShrink: 0,
      boxShadow: "0 4px 12px",
    },
    sectionHeading: {
      fontSize: "clamp(20px, 4vw, 26px)",
      fontWeight: 700,
      margin: 0,
      marginBottom: "8px",
    },
    sectionNote: {
      fontSize: "16px",
      opacity: 0.8,
      fontWeight: 500,
      fontStyle: "italic",
    },
    subsectionsGrid: {
      display: "grid",
      gap: "clamp(20px, 4vw, 32px)",
    },
    subsection: {
      padding: "clamp(20px, 4vw, 28px)",
      backgroundColor: "#fafafa",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
    },
    subsectionTitle: {
      fontSize: "clamp(18px, 3vw, 20px)",
      fontWeight: 600,
      marginBottom: "20px",
      paddingBottom: "12px",
      borderBottom: "1px solid",
    },
    contentGrid: {
      display: "grid",
      gap: "24px",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      alignItems: "start",
    },
    column: {
      minHeight: "200px",
    },
    columnTitle: {
      fontSize: "13px",
      fontWeight: 600,
      marginBottom: "12px",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    structureItem: {
      padding: "14px 16px",
      borderRadius: "8px",
      border: "2px solid",
      fontSize: "24px",
      fontWeight: 600,
      fontFamily: "'JetBrains Mono', monospace",
      textAlign: "center",
      marginBottom: "10px",
      "&:last-child": {
        marginBottom: 0,
      },
    },
    exampleItem: {
      padding: "16px 18px",
      backgroundColor: "white",
      borderRadius: "8px",
      border: "2px solid #e2e8f0",
      fontSize: "25px",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      color: "#1e293b",
      transition: "all 0.2s ease",
      cursor: "pointer",
      position: "relative",
      marginBottom: "12px",
      "&:last-child": {
        marginBottom: 0,
      },
      "&:hover": {
        transform: "translateX(6px)",
        backgroundColor: "#f1f5f9",
      },
    },
    exampleDecorator: {
      position: "absolute",
      left: "0",
      top: "0",
      bottom: "0",
      width: "4px",
      borderRadius: "4px 0 0 4px",
    },
    explanationBox: {
      padding: "20px",
      borderRadius: "8px",
      border: "2px solid",
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
    explanationText: {
      fontSize: "14px",
      lineHeight: 1.6,
      margin: 0,
      fontWeight: 500,
    },
    summarySection: {
      padding: "clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px)",
      backgroundColor: "white",
      borderRadius: "20px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
      border: "2px solid #e2e8f0",
      marginBottom: "clamp(32px, 5vw, 40px)",
    },
    summaryTitle: {
      fontSize: "clamp(22px, 4vw, 26px)",
      marginBottom: "clamp(24px, 4vw, 32px)",
      fontWeight: 700,
      color: "#1e293b",
      textAlign: "center",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      minWidth: "600px",
    },
    tableHeader: {
      textAlign: "center",
      padding: "20px 16px",
      backgroundColor: "#4f46e5",
      color: "white",
      fontWeight: 600,
      fontSize: "24px",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    tableCell: {
      padding: "8px 6px",
      borderBottom: "1px solid #e2e8f0",
      fontSize: "24px",
    },
    rulesContainer: {
      padding: "clamp(24px, 4vw, 32px)",
      backgroundColor: "white",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      border: "2px solid #e2e8f0",
      textAlign: "center",
    },
    rulesTitle: {
      fontSize: "clamp(18px, 3vw, 20px)",
      fontWeight: 600,
      color: "#1e293b",
      marginBottom: "clamp(20px, 4vw, 24px)",
    },
    rulesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
      fontSize: "15px",
    },
    ruleBox: {
      padding: "clamp(20px, 3vw, 24px)",
      borderRadius: "12px",
      border: "3px solid",
    },
    ruleTitle: {
      fontSize: "clamp(16px, 3vw, 18px)",
      fontWeight: 700,
      marginBottom: "12px",
    },
    ruleList: {
      lineHeight: 1.5,
      textAlign: "left",
    },
    footer: {
      marginTop: "clamp(40px, 6vw, 60px)",
      textAlign: "center",
      padding: "32px",
      color: "#94a3b8",
      fontSize: "15px",
      borderTop: "2px solid #e2e8f0",
    },
  };

  return (
    <main style={styles.container}>
      {/* Navigation */}
      <nav>
        <Link href="/qa/" legacyBehavior>
          <a style={styles.navLink}>← Back Home</a>
        </Link>
      </nav>

      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>{lessonData.title}</h1>
        <p style={styles.subtitle}>{lessonData.subtitle}</p>
      </header>

      {/* Quick Comparison Banner */}
      <div style={styles.comparisonBanner}>
        <div style={styles.comparisonInner}>
          <div style={styles.comparisonItem}>
            <div style={{ ...styles.comparisonTitle, color: "#6366f1" }}>
              GERUNDS
            </div>
            <div style={styles.comparisonDesc}>
              <strong style={{ color: "#6366f1" }}>Form:</strong> verb + ing
              <br />
              <strong style={{ color: "#6366f1" }}>Function:</strong> acts as
              noun
              <br />
              <strong style={{ color: "#6366f1" }}>Use:</strong> common subjects
            </div>
          </div>
          <div style={styles.vsText}>vs</div>
          <div style={styles.comparisonItem}>
            <div style={{ ...styles.comparisonTitle, color: "#10b981" }}>
              INFINITIVES
            </div>
            <div style={styles.comparisonDesc}>
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
      <div style={styles.warning}>
        <div style={styles.warningInner}>
          <div style={styles.warningIcon}>⚠️</div>
          <div>
            <div style={styles.warningTitle}>
              Critical: Some verbs change meaning completely!
            </div>
            <div style={styles.warningText}>
              remember, forget, try, stop, regret → different meanings with
              gerunds vs infinitives
            </div>
          </div>
        </div>
      </div>

      {/* Sections Grid */}
      <div style={styles.sectionsGrid}>
        {lessonData.sections.map((section, sectionIndex) => {
          const colors = getColorScheme(section.id);
          return (
            <section
              key={section.id}
              style={{
                ...styles.section,
                border: `2px solid ${colors.border}`,
                transitionDelay: `${sectionIndex * 0.1}s`,
              }}
            >
              {/* Section Header */}
              <div
                style={{
                  ...styles.sectionHeader,
                  borderBottomColor: colors.light,
                }}
              >
                <div
                  style={{
                    ...styles.sectionNumber,
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}99 100%)`,
                    boxShadow: `0 4px 12px ${colors.primary}40`,
                  }}
                >
                  {section.id}
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{ ...styles.sectionHeading, color: colors.primary }}
                  >
                    {section.heading}
                  </h2>
                  {section.note && (
                    <div
                      style={{ ...styles.sectionNote, color: colors.primary }}
                    >
                      {section.note}
                    </div>
                  )}
                </div>
              </div>

              {/* Subsections */}
              <div style={styles.subsectionsGrid}>
                {section.subsections.map((sub, subIndex) => (
                  <div
                    key={subIndex}
                    style={{
                      ...styles.subsection,
                      backgroundColor:
                        subIndex % 2 === 0 ? "#fafafa" : "#f8fafc",
                    }}
                  >
                    <h3
                      style={{
                        ...styles.subsectionTitle,
                        color: colors.primary,
                        borderBottomColor: colors.light,
                      }}
                    >
                      {sub.title}
                    </h3>

                    <div style={styles.contentGrid}>
                      {/* Structure */}
                      <div style={styles.column}>
                        <h4
                          style={{
                            ...styles.columnTitle,
                            color: colors.primary,
                          }}
                        >
                          Structure
                        </h4>
                        <div>
                          {sub.structure.map((item, i) => (
                            <div
                              key={i}
                              style={{
                                ...styles.structureItem,
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
                      <div style={styles.column}>
                        <h4
                          style={{
                            ...styles.columnTitle,
                            color: colors.primary,
                          }}
                        >
                          Examples
                        </h4>
                        <div>
                          {sub.examples.map((ex, i) => (
                            <div
                              key={i}
                              style={styles.exampleItem}
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
                                  ...styles.exampleDecorator,
                                  backgroundColor: colors.primary,
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
                      <div style={styles.column}>
                        <h4
                          style={{
                            ...styles.columnTitle,
                            color: colors.primary,
                          }}
                        >
                          Short Explanation
                        </h4>
                        <div
                          style={{
                            ...styles.explanationBox,
                            backgroundColor: colors.light,
                            borderColor: colors.border,
                          }}
                        >
                          <p
                            style={{
                              ...styles.explanationText,
                              color: colors.primary,
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
      <section style={styles.summarySection}>
        <h2 style={styles.summaryTitle}>Quick Summary Table</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                {["Use", "Gerund", "Infinitive"].map((header, index) => (
                  <th
                    key={header}
                    style={{
                      ...styles.tableHeader,
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
                      ...styles.tableCell,
                      fontWeight: 600,
                      color: "#1e293b",
                    }}
                  >
                    {row.use}
                  </td>
                  <td
                    style={{
                      ...styles.tableCell,
                      color: "#6366f1",
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    {row.gerund}
                  </td>
                  <td
                    style={{
                      ...styles.tableCell,
                      color: "#10b981",
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
      <div style={styles.rulesContainer}>
        <h3 style={styles.rulesTitle}>🎯 Golden Rules</h3>
        <div style={styles.rulesGrid}>
          <div
            style={{
              ...styles.ruleBox,
              backgroundColor: "#e0e7ff",
              borderColor: "#6366f1",
            }}
          >
            <div style={{ ...styles.ruleTitle, color: "#6366f1" }}>
              GERUND RULES
            </div>
            <div style={{ ...styles.ruleList, color: "#6366f1" }}>
              • Use as <strong>subject</strong> of sentence
              <br />• After specific <strong>verbs</strong> (avoid, enjoy)
              <br />• For <strong>activities</strong> and{" "}
              <strong>experiences</strong>
              <br />• With <strong>prepositions</strong>
            </div>
          </div>
          <div
            style={{
              ...styles.ruleBox,
              backgroundColor: "#d1fae5",
              borderColor: "#10b981",
            }}
          >
            <div style={{ ...styles.ruleTitle, color: "#10b981" }}>
              INFINITIVE RULES
            </div>
            <div style={{ ...styles.ruleList, color: "#10b981" }}>
              • Use for <strong>purpose</strong> (why?)
              <br />• After specific <strong>verbs</strong> (want, decide)
              <br />• For <strong>goals</strong> and <strong>intentions</strong>
              <br />• With <strong>objects</strong> (ask someone to do)
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>
          Gerunds & Infinitives study sheet • Master when to use -ing vs to +
          verb
        </p>
      </footer>
    </main>
  );
}
