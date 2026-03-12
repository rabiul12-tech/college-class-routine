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
      1: { primary: "#6366f1", light: "#e0e7ff", border: "#c7d2fe" },
      2: { primary: "#10b981", light: "#d1fae5", border: "#a7f3d0" },
      3: { primary: "#f59e0b", light: "#fef3c7", border: "#fcd34d" },
      4: { primary: "#ef4444", light: "#fee2e2", border: "#fecaca" },
      5: { primary: "#8b5cf6", light: "#ede9fe", border: "#ddd6fe" },
      6: { primary: "#06b6d4", light: "#cffafe", border: "#a5f3fc" },
    };
    return schemes[id] || schemes[1];
  };

  const highlightPrepositions = (text) => {
    let highlighted = text;
    highlighted = highlighted.replace(
      /\bto\b/g,
      '<strong style="color: #6366f1">to</strong>'
    );
    highlighted = highlighted.replace(
      /\bfor\b/g,
      '<strong style="color: #10b981">for</strong>'
    );
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
      fontSize: "clamp(26px, 3vw, 18px)",
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
      gap: "clamp(24px, 6vw, 40px)",
      flexWrap: "wrap",
    },
    comparisonItem: {
      textAlign: "center",
      minWidth: "180px",
    },
    comparisonTitle: {
      fontSize: "clamp(20px, 4vw, 24px)",
      fontWeight: 700,
      marginBottom: "8px",
    },
    comparisonDesc: {
      fontSize: "14px",
      color: "#64748b",
      maxWidth: "200px",
      margin: "0 auto",
    },
    vsText: {
      fontSize: "clamp(24px, 4vw, 28px)",
      color: "#c7d2fe",
      fontWeight: 300,
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
      border: "2px solid",
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      opacity: isVisible ? 1 : 0,
      transition: "all 0.5s ease-out",
    },
    sectionHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "clamp(24px, 4vw, 32px)",
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
      background: "linear-gradient(135deg, #000 0%, #00099 100%)",
    },
    sectionHeading: {
      fontSize: "clamp(20px, 4vw, 26px)",
      fontWeight: 700,
      margin: 0,
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
      gap: "clamp(20px, 4vw, 28px)",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      alignItems: "start",
    },
    column: {
      minHeight: "200px",
    },
    columnTitle: {
      fontSize: "24px",
      fontWeight: 600,
      marginBottom: "12px",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    structureItem: {
      padding: "16px 20px",
      borderRadius: "10px",
      border: "2px solid",
      fontSize: "25px",
      fontWeight: 600,
      fontFamily: "'JetBrains Mono', monospace",
      textAlign: "center",
      marginBottom: "10px",
      "&:last-child": {
        marginBottom: 0,
      },
    },
    exampleItem: {
      padding: "18px 20px",
      backgroundColor: "white",
      borderRadius: "10px",
      border: "2px solid #e2e8f0",
      fontSize: "26px",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      color: "#1e293b",
      transition: "all 0.2s ease",
      cursor: "pointer",
      position: "relative",
      marginBottom: "14px",
      "&:last-child": {
        marginBottom: 0,
      },
      "&:hover": {
        transform: "translateX(8px)",
        backgroundColor: "#f1f5f9",
      },
    },
    exampleDecorator: {
      position: "absolute",
      left: "0",
      top: "0",
      bottom: "0",
      width: "6px",
      borderRadius: "6px 0 0 6px",
    },
    explanationBox: {
      padding: "24px",
      borderRadius: "10px",
      border: "2px solid",
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
    explanationText: {
      fontSize: "25px",
      lineHeight: 1.6,
      color: "#000",
      margin: 0,
      fontWeight: 500,
    },
    specialNote: {
      marginTop: "16px",
      padding: "16px",
      backgroundColor: "#fef3c7",
      borderRadius: "8px",
      border: "2px solid #f59e0b",
    },
    specialNoteInner: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
    },
    noteIcon: {
      color: "#d97706",
      fontSize: "16px",
      fontWeight: "bold",
    },
    noteTitle: {
      color: "#92400e",
      display: "block",
      marginBottom: "4px",
      fontSize: "13px",
      fontWeight: "bold",
    },
    noteText: {
      color: "#92400e",
      margin: 0,
      fontSize: "24px",
      lineHeight: 1.4,
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
      minWidth: "700px",
    },
    tableHeader: {
      textAlign: "left",
      padding: "20px 16px",
      backgroundColor: "#4f46e5",
      color: "white",
      fontWeight: 600,
      fontSize: "24px",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    tableCell: {
      padding: "18px 16px",
      borderBottom: "1px solid #e2e8f0",
      fontSize: "24px",
    },
    exampleCode: {
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      backgroundColor: "#f1f5f9",
      padding: "8px 12px",
      borderRadius: "8px",
      fontSize: "23px",
      color: "#1e293b",
      border: "1px solid #e2e8f0",
      display: "inline-block",
    },
    rulesContainer: {
      padding: "clamp(24px, 4vw, 32px)",
      backgroundColor: "white",
      borderRadius: "26px",
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
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "24px",
      fontSize: "25px",
    },
    ruleBox: {
      padding: "clamp(30px, 3vw, 34px)",
      borderRadius: "12px",
      border: "3px solid",
    },
    ruleTitle: {
      color: "#000",
      display: "block",
      marginBottom: "8px",
      fontSize: "16px",
      fontWeight: "bold",
    },
    ruleDesc: {
      color: "#000",
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
              TO
            </div>
            <div style={styles.comparisonDesc}>
              Purpose (action) • Destination • Opinion
            </div>
          </div>
          <div style={styles.vsText}>vs</div>
          <div style={styles.comparisonItem}>
            <div style={{ ...styles.comparisonTitle, color: "#10b981" }}>
              FOR
            </div>
            <div style={styles.comparisonDesc}>
              Purpose (noun) • Function • Benefit • Helping
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
                borderColor: colors.border,
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
                <h2 style={{ ...styles.sectionHeading, color: colors.primary }}>
                  {section.heading}
                </h2>
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
                                  ...styles.exampleDecorator,
                                  backgroundColor: colors.primary,
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

                        {/* Special Note */}
                        {sub.specialNote && (
                          <div style={styles.specialNote}>
                            <div style={styles.specialNoteInner}>
                              <div style={styles.noteIcon}>💡</div>
                              <div>
                                <div style={styles.noteTitle}>Note</div>
                                <p style={styles.noteText}>{sub.specialNote}</p>
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
      <section style={styles.summarySection}>
        <h2 style={styles.summaryTitle}>Quick Reference Table</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                {["Meaning", "Use", "Structure", "Example"].map(
                  (header, index) => (
                    <th
                      key={header}
                      style={{
                        ...styles.tableHeader,
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
                      ...styles.tableCell,
                      fontWeight: 600,
                      color: "#1e293b",
                    }}
                  >
                    {row.meaning}
                  </td>
                  <td style={{ ...styles.tableCell, color: "#475569" }}>
                    {row.use}
                  </td>
                  <td
                    style={{
                      ...styles.tableCell,
                      color: "#475569",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "23px",
                      fontWeight: 500,
                    }}
                  >
                    {row.structure}
                  </td>
                  <td style={styles.tableCell}>
                    <code style={styles.exampleCode}>{row.example}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Golden Rules */}
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
            <strong style={{ ...styles.ruleTitle, color: "#6366f1" }}>
              TO + Verb 1
            </strong>
            <span style={{ ...styles.ruleDesc, color: "#6366f1" }}>
              For purpose (action) and destination
            </span>
          </div>
          <div
            style={{
              ...styles.ruleBox,
              backgroundColor: "#d1fae5",
              borderColor: "#10b981",
            }}
          >
            <strong style={{ ...styles.ruleTitle, color: "#10b981" }}>
              FOR + Noun/Ing
            </strong>
            <span style={{ ...styles.ruleDesc, color: "#10b981" }}>
              For purpose (noun), function, and helping
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>TO vs. FOR study sheet • Clear preposition patterns</p>
      </footer>
    </main>
  );
}
