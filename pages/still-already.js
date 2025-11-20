// pages/time-adverbs.js
import { useState, useEffect } from "react";
import lessonData from "./data/timeAdverbs.json";
import Link from "next/link";
export default function TimeAdverbs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getColorScheme = (id) => {
    const schemes = {
      1: { primary: "#6366f1", light: "#e0e7ff", border: "#c7d2fe" }, // still - indigo
      2: { primary: "#10b981", light: "#d1fae5", border: "#a7f3d0" }, // already - emerald
      3: { primary: "#f59e0b", light: "#fef3c7", border: "#fcd34d" }, // just - amber
      4: { primary: "#ef4444", light: "#fee2e2", border: "#fecaca" }, // yet - red
    };
    return schemes[id] || schemes[1];
  };

  return (
    <main
      style={{
        padding: "32px 24px",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        maxWidth: "1000px",
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

      {/* Sections Grid */}
      <div
        style={{
          display: "grid",
          gap: "32px",
          marginBottom: "48px",
        }}
      >
        {lessonData.sections.map((sec, index) => {
          const colors = getColorScheme(sec.id);
          return (
            <section
              key={sec.id}
              style={{
                padding: "32px",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: `2px solid ${colors.border}`,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                opacity: isVisible ? 1 : 0,
                transition: `all 0.5s ease-out ${index * 0.1}s`,
              }}
            >
              {/* Section Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
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
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}99 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "16px",
                    marginRight: "16px",
                    boxShadow: `0 4px 12px ${colors.primary}40`,
                  }}
                >
                  {sec.id}
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: colors.primary,
                      margin: 0,
                      marginBottom: "4px",
                    }}
                  >
                    {sec.heading}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    {sec.structure.slice(0, 2).map((pattern, i) => (
                      <span
                        key={i}
                        style={{
                          padding: "4px 8px",
                          backgroundColor: colors.light,
                          borderRadius: "6px",
                          fontSize: "12px",
                          color: colors.primary,
                          fontWeight: 500,
                        }}
                      >
                        {pattern}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Grid */}
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
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: colors.primary,
                      marginBottom: "16px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Structure
                  </h3>
                  <div style={{ display: "grid", gap: "12px" }}>
                    {sec.structure.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          padding: "16px",
                          backgroundColor: colors.light,
                          borderRadius: "10px",
                          border: `2px solid ${colors.border}`,
                          fontSize: "15px",
                          color: colors.primary,
                          fontWeight: 600,
                          transition: "all 0.2s ease",
                          cursor: "pointer",
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
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: colors.primary,
                      marginBottom: "16px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Examples
                  </h3>
                  <div style={{ display: "grid", gap: "14px" }}>
                    {sec.examples.map((ex, i) => (
                      <div
                        key={i}
                        style={{
                          padding: "16px",
                          backgroundColor: "#f8fafc",
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
                          e.target.style.backgroundColor = "#f8fafc";
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: "-8px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "4px",
                            height: "60%",
                            backgroundColor: colors.primary,
                            borderRadius: "2px",
                          }}
                        />
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explanation */}
                <div>
                  <h3
                    style={{
                      fontSize: "14px",
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
                      padding: "24px",
                      backgroundColor: colors.light,
                      borderRadius: "12px",
                      border: `2px solid ${colors.border}`,
                      position: "relative",
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

      {/* Comparison Table */}
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
          Quick Comparison
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {lessonData.comparison.map((item, index) => {
            const colors = getColorScheme(index + 1);
            return (
              <div
                key={item.word}
                style={{
                  padding: "28px 24px",
                  backgroundColor: colors.light,
                  borderRadius: "16px",
                  border: `3px solid ${colors.border}`,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 12px 32px ${colors.primary}20`;
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
                    color: colors.primary,
                    marginBottom: "12px",
                  }}
                >
                  {item.word}
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    color: colors.primary,
                    marginBottom: "16px",
                    opacity: 0.9,
                  }}
                >
                  {item.meaning}
                </div>
                <div
                  style={{
                    padding: "12px 16px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    border: `2px solid ${colors.border}`,
                    fontSize: "15px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#1e293b",
                  }}
                >
                  {item.example}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Reference */}
      <div
        style={{
          padding: "28px",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          border: "2px solid #e2e8f0",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#1e293b",
            marginBottom: "16px",
          }}
        >
          🎯 Key Patterns
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            fontSize: "15px",
          }}
        >
          <div
            style={{
              padding: "20px",
              backgroundColor: "#f0f9ff",
              borderRadius: "12px",
              border: "2px solid #bae6fd",
            }}
          >
            <strong
              style={{
                color: "#0369a1",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Position Matters:
            </strong>
            <span style={{ color: "#64748b" }}>
              still/already/just before main verb
            </span>
          </div>
          <div
            style={{
              padding: "20px",
              backgroundColor: "#f0f9ff",
              borderRadius: "12px",
              border: "2px solid #bae6fd",
            }}
          >
            <strong
              style={{
                color: "#0369a1",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Yet at the End:
            </strong>
            <span style={{ color: "#64748b" }}>
              Used in negatives and questions
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
        <p>
          Time adverbs study sheet • Clear structure patterns for still,
          already, just, yet
        </p>
      </footer>
    </main>
  );
}
