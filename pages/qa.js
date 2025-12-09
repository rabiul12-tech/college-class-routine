// File: pages/qa.js
import { useEffect, useState } from "react";
import path from "path";
import Link from "next/link";
import "./qa.css";

export async function getStaticProps() {
  let pairs = [];
  try {
    const fs = await import("fs");
    const jsonPath = path.join(process.cwd(), "public", "data.json");
    if (fs.existsSync(jsonPath)) {
      const raw = fs.readFileSync(jsonPath, "utf8");
      pairs = JSON.parse(raw || "[]");
    } else {
      pairs = [];
    }
  } catch (err) {
    console.error(
      "getStaticProps - failed to read data.json:",
      err && err.message
    );
    pairs = [];
  }

  return {
    props: { pairs },
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
    if (
      typeof window !== "undefined" &&
      Array.isArray(window.QA_DATA) &&
      window.QA_DATA.length
    ) {
      setPairs(window.QA_DATA);
      setSource("data.js (client)");
      return;
    }

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
          console.info("client fetch /data.json failed:", err && err.message);
        });
    }
  }, [initialPairs]);

  // Create study pages array for navigation
  const studyPages = [
    { href: "/adverbs", label: "Adverbs", color: "#2575fc" },
    { href: "/prepositions", label: "Preposition", color: "#2575fc" },
    { href: "/be-lesson", label: "Be lesson", color: "#2575fc" },
    { href: "/likeyLesson/", label: "likely Lesson", color: "#2575fc" },
    { href: "/so-such-lesson/", label: "so such", color: "#2575fc" },
    {
      href: "/thoughalthough-words/",
      label: "Though although",
      color: "#2575fc",
    },
    { href: "/other-another/", label: "other another", color: "#2575fc" },
    { href: "/still-already/", label: "still already", color: "#2575fc" },
    { href: "/causative-verbs/", label: "Causative", color: "#2575fc" },
    { href: "/to-vs-for/", label: "to vs for", color: "#2575fc" },
    { href: "/most-almost/", label: "most-almost", color: "#2575fc" },
    { href: "/beside-besides/", label: "beside-besides", color: "#2575fc" },
    {
      href: "/gerunds-infinitives/",
      label: "gerunds-infinitives",
      color: "#2575fc",
    },
    { href: "/english-tenses/", label: "english-tenses", color: "#2575fc" },
    { href: "/tene-datolearn/", label: "Learn tense", color: "#2575fc" },

    {
      href: "/indirect-questions",
      label: "indirect-questions",
      color: "#3b82f6",
    }, // Added Tenses page
    {
      href: "/word-formation-mistakes/",
      label: "word-formation-mistakes",
      color: "#3b82f6",
    }, // Added Tenses page
    {
      href: "/adverbs-lesson/",
      label: "adverbs-lesson",
      color: "#3b82f6",
    }, // Added Tenses page
    {
      href: "/prefix-data/",
      label: "prefix-data",
      color: "#3b82f6",
    },
    {
      href: "/prefix-vocab/",
      label: "prefix-vocab",
      color: "#3b82f6",
    },
  ];

  const seoPages = [
    { href: "/seo/", label: "SEO GUIDE", color: "#ff0000" },
    { href: "/keyword/", label: "keyword", color: "#ff0000" },
    { href: "/semrushkeyword/", label: "Semrush keyword", color: "#ff0000" },
    { href: "/OnPageSeo/", label: "ON Page SEO", color: "#ff0000" },
  ];

  return (
    <div className="qa-container">
      {/* NAVBAR */}
      <nav className="qa-nav">
        <div className="qa-nav-inner">
          <div className="qa-nav-links">
            <Link href="/" legacyBehavior>
              <a className="qa-nav-home">Home</a>
            </Link>

            <div className="qa-nav-section">
              <span className="qa-nav-section-label">Study Pages:</span>
              <div className="qa-nav-buttons">
                {studyPages.map((page) => (
                  <Link key={page.href} href={page.href} legacyBehavior>
                    <a
                      className="qa-nav-link"
                      style={{ backgroundColor: page.color }}
                      aria-label={`${page.label} study sheet`}
                    >
                      {page.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <div className="qa-nav-section">
              <span className="qa-nav-section-label">SEO Pages:</span>
              <div className="qa-nav-buttons">
                {seoPages.map((page) => (
                  <Link key={page.href} href={page.href} legacyBehavior>
                    <a
                      className="qa-nav-link"
                      style={{ backgroundColor: page.color }}
                      aria-label={`${page.label} page`}
                    >
                      {page.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="qa-nav-info">
            <span className="qa-nav-title">Q → A Viewer</span>
            <small className="qa-nav-subtitle">quick access</small>
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
