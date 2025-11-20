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
        padding: "32px 24px",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        maxWidth: "900px",
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
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            marginBottom: "8px",
            fontWeight: 700,
            color: "#1e293b",
            letterSpacing: "-0.02em",
          }}
        >
          {lessonData.title}
        </h1>
        <p
          style={{
            fontSize: "16px",
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
          gap: "24px",
          marginBottom: "40px",
        }}
      >
        {lessonData.sections.map((sec, index) => (
          <section
            key={sec.id}
            style={{
              padding: "28px",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              border: "1px solid #e2e8f0",
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
                marginBottom: "24px",
                paddingBottom: "16px",
                borderBottom: "2px solid #f1f5f9",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
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
                  fontSize: "14px",
                  marginRight: "12px",
                }}
              >
                {sec.id}
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: sec.id === 6 ? "#d97706" : "#1e293b",
                  margin: 0,
                }}
              >
                {sec.heading}
              </h2>
            </div>

            {/* Content Grid */}
            <div
              style={{
                display: "grid",
                gap: "24px",
                gridTemplateColumns: sec.id === 6 ? "1fr 1fr" : "1fr 1fr 1fr",
                alignItems: "start",
              }}
            >
              {/* Structure */}
              <div>
                <h3
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#475569",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Structure
                </h3>
                <div style={{ display: "grid", gap: "8px" }}>
                  {sec.structure.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "12px 16px",
                        backgroundColor: "#f8fafc",
                        borderRadius: "8px",
                        border: "1px solid #e2e8f0",
                        borderLeft: "4px solid #6366f1",
                        fontSize: "14px",
                        color: "#475569",
                        fontWeight: 500,
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
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#475569",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Examples
                </h3>
                <div style={{ display: "grid", gap: "10px" }}>
                  {sec.examples.map((ex, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "14px 16px",
                        backgroundColor: sec.id === 6 ? "#fffbeb" : "#f8fafc",
                        borderRadius: "8px",
                        border:
                          sec.id === 6
                            ? "1px solid #fed7aa"
                            : "1px solid #e2e8f0",
                        fontSize: "15px",
                        fontFamily:
                          sec.id === 6
                            ? "inherit"
                            : "'JetBrains Mono', 'Fira Code', monospace",
                        color: sec.id === 6 ? "#92400e" : "#1e293b",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
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
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                      marginBottom: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Short Explanation
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "#475569",
                      padding: "16px",
                      backgroundColor: "#f0f9ff",
                      borderRadius: "8px",
                      border: "1px solid #bae6fd",
                      margin: 0,
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
                  marginTop: "20px",
                  padding: "20px",
                  backgroundColor: "#fffbeb",
                  borderRadius: "8px",
                  border: "2px solid #fed7aa",
                }}
              >
                <h3
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#92400e",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Key Takeaway
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "#92400e",
                    margin: 0,
                    fontWeight: 500,
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
          padding: "24px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          border: "2px solid #e2e8f0",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#1e293b",
            marginBottom: "12px",
          }}
        >
          🎯 Quick Reference
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            fontSize: "14px",
          }}
        >
          <div
            style={{
              padding: "12px",
              backgroundColor: "#f0f9ff",
              borderRadius: "6px",
            }}
          >
            <strong style={{ color: "#0369a1" }}>Noun/Gerund:</strong>
            <br />
            in spite of / despite
          </div>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#f0f9ff",
              borderRadius: "6px",
            }}
          >
            <strong style={{ color: "#0369a1" }}>Clause:</strong>
            <br />
            although / even though / though
          </div>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#f0f9ff",
              borderRadius: "6px",
            }}
          >
            <strong style={{ color: "#0369a1" }}>Strongest:</strong>
            <br />
            even though
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "48px",
          textAlign: "center",
          padding: "24px",
          color: "#94a3b8",
          fontSize: "14px",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <p>Contrast words study sheet • Structure → Examples → Explanation</p>
      </footer>
    </main>
  );
}
