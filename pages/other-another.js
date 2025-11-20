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
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
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
          gap: "28px",
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
              border: sec.id === 4 ? "2px solid #fecaca" : "1px solid #e2e8f0",
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
                borderBottom:
                  sec.id === 4 ? "2px solid #fecaca" : "2px solid #f1f5f9",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
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
                  color: sec.id === 4 ? "#dc2626" : "#1e293b",
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
                gridTemplateColumns: "1fr 1fr 1fr",
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
                        fontSize: "14px",
                        color: sec.id === 4 ? "#dc2626" : "#475569",
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
                        padding: "12px 16px",
                        backgroundColor: sec.id === 4 ? "#fef2f2" : "#f8fafc",
                        borderRadius: "8px",
                        border:
                          sec.id === 4
                            ? "1px solid #fecaca"
                            : "1px solid #e2e8f0",
                        fontSize: "15px",
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        color: sec.id === 4 ? "#dc2626" : "#1e293b",
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
                    color: sec.id === 4 ? "#dc2626" : "#475569",
                    padding: "16px",
                    backgroundColor: sec.id === 4 ? "#fef2f2" : "#f0f9ff",
                    borderRadius: "8px",
                    border:
                      sec.id === 4 ? "1px solid #fecaca" : "1px solid #bae6fd",
                    margin: 0,
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
          padding: "32px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          border: "1px solid #e2e8f0",
          marginBottom: "32px",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            marginBottom: "24px",
            fontWeight: 600,
            color: "#1e293b",
            textAlign: "center",
          }}
        >
          Summary Table
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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
                        padding: "16px",
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
                      padding: "16px",
                      borderBottom: "1px solid #e2e8f0",
                      fontWeight: 600,
                      color: "#1e293b",
                    }}
                  >
                    {row.form}
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#475569",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "14px",
                    }}
                  >
                    {row.structure}
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#475569",
                    }}
                  >
                    {row.meaning}
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <code
                      style={{
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        backgroundColor: "#f1f5f9",
                        padding: "6px 10px",
                        borderRadius: "6px",
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
          🎯 Quick Rules
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
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
            <strong style={{ color: "#0369a1" }}>Another:</strong> singular
            nouns
            <br />
            <em style={{ color: "#64748b" }}>one more / different one</em>
          </div>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#f0f9ff",
              borderRadius: "6px",
            }}
          >
            <strong style={{ color: "#0369a1" }}>Other:</strong>{" "}
            plural/uncountable
            <br />
            <em style={{ color: "#64748b" }}>additional / different</em>
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
        <p>Other/Another study sheet • Clear structure patterns</p>
      </footer>
    </main>
  );
}
