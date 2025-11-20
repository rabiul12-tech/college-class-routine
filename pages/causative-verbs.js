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

  // Helpers
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
      1: { primary: "#6366f1", light: "#e0e7ff", border: "#c7d2fe" }, // have/get - indigo
      2: { primary: "#10b981", light: "#d1fae5", border: "#a7f3d0" }, // ask/persuade - emerald
      3: { primary: "#ef4444", light: "#fee2e2", border: "#fecaca" }, // force - red
      4: { primary: "#8b5cf6", light: "#ede9fe", border: "#ddd6fe" }, // permission - violet
    };
    return schemes[id] || schemes[1];
  };

  // Render string with inline highlights as React nodes (safe)
  function renderHighlightedText(text) {
    if (!text) return null;

    // Primary verb colors
    const verbMap = {
      have: "#6366f1",
      got: "#10b981",
      get: "#10b981",
      make: "#ef4444",
      let: "#8b5cf6",
    };

    // Regex: verbs (word boundary), -ed words, and short phrase pattern (word + word)
    // We'll process verbs first, then ED words as a secondary pass on plain strings.
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

    // Secondary pass: highlight simple -ed words inside string fragments
    // We'll map nodes array: for strings, split further by /(\b\w+ed\b)/i
    const edRegex = /(\b\w+ed\b)/gi;
    const phraseRegex = /(\b\w+\s[a-z]{1,12}\b)/gi; // simple short phrase heuristic

    const finalNodes = nodes.flatMap((node, i) => {
      if (typeof node !== "string") return node;

      // First split by -ed words
      const parts = node.split(edRegex).filter((p) => p !== "");
      return parts.flatMap((part, j) => {
        if (edRegex.test(part)) {
          // it's an -ed word
          return (
            <span
              key={`ed-${i}-${j}`}
              style={{ color: "#f59e0b", fontWeight: 700 }}
            >
              {part}
            </span>
          );
        }

        // Next, for remaining plain text, optionally highlight short phrase patterns
        // We'll split by phraseRegex
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
  }

  const verbQuick = [
    { verb: "HAVE", meaning: "Pay/Ask", color: "#6366f1" },
    { verb: "GET", meaning: "Pay/Persuade", color: "#10b981" },
    { verb: "MAKE", meaning: "Force", color: "#ef4444" },
    { verb: "LET", meaning: "Allow", color: "#8b5cf6" },
  ];

  return (
    <main
      style={{
        padding: "32px 24px",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        maxWidth: "1100px",
        margin: "0 auto",
        lineHeight: 1.6,
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.45s ease-in-out",
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
      <header style={{ marginBottom: "48px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "32px",
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

      {/* Verb Quick Reference */}
      <div
        style={{
          padding: "28px",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(2,6,23,0.06)",
          border: "1px solid #e6eefb",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "20px",
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
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    // space for future action
                  }
                }}
                style={{
                  padding: "20px",
                  backgroundColor: bg,
                  borderRadius: "12px",
                  border: `2px solid ${border}`,
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  cursor: "pointer",
                  transform: isHover ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: isHover ? `0 10px 30px ${shadow}` : "none",
                  outline: "none",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: item.color,
                    marginBottom: 8,
                  }}
                >
                  {item.verb}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    fontWeight: 600,
                  }}
                >
                  {item.meaning}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sections */}
      <div style={{ display: "grid", gap: "36px", marginBottom: "48px" }}>
        {lessonData.sections.map((sec, index) => {
          const colors = getColorScheme(sec.id);
          const gradPrimary = hexToRgba(colors.primary, 0.95);
          const cardBorder = colors.border;

          return (
            <section
              key={sec.id}
              style={{
                padding: "32px",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 6px 24px rgba(2,6,23,0.06)",
                border: `1px solid ${cardBorder}`,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                opacity: isVisible ? 1 : 0,
                transition: `all 0.48s ease-out ${index * 0.06}s`,
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
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: `linear-gradient(135deg, ${gradPrimary} 0%, ${hexToRgba(
                      colors.primary,
                      0.65
                    )} 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "16px",
                    marginRight: "16px",
                    flexShrink: 0,
                    boxShadow: `0 6px 18px ${hexToRgba(colors.primary, 0.12)}`,
                  }}
                >
                  {sec.id}
                </div>

                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: colors.primary,
                      margin: 0,
                      marginBottom: 12,
                    }}
                  >
                    {sec.heading}
                  </h2>

                  <div
                    style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
                  >
                    {sec.structure.map((pattern, i) => (
                      <div
                        key={i}
                        style={{
                          padding: "10px 16px",
                          backgroundColor: colors.light,
                          borderRadius: "10px",
                          border: `1px solid ${colors.border}`,
                          fontSize: "14px",
                          color: colors.primary,
                          fontWeight: 600,
                          fontFamily: "'JetBrains Mono', monospace",
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
                    padding: "20px",
                    backgroundColor: "#fef3c7",
                    borderRadius: "12px",
                    border: "1px solid #f59e0b",
                    marginBottom: "28px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        color: "#d97706",
                        fontSize: "18px",
                        fontWeight: "700",
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
                        }}
                      >
                        Important Note
                      </strong>
                      <p
                        style={{
                          color: "#92400e",
                          margin: 0,
                          fontSize: "15px",
                          lineHeight: 1.5,
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
                  gap: "32px",
                  gridTemplateColumns: "1fr 1fr",
                  alignItems: "start",
                }}
              >
                {/* Examples */}
                <div>
                  <h3
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
                  </h3>
                  <div style={{ display: "grid", gap: "16px" }}>
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
                            padding: "18px 20px 18px 28px",
                            backgroundColor: isHover ? "#f1f5f9" : "#f8fafc",
                            borderRadius: "12px",
                            border: "1px solid #e2e8f0",
                            fontSize: "15px",
                            fontFamily: "inherit",
                            color: "#0f172a",
                            transition:
                              "transform 0.18s ease, background-color 0.18s ease",
                            transform: isHover
                              ? "translateX(6px)"
                              : "translateX(0)",
                            cursor: "default",
                            position: "relative",
                            overflowWrap: "break-word",
                            whiteSpace: "pre-wrap",
                            lineHeight: 1.6,
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: 12,
                              top: 10,
                              bottom: 10,
                              width: 6,
                              backgroundColor: colors.primary,
                              borderRadius: "6px 0 0 6px",
                            }}
                          />
                          <div style={{ marginLeft: 18 }}>
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
                      fontSize: "15px",
                      fontWeight: 600,
                      color: colors.primary,
                      marginBottom: "16px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Short Explanation
                  </h3>
                  <div
                    style={{
                      padding: "28px",
                      backgroundColor: colors.light,
                      borderRadius: "12px",
                      border: `1px solid ${colors.border}`,
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
          padding: "40px 32px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(2,6,23,0.06)",
          border: "1px solid #ecf2ff",
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
          Mini Review
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(2,6,23,0.06)",
            }}
          >
            <thead>
              <tr>
                {["Purpose", "Structure", "Example"].map((header, idx) => (
                  <th
                    key={header}
                    style={{
                      textAlign: "left",
                      padding: "16px 20px",
                      backgroundColor: "#4f46e5",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      borderRight:
                        idx < 2
                          ? `1px solid ${hexToRgba("#6366f1", 0.18)}`
                          : "none",
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
                      padding: "16px 20px",
                      borderBottom: "1px solid #e8eef6",
                      fontWeight: 600,
                      color: "#1e293b",
                      fontSize: "15px",
                    }}
                  >
                    {row.purpose}
                  </td>
                  <td
                    style={{
                      padding: "16px 20px",
                      borderBottom: "1px solid #e8eef6",
                      color: "#475569",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    {row.structure}
                  </td>
                  <td
                    style={{
                      padding: "16px 20px",
                      borderBottom: "1px solid #e8eef6",
                    }}
                  >
                    <code
                      style={{
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        backgroundColor: "#f1f5f9",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        fontSize: "14px",
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

      {/* Quick Reference */}
      <div
        style={{
          padding: "28px",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(2,6,23,0.04)",
          border: "1px solid #e6eefb",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#1e293b",
            marginBottom: "20px",
          }}
        >
          🎯 Key Patterns
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
            gap: "20px",
            fontSize: "15px",
          }}
        >
          <div
            style={{
              padding: "20px",
              backgroundColor: "#f0f9ff",
              borderRadius: "12px",
              border: "1px solid #bae6fd",
            }}
          >
            <strong
              style={{
                color: "#0369a1",
                display: "block",
                marginBottom: "8px",
              }}
            >
              HAVE/GET + V3
            </strong>
            <span style={{ color: "#64748b" }}>Paying for services</span>
          </div>

          <div
            style={{
              padding: "20px",
              backgroundColor: "#f0f9ff",
              borderRadius: "12px",
              border: "1px solid #bae6fd",
            }}
          >
            <strong
              style={{
                color: "#0369a1",
                display: "block",
                marginBottom: "8px",
              }}
            >
              MAKE/LET + V1
            </strong>
            <span style={{ color: "#64748b" }}>Force or permission</span>
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
          borderTop: "1px solid #eef3fb",
        }}
      >
        <p>Causative Verbs study sheet • HAVE • GET • MAKE • LET</p>
      </footer>
    </main>
  );
}
