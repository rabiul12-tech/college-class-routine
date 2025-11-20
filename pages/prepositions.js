// pages/prepositions.js
// Study Mode for Prepositions (Learn / Flashcards / Quiz)
// Source data pulled from user's PDF transcript. :contentReference[oaicite:1]{index=1}

// pages/prepositions.js
// Study Mode for Prepositions (Learn / Flashcards / Quiz)

import Head from "next/head";
import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
const PREPOSITIONS = [
  {
    key: "on",
    label: "ON",
    meaning: "on top of / touching / surface",
    examples: [
      "A cup is on the table.",
      "I put a dream catcher over my bed. (over = same meaning here)",
      "I put a dream catcher above my bed. (similar meaning)",
    ],
  },
  {
    key: "in",
    label: "IN",
    meaning: "inside / contained",
    examples: [
      "Coffee is in the cup.",
      "Look in the fridge.",
      "Inside an atom, there are neutrons, protons, and electrons.",
      "I have candy stuck in my tooth.",
      "I'm in the restaurant.",
      "I'm in the library.",
      "I'm waiting in the post office.",
      "It's raining outside, so I'm waiting in the post office.",
    ],
  },
  {
    key: "next_to_beside",
    label: "NEXT TO / BESIDE",
    meaning: "touching or almost touching",
    examples: [
      "My cup is next to my book.",
      "My coffee is beside my book.",
      "The ATM is next to the drugstore.",
      "The ATM is beside the drugstore.",
      "My hotel is next to the beach.",
      "My hotel is beside the beach.",
    ],
  },
  {
    key: "near",
    label: "NEAR / NEAR TO",
    meaning: "close but not touching",
    examples: [
      "The table is near the window.",
      "The ATM is near the drugstore.",
      "My hotel is near the beach.",
    ],
  },
  {
    key: "by",
    label: "BY",
    meaning: "very close to / next to (often emphasizes short distance)",
    examples: [
      "Baskets by the door.",
      "Public toilets are by the information center.",
      "My hotel is by the beach.",
    ],
  },
  {
    key: "between",
    label: "BETWEEN",
    meaning: "in the middle of two",
    examples: [
      "The book is between the coffee and the shopping bag.",
      "The picture frame is between the two plants.",
    ],
  },
  {
    key: "among",
    label: "AMONG / AMONGST",
    meaning: "surrounded by / within a group",
    examples: [
      "A bottle of nail polish is among the food.",
      "The yellow umbrella is among the black umbrellas.",
      "Our family cabin is among the trees.",
      "Find Waldo among all the people.",
      "I am the tallest among my friends.",
      "Rachel is popular among her colleagues.",
      // "Amongst" noted as equivalent in transcript
    ],
  },
  {
    key: "behind",
    label: "BEHIND",
    meaning: "at the back",
    examples: [
      "There is a shelf behind the table.",
      "There’s a wall behind me.",
    ],
  },
  {
    key: "in_front_of",
    label: "IN FRONT OF",
    meaning: "directly before something",
    examples: [
      "The stool is in front of the table.",
      "Can you please not stand in front of me?",
      "Can you please not park in front of my door?",
    ],
  },
  {
    key: "opposite_across_from",
    label: "OPPOSITE / ACROSS FROM",
    meaning: "facing each other / across a space",
    examples: [
      "There is one shelf opposite the other shelf.",
      "A man with a red cap was opposite me.",
      "The fruit stall is opposite the vegetable stall.",
      "Jenny’s office is opposite my office.",
      "Bus stop A is opposite bus stop B.",
      "Bus stop A is across from bus stop B.",
      "Bus stop A is across the street from bus stop B.",
      "The two interviewers were opposite me.",
      "The two interviewers were across from me.",
      "The two interviewers were across the table from me.",
      "The bear is opposite the deer.",
      "The bear is across from the deer.",
      "The bear is across the river from the deer.",
    ],
  },
  {
    key: "over_above",
    label: "OVER / ABOVE",
    meaning:
      "'above' = higher than; 'over' = higher than but can also mean covering/touching",
    examples: [
      "I put a dream catcher over my bed.",
      "Help me put this tarp over the boat.",
      "Your mask has to be over your nose and mouth.",
      "North America is above the equator.",
      "A nice family lives above me.",
    ],
  },
  {
    key: "under_below",
    label: "UNDER / BELOW",
    meaning:
      "'under' = lower and possibly touching/covered; 'below' = lower in level/position",
    examples: [
      "The boat is under the tarp.",
      "The coin is under my right hand.",
      "A river runs under a bridge.",
      "The dog dug a hole and crawled under the fence.",
      "A nice family lives below me.",
      "Chile is below the equator.",
      "There is nothing below us except the ocean.",
    ],
  },
  {
    key: "inside_outside",
    label: "INSIDE / OUTSIDE",
    meaning: "inside (closed/contained) vs outside",
    examples: [
      "A gift is inside the box.",
      "A nut is inside a shell.",
      "Outside the house, it is hot.",
      "My neighbor is outside my window.",
    ],
  },
  {
    key: "at",
    label: "AT",
    meaning:
      "specific point / activity-focused (can be a location or a place where something happens)",
    examples: [
      "I’m at the restaurant.",
      "I’m at the library.",
      "I’ll meet you at the train station.",
      "We are at the park.",
      "I spend most weekends at the beach.",
      "I’m at my desk 12 hours a day.",
      "She’s at her lawyer’s office.",
      "I’m at the post office (doing something).",
      "We are at the hospital visiting Bob.",
      "Parents must be home at midnight.",
    ],
  },
  {
    key: "special_cases",
    label: "SPECIAL CASES (home / school / hospital / bed)",
    meaning: "idiomatic differences",
    examples: [
      "I’m at home.",
      "He’s at home.",
      "Children must remain in school until 18.",
      "My kids are at school.",
      "Zara is in the hospital.",
      "We are at the hospital visiting Bob.",
      "The kids are in bed.",
      "Clean towels are on the bed.",
    ],
  },
  {
    key: "location_pyramid",
    label: "IN / ON / AT (location pyramid)",
    meaning:
      "in = big areas (countries, cities); on = streets; at = specific address/point",
    examples: [
      "I was born in the USA.",
      "I live in England.",
      "My friend lives in the Bronx.",
      "Samuel lives on Baker Street.",
      "We stayed on Route 66.",
      "Samuel lives at 32 Baker Street.",
    ],
  },
  {
    key: "transport_on",
    label: "ON (transport)",
    meaning: "used when you can move around on the vehicle/ platform",
    examples: [
      "on a bus",
      "on a train",
      "on a plane",
      "on a bicycle",
      "on a horse",
      "on a ship / large boat",
    ],
  },
  {
    key: "transport_in",
    label: "IN (transport)",
    meaning: "used when you cannot move around (small enclosed vehicle)",
    examples: ["in a car", "in a limousine", "in a rowboat", "in a canoe"],
  },
  {
    key: "from_to",
    label: "FROM → TO",
    meaning: "movement (start → end) and time (start → end)",
    examples: [
      "I need to walk from my house to work.",
      "Whales migrate from Alaska to Hawaii.",
      "The bus drove students from school to the museum.",
      "I teach from 10 to 2 every day.",
      "Hotel breakfast is served from Monday to Sunday.",
    ],
  },
  {
    key: "away_from_toward",
    label: "AWAY FROM / TOWARD(S)",
    meaning: "direction vs leaving",
    examples: [
      "Walk away from my house and toward the bus stop.",
      "I am moving toward the camera.",
      "I’m moving away from the camera.",
      "Heather is driving to the hospital (destination).",
      "She must drive toward the park first (direction).",
    ],
  },
  {
    key: "past",
    label: "PAST",
    meaning: "move from one side to the other of something",
    examples: [
      "I walked past a bakery.",
      "I walked past a bookstore.",
      "I walked past a flower shop.",
      "David rode past me on his bicycle.",
    ],
  },
  {
    key: "along",
    label: "ALONG",
    meaning: "travel next to or along the length of something",
    examples: [
      "My family drove along the coast.",
      "The kids ran along the beach.",
      "They walked along the river.",
      "A snake slithered along the house.",
    ],
  },
  {
    key: "through",
    label: "THROUGH",
    meaning: "travel in the middle / from one end to the other",
    examples: [
      "Walk through a pedestrian tunnel.",
      "He squeezed through the doors.",
      "Let’s drive through town.",
      "Light shines through a window.",
    ],
  },
  {
    key: "into_out_of",
    label: "INTO / OUT OF",
    meaning: "enter vs exit (often movement into/out of container)",
    examples: [
      "The cat jumped into the box.",
      "The cat jumped out of the basket.",
    ],
  },
  {
    key: "onto_off",
    label: "ONTO / OFF",
    meaning: "onto = onto the top of; off = from top down",
    examples: [
      "The cat jumped onto the table.",
      "The cat jumped off the couch.",
      "He bungee jumped off of the bridge. (informal)",
      "A book fell off of my shelf. (informal)",
    ],
  },
  {
    key: "over_across_movement",
    label: "OVER / ACROSS (movement)",
    meaning: "over = up-and-down clearance; across = side-to-side travel A→B",
    examples: [
      "I jump over the stream.",
      "I walk across a bridge.",
      "The children climbed over the fence.",
      "I stepped over the hole.",
      "I walked across the street.",
      "Mary swam across the English Channel.",
      "We drove across three states.",
      "We drove through three states.",
    ],
  },
  {
    key: "around",
    label: "AROUND",
    meaning: "move on the outside or in a circle; going round",
    examples: [
      "I have to walk around the tree.",
      "I walked around the puddle so my feet wouldn't get wet.",
      "I run around the track.",
      "You can drive around the island.",
    ],
  },
  {
    key: "until_till",
    label: "UNTIL / TILL",
    meaning: "action continues up to a certain time (stop sign)",
    examples: [
      "I'm working until 5.",
      "We are staying here until Saturday.",
      "The store doesn't open until 10.",
      "From 9 until 3.",
      "From 9 till 3.",
    ],
  },
  {
    key: "throughout",
    label: "THROUGHOUT",
    meaning: "entire period / whole duration (often long periods)",
    examples: [
      "Bats sleep throughout the day.",
      "Throughout my life.",
      "Throughout history.",
      "Throughout the centuries.",
    ],
  },
  {
    key: "during",
    label: "DURING",
    meaning: "at some point in a period (or throughout depending on context)",
    examples: [
      "During this lesson, I'll give you lots of examples.",
      "During my presentation, Tia kept looking at her phone.",
      "During school hours, please keep the gates closed.",
      "Mark left during the meeting.",
      "During the listening test, the fire alarm went off.",
    ],
  },
  {
    key: "before_after",
    label: "BEFORE / AFTER",
    meaning: "prior to / after",
    examples: [
      "Wash your hands before breakfast.",
      "If you need to cough during the meal, please cover your mouth.",
      "I’ll order a coffee after dessert.",
      "I filled my bottle before the meeting.",
      "I filled it again after lunch.",
    ],
  },
  {
    key: "for_duration",
    label: "FOR (duration)",
    meaning: "indicates how long (duration)",
    examples: [
      "I lived in Holland for four years.",
      "I do sit-ups for one minute.",
      "Free divers hold their breath for minutes at a time.",
      "We sailed for 2 hours.",
      "We ate at the buffet for 90 minutes.",
    ],
  },
  {
    key: "since",
    label: "SINCE",
    meaning: "indicates start point in time (past → present connection)",
    examples: [
      "I’ve lived here since 2020.",
      "You’ve been wearing those jeans since the start of the month.",
      "They had been waiting since 8.",
    ],
  },
  {
    key: "from_time",
    label: "FROM (time focus)",
    meaning: "specifies when something starts (no implied present connection)",
    examples: [
      "We serve breakfast from 6.",
      "Discounts offered from next week.",
    ],
  },
  {
    key: "by",
    label: "BY",
    meaning: "deadline: complete by this time",
    examples: [
      "We must finish this report by Friday.",
      "You must be home by midnight.",
      "The application must be submitted by Sunday.",
    ],
  },
  {
    key: "within",
    label: "WITHIN",
    meaning: "inside a time limit; before or at the limit",
    examples: [
      "Your card should arrive within 48 hours.",
      "Consume within 5 days.",
      "Contestants must eat as many hotdogs as possible within 10 minutes.",
      "Sailors must finish the race within 2 hours.",
      "You may stay at buffet within 90 minutes.",
    ],
  },
  {
    key: "time_pyramid",
    label: "IN / ON / AT (time pyramid)",
    meaning:
      "in = big periods (months/years/decades); on = days/dates; at = times/meal times",
    examples: [
      "in January",
      "in 2020",
      "in the 1990s",
      "in the 21st century",
      "in the morning",
      "at night (general period)",
      "on Monday",
      "on the weekend (US) / at the weekend (UK)",
      "on October 4th",
      "at 5:00 p.m.",
      "at noon",
    ],
  },
];
// Utility functions for Quiz generation
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Prepare pool of quiz questions
function buildQuizPool(data) {
  const pool = [];
  data.forEach((group) => {
    group.examples.forEach((rawExample) => {
      const labelWords = group.label
        .replace("/", " ")
        .split(/\s+/)
        .filter((word) => word.length > 0) // FIXED: Use filter instead of map(Boolean)
        .map((s) => s.toLowerCase());

      const sentence = rawExample;
      let matched = null;

      // Try to find matching words from label
      for (let word of labelWords) {
        const re = new RegExp(
          `\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
          "i"
        );
        if (re.test(sentence)) {
          matched = word;
          break;
        }
      }

      // Fallback: try the group key
      if (!matched) {
        const fallbackParts = group.key
          .split(/[_\s]+/)
          .filter((word) => word.length > 0); // FIXED
        for (let p of fallbackParts) {
          const re = new RegExp(
            `\\b${p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
            "i"
          );
          if (re.test(sentence)) {
            matched = p;
            break;
          }
        }
      }

      // Build blanked sentence if we found a match
      if (matched) {
        const re = new RegExp(
          `\\b(${matched.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\b`,
          "i"
        );
        const blanked = sentence.replace(re, "_____");
        pool.push({
          prepositionKey: group.key,
          prepositionLabel: group.label,
          sentence,
          blanked,
          answer: matched,
        });
      }
    });
  });
  return pool;
}

