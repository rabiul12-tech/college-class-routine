// pages/tenses.js
// Study Mode for English Tenses (Learn / Flashcards / Quiz)
// Source data pulled from YouTube transcript: "ALL 12 ENGLISH TENSES IN 1 HOUR! + TEST"

import Head from "next/head";
import { useMemo, useState, useEffect } from "react";
import Link from "next/link";

const TENSES = [
  {
    key: "present_simple",
    label: "Present Simple",
    formula: "Subject + bare infinitive (base verb)",
    structure: {
      positive: "I work",
      negative: "I do not work",
      question: "Do I work?",
      thirdPerson: "He/She/It works",
    },
    usage: [
      "Habits and repeated actions (I wake up at 6am every day)",
      "General facts and truths (Students do their homework online)",
      "States and situations (I have long hair)",
      "Scheduled future events (Our train leaves at nine)",
    ],
    timeline: "Present period, repeated actions",
    examples: [
      "I cook every day.",
      "Students do their homework online.",
      "Doug is our team leader.",
      "Our train leaves at nine.",
      "The movie starts in 30 minutes.",
    ],
  },
  {
    key: "past_simple",
    label: "Past Simple",
    formula: "Subject + past simple verb (verb 2)",
    structure: {
      positive: "I worked",
      negative: "I did not work",
      question: "Did I work?",
    },
    usage: [
      "Completed past actions (I made an omelette for breakfast)",
      "Past habits (I woke up at 6am every morning)",
      "Past states (I had long hair until I turned 18)",
      "Single past actions (I bought a new phone yesterday)",
    ],
    timeline: "Completed past period",
    examples: [
      "I woke up at 6am every morning.",
      "Students did their homework online during the pandemic.",
      "I made an omelette for breakfast.",
      "I bought a new phone yesterday.",
    ],
  },
  {
    key: "future_simple",
    label: "Future Simple",
    formula: "Subject + will + base verb",
    structure: {
      positive: "I will work",
      negative: "I will not work",
      question: "Will I work?",
    },
    usage: [
      "Future predictions (Students will do their homework online)",
      "Promises (I will arrive on time)",
      "Single future actions (I will buy a new phone)",
      "Future habits (I will wake up at 6am every day)",
      "NOT for definite plans (use present continuous instead)",
    ],
    timeline: "Future period",
    examples: [
      "I will wake up at 6am every morning.",
      "Students will do their homework online beginning May.",
      "I will have long hair in a few years.",
      "The chef will prepare something nice for us.",
    ],
  },
  {
    key: "present_continuous",
    label: "Present Continuous",
    formula: "Subject + am/is/are + verb-ing",
    structure: {
      positive: "I am working",
      negative: "I am not working",
      question: "Are you working?",
    },
    usage: [
      "Actions happening now (Now I am talking to you)",
      "Temporary situations (I am working in Tucson this week)",
      "Future plans (Tomorrow we are flying to Rome)",
      "Changing situations (Now it's getting dark)",
    ],
    timeline: "Now/specific present period",
    examples: [
      "Now I am talking to you.",
      "In class we are working on addition and subtraction.",
      "Tomorrow we are flying to Rome.",
      "I'm meeting Jake and Ellen for dinner tonight.",
      "Now it's getting dark.",
    ],
  },
  {
    key: "past_continuous",
    label: "Past Continuous",
    formula: "Subject + was/were + verb-ing",
    structure: {
      positive: "I was working",
      negative: "I was not working",
      question: "Were you working?",
    },
    usage: [
      "Actions in progress at a specific past time (Yesterday at 2 p.m. I was talking to you)",
      "Background actions interrupted by another action (I was holding a cup of coffee when my son bumped into me)",
      "Two simultaneous past actions (We were having a Super Bowl party and the trailer came on)",
    ],
    timeline: "Specific past period, interrupted actions",
    examples: [
      "Yesterday at 2 p.m. I was talking to you.",
      "I was picking my kids up from school at 3 p.m.",
      "We were having a Super Bowl party and the trailer came on.",
      "I was sitting with a mutual friend.",
    ],
  },
  {
    key: "future_continuous",
    label: "Future Continuous",
    formula: "Subject + will be + verb-ing",
    structure: {
      positive: "I will be working",
      negative: "I will not be working",
      question: "Will you be working?",
    },
    usage: [
      "Actions in progress at a specific future time (Tomorrow at 2 p.m. I will be talking to you)",
      "Background future actions (You will be working in different teams)",
      "Planned future activities (I will be making dinner three hours from now)",
    ],
    timeline: "Specific future period",
    examples: [
      "Tomorrow at 2 p.m. I will be talking to you.",
      "In one hour it will be getting dark.",
      "Next month we will be working on addition and subtraction.",
      "You will be working in different teams.",
      "I'll be having dinner with my boss.",
    ],
  },
  {
    key: "present_perfect",
    label: "Present Perfect",
    formula: "Subject + have/has + past participle (verb 3)",
    structure: {
      positive: "I have worked",
      negative: "I have not worked",
      question: "Have you worked?",
    },
    usage: [
      "Past experiences with present relevance (I have been to Paris)",
      "Actions that started in the past and continue to present (Jane has lived in Canada for 22 years)",
      "Recent completed actions affecting present (He has finished his homework)",
      "General experience without specific time",
    ],
    timeline: "Past action connected to present",
    examples: [
      "I have been to Paris three times.",
      "Kim has taken the TOEFL exam.",
      "He has finished his homework.",
      "Jane has lived in Canada for 22 years.",
      "I have had long hair my entire life.",
    ],
  },
  {
    key: "past_perfect",
    label: "Past Perfect",
    formula: "Subject + had + past participle (verb 3)",
    structure: {
      positive: "I had worked",
      negative: "I had not worked",
      question: "Had you worked?",
    },
    usage: [
      "Actions completed before another past action (I had been to Paris before I started University)",
      "Past to past connection (By the time I moved, my parents had already seen my house)",
      "Background to past events (The police had acquired evidence before this point)",
    ],
    timeline: "Before another past point",
    examples: [
      "I had been to Paris before I started University.",
      "My parents had already seen my new house before I showed them.",
      "Louis had finished his homework before his mom let him play.",
      "Jane had lived in Canada for 22 years before she moved.",
      "We didn't even know the first one had happened.",
    ],
  },
  {
    key: "future_perfect",
    label: "Future Perfect",
    formula: "Subject + will have + past participle (verb 3)",
    structure: {
      positive: "I will have worked",
      negative: "I will not have worked",
      question: "Will you have worked?",
    },
    usage: [
      "Actions completed before a future point (By the end of summer, you will have been to France)",
      "Future achievements (In a few days she will have finished her TOEFL exam)",
      "Duration up to future point (By 2025 she will have lived in Canada for 22 years)",
    ],
    timeline: "Completed before future point",
    examples: [
      "By the end of summer you will have been to France, Germany, and Spain.",
      "In a few days she will have finished her TOEFL exam.",
      "By the time I show them my new house, they will have already seen it.",
      "By 2025 she will have lived in Canada for 22 years.",
      "On my next birthday he will have been with me for eight years.",
    ],
  },
  {
    key: "present_perfect_continuous",
    label: "Present Perfect Continuous",
    formula: "Subject + have/has been + verb-ing",
    structure: {
      positive: "I have been working",
      negative: "I have not been working",
      question: "Have you been working?",
    },
    usage: [
      "Actions that started in the past and continue to present (I have been practicing this song for days)",
      "Emphasis on duration (The pie has been baking for 20 minutes)",
      "Recent activities with present evidence (Sorry I'm sweaty, I've been running)",
      "Ongoing situations (It has been raining non-stop)",
    ],
    timeline: "Past to present, ongoing",
    examples: [
      "The pie has been baking for 20 minutes.",
      "It has been raining non-stop.",
      "Our solar panels have been providing us energy since we put them up.",
      "Sorry I'm sweaty, I've been running.",
      "I've been riding the trains for the past two three weeks.",
    ],
  },
  {
    key: "past_perfect_continuous",
    label: "Past Perfect Continuous",
    formula: "Subject + had been + verb-ing",
    structure: {
      positive: "I had been working",
      negative: "I had not been working",
      question: "Had you been working?",
    },
    usage: [
      "Actions continuing up to another past point (When I checked on the pie it had been baking for 20 minutes)",
      "Duration before past event (The river burst its banks as it had been pouring for days)",
      "Background actions leading to past moment (Eric had been working on this for some time before he was fired)",
    ],
    timeline: "Up to another past point",
    examples: [
      "When I checked on the pie it had been baking for 20 minutes.",
      "The river burst its banks as it had been pouring for days.",
      "Eric had been working on this for some time but he wasn't able to finish it.",
    ],
  },
  {
    key: "future_perfect_continuous",
    label: "Future Perfect Continuous",
    formula: "Subject + will have been + verb-ing",
    structure: {
      positive: "I will have been working",
      negative: "I will not have been working",
      question: "Will you have been working?",
    },
    usage: [
      "Actions continuing up to a future point (In 10 minutes the pie will have been baking for 20 minutes)",
      "Duration up to future time (By Friday it will have been raining for eight days)",
      "Long-term situations reaching future milestone (Next month they will have been providing us energy for exactly one year)",
    ],
    timeline: "Up to future point",
    examples: [
      "In 10 minutes the pie will have been baking for 20 minutes.",
      "By Friday it will have been raining for eight days.",
      "Next month they will have been providing us energy for exactly one year.",
      "At the end of July America's economy will have been growing for 121 months.",
    ],
  },
];

