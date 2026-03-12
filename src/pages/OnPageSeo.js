import { useState } from "react";
import { onPageNotesData, categories } from "../lib/onPageNotesData";

export default function CombinedPage() {
  const [activeTab, setActiveTab] = useState("notes"); // 'notes' or 'data'
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedNote, setExpandedNote] = useState(null);

  const filteredNotes = onPageNotesData.filter((note) => {
    const matchesCategory =
      activeCategory === "all" || note.category === activeCategory;
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const toggleNote = (id) => {
    setExpandedNote(expandedNote === id ? null : id);
  };

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1>🚀 On-Page SEO কোর্স নোটস</h1>
          <p>Semrush দিয়ে অন-পেজ SEO মাস্টারি - সম্পূর্ণ বাংলা গাইড</p>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-btn ${activeTab === "notes" ? "active" : ""}`}
          onClick={() => setActiveTab("notes")}
        >
          📝 নোটস ব্রাউজ করুন
        </button>
        <button
          className={`tab-btn ${activeTab === "data" ? "active" : ""}`}
          onClick={() => setActiveTab("data")}
        >
          📊 ডেটা স্ট্রাকচার
        </button>
      </div>

      {/* Notes Tab Content */}
      {activeTab === "notes" && (
        <>
          {/* Search and Filter Section */}
          <section className="controls">
            <div className="search-box">
              <input
                type="text"
                placeholder="🔍 নোটস খুঁজুন... (শিরোনাম, বিষয়বস্তু বা ট্যাগ)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="category-filters">
              <button
                className={`category-btn ${
                  activeCategory === "all" ? "active" : ""
                }`}
                onClick={() => setActiveCategory("all")}
              >
                সব নোটস
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-btn ${
                    activeCategory === cat.id ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{ borderLeft: `4px solid ${cat.color}` }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats">
            <div className="stat-card">
              <h3>{onPageNotesData.length}</h3>
              <p>মোট নোটস</p>
            </div>
            <div className="stat-card">
              <h3>{categories.length}</h3>
              <p>ক্যাটাগরি</p>
            </div>
            <div className="stat-card">
              <h3>
                {new Set(onPageNotesData.flatMap((note) => note.tags)).size}
              </h3>
              <p>ট্যাগস</p>
            </div>
          </section>

          {/* Notes Grid */}
          <section className="notes-section">
            <h2 className="section-title">
              {activeCategory === "all"
                ? "সব নোটস"
                : categories.find((c) => c.id === activeCategory)?.name}
              <span className="count">({filteredNotes.length})</span>
            </h2>

            <div className="notes-grid">
              {filteredNotes.map((note) => (
                <div key={note.id} className="note-card">
                  <div className="note-header">
                    <div className="note-icon">{note.icon}</div>
                    <div className="note-title-section">
                      <h3>{note.title}</h3>
                      <span
                        className="category-tag"
                        style={{
                          backgroundColor: categories.find(
                            (c) => c.id === note.category
                          )?.color,
                        }}
                      >
                        {categories.find((c) => c.id === note.category)?.name}
                      </span>
                    </div>
                  </div>

                  <p className="note-summary">{note.summary}</p>

                  <div className="note-tags">
                    {note.tags.map((tag) => (
                      <span key={tag} className="tag">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="toggle-btn"
                    onClick={() => toggleNote(note.id)}
                  >
                    {expandedNote === note.id
                      ? "সংক্ষিপ্ত দেখুন"
                      : "বিস্তারিত দেখুন"}
                  </button>

                  {/* Expanded Content */}
                  {expandedNote === note.id && (
                    <div className="expanded-content">
                      {/* --- ID 1: Course Intro --- */}
                      {note.features && (
                        <div className="info-section">
                          <h4>কোর্সের বৈশিষ্ট্য:</h4>
                          <ul className="check-list">
                            {note.features.map((feature, index) => (
                              <li key={index}>✓ {feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {note.videoTypes && (
                        <div className="info-section">
                          <h4>ভিডিও ধরণ:</h4>
                          <div className="grid-2">
                            {note.videoTypes.map((vt, index) => (
                              <div key={index} className="card-small">
                                <strong>{vt.type}</strong>
                                <p>{vt.purpose}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* --- ID 2: On-Page Basics --- */}
                      {note.definition && (
                        <div className="info-section highlight-blue">
                          <h4>সংজ্ঞা: {note.definition.title}</h4>
                          <p>{note.definition.description}</p>
                          <em>"{note.definition.analogy}"</em>
                        </div>
                      )}
                      {note.example && (
                        <div className="info-section">
                          <h4>উদাহরণ: "{note.example.query}"</h4>
                          <div className="comparison-grid">
                            <div className="bad">
                              ❌ {note.example.badExample}
                            </div>
                            <div className="good">
                              ✅ {note.example.goodExample}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* --- ID 3: Tools List --- */}
                      {note.tools && (
                        <div className="info-section">
                          <h4>Semrush টুলস পরিচিতি:</h4>
                          <div className="grid-2">
                            {note.tools.map((tool, index) => (
                              <div key={index} className="card-small">
                                <strong>{tool.name}</strong>
                                <p>{tool.purpose}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* --- ID 4: Technical SEO Elements --- */}
                      {note.keyElements && (
                        <div className="info-section">
                          <h4>গুরুত্বপূর্ণ এলিমেন্ট:</h4>
                          <div className="grid-2">
                            {note.keyElements.map((el, index) => (
                              <div key={index} className="card-small">
                                <strong>{el.name}</strong>
                                <p>{el.purpose}</p>
                                <ul className="sub-list">
                                  {el.bestPractices.map((bp, i) => (
                                    <li key={i}>• {bp}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* --- ID 5: Methods --- */}
                      {note.methods && (
                        <div className="info-section">
                          <h4>পেজ বাছাই পদ্ধতি:</h4>
                          {note.methods.map((method, index) => (
                            <div key={index} className="card-block">
                              <h5>{method.name}</h5>
                              <ol>
                                {method.steps.map((step, i) => (
                                  <li key={i}>{step}</li>
                                ))}
                              </ol>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* --- ID 6: Competitor Analysis --- */}
                      {note.competitorAnalysis && (
                        <div className="info-section highlight-orange">
                          <h4>প্রতিযোগী বিশ্লেষণ:</h4>
                          <p>
                            <strong>পর্যবেক্ষণ:</strong>{" "}
                            {note.competitorAnalysis.finding}
                          </p>
                          <p>
                            <strong>সিদ্ধান্ত:</strong>{" "}
                            {note.competitorAnalysis.conclusion}
                          </p>
                        </div>
                      )}
                      {note.strategyChange && (
                        <div className="info-section">
                          <h4>কৌশল পরিবর্তন:</h4>
                          <div className="card-small">
                            <strong>{note.strategyChange.decision}</strong>
                            <p>{note.strategyChange.reason}</p>
                          </div>
                        </div>
                      )}

                      {/* --- ID 7: AI Optimization --- */}
                      {note.aiOptimization && (
                        <div className="info-section">
                          <h4>AI অপটিমাইজেশন ({note.aiOptimization.tool}):</h4>
                          <ul className="check-list">
                            {note.aiOptimization.instructions.map((ins, i) => (
                              <li key={i}>🤖 {ins}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {note.shopifyImplementation && (
                        <div className="info-section">
                          <h4>Shopify ইমপ্লিমেন্টেশন:</h4>
                          <div className="comparison-grid">
                            <div className="bad">
                              আগে: {note.shopifyImplementation.before.title}
                            </div>
                            <div className="good">
                              পরে: {note.shopifyImplementation.after.title}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* --- ID 8: Content Quality & Intent --- */}
                      {note.searchIntent && (
                        <div className="info-section">
                          <h4>সার্চ ইনটেন্ট প্রকারভেদ:</h4>
                          <div className="grid-2">
                            {note.searchIntent.types.map((t, i) => (
                              <div key={i} className="card-small">
                                <strong>{t.name}</strong>
                                <p>{t.purpose}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {note.eeat && (
                        <div className="info-section">
                          <h4>E-E-A-T:</h4>
                          <div className="tags-row">
                            {note.eeat.components.map((c, i) => (
                              <span key={i} className="tag-pill">
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* --- ID 9: Content Optimization --- */}
                      {note.contentIdeas && (
                        <div className="info-section">
                          <h4>কনটেন্ট আইডিয়া (প্রতিযোগী থেকে):</h4>
                          <ul className="check-list">
                            {note.contentIdeas.fromCompetitors.map(
                              (idea, i) => (
                                <li key={i}>💡 {idea}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {/* --- ID 10: EEAT Detail --- */}
                      {note.components && (
                        <div className="info-section">
                          <h4>EEAT উপাদানসমূহ:</h4>
                          <div className="grid-2">
                            {note.components.map((comp, i) => (
                              <div key={i} className="card-small">
                                <strong>{comp.name}</strong>
                                <p>{comp.definition}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* --- ID 11: Content Toolkit --- */}
                      {note.contentBriefCreation && (
                        <div className="info-section">
                          <h4>কনটেন্ট ব্রিফ ফিচার:</h4>
                          <ul className="check-list">
                            {note.contentBriefCreation.features.map((f, i) => (
                              <li key={i}>📄 {f}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* --- ID 12: Pillar Pages --- */}
                      {note.definitions && (
                        <div className="info-section">
                          <div className="card-block">
                            <strong>Pillar Page:</strong>{" "}
                            {note.definitions.pillarPage}
                          </div>
                          <div
                            className="card-block"
                            style={{ marginTop: "10px" }}
                          >
                            <strong>Cluster Page:</strong>{" "}
                            {note.definitions.clusterPage}
                          </div>
                        </div>
                      )}
                      {note.benefits && (
                        <div className="info-section">
                          <h4>উপকারিতা:</h4>
                          <ul className="sub-list">
                            {note.benefits.map((b, i) => (
                              <li key={i}>
                                <strong>{b.title}:</strong> {b.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* --- ID 13: Internal Linking --- */}
                      {note.internalLinkingRules && (
                        <div className="info-section">
                          <h4>লিংকিং রুলস:</h4>
                          {note.internalLinkingRules.map((rule, i) => (
                            <div key={i} className="card-small">
                              <strong>{rule.rule}</strong>
                              <p>
                                {rule.guideline || rule.guidelines?.join(", ")}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* --- ID 14: GEO/AI --- */}
                      {note.keyChanges && (
                        <div className="info-section">
                          <h4>AI যুগে পরিবর্তন:</h4>
                          {note.keyChanges.map((kc, i) => (
                            <div key={i} className="card-block">
                              <strong>{kc.change}</strong>
                              <p>উদ্দেশ্য: {kc.purpose || kc.reason}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* --- ID 15: Image Optimization --- */}
                      {note.optimizationRules && (
                        <div className="info-section">
                          <h4>ইমেজ অপটিমাইজেশন রুলস:</h4>
                          <div className="grid-2">
                            {note.optimizationRules.map((rule, i) => (
                              <div key={i} className="card-small">
                                <strong>{rule.rule}</strong>
                                <p>{rule.guideline}</p>
                                {rule.wrong && (
                                  <p className="text-red">ভুল: {rule.wrong}</p>
                                )}
                                {rule.right && (
                                  <p className="text-green">
                                    সঠিক: {rule.right}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* --- ID 16: Alt Text Fix --- */}
                      {note.aiGeneration && (
                        <div className="info-section highlight-blue">
                          <h4>AI দিয়ে Alt Text:</h4>
                          <p>
                            <strong>Prompt:</strong> "
                            {note.aiGeneration.examplePrompt}"
                          </p>
                          <p>Process: {note.aiGeneration.workflow}</p>
                        </div>
                      )}

                      {/* --- ID 17: Broken Links --- */}
                      {note.semrushSteps && (
                        <div className="info-section">
                          <h4>খুঁজে বের করার ধাপ:</h4>
                          <ol>
                            {note.semrushSteps.map((s, i) => (
                              <li key={i}>
                                <strong>{s.step}</strong>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* --- ID 18: Cannibalization --- */}
                      {note.solutions && (
                        <div className="info-section">
                          <h4>সমাধান:</h4>
                          <div className="grid-2">
                            {note.solutions.map((sol, i) => (
                              <div key={i} className="card-small">
                                <strong>{sol.solution}</strong>
                                <p>{sol.action || sol.explanation}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* --- ID 19: On-Page Checker --- */}
                      {note.collectIdeas && (
                        <div className="info-section highlight-green">
                          <h4>Collect Ideas ফিচার:</h4>
                          <ul>
                            {note.collectIdeas.features.map((f, i) => (
                              <li key={i}>✨ {f}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {note.exampleSuggestions && (
                        <div className="info-section">
                          <h4>সাজেশন উদাহরণ:</h4>
                          <ul className="check-list">
                            {note.exampleSuggestions.suggestions.map((s, i) => (
                              <li key={i}>👉 {s}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* --- ID 20: Course Recap --- */}
                      {note.learnedTopics && (
                        <div className="info-section">
                          <h4>যা শিখেছেন:</h4>
                          <ul className="check-list">
                            {note.learnedTopics.map((t, i) => (
                              <li key={i}>🎓 {t}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Common Content (Markdown Renderer) */}
                      <div className="content-section">
                        <h4>বিস্তারিত ব্যাখ্যা:</h4>
                        <div className="content-text">
                          {note.content
                            .split("\n")
                            .map(
                              (paragraph, index) =>
                                paragraph.trim() && (
                                  <p key={index}>{paragraph}</p>
                                )
                            )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredNotes.length === 0 && (
              <div className="no-results">
                <p>
                  কোন নোট পাওয়া যায়নি। অনুগ্রহ করে অন্য কোন শব্দ দিয়ে খুঁজুন।
                </p>
              </div>
            )}
          </section>
        </>
      )}

      {/* Data Tab Content (Unchanged) */}
      {activeTab === "data" && (
        <div className="data-container">
          <header className="data-header">
            <h1>📊 On-Page SEO নোটস ডেটা</h1>
            <p>সম্পূর্ণ ডেটা স্ট্রাকচার এবং পরিসংখ্যান</p>
          </header>

          <div className="data-stats">
            <div className="stat-item">
              <h3>মোট নোটস</h3>
              <span className="stat-number">{onPageNotesData.length}</span>
            </div>
            <div className="stat-item">
              <h3>ক্যাটাগরি</h3>
              <span className="stat-number">{categories.length}</span>
            </div>
            <div className="stat-item">
              <h3>ট্যাগস</h3>
              <span className="stat-number">
                {new Set(onPageNotesData.flatMap((note) => note.tags)).size}
              </span>
            </div>
          </div>

          <div className="data-content">
            <section className="categories-section">
              <h2>ক্যাটাগরি তালিকা</h2>
              <div className="categories-grid">
                {categories.map((category) => (
                  <div key={category.id} className="category-card">
                    <div
                      className="category-color"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <h3>{category.name}</h3>
                    <p>ID: {category.id}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="raw-data">
              <h2>কমপ্লিট ডেটা প্রিভিউ</h2>
              <div className="data-preview">
                <pre>{JSON.stringify(onPageNotesData, null, 2)}</pre>
              </div>
            </section>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px 20px;
          border-radius: 15px;
          margin-bottom: 30px;
          text-align: center;
        }

        .header-content h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .header-content p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        /* Tab Navigation */
        .tab-navigation {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
          background: white;
          padding: 10px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .tab-btn {
          flex: 1;
          padding: 15px 20px;
          border: none;
          background: #f8fafc;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s;
        }

        .tab-btn.active {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .tab-btn:hover:not(.active) {
          background: #e2e8f0;
        }

        /* Notes Tab Styles */
        .controls {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 30px;
        }

        .search-input {
          width: 100%;
          padding: 15px;
          border: 2px solid #e1e5e9;
          border-radius: 10px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        .search-input:focus {
          outline: none;
          border-color: #667eea;
        }

        .category-filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .category-btn {
          padding: 10px 20px;
          border: 2px solid #e1e5e9;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 500;
        }

        .category-btn.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .category-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: white;
          padding: 25px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-top: 4px solid #667eea;
        }

        .stat-card h3 {
          font-size: 2rem;
          color: #667eea;
          margin-bottom: 5px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 25px;
          color: #333;
        }

        .count {
          background: #667eea;
          color: white;
          padding: 2px 10px;
          border-radius: 20px;
          font-size: 0.9rem;
        }

        .notes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
        }

        .note-card {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-left: 5px solid #667eea;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .note-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .note-header {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 15px;
        }

        .note-icon {
          font-size: 2rem;
        }

        .note-title-section h3 {
          margin: 0 0 8px 0;
          color: #333;
          line-height: 1.3;
        }

        .category-tag {
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .note-summary {
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .note-tags {
          margin-bottom: 20px;
        }

        .tag {
          background: #f1f5f9;
          color: #475569;
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 0.8rem;
          margin-right: 8px;
          display: inline-block;
          margin-bottom: 5px;
        }

        .toggle-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s;
          width: 100%;
        }

        .toggle-btn:hover {
          background: #5a6fd8;
        }

        .expanded-content {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e1e5e9;
        }

        .expanded-content h4 {
          color: #333;
          margin-bottom: 15px;
          font-size: 1.1rem;
        }

        /* Generic Info Sections */
        .info-section {
          background: #f8fafc;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 15px;
          border-left: 4px solid #e2e8f0;
        }

        .info-section.highlight-blue {
          border-left-color: #3b82f6;
          background: #eff6ff;
        }
        .info-section.highlight-green {
          border-left-color: #10b981;
          background: #f0fdf4;
        }
        .info-section.highlight-orange {
          border-left-color: #f59e0b;
          background: #fffbeb;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
        }

        .card-small,
        .card-block {
          background: white;
          padding: 12px;
          border-radius: 6px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .check-list,
        .sub-list {
          list-style: none;
          padding: 0;
        }
        .check-list li,
        .sub-list li {
          padding: 5px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .bad {
          background: #fef2f2;
          color: #991b1b;
          padding: 10px;
          border-radius: 6px;
        }
        .good {
          background: #f0fdf4;
          color: #166534;
          padding: 10px;
          border-radius: 6px;
        }

        .text-red {
          color: #ef4444;
          font-size: 0.9em;
        }
        .text-green {
          color: #10b981;
          font-size: 0.9em;
        }

        .tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tag-pill {
          background: #e0f2fe;
          color: #0284c7;
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 0.85em;
          font-weight: 500;
        }

        .content-section {
          margin-top: 20px;
        }

        .content-text p {
          margin-bottom: 12px;
          line-height: 1.7;
          color: #555;
        }

        .no-results {
          text-align: center;
          padding: 40px;
          color: #666;
        }

        /* Data Tab Styles */
        .data-container {
          max-width: 100%;
        }

        .data-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 30px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 15px;
        }

        .data-header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .data-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .stat-item {
          background: white;
          padding: 25px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-top: 4px solid #667eea;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: #667eea;
        }

        .categories-section {
          margin-bottom: 40px;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .category-card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-left: 4px solid #667eea;
        }

        .category-color {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .raw-data {
          margin-bottom: 40px;
        }

        .data-preview {
          background: #1a202c;
          color: #e2e8f0;
          padding: 20px;
          border-radius: 8px;
          overflow-x: auto;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .container {
            padding: 15px;
          }
          .header-content h1 {
            font-size: 2rem;
          }
          .notes-grid {
            grid-template-columns: 1fr;
          }
          .category-filters {
            justify-content: center;
          }
          .stats {
            grid-template-columns: 1fr;
          }
          .comparison-grid {
            grid-template-columns: 1fr;
          }
          .data-header h1 {
            font-size: 2rem;
          }
          .tab-navigation {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