export default function PrepositionsStudy() {
  const [mode, setMode] = useState("learn");
  const [fcIndex, setFcIndex] = useState(0);
  const [showFcBack, setShowFcBack] = useState(false);
  const [quizPool, setQuizPool] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [quizResult, setQuizResult] = useState(null);

  const totalFlash = PREPOSITIONS.length;
  const fcItem = PREPOSITIONS[fcIndex];

  // Initialize quiz pool
  useEffect(() => {
    setQuizPool(buildQuizPool(PREPOSITIONS));
  }, []);

  const nextFlash = () => {
    setShowFcBack(false);
    setFcIndex((s) => (s + 1) % totalFlash);
  };

  const prevFlash = () => {
    setShowFcBack(false);
    setFcIndex((s) => (s - 1 + totalFlash) % totalFlash);
  };

  const startNewQuiz = () => {
    if (!quizPool.length) {
      console.warn("No quiz items available");
      return;
    }
    const item = pickRandom(quizPool);
    setCurrentQuiz(item);
    setUserAnswer("");
    setQuizResult(null);
  };

  const submitQuiz = (e) => {
    e?.preventDefault();
    if (!currentQuiz) return;
    const normalized = (userAnswer || "").trim().toLowerCase();
    const correct = currentQuiz.answer.toLowerCase();
    const ok = normalized === correct;
    setQuizResult({ ok, correct, given: userAnswer });
  };

  // Auto-start quiz when switching to quiz mode
  useEffect(() => {
    if (mode === "quiz" && quizPool.length > 0 && !currentQuiz) {
      startNewQuiz();
    }
  }, [mode, quizPool.length, currentQuiz]);

  const prepositionIndexMap = useMemo(() => {
    const map = {};
    PREPOSITIONS.forEach((p, i) => (map[p.key] = i));
    return map;
  }, []);

  return (
    <>
      <Head>
        <title>Prepositions Study Mode</title>
      </Head>

      <div
        style={{
          maxWidth: 1100,
          margin: "28px auto",
          padding: 20,
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
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
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 300 }}>
            <h1 style={{ margin: 0, fontSize: 22 }}>
              Prepositions — Study Mode
            </h1>
            <p style={{ margin: "6px 0 0", color: "#555" }}>
              Learn, review, and quiz yourself on the prepositions extracted
              from your lesson.
            </p>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button
              onClick={() => setMode("learn")}
              style={{
                padding: "8px 12px",
                background: mode === "learn" ? "#2563eb" : "#eef2ff",
                color: mode === "learn" ? "white" : "#111827",
                borderRadius: 8,
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                minWidth: 80,
              }}
            >
              Learn
            </button>
            <button
              onClick={() => setMode("flash")}
              style={{
                padding: "8px 12px",
                background: mode === "flash" ? "#2563eb" : "#eef2ff",
                color: mode === "flash" ? "white" : "#111827",
                borderRadius: 8,
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                minWidth: 80,
              }}
            >
              Flashcards
            </button>
            <button
              onClick={() => setMode("quiz")}
              style={{
                padding: "8px 12px",
                background: mode === "quiz" ? "#2563eb" : "#eef2ff",
                color: mode === "quiz" ? "white" : "#111827",
                borderRadius: 8,
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                minWidth: 80,
              }}
            >
              Quiz
            </button>
          </div>
        </header>

        <main style={{ marginTop: 20 }}>
          {mode === "learn" && (
            <section>
              <h2 style={{ fontSize: 18, marginBottom: 8 }}>
                Learn — Prepositions & Examples
              </h2>
              <p style={{ color: "#444" }}>
                Browse every preposition, its short meaning, and all examples.
                Use the quick search to jump to a preposition.
              </p>

              <div
                style={{
                  marginTop: 12,
                  marginBottom: 18,
                  display: "flex",
                  gap: 8,
                }}
              >
                <SearchJumpList
                  items={PREPOSITIONS}
                  onJump={(k) => {
                    const idx = prepositionIndexMap[k];
                    if (idx !== undefined) {
                      const el = document.getElementById(`pre-${k}`);
                      if (el) {
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }
                  }}
                />
              </div>

              <div style={{ display: "grid", gap: 14 }}>
                {PREPOSITIONS.map((p) => (
                  <article
                    key={p.key}
                    id={`pre-${p.key}`}
                    style={{
                      padding: 14,
                      borderRadius: 8,
                      border: "1px solid #e6eefb",
                      background: "white",
                      boxShadow: "0 6px 18px rgba(12, 24, 80, 0.04)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: 12,
                        flexWrap: "wrap",
                      }}
                    >
                      <h3 style={{ margin: 0 }}>{p.label}</h3>
                      <div style={{ fontSize: 13, color: "#6b7280" }}>
                        {p.meaning}
                      </div>
                    </div>

                    <ul style={{ marginTop: 10, paddingLeft: 18 }}>
                      {p.examples.map((ex, i) => (
                        <li
                          key={i}
                          style={{ marginBottom: 6, lineHeight: 1.6 }}
                        >
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          )}

          {mode === "flash" && (
            <section>
              <h2 style={{ fontSize: 18 }}>Flashcards</h2>
              <p style={{ color: "#444" }}>
                Flip each card to reveal meaning & examples. Use the arrows to
                move.
              </p>

              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <button onClick={prevFlash} style={navBtnStyle}>
                  ◀
                </button>

                <div style={{ flex: 1, minWidth: 300 }}>
                  <div
                    style={{
                      padding: 22,
                      borderRadius: 12,
                      background: "linear-gradient(180deg,#ffffff,#f8fbff)",
                      border: "1px solid #e6eefb",
                      minHeight: 160,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      cursor: "pointer",
                    }}
                    onClick={() => setShowFcBack((s) => !s)}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 12,
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 20, fontWeight: 700 }}>
                          {fcItem.label}
                        </div>
                        <div style={{ color: "#6b7280", marginTop: 6 }}>
                          {fcItem.meaning}
                        </div>
                      </div>
                      <div
                        style={{
                          textAlign: "right",
                          color: "#9ca3af",
                          flexShrink: 0,
                        }}
                      >
                        <div style={{ fontSize: 12 }}>Card</div>
                        <div style={{ marginTop: 6 }}>
                          {fcIndex + 1} / {totalFlash}
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: 4, flex: 1 }}>
                      {!showFcBack ? (
                        <div style={{ color: "#374151", fontSize: 14 }}>
                          👆 Tap the card to reveal examples
                        </div>
                      ) : (
                        <div>
                          <div style={{ fontWeight: 700, marginBottom: 8 }}>
                            Examples
                          </div>
                          <ul style={{ paddingLeft: 18, margin: 0 }}>
                            {fcItem.examples.map((ex, i) => (
                              <li key={i} style={{ marginBottom: 6 }}>
                                {ex}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <button onClick={nextFlash} style={navBtnStyle}>
                  ▶
                </button>
              </div>

              <div style={{ marginTop: 12 }}>
                <button
                  onClick={() => {
                    setFcIndex(0);
                    setShowFcBack(false);
                  }}
                  style={actionBtnStyle}
                >
                  Restart
                </button>
                <button
                  onClick={() => {
                    setFcIndex(Math.floor(Math.random() * totalFlash));
                    setShowFcBack(false);
                  }}
                  style={{ ...actionBtnStyle, marginLeft: 8 }}
                >
                  Random
                </button>
              </div>
            </section>
          )}

          {mode === "quiz" && (
            <section>
              <h2 style={{ fontSize: 18 }}>Quiz — Fill the blank</h2>
              <p style={{ color: "#444" }}>
                The app blanks a preposition in a real example. Type the missing
                preposition and submit.
              </p>

              <div style={{ marginTop: 14 }}>
                {!quizPool.length ? (
                  <div
                    style={{
                      padding: 14,
                      background: "#fff7ed",
                      borderRadius: 8,
                      border: "1px solid #fdba74",
                    }}
                  >
                    Loading quiz questions...
                  </div>
                ) : (
                  <>
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        marginBottom: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      <button onClick={startNewQuiz} style={actionBtnStyle}>
                        New Question
                      </button>
                      <button
                        onClick={startNewQuiz}
                        style={{
                          ...actionBtnStyle,
                          background: "#f3f4f6",
                          color: "#111827",
                        }}
                      >
                        Shuffle
                      </button>
                    </div>

                    {currentQuiz ? (
                      <form onSubmit={submitQuiz} style={{ marginTop: 12 }}>
                        <div
                          style={{
                            padding: 18,
                            borderRadius: 10,
                            border: "1px solid #e6eefb",
                            background: "white",
                          }}
                        >
                          <div
                            style={{
                              marginBottom: 12,
                              color: "#6b7280",
                              fontSize: 13,
                            }}
                          >
                            Preposition group:{" "}
                            <strong>{currentQuiz.prepositionLabel}</strong>
                          </div>

                          <div
                            style={{
                              fontSize: 18,
                              marginBottom: 12,
                              lineHeight: 1.5,
                            }}
                          >
                            {currentQuiz.blanked}
                          </div>

                          <div
                            style={{
                              display: "flex",
                              gap: 8,
                              flexWrap: "wrap",
                            }}
                          >
                            <input
                              value={userAnswer}
                              onChange={(e) => setUserAnswer(e.target.value)}
                              placeholder="Type the missing preposition (single word)"
                              style={{
                                flex: 1,
                                padding: "10px 12px",
                                borderRadius: 8,
                                border: "1px solid #e6eefb",
                                minWidth: 200,
                              }}
                              autoFocus
                            />
                            <button type="submit" style={actionBtnStyle}>
                              Check
                            </button>
                          </div>

                          {quizResult && (
                            <div style={{ marginTop: 12 }}>
                              {quizResult.ok ? (
                                <div
                                  style={{
                                    color: "#065f46",
                                    fontWeight: 700,
                                    padding: "8px 12px",
                                    background: "#d1fae5",
                                    borderRadius: 6,
                                    border: "1px solid #a7f3d0",
                                  }}
                                >
                                  ✅ Correct — "{quizResult.correct}"
                                </div>
                              ) : (
                                <div
                                  style={{
                                    color: "#b91c1c",
                                    fontWeight: 700,
                                    padding: "8px 12px",
                                    background: "#fee2e2",
                                    borderRadius: 6,
                                    border: "1px solid #fca5a5",
                                  }}
                                >
                                  ❌ Incorrect — correct answer: "
                                  {quizResult.correct}"
                                  <div
                                    style={{
                                      marginTop: 8,
                                      color: "#6b7280",
                                      fontWeight: 400,
                                    }}
                                  >
                                    Your answer: "{quizResult.given}"
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </form>
                    ) : (
                      <div
                        style={{
                          padding: 14,
                          borderRadius: 8,
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        Click "New Question" to start.
                      </div>
                    )}

                    <div style={{ marginTop: 14 }}>
                      <small style={{ color: "#6b7280" }}>
                        Tip: the quiz blanks match words from the preposition
                        group label (e.g. "on", "in", "between").
                      </small>
                    </div>
                  </>
                )}
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}

// Helper components
function SearchJumpList({ items, onJump }) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {items.map((it) => (
        <button
          key={it.key}
          onClick={() => onJump(it.key)}
          style={{
            padding: "8px 10px",
            borderRadius: 8,
            border: "1px solid #e6eefb",
            background: "white",
            cursor: "pointer",
            fontWeight: 600,
            color: "#111827",
            fontSize: 12,
          }}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}

const navBtnStyle = {
  padding: "10px 14px",
  borderRadius: 8,
  background: "#eef2ff",
  border: "none",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: 16,
};

const actionBtnStyle = {
  padding: "8px 12px",
  borderRadius: 8,
  background: "#2563eb",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontWeight: 700,
};