// Additional comparison data
const COMPARISONS = [
  {
    title: "Simple vs Continuous",
    description:
      "Simple tenses express permanent/repeated actions, while continuous tenses express temporary/specific-period actions.",
    examples: [
      "I work in Tucson (permanent) vs I am working in Tucson (temporary)",
      "I worked in Tucson (past life) vs I was working in Tucson (temporary past)",
    ],
  },
  {
    title: "Present Perfect vs Past Simple",
    description:
      "Present perfect focuses on experience/relevance to present, past simple focuses on specific completed past actions.",
    examples: [
      "I have been to Paris (experience) vs I went to Paris in 2003 (specific)",
      "Kim has taken the TOEFL exam (experience) vs She took the TOEFL exam last week (specific)",
    ],
  },
  {
    title: "Will vs Present Continuous for Future",
    description:
      "Use present continuous for definite plans, will for predictions/promises.",
    examples: [
      "Tomorrow we are flying to Rome (definite plan)",
      "Tomorrow we will fly to Rome (prediction, not a plan)",
    ],
  },
  {
    title: "Present Perfect vs Present Perfect Continuous",
    description:
      "Present perfect focuses on completion, present perfect continuous focuses on duration/ongoing action.",
    examples: [
      "The pie has baked (completed) vs The pie has been baking for 20 minutes (ongoing)",
      "I have taught (completed action) vs I have been teaching (ongoing activity)",
    ],
  },
];

