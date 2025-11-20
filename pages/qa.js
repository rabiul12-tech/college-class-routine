// File: pages/qa.js
import { useEffect, useState } from "react";
import path from "path";
import Link from "next/link";
import "./qa.css";

export async function getStaticProps() {
  // dynamic import of fs so bundler doesn't try to include it for client
  let pairs = [];
  try {
    const fs = await import("fs");
    const jsonPath = path.join(process.cwd(), "public", "data.json");
    if (fs.existsSync(jsonPath)) {
      const raw = fs.readFileSync(jsonPath, "utf8");
      pairs = JSON.parse(raw || "[]");
    } else {
      // file not present at build time
      pairs = [];
    }
  } catch (err) {
    // if any server-side read error, log to console and return empty list
    // Next build or dev server console will show this
    // We still allow client-side fetch fallback.
    // eslint-disable-next-line no-console
    console.error(
      "getStaticProps - failed to read data.json:",
      err && err.message
    );
    pairs = [];
  }

  return {
    props: { pairs },
    // short ISR so you can regenerate by running the generator and waiting or re-building
    revalidate: 10,
  };
}

export default function QAViewer({ pairs: initialPairs }) {
  const [pairs, setPairs] = useState(initialPairs || []);
  const [source, setSource] = useState(
    initialPairs && initialPairs.length
      ? "data.json (server)"
      : "(no server data)"
  );
  const [showAnswers, setShowAnswers] = useState(true);

  useEffect(() => {
    // 1) prefer window.QA_DATA if present (data.js)
    if (
      typeof window !== "undefined" &&
      Array.isArray(window.QA_DATA) &&
      window.QA_DATA.length
    ) {
      setPairs(window.QA_DATA);
      setSource("data.js (client)");
      return;
    }

    // 2) if server-side didn't provide data, try fetch /data.json
    if (!initialPairs || initialPairs.length === 0) {
      fetch("/data.json", { cache: "no-store" })
        .then((res) => {
          if (!res.ok) throw new Error("fetch /data.json failed " + res.status);
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data) && data.length) {
            setPairs(data);
            setSource("data.json (fetched)");
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.info("client fetch /data.json failed:", err && err.message);
        });
    }
  }, [initialPairs]);

  return (
    <div className="qa-container">
      {/* NAVBAR */}
      <nav className="qa-nav" style={{ borderBottom: "1px solid #e6e6e6" }}>
        <div
          className="qa-nav-inner"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: "12px 16px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{ fontWeight: 700, color: "#222" }}
              >
                Home
              </a>
            </Link>

            <Link href="/adverbs" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                Adverbs
              </a>
            </Link>
            <Link href="/prepositions" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                Preposition
              </a>
            </Link>
            <Link href="/be-lesson" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                Be lesson
              </a>
            </Link>
            <Link href="/likeyLesson/" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                likely Lesson
              </a>
            </Link>
            <Link href="/so-such-lesson/" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                so such
              </a>
            </Link>
            <Link href="/thoughalthough-words/" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                Though although
              </a>
            </Link>
            <Link href="/other-another/" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                other another
              </a>
            </Link>
            <Link href="/still-already/" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                still already
              </a>
            </Link>
            <Link href="/causative-verbs/" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                Causative
              </a>
            </Link>
            <Link href="/to-vs-for/" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                to vs for
              </a>
            </Link>
            <Link href="/most-almost/" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                most-almost
              </a>
            </Link>
            <Link href="/beside-besides/" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                beside-besides
              </a>
            </Link>
            <Link href="/gerunds-infinitives/" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                gerunds-infinitives
              </a>
            </Link>
            <Link href="/english-tenses/" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#2575fc",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                english-tenses.js
              </a>
            </Link>
            <Link href="/seo/" legacyBehavior>
              <a
                className="qa-nav-link"
                style={{
                  padding: "6px 10px",
                  background: "#ff0000",
                  color: "white",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                aria-label="Adverbs study sheet"
              >
                SEO GUIDE
              </a>
            </Link>
          </div>

          <div style={{ fontSize: 14, color: "#666" }}>
            <span style={{ marginRight: 8 }}>Q → A Viewer</span>
            <small style={{ color: "#999" }}>quick access</small>
          </div>
        </div>
      </nav>

      <div className="qa-header">
        <h2 className="qa-title">Q → A Viewer</h2>
        <div className="qa-meta">
          {source} · Pairs: {pairs.length}
        </div>
      </div>

      <div className="qa-grid">
        <aside className="qa-aside">
          <div className="qa-subtle">Questions</div>

          {pairs.length === 0 && (
            <div className="qa-no-data">
              No data. Generate public/data.json or upload data.js
            </div>
          )}

          {pairs.map((p, i) => (
            <button
              key={i}
              className="qa-question"
              onClick={() => {
                const el = document.getElementById(`card-${i}`);
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              <div className="qa-question-title">{p.q}</div>
              <div className="qa-question-excerpt">
                {p.a.slice(0, 80)}
                {p.a.length > 80 ? "…" : ""}
              </div>
            </button>
          ))}
        </aside>

        <main className="qa-main">
          <div className="qa-viewer-header">
            <div className="qa-viewer-title">Viewer</div>
            <label className="qa-checkbox-label">
              <input
                type="checkbox"
                checked={showAnswers}
                onChange={(e) => setShowAnswers(e.target.checked)}
              />
              <span>Show answers</span>
            </label>
          </div>

          <div className="qa-cards-grid">
            {pairs.map((p, i) => (
              <article id={`card-${i}`} key={i} className="qa-card">
                <div className="qa-card-q">{p.q}</div>

                <div
                  className={`qa-card-a ${showAnswers ? "visible" : "hidden"}`}
                >
                  {p.a.split("\n").map((line, idx) => (
                    <div key={idx} className="qa-card-line">
                      {line}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
