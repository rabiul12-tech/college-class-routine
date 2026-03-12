// app/indirect-questions/page.jsx
import Link from "next/link";
import React from "react";

export default function IndirectQuestionsPage() {
  return (
    <>
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
        </Link>
      </nav>
      <div className="lesson-container">
        {/* Header Section */}
        <header className="lesson-header">
          <h1>Master Indirect Questions in English</h1>
          <p className="lesson-subtitle">
            A Comprehensive Grammar Lesson by Arnell
          </p>
          <div className="lesson-meta">
            <span className="timestamp">⏱️ 15:52 minutes</span>
            <span className="level">📊 Intermediate English</span>
          </div>
        </header>

        <main className="lesson-content">
          {/* Introduction Section */}
          <section className="section intro-section">
            <h2>📚 Introduction</h2>
            <div className="text-content">
              <p>
                In today's lesson, I'm going to teach you how to use indirect
                questions confidently. Indirect questions are also called
                embedded questions. Same thing. We'll go through this grammar
                step by step.
              </p>
              <p className="instructor-note">
                🎯 <strong>Learning Objective:</strong> Sound more polite and
                natural in English conversations
              </p>
            </div>
          </section>

          {/* Direct Questions Review */}
          <section className="section direct-questions-section">
            <h2>🔍 Review: Direct Questions</h2>
            <p className="section-intro">
              Before learning indirect questions, let's review direct questions
              (normal questions you first learn in English).
            </p>

            <div className="question-type">
              <h3>1. BE Questions</h3>
              <p>When "be" is the main verb:</p>
              <div className="examples">
                <div className="example-card">
                  <p>Are you a teacher?</p>
                </div>
                <div className="example-card">
                  <p>Is Rebecca your sister?</p>
                </div>
                <div className="example-card">
                  <p>Was Harry angry?</p>
                </div>
                <div className="example-card">
                  <p>Were they on time?</p>
                </div>
              </div>
            </div>

            <div className="question-type">
              <h3>2. Yes/No Questions</h3>
              <p>Questions expecting "yes" or "no" answers:</p>
              <div className="grammar-rule">
                <strong>Structure:</strong> Auxiliary verb + Subject + Main verb
              </div>

              <div className="auxiliary-list">
                <div className="aux-category">
                  <h4>Auxiliary Verbs:</h4>
                  <ul>
                    <li>Do, Does, Did</li>
                    <li>Have, Has, Had</li>
                  </ul>
                </div>
                <div className="aux-category">
                  <h4>Modal Verbs:</h4>
                  <ul>
                    <li>Can, Could, Will, Would</li>
                    <li>May, Might, Must, Shall, Should</li>
                  </ul>
                </div>
              </div>

              <div className="examples">
                <div className="example-card">
                  <p>Do you like it?</p>
                  <span className="answer">→ Yes or No?</span>
                </div>
                <div className="example-card">
                  <p>Does she drive?</p>
                  <span className="answer">→ Yes or No?</span>
                </div>
                <div className="example-card">
                  <p>Can you swim?</p>
                  <span className="answer">→ Yes or No?</span>
                </div>
                <div className="example-card">
                  <p>Should I pay now?</p>
                  <span className="answer">→ Yes or No?</span>
                </div>
              </div>
            </div>

            <div className="question-type">
              <h3>3. WH Questions</h3>
              <p>Questions starting with question words:</p>
              <div className="question-words">
                <span className="word-tag">Who</span>
                <span className="word-tag">What</span>
                <span className="word-tag">When</span>
                <span className="word-tag">Where</span>
                <span className="word-tag">Why</span>
                <span className="word-tag">How</span>
                <span className="word-tag">Which</span>
                <span className="word-tag">How much</span>
                <span className="word-tag">How many</span>
              </div>

              <div className="grammar-rule">
                <strong>Structure:</strong> Question word + Auxiliary verb +
                Subject + Main verb
              </div>

              <div className="examples">
                <div className="example-card">
                  <p>Who are you meeting later?</p>
                </div>
                <div className="example-card">
                  <p>What can I do to help?</p>
                </div>
                <div className="example-card">
                  <p>How much money do you owe?</p>
                </div>
                <div className="example-card">
                  <p>Where should we sit?</p>
                </div>
              </div>

              <div className="important-note">
                <strong>⚠️ Important Exception:</strong> When the question word
                IS the subject
                <p className="example">
                  Example: "What smells in here?" (Only one verb, no separate
                  subject)
                </p>
              </div>
            </div>
          </section>

          {/* Indirect Questions Section */}
          <section className="section indirect-questions-section">
            <h2>🎯 Indirect Questions</h2>

            <div className="benefits">
              <h3>Why Use Indirect Questions?</h3>
              <div className="benefit-card">
                <div className="benefit-icon">🤝</div>
                <div className="benefit-content">
                  <h4>Polite & Professional</h4>
                  <p>
                    You sound nicer and more respectful, especially with
                    strangers or in formal situations
                  </p>
                </div>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🎭</div>
                <div className="benefit-content">
                  <h4>Formal & Informal Use</h4>
                  <p>
                    <strong>Informal:</strong> Daily situations with people
                    you're comfortable with
                  </p>
                  <p>
                    <strong>Formal:</strong> Work, business emails, or with
                    people you don't know well
                  </p>
                </div>
              </div>
            </div>

            {/* WH Indirect Questions */}
            <div className="question-type">
              <h3>🔤 WH Indirect Questions</h3>
              <div className="grammar-rule highlight">
                <strong>Structure:</strong> Question Introduction + WH word +
                Subject + Verb
              </div>

              <div className="comparison">
                <div className="direct-example">
                  <h4>Direct Question</h4>
                  <p className="question">Where can I find an ATM?</p>
                </div>
                <div className="arrow">→</div>
                <div className="indirect-example">
                  <h4>Indirect Question</h4>
                  <p className="question">
                    Could you tell me where I can find an ATM?
                  </p>
                  <p className="question">
                    Do you know where I can find an ATM?
                  </p>
                </div>
              </div>

              <div className="warning">
                <strong>❌ Common Mistake:</strong> "Could you tell me where can
                I find an ATM?"
                <p className="correction">
                  ✅ <strong>Correct:</strong> "Could you tell me where I can
                  find an ATM?"
                </p>
                <p>
                  Remember: In indirect questions, it's{" "}
                  <strong>Subject then Verb</strong> like a normal sentence!
                </p>
              </div>

              <div className="question-introductions">
                <h4>Common Question Introductions (Set Phrases)</h4>
                <div className="phrase-grid">
                  <div className="phrase-card">
                    <p>Could you tell me...</p>
                  </div>
                  <div className="phrase-card">
                    <p>Do you know...</p>
                  </div>
                  <div className="phrase-card">
                    <p>Would you mind telling me...</p>
                  </div>
                  <div className="phrase-card asterisk">
                    <p>Do you have any idea...*</p>
                    <small>*Often shows frustration/annoyance</small>
                  </div>
                  <div className="phrase-card asterisk">
                    <p>Could you let me know...*</p>
                    <small>*Usually means "tell me later"</small>
                  </div>
                  <div className="phrase-card">
                    <p>I'd like to know...</p>
                  </div>
                  <div className="phrase-card">
                    <p>I was wondering...</p>
                  </div>
                  <div className="phrase-card asterisk">
                    <p>I wonder...*</p>
                    <small>*Usually a question to yourself</small>
                  </div>
                </div>
              </div>

              <div className="important-note">
                <strong>⚠️ Crucial Rule:</strong> Do NOT use auxiliary verbs
                Do/Does/Did in indirect questions
                <p className="example">
                  ❌ "Would you mind telling me how I do pay for parking?"
                </p>
                <p className="correction">
                  ✅ "Would you mind telling me how I pay for parking?"
                </p>
              </div>
            </div>

            {/* Yes/No & BE Indirect Questions */}
            <div className="question-type">
              <h3>✅ Yes/No & BE Indirect Questions</h3>
              <div className="grammar-rule highlight">
                <strong>Structure:</strong> Question Introduction + IF/WHETHER +
                Subject + Verb
              </div>
              <p className="note">
                <strong>Note:</strong> IF is more common, WHETHER is more formal
                (both are fine)
              </p>

              <div className="examples">
                <div className="comparison">
                  <div className="direct-example">
                    <h4>Direct Question</h4>
                    <p className="question">Is this road closed?</p>
                    <p className="question">Did you receive an email?</p>
                    <p className="question">Is there garlic in this sauce?</p>
                  </div>
                  <div className="arrow">→</div>
                  <div className="indirect-example">
                    <h4>Indirect Question</h4>
                    <p className="question">
                      Could you tell me if/whether this road is closed?
                    </p>
                    <p className="question">
                      I was wondering if/whether you received an email.
                    </p>
                    <p className="question">
                      Would you happen to know if there is garlic in this sauce?
                    </p>
                  </div>
                </div>
              </div>

              <div className="special-case">
                <h4>Using "Whether or Not"</h4>
                <p>
                  We often use "whether" with "or not" (don't use "if" in this
                  case):
                </p>
                <div className="variations">
                  <div className="variation">
                    <p className="question">
                      Do you happen to know whether Violet was given a
                      promotion?
                    </p>
                  </div>
                  <div className="variation">
                    <p className="question">
                      Do you happen to know whether or not Violet was given a
                      promotion?
                    </p>
                  </div>
                  <div className="variation">
                    <p className="question">
                      Do you happen to know whether Violet was given a promotion
                      or not?
                    </p>
                  </div>
                </div>
                <p className="tip">
                  <strong>💡 Tip:</strong> Use "whether or not" together for
                  long sentences to avoid separation
                </p>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="section takeaways-section">
            <h2>🎓 Key Takeaways</h2>
            <div className="takeaways-grid">
              <div className="takeaway-card">
                <div className="takeaway-icon">🔀</div>
                <h4>Word Order Change</h4>
                <p>
                  Direct: Verb before Subject
                  <br />
                  Indirect: Subject before Verb (like normal sentences)
                </p>
              </div>
              <div className="takeaway-card">
                <div className="takeaway-icon">🚫</div>
                <h4>No Do/Does/Did</h4>
                <p>Never use auxiliary Do/Does/Did in indirect questions</p>
              </div>
              <div className="takeaway-card">
                <div className="takeaway-icon">🎭</div>
                <h4>If/Whether for Yes/No</h4>
                <p>Use IF or WHETHER when converting Yes/No questions</p>
              </div>
              <div className="takeaway-card">
                <div className="takeaway-icon">🤝</div>
                <h4>Politeness Matters</h4>
                <p>
                  Indirect questions = More polite, especially with strangers
                </p>
              </div>
            </div>

            <div className="final-note">
              <p>
                <strong>🎯 Remember:</strong> Direct questions are not rude!
                Tone of voice is often more important than grammar.
              </p>
              <p>
                But when speaking to someone you don't know, indirect questions
                are usually the better choice.
              </p>
            </div>
          </section>

          {/* Practice Prompt */}
          <section className="section practice-section">
            <h2>💪 Practice Time</h2>
            <div className="practice-card">
              <p className="prompt">
                Convert this direct question to indirect:
              </p>
              <p className="practice-question">
                "When does the meeting start?"
              </p>
              <div className="answer-hint">
                <p>
                  <strong>Possible answers:</strong>
                </p>
                <ul>
                  <li>Could you tell me when the meeting starts?</li>
                  <li>Do you know when the meeting starts?</li>
                  <li>Would you mind telling me when the meeting starts?</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="lesson-footer">
            <div className="cta">
              <h3>📚 Want the Complete Notes & Practice Worksheets?</h3>
              <p>
                Join Gravotion - where grammar, vocabulary, and emotion meet!
              </p>
              <ul className="benefits-list">
                <li>✓ Download today's lesson notes</li>
                <li>✓ Access hundreds of ready-to-use PDFs</li>
                <li>✓ Get complete grammar course roadmap</li>
                <li>✓ Join a global community of English learners</li>
              </ul>
              <div className="action">
                <button className="join-button">Join Gravotion</button>
                <p className="note">
                  Write "gravos" in comments for a personal invitation link!
                </p>
              </div>
            </div>

            <div className="closing">
              <p className="goodbye">
                Thank you so much for learning with me! I really appreciate you
                being here and I can't wait to make another lesson for you.
              </p>
              <p className="signature">- Arnell</p>
              <p className="outro">See you next time! 👋</p>
            </div>
          </footer>
        </main>
      </div>
      <style jsx>
        {`
          /* app/indirect-questions/style.css */
          .lesson-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            color: #333;
          }

          /* Header Styles */
          .lesson-header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px;
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            border-radius: 12px;
            color: white;
          }

          .lesson-header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 700;
          }

          .lesson-subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 20px;
          }

          .lesson-meta {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-top: 20px;
          }

          .timestamp,
          .level {
            background: rgba(255, 255, 255, 0.2);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
          }

          /* Section Styles */
          .section {
            margin-bottom: 50px;
            padding: 30px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            border: 1px solid #e5e7eb;
          }

          .section h2 {
            color: #4f46e5;
            font-size: 1.8rem;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e5e7eb;
          }

          .section-intro {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 25px;
          }

          /* Question Type Sections */
          .question-type {
            margin: 30px 0;
            padding: 20px;
            background: #f9fafb;
            border-radius: 8px;
            border-left: 4px solid #4f46e5;
          }

          .question-type h3 {
            color: #374151;
            font-size: 1.4rem;
            margin-bottom: 15px;
          }

          /* Grammar Rules */
          .grammar-rule {
            background: #e0e7ff;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            border-left: 4px solid #4f46e5;
          }

          .grammar-rule.highlight {
            background: #fef3c7;
            border-left-color: #f59e0b;
          }

          /* Examples Grid */
          .examples {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin: 20px 0;
          }

          .example-card {
            background: white;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          }

          .example-card p {
            margin: 0;
            font-weight: 500;
          }

          .answer {
            display: inline-block;
            margin-top: 8px;
            padding: 4px 8px;
            background: #dcfce7;
            color: #166534;
            border-radius: 4px;
            font-size: 0.9rem;
          }

          /* Question Words Tags */
          .question-words {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 15px 0;
          }

          .word-tag {
            background: #dbeafe;
            color: #1e40af;
            padding: 6px 12px;
            border-radius: 20px;
            font-weight: 500;
            font-size: 0.9rem;
          }

          /* Auxiliary Verbs */
          .auxiliary-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 20px 0;
          }

          .aux-category {
            background: white;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
          }

          .aux-category h4 {
            color: #4f46e5;
            margin-bottom: 10px;
            font-size: 1rem;
          }

          .aux-category ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .aux-category li {
            padding: 4px 0;
            color: #6b7280;
          }

          /* Important Notes */
          .important-note {
            background: #fef3c7;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #f59e0b;
          }

          .important-note .example {
            margin: 10px 0 0 0;
            padding: 10px;
            background: #fffbeb;
            border-radius: 4px;
            font-family: monospace;
          }

          .correction {
            color: #166534;
            font-weight: 500;
          }

          /* Comparison Styles */
          .comparison {
            display: flex;
            align-items: center;
            gap: 30px;
            margin: 25px 0;
            flex-wrap: wrap;
          }

          .direct-example,
          .indirect-example {
            flex: 1;
            min-width: 300px;
            padding: 20px;
            border-radius: 8px;
          }

          .direct-example {
            background: #f3f4f6;
            border: 2px dashed #9ca3af;
          }

          .indirect-example {
            background: #f0f9ff;
            border: 2px solid #0ea5e9;
          }

          .direct-example h4,
          .indirect-example h4 {
            color: #374151;
            margin-bottom: 15px;
            font-size: 1.1rem;
          }

          .question {
            margin: 8px 0;
            padding: 10px;
            background: white;
            border-radius: 6px;
            border-left: 4px solid;
          }

          .direct-example .question {
            border-left-color: #9ca3af;
          }

          .indirect-example .question {
            border-left-color: #0ea5e9;
          }

          .arrow {
            font-size: 1.5rem;
            color: #6b7280;
            font-weight: bold;
          }

          /* Warning Box */
          .warning {
            background: #fef2f2;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #ef4444;
            margin: 20px 0;
          }

          /* Question Introductions Grid */
          .phrase-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
          }

          .phrase-card {
            background: white;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            text-align: center;
          }

          .phrase-card.asterisk {
            border: 2px dashed #f59e0b;
            background: #fffbeb;
          }

          .phrase-card small {
            display: block;
            margin-top: 8px;
            color: #6b7280;
            font-size: 0.8rem;
          }

          /* Benefits Cards */
          .benefits {
            margin: 25px 0;
          }

          .benefit-card {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            padding: 20px;
            background: #f0f9ff;
            border-radius: 8px;
            margin-bottom: 15px;
            border-left: 4px solid #0ea5e9;
          }

          .benefit-icon {
            font-size: 2rem;
            flex-shrink: 0;
          }

          .benefit-content h4 {
            margin: 0 0 10px 0;
            color: #0369a1;
          }

          /* Special Case Variations */
          .variations {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin: 20px 0;
          }

          .variation {
            padding: 15px;
            background: #f3f4f6;
            border-radius: 8px;
            border-left: 4px solid #8b5cf6;
          }

          .tip {
            background: #ecfdf5;
            padding: 12px;
            border-radius: 6px;
            margin-top: 15px;
            color: #065f46;
          }

          /* Takeaways Grid */
          .takeaways-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px 0;
          }

          .takeaway-card {
            padding: 20px;
            background: white;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            text-align: center;
            transition: transform 0.2s;
          }

          .takeaway-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          }

          .takeaway-icon {
            font-size: 2rem;
            margin-bottom: 15px;
          }

          .takeaway-card h4 {
            color: #4f46e5;
            margin-bottom: 10px;
          }

          /* Practice Section */
          .practice-section {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border: 2px dashed #0ea5e9;
          }

          .practice-card {
            text-align: center;
            padding: 30px;
          }

          .practice-question {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e40af;
            margin: 20px 0;
            padding: 20px;
            background: white;
            border-radius: 8px;
            border: 2px solid #3b82f6;
          }

          .answer-hint {
            margin-top: 30px;
            text-align: left;
            padding: 20px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 8px;
          }

          .answer-hint ul {
            list-style: none;
            padding: 0;
          }

          .answer-hint li {
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
          }

          /* Footer */
          .lesson-footer {
            margin-top: 50px;
            padding: 40px;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            border-radius: 12px;
            color: white;
          }

          .cta {
            text-align: center;
            margin-bottom: 40px;
          }

          .cta h3 {
            color: #fbbf24;
            font-size: 1.8rem;
            margin-bottom: 20px;
          }

          .benefits-list {
            list-style: none;
            padding: 0;
            margin: 25px auto;
            max-width: 600px;
            text-align: left;
          }

          .benefits-list li {
            padding: 10px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .join-button {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
            border: none;
            padding: 15px 40px;
            font-size: 1.1rem;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 600;
            transition: transform 0.2s;
            margin: 20px 0;
          }

          .join-button:hover {
            transform: scale(1.05);
          }

          .note {
            font-size: 0.9rem;
            opacity: 0.9;
            margin-top: 10px;
          }

          .closing {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .goodbye {
            font-size: 1.2rem;
            margin-bottom: 20px;
            line-height: 1.8;
          }

          .signature {
            font-size: 1.5rem;
            font-weight: 600;
            color: #fbbf24;
            margin: 20px 0;
          }

          .outro {
            font-size: 1.3rem;
            color: #60a5fa;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .lesson-header h1 {
              font-size: 2rem;
            }

            .section {
              padding: 20px;
            }

            .comparison {
              flex-direction: column;
            }

            .arrow {
              transform: rotate(90deg);
            }

            .phrase-grid {
              grid-template-columns: 1fr;
            }

            .takeaways-grid {
              grid-template-columns: 1fr;
            }
          }

          /* Instructor Notes */
          .instructor-note {
            background: #f0f9ff;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #0ea5e9;
            margin: 15px 0;
          }

          .final-note {
            background: #ecfdf5;
            padding: 20px;
            border-radius: 8px;
            margin-top: 30px;
            border-left: 4px solid #10b981;
          }
        `}
      </style>
    </>
  );
}