// Stative verbs (not used in continuous tenses)
const STATIVE_VERBS = [
  "want",
  "know",
  "love",
  "like",
  "hate",
  "prefer",
  "need",
  "believe",
  "understand",
  "remember",
  "forget",
  "mean",
  "belong",
  "own",
  "possess",
  "have (possession)",
  "be",
  "seem",
  "appear",
  "look (seem)",
  "sound",
  "smell",
  "taste",
  "feel (emotion)",
  "think (opinion)",
  "realize",
  "recognize",
  "suppose",
  "doubt",
  "imagine",
  "agree",
  "disagree",
  "promise",
  "mind",
  "wish",
  "hope",
  "appreciate",
  "deserve",
];

// Utility functions for Quiz generation
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Prepare pool of quiz questions
function buildQuizPool(data) {
  const pool = [];

  // Type 1: Identify the tense
  data.forEach((tense) => {
    tense.examples.forEach((example) => {
      pool.push({
        type: "identify",
        tenseKey: tense.key,
        tenseLabel: tense.label,
        example,
        question: `What tense is used in: "${example}"`,
        answer: tense.label,
      });
    });
  });

  // Type 2: Complete the structure
  data.forEach((tense) => {
    pool.push({
      type: "structure",
      tenseKey: tense.key,
      tenseLabel: tense.label,
      question: `Complete the ${tense.label} structure: ${tense.formula
        .replace(/Subject/g, "_____")
        .replace(/verb[-\s\w]*/gi, "_____")}`,
      answer:
        tense.formula
          .split(" ")
          .find((word) => word.includes("verb") || word === "ing") ||
        tense.formula,
    });
  });

  // Type 3: Choose correct usage
  const usagePairs = [
    {
      correct: "I have been to Paris three times.",
      incorrect: "I was to Paris three times.",
      tense: "present_perfect",
      explanation: "Use present perfect for experiences without specific time",
    },
    {
      correct: "Tomorrow we are flying to Rome.",
      incorrect: "Tomorrow we will fly to Rome.",
      tense: "present_continuous",
      explanation: "Use present continuous for definite future plans",
    },
    {
      correct: "I was watching TV when the phone rang.",
      incorrect: "I watched TV when the phone rang.",
      tense: "past_continuous",
      explanation:
        "Use past continuous for background action interrupted by another action",
    },
  ];

  usagePairs.forEach((pair) => {
    pool.push({
      type: "correction",
      tenseKey: pair.tense,
      tenseLabel: data.find((t) => t.key === pair.tense)?.label || "",
      question: `Which sentence is correct?`,
      option1: pair.correct,
      option2: pair.incorrect,
      answer: pair.correct,
      explanation: pair.explanation,
    });
  });

  return pool;
}

