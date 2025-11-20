// pages/be-lesson.js
import { useState, useEffect } from "react";
import lessonData from "./data/beLesson.json";
import Link from "next/link";
export default function BeLesson() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main
      style={{
        padding: "60px 40px",
        fontFamily:
          "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        maxWidth: "1000px",
        margin: "0 auto",
        lineHeight: 1.7,
        backgroundColor: "#fafafa",
        minHeight: "100vh",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s ease-out",
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
      {/* Header Section */}
      <header
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "40px",
          borderRadius: "16px",
          marginBottom: "48px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "12px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {lessonData.title}
        </h1>
        <p
          style={{
            fontSize: "18px",
            margin: 0,
            opacity: 0.9,
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          {lessonData.subtitle}
        </p>
      </header>

      {/* Sections */}
      {lessonData.sections.map((sec, index) => (
        <section
          key={sec.id}
          style={{
            marginBottom: "48px",
            padding: "32px",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            border: "1px solid #f0f0f0",
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            opacity: isVisible ? 1 : 0,
            transition: `all 0.6s ease-out ${index * 0.1}s`,
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "16px",
              fontWeight: 600,
              color: "#2d3748",
              background: "linear-gradient(135deg, #2d3748 0%, #4a5568 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {sec.heading}
          </h2>

          {/* Structure */}
          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                fontSize: "18px",
                marginBottom: "12px",
                fontWeight: 600,
                color: "#4a5568",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  width: "4px",
                  height: "16px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "2px",
                }}
              ></span>
              Structure
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "24px",
                listStyleType: "none",
              }}
            >
              {sec.structure.map((item, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: "8px",
                    padding: "8px 12px",
                    backgroundColor: "#f7fafc",
                    borderRadius: "6px",
                    borderLeft: "3px solid #667eea",
                    fontSize: "15px",
                    color: "#4a5568",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Examples */}
          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                fontSize: "22px",
                marginBottom: "16px",
                fontWeight: 600,
                color: "#2d3748",
              }}
            >
              Examples
            </h3>
            <div
              style={{
                display: "grid",
                gap: "12px",
              }}
            >
              {sec.examples.map((ex, i) => (
                <div
                  key={i}
                  style={{
                    padding: "16px",
                    backgroundColor: "#edf2f7",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    fontSize: "16px",
                    fontFamily:
                      "'Fira Code', 'Monaco', 'Cascadia Code', monospace",
                    color: "#2d3748",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#e2e8f0";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#edf2f7";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <code>{ex}</code>
                </div>
              ))}
            </div>
          </div>

          {/* Explanation */}
          <div>
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "12px",
                fontWeight: 600,
                color: "#2d3748",
              }}
            >
              Short Explanation
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#4a5568",
                padding: "16px",
                backgroundColor: "#f0fff4",
                borderRadius: "8px",
                border: "1px solid #c6f6d5",
              }}
            >
              {sec.explanation}
            </p>
          </div>
        </section>
      ))}

      {/* Summary Table */}
      <section
        style={{
          padding: "32px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          border: "1px solid #f0f0f0",
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          opacity: isVisible ? 1 : 0,
          transition: `all 0.6s ease-out ${
            lessonData.sections.length * 0.1 + 0.2
          }s`,
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            marginBottom: "24px",
            fontWeight: 600,
            color: "#2d3748",
            textAlign: "center",
          }}
        >
          Complete Summary Table
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            }}
          >
            <thead>
              <tr>
                {["Form", "Structure", "Meaning / Use", "Example"].map(
                  (header, index) => (
                    <th
                      key={header}
                      style={{
                        textAlign: "left",
                        padding: "16px",
                        backgroundColor: "#4a5568",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "14px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        borderRight: index < 3 ? "1px solid #718096" : "none",
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
                    backgroundColor: i % 2 === 0 ? "#fff" : "#f7fafc",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#edf2f7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      i % 2 === 0 ? "#fff" : "#f7fafc";
                  }}
                >
                  <td
                    style={{
                      padding: "16px",
                      borderBottom: "1px solid #e2e8f0",
                      fontWeight: 600,
                      color: "#2d3748",
                    }}
                  >
                    {row.form}
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#4a5568",
                    }}
                  >
                    {row.structure}
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#4a5568",
                    }}
                  >
                    {row.use}
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <code
                      style={{
                        fontFamily:
                          "'Fira Code', 'Monaco', 'Cascadia Code', monospace",
                        backgroundColor: "#edf2f7",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "14px",
                        color: "#2d3748",
                        border: "1px solid #e2e8f0",
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

      {/* Footer */}
      <footer
        style={{
          marginTop: "48px",
          textAlign: "center",
          padding: "24px",
          color: "#718096",
          fontSize: "14px",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <p>Lesson completed • Keep learning! 🚀</p>
      </footer>
    </main>
  );
}
