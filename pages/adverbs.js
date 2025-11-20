import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
export default function AdverbsPage() {
  const [active, setActive] = useState("literally");

  return (
    <>
      <Head>
        <title>6 Must-Know English Adverbs - Study Sheet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container">
        <header>
          <h1>6 Must-Know English Adverbs</h1>
          <p className="subtitle">
            Clean, clear, and easy-to-study reference sheet
          </p>
        </header>
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
        <div className="intro">
          <p>
            Click on each adverb tab to view its meaning and example sentences.
          </p>
        </div>

        <div className="nav-tabs">
          <button
            className={`tab ${active === "literally" ? "active" : ""}`}
            onClick={() => setActive("literally")}
          >
            LITERALLY
          </button>
          <button
            className={`tab ${active === "totally" ? "active" : ""}`}
            onClick={() => setActive("totally")}
          >
            TOTALLY
          </button>
          <button
            className={`tab ${active === "technically" ? "active" : ""}`}
            onClick={() => setActive("technically")}
          >
            TECHNICALLY
          </button>
          <button
            className={`tab ${active === "apparently" ? "active" : ""}`}
            onClick={() => setActive("apparently")}
          >
            APPARENTLY
          </button>
          <button
            className={`tab ${active === "possibly" ? "active" : ""}`}
            onClick={() => setActive("possibly")}
          >
            POSSIBLY
          </button>
          <button
            className={`tab ${active === "initially" ? "active" : ""}`}
            onClick={() => setActive("initially")}
          >
            INITIALLY
          </button>
        </div>

        <div className="content">
          {/* LITERALLY */}
          <div
            className={`adverb-section ${
              active === "literally" ? "active" : ""
            }`}
            id="literally"
          >
            <h2 className="adverb-title">1. LITERALLY</h2>
            <p className="meaning">
              <strong>Meaning:</strong> exactly / really true / or used to
              emphasize or exaggerate.
            </p>

            <h3 className="examples-title">Examples</h3>
            <ul className="examples-list">
              <li className="example-item">
                You could <span className="highlight">literally</span> fry an
                egg on your car.
              </li>
              <li className="example-item">
                I was so startled that I{" "}
                <span className="highlight">literally</span> jumped.
              </li>
              <li className="example-item">
                It's <span className="highlight">literally</span> a five-minute
                walk.
              </li>
              <li className="example-item">
                It <span className="highlight">literally</span> takes you five
                minutes.
              </li>
              <li className="example-item">
                My whole body was <span className="highlight">literally</span>{" "}
                drenched.
              </li>
              <li className="example-item">
                She <span className="highlight">literally</span> starts studying
                in the morning every day.
              </li>
              <li className="example-item">
                I was <span className="highlight">literally</span> studying for
                the last two hours.
              </li>
              <li className="example-item">
                Everyone who <span className="highlight">literally</span>{" "}
                studies English should join.
              </li>
              <li className="example-item">
                I <span className="highlight">literally</span> had no clue you
                were planning a surprise party.
              </li>
              <li className="example-item">
                I <span className="highlight">literally</span> didn't know what
                to say.
              </li>
              <li className="example-item">
                I've <span className="highlight">literally</span> told you a
                million times.
              </li>
              <li className="example-item">
                My dad <span className="highlight">literally</span> exploded
                when he saw my grades.
              </li>
              <li className="example-item">
                I <span className="highlight">literally</span> died laughing at
                that joke.
              </li>
            </ul>
          </div>

          {/* TOTALLY */}
          <div
            className={`adverb-section ${active === "totally" ? "active" : ""}`}
            id="totally"
          >
            <h2 className="adverb-title">2. TOTALLY</h2>
            <p className="meaning">
              <strong>Meaning:</strong> completely / fully (very informal,
              mostly spoken).
            </p>

            <h3 className="examples-title">Examples</h3>
            <ul className="examples-list">
              <li className="example-item">
                I <span className="highlight">totally</span> agree with you.
              </li>
              <li className="example-item">
                I <span className="highlight">totally</span> wanted to cry when
                I realized I <span className="highlight">totally</span> won
                first prize.
              </li>
              <li className="example-item">
                The restaurant was <span className="highlight">totally</span>{" "}
                empty.
              </li>
              <li className="example-item">
                The sequel was <span className="highlight">totally</span>{" "}
                different.
              </li>
              <li className="example-item">
                I was <span className="highlight">totally</span> knackered after
                that long trip.
              </li>
              <li className="example-item">
                You need to <span className="highlight">totally</span> listen to
                the lecture.
              </li>
              <li className="example-item">
                She is <span className="highlight">totally</span> out of your
                league.
              </li>
              <li className="example-item">
                "This pizza is amazing." — "
                <span className="highlight">Totally</span>."
              </li>
              <li className="example-item">
                "I hate it when people are late." — "
                <span className="highlight">Totally</span>."
              </li>
              <li className="example-item">
                I'm <span className="highlight">totally</span> happy to join the
                live.
              </li>
              <li className="example-item">
                You are <span className="highlight">totally</span> doing a great
                job.
              </li>
            </ul>
          </div>

          {/* TECHNICALLY */}
          <div
            className={`adverb-section ${
              active === "technically" ? "active" : ""
            }`}
            id="technically"
          >
            <h2 className="adverb-title">3. TECHNICALLY</h2>
            <p className="meaning">
              <strong>Meaning 1:</strong> according to rules, facts, or law
              <br />
              <strong>Meaning 2:</strong> relating to skill or technique
            </p>

            <h3 className="examples-title">Examples (rules/law)</h3>
            <ul className="examples-list">
              <li className="example-item">
                My nephew is <span className="highlight">technically</span> an
                adult, but he still depends on his parents.
              </li>
              <li className="example-item">
                <span className="highlight">Technically</span>, coffee comes
                from a fruit.
              </li>
              <li className="example-item">
                <span className="highlight">Technically</span> they're a
                teenager, but legally they're an adult.
              </li>
              <li className="example-item">
                <span className="highlight">Technically</span> she's not
                breaking the rules.
              </li>
              <li className="example-item">
                <span className="highlight">Technically</span>, tomatoes are a
                fruit.
              </li>
              <li className="example-item">
                <span className="highlight">Technically</span>, he's not my boss
                anymore.
              </li>
              <li className="example-item">
                He's <span className="highlight">technically</span> the boss,
                but his wife makes all the decisions.
              </li>
            </ul>

            <h3 className="examples-title">Examples (skill/technique)</h3>
            <ul className="examples-list">
              <li className="example-item">
                She's a <span className="highlight">technically</span> strong
                dancer with perfect posture.
              </li>
              <li className="example-item">
                Soccer players today are{" "}
                <span className="highlight">technically</span> superior because
                training has improved.
              </li>
            </ul>
          </div>

          {/* APPARENTLY */}
          <div
            className={`adverb-section ${
              active === "apparently" ? "active" : ""
            }`}
            id="apparently"
          >
            <h2 className="adverb-title">4. APPARENTLY</h2>
            <p className="meaning">
              <strong>Meaning:</strong> I heard this / I'm not completely sure.
            </p>

            <h3 className="examples-title">Examples</h3>
            <ul className="examples-list">
              <li className="example-item">
                <span className="highlight">Apparently</span>, there's been an
                accident up ahead.
              </li>
              <li className="example-item">
                <span className="highlight">Apparently</span>, she's the best
                student in the class.
              </li>
              <li className="example-item">
                <span className="highlight">Apparently</span>, it'll rain today.
              </li>
              <li className="example-item">
                <span className="highlight">Apparently</span>, the company
                planned to expand its operations.
              </li>
              <li className="example-item">
                <span className="highlight">Apparently</span>, Kelly quit and
                isn't coming back.
              </li>
              <li className="example-item">
                <span className="highlight">Apparently</span> there's a traffic
                jam all day.
              </li>
              <li className="example-item">
                <span className="highlight">Apparently</span>, the new app has
                many bugs.
              </li>
              <li className="example-item">
                <span className="highlight">Apparently</span>, they're still
                together.
              </li>
              <li className="example-item">
                Matilda is <span className="highlight">apparently</span> a
                really good basketball player.
              </li>
            </ul>
          </div>

          {/* POSSIBLY */}
          <div
            className={`adverb-section ${
              active === "possibly" ? "active" : ""
            }`}
            id="possibly"
          >
            <h2 className="adverb-title">5. POSSIBLY</h2>
            <p className="meaning">
              <strong>Meaning:</strong> maybe (50/50 chance).
              <br />
              Often used with: <strong>can, could, may, might</strong>
            </p>

            <h3 className="examples-title">Examples</h3>
            <ul className="examples-list">
              <li className="example-item">
                Fixing this leak could{" "}
                <span className="highlight">possibly</span> cost thousands.
              </li>
              <li className="example-item">
                Jyn could <span className="highlight">possibly</span> eat all
                the chicken if no one stops him.
              </li>
              <li className="example-item">
                She can't <span className="highlight">possibly</span> know the
                answer already.
              </li>
              <li className="example-item">
                It might <span className="highlight">possibly</span> arrive on
                Thursday.
              </li>
              <li className="example-item">
                You'll <span className="highlight">possibly</span> receive a
                call.
              </li>
              <li className="example-item">
                I think she <span className="highlight">possibly</span> lost her
                job.
              </li>
              <li className="example-item">
                It's <span className="highlight">possibly</span> the worst movie
                I've ever seen.
              </li>
              <li className="example-item">
                I will <span className="highlight">possibly</span> come to the
                UK in three years.
              </li>
            </ul>
          </div>

          {/* INITIALLY */}
          <div
            className={`adverb-section ${
              active === "initially" ? "active" : ""
            }`}
            id="initially"
          >
            <h2 className="adverb-title">6. INITIALLY</h2>
            <p className="meaning">
              <strong>Meaning:</strong> at the beginning / at first.
            </p>

            <h3 className="examples-title">Examples</h3>
            <ul className="examples-list">
              <li className="example-item">
                <span className="highlight">Initially</span>, today's lesson
                might seem overwhelming.
              </li>
              <li className="example-item">
                <span className="highlight">Initially</span> I didn't like him,
                but later I did.
              </li>
              <li className="example-item">
                <span className="highlight">Initially</span> I was against
                moving to a new city.
              </li>
              <li className="example-item">
                Bubble wrap was <span className="highlight">initially</span>{" "}
                used as wallpaper.
              </li>
              <li className="example-item">
                <span className="highlight">Initially</span> he only had one
                worn-out pair of shoes.
              </li>
              <li className="example-item">
                <span className="highlight">Initially</span>, I was afraid to
                learn adverbs.
              </li>
              <li className="example-item">
                Grav was <span className="highlight">initially</span> a dream,
                but now it's a success.
              </li>
            </ul>
          </div>
        </div>

        <footer>
          <p>
            Study Sheet: 6 Must-Know English Adverbs | Created for easy learning
          </p>
        </footer>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }
        .container {
          max-width: 1000px;
          margin: 20px auto;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        header {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: white;
          padding: 30px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        .subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
        }
        .intro {
          padding: 20px;
          text-align: center;
          background-color: #f1f3f5;
          border-bottom: 1px solid #e9ecef;
        }
        .nav-tabs {
          display: flex;
          flex-wrap: wrap;
          background-color: #495057;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .tab {
          flex: 1;
          min-width: 150px;
          padding: 15px 10px;
          text-align: center;
          background-color: #495057;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          font-size: 1rem;
          font-weight: 600;
        }
        .tab:hover {
          background-color: #6c757d;
        }
        .tab.active {
          background-color: #343a40;
          border-bottom: 3px solid #2575fc;
        }
        .content {
          padding: 30px;
        }
        .adverb-section {
          display: none;
          animation: fadeIn 0.5s ease;
        }
        .adverb-section.active {
          display: block;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .adverb-title {
          color: #2575fc;
          font-size: 1.8rem;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 2px solid #e9ecef;
        }
        .meaning {
          font-size: 1.2rem;
          margin-bottom: 20px;
          color: #495057;
        }
        .examples-title {
          font-size: 1.3rem;
          margin: 25px 0 15px;
          color: #343a40;
        }
        .examples-list {
          list-style-type: none;
        }
        .example-item {
          padding: 12px 15px;
          margin-bottom: 10px;
          background-color: #f8f9fa;
          border-left: 4px solid #2575fc;
          border-radius: 0 5px 5px 0;
          transition: transform 0.2s ease;
        }
        .example-item:hover {
          transform: translateX(5px);
          background-color: #e9ecef;
        }
        .highlight {
          font-weight: bold;
          color: #2575fc;
        }
        footer {
          text-align: center;
          padding: 20px;
          background-color: #343a40;
          color: white;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .tab {
            min-width: 100%;
          }
          h1 {
            font-size: 2rem;
          }
          .adverb-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
