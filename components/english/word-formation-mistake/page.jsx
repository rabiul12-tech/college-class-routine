// app/word-formation-mistakes/page.jsx
import React from "react";

import Link from "next/link";

export default function WordFormationMistakesPage() {
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
          </Link>
        </nav>
        {/* Header Section */}
        <header className="lesson-header">
          <h1>17 Common WORD FORMATION Mistakes in English</h1>
          <p className="lesson-subtitle">
            Let's Correct Them Together - A Lesson by Arnell
          </p>
          <div className="lesson-meta">
            <span className="timestamp">⏱️ 23:11 minutes</span>
            <span className="level">📊 Intermediate to Advanced English</span>
          </div>
          <div className="intro-box">
            <h2>What is Word Formation?</h2>
            <div className="word-family-example">
              <div className="word-type">
                <span className="word-label">Person:</span>
                <span className="word-example highlight">photographer</span>
              </div>
              <div className="word-type">
                <span className="word-label">Subject:</span>
                <span className="word-example">photography</span>
              </div>
              <div className="word-type">
                <span className="word-label">Object:</span>
                <span className="word-example">photograph</span>
              </div>
              <div className="word-type">
                <span className="word-label">Verb:</span>
                <span className="word-example">photograph</span>
              </div>
            </div>
            <p className="definition">
              Changing words into different forms (nouns, verbs, adjectives,
              adverbs) - both spelling AND pronunciation change!
            </p>
          </div>
        </header>
        <main className="lesson-content">
          {/* Mistake 1: Photograph/Photographer */}
          <section className="mistake-section" id="mistake-1">
            <div className="mistake-header">
              <span className="mistake-number">1</span>
              <h2>Photograph vs Photographer</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Person</h4>
                    <p className="word">photographer</p>
                    <p className="ipa">/fəˈtɒɡ.rə.fər/</p>
                    <p className="example">
                      "I wanted to be a <strong>photographer</strong> for
                      National Geographic."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Subject</h4>
                    <p className="word">photography</p>
                    <p className="ipa">/fəˈtɒɡ.rə.fi/</p>
                    <p className="example">
                      "Vincent is interested in <strong>photography</strong>."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Object</h4>
                    <p className="word">photograph / photo</p>
                    <p className="ipa">/ˈfəʊ.tə.ɡrɑːf/</p>
                    <p className="example">
                      "Did you see the <strong>photograph</strong> Vincent
                      took?"
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Verb</h4>
                    <p className="word">photograph</p>
                    <p className="ipa">/ˈfəʊ.tə.ɡrɑːf/</p>
                    <p className="example">
                      "You are not allowed to <strong>photograph</strong>{" "}
                      anyone."
                    </p>
                  </div>
                </div>
              </div>

              <div className="common-mistake">
                <h3>❌ Common Mistake:</h3>
                <div className="mistake-example">
                  <p>
                    "I wanted to be a <span className="wrong">photograph</span>
                    ."
                  </p>
                  <p className="correction">
                    ✅ <strong>Correct:</strong> "I wanted to be a
                    photographer."
                  </p>
                </div>
              </div>

              <div className="pronunciation-tip">
                <h3>🎯 Pronunciation Tip:</h3>
                <p>
                  Word stress: <strong>pho-TOG-ra-pher</strong> (not
                  PHO-to-gra-pher)
                </p>
                <p>
                  📝 <em>Work out</em> means exercise
                </p>
              </div>
            </div>
          </section>

          {/* Mistake 2: Politics/Politician */}
          <section className="mistake-section" id="mistake-2">
            <div className="mistake-header">
              <span className="mistake-number">2</span>
              <h2>Politics vs Politician</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Person</h4>
                    <p className="word">politician</p>
                    <p className="ipa">/ˌpɒl.ɪˈtɪʃ.ən/</p>
                    <p className="example">
                      "Tiffany is a well-known <strong>politician</strong>."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Topic</h4>
                    <p className="word">politics</p>
                    <p className="ipa">/ˈpɒl.ə.tɪks/</p>
                    <p className="example">
                      "Arguments over <strong>politics</strong>."
                    </p>
                    <p className="tip">Not "po-LI-tics"</p>
                  </div>
                  <div className="usage-card">
                    <h4>Adjective</h4>
                    <p className="word">political</p>
                    <p className="ipa">/pəˈlɪt.ɪ.kəl/</p>
                    <p className="example">
                      "The issue became very <strong>political</strong>."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mistake 3: Patient/Patience */}
          <section className="mistake-section" id="mistake-3">
            <div className="mistake-header">
              <span className="mistake-number">3</span>
              <h2>Patient vs Patience</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Noun</h4>
                    <p className="word">patience</p>
                    <p className="ipa">/ˈpeɪ.ʃəns/</p>
                    <p className="example">
                      "My mother had a lot of <strong>patience</strong>."
                    </p>
                    <p className="pronunciation">Say "PAY-shəns"</p>
                  </div>
                  <div className="usage-card">
                    <h4>Adjective</h4>
                    <p className="word">patient</p>
                    <p className="ipa">/ˈpeɪ.ʃənt/</p>
                    <p className="example">
                      "My mother was always <strong>patient</strong>."
                    </p>
                  </div>
                  <div className="usage-card negative">
                    <h4>Opposite (Adjective)</h4>
                    <p className="word">impatient</p>
                    <p className="ipa">/ɪmˈpeɪ.ʃənt/</p>
                    <p className="example">
                      "My date was getting <strong>impatient</strong>."
                    </p>
                    <p className="warning">Not "unpatient"</p>
                  </div>
                </div>
              </div>

              <div className="vocabulary-note">
                <h3>📖 Vocabulary Note:</h3>
                <p>
                  <strong>Date:</strong> Can mean calendar date OR the person
                  you're romantically with
                </p>
                <p>"He's my date" (romantic context)</p>
              </div>
            </div>
          </section>

          {/* Mistake 4: Polite/Impolite */}
          <section className="mistake-section" id="mistake-4">
            <div className="mistake-header">
              <span className="mistake-number">4</span>
              <h2>Polite vs Impolite</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Adjective</h4>
                    <p className="word">polite</p>
                    <p className="example">
                      "It's <strong>polite</strong> to say please and thank
                      you."
                    </p>
                  </div>
                  <div className="usage-card negative">
                    <h4>Opposite</h4>
                    <p className="word">impolite</p>
                    <p className="example">
                      "My date was <strong>impolite</strong> to the waiter."
                    </p>
                    <p className="warning">Not "unpolite"</p>
                  </div>
                </div>
              </div>

              <div className="idiom-box">
                <h3>🇺🇸 English Idiom:</h3>
                <div className="idiom-card">
                  <h4>Red Flag</h4>
                  <p>A warning sign that something is wrong</p>
                  <div className="idiom-examples">
                    <p>
                      "Someone being rude is a <strong>red flag</strong>."
                    </p>
                    <p>
                      "Smoke from the engine is a <strong>red flag</strong> -
                      stop driving!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mistake 5: Paint/Painter */}
          <section className="mistake-section" id="mistake-5">
            <div className="mistake-header">
              <span className="mistake-number">5</span>
              <h2>Paint vs Painter</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Person</h4>
                    <p className="word">painter</p>
                    <p className="example">
                      "Liz is a <strong>painter</strong>."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Object (Noun)</h4>
                    <p className="word">painting</p>
                    <p className="example">
                      "She sells <strong>paintings</strong>."
                    </p>
                    <p className="tip">Mona Lisa is a painting</p>
                  </div>
                  <div className="usage-card">
                    <h4>Verb</h4>
                    <p className="word">paint</p>
                    <p className="example">
                      "My daughter <strong>painted</strong> a picture."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Substance</h4>
                    <p className="word">paint</p>
                    <p className="example">
                      "We need more white <strong>paint</strong>."
                    </p>
                  </div>
                </div>
              </div>

              <div className="important-distinction">
                <h3>🎨 Important Distinction:</h3>
                <div className="distinction-card">
                  <div className="activity">
                    <h4>Painting</h4>
                    <p>Using paint + paintbrush</p>
                  </div>
                  <div className="vs">vs</div>
                  <div className="activity">
                    <h4>Drawing</h4>
                    <p>Using pens, pencils, or markers</p>
                    <p className="example">"I like to draw funny cartoons."</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mistake 6: Cook/Cooker */}
          <section className="mistake-section" id="mistake-6">
            <div className="mistake-header">
              <span className="mistake-number">6</span>
              <h2>Cook vs Cooker</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Person</h4>
                    <p className="word">cook</p>
                    <p className="example">
                      "My mom is a good <strong>cook</strong>."
                    </p>
                    <p className="tip">General term for person who cooks</p>
                  </div>
                  <div className="usage-card">
                    <h4>Appliance</h4>
                    <p className="word">cooker / stove</p>
                    <p className="example">
                      "Did I turn the <strong>stove</strong> off?"
                    </p>
                    <p className="tip">Cooker = British English</p>
                  </div>
                  <div className="usage-card professional">
                    <h4>Professional</h4>
                    <p className="word">chef</p>
                    <p className="example">
                      "A <strong>chef</strong> works in restaurants."
                    </p>
                    <p className="tip">Trained professional</p>
                  </div>
                  <div className="usage-card">
                    <h4>Verb</h4>
                    <p className="word">cook</p>
                    <p className="example">
                      "I love <strong>cooking</strong> every day."
                    </p>
                  </div>
                </div>
              </div>

              <div className="common-mistake">
                <h3>❌ Common Mistake:</h3>
                <div className="mistake-example">
                  <p>
                    "My mom is a good <span className="wrong">cooker</span>."
                  </p>
                  <p className="correction">
                    ✅ <strong>Correct:</strong> "My mom is a good cook."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mistake 7: Notice/Notify */}
          <section className="mistake-section" id="mistake-7">
            <div className="mistake-header">
              <span className="mistake-number">7</span>
              <h2>Notice vs Notify</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Noun</h4>
                    <p className="word">notice</p>
                    <p className="example">
                      "A <strong>notice</strong> is a paper with important
                      information."
                    </p>
                    <p className="usage">"Give two weeks' notice"</p>
                  </div>
                  <div className="usage-card">
                    <h4>Verb (see)</h4>
                    <p className="word">notice</p>
                    <p className="example">
                      "I <strong>noticed</strong> Nicole wasn't in the meeting."
                    </p>
                    <p className="meaning">Means: to see something different</p>
                  </div>
                  <div className="usage-card formal">
                    <h4>Verb (tell)</h4>
                    <p className="word">notify</p>
                    <p className="example">
                      "We must <strong>notify</strong> all parents."
                    </p>
                    <p className="meaning">
                      Means: to tell someone something important
                    </p>
                  </div>
                </div>
              </div>

              <div className="common-mistake">
                <h3>❌ Common Mistake:</h3>
                <div className="mistake-example">
                  <p>
                    "The landlord <span className="wrong">noticed</span> us
                    about the rent increase."
                  </p>
                  <p className="correction">
                    ✅ <strong>Correct:</strong> "The landlord notified us about
                    the rent increase."
                  </p>
                </div>
              </div>

              <div className="vocabulary-note">
                <h3>📖 Related Vocabulary:</h3>
                <ul>
                  <li>
                    <strong>Notice board / Bulletin board:</strong> Board for
                    putting notices
                  </li>
                  <li>
                    <strong>Resident:</strong> Someone who lives in an area
                  </li>
                  <li>
                    <strong>Non-resident:</strong> Someone who doesn't live in
                    an area
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mistake 8: Decide/Decision */}
          <section className="mistake-section" id="mistake-8">
            <div className="mistake-header">
              <span className="mistake-number">8</span>
              <h2>Decide vs Decision</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Verb</h4>
                    <p className="word">decide</p>
                    <p className="example">
                      "I can't <strong>decide</strong> what to order."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Noun</h4>
                    <p className="word">decision</p>
                    <p className="example">
                      "I have to make a <strong>decision</strong>."
                    </p>
                    <p className="collocation">
                      Use: <strong>make</strong> a decision
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Adjective</h4>
                    <p className="word">decisive</p>
                    <p className="example">
                      "You need to be more <strong>decisive</strong>."
                    </p>
                    <p className="tip">Person who decides easily</p>
                  </div>
                  <div className="usage-card negative">
                    <h4>Opposite</h4>
                    <p className="word">indecisive</p>
                    <p className="example">
                      "Her <strong>indecisive</strong> attitude frustrated the
                      team."
                    </p>
                  </div>
                </div>
              </div>

              <div className="common-mistake">
                <h3>❌ Common Mistake:</h3>
                <div className="mistake-example">
                  <p>
                    "You have to make a <span className="wrong">choose</span>."
                  </p>
                  <p className="correction">
                    ✅ <strong>Correct:</strong> "You have to make a decision."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mistake 9: Complain/Complaint */}
          <section className="mistake-section" id="mistake-9">
            <div className="mistake-header">
              <span className="mistake-number">9</span>
              <h2>Complain vs Complaint</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Verb</h4>
                    <p className="word">complain</p>
                    <div className="grammar-patterns">
                      <p>
                        <strong>Patterns:</strong>
                      </p>
                      <p>
                        • complain <em>that</em> + subject + verb
                      </p>
                      <p>
                        • complain <em>about</em> something
                      </p>
                      <p>
                        • complain <em>to</em> someone
                      </p>
                    </div>
                    <p className="example">
                      "Bill <strong>complained</strong> that his food was cold."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Noun</h4>
                    <p className="word">complaint</p>
                    <p className="example">
                      "I have a <strong>complaint</strong>."
                    </p>
                    <p className="collocation">
                      Use: <strong>make</strong> a complaint
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mistake 10: Freeze/Frozen */}
          <section className="mistake-section" id="mistake-10">
            <div className="mistake-header">
              <span className="mistake-number">10</span>
              <h2>Freeze vs Frozen</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Verb</h4>
                    <p className="word">freeze</p>
                    <p className="verb-forms">freeze - froze - frozen</p>
                    <p className="example">
                      "I need to <strong>freeze</strong> this chicken."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Adjective</h4>
                    <p className="word">frozen</p>
                    <p className="example">
                      "I put <strong>frozen</strong> vegetables in the freezer."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Appliance</h4>
                    <p className="word">freezer</p>
                    <p className="example">
                      "Put it in the <strong>freezer</strong>."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Temperature</h4>
                    <p className="word">freezing</p>
                    <p className="example">
                      "I am <strong>freezing</strong>!" / "It's{" "}
                      <strong>freezing</strong> in here!"
                    </p>
                  </div>
                </div>
              </div>

              <div className="pronunciation-tip">
                <h3>📝 Note:</h3>
                <p>
                  <strong>Frozen</strong> is both the adjective AND the past
                  participle of the verb
                </p>
                <p>
                  Example: "The pipes had <strong>frozen</strong> overnight."
                  (verb)
                </p>
                <p>
                  Example: "Put <strong>frozen</strong> peas on it." (adjective)
                </p>
              </div>
            </div>
          </section>

          {/* Mistake 11: Curious/Curiosity */}
          <section className="mistake-section" id="mistake-11">
            <div className="mistake-header">
              <span className="mistake-number">11</span>
              <h2>Curious vs Curiosity</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Adjective</h4>
                    <p className="word">curious</p>
                    <p className="ipa">/ˈkjʊə.ri.əs/</p>
                    <p className="pronunciation">
                      Say "CURE-ee-us" (not "CORE-ee-us")
                    </p>
                    <p className="example">
                      "Children are naturally <strong>curious</strong>."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Noun</h4>
                    <p className="word">curiosity</p>
                    <p className="ipa">/ˌkjʊə.riˈɒs.ə.ti/</p>
                    <p className="example">
                      "Selina's <strong>curiosity</strong> led her to explore."
                    </p>
                  </div>
                </div>
              </div>

              <div className="expression-box">
                <h3>🗣️ Useful Expression:</h3>
                <div className="expression-card">
                  <h4>Just out of curiosity...</h4>
                  <p>Means: I don't have a reason to ask, I'm just curious</p>
                  <div className="expression-examples">
                    <p>
                      "<strong>Just out of curiosity</strong>, how long have you
                      lived here?"
                    </p>
                    <p>
                      "<strong>Just out of curiosity</strong>, how did you
                      meet?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mistake 12: Allergy/Allergic */}
          <section className="mistake-section" id="mistake-12">
            <div className="mistake-header">
              <span className="mistake-number">12</span>
              <h2>Allergy vs Allergic</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Noun</h4>
                    <p className="word">allergy</p>
                    <p className="ipa">/ˈæl.ə.dʒi/</p>
                    <p className="example">
                      "My daughter has a peanut <strong>allergy</strong>."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Adjective</h4>
                    <p className="word">allergic</p>
                    <p className="ipa">/əˈlɜː.dʒɪk/</p>
                    <p className="pronunciation">
                      Say "a-LER-jik" (not "a-LER-gik")
                    </p>
                    <p className="example">
                      "I am <strong>allergic</strong> to cats."
                    </p>
                    <p className="collocation">
                      Use: <strong>be allergic to</strong> something
                    </p>
                  </div>
                </div>
              </div>

              <div className="common-mistake">
                <h3>❌ Common Mistake:</h3>
                <div className="mistake-example">
                  <p>
                    "She is <span className="wrong">allergy</span>."
                  </p>
                  <p className="correction">
                    ✅ <strong>Correct:</strong> "She is allergic."
                  </p>
                </div>
              </div>

              <div className="vocabulary-note">
                <h3>📖 Medical Vocabulary:</h3>
                <ul>
                  <li>
                    <strong>Severe allergic reactions:</strong> Swelling,
                    difficulty breathing
                  </li>
                  <li>
                    <strong>Hives:</strong> Red and irritated skin
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mistake 13: Addict/Addicted */}
          <section className="mistake-section" id="mistake-13">
            <div className="mistake-header">
              <span className="mistake-number">13</span>
              <h2>Addict vs Addicted</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Person</h4>
                    <p className="word">addict</p>
                    <p className="ipa">/ˈæd.ɪkt/</p>
                    <p className="example">
                      "A drug <strong>addict</strong> is addicted to drugs."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Adjective</h4>
                    <p className="word">addicted</p>
                    <p className="example">
                      "They are <strong>addicted</strong> to drugs."
                    </p>
                    <p className="collocation">
                      Use: <strong>addicted to</strong> something
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Noun (Condition)</h4>
                    <p className="word">addiction</p>
                    <p className="example">
                      "They have an <strong>addiction</strong>."
                    </p>
                  </div>
                </div>
              </div>

              <div className="examples-box">
                <h3>📋 Types of Addictions:</h3>
                <div className="tags-container">
                  <span className="addiction-tag">Alcohol</span>
                  <span className="addiction-tag">Drugs</span>
                  <span className="addiction-tag">Gambling</span>
                  <span className="addiction-tag">Exercise</span>
                  <span className="addiction-tag">Caffeine</span>
                  <span className="addiction-tag">Social Media</span>
                  <span className="addiction-tag">Smartphones</span>
                </div>
                <p className="example">
                  "Social media <strong>addiction</strong> is becoming common."
                </p>
              </div>
            </div>
          </section>

          {/* Mistake 14: Independent/Independence */}
          <section className="mistake-section" id="mistake-14">
            <div className="mistake-header">
              <span className="mistake-number">14</span>
              <h2>Independent vs Independence</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Adjective</h4>
                    <p className="word">independent</p>
                    <div className="spelling-tip">
                      <p>
                        <strong>Spelling Tip:</strong>
                      </p>
                      <p>Think: "independent" has THREE E's</p>
                    </div>
                    <p className="example">
                      "My grandma is very <strong>independent</strong>."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Noun</h4>
                    <p className="word">independence</p>
                    <p className="example">
                      "My <strong>independence</strong> is important."
                    </p>
                  </div>
                </div>
              </div>

              <div className="common-mistake">
                <h3>❌ Common Mistake:</h3>
                <div className="mistake-example">
                  <p>
                    "My <span className="wrong">independent</span> is
                    important."
                  </p>
                  <p className="correction">
                    ✅ <strong>Correct:</strong> "My independence is important."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mistake 15: Marry/Married */}
          <section className="mistake-section" id="mistake-15">
            <div className="mistake-header">
              <span className="mistake-number">15</span>
              <h2>Marry vs Married</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Verb</h4>
                    <p className="word">marry</p>
                    <p className="example">
                      "Will you <strong>marry</strong> me?"
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Adjective</h4>
                    <p className="word">married</p>
                    <p className="example">
                      "They have been <strong>married</strong> for 40 years."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Noun (Situation)</h4>
                    <p className="word">marriage</p>
                    <p className="example">
                      "A strong <strong>marriage</strong> is built on honesty."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Noun (Event)</h4>
                    <p className="word">wedding</p>
                    <p className="example">
                      "The <strong>wedding</strong> is next Saturday."
                    </p>
                    <p className="tip">
                      Wedding = ceremony/celebration (one day)
                    </p>
                  </div>
                </div>
              </div>

              <div className="important-note">
                <h3>💡 Important Distinction:</h3>
                <p>
                  <strong>Wedding</strong> = The ceremony and celebration
                  (usually one day)
                </p>
                <p>
                  <strong>Marriage</strong> = The ongoing relationship/situation
                </p>
              </div>
            </div>
          </section>

          {/* Mistake 16: Choose/Choice */}
          <section className="mistake-section" id="mistake-16">
            <div className="mistake-header">
              <span className="mistake-number">16</span>
              <h2>Choose vs Choice</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Verb</h4>
                    <p className="word">choose</p>
                    <p className="verb-forms">choose - chose - chosen</p>
                    <p className="example">
                      "I can't <strong>choose</strong> what to watch."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Noun</h4>
                    <p className="word">choice</p>
                    <p className="example">
                      "There are too many <strong>choices</strong>."
                    </p>
                    <p className="collocation">
                      Use: <strong>make</strong> a choice
                    </p>
                  </div>
                </div>
              </div>

              <div className="common-mistake">
                <h3>❌ Common Mistake:</h3>
                <div className="mistake-example">
                  <p>
                    "You have to make a <span className="wrong">choose</span>."
                  </p>
                  <p className="correction">
                    ✅ <strong>Correct:</strong> "You have to make a choice."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mistake 17: Breath/Breathe */}
          <section className="mistake-section" id="mistake-17">
            <div className="mistake-header">
              <span className="mistake-number">17</span>
              <h2>Breath vs Breathe</h2>
            </div>

            <div className="word-family-details">
              <div className="correct-usage">
                <h3>✅ Correct Usage:</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <h4>Noun</h4>
                    <p className="word">breath</p>
                    <p className="ipa">/breθ/</p>
                    <p className="pronunciation">
                      Short E sound (like "death")
                    </p>
                    <p className="example">
                      "Take a deep <strong>breath</strong>."
                    </p>
                    <p className="example">
                      "He has garlic <strong>breath</strong>."
                    </p>
                  </div>
                  <div className="usage-card">
                    <h4>Verb</h4>
                    <p className="word">breathe</p>
                    <p className="ipa">/briːð/</p>
                    <p className="pronunciation">Long E sound</p>
                    <p className="example">
                      "I can't <strong>breathe</strong>."
                    </p>
                    <p className="example">
                      "I <strong>breathe</strong> really loudly."
                    </p>
                  </div>
                </div>
              </div>

              <div className="pronunciation-exercise">
                <h3>🎤 Pronunciation Practice:</h3>
                <div className="pronunciation-drill">
                  <div className="word-pair">
                    <p>
                      <strong>breath</strong> - /breθ/ - breath - breath -
                      breath
                    </p>
                    <p>
                      <strong>breathe</strong> - /briːð/ - breathe - breathe -
                      breathe
                    </p>
                  </div>
                </div>
              </div>

              <div className="vocabulary-note">
                <h3>📖 Vocabulary:</h3>
                <p>
                  <strong>Stuffy:</strong> Adjective meaning the air feels old
                  (like a gym locker room)
                </p>
                <p>"This room is so stuffy. Open a window."</p>
              </div>
            </div>
          </section>

          {/* Summary Section */}
          <section className="summary-section">
            <h2>🎯 Key Takeaways</h2>
            <div className="key-points">
              <div className="key-point">
                <div className="key-icon">🔤</div>
                <h3>Word Families Matter</h3>
                <p>
                  Learn all forms of a word together (noun, verb, adjective)
                </p>
              </div>
              <div className="key-point">
                <div className="key-icon">🎵</div>
                <h3>Pronunciation Changes</h3>
                <p>
                  Different forms often have different pronunciations and stress
                  patterns
                </p>
              </div>
              <div className="key-point">
                <div className="key-icon">🚫</div>
                <h3>Avoid False Opposites</h3>
                <p>
                  Patient → Impatient (not unpatient)
                  <br />
                  Polite → Impolite (not unpolite)
                </p>
              </div>
              <div className="key-point">
                <div className="key-icon">💡</div>
                <h3>Collocation Awareness</h3>
                <p>
                  Learn word combinations: "make a decision", "be allergic to",
                  "addicted to"
                </p>
              </div>
            </div>
          </section>

          {/* Practice Section */}
          <section className="practice-section">
            <h2>💪 Practice Exercises</h2>
            <div className="practice-grid">
              <div className="practice-card">
                <h3>Quick Quiz</h3>
                <p>What's the difference between:</p>
                <ul>
                  <li>Cook vs Cooker?</li>
                  <li>Notice vs Notify?</li>
                  <li>Marriage vs Wedding?</li>
                </ul>
              </div>
              <div className="practice-card">
                <h3>Pronunciation Challenge</h3>
                <p>Practice saying these pairs:</p>
                <ul>
                  <li>breath / breathe</li>
                  <li>patient / patience</li>
                  <li>curious / curiosity</li>
                </ul>
              </div>
              <div className="practice-card">
                <h3>Word Formation</h3>
                <p>Complete the word families:</p>
                <ul>
                  <li>Decide → ________ (noun)</li>
                  <li>________ (verb) → Choice</li>
                  <li>Complain → ________ (noun)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-card">
              <h2>📚 Want the Complete Notes?</h2>
              <p>
                Join Gravotion - where grammar, vocabulary, and emotion meet!
              </p>
              <div className="benefits">
                <div className="benefit">
                  <span className="check">✓</span>
                  <span>Download today's lesson notes</span>
                </div>
                <div className="benefit">
                  <span className="check">✓</span>
                  <span>Access hundreds of ready-to-use PDFs</span>
                </div>
                <div className="benefit">
                  <span className="check">✓</span>
                  <span>Get complete grammar course roadmap</span>
                </div>
                <div className="benefit">
                  <span className="check">✓</span>
                  <span>Join a global community of learners</span>
                </div>
              </div>
              <div className="cta-action">
                <button className="join-btn">Join Gravotion</button>
                <p className="cta-note">
                  Write "gravos" in comments for a personal invitation link!
                </p>
              </div>
            </div>
          </section>

          {/* Closing */}
          <footer className="lesson-footer">
            <p className="closing-message">
              I hope this lesson clarified these common word formation mistakes
              for you! Practice these words in your daily conversations and
              writing.
            </p>
            <p className="instructor-signature">- Arnell</p>
            <p className="farewell">See you next time! 👋</p>
          </footer>
        </main>
      </div>
      <style jsx>
        {`
          /* app/word-formation-mistakes/style.css */
          .lesson-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
          }

          /* Header Styles */
          .lesson-header {
            text-align: center;
            margin-bottom: 40px;
            padding: 4px 3px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            border-radius: 16px;
            color: white;
            box-shadow: 0 10px 25px rgba(99, 102, 241, 0.2);
          }

          .lesson-header h1 {
            font-size: 2.8rem;
            margin-bottom: 15px;
            font-weight: 800;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          }

          .lesson-subtitle {
            font-size: 1.3rem;
            opacity: 0.95;
            margin-bottom: 25px;
            font-weight: 500;
          }

          .lesson-meta {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 25px 0;
            flex-wrap: wrap;
          }

          .timestamp,
          .level {
            background: rgba(255, 255, 255, 0.2);
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 1rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .intro-box {
            background: rgba(255, 255, 255, 0.15);
            padding: 25px;
            border-radius: 12px;
            margin-top: 30px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .intro-box h2 {
            color: white;
            margin-bottom: 20px;
            font-size: 1.8rem;
          }

          .word-family-example {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 25px 0;
          }

          .word-type {
            background: rgba(255, 255, 255, 0.2);
            padding: 15px;
            border-radius: 8px;
            text-align: center;
          }

          .word-label {
            display: block;
            font-size: 1.9rem;
            opacity: 0.9;
            margin-bottom: 8px;
          }

          .word-example {
            display: block;
            font-size: 1.4rem;
            font-weight: 600;
            color: white;
          }

          .word-example.highlight {
            color: #fef3c7;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }

          .definition {
            font-size: 1.1rem;
            margin-top: 20px;
            font-style: italic;
            opacity: 0.95;
          }

          /* Mistake Sections */
          .mistake-section {
            margin-bottom: 50px;
            padding: 35px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
            border: 1px solid #e5e7eb;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .mistake-section:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
          }

          .mistake-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #e5e7eb;
          }

          .mistake-number {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            font-weight: 700;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
          }

          .mistake-section h2 {
            color: #374151;
            font-size: 1.8rem;
            margin: 0;
            flex: 1;
          }

          /* Word Family Details */
          .word-family-details {
            margin-top: 25px;
          }

          .correct-usage h3,
          .common-mistake h3,
          .pronunciation-tip h3,
          .vocabulary-note h3,
          .important-distinction h3,
          .expression-box h3,
          .examples-box h3,
          .important-note h3,
          .pronunciation-exercise h3 {
            color: #4f46e5;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e5e7eb;
            font-size: 1.4rem;
          }

          .usage-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 25px 0;
          }

          .usage-card {
            padding: 25px;
            border-radius: 10px;
            background: #f9fafb;
            border-left: 5px solid #6366f1;
            transition: all 0.3s ease;
          }

          .usage-card:hover {
            background: #f3f4f6;
            transform: translateX(5px);
          }

          .usage-card.negative {
            border-left-color: #ef4444;
            background: #fef2f2;
          }

          .usage-card.formal {
            border-left-color: #10b981;
            background: #ecfdf5;
          }

          .usage-card.professional {
            border-left-color: #f59e0b;
            background: #fffbeb;
          }

          .usage-card h4 {
            color: #374151;
            margin-bottom: 15px;
            font-size: 1.1rem;
            font-weight: 600;
          }

          .usage-card .word {
            font-size: 1.8rem;
            font-weight: 700;
            color: #1f2937;
            margin: 10px 0;
          }

          .usage-card .ipa {
            font-family: monospace;
            color: #6b7280;
            margin: 10px 0;
            font-size: 1rem;
          }

          .usage-card .example {
            margin: 15px 0 0 0;
            padding: 12px;
            background: white;
            border-radius: 6px;
            border-left: 3px solid #d1d5db;
            font-style: italic;
            font-size: 2rem;
          }

          .usage-card .tip,
          .usage-card .warning,
          .usage-card .pronunciation,
          .usage-card .collocation,
          .usage-card .meaning,
          .usage-card .spelling-tip,
          .usage-card .verb-forms {
            margin: 10px 0;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 0.9rem;
          }

          .usage-card .tip {
            background: #dbeafe;
            color: #1e40af;
            border-left: 3px solid #3b82f6;
          }

          .usage-card .warning {
            background: #fee2e2;
            color: #991b1b;
            border-left: 3px solid #ef4444;
          }

          .usage-card .pronunciation {
            background: #fef3c7;
            color: #92400e;
            border-left: 3px solid #f59e0b;
          }

          .usage-card .collocation,
          .usage-card .meaning {
            background: #dcfce7;
            color: #166534;
            border-left: 3px solid #10b981;
          }

          .usage-card .spelling-tip {
            background: #f3e8ff;
            color: #6b21a8;
            border-left: 3px solid #8b5cf6;
          }

          .usage-card .verb-forms {
            background: #e0e7ff;
            color: #3730a3;
            border-left: 3px solid #6366f1;
            font-family: monospace;
          }

          /* Grammar Patterns */
          .grammar-patterns {
            margin: 15px 0;
            padding: 15px;
            background: #f8fafc;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
          }

          .grammar-patterns p {
            margin: 8px 0;
            font-family: monospace;
            color: #475569;
          }

          /* Common Mistake Styling */
          .common-mistake {
            margin: 30px 0;
            padding: 25px;
            background: linear-gradient(to right, #fee2e2 0%, #fecaca 100%);
            border-radius: 10px;
            border-left: 5px solid #ef4444;
          }

          .mistake-example p {
            margin: 10px 0;
            font-size: 1.2rem;
          }

          .wrong {
            background: #fca5a5;
            padding: 4px 8px;
            border-radius: 4px;
            text-decoration: line-through;
            color: #991b1b;
            font-weight: 600;
          }

          .correction {
            margin: 15px 0 0 0;
            padding: 15px;
            background: #dcfce7;
            border-radius: 6px;
            border-left: 4px solid #10b981;
            color: #166534;
          }

          /* Distinction Cards */
          .important-distinction {
            margin: 30px 0;
          }

          .distinction-card {
            display: flex;
            align-items: center;
            gap: 30px;
            padding: 25px;
            background: #f0f9ff;
            border-radius: 10px;
            border: 2px dashed #0ea5e9;
          }

          .activity {
            flex: 1;
            text-align: center;
            padding: 20px;
            background: white;
            border-radius: 8px;
            border: 2px solid #0ea5e9;
          }

          .activity h4 {
            color: #0369a1;
            margin-bottom: 10px;
            font-size: 1.3rem;
          }

          .vs {
            font-size: 1.5rem;
            font-weight: 700;
            color: #64748b;
          }

          /* Expression Box */
          .expression-box {
            margin: 30px 0;
          }

          .expression-card {
            padding: 25px;
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border-radius: 10px;
            border-left: 5px solid #f59e0b;
          }

          .expression-card h4 {
            color: #92400e;
            font-size: 1.5rem;
            margin-bottom: 15px;
          }

          .expression-examples {
            margin-top: 20px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 8px;
          }

          .expression-examples p {
            margin: 10px 0;
            padding-left: 20px;
            position: relative;
          }

          .expression-examples p::before {
            content: "💬";
            position: absolute;
            left: 0;
            top: 0;
          }

          /* Tags Container */
          .tags-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 20px 0;
          }

          .addiction-tag {
            background: #e0e7ff;
            color: #3730a3;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 500;
            border: 2px solid #c7d2fe;
          }

          /* Pronunciation Exercise */
          .pronunciation-drill {
            padding: 25px;
            background: #f8fafc;
            border-radius: 10px;
            border: 2px solid #e2e8f0;
          }

          .word-pair {
            font-family: monospace;
            font-size: 1.2rem;
            margin: 15px 0;
            padding: 15px;
            background: white;
            border-radius: 8px;
          }

          /* Summary Section */
          .summary-section {
            margin: 60px 0;
            padding: 40px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            border-radius: 16px;
            color: white;
          }

          .summary-section h2 {
            color: white;
            text-align: center;
            font-size: 2.2rem;
            margin-bottom: 40px;
          }

          .key-points {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
          }

          .key-point {
            text-align: center;
            padding: 25px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease;
          }

          .key-point:hover {
            transform: translateY(-10px);
          }

          .key-icon {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }

          .key-point h3 {
            color: white;
            margin-bottom: 15px;
            font-size: 1.3rem;
          }

          .key-point p {
            opacity: 0.9;
            line-height: 1.6;
          }

          /* Practice Section */
          .practice-section {
            margin: 50px 0;
          }

          .practice-section h2 {
            text-align: center;
            color: #4f46e5;
            font-size: 2rem;
            margin-bottom: 40px;
          }

          .practice-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }

          .practice-card {
            padding: 30px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            border: 2px solid #e5e7eb;
            transition: all 0.3s ease;
          }

          .practice-card:hover {
            border-color: #6366f1;
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(99, 102, 241, 0.15);
          }

          .practice-card h3 {
            color: #4f46e5;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid #e5e7eb;
            font-size: 1.4rem;
          }

          .practice-card ul {
            list-style: none;
            padding: 0;
            margin: 20px 0;
          }

          .practice-card li {
            padding: 12px 0;
            border-bottom: 1px solid #f1f5f9;
            position: relative;
            padding-left: 30px;
          }

          .practice-card li::before {
            content: "❓";
            position: absolute;
            left: 0;
            top: 12px;
          }

          /* CTA Section */
          .cta-section {
            margin: 60px 0;
          }

          .cta-card {
            text-align: center;
            padding: 50px;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            border-radius: 20px;
            color: white;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }

          .cta-card h2 {
            color: #fbbf24;
            font-size: 2.2rem;
            margin-bottom: 20px;
          }

          .cta-card p {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 40px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .benefits {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 40px auto;
            max-width: 1000px;
          }

          .benefit {
            text-align: left;
            padding: 15px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .check {
            color: #10b981;
            font-size: 1.5rem;
            font-weight: bold;
          }

          .cta-action {
            margin-top: 40px;
          }

          .join-btn {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
            border: none;
            padding: 18px 50px;
            font-size: 1.2rem;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
          }

          .join-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 15px 30px rgba(245, 158, 11, 0.4);
          }

          .cta-note {
            margin-top: 20px;
            font-size: 0.9rem;
            opacity: 0.8;
          }

          /* Lesson Footer */
          .lesson-footer {
            text-align: center;
            padding: 40px 20px;
            background: #f8fafc;
            border-radius: 12px;
            margin-top: 50px;
            border-top: 3px solid #e5e7eb;
          }

          .closing-message {
            font-size: 1.3rem;
            line-height: 1.8;
            color: #374151;
            margin-bottom: 30px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .instructor-signature {
            font-size: 1.5rem;
            font-weight: 700;
            color: #6366f1;
            margin: 20px 0;
          }

          .farewell {
            font-size: 1.4rem;
            color: #6b7280;
            margin-top: 20px;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .lesson-header h1 {
              font-size: 2rem;
            }

            .lesson-header {
              padding: 30px 20px;
            }

            .mistake-section {
              padding: 25px;
            }

            .usage-grid {
              grid-template-columns: 1fr;
            }

            .distinction-card {
              flex-direction: column;
            }

            .key-points {
              grid-template-columns: 1fr;
            }

            .practice-grid {
              grid-template-columns: 1fr;
            }

            .cta-card {
              padding: 30px 20px;
            }

            .cta-card h2 {
              font-size: 1.8rem;
            }
          }

          /* Print Styles */
          @media print {
            .lesson-header {
              background: white !important;
              color: black !important;
              box-shadow: none !important;
            }

            .mistake-section {
              break-inside: avoid;
              box-shadow: none !important;
              border: 1px solid #ccc !important;
            }
          }
        `}
      </style>
    </>
  );
}
