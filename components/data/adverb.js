// app/adverbs-lesson/data.js
export const adverbsData = {
  precisely: {
    definitions: [
      {
        id: 1,
        meaning: "Exactly. Often used for time, numbers, or measurements.",
        synonym: "exactly",
      },
      {
        id: 2,
        meaning: "That's correct. Exactly.",
        synonym: "exactly",
      },
    ],
    examples: [
      {
        type: "measurement",
        text: "He followed the instructions precisely — exactly step by step.",
        context: "Following instructions",
      },
      {
        type: "measurement",
        text: "The picture frame has to be precisely 10 inches wide.",
        context: "Exact measurement required",
      },
      {
        type: "time",
        text: "The meeting starts at precisely 9:00 AM.",
        context: "Exact time",
      },
      {
        type: "time",
        text: "At precisely 1:21 AM and 0 seconds, we shall catch up with him and the time machine.",
        context: "From 'Back to the Future' movie",
      },
      {
        type: "confirmation",
        text: "Precisely. Exactly. That's correct.",
        context: "Confirming information",
      },
    ],
    notes: [
      "Precisely vs Exactly: Usually interchangeable, but precisely can be more scientific",
      "Adjective vs Adverb: Precise (adjective) vs Precisely (adverb)",
      "Common with: Time, numbers, measurements, scientific contexts",
    ],
  },
  obviously: {
    definition:
      "Something is easy to understand whether you see it, hear it, or read it.",
    synonym: "clearly",
    examples: [
      {
        text: "She obviously didn't study for the test.",
        context: "Test score is F",
      },
      {
        text: "Obviously, Evan has a cold.",
        context: "He looks sick, needs tissues",
      },
      {
        text: "Obviously, you shouldn't have deleted that file.",
        context: "Mistake was made",
      },
    ],
    warnings: [
      "Can sound sarcastic depending on tone",
      "Can seem rude if used in certain contexts",
      "Often shortened to 'obviously' in fast speech",
    ],
  },
  clearly: {
    definitions: [
      {
        id: 1,
        meaning:
          "Something is easy to understand whether you see it, hear it, or read it.",
        synonym: "obviously",
      },
      {
        id: 2,
        meaning: "In a clear way.",
        synonym: "distinctly",
      },
    ],
    examples: [
      {
        type: "obvious",
        text: "She clearly didn't study for the test.",
        context: "Test score is F",
      },
      {
        type: "obvious",
        text: "Clearly, Evan has a cold.",
        context: "He looks sick",
      },
      {
        type: "clear_communication",
        text: "My teacher speaks slowly and clearly.",
        context: "Clear speech",
      },
      {
        type: "clear_communication",
        text: "The doctor outlined the treatment plan clearly for the patient.",
        context: "Clear explanation",
      },
    ],
    notes: [
      "Outline (verb): Give the main points, like a summary",
      "Example: 'The manager outlined the company's goals for the next quarter.'",
    ],
  },
  unfortunately: {
    definition: "Sorry, I have bad news or bad luck.",
    gesture: "Think about doing a disappointed gesture",
    examples: [
      {
        text: "Unfortunately, we've had to cancel your appointment. Dr. Rob had a family emergency.",
        context: "Cancelling appointment",
      },
      {
        text: "Unfortunately, you just missed the last train.",
        context: "Bad timing",
      },
      {
        text: "Unfortunately, I can't issue a refund without a receipt.",
        context: "Policy limitation",
      },
    ],
    vocabulary: [
      {
        term: "My hands are tied",
        meaning: "Idiom meaning 'There is nothing I can do'",
      },
      {
        term: "Issue a refund",
        meaning: "Formal way to say 'return your money'",
      },
      {
        term: "Receipt",
        meaning: "Paper or digital proof of purchase",
      },
    ],
  },
  fortunately: {
    definition: "I have good luck! (Opposite of unfortunately)",
    formality: "Formal",
    synonym: "luckily",
    examples: [
      {
        text: "I dropped my keys onto a grate but fortunately they didn't fall in.",
        context: "Narrow escape",
      },
      {
        text: "We forgot the tickets, but fortunately, the organizer let us in.",
        context: "Getting lucky",
      },
      {
        text: "Fortunately, no one was hurt in the accident.",
        context: "Positive outcome",
      },
    ],
  },
  luckily: {
    definition: "I have good luck! (Opposite of unfortunately)",
    formality: "Less formal",
    synonym: "fortunately",
    examples: [
      {
        text: "I dropped my keys onto a grate but luckily they didn't fall in.",
        context: "Narrow escape",
      },
      {
        text: "We forgot the tickets, but luckily, the organizer let us in.",
        context: "Getting lucky",
      },
      {
        text: "Luckily, no one was hurt in the accident.",
        context: "Positive outcome",
      },
    ],
  },
};

