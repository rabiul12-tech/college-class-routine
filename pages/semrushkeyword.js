import { useState } from "react";
import { notesData, categories } from "../lib/notesData";

export default function SEONotesApp() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedNote, setExpandedNote] = useState(null);

  const filteredNotes = notesData.filter((note) => {
    // Handle search for object-based summaries (like note 19)
    const summaryText =
      typeof note.summary === "string"
        ? note.summary
        : note.summary.conclusion +
          " " +
          (note.summary.benefits?.join(" ") || "");

    const matchesCategory =
      activeCategory === "all" || note.category === activeCategory;
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      summaryText.toLowerCase().includes(searchTerm.toLowerCase()) ||
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

              {/* FIX: Conditional rendering for Summary to handle Objects (Note 19) */}
              <p className="note-summary">
                {typeof note.summary === "string"
                  ? note.summary
                  : note.summary?.conclusion || "Summary available in details"}
              </p>

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
                  {/* --- SPECIAL HANDLING FOR OBJECT SUMMARIES (Note 19) --- */}
                  {typeof note.summary === "object" &&
                    note.summary.benefits && (
                      <div className="features-section">
                        <h4>সুবিধাসমূহ (Summary Benefits):</h4>
                        <ul>
                          {note.summary.benefits.map((benefit, i) => (
                            <li key={i}>✓ {benefit}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {/* --- ORIGINAL TYPES (ID 1-10) --- */}

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

                  {note.type === "practical-case-study" && note.caseStudy && (
                    <div className="case-study-section">
                      <h4>কেস স্টাডি বিবরণ:</h4>
                      <div className="info-box">
                        <p>
                          <strong>ব্যবসা:</strong> {note.caseStudy.business}
                        </p>
                        <p>
                          <strong>শিল্প:</strong> {note.caseStudy.industry}
                        </p>
                        <div className="metrics-grid">
                          {Object.entries(note.caseStudy.keyMetrics || {}).map(
                            ([keyword, metrics]) => (
                              <div key={keyword} className="metric-card">
                                <strong>{keyword}</strong>
                                <div>ভল: {metrics.volume}</div>
                                <div>KD: {metrics.difficulty}</div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {note.type === "keyword-strategy" && note.criteria && (
                    <div className="strategy-section">
                      <h4>নির্বাচন মানদণ্ড:</h4>
                      <div className="criteria-grid">
                        {note.criteria.map((criterion, index) => (
                          <div key={index} className="criterion-card">
                            <strong>{criterion.name}</strong>
                            <p>{criterion.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {note.type === "tool-demo" && note.toolUsage && (
                    <div className="tool-demo-section">
                      <h4>টুল ব্যবহার:</h4>
                      <div className="info-box">
                        <p>
                          <strong>টুল:</strong> {note.toolUsage.toolName}
                        </p>
                        <p>
                          <strong>টার্গেট:</strong> {note.toolUsage.seedKeyword}
                        </p>
                      </div>
                    </div>
                  )}

                  {note.type === "strategy-builder" && note.strategyBuilder && (
                    <div className="strategy-builder-section">
                      <h4>বিশ্লেষণ:</h4>
                      <div className="info-box">
                        <p>
                          <strong>প্রশ্ন:</strong>{" "}
                          {note.strategyBuilder.mainQuestion}
                        </p>
                        <p>
                          <strong>উত্তর:</strong> {note.strategyBuilder.answer}
                        </p>
                      </div>
                    </div>
                  )}

                  {note.type === "competitor-analysis" &&
                    note.analysisStrategies && (
                      <div className="strategy-section">
                        <h4>বিশ্লেষণ কৌশল:</h4>
                        <div className="strategy-cards">
                          {Object.entries(note.analysisStrategies).map(
                            ([key, data]) => (
                              <div key={key} className="strategy-card">
                                <strong>
                                  {key === "forNewSites"
                                    ? "নতুন সাইট"
                                    : "পুরাতন সাইট"}
                                </strong>
                                <p>Filter: {data.filter}</p>
                                <span className="importance-tag">
                                  {data.purpose}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {note.type === "competitor-gap-analysis" &&
                    note.gapAnalysisFilters && (
                      <div className="gap-analysis-section">
                        <h4>Keyword Gap Filters:</h4>
                        <div className="gap-filters">
                          {Object.entries(note.gapAnalysisFilters).map(
                            ([key, data]) => (
                              <div key={key} className="filter-card">
                                <strong>
                                  {key.toUpperCase().replace("KEYWORDS", "")}
                                </strong>
                                <p>{data.description}</p>
                                {data.examples && (
                                  <div className="filter-examples">
                                    {data.examples.slice(0, 3).map((ex, i) => (
                                      <span key={i} className="example-tag">
                                        {ex}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* --- NEW TYPES (ID 11-20) ADDED BELOW --- */}

                  {/* ID 11: AI Keyword Research */}
                  {note.type === "ai-keyword-research" &&
                    note.aiRankingStrategy && (
                      <div className="ai-section">
                        <h4>AI Ranking Strategy:</h4>
                        <div className="info-box">
                          <p>
                            <strong>ফোকাস:</strong>{" "}
                            {note.aiRankingStrategy.mainFocus}
                          </p>
                          <ul>
                            {note.aiRankingStrategy.importanceHierarchy.map(
                              (item, i) => (
                                <li key={i}>• {item}</li>
                              )
                            )}
                          </ul>
                        </div>
                        {note.businessStrategy && (
                          <div
                            className="strategy-card"
                            style={{ marginTop: "10px" }}
                          >
                            <strong>নতুন ব্যবসার জন্য:</strong>
                            <p>
                              {
                                note.businessStrategy.forNewBusinesses
                                  .recommendation
                              }
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                  {/* ID 12: Keyword Mapping */}
                  {note.type === "keyword-mapping" &&
                    note.implementationSteps && (
                      <div className="mapping-section">
                        <h4>ম্যাপিং ধাপসমূহ:</h4>
                        <div className="methods-list">
                          <div className="method-item">
                            <span className="method-number">1</span>
                            <div>
                              <strong>Content Audit:</strong>{" "}
                              {note.implementationSteps.step1.description}
                            </div>
                          </div>
                          <div className="method-item">
                            <span className="method-number">2</span>
                            <div>
                              <strong>Assignment:</strong>{" "}
                              {note.implementationSteps.step2.description}
                            </div>
                          </div>
                        </div>
                        {note.pageStructure && (
                          <div
                            className="info-box"
                            style={{ marginTop: "10px" }}
                          >
                            <strong>পেইজ স্ট্রাকচার:</strong>{" "}
                            {note.pageStructure.principle}
                          </div>
                        )}
                      </div>
                    )}

                  {/* ID 13: Cluster Prioritization */}
                  {note.type === "cluster-prioritization" &&
                    note.homepageStrategy && (
                      <div className="strategy-section">
                        <h4>Homepage Strategy:</h4>
                        <div className="strategy-cards">
                          <div className="strategy-card">
                            <strong>Path 1: Product Focus</strong>
                            <p>
                              {note.homepageStrategy.twoPaths.path1.strategy}
                            </p>
                          </div>
                          <div className="strategy-card">
                            <strong>Path 2: Brand Focus</strong>
                            <p>
                              {note.homepageStrategy.twoPaths.path2.strategy}
                            </p>
                          </div>
                        </div>
                        <div
                          className="info-box"
                          style={{ marginTop: "10px", background: "#e0f2fe" }}
                        >
                          <strong>সিদ্ধান্ত:</strong>{" "}
                          {note.homepageStrategy.finalDecision}
                        </div>
                      </div>
                    )}

                  {/* ID 14: Mapping Implementation */}
                  {note.type === "keyword-mapping-implementation" &&
                    note.keywordTypes && (
                      <div className="implementation-section">
                        <h4>Primary vs Secondary:</h4>
                        <div className="info-box">
                          <p>
                            <strong>Secondary Criteria:</strong>
                          </p>
                          <ul>
                            {note.keywordTypes.primaryVsSecondary.secondaryCriteria.map(
                              (c, i) => (
                                <li key={i}>✓ {c}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    )}

                  {/* ID 15: Practical Mapping Process */}
                  {note.type === "practical-mapping-process" &&
                    note.deepMapping && (
                      <div className="process-section">
                        <h4>Mapping Tasks:</h4>
                        <div className="criteria-grid">
                          {Object.entries(note.deepMapping.threeMainTasks).map(
                            ([key, task]) => (
                              <div key={key} className="criterion-card">
                                <p>{task.description}</p>
                              </div>
                            )
                          )}
                        </div>
                        {note.finalMappingSheet && (
                          <div
                            className="info-box"
                            style={{ marginTop: "10px" }}
                          >
                            <strong>Final Sheet Columns:</strong>{" "}
                            {note.finalMappingSheet.components.join(", ")}
                          </div>
                        )}
                      </div>
                    )}

                  {/* ID 16: Topical Authority */}
                  {note.type === "topical-authority" &&
                    note.pillarClusterModel && (
                      <div className="authority-section">
                        <h4>Pillar-Cluster Model:</h4>
                        <div className="strategy-cards">
                          <div className="strategy-card">
                            <strong>Pillar Page</strong>
                            <p>
                              {
                                note.pillarClusterModel.components.pillarPage
                                  .definition
                              }
                            </p>
                          </div>
                          <div className="strategy-card">
                            <strong>Cluster Content</strong>
                            <p>
                              {
                                note.pillarClusterModel.components
                                  .clusterContent.definition
                              }
                            </p>
                          </div>
                        </div>
                        <div className="info-box" style={{ marginTop: "10px" }}>
                          <strong>Authority Definition:</strong>{" "}
                          {note.topicalAuthorityDefinition.definition}
                        </div>
                      </div>
                    )}

                  {/* ID 17: AI Powered Research */}
                  {note.type === "ai-powered-research" && note.aiWorkflow && (
                    <div className="ai-tools-section">
                      <h4>AI Workflow:</h4>
                      <div className="methods-list">
                        {note.aiWorkflow.aiActions.map((action, i) => (
                          <div key={i} className="method-item">
                            <span className="method-number">AI</span>
                            {action}
                          </div>
                        ))}
                      </div>
                      {note.highPotentialIdeas && (
                        <div
                          className="info-box"
                          style={{
                            marginTop: "10px",
                            borderLeft: "4px solid #10b981",
                          }}
                        >
                          <strong>High Potential:</strong>{" "}
                          {note.highPotentialIdeas.criteria.join(" + ")}
                        </div>
                      )}
                    </div>
                  )}

                  {/* ID 18 & 19: Competitor/Position Tracking */}
                  {(note.type === "competitor-tracking" ||
                    note.type === "position-tracking-fundamentals") && (
                    <div className="tracking-section">
                      {note.comparisonFeatures && (
                        <div className="info-box">
                          <h4>Comparison Features:</h4>
                          <ul>
                            {note.comparisonFeatures.insights.map(
                              (insight, i) => (
                                <li key={i}>{insight}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                      {note.positionTrackingDefinition && (
                        <div className="info-box">
                          <h4>Uses:</h4>
                          <ul>
                            {note.positionTrackingDefinition.uses.map(
                              (use, i) => (
                                <li key={i}>{use}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* ID 20: Course Recap */}
                  {note.type === "course-recap" &&
                    note.courseAccomplishments && (
                      <div className="recap-section">
                        <h4>আপনার অর্জন:</h4>
                        <div className="methods-list">
                          {note.courseAccomplishments.accomplishments.map(
                            (acc, i) => (
                              <div key={i} className="method-item">
                                <span className="method-number">✓</span>
                                <div>
                                  <strong>{acc.step}</strong>
                                  <p
                                    style={{
                                      margin: 0,
                                      fontSize: "1.9rem",
                                      color: "#666",
                                    }}
                                  >
                                    {acc.description}
                                  </p>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                        <div
                          className="case-study-section"
                          style={{ marginTop: "20px", textAlign: "center" }}
                        >
                          <h4>পরবর্তী ধাপ: {note.nextSteps.nextPhase}</h4>
                          <p>{note.nextSteps.description}</p>
                        </div>
                      </div>
                    )}

                  {/* Common Content (Always Visible) */}
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
          font-size: 3.5rem;
          margin-bottom: 10px;
        }

        .header-content p {
          font-size: 1.4rem;
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
          font-size: 2.3rem;
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
          font-size: 1.2rem;
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
          font-size: 1.3rem;
        }

        /* Generic Classes for reuse */
        .info-box,
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
          font-size: 1.8rem;
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
          flex-shrink: 0;
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
