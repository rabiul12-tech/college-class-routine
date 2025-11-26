import { useState } from "react";
import { notesData, categories } from "./lib/notesData";

export default function SEONotesApp() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedNote, setExpandedNote] = useState(null);

  const filteredNotes = notesData.filter((note) => {
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
          <h1>📊 SEO কোর্স নোটস</h1>
          <p>Semrush দিয়ে কীওয়ার্ড রিসার্চ - সম্পূর্ণ বাংলা গাইড</p>
        </div>
      </header>

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
          <h3>{notesData.length}</h3>
          <p>মোট নোটস</p>
        </div>
        <div className="stat-card">
          <h3>{categories.length}</h3>
          <p>ক্যাটাগরি</p>
        </div>
        <div className="stat-card">
          <h3>{new Set(notesData.flatMap((note) => note.tags)).size}</h3>
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
                  {/* Course Overview Specific Content */}
                  {note.type === "course-overview" && note.features && (
                    <div className="features-section">
                      <h4>কোর্সের বৈশিষ্ট্য:</h4>
                      <ul>
                        {note.features.map((feature, index) => (
                          <li key={index}>✓ {feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Keyword Basics Specific Content */}
                  {note.type === "keyword-basics" && note.keyPoints && (
                    <div className="keypoints-section">
                      <h4>মূল পয়েন্ট:</h4>
                      <ul>
                        {note.keyPoints.map((point, index) => (
                          <li key={index}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Keyword Research Specific Content */}
                  {note.type === "keyword-research" && note.examples && (
                    <div className="examples-section">
                      <h4>বাস্তব উদাহরণ:</h4>
                      <div className="examples-grid">
                        {note.examples.map((example, index) => (
                          <div key={index} className="example-card">
                            <strong>{example.keyword}</strong>
                            <div>ভলিউম: {example.volume}</div>
                            <div>কঠিনতা: {example.difficulty}</div>
                            <div>সিদ্ধান্ত: {example.verdict}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Seed Keywords Specific Content */}
                  {note.type === "seed-keywords" && note.methods && (
                    <div className="methods-section">
                      <h4>সন্ধানের পদ্ধতি:</h4>
                      <div className="methods-list">
                        {note.methods.map((method, index) => (
                          <div key={index} className="method-item">
                            <span className="method-number">{index + 1}</span>
                            {method}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Practical Case Study Specific Content */}
                  {note.type === "practical-case-study" && note.caseStudy && (
                    <div className="case-study-section">
                      <h4>কেস স্টাডি বিবরণ:</h4>
                      <div className="case-study-info">
                        <p>
                          <strong>ব্যবসা:</strong> {note.caseStudy.business}
                        </p>
                        <p>
                          <strong>শিল্প:</strong> {note.caseStudy.industry}
                        </p>
                        <p>
                          <strong>চূড়ান্ত সিড কীওয়ার্ড:</strong>{" "}
                          {note.caseStudy.finalSeedKeyword}
                        </p>
                        <div className="metrics-grid">
                          {Object.entries(note.caseStudy.keyMetrics || {}).map(
                            ([keyword, metrics]) => (
                              <div key={keyword} className="metric-card">
                                <strong>{keyword}</strong>
                                <div>ভলিউম: {metrics.volume}</div>
                                <div>কঠিনতা: {metrics.difficulty}</div>
                                <div>সুযোগ: {metrics.opportunity}</div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Keyword Strategy Specific Content */}
                  {note.type === "keyword-strategy" && note.criteria && (
                    <div className="strategy-section">
                      <h4>কীওয়ার্ড নির্বাচনের মানদণ্ড:</h4>
                      <div className="criteria-grid">
                        {note.criteria.map((criterion, index) => (
                          <div key={index} className="criterion-card">
                            <strong>{criterion.name}</strong>
                            <p>{criterion.description}</p>
                            <span className="importance-tag">
                              গুরুত্ব: {criterion.importance}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tool Demo Specific Content */}
                  {note.type === "tool-demo" && note.toolUsage && (
                    <div className="tool-demo-section">
                      <h4>টুল ব্যবহারের বিবরণ:</h4>
                      <div className="tool-info">
                        <p>
                          <strong>টুল:</strong> {note.toolUsage.toolName}
                        </p>
                        <p>
                          <strong>সিড কীওয়ার্ড:</strong>{" "}
                          {note.toolUsage.seedKeyword}
                        </p>
                        <div className="tool-metrics">
                          <h5>প্রাথমিক মেট্রিক্স:</h5>
                          <div className="metrics">
                            <span>
                              ভলিউম: {note.toolUsage.initialMetrics.volume}
                            </span>
                            <span>
                              কঠিনতা: {note.toolUsage.initialMetrics.difficulty}
                            </span>
                            <span>
                              প্রতিযোগিতা:{" "}
                              {note.toolUsage.initialMetrics.competition}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Strategy Builder Specific Content */}
                  {note.type === "strategy-builder" && note.strategyBuilder && (
                    <div className="strategy-builder-section">
                      <h4>স্ট্র্যাটেজি বিল্ডার বিশ্লেষণ:</h4>
                      <div className="builder-info">
                        <p>
                          <strong>মোট কীওয়ার্ড:</strong>{" "}
                          {note.strategyBuilder.totalKeywords}
                        </p>
                        <p>
                          <strong>প্রধান প্রশ্ন:</strong>{" "}
                          {note.strategyBuilder.mainQuestion}
                        </p>
                        <p>
                          <strong>উত্তর:</strong> {note.strategyBuilder.answer}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Competitor Analysis Specific Content */}
                  {note.type === "competitor-analysis" && note.toolUsage && (
                    <div className="competitor-analysis-section">
                      <h4>প্রতিযোগী বিশ্লেষণ:</h4>
                      <div className="competitor-info">
                        <p>
                          <strong>টুল:</strong> {note.toolUsage.toolName}
                        </p>
                        <p>
                          <strong>প্রতিযোগী:</strong>{" "}
                          {note.toolUsage.competitorDomain}
                        </p>
                        <div className="analysis-strategies">
                          <h5>বিশ্লেষণ কৌশল:</h5>
                          <div className="strategy-cards">
                            {Object.entries(note.analysisStrategies || {}).map(
                              ([strategyType, strategy]) => (
                                <div
                                  key={strategyType}
                                  className="strategy-card"
                                >
                                  <strong>
                                    {strategyType === "forNewSites"
                                      ? "নতুন সাইটের জন্য"
                                      : "বিদ্যমান সাইটের জন্য"}
                                  </strong>
                                  <p>ফিল্টার: {strategy.filter}</p>
                                  <p>উদ্দেশ্য: {strategy.purpose}</p>
                                  {strategy.examples && (
                                    <div className="strategy-examples">
                                      {strategy.examples
                                        .slice(0, 3)
                                        .map((example, idx) => (
                                          <span
                                            key={idx}
                                            className="example-tag"
                                          >
                                            {example}
                                          </span>
                                        ))}
                                    </div>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Competitor Gap Analysis Specific Content */}
                  {note.type === "competitor-gap-analysis" &&
                    note.toolUsage && (
                      <div className="gap-analysis-section">
                        <h4>গ্যাপ বিশ্লেষণ:</h4>
                        <div className="gap-info">
                          <p>
                            <strong>টুল:</strong> {note.toolUsage.toolName}
                          </p>
                          <p>
                            <strong>তুলনা করা ডোমেইন:</strong>{" "}
                            {note.toolUsage.domainsCompared.join(", ")}
                          </p>
                          <div className="gap-filters">
                            <h5>গ্যাপ ফিল্টার:</h5>
                            {Object.entries(note.gapAnalysisFilters || {}).map(
                              ([filterType, filter]) => (
                                <div key={filterType} className="filter-card">
                                  <strong>
                                    {filterType === "missingKeywords"
                                      ? "মিসিং কীওয়ার্ড"
                                      : filterType === "weakKeywords"
                                      ? "দুর্বল কীওয়ার্ড"
                                      : "শক্তিশালী কীওয়ার্ড"}
                                  </strong>
                                  <p>{filter.description}</p>
                                  {filter.kdFilter && (
                                    <p>KD ফিল্টার: {filter.kdFilter}</p>
                                  )}
                                  {filter.examples && (
                                    <div className="filter-examples">
                                      {filter.examples
                                        .slice(0, 3)
                                        .map((example, idx) => (
                                          <span
                                            key={idx}
                                            className="example-tag"
                                          >
                                            {example}
                                          </span>
                                        ))}
                                    </div>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                  {/* Common Content */}
                  <div className="content-section">
                    <h4>বিস্তারিত ব্যাখ্যা:</h4>
                    <div className="content-text">
                      {note.content
                        .split("\n")
                        .map(
                          (paragraph, index) =>
                            paragraph.trim() && <p key={index}>{paragraph}</p>
                        )}
                    </div>
                  </div>

                  {/* Key Learnings Section */}
                  {(note.keyLearnings || note.keyInsights) && (
                    <div className="learnings-section">
                      <h4>মূল শিক্ষা:</h4>
                      <ul>
                        {(note.keyLearnings || note.keyInsights).map(
                          (learning, index) => (
                            <li key={index}>• {learning}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
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

        /* Additional Styles for New Sections */
        .case-study-info,
        .tool-info,
        .builder-info,
        .competitor-info,
        .gap-info {
          background: #f8fafc;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 15px;
        }

        .metrics-grid,
        .criteria-grid,
        .strategy-cards,
        .gap-filters {
          display: grid;
          gap: 10px;
          margin-top: 10px;
        }

        .metric-card,
        .criterion-card,
        .strategy-card,
        .filter-card {
          background: white;
          padding: 12px;
          border-radius: 6px;
          border-left: 4px solid #667eea;
        }

        .importance-tag,
        .example-tag {
          background: #e0f2fe;
          color: #0369a1;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          margin-right: 5px;
          display: inline-block;
          margin-top: 5px;
        }

        .learnings-section {
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid #e1e5e9;
        }

        .learnings-section ul {
          list-style: none;
          padding: 0;
        }

        .learnings-section li {
          padding: 5px 0;
          color: #555;
        }

        .features-section ul,
        .keypoints-section ul {
          list-style: none;
          padding: 0;
        }

        .features-section li,
        .keypoints-section li {
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .examples-grid {
          display: grid;
          gap: 15px;
          margin-bottom: 20px;
        }

        .example-card {
          background: #f8fafc;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #10b981;
        }

        .methods-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        .method-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px;
          background: #f8fafc;
          border-radius: 8px;
        }

        .method-number {
          background: #667eea;
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
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

          .metrics-grid,
          .criteria-grid,
          .strategy-cards,
          .gap-filters {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