export const commentsData = {
  introComments: [
    { user: "Kamate", text: "Hi, ma'am. Hope you're doing well, right?" },
    { user: "Maria", text: "Wow, Mana from heaven. Hi, Arnell." },
    { user: "Natalia", text: "Hello, Arnell. Hello, everyone." },
    { user: "Dalton", text: "Hello, teacher." },
    { user: "Leonardo", text: "Hi." },
    { user: "Joanna", text: "We have a new member." },
    { user: "Nan", text: "Hi Nan as always." },
    { user: "Griana", text: "Hello. Good evening." },
    {
      user: "Positive thought",
      text: "Hi, teacher. Good to have you here at this time.",
    },
  ],
  highlightComments: [
    {
      user: "Melena",
      text: "Arnell's YouTube channel is obviously the best channel to learn English.",
      response: "Yes, I love that example.",
    },
    {
      user: "Lucen",
      text: "Is it correct to say clearly she did not a good job?",
      response: "We can say, 'Clearly she did not do a good job.'",
    },
    {
      user: "Positive thoughts",
      text: "Obviously, we need to follow Arnell's guidance to be great learners.",
      response: "Exactly. Precisely. Precisely.",
    },
    {
      user: "Maria",
      text: "Obviously, our English cannot improve without gravion.",
      response: "Yes, exactly. Exactly. Precisely, Maria. Love this comment.",
    },
    {
      user: "Asha",
      text: "Unfortunately, we are not to the trip this weekend.",
      response:
        "We need a main verb there. We are not going on the trip this weekend.",
    },
    {
      user: "Melina",
      text: "Unfortunately, I'm afraid I won't be able to make it to your party. I caught a terrible cold.",
      response: "Exactly. Yes.",
    },
  ],
  studentExamples: {
    unfortunately: [
      {
        student: "Manuel",
        text: "Unfortunately, I can't lend you my car tonight. I need it.",
      },
      {
        student: "Parsa",
        text: "You couldn't be qualified for the job. Unfortunately.",
      },
    ],
    fortunately: [
      {
        student: "Alira",
        text: "Luckily it wasn't raining during the wedding.",
      },
      { student: "Asha", text: "Fortunately, I came across your channel." },
    ],
  },
};

