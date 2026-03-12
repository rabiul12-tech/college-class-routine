// pages/time-adverbs.js
import { useState, useEffect } from "react";
import lessonData from "./data/timeAdverbs.json";
import Link from "next/link";

export default function TimeAdverbs() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Check for mobile viewport
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
        padding: isMobile ? "24px 16px" : "48px 32px",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        maxWidth: "1400px",
        margin: "0 auto",
        lineHeight: 1.7,
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        fontSize: isMobile ? "18px" : "20px", // Increased font size
      }}
    >
      {/* Navigation */}
      <nav style={{ marginBottom: isMobile ? "32px" : "48px" }}>
        <Link
          href="/qa/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: isMobile ? "12px 20px" : "14px 24px",
            backgroundColor: "#ffffff",
            border: "2px solid #e2e8f0",
            borderRadius: "12px",
            fontSize: isMobile ? "17px" : "18px",
            fontWeight: "600",
            color: "#475569",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#f1f5f9";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#ffffff";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
          }}
        >
          ← Back Home
        </Link>
      </nav>

      {/* Header */}
      <header
        style={{
          marginBottom: isMobile ? "40px" : "64px",
          textAlign: "center",
          padding: isMobile ? "0" : "0 20px",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "36px" : "48px",
            marginBottom: "16px",
            fontWeight: "800",
            color: "#1e293b",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          {lessonData.title}
        </h1>
        <p
          style={{
            fontSize: isMobile ? "22px" : "26px",
            margin: 0,
            color: "#64748b",
            fontWeight: "500",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {lessonData.subtitle}
        </p>
      </header>

      {/* Sections Grid */}
      <div
        style={{
          display: "grid",
          gap: isMobile ? "40px" : "48px",
          marginBottom: isMobile ? "48px" : "64px",
        }}
      >
        {lessonData.sections.map((sec, index) => {
          const colors = getColorScheme(sec.id);
          return (
            <section
              key={sec.id}
              style={{
                padding: isMobile ? "24px" : "40px",
                backgroundColor: "white",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                border: `3px solid ${colors.border}`,
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
                  marginBottom: isMobile ? "32px" : "40px",
                  paddingBottom: isMobile ? "24px" : "28px",
                  borderBottom: `3px solid ${colors.light}`,
                  flexDirection: isMobile ? "column" : "row",
                  textAlign: isMobile ? "center" : "left",
                  gap: isMobile ? "20px" : "0",
                }}
              >
                <div
                  style={{
                    width: isMobile ? "60px" : "80px",
                    height: isMobile ? "60px" : "80px",
                    borderRadius: "16px",
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}99 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "800",
                    fontSize: isMobile ? "24px" : "32px",
                    marginRight: isMobile ? "0" : "24px",
                    boxShadow: `0 6px 20px ${colors.primary}40`,
                    flexShrink: 0,
                  }}
                >
                  {sec.id}
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontSize: isMobile ? "28px" : "36px",
                      fontWeight: "800",
                      color: colors.primary,
                      margin: 0,
                      marginBottom: "12px",
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
                      justifyContent: isMobile ? "center" : "flex-start",
                    }}
                  >
                    {sec.structure.slice(0, 2).map((pattern, i) => (
                      <span
                        key={i}
                        style={{
                          padding: "8px 16px",
                          backgroundColor: colors.light,
                          borderRadius: "10px",
                          fontSize: isMobile ? "16px" : "18px",
                          color: colors.primary,
                          fontWeight: "600",
                          border: `2px solid ${colors.border}`,
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
                  gap: isMobile ? "32px" : "40px",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
                  alignItems: "start",
                }}
              >
                {/* Structure Column */}
                <div>
                  <h3
                    style={{
                      fontSize: isMobile ? "20px" : "22px",
                      fontWeight: "700",
                      color: colors.primary,
                      marginBottom: "24px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      paddingBottom: "12px",
                      borderBottom: `3px solid ${colors.light}`,
                    }}
                  >
                    Structure
                  </h3>
                  <div style={{ display: "grid", gap: "20px" }}>
                    {sec.structure.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          padding: "24px",
                          backgroundColor: colors.light,
                          borderRadius: "16px",
                          border: `3px solid ${colors.border}`,
                          fontSize: isMobile ? "20px" : "22px",
                          color: colors.primary,
                          fontWeight: "700",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          textAlign: "center",
                          minHeight: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "translateY(-6px)";
                          e.target.style.boxShadow = `0 12px 28px ${colors.primary}30`;
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

                {/* Examples Column */}
                <div>
                  <h3
                    style={{
                      fontSize: isMobile ? "20px" : "22px",
                      fontWeight: "700",
                      color: colors.primary,
                      marginBottom: "24px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      paddingBottom: "12px",
                      borderBottom: `3px solid ${colors.light}`,
                    }}
                  >
                    Examples
                  </h3>
                  <div style={{ display: "grid", gap: "24px" }}>
                    {sec.examples.map((ex, i) => (
                      <div
                        key={i}
                        style={{
                          padding: "24px",
                          backgroundColor: "#f8fafc",
                          borderRadius: "16px",
                          border: "3px solid #e2e8f0",
                          fontSize: isMobile ? "20px" : "22px",
                          fontFamily:
                            "'JetBrains Mono', 'Fira Code', monospace",
                          color: "#1e293b",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          position: "relative",
                          minHeight: "100px",
                          display: "flex",
                          alignItems: "center",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "translateX(8px)";
                          e.target.style.backgroundColor = "#f1f5f9";
                          e.target.style.boxShadow =
                            "0 8px 24px rgba(0,0,0,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "translateX(0)";
                          e.target.style.backgroundColor = "#f8fafc";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: "-8px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "6px",
                            height: "70%",
                            backgroundColor: colors.primary,
                            borderRadius: "3px",
                          }}
                        />
                        <div style={{ paddingLeft: "12px" }}>{ex}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explanation Column */}
                <div>
                  <h3
                    style={{
                      fontSize: isMobile ? "20px" : "22px",
                      fontWeight: "700",
                      color: colors.primary,
                      marginBottom: "24px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      paddingBottom: "12px",
                      borderBottom: `3px solid ${colors.light}`,
                    }}
                  >
                    Explanation
                  </h3>
                  <div
                    style={{
                      padding: "32px",
                      backgroundColor: colors.light,
                      borderRadius: "16px",
                      border: `3px solid ${colors.border}`,
                      position: "relative",
                      minHeight: "300px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: isMobile ? "20px" : "22px",
                        lineHeight: 1.8,
                        color: colors.primary,
                        margin: 0,
                        fontWeight: "600",
                      }}
                    >
                      {sec.explanation}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Comparison Section */}
      <section
        style={{
          padding: isMobile ? "32px 24px" : "48px 40px",
          backgroundColor: "white",
          borderRadius: "24px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
          border: "3px solid #e2e8f0",
          marginBottom: isMobile ? "48px" : "64px",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "32px" : "40px",
            marginBottom: isMobile ? "40px" : "48px",
            fontWeight: "800",
            color: "#1e293b",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Quick Comparison
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
            gap: isMobile ? "32px" : "32px",
          }}
        >
          {lessonData.comparison.map((item, index) => {
            const colors = getColorScheme(index + 1);
            return (
              <div
                key={item.word}
                style={{
                  padding: isMobile ? "32px 24px" : "36px 28px",
                  backgroundColor: colors.light,
                  borderRadius: "20px",
                  border: `4px solid ${colors.border}`,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  minHeight: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px)";
                  e.currentTarget.style.boxShadow = `0 20px 40px ${colors.primary}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: isMobile ? "28px" : "32px",
                      fontWeight: "800",
                      color: colors.primary,
                      marginBottom: "16px",
                    }}
                  >
                    {item.word}
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "20px" : "22px",
                      color: colors.primary,
                      marginBottom: "24px",
                      opacity: 0.9,
                      fontWeight: "600",
                    }}
                  >
                    {item.meaning}
                  </div>
                </div>
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    border: `3px solid ${colors.border}`,
                    fontSize: isMobile ? "20px" : "22px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#1e293b",
                    fontWeight: "600",
                  }}
                >
                  {item.example}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key Patterns Section */}
      <section
        style={{
          padding: isMobile ? "32px 24px" : "40px 32px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          border: "3px solid #e2e8f0",
          marginBottom: isMobile ? "48px" : "64px",
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? "28px" : "32px",
            fontWeight: "800",
            color: "#1e293b",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          🎯 Key Patterns
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "28px" : "40px",
          }}
        >
          <div
            style={{
              padding: "32px",
              backgroundColor: "#f0f9ff",
              borderRadius: "16px",
              border: "3px solid #bae6fd",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 12px 32px rgba(3, 105, 161, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontSize: isMobile ? "24px" : "26px",
                color: "#0369a1",
                fontWeight: "800",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "32px" }}>📍</span>
              Position Matters:
            </div>
            <p
              style={{
                fontSize: isMobile ? "20px" : "22px",
                color: "#64748b",
                margin: 0,
                lineHeight: 1.8,
                fontWeight: "600",
              }}
            >
              still / already / just → before main verb
              <br />
              <span style={{ color: "#0369a1", fontWeight: "700" }}>
                Example: "She is still waiting" • "He has just arrived"
              </span>
            </p>
          </div>

          <div
            style={{
              padding: "32px",
              backgroundColor: "#f0f9ff",
              borderRadius: "16px",
              border: "3px solid #bae6fd",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 12px 32px rgba(3, 105, 161, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontSize: isMobile ? "24px" : "26px",
                color: "#0369a1",
                fontWeight: "800",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "32px" }}>🔚</span>
              Yet at the End:
            </div>
            <p
              style={{
                fontSize: isMobile ? "20px" : "22px",
                color: "#64748b",
                margin: 0,
                lineHeight: 1.8,
                fontWeight: "600",
              }}
            >
              Used in negatives and questions at sentence end
              <br />
              <span style={{ color: "#0369a1", fontWeight: "700" }}>
                Example: "Haven't you finished yet?" • "Not yet"
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: isMobile ? "64px" : "80px",
          textAlign: "center",
          padding: isMobile ? "32px 24px" : "48px 32px",
          color: "#94a3b8",
          fontSize: isMobile ? "18px" : "20px",
          borderTop: "3px solid #e2e8f0",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontWeight: "600",
            lineHeight: 1.8,
          }}
        >
          Time adverbs study sheet • Clear structure patterns for still,
          already, just, yet
          <br />
          <span style={{ fontSize: isMobile ? "16px" : "18px", opacity: 0.8 }}>
            Master these essential time expressions for fluent English
            communication
          </span>
        </p>
      </footer>
    </main>
  );
}