export default function TensesStudy() {
  const [mode, setMode] = useState("learn");
  const [fcIndex, setFcIndex] = useState(0);
  const [showFcBack, setShowFcBack] = useState(false);
  const [quizPool, setQuizPool] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [quizResult, setQuizResult] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const totalFlash = TENSES.length;
  const fcItem = TENSES[fcIndex];

  // Initialize quiz pool
  useEffect(() => {
    setQuizPool(buildQuizPool(TENSES));
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

    let ok = false;
    if (currentQuiz.type === "identify") {
      const normalized = (userAnswer || "").trim().toLowerCase();
      const correct = currentQuiz.answer.toLowerCase();
      ok =
        normalized === correct ||
        currentQuiz.tenseLabel.toLowerCase().includes(normalized) ||
        normalized.includes(currentQuiz.tenseLabel.toLowerCase());
    } else if (currentQuiz.type === "structure") {
      const normalized = (userAnswer || "").trim().toLowerCase();
      const correctParts = currentQuiz.answer.toLowerCase().split(/[+\s]+/);
      ok = correctParts.some((part) => normalized.includes(part));
    } else if (currentQuiz.type === "correction") {
      ok = userAnswer === currentQuiz.answer;
    }

    setQuizResult({
      ok,
      correct: currentQuiz.answer,
      given: userAnswer,
      explanation: currentQuiz.explanation,
    });
  };

  // Auto-start quiz when switching to quiz mode
  useEffect(() => {
    if (mode === "quiz" && quizPool.length > 0 && !currentQuiz) {
      startNewQuiz();
    }
  }, [mode, quizPool.length, currentQuiz]);

  const tenseIndexMap = useMemo(() => {
    const map = {};
    TENSES.forEach((t, i) => (map[t.key] = i));
    return map;
  }, []);

  return (
    <>
      <Head>
        <title>English Tenses Study Mode</title>
      </Head>

      <div
        style={{
          maxWidth: 1200,
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
            marginBottom: 24,
          }}
        >
          <div style={{ flex: 1, minWidth: 300 }}>
            <h1 style={{ margin: 0, fontSize: 24, color: "#1e293b" }}>
              English Tenses — Study Mode
            </h1>
            <p style={{ margin: "6px 0 0", color: "#64748b" }}>
              Master all 12 English tenses with examples from the lesson. Learn
              structures, usage, and practice.
            </p>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button
              onClick={() => setMode("learn")}
              style={{
                padding: "8px 16px",
                background: mode === "learn" ? "#3b82f6" : "#f1f5f9",
                color: mode === "learn" ? "white" : "#334155",
                borderRadius: 8,
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                minWidth: 80,
                transition: "all 0.2s",
              }}
            >
              Learn
            </button>
            <button
              onClick={() => setMode("flash")}
              style={{
                padding: "8px 16px",
                background: mode === "flash" ? "#3b82f6" : "#f1f5f9",
                color: mode === "flash" ? "white" : "#334155",
                borderRadius: 8,
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                minWidth: 80,
                transition: "all 0.2s",
              }}
            >
              Flashcards
            </button>
            <button
              onClick={() => setMode("quiz")}
              style={{
                padding: "8px 16px",
                background: mode === "quiz" ? "#3b82f6" : "#f1f5f9",
                color: mode === "quiz" ? "white" : "#334155",
                borderRadius: 8,
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                minWidth: 80,
                transition: "all 0.2s",
              }}
            >
              Quiz
            </button>
          </div>
        </header>

        {mode === "learn" && (
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <h2 style={{ fontSize: 20, margin: 0, color: "#1e293b" }}>
                All 12 English Tenses
              </h2>
              <button
                onClick={() => setShowComparison(!showComparison)}
                style={{
                  padding: "6px 12px",
                  background: showComparison ? "#10b981" : "#f1f5f9",
                  color: showComparison ? "white" : "#334155",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                {showComparison ? "Hide Comparisons" : "Show Comparisons"}
              </button>
            </div>

            {showComparison && (
              <div style={{ marginBottom: 24 }}>
                <h3
                  style={{ fontSize: 18, color: "#475569", marginBottom: 12 }}
                >
                  Key Comparisons
                </h3>
                <div
                  style={{
                    display: "grid",
                    gap: 12,
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  }}
                >
                  {COMPARISONS.map((comp, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: 16,
                        background: "#f8fafc",
                        borderRadius: 8,
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <h4 style={{ margin: "0 0 8px", color: "#334155" }}>
                        {comp.title}
                      </h4>
                      <p
                        style={{
                          margin: "0 0 8px",
                          color: "#64748b",
                          fontSize: 24,
                        }}
                      >
                        {comp.description}
                      </p>
                      <ul
                        style={{ margin: 0, paddingLeft: 16, color: "#475569" }}
                      >
                        {comp.examples.map((ex, i) => (
                          <li key={i} style={{ fontSize: 13, marginBottom: 4 }}>
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 16,
                    padding: 12,
                    background: "#fffbeb",
                    borderRadius: 8,
                    border: "1px solid #fde68a",
                  }}
                >
                  <h4 style={{ margin: "0 0 8px", color: "#92400e" }}>
                    Stative Verbs Warning
                  </h4>
                  <p
                    style={{
                      margin: "0 0 8px",
                      color: "#b45309",
                      fontSize: 14,
                    }}
                  >
                    These verbs are generally NOT used in continuous tenses:
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {STATIVE_VERBS.slice(0, 10).map((verb, i) => (
                      <span
                        key={i}
                        style={{
                          padding: "4px 8px",
                          background: "#fef3c7",
                          borderRadius: 4,
                          fontSize: 12,
                          color: "#92400e",
                        }}
                      >
                        {verb}
                      </span>
                    ))}
                    {STATIVE_VERBS.length > 10 && (
                      <span
                        style={{
                          fontSize: 12,
                          color: "#b45309",
                          alignSelf: "center",
                        }}
                      >
                        +{STATIVE_VERBS.length - 10} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: "grid", gap: 16 }}>
              {TENSES.map((tense) => (
                <article
                  key={tense.key}
                  style={{
                    padding: 20,
                    borderRadius: 12,
                    background: "white",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 12,
                    }}
                  >
                    <div>
                      <h3 style={{ margin: "0 0 8px", color: "#1e293b" }}>
                        {tense.label}
                      </h3>
                      <div
                        style={{
                          padding: "6px 12px",
                          background: "#e0f2fe",
                          borderRadius: 6,
                          display: "inline-block",
                          marginBottom: 12,
                        }}
                      >
                        <code style={{ color: "#0369a1", fontWeight: 600 }}>
                          {tense.formula}
                        </code>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "8px 12px",
                        background: "#f1f5f9",
                        borderRadius: 6,
                        fontSize: 14,
                        color: "#475569",
                      }}
                    >
                      Timeline: {tense.timeline}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: 16,
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(250px, 1fr))",
                      marginTop: 16,
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          fontSize: 14,
                          color: "#475569",
                          marginBottom: 8,
                        }}
                      >
                        Structure
                      </h4>
                      <div
                        style={{
                          background: "#f8fafc",
                          padding: 12,
                          borderRadius: 6,
                        }}
                      >
                        <div>
                          <strong>Positive:</strong> {tense.structure.positive}
                        </div>
                        <div>
                          <strong>Negative:</strong> {tense.structure.negative}
                        </div>
                        <div>
                          <strong>Question:</strong> {tense.structure.question}
                        </div>
                        {tense.structure.thirdPerson && (
                          <div>
                            <strong>3rd Person:</strong>{" "}
                            {tense.structure.thirdPerson}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4
                        style={{
                          fontSize: 14,
                          color: "#475569",
                          marginBottom: 8,
                        }}
                      >
                        Usage
                      </h4>
                      <ul
                        style={{ margin: 0, paddingLeft: 16, color: "#475569" }}
                      >
                        {tense.usage.map((use, i) => (
                          <li key={i} style={{ marginBottom: 6, fontSize: 14 }}>
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4
                        style={{
                          fontSize: 14,
                          color: "#475569",
                          marginBottom: 8,
                        }}
                      >
                        Examples
                      </h4>
                      <div
                        style={{
                          background: "#f0f9ff",
                          padding: 12,
                          borderRadius: 6,
                        }}
                      >
                        {tense.examples.map((ex, i) => (
                          <div
                            key={i}
                            style={{
                              marginBottom: 8,
                              padding: "8px 12px",
                              background: "white",
                              borderRadius: 4,
                              borderLeft: "3px solid #3b82f6",
                              fontSize: 14,
                            }}
                          >
                            {ex}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {mode === "flash" && (
          <section>
            <h2 style={{ fontSize: 20, marginBottom: 16, color: "#1e293b" }}>
              Tenses Flashcards
            </h2>
            <p style={{ color: "#64748b", marginBottom: 20 }}>
              Flip each card to reveal structure, usage, and examples. Use
              arrows to navigate.
            </p>

            <div
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: 20,
              }}
            >
              <button
                onClick={prevFlash}
                style={{
                  padding: "12px 16px",
                  borderRadius: 8,
                  background: "#3b82f6",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: 16,
                  minWidth: 50,
                }}
              >
                ◀
              </button>

              <div style={{ flex: 1, minWidth: 300 }}>
                <div
                  style={{
                    padding: 24,
                    borderRadius: 12,
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    border: "2px solid #e2e8f0",
                    minHeight: 300,
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => setShowFcBack((s) => !s)}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 16,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 24,
                          fontWeight: 700,
                          color: "#1e293b",
                        }}
                      >
                        {fcItem.label}
                      </div>
                      <div style={{ color: "#64748b", marginTop: 4 }}>
                        {fcItem.timeline}
                      </div>
                    </div>
                    <div style={{ textAlign: "right", color: "#94a3b8" }}>
                      <div style={{ fontSize: 12 }}>Flashcard</div>
                      <div
                        style={{ fontSize: 18, fontWeight: 700, marginTop: 4 }}
                      >
                        {fcIndex + 1} / {totalFlash}
                      </div>
                    </div>
                  </div>

                  {!showFcBack ? (
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          color: "#64748b",
                          fontSize: 14,
                        }}
                      >
                        👆 Click to reveal details
                      </div>
                      <div
                        style={{
                          marginTop: 20,
                          padding: "16px",
                          background: "#f1f5f9",
                          borderRadius: 8,
                          borderLeft: "4px solid #3b82f6",
                        }}
                      >
                        <code
                          style={{
                            fontSize: 16,
                            color: "#0369a1",
                            fontWeight: 600,
                          }}
                        >
                          {fcItem.formula}
                        </code>
                      </div>
                    </div>
                  ) : (
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "grid",
                          gap: 16,
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                        }}
                      >
                        <div>
                          <h4
                            style={{
                              fontSize: 14,
                              color: "#475569",
                              marginBottom: 8,
                            }}
                          >
                            Structure
                          </h4>
                          <div
                            style={{
                              background: "#f8fafc",
                              padding: 12,
                              borderRadius: 6,
                            }}
                          >
                            <div>
                              <strong>Positive:</strong>{" "}
                              {fcItem.structure.positive}
                            </div>
                            <div>
                              <strong>Negative:</strong>{" "}
                              {fcItem.structure.negative}
                            </div>
                            <div>
                              <strong>Question:</strong>{" "}
                              {fcItem.structure.question}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4
                            style={{
                              fontSize: 14,
                              color: "#475569",
                              marginBottom: 8,
                            }}
                          >
                            Key Usage
                          </h4>
                          <ul style={{ margin: 0, paddingLeft: 16 }}>
                            {fcItem.usage.slice(0, 3).map((use, i) => (
                              <li
                                key={i}
                                style={{ marginBottom: 4, fontSize: 14 }}
                              >
                                {use}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div style={{ marginTop: 16 }}>
                        <h4
                          style={{
                            fontSize: 14,
                            color: "#475569",
                            marginBottom: 8,
                          }}
                        >
                          Examples
                        </h4>
                        <div
                          style={{
                            background: "#f0f9ff",
                            padding: 12,
                            borderRadius: 6,
                          }}
                        >
                          {fcItem.examples.slice(0, 2).map((ex, i) => (
                            <div
                              key={i}
                              style={{
                                marginBottom: 8,
                                padding: "8px 12px",
                                background: "white",
                                borderRadius: 4,
                                fontSize: 14,
                              }}
                            >
                              {ex}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={nextFlash}
                style={{
                  padding: "12px 16px",
                  borderRadius: 8,
                  background: "#3b82f6",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: 16,
                  minWidth: 50,
                }}
              >
                ▶
              </button>
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button
                onClick={() => {
                  setFcIndex(0);
                  setShowFcBack(false);
                }}
                style={{
                  padding: "8px 16px",
                  background: "#f1f5f9",
                  color: "#334155",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Restart
              </button>
              <button
                onClick={() => {
                  setFcIndex(Math.floor(Math.random() * totalFlash));
                  setShowFcBack(false);
                }}
                style={{
                  padding: "8px 16px",
                  background: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Random
              </button>
            </div>
          </section>
        )}

        {mode === "quiz" && (
          <section>
            <h2 style={{ fontSize: 20, marginBottom: 16, color: "#1e293b" }}>
              Tenses Quiz
            </h2>
            <p style={{ color: "#64748b", marginBottom: 20 }}>
              Test your knowledge of English tenses with different question
              types.
            </p>

            <div style={{ marginBottom: 20 }}>
              {!quizPool.length ? (
                <div
                  style={{
                    padding: 20,
                    background: "#fff7ed",
                    borderRadius: 8,
                    border: "1px solid #fdba74",
                    textAlign: "center",
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
                      marginBottom: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      onClick={startNewQuiz}
                      style={{
                        padding: "10px 20px",
                        background: "#3b82f6",
                        color: "white",
                        border: "none",
                        borderRadius: 8,
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      New Question
                    </button>
                  </div>

                  {currentQuiz ? (
                    <form onSubmit={submitQuiz}>
                      <div
                        style={{
                          padding: 24,
                          borderRadius: 12,
                          border: "2px solid #e2e8f0",
                          background: "white",
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                        }}
                      >
                        <div style={{ marginBottom: 16 }}>
                          <div
                            style={{
                              padding: "6px 12px",
                              background: "#e0f2fe",
                              borderRadius: 6,
                              display: "inline-block",
                              fontSize: 12,
                              color: "#0369a1",
                              fontWeight: 600,
                            }}
                          >
                            {currentQuiz.type.toUpperCase()} QUESTION
                          </div>
                        </div>

                        <h3
                          style={{
                            fontSize: 18,
                            marginBottom: 16,
                            color: "#1e293b",
                          }}
                        >
                          {currentQuiz.question}
                        </h3>

                        {currentQuiz.type === "identify" && (
                          <>
                            <div
                              style={{
                                padding: 16,
                                background: "#f8fafc",
                                borderRadius: 8,
                                marginBottom: 20,
                                borderLeft: "4px solid #3b82f6",
                              }}
                            >
                              <div
                                style={{
                                  fontStyle: "italic",
                                  color: "#475569",
                                }}
                              >
                                "{currentQuiz.example}"
                              </div>
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
                                placeholder="Enter the tense name (e.g., Present Simple)"
                                style={{
                                  flex: 1,
                                  padding: "12px 16px",
                                  borderRadius: 8,
                                  border: "1px solid #e2e8f0",
                                  minWidth: 200,
                                  fontSize: 16,
                                }}
                                autoFocus
                              />
                              <button
                                type="submit"
                                style={{
                                  padding: "12px 24px",
                                  background: "#10b981",
                                  color: "white",
                                  border: "none",
                                  borderRadius: 8,
                                  cursor: "pointer",
                                  fontWeight: 600,
                                }}
                              >
                                Check Answer
                              </button>
                            </div>
                          </>
                        )}

                        {currentQuiz.type === "structure" && (
                          <>
                            <div style={{ marginBottom: 20 }}>
                              <p style={{ color: "#64748b", marginBottom: 8 }}>
                                Fill in the missing part of the formula:
                              </p>
                              <div
                                style={{
                                  padding: 16,
                                  background: "#f1f5f9",
                                  borderRadius: 8,
                                  fontFamily: "monospace",
                                  fontSize: 18,
                                  color: "#334155",
                                }}
                              >
                                {currentQuiz.question}
                              </div>
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
                                placeholder="Enter the missing part"
                                style={{
                                  flex: 1,
                                  padding: "12px 16px",
                                  borderRadius: 8,
                                  border: "1px solid #e2e8f0",
                                  minWidth: 200,
                                  fontSize: 16,
                                }}
                                autoFocus
                              />
                              <button
                                type="submit"
                                style={{
                                  padding: "12px 24px",
                                  background: "#10b981",
                                  color: "white",
                                  border: "none",
                                  borderRadius: 8,
                                  cursor: "pointer",
                                  fontWeight: 600,
                                }}
                              >
                                Submit
                              </button>
                            </div>
                          </>
                        )}

                        {currentQuiz.type === "correction" && (
                          <>
                            <div style={{ marginBottom: 20 }}>
                              <p style={{ color: "#64748b", marginBottom: 12 }}>
                                Select the correct sentence:
                              </p>
                              <div style={{ display: "grid", gap: 12 }}>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setUserAnswer(currentQuiz.option1)
                                  }
                                  style={{
                                    padding: 16,
                                    background:
                                      userAnswer === currentQuiz.option1
                                        ? "#dbeafe"
                                        : "#f8fafc",
                                    border: `2px solid ${
                                      userAnswer === currentQuiz.option1
                                        ? "#3b82f6"
                                        : "#e2e8f0"
                                    }`,
                                    borderRadius: 8,
                                    textAlign: "left",
                                    cursor: "pointer",
                                    color: "#334155",
                                    fontSize: 15,
                                  }}
                                >
                                  A. {currentQuiz.option1}
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setUserAnswer(currentQuiz.option2)
                                  }
                                  style={{
                                    padding: 16,
                                    background:
                                      userAnswer === currentQuiz.option2
                                        ? "#dbeafe"
                                        : "#f8fafc",
                                    border: `2px solid ${
                                      userAnswer === currentQuiz.option2
                                        ? "#3b82f6"
                                        : "#e2e8f0"
                                    }`,
                                    borderRadius: 8,
                                    textAlign: "left",
                                    cursor: "pointer",
                                    color: "#334155",
                                    fontSize: 15,
                                  }}
                                >
                                  B. {currentQuiz.option2}
                                </button>
                              </div>
                            </div>
                            <button
                              type="submit"
                              style={{
                                padding: "12px 24px",
                                background: "#10b981",
                                color: "white",
                                border: "none",
                                borderRadius: 8,
                                cursor: "pointer",
                                fontWeight: 600,
                                width: "100%",
                              }}
                            >
                              Check Selection
                            </button>
                          </>
                        )}

                        {quizResult && (
                          <div style={{ marginTop: 20 }}>
                            {quizResult.ok ? (
                              <div
                                style={{
                                  padding: 16,
                                  background: "#d1fae5",
                                  borderRadius: 8,
                                  border: "1px solid #a7f3d0",
                                  color: "#065f46",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    marginBottom: 8,
                                  }}
                                >
                                  <span style={{ fontSize: 20 }}>✅</span>
                                  <strong style={{ fontSize: 16 }}>
                                    Correct!
                                  </strong>
                                </div>
                                <div>Answer: "{quizResult.correct}"</div>
                                {quizResult.explanation && (
                                  <div
                                    style={{
                                      marginTop: 8,
                                      fontSize: 14,
                                      color: "#047857",
                                    }}
                                  >
                                    <strong>Explanation:</strong>{" "}
                                    {quizResult.explanation}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div
                                style={{
                                  padding: 16,
                                  background: "#fee2e2",
                                  borderRadius: 8,
                                  border: "1px solid #fca5a5",
                                  color: "#b91c1c",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    marginBottom: 8,
                                  }}
                                >
                                  <span style={{ fontSize: 20 }}>❌</span>
                                  <strong style={{ fontSize: 16 }}>
                                    Incorrect
                                  </strong>
                                </div>
                                <div>
                                  Correct answer: "{quizResult.correct}"
                                </div>
                                {quizResult.given && (
                                  <div>Your answer: "{quizResult.given}"</div>
                                )}
                                {quizResult.explanation && (
                                  <div
                                    style={{
                                      marginTop: 8,
                                      fontSize: 14,
                                      color: "#dc2626",
                                    }}
                                  >
                                    <strong>Explanation:</strong>{" "}
                                    {quizResult.explanation}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </form>
                  ) : (
                    <div
                      style={{
                        padding: 40,
                        background: "#f8fafc",
                        borderRadius: 8,
                        border: "2px dashed #e2e8f0",
                        textAlign: "center",
                        color: "#64748b",
                      }}
                    >
                      Click "New Question" to start the quiz!
                    </div>
                  )}

                  <div style={{ marginTop: 20 }}>
                    <div style={{ fontSize: 14, color: "#64748b" }}>
                      <strong>Quiz Types:</strong>
                      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                        <li>
                          <strong>Identify:</strong> Name the tense used in a
                          sentence
                        </li>
                        <li>
                          <strong>Structure:</strong> Complete the tense formula
                        </li>
                        <li>
                          <strong>Correction:</strong> Choose the grammatically
                          correct sentence
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        <footer
          style={{
            marginTop: 40,
            paddingTop: 20,
            borderTop: "1px solid #e2e8f0",
            color: "#64748b",
            fontSize: 14,
          }}
        >
          <p>
            Based on the YouTube lesson: "ALL 12 ENGLISH TENSES IN 1 HOUR! +
            TEST"
          </p>
          <p>
            Study all 12 tenses with their structures, usage rules, and
            examples.
          </p>
        </footer>
      </div>
    </>
  );
}
