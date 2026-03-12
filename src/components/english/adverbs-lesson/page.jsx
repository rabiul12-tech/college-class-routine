// app/adverbs-lesson/page.jsx
import React from "react";

import { adverbsData, commentsData, additionalInfo } from "../../data/adverb";
import Link from "next/link";

export default function AdverbsLessonPage() {
  return (
    <>
      <div className="lesson-container">
        {" "}
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
          </Link>{" "}
        </nav>
        {/* Header Section */}
        <header className="lesson-header">
          <div className="title-section">
            <h1>5 Must-Know English Adverbs</h1>
            <p className="subtitle">
              (Actually 6! Counting fortunately/unfortunately separately)
            </p>
            <div className="teacher-info">
              <div className="teacher-avatar">A</div>
              <div>
                <p className="teacher-name">Arnell</p>
                <p className="teacher-tagline">
                  Grammar, Vocabulary, and Emotion meet here
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-meta">
            <div className="meta-item">
              <span className="icon">🎯</span>
              <span>Live Lesson</span>
            </div>
            <div className="meta-item">
              <span className="icon">⏱️</span>
              <span>47:12 minutes</span>
            </div>
            <div className="meta-item">
              <span className="icon">📊</span>
              <span>All Levels</span>
            </div>
          </div>
        </header>
        <main className="lesson-content">
          {/* Introduction Section */}
          <section className="section intro-section">
            <h2>🎙️ Live Lesson Introduction</h2>
            <div className="intro-content">
              <div className="intro-text">
                <p>
                  "I'm really happy to be here with you today and we're going to
                  look at six must-know adverbs. You can see on my slide there
                  are five bullet points but there are six adverbs because I'm
                  counting fortunately and unfortunately as two separate
                  adverbs."
                </p>
              </div>

              <div className="live-chat-preview">
                <h3>Live Chat Highlights</h3>
                <div className="chat-messages">
                  {commentsData.introComments.map((comment, index) => (
                    <div key={index} className="chat-message">
                      <span className="comment-user">{comment.user}:</span>
                      <span className="comment-text"> {comment.text}</span>
                    </div>
                  ))}
                </div>
                <p className="teacher-response">
                  "You have no idea how much I enjoy teaching you. I love this
                  hour we have together."
                </p>
              </div>
            </div>
          </section>

          {/* Previous Lessons Reference */}
          <section className="section context-section">
            <h2>📚 Lesson Context</h2>
            <div className="context-card">
              <div className="context-icon">📅</div>
              <div className="context-content">
                <h3>Adverbs Series</h3>
                <p>
                  This is part of a series on adverbs! The past two live lessons
                  were also about adverbs.
                </p>
                <div className="series-info">
                  <span className="series-tag">Adverbs Week 1</span>
                  <span className="series-tag">Adverbs Week 2</span>
                  <span className="series-tag current">Adverbs Week 3</span>
                </div>
                <p className="teacher-quote">
                  "I'm obsessed with adverbs now and next week, more adverbs."
                </p>
              </div>
            </div>
          </section>

          {/* Adverb 1: Precisely */}
          <section className="adverb-section" id="precisely">
            <div className="adverb-header">
              <span className="adverb-number">1</span>
              <h2>Precisely</h2>
              <span className="pronunciation">/prɪˈsaɪsli/</span>
            </div>

            <div className="adverb-details">
              <div className="definition-card">
                <h3>Definition</h3>
                <p>
                  <strong>Exactly.</strong> Often used for time, numbers, or
                  measurements.
                </p>
                <div className="synonym">
                  <span className="synonym-label">Synonym:</span>
                  <span className="synonym-word">exactly</span>
                </div>
              </div>

              <div className="usage-section">
                <h3>Usage 1: Exact Measurements</h3>
                <div className="example-cards">
                  <div className="example-card">
                    <p className="example-text">
                      "He followed the instructions <strong>precisely</strong> —
                      exactly step by step."
                    </p>
                  </div>
                  <div className="example-card">
                    <p className="example-text">
                      "The picture frame has to be <strong>precisely</strong> 10
                      inches wide."
                    </p>
                    <div className="visual-aid">
                      <span className="visual-icon">📏</span>
                      <span>Measuring tape visualization</span>
                    </div>
                  </div>
                </div>

                <h3>Usage 2: Exact Time</h3>
                <div className="example-cards">
                  <div className="example-card">
                    <p className="example-text">
                      "The meeting starts at <strong>precisely</strong> 9:00
                      AM."
                    </p>
                    <p className="note">
                      "So don't be late. We're not going to wait for you."
                    </p>
                  </div>
                  <div className="example-card">
                    <p className="example-text">
                      "At <strong>precisely</strong> 1:21 AM and 0 seconds, we
                      shall catch up with him and the time machine."
                    </p>
                    <div className="movie-reference">
                      <span className="movie-icon">🎬</span>
                      <span>From "Back to the Future" movie</span>
                    </div>
                    <div className="interactive-poll">
                      <p className="poll-question">
                        Have you ever seen Back to the Future?
                      </p>
                      <div className="poll-results">
                        <div className="poll-option">
                          <span className="poll-label">Yes:</span>
                          <span className="poll-value">58%</span>
                        </div>
                        <div className="poll-option">
                          <span className="poll-label">No:</span>
                          <span className="poll-value">42%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3>Usage 3: Confirmation (Exactly, That's correct)</h3>
                <div className="example-cards">
                  <div className="example-card">
                    <p className="example-text">
                      "So, I need 20 honeypots to buy a pet in the game."
                    </p>
                    <p className="response">
                      "<strong>Precisely.</strong> Exactly. That's correct."
                    </p>
                  </div>
                </div>
              </div>

              <div className="grammar-notes">
                <h3>Grammar & Usage Notes</h3>
                <ul>
                  <li>
                    <strong>Precisely vs Exactly:</strong> Usually
                    interchangeable, but <em>precisely</em> can be more
                    scientific
                  </li>
                  <li>
                    <strong>Adjective vs Adverb:</strong> <em>Precise</em>{" "}
                    (adjective) vs <em>Precisely</em> (adverb)
                  </li>
                  <li>
                    <strong>Student Example:</strong> "Before launching the
                    spacecraft, the scientists calculated the landing point{" "}
                    <strong>precisely</strong> to ensure a safe touchdown."
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Adverb 2 & 3: Obviously & Clearly */}
          <section className="adverb-section combined" id="obviously-clearly">
            <div className="adverb-header">
              <span className="adverb-number">2 & 3</span>
              <div className="dual-adverbs">
                <h2>Obviously</h2>
                <span className="pronunciation-small">
                  /ˈɒb.vi.əs.li/ (Often: 'obviously')
                </span>
                <div className="adverb-divider">+</div>
                <h2>Clearly</h2>
                <span className="pronunciation-small">/ˈklɪə.li/</span>
              </div>
            </div>

            <div className="adverb-details">
              <div className="definition-card dual">
                <h3>Shared Definition</h3>
                <p>
                  <strong>Something is easy to understand</strong> whether you
                  see it, hear it, or read it.
                </p>
              </div>

              <div className="usage-section">
                <h3>Examples: Same Meaning</h3>
                <div className="example-cards dual">
                  <div className="example-card">
                    <p className="example-situation">
                      Look at the test score. It's an F.
                    </p>
                    <div className="adverb-versions">
                      <p>
                        "She <strong>obviously</strong> didn't study for the
                        test."
                      </p>
                      <p>
                        "She <strong>clearly</strong> didn't study for the
                        test."
                      </p>
                    </div>
                  </div>
                  <div className="example-card">
                    <div className="visual-example">
                      <span className="visual-icon">🤧</span>
                      <span>Evan looks sick, needs tissues, looks tired</span>
                    </div>
                    <div className="adverb-versions">
                      <p>
                        "<strong>Obviously</strong>, Evan has a cold."
                      </p>
                      <p>
                        "<strong>Clearly</strong>, Evan has a cold."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="warning-box">
                  <h3>⚠️ Warning: Can Be Sarcastic or Rude</h3>
                  <div className="warning-content">
                    <div className="warning-example">
                      <div className="sarcastic-sign">
                        <span className="sign-icon">🚫</span>
                        <span>"Sorry, we're closed"</span>
                      </div>
                      <p>Someone asks: "Do you think it's closed?"</p>
                      <p className="sarcastic-response">
                        "<strong>Obviously.</strong>" / "
                        <strong>Clearly.</strong>"
                      </p>
                    </div>
                    <div className="warning-note">
                      <p>
                        "Depending on your tone of voice, these adverbs might
                        seem a little rude. Maybe they're sarcastic."
                      </p>
                    </div>
                  </div>
                </div>

                <h3>Second Meaning for "Clearly": In a clear way</h3>
                <div className="example-cards">
                  <div className="example-card">
                    <p className="example-text">
                      "My teacher speaks slowly and <strong>clearly</strong>."
                    </p>
                  </div>
                  <div className="example-card">
                    <p className="example-text">
                      "The doctor outlined the treatment plan{" "}
                      <strong>clearly</strong> for the patient."
                    </p>
                    <div className="vocabulary-note">
                      <p>
                        <strong>Outline (verb):</strong> Give the main points,
                        like a summary
                      </p>
                      <p>
                        Example: "The manager outlined the company's goals for
                        the next quarter."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Adverb 4: Unfortunately */}
          <section className="adverb-section" id="unfortunately">
            <div className="adverb-header">
              <span className="adverb-number">4</span>
              <h2>Unfortunately</h2>
              <span className="pronunciation">/ʌnˈfɔː.tʃʊn.ət.li/</span>
            </div>

            <div className="adverb-details">
              <div className="definition-card negative">
                <h3>Definition</h3>
                <p>
                  <strong>Sorry, I have bad news or bad luck.</strong>
                </p>
                <div className="visual-cue">
                  <span className="cue-icon">😔</span>
                  <span>Think about doing this gesture</span>
                </div>
              </div>

              <div className="usage-section">
                <h3>Common Uses</h3>
                <div className="example-cards">
                  <div className="example-card">
                    <p className="example-text">
                      "<strong>Unfortunately</strong>, we've had to cancel your
                      appointment. Dr. Rob had a family emergency."
                    </p>
                  </div>
                  <div className="example-card">
                    <p className="example-text">
                      "<strong>Unfortunately</strong>, you just missed the last
                      train."
                    </p>
                    <p className="note">
                      Bad luck. I'm sorry. My hands are tied.
                    </p>
                  </div>
                  <div className="example-card">
                    <p className="example-text">
                      "<strong>Unfortunately</strong>, I can't issue a refund
                      without a receipt."
                    </p>
                    <div className="vocabulary-section">
                      <h4>Vocabulary Building:</h4>
                      <div className="vocab-item">
                        <strong>My hands are tied:</strong> Idiom meaning "There
                        is nothing I can do"
                      </div>
                      <div className="vocab-item">
                        <strong>Issue a refund:</strong> Formal way to say
                        "return your money"
                      </div>
                      <div className="vocab-item">
                        <strong>Receipt:</strong> Paper or digital proof of
                        purchase
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="student-examples">
                <h3>Student Examples from Live Chat</h3>
                <div className="student-example-grid">
                  {adverbsData.unfortunately.examples.map((example, index) => (
                    <div key={index} className="student-example-card">
                      <p className="student-example">"{example.text}"</p>
                      <span className="student-name">- {example.student}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Adverb 5 & 6: Fortunately & Luckily */}
          <section className="adverb-section positive" id="fortunately-luckily">
            <div className="adverb-header">
              <span className="adverb-number">5 & 6</span>
              <div className="dual-adverbs">
                <h2>Fortunately</h2>
                <span className="pronunciation-small">/ˈfɔː.tʃʊn.ət.li/</span>
                <div className="adverb-divider">+</div>
                <h2>Luckily</h2>
                <span className="pronunciation-small">/ˈlʌk.ɪ.li/</span>
              </div>
            </div>

            <div className="adverb-details">
              <div className="definition-card positive">
                <h3>Definition</h3>
                <p>
                  <strong>I have good luck!</strong> (Opposite of unfortunately)
                </p>
                <div className="formality-note">
                  <p>
                    <strong>Luckily</strong> is less formal, but both are
                    commonly used.
                  </p>
                </div>
                <div className="visual-cue">
                  <span className="cue-icon">🎉</span>
                  <span>Yahoo! Good luck!</span>
                </div>
              </div>

              <div className="usage-section">
                <h3>Examples</h3>
                <div className="example-cards">
                  <div className="example-card positive">
                    <div className="visual-example">
                      <span className="visual-icon">🔑</span>
                      <span>Keys dropped onto a grate/drain cover</span>
                    </div>
                    <p className="example-text">
                      "I dropped my keys onto a grate but{" "}
                      <strong>fortunately</strong>/<strong>luckily</strong> they
                      didn't fall in."
                    </p>
                  </div>
                  <div className="example-card positive">
                    <p className="example-text">
                      "We forgot the tickets, but <strong>fortunately</strong>/
                      <strong>luckily</strong>, the organizer let us in."
                    </p>
                    <p className="note">"Anyway, come on in!"</p>
                  </div>
                  <div className="example-card positive">
                    <p className="example-text">
                      "<strong>Fortunately</strong>/<strong>Luckily</strong>, no
                      one was hurt in the accident."
                    </p>
                  </div>
                </div>
              </div>

              <div className="student-examples">
                <h3>Student Examples from Live Chat</h3>
                <div className="student-example-grid">
                  {adverbsData.fortunately.examples.map((example, index) => (
                    <div key={index} className="student-example-card positive">
                      <p className="student-example">"{example.text}"</p>
                      <span className="student-name">- {example.student}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="section takeaways">
            <h2>🎓 Key Takeaways</h2>
            <div className="takeaways-grid">
              <div className="takeaway-card">
                <div className="takeaway-icon">🎯</div>
                <h3>Precisely</h3>
                <p>
                  Use for exact times, measurements, or to confirm something is
                  correct
                </p>
              </div>
              <div className="takeaway-card">
                <div className="takeaway-icon">⚠️</div>
                <h3>Obviously/Clearly</h3>
                <p>
                  Watch your tone - can sound sarcastic! Also "clearly" can mean
                  "in a clear way"
                </p>
              </div>
              <div className="takeaway-card">
                <div className="takeaway-icon">😔</div>
                <h3>Unfortunately</h3>
                <p>
                  Politely deliver bad news. Learn: "My hands are tied" (can't
                  help)
                </p>
              </div>
              <div className="takeaway-card">
                <div className="takeaway-icon">🎉</div>
                <h3>Fortunately/Luckily</h3>
                <p>Share good news! Luckily is more informal</p>
              </div>
            </div>
          </section>

          {/* Practice Section */}
          <section className="section practice">
            <h2>💪 Practice Exercises</h2>
            <div className="practice-exercises">
              <div className="exercise-card">
                <h3>Fill in the Blank</h3>
                <p>Complete with the correct adverb:</p>
                <ol>
                  <li>
                    "The train arrives at ______ 3:15 PM."
                    (precisely/unfortunately)
                  </li>
                  <li>
                    "______, it started raining right after we finished our
                    picnic." (Fortunately/Unfortunately)
                  </li>
                  <li>
                    "She explained the rules ______ so everyone understood."
                    (clearly/obviously)
                  </li>
                </ol>
                <div className="answers">
                  <p>
                    <strong>Answers:</strong> 1. precisely, 2. Fortunately, 3.
                    clearly
                  </p>
                </div>
              </div>
              <div className="exercise-card">
                <h3>Create Your Own Sentences</h3>
                <p>Write one sentence for each adverb:</p>
                <ul>
                  <li>
                    <strong>Precisely:</strong> ________________________________
                  </li>
                  <li>
                    <strong>Unfortunately:</strong>{" "}
                    ________________________________
                  </li>
                  <li>
                    <strong>Luckily:</strong> ________________________________
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Live Chat Moments */}
          <section className="section chat-moments">
            <h2>💬 Memorable Live Chat Moments</h2>
            <div className="chat-highlights">
              {commentsData.highlightComments.map((comment, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-header">
                    <span className="user-icon">👤</span>
                    <span className="user-name">{comment.user}</span>
                  </div>
                  <p className="highlight-text">"{comment.text}"</p>
                  {comment.response && (
                    <div className="teacher-reply">
                      <span className="teacher-label">Arnell:</span>
                      <span className="reply-text"> {comment.response}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Teacher's Announcements */}
          <section className="section announcements">
            <h2>📢 Teacher's Announcements</h2>
            <div className="announcement-cards">
              <div className="announcement-card">
                <h3>🎄 December Schedule Change</h3>
                <p>
                  "Usually I go live every other Wednesday, but because the end
                  of December is when I take three weeks off... I'm doing two
                  lives in December, back-to-back. My next live will be next
                  Wednesday the 10th at the same time."
                </p>
              </div>
              <div className="announcement-card">
                <h3>📚 Gravotion Platform</h3>
                <p>
                  "Join Gravotion, my fast growing platform where grammar,
                  vocabulary, and emotion meet. Download the notes for today's
                  lesson, plus hundreds of other PDFs ready to use."
                </p>
                <div className="cta-buttons">
                  <button className="cta-button primary">Join Gravotion</button>
                  <button className="cta-button secondary">
                    Get Workbook (25% off with BF2025)
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Q&A Section */}
          <section className="section qa">
            <h2>❓ Q&A from the Live Session</h2>
            <div className="qa-grid">
              {additionalInfo.qa.map((item, index) => (
                <div key={index} className="qa-card">
                  <div className="question">
                    <span className="q-label">Q:</span>
                    <span className="q-text">{item.question}</span>
                  </div>
                  <div className="answer">
                    <span className="a-label">A:</span>
                    <span className="a-text">{item.answer}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Closing */}
          <footer className="lesson-footer">
            <div className="closing-message">
              <p className="thank-you">
                "Thank you so much for being here. Loved your examples. Loved
                your energy. Loved your enthusiasm. And have a wonderful rest of
                the week."
              </p>
              <div className="sign-off">
                <p className="next-lesson">
                  Next Live: Wednesday the 10th - More Adverbs!
                </p>
                <p className="goodbye">See you next time! 👋</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
      <style jsx>{`
        /* app/adverbs-lesson/style.css */
        .lesson-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, sans-serif;
          line-height: 1.6;
          color: #333;
          background: #f8fafc;
        }

        /* Header Styles */
        .lesson-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          padding: 40px;
          color: white;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
        }

        .title-section h1 {
          font-size: 2.8rem;
          margin: 0 0 10px 0;
          font-weight: 800;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 30px;
          font-style: italic;
        }

        .teacher-info {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 30px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .teacher-avatar {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: bold;
        }

        .teacher-name {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0 0 5px 0;
        }

        .teacher-tagline {
          opacity: 0.9;
          margin: 0;
        }

        .lesson-meta {
          display: flex;
          gap: 30px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          font-size: 0.95rem;
        }

        .meta-item .icon {
          font-size: 1.2rem;
        }

        /* Section Styles */
        .section {
          background: white;
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
        }

        .section h2 {
          color: #4f46e5;
          font-size: 1.8rem;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 2px solid #e2e8f0;
        }

        /* Introduction Section */
        .intro-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        @media (max-width: 768px) {
          .intro-content {
            grid-template-columns: 1fr;
          }
        }

        .intro-text {
          padding: 20px;
          background: #f0f9ff;
          border-radius: 10px;
          border-left: 4px solid #0ea5e9;
        }

        .intro-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin: 0;
        }

        .live-chat-preview {
          padding: 20px;
          background: #f8fafc;
          border-radius: 10px;
          border: 2px dashed #cbd5e1;
        }

        .live-chat-preview h3 {
          color: #475569;
          font-size: 1.2rem;
          margin-bottom: 15px;
        }

        .chat-messages {
          max-height: 200px;
          overflow-y: auto;
          padding: 15px;
          background: white;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .chat-message {
          margin-bottom: 10px;
          padding: 8px 12px;
          background: #f1f5f9;
          border-radius: 6px;
          border-left: 3px solid #94a3b8;
        }

        .comment-user {
          font-weight: 600;
          color: #475569;
        }

        .comment-text {
          color: #64748b;
        }

        .teacher-response {
          margin-top: 15px;
          padding: 15px;
          background: #fef3c7;
          border-radius: 8px;
          border-left: 4px solid #f59e0b;
          font-style: italic;
          color: #92400e;
        }

        /* Context Section */
        .context-card {
          display: flex;
          gap: 20px;
          padding: 25px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-radius: 12px;
          border: 2px solid #bae6fd;
        }

        .context-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
        }

        .context-content h3 {
          color: #0369a1;
          margin: 0 0 15px 0;
          font-size: 1.4rem;
        }

        .series-info {
          display: flex;
          gap: 10px;
          margin: 20px 0;
          flex-wrap: wrap;
        }

        .series-tag {
          padding: 8px 16px;
          background: white;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 2px solid #e2e8f0;
        }

        .series-tag.current {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .teacher-quote {
          margin-top: 20px;
          padding: 15px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          font-style: italic;
          color: #475569;
        }

        /* Adverb Sections */
        .adverb-section {
          background: white;
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .adverb-section.combined {
          border: 3px solid #f0f9ff;
        }

        .adverb-section.positive {
          border: 3px solid #dcfce7;
        }

        .adverb-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 3px solid #e2e8f0;
        }

        .adverb-number {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
        }

        .adverb-header h2 {
          margin: 0;
          color: #1e293b;
          font-size: 2rem;
          flex: 1;
        }

        .pronunciation {
          font-family: monospace;
          color: #64748b;
          background: #f1f5f9;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
        }

        .dual-adverbs {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .pronunciation-small {
          font-family: monospace;
          color: #64748b;
          font-size: 0.85rem;
        }

        .adverb-divider {
          color: #94a3b8;
          font-size: 1.5rem;
          font-weight: bold;
        }

        /* Definition Cards */
        .definition-card {
          padding: 25px;
          background: #f8fafc;
          border-radius: 10px;
          margin-bottom: 30px;
          border-left: 5px solid #6366f1;
        }

        .definition-card.dual {
          border-left-color: #8b5cf6;
          background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
        }

        .definition-card.negative {
          border-left-color: #ef4444;
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
        }

        .definition-card.positive {
          border-left-color: #10b981;
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
        }

        .definition-card h3 {
          color: #1e293b;
          margin: 0 0 15px 0;
          font-size: 1.3rem;
        }

        .definition-card p {
          font-size: 1.1rem;
          margin: 0 0 15px 0;
        }

        .synonym {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 15px;
          background: white;
          border-radius: 8px;
          margin-top: 15px;
        }

        .synonym-label {
          font-weight: 600;
          color: #475569;
        }

        .synonym-word {
          color: #059669;
          font-weight: 600;
        }

        .visual-cue {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 15px;
          padding: 10px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
        }

        .cue-icon {
          font-size: 1.5rem;
        }

        /* Usage Sections */
        .usage-section h3 {
          color: #475569;
          font-size: 1.3rem;
          margin: 30px 0 20px 0;
          padding-bottom: 10px;
          border-bottom: 2px solid #e2e8f0;
        }

        .example-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .example-card {
          padding: 20px;
          background: #f8fafc;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          transition: transform 0.2s;
        }

        .example-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .example-card.positive {
          background: #f0fdf4;
          border-color: #bbf7d0;
        }

        .example-text {
          font-size: 1.1rem;
          line-height: 1.7;
          margin: 0 0 15px 0;
        }

        .example-text strong {
          color: #4f46e5;
          font-weight: 600;
        }

        .note {
          font-size: 0.95rem;
          color: #64748b;
          font-style: italic;
          margin: 10px 0;
          padding-left: 15px;
          border-left: 3px solid #cbd5e1;
        }

        .response {
          padding: 15px;
          background: #fef3c7;
          border-radius: 8px;
          margin-top: 15px;
          border-left: 4px solid #f59e0b;
          font-weight: 600;
        }

        .visual-aid,
        .movie-reference,
        .visual-example {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: white;
          border-radius: 8px;
          margin: 15px 0;
          border: 1px solid #e2e8f0;
        }

        .visual-icon,
        .movie-icon {
          font-size: 1.2rem;
        }

        /* Interactive Poll */
        .interactive-poll {
          margin-top: 20px;
          padding: 20px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-radius: 10px;
          border: 2px solid #7dd3fc;
        }

        .poll-question {
          font-weight: 600;
          color: #0369a1;
          margin: 0 0 15px 0;
        }

        .poll-results {
          display: flex;
          gap: 30px;
        }

        .poll-option {
          flex: 1;
          text-align: center;
          padding: 15px;
          background: white;
          border-radius: 8px;
          border: 2px solid #e2e8f0;
        }

        .poll-label {
          display: block;
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 5px;
        }

        .poll-value {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: #3b82f6;
        }

        /* Warning Box */
        .warning-box {
          margin: 30px 0;
          padding: 25px;
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-radius: 12px;
          border: 3px solid #f59e0b;
        }

        .warning-box h3 {
          color: #92400e;
          margin: 0 0 20px 0;
        }

        .warning-content {
          background: rgba(255, 255, 255, 0.9);
          padding: 20px;
          border-radius: 8px;
        }

        .warning-example {
          text-align: center;
          margin-bottom: 20px;
        }

        .sarcastic-sign {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 25px;
          background: #f1f5f9;
          border-radius: 10px;
          margin: 15px 0;
          border: 2px solid #94a3b8;
        }

        .sign-icon {
          font-size: 1.5rem;
        }

        .sarcastic-response {
          font-size: 1.2rem;
          font-weight: 600;
          color: #dc2626;
          margin: 15px 0;
        }

        .warning-note {
          padding: 15px;
          background: #fef2f2;
          border-radius: 8px;
          border-left: 4px solid #ef4444;
          color: #991b1b;
        }

        /* Grammar Notes */
        .grammar-notes {
          margin-top: 30px;
          padding: 25px;
          background: #f8fafc;
          border-radius: 10px;
          border-left: 5px solid #6366f1;
        }

        .grammar-notes h3 {
          color: #1e293b;
          margin: 0 0 20px 0;
        }

        .grammar-notes ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .grammar-notes li {
          padding: 12px 0;
          border-bottom: 1px solid #e2e8f0;
          position: relative;
          padding-left: 25px;
        }

        .grammar-notes li:before {
          content: "•";
          color: #6366f1;
          font-size: 1.5rem;
          position: absolute;
          left: 0;
          top: 12px;
        }

        /* Vocabulary Section */
        .vocabulary-section {
          margin-top: 20px;
          padding: 20px;
          background: #f1f5f9;
          border-radius: 8px;
        }

        .vocabulary-section h4 {
          color: #475569;
          margin: 0 0 15px 0;
        }

        .vocab-item {
          padding: 10px 15px;
          background: white;
          border-radius: 6px;
          margin-bottom: 10px;
          border-left: 3px solid #94a3b8;
        }

        /* Student Examples */
        .student-examples {
          margin-top: 40px;
        }

        .student-examples h3 {
          color: #475569;
          font-size: 1.3rem;
          margin-bottom: 20px;
        }

        .student-example-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .student-example-card {
          padding: 20px;
          background: white;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .student-example-card.positive {
          background: #f0fdf4;
          border-color: #bbf7d0;
        }

        .student-example {
          font-style: italic;
          margin: 0 0 10px 0;
          line-height: 1.6;
        }

        .student-name {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }

        /* Takeaways Section */
        .takeaways-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }

        .takeaway-card {
          padding: 25px;
          background: white;
          border-radius: 12px;
          border: 2px solid #e2e8f0;
          text-align: center;
          transition: all 0.3s ease;
        }

        .takeaway-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .takeaway-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .takeaway-card h3 {
          color: #4f46e5;
          margin: 0 0 15px 0;
          font-size: 1.3rem;
        }

        .takeaway-card p {
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        /* Practice Section */
        .practice-exercises {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .exercise-card {
          padding: 30px;
          background: #f8fafc;
          border-radius: 12px;
          border: 2px solid #e2e8f0;
        }

        .exercise-card h3 {
          color: #3b82f6;
          margin: 0 0 20px 0;
          font-size: 1.4rem;
        }

        .exercise-card ol,
        .exercise-card ul {
          padding-left: 20px;
          margin: 20px 0;
        }

        .exercise-card li {
          margin-bottom: 10px;
          padding: 8px 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .answers {
          margin-top: 20px;
          padding: 15px;
          background: #dcfce7;
          border-radius: 8px;
          border-left: 4px solid #10b981;
        }

        /* Chat Moments */
        .chat-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .highlight-card {
          padding: 25px;
          background: white;
          border-radius: 12px;
          border: 2px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .highlight-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .user-icon {
          font-size: 1.2rem;
        }

        .user-name {
          font-weight: 600;
          color: #475569;
        }

        .highlight-text {
          font-style: italic;
          line-height: 1.7;
          margin: 0 0 15px 0;
          padding-left: 10px;
          border-left: 3px solid #cbd5e1;
        }

        .teacher-reply {
          padding: 15px;
          background: #f0f9ff;
          border-radius: 8px;
          border-left: 4px solid #0ea5e9;
        }

        .teacher-label {
          font-weight: 600;
          color: #0369a1;
          margin-right: 10px;
        }

        .reply-text {
          color: #475569;
        }

        /* Announcements */
        .announcement-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .announcement-card {
          padding: 30px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 12px;
          border: 2px solid #e2e8f0;
        }

        .announcement-card h3 {
          color: #4f46e5;
          margin: 0 0 20px 0;
          font-size: 1.4rem;
        }

        .cta-buttons {
          display: flex;
          gap: 15px;
          margin-top: 25px;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button.primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
        }

        .cta-button.secondary {
          background: white;
          color: #6366f1;
          border: 2px solid #6366f1;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        /* Q&A Section */
        .qa-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .qa-card {
          padding: 25px;
          background: white;
          border-radius: 12px;
          border: 2px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .question {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 2px dashed #e2e8f0;
        }

        .q-label,
        .a-label {
          font-weight: 700;
          margin-right: 10px;
        }

        .q-label {
          color: #ef4444;
        }

        .a-label {
          color: #10b981;
        }

        .q-text,
        .a-text {
          line-height: 1.7;
        }

        /* Footer */
        .lesson-footer {
          margin-top: 50px;
          padding: 40px;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: 16px;
          color: white;
          text-align: center;
        }

        .thank-you {
          font-size: 1.3rem;
          line-height: 1.8;
          margin-bottom: 30px;
          font-style: italic;
        }

        .sign-off {
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .next-lesson {
          font-size: 1.2rem;
          font-weight: 600;
          color: #fbbf24;
          margin-bottom: 15px;
        }

        .goodbye {
          font-size: 1.4rem;
          color: #94a3b8;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .lesson-header {
            padding: 30px 20px;
          }

          .title-section h1 {
            font-size: 2rem;
          }

          .adverb-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .adverb-header h2 {
            font-size: 1.6rem;
          }

          .dual-adverbs {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .example-cards {
            grid-template-columns: 1fr;
          }

          .student-example-grid {
            grid-template-columns: 1fr;
          }

          .takeaways-grid {
            grid-template-columns: 1fr;
          }

          .practice-exercises {
            grid-template-columns: 1fr;
          }

          .chat-highlights {
            grid-template-columns: 1fr;
          }

          .announcement-cards {
            grid-template-columns: 1fr;
          }

          .qa-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
