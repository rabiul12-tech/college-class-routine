// pages/other-another.js
import { useState, useEffect } from "react";
import lessonData from "./data/otherAnother.json";
import Link from "next/link";

export default function OtherAnother() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main
      style={{
        padding: "clamp(20px, 4vw, 32px) clamp(16px, 3vw, 24px)",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        maxWidth: "min(1000px, 95vw)",
        margin: "0 auto",
        lineHeight: 1.6,
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {/* Navigation */}
      <nav style={{ marginBottom: "clamp(24px, 5vw, 32px)" }}>
        <Link
          href="/qa/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "clamp(6px, 1.5vw, 8px)",
            padding: "clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)",
            backgroundColor: "#f8f9fa",
            border: "1px solid #dee2e6",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "clamp(18px, 4vw, 26px)", // +12px from 14px
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
            fontSize: "clamp(28px, 6vw, 40px)", // +12px from 28px
            marginBottom: "clamp(8px, 2vw, 12px)",
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
            fontSize: "clamp(20px, 4vw, 28px)", // +12px from 16px
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
          gap: "clamp(20px, 5vw, 28px)",
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
              border: sec.id === 4 ? "2px solid #fecaca" : "1px solid #e2e8f0",
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
                marginBottom: "clamp(20px, 4vw, 24px)",
                paddingBottom: "clamp(12px, 3vw, 16px)",
                borderBottom:
                  sec.id === 4 ? "2px solid #fecaca" : "2px solid #f1f5f9",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "clamp(40px, 8vw, 48px)",
                  height: "clamp(40px, 8vw, 48px)",
                  borderRadius: "8px",
                  background:
                    sec.id === 4
                      ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
                      : "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "clamp(18px, 4vw, 26px)", // +12px from 14px
                  flexShrink: 0,
                }}
              >
                {sec.id}
              </div>
              <h2
                style={{
                  fontSize: "clamp(22px, 5vw, 32px)", // +12px from 20px
                  fontWeight: 600,
                  color: sec.id === 4 ? "#dc2626" : "#1e293b",
                  margin: 0,
                  lineHeight: 1.2,
                  flex: 1,
                  minWidth: "min(200px, 100%)",
                }}
              >
                {sec.heading}
              </h2>
            </div>

            {/* Content Grid */}
            <div
              style={{
                display: "grid",
                gap: "clamp(20px, 4vw, 24px)",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
                alignItems: "start",
              }}
            >
              {/* Structure Column */}
              <div>
                <h3
                  style={{
                    fontSize: "clamp(18px, 4vw, 25px)", // +12px from 13px
                    fontWeight: 600,
                    color: "#475569",
                    marginBottom: "clamp(10px, 2vw, 12px)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Structure
                </h3>
                <div style={{ display: "grid", gap: "clamp(8px, 2vw, 10px)" }}>
                  {sec.structure.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        padding:
                          "clamp(12px, 2vw, 14px) clamp(14px, 3vw, 16px)",
                        backgroundColor: sec.id === 4 ? "#fef2f2" : "#f8fafc",
                        borderRadius: "8px",
                        border:
                          sec.id === 4
                            ? "1px solid #fecaca"
                            : "1px solid #e2e8f0",
                        borderLeft:
                          sec.id === 4
                            ? "4px solid #ef4444"
                            : "4px solid #6366f1",
                        fontSize: "clamp(18px, 4vw, 26px)", // +12px from 14px
                        color: sec.id === 4 ? "#dc2626" : "#475569",
                        fontWeight: 500,
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Examples Column */}
              <div>
                <h3
                  style={{
                    fontSize: "clamp(18px, 4vw, 25px)", // +12px from 13px
                    fontWeight: 600,
                    color: "#475569",
                    marginBottom: "clamp(10px, 2vw, 12px)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Examples
                </h3>
                <div style={{ display: "grid", gap: "clamp(10px, 2vw, 12px)" }}>
                  {sec.examples.map((ex, i) => (
                    <div
                      key={i}
                      style={{
                        padding:
                          "clamp(12px, 2vw, 14px) clamp(14px, 3vw, 16px)",
                        backgroundColor: sec.id === 4 ? "#fef2f2" : "#f8fafc",
                        borderRadius: "8px",
                        border:
                          sec.id === 4
                            ? "1px solid #fecaca"
                            : "1px solid #e2e8f0",
                        fontSize: "clamp(19px, 4vw, 27px)", // +12px from 15px
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        color: sec.id === 4 ? "#dc2626" : "#1e293b",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        lineHeight: 1.4,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateX(4px)";
                        e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                        e.target.style.backgroundColor =
                          sec.id === 4 ? "#fee2e2" : "#f1f5f9";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateX(0)";
                        e.target.style.boxShadow = "none";
                        e.target.style.backgroundColor =
                          sec.id === 4 ? "#fef2f2" : "#f8fafc";
                      }}
                    >
                      {ex}
                    </div>
                  ))}
                </div>
              </div>

              {/* Explanation Column */}
              <div>
                <h3
                  style={{
                    fontSize: "clamp(18px, 4vw, 25px)", // +12px from 13px
                    fontWeight: 600,
                    color: "#475569",
                    marginBottom: "clamp(10px, 2vw, 12px)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Short Explanation
                </h3>
                <p
                  style={{
                    fontSize: "clamp(19px, 4vw, 27px)", // +12px from 15px
                    lineHeight: 1.6,
                    color: sec.id === 4 ? "#dc2626" : "#475569",
                    padding: "clamp(14px, 3vw, 16px)",
                    backgroundColor: sec.id === 4 ? "#fef2f2" : "#f0f9ff",
                    borderRadius: "8px",
                    border:
                      sec.id === 4 ? "1px solid #fecaca" : "1px solid #bae6fd",
                    margin: 0,
                    wordBreak: "break-word",
                  }}
                >
                  {sec.explanation}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Summary Table */}
      <section
        style={{
          padding: "clamp(24px, 5vw, 32px)",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          border: "1px solid #e2e8f0",
          marginBottom: "clamp(28px, 6vw, 32px)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 5vw, 34px)", // +12px from 22px
            marginBottom: "clamp(20px, 4vw, 24px)",
            fontWeight: 600,
            color: "#1e293b",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Summary Table
        </h2>
        <div style={{ overflowX: "auto", borderRadius: "8px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
              minWidth: "600px",
            }}
          >
            <thead>
              <tr>
                {["Form", "Structure", "Meaning", "Example"].map(
                  (header, index) => (
                    <th
                      key={header}
                      style={{
                        textAlign: "left",
                        padding: "clamp(14px, 3vw, 18px)",
                        backgroundColor: "#4f46e5",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "clamp(16px, 3vw, 26px)", // +12px from 14px
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        borderRight: index < 3 ? "1px solid #6366f1" : "none",
                        whiteSpace: "nowrap",
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
                    transition: "background-color 0.2s ease",
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
                      padding: "clamp(14px, 3vw, 18px)",
                      borderBottom: "1px solid #e2e8f0",
                      fontWeight: 600,
                      color: "#1e293b",
                      fontSize: "clamp(18px, 4vw, 28px)", // Adjusted
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.form}
                  </td>
                  <td
                    style={{
                      padding: "clamp(14px, 3vw, 18px)",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#475569",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "clamp(16px, 3vw, 26px)", // +12px from 14px
                      wordBreak: "break-word",
                    }}
                  >
                    {row.structure}
                  </td>
                  <td
                    style={{
                      padding: "clamp(14px, 3vw, 18px)",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#475569",
                      fontSize: "clamp(16px, 3vw, 26px)", // Adjusted
                      wordBreak: "break-word",
                    }}
                  >
                    {row.meaning}
                  </td>
                  <td
                    style={{
                      padding: "clamp(14px, 3vw, 18px)",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <code
                      style={{
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        backgroundColor: "#f1f5f9",
                        padding:
                          "clamp(6px, 1.5vw, 8px) clamp(10px, 2vw, 12px)",
                        borderRadius: "6px",
                        fontSize: "clamp(16px, 3vw, 26px)", // +12px from 14px
                        color: "#1e293b",
                        border: "1px solid #e2e8f0",
                        display: "inline-block",
                        wordBreak: "break-word",
                        maxWidth: "100%",
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
            fontSize: "clamp(20px, 4vw, 28px)", // +12px from 16px
            fontWeight: 600,
            color: "#1e293b",
            marginBottom: "clamp(12px, 3vw, 16px)",
            lineHeight: 1.2,
          }}
        >
          🎯 Quick Rules
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "clamp(12px, 3vw, 16px)",
            fontSize: "clamp(18px, 4vw, 26px)", // +12px from 14px
          }}
        >
          <div
            style={{
              padding: "clamp(12px, 3vw, 16px)",
              backgroundColor: "#f0f9ff",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "clamp(80px, 10vw, 100px)",
            }}
          >
            <strong
              style={{
                color: "#0369a1",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Another:
            </strong>
            <span style={{ display: "block", marginBottom: "4px" }}>
              singular nouns
            </span>
            <em
              style={{ color: "#64748b", fontSize: "clamp(16px, 3vw, 24px)" }}
            >
              one more / different one
            </em>
          </div>
          <div
            style={{
              padding: "clamp(12px, 3vw, 16px)",
              backgroundColor: "#f0f9ff",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "clamp(80px, 10vw, 100px)",
            }}
          >
            <strong
              style={{
                color: "#0369a1",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Other:
            </strong>
            <span style={{ display: "block", marginBottom: "4px" }}>
              plural/uncountable
            </span>
            <em
              style={{ color: "#64748b", fontSize: "clamp(16px, 3vw, 24px)" }}
            >
              additional / different
            </em>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "clamp(32px, 6vw, 48px)",
          textAlign: "center",
          padding: "clamp(20px, 4vw, 24px)",
          color: "#94a3b8",
          fontSize: "clamp(16px, 3vw, 26px)", // +12px from 14px
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <p style={{ margin: 0, lineHeight: 1.4 }}>
          Other/Another study sheet • Clear structure patterns
        </p>
      </footer>
    </main>
  );
}