export const additionalInfo = {
  schedule: {
    regular: "Every other Wednesday",
    december: "Two lives in December (back-to-back) due to holiday break",
    nextLesson: "Wednesday the 10th - More adverbs!",
  },
  announcements: [
    "Gravotion platform launch - grammar, vocabulary, and emotion meet",
    "YouTube membership closing next week",
    "Black Friday sale: 25% off workbooks with code BF2025",
  ],
  moviePoll: {
    question: "Have you ever seen Back to the Future?",
    results: { yes: 58, no: 42 },
  },
  teacherNotes: {
    pronunciation:
      "Native speakers often say 'obviously' instead of 'obviously' in fast speech",
    grammar:
      "With movies: 'watch' for action, 'see' for experience (Have you seen that movie?)",
    warning: "Obviously/clearly can sound sarcastic or rude depending on tone",
  },
  qa: [
    {
      question: "Can I use precisely and exactly interchangeably?",
      answer:
        "Yes, usually. Precisely is usually used with time, numbers, measurements. Precisely can be a little bit more scientific, but generally precisely and exactly can be used in the same way.",
    },
    {
      question: "When to use precise and precisely?",
      answer:
        "Precise is the adjective. You need to be precise. Precisely is the adverb. Do it precisely.",
    },
    {
      question:
        "How to use obvious or obviously or clearly in a sarcastic way?",
      answer:
        "Depending on your tone of voice, these adverbs might seem a little rude. Maybe they're sarcastic. For example, if a sign says 'Closed' and someone asks if it's closed, saying 'Obviously' would be sarcastic.",
    },
    {
      question: "What does 'my hands are tied' mean?",
      answer:
        "This is an idiom meaning 'There is nothing I can do.' It usually means there's nothing I can do to help you or change things.",
    },
    {
      question: "What's the difference between luckily and fortunately?",
      answer:
        "Luckily is less formal. But you can use them in the same way. They're both fine.",
    },
  ],
  culturalNotes: [
    "Thanksgiving is an American/Canadian holiday, not celebrated in England",
    "Back to the Future movie reference - scientist character uses 'precisely' multiple times",
    "'Cold' can be a noun (virus) or adjective (temperature)",
  ],
};
export const prefixCategories = [
  {
    prefix: "anti-",
    meaning: "Against",
    examples: [
      { word: "Antisocial", definition: "Opposed to social norms" },
      { word: "Antigravity", definition: "Opposing gravity" },
      { word: "Antibiotic", definition: "Against life (bacteria)" },
      { word: "Antidepressant", definition: "Against depression" },
      { word: "Antifreeze", definition: "Against freezing" },
    ],
  },
  {
    prefix: "dis-",
    meaning: "Opposite of",
    examples: [
      { word: "Dislike", definition: "Opposite of like" },
      { word: "Dishonest", definition: "Not honest" },
      { word: "Distant", definition: "Far away" },
      { word: "Disagree", definition: "Not agree" },
      { word: "Disappear", definition: "To vanish" },
    ],
  },
  {
    prefix: "in-",
    meaning: "Not",
    examples: [
      { word: "Incorrect", definition: "Not correct" },
      { word: "Inaccurate", definition: "Not accurate" },
      { word: "Inadequate", definition: "Not adequate" },
      { word: "Inability", definition: "Not able" },
      { word: "Incomplete", definition: "Not complete" },
    ],
  },
  {
    prefix: "co-",
    meaning: "With",
    examples: [
      { word: "Co-worker", definition: "Work together" },
      { word: "Copilot", definition: "Pilot together" },
      { word: "Cooperation", definition: "Working together" },
      { word: "Coexist", definition: "Exist together" },
      { word: "Cosign", definition: "Sign together" },
    ],
  },
  {
    prefix: "extra-",
    meaning: "More than",
    examples: [
      { word: "Extracurricular", definition: "Beyond curriculum" },
      { word: "Extraordinary", definition: "Beyond ordinary" },
      { word: "Extra-terrestrial", definition: "Beyond earth" },
      { word: "", definition: "" },
      { word: "", definition: "" },
    ],
  },
  {
    prefix: "fore-",
    meaning: "Before",
    examples: [
      { word: "Forecast", definition: "Predict before" },
      { word: "Forehead", definition: "Front of head" },
      { word: "Foresee", definition: "See before" },
      { word: "Foreword", definition: "Word before" },
      { word: "Foremost", definition: "First in importance" },
    ],
  },
  {
    prefix: "mis-",
    meaning: "Wrongly",
    examples: [
      { word: "Misinterpret", definition: "Interpret wrongly" },
      { word: "Misfire", definition: "Fire wrongly" },
      { word: "Mistake", definition: "Take wrongly" },
      { word: "Misunderstand", definition: "Understand wrongly" },
      { word: "Misconduct", definition: "Wrong conduct" },
    ],
  },
  {
    prefix: "mono-",
    meaning: "Singular",
    examples: [
      { word: "Monotone", definition: "Single tone" },
      { word: "Monobrow", definition: "Single eyebrow" },
      { word: "Monolithic", definition: "Single stone" },
      { word: "Monopoly", definition: "Single seller" },
      { word: "Monolingual", definition: "Single language" },
    ],
  },
  {
    prefix: "non-",
    meaning: "Not, without",
    examples: [
      { word: "Nonsense", definition: "Without sense" },
      { word: "Nonentity", definition: "Not an entity" },
      { word: "Nondescript", definition: "Not described" },
      { word: "Nonactive", definition: "Not active" },
      { word: "Nonexistent", definition: "Not existing" },
    ],
  },
  {
    prefix: "sub-",
    meaning: "Under",
    examples: [
      { word: "Submerge", definition: "Put under" },
      { word: "Submarine", definition: "Under sea" },
      { word: "Sub-category", definition: "Under category" },
      { word: "Subtitle", definition: "Under title" },
      { word: "Subconscious", definition: "Under conscious" },
    ],
  },
  {
    prefix: "trans-",
    meaning: "Across",
    examples: [
      { word: "Transport", definition: "Carry across" },
      { word: "Transnational", definition: "Across nations" },
      { word: "Transatlantic", definition: "Across Atlantic" },
      { word: "Transact", definition: "Carry across" },
      { word: "Transform", definition: "Change across" },
    ],
  },
  {
    prefix: "un-",
    meaning: "Not",
    examples: [
      { word: "Unfinished", definition: "Not finished" },
      { word: "Unfriendly", definition: "Not friendly" },
      { word: "Undone", definition: "Not done" },
      { word: "Unknown", definition: "Not known" },
      { word: "Unlike", definition: "Not like" },
    ],
  },
  {
    prefix: "uni-",
    meaning: "One",
    examples: [
      { word: "Unicycle", definition: "One wheel" },
      { word: "Universal", definition: "One universe" },
      { word: "Unilateral", definition: "One side" },
      { word: "Unanimous", definition: "One mind" },
      { word: "Unpopular", definition: "Not popular" },
    ],
  },
  {
    prefix: "post-",
    meaning: "After",
    examples: [
      { word: "Postmortem", definition: "After death" },
      { word: "Postpone", definition: "Put after" },
      { word: "Postnatal", definition: "After birth" },
      { word: "Postscript", definition: "Written after" },
      { word: "Posterity", definition: "After generations" },
    ],
  },
  {
    prefix: "inter-",
    meaning: "Between",
    examples: [
      { word: "Interact", definition: "Act between" },
      { word: "Intermediate", definition: "Between levels" },
      { word: "Intergalactic", definition: "Between galaxies" },
      { word: "Interstellar", definition: "Between stars" },
      { word: "Interlock", definition: "Lock between" },
    ],
  },
  {
    prefix: "ex-",
    meaning: "Former",
    examples: [
      { word: "Ex-president", definition: "Former president" },
      { word: "Ex-boyfriend", definition: "Former boyfriend" },
      { word: "Exterminate", definition: "Remove completely" },
      { word: "Exterior", definition: "Outside" },
      { word: "Extension", definition: "Extend outward" },
    ],
  },
  {
    prefix: "over-",
    meaning: "Too much",
    examples: [
      { word: "Overwork", definition: "Too much work" },
      { word: "Overdue", definition: "Past due" },
      { word: "Overjoyed", definition: "Too joyful" },
      { word: "Overeat", definition: "Eat too much" },
      { word: "Overoptimistic", definition: "Too optimistic" },
    ],
  },
  {
    prefix: "pre-",
    meaning: "Before",
    examples: [
      { word: "Prefix", definition: "Fix before" },
      { word: "Predetermine", definition: "Determine before" },
      { word: "Pre-intermediate", definition: "Before intermediate" },
      { word: "Preview", definition: "View before" },
      { word: "Prevent", definition: "Come before" },
    ],
  },
  {
    prefix: "re-",
    meaning: "Again",
    examples: [
      { word: "Return", definition: "Turn again" },
      { word: "Rediscover", definition: "Discover again" },
      { word: "Reiterate", definition: "Iterate again" },
      { word: "Reunite", definition: "Unite again" },
      { word: "Recall", definition: "Call again" },
    ],
  },
  {
    prefix: "super-",
    meaning: "Above",
    examples: [
      { word: "Superfood", definition: "Above food" },
      { word: "Superstar", definition: "Above stars" },
      { word: "Supernatural", definition: "Above nature" },
      { word: "Superimpose", definition: "Impose above" },
      { word: "Superhuman", definition: "Above human" },
    ],
  },
  {
    prefix: "under-",
    meaning: "Below",
    examples: [
      { word: "Underwater", definition: "Below water" },
      { word: "Underage", definition: "Below age" },
      { word: "Undercook", definition: "Cook below" },
      { word: "Underline", definition: "Line below" },
      { word: "Underweight", definition: "Below weight" },
    ],
  },
  {
    prefix: "mid-",
    meaning: "Middle",
    examples: [
      { word: "Midfielder", definition: "Middle field" },
      { word: "Midway", definition: "Middle way" },
      { word: "Midsummer", definition: "Middle summer" },
      { word: "Midair", definition: "Middle air" },
      { word: "Midpoint", definition: "Middle point" },
    ],
  },
  {
    prefix: "micro-",
    meaning: "Small",
    examples: [
      { word: "Microscope", definition: "See small" },
      { word: "Microbiology", definition: "Study small life" },
      { word: "Microfilm", definition: "Small film" },
      { word: "Microwave", definition: "Small wave" },
      { word: "Microbe", definition: "Small life" },
    ],
  },
  {
    prefix: "macro-",
    meaning: "Large",
    examples: [
      { word: "Macroeconomics", definition: "Large economics" },
      { word: "Macromolecule", definition: "Large molecule" },
      { word: "Macrobiotic", definition: "Large life" },
      { word: "Macrocosm", definition: "Large universe" },
      { word: "Macrofossil", definition: "Large fossil" },
    ],
  },
  {
    prefix: "semi-",
    meaning: "Half",
    examples: [
      { word: "Semicircle", definition: "Half circle" },
      { word: "Semi-final", definition: "Half final" },
      { word: "Semiconscious", definition: "Half conscious" },
      { word: "Semi-precious", definition: "Half precious" },
      { word: "Semi-skilled", definition: "Half skilled" },
    ],
  },
  {
    prefix: "tri-",
    meaning: "Three",
    examples: [
      { word: "Triangle", definition: "Three angles" },
      { word: "Tripod", definition: "Three feet" },
      { word: "Tricycle", definition: "Three wheels" },
      { word: "Tricolor", definition: "Three colors" },
      { word: "", definition: "" },
    ],
  },
  {
    prefix: "pro-",
    meaning: "Forward",
    examples: [
      { word: "Proceed", definition: "Go forward" },
      { word: "Prowar", definition: "For war" },
      { word: "Promote", definition: "Move forward" },
      { word: "Propose", definition: "Put forward" },
      { word: "Progress", definition: "Step forward" },
    ],
  },
  {
    prefix: "ante-",
    meaning: "Before",
    examples: [
      { word: "Antenatal", definition: "Before birth" },
      { word: "Anteroom", definition: "Before room" },
      { word: "Antedate", definition: "Date before" },
      { word: "Antechamber", definition: "Before chamber" },
      { word: "Antecedent", definition: "Going before" },
    ],
  },
  {
    prefix: "homo-",
    meaning: "Same",
    examples: [
      { word: "Homosexual", definition: "Same sex" },
      { word: "Homonuclear", definition: "Same nucleus" },
      { word: "Homoplastic", definition: "Same form" },
      { word: "Homophobic", definition: "Fear of same" },
      { word: "Homograph", definition: "Same writing" },
    ],
  },
  {
    prefix: "auto-",
    meaning: "Self",
    examples: [
      { word: "Autopilot", definition: "Self pilot" },
      { word: "Autograph", definition: "Self writing" },
      { word: "Autobus", definition: "Self bus" },
      { word: "Automobile", definition: "Self moving" },
      { word: "Autodial", definition: "Self dial" },
    ],
  },
  {
    prefix: "poly-",
    meaning: "Many",
    examples: [
      { word: "Polysyllable", definition: "Many syllables" },
      { word: "Polygon", definition: "Many angles" },
      { word: "Polycotton", definition: "Many fibers" },
      { word: "Polyneuritis", definition: "Many nerves" },
      { word: "", definition: "" },
    ],
  },
  {
    prefix: "hyper-",
    meaning: "Over",
    examples: [
      { word: "Hyperactive", definition: "Over active" },
      { word: "Hyperventilate", definition: "Over ventilate" },
      { word: "Hypersensitive", definition: "Over sensitive" },
      { word: "Hypersimple", definition: "Over simple" },
      { word: "Hyperspace", definition: "Over space" },
    ],
  },
  {
    prefix: "un-",
    meaning: "not / opposite of",
    examples: [
      { word: "unhappy", definition: "not happy" },
      { word: "unable", definition: "not able" },
    ],
  },
  {
    prefix: "re-",
    meaning: "again",
    examples: [
      { word: "rewrite", definition: "write again" },
      { word: "reread", definition: "read again" },
      { word: "return", definition: "turn again" },
    ],
  },
  {
    prefix: "pre-",
    meaning: "before",
    examples: [
      { word: "preview", definition: "view before" },
      { word: "pre-intermediate", definition: "before intermediate" },
    ],
  },
  {
    prefix: "dis-",
    meaning: "not / opposite of",
    examples: [
      { word: "dislike", definition: "not like" },
      { word: "disappear", definition: "vanish" },
    ],
  },
  {
    prefix: "mis-",
    meaning: "wrongly / badly",
    examples: [
      { word: "misunderstand", definition: "understand wrongly" },
      { word: "misfire", definition: "fire wrongly" },
    ],
  },
  {
    prefix: "in-",
    meaning: "not / into",
    examples: [
      { word: "incomplete", definition: "not complete" },
      { word: "inaccurate", definition: "not accurate" },
    ],
  },
  {
    prefix: "im-",
    meaning: "not (used before b, m, p)",
    examples: [
      { word: "impossible", definition: "not possible" },
      { word: "immature", definition: "not mature" },
    ],
  },
  {
    prefix: "ir-",
    meaning: "not (used before r)",
    examples: [
      { word: "irregular", definition: "not regular" },
      { word: "irresponsible", definition: "not responsible" },
    ],
  },
  {
    prefix: "il-",
    meaning: "not (used before l)",
    examples: [
      { word: "illegal", definition: "not legal" },
      { word: "illogical", definition: "not logical" },
    ],
  },
  {
    prefix: "non-",
    meaning: "not",
    examples: [
      { word: "nonstop", definition: "without stopping" },
      { word: "nonfiction", definition: "not fiction" },
    ],
  },
  {
    prefix: "over-",
    meaning: "too much",
    examples: [
      { word: "overeat", definition: "eat too much" },
      { word: "overwork", definition: "work too much" },
    ],
  },
  {
    prefix: "under-",
    meaning: "too little / beneath",
    examples: [
      { word: "underpaid", definition: "paid too little" },
      { word: "underwater", definition: "below water" },
    ],
  },
  {
    prefix: "sub-",
    meaning: "under / below",
    examples: [
      { word: "submarine", definition: "under sea vessel" },
      { word: "subtitle", definition: "secondary title" },
    ],
  },
  {
    prefix: "super-",
    meaning: "above / beyond",
    examples: [
      { word: "superhuman", definition: "beyond human" },
      { word: "superstar", definition: "above stars" },
    ],
  },
  {
    prefix: "inter-",
    meaning: "between / among",
    examples: [
      { word: "international", definition: "between nations" },
      { word: "interact", definition: "act between" },
    ],
  },
  {
    prefix: "trans-",
    meaning: "across / beyond",
    examples: [
      { word: "transport", definition: "carry across" },
      { word: "transform", definition: "change across" },
    ],
  },
  {
    prefix: "anti-",
    meaning: "against",
    examples: [
      { word: "antivirus", definition: "against virus" },
      { word: "antisocial", definition: "against social" },
    ],
  },
  {
    prefix: "auto-",
    meaning: "self",
    examples: [
      { word: "autopilot", definition: "self pilot" },
      { word: "automobile", definition: "self moving" },
    ],
  },
  {
    prefix: "bi-",
    meaning: "two",
    examples: [
      { word: "bicycle", definition: "two wheels" },
      { word: "bilingual", definition: "two languages" },
    ],
  },
  {
    prefix: "tri-",
    meaning: "three",
    examples: [
      { word: "triangle", definition: "three angles" },
      { word: "tricycle", definition: "three wheels" },
    ],
  },
  {
    prefix: "multi-",
    meaning: "many",
    examples: [
      { word: "multitask", definition: "many tasks" },
      { word: "multinational", definition: "many nations" },
    ],
  },
  {
    prefix: "mono-",
    meaning: "one / single",
    examples: [
      { word: "monologue", definition: "single speech" },
      { word: "monolingual", definition: "single language" },
    ],
  },
  {
    prefix: "post-",
    meaning: "after",
    examples: [
      { word: "postwar", definition: "after war" },
      { word: "postpone", definition: "put after" },
    ],
  },
  {
    prefix: "co-",
    meaning: "with / together",
    examples: [
      { word: "cooperate", definition: "work together" },
      { word: "co-worker", definition: "work with" },
    ],
  },
  {
    prefix: "de-",
    meaning: "opposite / remove",
    examples: [
      { word: "deactivate", definition: "remove activation" },
      { word: "defrost", definition: "remove frost" },
    ],
  },
  {
    prefix: "ex-",
    meaning: "former",
    examples: [
      { word: "ex-president", definition: "former president" },
      { word: "ex-boyfriend", definition: "former boyfriend" },
    ],
  },
  {
    prefix: "semi-",
    meaning: "half / partly",
    examples: [
      { word: "semicircle", definition: "half circle" },
      { word: "semi-final", definition: "half final" },
    ],
  },
  {
    prefix: "en-/em-",
    meaning: "cause to / put into",
    examples: [
      { word: "empower", definition: "give power to" },
      { word: "embed", definition: "put into bed" },
    ],
  },
  {
    prefix: "pro-",
    meaning: "in favor of / forward",
    examples: [
      { word: "promote", definition: "move forward" },
      { word: "proceed", definition: "go forward" },
      { word: "prowar", definition: "in favor of war" },
    ],
  },
];
export const suffixCategories = [
  {
    suffix: "-able / -ible",
    meaning: "capable of being",
    examples: [
      { word: "readable", definition: "capable of being read" },
      { word: "visible", definition: "capable of being seen" },
      { word: "flexible", definition: "capable of being bent" },
    ],
  },
  {
    suffix: "-ness",
    meaning: "state or quality of",
    examples: [
      { word: "happiness", definition: "state of being happy" },
      { word: "kindness", definition: "quality of being kind" },
      { word: "darkness", definition: "state of being dark" },
    ],
  },
  {
    suffix: "-less",
    meaning: "without",
    examples: [
      { word: "hopeless", definition: "without hope" },
      { word: "fearless", definition: "without fear" },
      { word: "careless", definition: "without care" },
    ],
  },
  {
    suffix: "-ment",
    meaning: "action or process / result",
    examples: [
      { word: "enjoyment", definition: "action of enjoying" },
      { word: "movement", definition: "action of moving" },
      { word: "government", definition: "result of governing" },
    ],
  },
  {
    suffix: "-tion / -sion",
    meaning: "state or action",
    examples: [
      { word: "creation", definition: "action of creating" },
      { word: "decision", definition: "action of deciding" },
      { word: "confusion", definition: "state of being confused" },
    ],
  },
  {
    suffix: "-er / -or",
    meaning: "person or thing that does something",
    examples: [
      { word: "teacher", definition: "person who teaches" },
      { word: "actor", definition: "person who acts" },
      { word: "singer", definition: "person who sings" },
      { word: "inventor", definition: "person who invents" },
    ],
  },
  {
    suffix: "-ist",
    meaning: "person who does or believes in",
    examples: [
      { word: "artist", definition: "person who creates art" },
      { word: "scientist", definition: "person who studies science" },
      { word: "tourist", definition: "person who tours" },
    ],
  },
  {
    suffix: "-ian",
    meaning: "relating to / person who",
    examples: [
      { word: "librarian", definition: "person who works in a library" },
      { word: "musician", definition: "person who plays music" },
      { word: "politician", definition: "person involved in politics" },
    ],
  },
  {
    suffix: "-ic / -ical",
    meaning: "relating to",
    examples: [
      { word: "historic", definition: "relating to history" },
      { word: "magical", definition: "relating to magic" },
      { word: "economic", definition: "relating to economy" },
    ],
  },
  {
    suffix: "-ive",
    meaning: "having the quality of",
    examples: [
      { word: "creative", definition: "having creativity" },
      { word: "active", definition: "having activity" },
      { word: "productive", definition: "having productivity" },
    ],
  },
  {
    suffix: "-ous / -eous / -ious / -us",
    meaning: "full of",
    examples: [
      { word: "dangerous", definition: "full of danger" },
      { word: "curious", definition: "full of curiosity" },
      { word: "famous", definition: "full of fame" },
      { word: "joyous", definition: "full of joy" },
    ],
  },
  {
    suffix: "-al",
    meaning: "relating to",
    examples: [
      { word: "natural", definition: "relating to nature" },
      { word: "national", definition: "relating to nation" },
      { word: "musical", definition: "relating to music" },
    ],
  },
  {
    suffix: "-y",
    meaning: "characterized by / full of",
    examples: [
      { word: "rainy", definition: "characterized by rain" },
      { word: "sunny", definition: "characterized by sun" },
      { word: "sleepy", definition: "full of sleep" },
      { word: "windy", definition: "characterized by wind" },
    ],
  },
  {
    suffix: "-en",
    meaning: "made of / to make",
    examples: [
      { word: "golden", definition: "made of gold" },
      { word: "wooden", definition: "made of wood" },
      { word: "strengthen", definition: "to make strong" },
      { word: "weaken", definition: "to make weak" },
    ],
  },
  {
    suffix: "-ward / -wards",
    meaning: "in the direction of",
    examples: [
      { word: "forward", definition: "in the forward direction" },
      { word: "backward", definition: "in the backward direction" },
      { word: "homeward", definition: "in the home direction" },
    ],
  },
  {
    suffix: "-hood",
    meaning: "state or condition",
    examples: [
      { word: "childhood", definition: "state of being a child" },
      { word: "neighborhood", definition: "condition of neighbors" },
      { word: "adulthood", definition: "state of being adult" },
    ],
  },
  {
    suffix: "-ship",
    meaning: "status, condition, or skill",
    examples: [
      { word: "friendship", definition: "status of being friends" },
      { word: "leadership", definition: "skill of leading" },
      { word: "citizenship", definition: "condition of being a citizen" },
    ],
  },
  {
    suffix: "-ate",
    meaning: "to make or cause",
    examples: [
      { word: "activate", definition: "to make active" },
      { word: "motivate", definition: "to cause motivation" },
      { word: "celebrate", definition: "to make celebration" },
    ],
  },
  {
    suffix: "-ize / -ise",
    meaning: "to make or become",
    examples: [
      { word: "realize", definition: "to make real" },
      { word: "modernize", definition: "to make modern" },
      { word: "organise", definition: "to make organized" },
    ],
  },
  {
    suffix: "-ify / -fy",
    meaning: "to make",
    examples: [
      { word: "beautify", definition: "to make beautiful" },
      { word: "simplify", definition: "to make simple" },
      { word: "purify", definition: "to make pure" },
    ],
  },
  {
    suffix: "-ing",
    meaning: "action or process (present participle)",
    examples: [
      { word: "running", definition: "action of run" },
      { word: "singing", definition: "action of sing" },
      { word: "reading", definition: "action of read" },
    ],
  },
  {
    suffix: "-ed",
    meaning: "past tense / past participle",
    examples: [
      { word: "walked", definition: "past of walk" },
      { word: "played", definition: "past of play" },
      { word: "wanted", definition: "past of want" },
    ],
  },
  {
    suffix: "-ly",
    meaning: "in a certain way (forms adverbs)",
    examples: [
      { word: "quickly", definition: "in a quick way" },
      { word: "slowly", definition: "in a slow way" },
      { word: "happily", definition: "in a happy way" },
    ],
  },
  {
    suffix: "-s / -es",
    meaning: "plural (nouns) / 3rd person singular (verbs)",
    examples: [
      { word: "cats", definition: "plural of cat" },
      { word: "watches", definition: "plural of watch" },
      { word: "books", definition: "plural of book" },
      { word: "goes", definition: "3rd person of go" },
    ],
  },
];
