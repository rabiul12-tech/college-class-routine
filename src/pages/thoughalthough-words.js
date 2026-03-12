// pages/contrast-words.js
import { useState, useEffect } from "react";
import lessonData from "./data/thoughalthough.json";
import Link from "next/link";
export default function ContrastWords() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main
      style={{
        padding: "clamp(20px, 4vw, 32px) clamp(16px, 3vw, 24px)",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        maxWidth: "min(900px, 95vw)",
        margin: "0 auto",
        lineHeight: 1.6,
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <nav style={{ marginBottom: "clamp(24px, 5vw, 32px)" }}>
        <Link
          href="/qa/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "clamp(6px, 1.5vw, 8px) clamp(12px, 2vw, 16px)",
            backgroundColor: "#f8f9fa",
            border: "1px solid #dee2e6",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "clamp(16px, 4vw, 27px)",
            fontWeight: "500",
            color: "#495057",
            transition: "all 0.2s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#e9ecef";
            e.target.style.borderColor = "#ced4da";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#f8f9fa";
            e.target.style.borderColor = "#dee2e6";
          }}
        >
          ← Back Home
        </Link>
      </nav>

      {/* Header */}
      <header
        style={{
          marginBottom: "clamp(32px, 6vw, 40px)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 39px)",
            marginBottom: "clamp(4px, 1vw, 8px)",
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
            fontSize: "clamp(18px, 3.5vw, 29px)",
            margin: 0,
            color: "#64748b",
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          {lessonData.subtitle}
        </p>
      </header>

      {/* Sections Grid */}
      <div
        style={{
          display: "grid",
          gap: "clamp(16px, 4vw, 24px)",
          marginBottom: "clamp(32px, 6vw, 40px)",
        }}
      >
        {lessonData.sections.map((sec, index) => (
          <section
            key={sec.id}
            style={{
              padding: "clamp(20px, 4vw, 28px)",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              border: "1px solid #e2e8f0",
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              opacity: isVisible ? 1 : 0,
              transition: `all 0.5s ease-out ${index * 0.1}s`,
              overflow: "hidden",
            }}
          >
            {/* Section Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "clamp(16px, 4vw, 24px)",
                paddingBottom: "clamp(12px, 3vw, 16px)",
                borderBottom: "2px solid #f1f5f9",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "clamp(36px, 8vw, 42px)",
                  height: "clamp(36px, 8vw, 42px)",
                  borderRadius: "8px",
                  background:
                    sec.id === 6
                      ? "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                      : "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "clamp(18px, 4vw, 27px)",
                  flexShrink: 0,
                }}
              >
                {sec.id}
              </div>
              <h2
                style={{
                  fontSize: "clamp(22px, 4.5vw, 33px)",
                  fontWeight: 600,
                  color: sec.id === 6 ? "#d97706" : "#1e293b",
                  margin: 0,
                  lineHeight: 1.2,
                  flex: 1,
                  minWidth: "200px",
                }}
              >
                {sec.heading}
              </h2>
            </div>

            {/* Content Grid */}
            <div
              style={{
                display: "grid",
                gap: "clamp(16px, 4vw, 24px)",
                gridTemplateColumns:
                  sec.id === 6
                    ? "repeat(auto-fit, minmax(min(300px, 100%), 1fr))"
                    : "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
                alignItems: "start",
              }}
            >
              {/* Structure */}
              <div>
                <h3
                  style={{
                    fontSize: "clamp(18px, 3.5vw, 26px)",
                    fontWeight: 600,
                    color: "#475569",
                    marginBottom: "clamp(8px, 2vw, 12px)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Structure
                </h3>
                <div style={{ display: "grid", gap: "clamp(6px, 1.5vw, 8px)" }}>
                  {sec.structure.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        padding:
                          "clamp(10px, 2vw, 12px) clamp(12px, 2vw, 16px)",
                        backgroundColor: "#f8fafc",
                        borderRadius: "8px",
                        border: "1px solid #e2e8f0",
                        borderLeft: "4px solid #6366f1",
                        fontSize: "clamp(16px, 4vw, 27px)",
                        color: "#475569",
                        fontWeight: 500,
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
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
                    fontSize: "clamp(18px, 3.5vw, 26px)",
                    fontWeight: 600,
                    color: "#475569",
                    marginBottom: "clamp(8px, 2vw, 12px)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Examples
                </h3>
                <div style={{ display: "grid", gap: "clamp(8px, 2vw, 10px)" }}>
                  {sec.examples.map((ex, i) => (
                    <div
                      key={i}
                      style={{
                        padding:
                          "clamp(12px, 2.5vw, 14px) clamp(12px, 2vw, 16px)",
                        backgroundColor: sec.id === 6 ? "#fffbeb" : "#f8fafc",
                        borderRadius: "8px",
                        border:
                          sec.id === 6
                            ? "1px solid #fed7aa"
                            : "1px solid #e2e8f0",
                        fontSize: "clamp(16px, 4vw, 28px)",
                        fontFamily:
                          sec.id === 6
                            ? "inherit"
                            : "'JetBrains Mono', 'Fira Code', monospace",
                        color: sec.id === 6 ? "#92400e" : "#1e293b",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        lineHeight: 1.4,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateX(4px)";
                        e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateX(0)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      {ex}
                    </div>
                  ))}
                </div>
              </div>

              {/* Explanation - Hidden for summary section */}
              {sec.id !== 6 && (
                <div>
                  <h3
                    style={{
                      fontSize: "clamp(18px, 3.5vw, 26px)",
                      fontWeight: 600,
                      color: "#475569",
                      marginBottom: "clamp(8px, 2vw, 12px)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Short Explanation
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(16px, 4vw, 28px)",
                      lineHeight: 1.6,
                      color: "#475569",
                      padding: "clamp(12px, 3vw, 16px)",
                      backgroundColor: "#f0f9ff",
                      borderRadius: "8px",
                      border: "1px solid #bae6fd",
                      margin: 0,
                      wordBreak: "break-word",
                    }}
                  >
                    {sec.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* Special treatment for summary section */}
            {sec.id === 6 && (
              <div
                style={{
                  marginTop: "clamp(16px, 4vw, 20px)",
                  padding: "clamp(16px, 4vw, 20px)",
                  backgroundColor: "#fffbeb",
                  borderRadius: "8px",
                  border: "2px solid #fed7aa",
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(18px, 3.5vw, 26px)",
                    fontWeight: 600,
                    color: "#92400e",
                    marginBottom: "clamp(8px, 2vw, 12px)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Key Takeaway
                </h3>
                <p
                  style={{
                    fontSize: "clamp(16px, 4vw, 28px)",
                    lineHeight: 1.6,
                    color: "#92400e",
                    margin: 0,
                    fontWeight: 500,
                    wordBreak: "break-word",
                  }}
                >
                  {sec.explanation}
                </p>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Quick Reference Card */}
      <div
        style={{
          padding: "clamp(20px, 4vw, 24px)",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          border: "2px solid #e2e8f0",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(18px, 3.5vw, 29px)",
            fontWeight: 600,
            color: "#1e293b",
            marginBottom: "clamp(8px, 2vw, 12px)",
            lineHeight: 1.2,
          }}
        >
          🎯 Quick Reference
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "clamp(12px, 3vw, 16px)",
            fontSize: "clamp(16px, 4vw, 27px)",
          }}
        >
          <div
            style={{
              padding: "clamp(10px, 2vw, 12px)",
              backgroundColor: "#f0f9ff",
              borderRadius: "6px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "80px",
            }}
          >
            <strong
              style={{
                color: "#0369a1",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Noun/Gerund:
            </strong>
            <span>in spite of / despite</span>
          </div>
          <div
            style={{
              padding: "clamp(10px, 2vw, 12px)",
              backgroundColor: "#f0f9ff",
              borderRadius: "6px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "80px",
            }}
          >
            <strong
              style={{
                color: "#0369a1",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Clause:
            </strong>
            <span>although / even though / though</span>
          </div>
          <div
            style={{
              padding: "clamp(10px, 2vw, 12px)",
              backgroundColor: "#f0f9ff",
              borderRadius: "6px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "80px",
            }}
          >
            <strong
              style={{
                color: "#0369a1",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Strongest:
            </strong>
            <span>even though</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "clamp(32px, 6vw, 48px)",
          textAlign: "center",
          padding: "clamp(16px, 4vw, 24px)",
          color: "#94a3b8",
          fontSize: "clamp(14px, 3vw, 27px)",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <p style={{ margin: 0, lineHeight: 1.4 }}>
          Contrast words study sheet • Structure → Examples → Explanation
        </p>
      </footer>
    </main>
  );
}
