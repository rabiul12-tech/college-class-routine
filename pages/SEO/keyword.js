import { keywordData, seoStrategy } from "../SEO/bibs/keywordData";

import "../qa.css";
export default function KeywordResearchAnalysis() {
  return (
    <div>
      <div className="container">
        <h1>
          What This Screenshot Is Showing (Keyword Research Data for "
          {keywordData.primaryKeyword}")
        </h1>

        <p>
          This is a keyword research dashboard (likely from Ahrefs, Keywords
          Everywhere, or a similar tool) analyzing searches related to{" "}
          <span className="keyword">"{keywordData.primaryKeyword}"</span>.
          Here's a breakdown of the key metrics:
        </p>

        <h2>1. Search Volume & Geography</h2>
        <div className="metric-box">
          <p>
            <strong>Global Monthly Search Volume</strong>:{" "}
            <span className="volume">
              {keywordData.metrics.globalVolume} searches/month
            </span>
          </p>
          <p>
            <strong>Top countries</strong>:
          </p>
          <ul>
            {keywordData.metrics.topCountries.map((country, index) => (
              <li key={index}>
                {country.country}: {country.volume}
              </li>
            ))}
          </ul>
          <p>
            This is a{" "}
            <strong>low-competition, long-tail informational keyword</strong>{" "}
            with decent volume in English-speaking countries.
          </p>
        </div>

        <h2>
          2. Keyword Difficulty (KD) = {keywordData.metrics.difficulty} →
          labeled "{keywordData.metrics.difficultyLabel}"
        </h2>
        <div className="metric-box">
          <p>
            On a 0–100 scale, KD{" "}
            <span className="difficulty">{keywordData.metrics.difficulty}</span>{" "}
            is <strong>moderate to easy</strong> to rank for, especially if you
            create high-quality, targeted content.
          </p>
          <p>
            "{keywordData.metrics.difficultyLabel}" means with good on-page SEO
            and some authority, a new or medium-strength site can rank in the
            top 10.
          </p>
        </div>

        <h2>3. Intent = {keywordData.metrics.intent}</h2>
        <div className="metric-box">
          <p>
            Users are looking for explanations, formulas, or tools (calculators)
            related to percentages.
          </p>
          <p>
            They want to <strong>learn or use</strong> a percent calculator.
          </p>
        </div>

        <h2>4. Cost Per Click (CPC) = ${keywordData.metrics.cpc}</h2>
        <div className="metric-box">
          <p>
            Extremely low → almost no commercial advertisers → confirms{" "}
            <strong>pure informational intent</strong>, not transactional.
          </p>
        </div>

        <h2>5. Top Questions People Ask (People Also Ask style)</h2>
        <div className="metric-box">
          <ul>
            {keywordData.topQuestions.map((question, index) => (
              <li key={index}>
                "{question.question}" → {question.volume} searches
              </li>
            ))}
          </ul>
        </div>

        <h2>6. Related High-Volume Keywords</h2>
        <div className="metric-box">
          <ul>
            {keywordData.relatedKeywords.map((keyword, index) => (
              <li key={index}>
                {keyword.keyword} →{" "}
                <span className="volume">
                  {keyword.volume.toLocaleString()} global
                </span>
              </li>
            ))}
          </ul>
          <p>These are the big head terms — very competitive.</p>
        </div>

        <h2>7. Current SERP Overview (Top 5 ranking pages)</h2>
        <div className="metric-box">
          <p>
            All top 5 are{" "}
            <strong>actual online percentage calculator tools</strong> with very
            strong domain metrics:
          </p>
          <ul className="serp-list">
            {keywordData.serpResults.map((result, index) => (
              <li key={index} className="serp-item">
                {result.site} {result.metrics && `(${result.metrics})`}
              </li>
            ))}
          </ul>
          <p>
            → The Google SERP is completely dominated by <strong>tools</strong>,
            not blog posts.
          </p>
        </div>
      </div>

      <div className="container">
        <h1>SEO Opportunity & Realistic Strategy</h1>

        <p>
          Even though KD is {keywordData.metrics.difficulty} and volume is only{" "}
          {keywordData.metrics.globalVolume}, this is actually a{" "}
          <strong>very good opportunity</strong> — here's why and how to attack
          it:
        </p>

        <h2>The Real Opportunity</h2>
        <div className="opportunity">
          <p>
            People searching "{keywordData.primaryKeyword}" are{" "}
            <strong>early in the funnel</strong> — they don't even know what
            it's called yet. They want:
          </p>
          <ul>
            <li>An explanation of what a percentage calculator is</li>
            <li>The basic formulas (%, % increase, % decrease, % of, etc.)</li>
            <li>A simple tool to use</li>
          </ul>
          <p>
            If you create the <strong>best, most helpful page</strong> that
            combines explanation + interactive calculator, you can rank in top
            3–5 with a new site within 3–6 months.
          </p>
        </div>
      </div>

      <div className="container">
        <h1>How to Implement & Rank for This Keyword (Step-by-Step)</h1>

        <h2>1. Choose the Right Page Type</h2>
        <div className="strategy">
          <p>
            → Create a <strong>{seoStrategy.pageType}</strong>
          </p>
          <p>URL example: {seoStrategy.urlExample}</p>
          <p>Title: "{seoStrategy.titleExample}"</p>
        </div>

        <h2>2. Content Structure That Wins</h2>
        <div className="strategy">
          <p>
            Use this proven structure (this is what beats the current top
            results):
          </p>

          <div className="markdown-block">{keywordData.contentStructure}</div>
        </div>

        <h2>3. Technical SEO Must-Haves</h2>
        <div className="strategy">
          <ul>
            {seoStrategy.technicalSeo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <h2>4. Build the Calculator Tool</h2>
        <div className="strategy">
          <p>You have 3 options:</p>
          <ol>
            {seoStrategy.calculatorOptions.map((option, index) => (
              <li key={index}>
                <strong>{option.type}</strong>: {option.description}
              </li>
            ))}
          </ol>
        </div>

        <h2>5. On-Page SEO Optimization</h2>
        <div className="strategy">
          <p>
            <strong>Primary keyword in:</strong>
          </p>
          <ul>
            {seoStrategy.onPageSeo.primary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>
            <strong>Secondary keywords:</strong>
          </p>
          <ul>
            {seoStrategy.onPageSeo.secondary.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        </div>

        <h2>6. Link Building Strategy</h2>
        <div className="strategy">
          <ul>
            {seoStrategy.linkBuilding.map((strategy, index) => (
              <li key={index}>{strategy}</li>
            ))}
          </ul>
        </div>

        <h2>Realistic Ranking Timeline (New Site)</h2>
        <div className="timeline">
          <ul>
            {keywordData.timeline.map((item, index) => (
              <li key={index}>
                <strong>{item.period}</strong>: {item.description}
              </li>
            ))}
          </ul>
        </div>

        <h2>Bonus Traffic Trick</h2>
        <div className="strategy">
          <p>Target the cluster:</p>
          <p>Create separate pages/tools for:</p>
          <ul>
            {keywordData.bonusKeywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
          <p>
            Then internally link everything → become the percentage authority.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="conclusion">
          <h1>Summary: Yes, You Should Go For It</h1>
          <p>
            "{keywordData.primaryKeyword}" is a{" "}
            <strong>golden low-competition entry point</strong> into the massive
            percentage niche (millions of searches). Build a better, faster,
            more beautiful tool than the top 5, write clear explanations, and
            you'll rank — and then expand to dominate the entire cluster.
          </p>
          <p>
            If you do it right, one good percentage calculator page can easily
            bring 5,000–20,000+ organic visitors per month within a year.
          </p>
        </div>
      </div>

      <style jsx>{`
        body {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
        }
        p {
          font-size: 24px;
        }
        h1 {
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
          margin-top: 30px;
        }

        h2 {
          color: #2980b9;
          margin-top: 25px;
          padding-left: 10px;
          border-left: 4px solid #3498db;
        }

        h3 {
          color: #3498db;
          margin-top: 20px;
        }

        .container {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 25px;
          margin-bottom: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .highlight {
          background-color: #e8f4fc;
          padding: 15px;
          border-radius: 5px;
          border-left: 4px solid #3498db;
          margin: 15px 0;
        }

        .metric-box {
          background-color: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 5px;
          padding: 15px;
          margin: 10px 0;
        }
        .metric-box p {
          font-size: 24px;
        }
        .keyword {
          font-weight: bold;
          color: #e74c3c;
        }

        .volume {
          color: #27ae60;
          font-weight: bold;
        }

        .difficulty {
          color: #f39c12;
          font-weight: bold;
        }

        .opportunity {
          background-color: #d5f4e6;
          padding: 15px;
          border-radius: 5px;
          border-left: 4px solid #2ecc71;
          margin: 15px 0;
        }

        .strategy {
          background-color: #fff3cd;
          padding: 15px;
          border-radius: 5px;
          border-left: 4px solid #ffc107;
          margin: 15px 0;
        }

        ul,
        ol {
          padding-left: 20px;
        }

        li {
          margin-bottom: 8px;
          font-size: 22px;
        }

        .serp-list {
          list-style-type: none;
          padding-left: 0;
        }

        .serp-item {
          background-color: #f8f9fa;
          padding: 10px;
          margin-bottom: 8px;
          border-radius: 4px;
          border-left: 3px solid #3498db;
        }

        code {
          background-color: #f4f4f4;
          padding: 2px 5px;
          border-radius: 3px;
          font-family: "Courier New", monospace;
        }

        .markdown-block {
          background-color: #2c3e50;
          color: #ecf0f1;
          padding: 15px;
          border-radius: 5px;
          font-family: "Courier New", monospace;
          white-space: pre-wrap;
          margin: 15px 0;
          overflow-x: auto;
        }

        .timeline {
          background-color: #e8f4fc;
          padding: 15px;
          border-radius: 5px;
          margin: 15px 0;
        }

        .conclusion {
          background-color: #d5f4e6;
          padding: 20px;
          border-radius: 5px;
          border: 1px solid #2ecc71;
          margin: 20px 0;
        }
      `}</style>
    </div>
  );
}
