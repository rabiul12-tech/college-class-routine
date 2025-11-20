// pages/so-such-lesson.js
import { useState, useEffect } from "react";
import lessonData from "./data/soSuchLesson.json";
import Link from "next/link";
export default function SoSuchLesson() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main
      style={{
        padding: "32px 24px",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        maxWidth: "800px",
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
          padding: "32px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "12px",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            marginBottom: "8px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {lessonData.title}
        </h1>
        <p
          style={{
            fontSize: "16px",
            margin: 0,
            opacity: 0.9,
            fontWeight: 400,
          }}
        >
          {lessonData.subtitle}
        </p>
      </header>

      {/* Sections Grid */}
      <div
        style={{
          display: "grid",
          gap: "28px",
          marginBottom: "48px",
        }}
      >
        {lessonData.sections.map((sec, index) => (
          <section
            key={sec.id}
            style={{
              padding: "28px",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
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
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
                  color: "#1e293b",
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
                gridTemplateColumns: "1fr 1fr",
                alignItems: "start",
              }}
            >
              {/* Left Column - Structure & Explanation */}
              <div style={{ display: "grid", gap: "20px" }}>
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
                          borderLeft: "4px solid #667eea",
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

                {/* Explanation */}
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
              </div>

              {/* Right Column - Examples */}
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
                <div style={{ display: "grid", gap: "12px" }}>
                  {sec.examples.map((ex, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "16px",
                        backgroundColor: "#f8fafc",
                        borderRadius: "8px",
                        border: "1px solid #e2e8f0",
                        fontSize: "15px",
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        color: "#1e293b",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#f1f5f9";
                        e.target.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#f8fafc";
                        e.target.style.transform = "translateX(0)";
                      }}
                    >
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
            marginBottom: "8px",
          }}
        >
          🎯 Quick Rule
        </h3>
        <p
          style={{
            fontSize: "15px",
            color: "#475569",
            margin: 0,
            fontWeight: 500,
          }}
        >
          Use <strong>SO</strong> with adjectives and amounts • Use{" "}
          <strong>SUCH</strong> with nouns
        </p>
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
        <p>Study sheet • SO vs SUCH patterns</p>
      </footer>
    </main>
  );
}
