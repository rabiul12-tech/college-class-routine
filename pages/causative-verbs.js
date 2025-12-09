// pages/causative-verbs.js
import React, { useState, useEffect } from "react";
import lessonData from "./data/causativeVerbs.json";
import Link from "next/link";

export default function CausativeVerbs() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverCardIndex, setHoverCardIndex] = useState(null);
  const [hoverExampleIndex, setHoverExampleIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Helper functions
  const hexToRgba = (hex, alpha = 1) => {
    const clean = String(hex || "").replace("#", "");
    if (clean.length !== 6) return hex;
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const getColorScheme = (id) => {
    const schemes = {
      1: { primary: "#6366f1", light: "#e0e7ff", border: "#c7d2fe" },
      2: { primary: "#10b981", light: "#d1fae5", border: "#a7f3d0" },
      3: { primary: "#ef4444", light: "#fee2e2", border: "#fecaca" },
      4: { primary: "#8b5cf6", light: "#ede9fe", border: "#ddd6fe" },
    };
    return schemes[id] || schemes[1];
  };

  const renderHighlightedText = (text) => {
    if (!text) return null;

    const verbMap = {
      have: "#6366f1",
      got: "#10b981",
      get: "#10b981",
      make: "#ef4444",
      let: "#8b5cf6",
    };

    const verbs = Object.keys(verbMap).join("|");
    const verbRegex = new RegExp(`\\b(${verbs})\\b`, "gi");

    const nodes = [];
    let lastIndex = 0;
    let match;

    while ((match = verbRegex.exec(text)) !== null) {
      const idx = match.index;
      if (idx > lastIndex) {
        nodes.push(text.slice(lastIndex, idx));
      }
      const matched = match[0];
      const color = verbMap[matched.toLowerCase()] || "#111827";
      nodes.push(
        <span key={`v-${idx}`} style={{ color, fontWeight: 700 }}>
          {matched}
        </span>
      );
      lastIndex = idx + matched.length;
    }
    if (lastIndex < text.length) {
      nodes.push(text.slice(lastIndex));
    }

    const edRegex = /(\b\w+ed\b)/gi;
    const phraseRegex = /(\b\w+\s[a-z]{1,12}\b)/gi;

    const finalNodes = nodes.flatMap((node, i) => {
      if (typeof node !== "string") return node;

      const parts = node.split(edRegex).filter((p) => p !== "");
      return parts.flatMap((part, j) => {
        if (edRegex.test(part)) {
          return (
            <span
              key={`ed-${i}-${j}`}
              style={{ color: "#f59e0b", fontWeight: 700 }}
            >
              {part}
            </span>
          );
        }

        const phraseParts = part.split(phraseRegex).filter((p) => p !== "");
        return phraseParts.map((p, k) => {
          if (phraseRegex.test(p)) {
            return (
              <span
                key={`ph-${i}-${j}-${k}`}
                style={{ color: "#06b6d4", fontWeight: 600 }}
              >
                {p}
              </span>
            );
          }
          return <span key={`txt-${i}-${j}-${k}`}>{p}</span>;
        });
      });
    });

    return finalNodes;
  };

  const verbQuick = [
    { verb: "HAVE", meaning: "Pay/Ask", color: "#6366f1" },
    { verb: "GET", meaning: "Pay/Persuade", color: "#10b981" },
    { verb: "MAKE", meaning: "Force", color: "#ef4444" },
    { verb: "LET", meaning: "Allow", color: "#8b5cf6" },
  ];

  return (
    <main
      style={{
        padding: "clamp(24px, 4vw, 48px) clamp(16px, 3vw, 32px)",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        lineHeight: 1.6,
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.45s ease-in-out",
        fontSize: "16px", // Base font size increased
      }}
    >
      {/* Navigation */}
      <nav style={{ marginBottom: "40px" }}>
        <Link
          href="/qa/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 20px",
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "500",
            color: "#475569",
            transition: "all 0.2s ease",
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#f8fafc")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#ffffff")
          }
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Header */}
      <header style={{ marginBottom: "60px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            marginBottom: "16px",
            fontWeight: 800,
            color: "#1e293b",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          {lessonData.title}
        </h1>
        <p
          style={{
            fontSize: "clamp(18px, 2.5vw, 22px)",
            margin: 0,
            color: "#64748b",
            fontWeight: 500,
            maxWidth: "800px",
            marginInline: "auto",
          }}
        >
          {lessonData.subtitle}
        </p>
      </header>

      {/* Verb Quick Reference */}
      <section
        style={{
          padding: "clamp(24px, 4vw, 32px)",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 12px 40px rgba(2, 6, 23, 0.08)",
          border: "1px solid #e6eefb",
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#334155",
            marginBottom: "28px",
            textAlign: "center",
          }}
        >
          Quick Verb Reference
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "24px",
            textAlign: "center",
          }}
        >
          {verbQuick.map((item, index) => {
            const bg = hexToRgba(item.color, 0.08);
            const border = hexToRgba(item.color, 0.22);
            const shadow = hexToRgba(item.color, 0.12);
            const isHover = hoverCardIndex === index;

            return (
              <div
                key={item.verb}
                role="button"
                tabIndex={0}
                aria-label={`${item.verb} — ${item.meaning}`}
                onMouseEnter={() => setHoverCardIndex(index)}
                onMouseLeave={() => setHoverCardIndex(null)}
                onFocus={() => setHoverCardIndex(index)}
                onBlur={() => setHoverCardIndex(null)}
                style={{
                  padding: "clamp(20px, 3vw, 28px)",
                  backgroundColor: bg,
                  borderRadius: "16px",
                  border: `3px solid ${border}`,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  transform: isHover
                    ? "translateY(-8px) scale(1.02)"
                    : "translateY(0) scale(1)",
                  boxShadow: isHover
                    ? `0 20px 40px ${shadow}`
                    : "0 8px 24px rgba(0, 0, 0, 0.05)",
                  outline: "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(22px, 3vw, 28px)",
                    fontWeight: 800,
                    color: item.color,
                    marginBottom: "12px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {item.verb}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#64748b",
                    fontWeight: 600,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {item.meaning}
                </div>
                {isHover && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${hexToRgba(
                        item.color,
                        0.1
                      )} 0%, transparent 100%)`,
                      zIndex: 1,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Sections */}
      <div style={{ display: "grid", gap: "48px", marginBottom: "60px" }}>
        {lessonData.sections.map((sec, index) => {
          const colors = getColorScheme(sec.id);
          const gradPrimary = hexToRgba(colors.primary, 0.95);

          return (
            <section
              key={sec.id}
              style={{
                padding: "clamp(24px, 4vw, 40px)",
                backgroundColor: "white",
                borderRadius: "20px",
                boxShadow: "0 12px 32px rgba(2, 6, 23, 0.08)",
                border: `1px solid ${colors.border}`,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                opacity: isVisible ? 1 : 0,
                transition: `all 0.5s ease-out ${index * 0.07}s`,
              }}
            >
              {/* Section Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "36px",
                  paddingBottom: "24px",
                  borderBottom: `2px solid ${colors.light}`,
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    width: "clamp(48px, 5vw, 60px)",
                    height: "clamp(48px, 5vw, 60px)",
                    borderRadius: "14px",
                    background: `linear-gradient(135deg, ${gradPrimary} 0%, ${hexToRgba(
                      colors.primary,
                      0.65
                    )} 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 800,
                    fontSize: "clamp(20px, 2.5vw, 24px)",
                    flexShrink: 0,
                    boxShadow: `0 10px 25px ${hexToRgba(colors.primary, 0.15)}`,
                  }}
                >
                  {sec.id}
                </div>

                <div style={{ flex: 1, minWidth: "300px" }}>
                  <h2
                    style={{
                      fontSize: "clamp(26px, 3.5vw, 32px)",
                      fontWeight: 800,
                      color: colors.primary,
                      margin: 0,
                      marginBottom: "16px",
                      lineHeight: 1.2,
                    }}
                  >
                    {sec.heading}
                  </h2>

                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    {sec.structure.map((pattern, i) => (
                      <div
                        key={i}
                        style={{
                          padding: "12px 20px",
                          backgroundColor: colors.light,
                          borderRadius: "12px",
                          border: `2px solid ${colors.border}`,
                          fontSize: "15px",
                          color: colors.primary,
                          fontWeight: 600,
                          fontFamily:
                            "'JetBrains Mono', 'Fira Code', monospace",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {pattern}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Important Note */}
              {sec.importantNote && (
                <div
                  style={{
                    padding: "clamp(20px, 3vw, 28px)",
                    backgroundColor: "#fffbeb",
                    borderRadius: "16px",
                    border: "2px solid #f59e0b",
                    marginBottom: "32px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        color: "#d97706",
                        fontSize: "24px",
                        fontWeight: "700",
                        flexShrink: 0,
                      }}
                    >
                      💡
                    </div>
                    <div>
                      <strong
                        style={{
                          color: "#92400e",
                          display: "block",
                          marginBottom: "8px",
                          fontSize: "18px",
                        }}
                      >
                        Important Note
                      </strong>
                      <p
                        style={{
                          color: "#92400e",
                          margin: 0,
                          fontSize: "16px",
                          lineHeight: 1.6,
                        }}
                      >
                        {sec.importantNote}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Grid */}
              <div
                style={{
                  display: "grid",
                  gap: "40px",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  alignItems: "start",
                }}
              >
                {/* Examples */}
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: colors.primary,
                      marginBottom: "24px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span>Examples</span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#94a3b8",
                        fontWeight: 500,
                        textTransform: "none",
                      }}
                    >
                      ({sec.examples.length})
                    </span>
                  </h3>
                  <div style={{ display: "grid", gap: "20px" }}>
                    {sec.examples.map((ex, i) => {
                      const key = `${sec.id}-${i}`;
                      const isHover = hoverExampleIndex === key;
                      return (
                        <div
                          key={key}
                          onMouseEnter={() => setHoverExampleIndex(key)}
                          onMouseLeave={() => setHoverExampleIndex(null)}
                          onFocus={() => setHoverExampleIndex(key)}
                          onBlur={() => setHoverExampleIndex(null)}
                          tabIndex={0}
                          style={{
                            padding:
                              "clamp(20px, 3vw, 24px) clamp(20px, 3vw, 28px)",
                            backgroundColor: isHover ? "#f1f5f9" : "#f8fafc",
                            borderRadius: "14px",
                            border: `2px solid ${
                              isHover ? colors.border : "#e2e8f0"
                            }`,
                            fontSize: "16px",
                            fontFamily: "inherit",
                            color: "#0f172a",
                            transition:
                              "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                            transform: isHover
                              ? "translateX(8px)"
                              : "translateX(0)",
                            cursor: "default",
                            position: "relative",
                            overflowWrap: "break-word",
                            lineHeight: 1.7,
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              bottom: 0,
                              width: "6px",
                              backgroundColor: colors.primary,
                              borderRadius: "6px 0 0 6px",
                            }}
                          />
                          <div style={{ marginLeft: "20px" }}>
                            {renderHighlightedText(ex)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Explanation */}
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: colors.primary,
                      marginBottom: "24px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Explanation
                  </h3>
                  <div
                    style={{
                      padding: "clamp(28px, 4vw, 36px)",
                      backgroundColor: colors.light,
                      borderRadius: "16px",
                      border: `2px solid ${colors.border}`,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "17px",
                        lineHeight: 1.7,
                        color: colors.primary,
                        margin: 0,
                        fontWeight: 500,
                      }}
                    >
                      {sec.explanation}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Summary Table */}
      <section
        style={{
          padding: "clamp(32px, 5vw, 48px)",
          backgroundColor: "white",
          borderRadius: "24px",
          boxShadow: "0 16px 40px rgba(2, 6, 23, 0.08)",
          border: "1px solid #ecf2ff",
          marginBottom: "60px",
          overflow: "hidden",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 36px)",
            marginBottom: "40px",
            fontWeight: 800,
            color: "#1e293b",
            textAlign: "center",
            position: "relative",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mini Review
          </span>
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(2, 6, 23, 0.06)",
              fontSize: "16px",
            }}
          >
            <thead>
              <tr>
                {["Purpose", "Structure", "Example"].map((header, idx) => (
                  <th
                    key={header}
                    style={{
                      textAlign: "left",
                      padding: "20px 24px",
                      backgroundColor: "#4f46e5",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "15px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      borderRight:
                        idx < 2
                          ? `1px solid ${hexToRgba("#6366f1", 0.2)}`
                          : "none",
                      whiteSpace: "nowrap",
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
                    transition: "background-color 0.15s ease",
                  }}
                >
                  <td
                    style={{
                      padding: "20px 24px",
                      borderBottom: "1px solid #e8eef6",
                      fontWeight: 600,
                      color: "#1e293b",
                      fontSize: "16px",
                      verticalAlign: "top",
                    }}
                  >
                    {row.purpose}
                  </td>
                  <td
                    style={{
                      padding: "20px 24px",
                      borderBottom: "1px solid #e8eef6",
                      color: "#475569",
                      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                      fontSize: "15px",
                      fontWeight: 500,
                      verticalAlign: "top",
                    }}
                  >
                    {row.structure}
                  </td>
                  <td
                    style={{
                      padding: "20px 24px",
                      borderBottom: "1px solid #e8eef6",
                      verticalAlign: "top",
                    }}
                  >
                    <code
                      style={{
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        backgroundColor: "#f1f5f9",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        fontSize: "15px",
                        color: "#1e293b",
                        border: "1px solid #e2e8f0",
                        display: "inline-block",
                        lineHeight: 1.5,
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

      {/* Key Patterns */}
      <section
        style={{
          padding: "clamp(28px, 4vw, 40px)",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 12px 32px rgba(2, 6, 23, 0.06)",
          border: "1px solid #e6eefb",
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h3
          style={{
            fontSize: "24px",
            fontWeight: 800,
            color: "#1e293b",
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <span>🎯</span>
          <span>Key Patterns to Remember</span>
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "28px",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              padding: "28px",
              backgroundColor: "#f0f9ff",
              borderRadius: "16px",
              border: "2px solid #bae6fd",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <strong
              style={{
                color: "#0369a1",
                display: "block",
                marginBottom: "12px",
                fontSize: "18px",
              }}
            >
              HAVE/GET + V3
            </strong>
            <span style={{ color: "#64748b", fontSize: "16px" }}>
              Paying for professional services or asking someone to do something
            </span>
          </div>

          <div
            style={{
              padding: "28px",
              backgroundColor: "#fef3c7",
              borderRadius: "16px",
              border: "2px solid #fde68a",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <strong
              style={{
                color: "#92400e",
                display: "block",
                marginBottom: "12px",
                fontSize: "18px",
              }}
            >
              MAKE/LET + V1
            </strong>
            <span style={{ color: "#64748b", fontSize: "16px" }}>
              Forcing someone to do something or giving permission
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: "80px",
          textAlign: "center",
          padding: "clamp(32px, 5vw, 48px)",
          color: "#94a3b8",
          fontSize: "16px",
          borderTop: "2px solid #eef3fb",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
        }}
      >
        <p
          style={{
            marginBottom: "16px",
            fontWeight: 600,
            color: "#475569",
            fontSize: "18px",
          }}
        >
          Causative Verbs Study Guide
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          <span style={{ color: "#6366f1", fontWeight: 600 }}>HAVE</span>
          <span style={{ color: "#10b981", fontWeight: 600 }}>GET</span>
          <span style={{ color: "#ef4444", fontWeight: 600 }}>MAKE</span>
          <span style={{ color: "#8b5cf6", fontWeight: 600 }}>LET</span>
        </div>
        <p style={{ margin: 0, opacity: 0.8 }}>
          Master these four verbs to express causation in English
        </p>
      </footer>
    </main>
  );
}
