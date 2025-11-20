// pages/be-lesson.js
import { useState, useEffect } from "react";
import lessonData from "./data/likeyLesson.json";
import Link from "next/link";
export default function BeLesson() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main
      style={{
        padding: "40px 24px",
        fontFamily:
          "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: 1.6,
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s ease-out",
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
            fontSize: "48px",
            marginBottom: "12px",
            fontWeight: 700,
            color: "#1a202c",
            lineHeight: 1.3,
          }}
        >
          {lessonData.title}
        </h1>
        <p
          style={{
            fontSize: "26px",
            color: "#718096",
            margin: 0,
            fontWeight: 500,
          }}
        >
          {lessonData.subtitle}
        </p>
      </header>

      {/* Sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {lessonData.sections.map((sec) => (
          <section
            key={sec.id}
            style={{
              padding: "24px",
              backgroundColor: "#f7fafc",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontSize: "30px",
                marginBottom: "20px",
                fontWeight: 600,
                color: "#2d3748",
                paddingBottom: "12px",
                borderBottom: "2px solid #e2e8f0",
              }}
            >
              {sec.heading}
            </h2>

            <div style={{ display: "grid", gap: "20px" }}>
              {/* Structure */}
              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#4a5568",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Structure
                </h3>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "0px",
                    listStyle: "none",
                  }}
                >
                  {sec.structure.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "6px",
                        padding: "8px 12px",
                        backgroundColor: "white",
                        borderRadius: "6px",
                        borderLeft: "3px solid #4299e1",
                        fontSize: "20px",
                        color: "#4a5568",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Examples */}
              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#4a5568",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Examples
                </h3>
                <div style={{ display: "grid", gap: "8px" }}>
                  {sec.examples.map((ex, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "12px 16px",
                        backgroundColor: "white",
                        borderRadius: "6px",
                        border: "1px solid #e2e8f0",
                        fontSize: "25px",
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        color: "#2d3748",
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
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#4a5568",
                    marginBottom: "8px",
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
                    color: "#4a5568",
                    padding: "16px",
                    backgroundColor: "white",
                    borderRadius: "6px",
                    border: "1px solid #e2e8f0",
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

      {/* Footer */}
      <footer
        style={{
          marginTop: "48px",
          textAlign: "center",
          padding: "24px",
          color: "#a0aec0",
          fontSize: "14px",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <p>Study sheet • Essential structures only</p>
      </footer>
    </main>
  );
}
