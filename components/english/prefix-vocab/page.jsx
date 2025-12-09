// app/vocabulary/page.jsx
"use client";

import { useState, useMemo } from "react";

const vocabularyWords = [
  {
    category: "Prefix Words",
    words: [
      { prefix: "ex-", fullWord: "extend", rootWord: "tend", meaning: "out" },
      { prefix: "ex-", fullWord: "exhale", rootWord: "hale", meaning: "out" },
      { prefix: "ex-", fullWord: "expand", rootWord: "pand", meaning: "out" },
      { prefix: "ex-", fullWord: "expect", rootWord: "pect", meaning: "out" },
      {
        prefix: "ex-",
        fullWord: "exterior",
        rootWord: "terior",
        meaning: "out / outside",
      },
      {
        prefix: "trans-",
        fullWord: "transfer",
        rootWord: "fer",
        meaning: "across",
      },
      {
        prefix: "trans-",
        fullWord: "translate",
        rootWord: "late",
        meaning: "across",
      },
      {
        prefix: "trans-",
        fullWord: "transport",
        rootWord: "port",
        meaning: "across",
      },
      {
        prefix: "trans-",
        fullWord: "transform",
        rootWord: "form",
        meaning: "across / change",
      },
      {
        prefix: "trans-",
        fullWord: "transition",
        rootWord: "ition",
        meaning: "across",
      },
      {
        prefix: "trans-",
        fullWord: "transplant",
        rootWord: "plant",
        meaning: "across",
      },
      {
        prefix: "trans-",
        fullWord: "transaction",
        rootWord: "action",
        meaning: "across",
      },
      {
        prefix: "trans-",
        fullWord: "transit",
        rootWord: "it",
        meaning: "across",
      },
      {
        prefix: "trans-",
        fullWord: "transparent",
        rootWord: "parent",
        meaning: "across / through",
      },
      {
        prefix: "dis-",
        fullWord: "dishonest",
        rootWord: "honest",
        meaning: "not / opposite",
      },
      {
        prefix: "dis-",
        fullWord: "disappear",
        rootWord: "appear",
        meaning: "not / opposite",
      },
      {
        prefix: "dis-",
        fullWord: "disobey",
        rootWord: "obey",
        meaning: "not / opposite",
      },
      {
        prefix: "dis-",
        fullWord: "distrust",
        rootWord: "trust",
        meaning: "not / opposite",
      },
      {
        prefix: "dis-",
        fullWord: "disrespect",
        rootWord: "respect",
        meaning: "not / opposite",
      },
      {
        prefix: "dis-",
        fullWord: "disagree",
        rootWord: "agree",
        meaning: "not / opposite",
      },
      {
        prefix: "dis-",
        fullWord: "disgrace",
        rootWord: "grace",
        meaning: "not / opposite",
      },
      {
        prefix: "dis-",
        fullWord: "discomfort",
        rootWord: "comfort",
        meaning: "not / opposite",
      },
      {
        prefix: "dis-",
        fullWord: "disbelieve",
        rootWord: "believe",
        meaning: "not / opposite",
      },
      {
        prefix: "un-",
        fullWord: "unlikely",
        rootWord: "likely",
        meaning: "not",
      },
      {
        prefix: "un-",
        fullWord: "unpopular",
        rootWord: "popular",
        meaning: "not",
      },
      { prefix: "un-", fullWord: "untrue", rootWord: "true", meaning: "not" },
      { prefix: "un-", fullWord: "untidy", rootWord: "tidy", meaning: "not" },
      {
        prefix: "un-",
        fullWord: "uncertain",
        rootWord: "certain",
        meaning: "not",
      },
      { prefix: "un-", fullWord: "unable", rootWord: "able", meaning: "not" },
      {
        prefix: "un-",
        fullWord: "unpack",
        rootWord: "pack",
        meaning: "not / reverse",
      },
      { prefix: "un-", fullWord: "unsafe", rootWord: "safe", meaning: "not" },
      {
        prefix: "un-",
        fullWord: "unexpected",
        rootWord: "expected",
        meaning: "not",
      },
      { prefix: "un-", fullWord: "unusual", rootWord: "usual", meaning: "not" },
      {
        prefix: "inter-",
        fullWord: "interact",
        rootWord: "act",
        meaning: "between",
      },
      {
        prefix: "inter-",
        fullWord: "interfere",
        rootWord: "fere",
        meaning: "between",
      },
      {
        prefix: "inter-",
        fullWord: "interlock",
        rootWord: "lock",
        meaning: "between",
      },
      {
        prefix: "inter-",
        fullWord: "international",
        rootWord: "national",
        meaning: "between",
      },
      {
        prefix: "inter-",
        fullWord: "intersect",
        rootWord: "sect",
        meaning: "between",
      },
      {
        prefix: "inter-",
        fullWord: "interval",
        rootWord: "val",
        meaning: "between",
      },
      {
        prefix: "inter-",
        fullWord: "intersperse",
        rootWord: "sperse",
        meaning: "between",
      },
      {
        prefix: "inter-",
        fullWord: "interview",
        rootWord: "view",
        meaning: "between",
      },
      {
        prefix: "inter-",
        fullWord: "interim",
        rootWord: "im",
        meaning: "between",
      },
      {
        prefix: "under-",
        fullWord: "underpaid",
        rootWord: "paid",
        meaning: "below / too little",
      },
      {
        prefix: "under-",
        fullWord: "understand",
        rootWord: "stand",
        meaning: "below / among",
      },
      {
        prefix: "under-",
        fullWord: "undertake",
        rootWord: "take",
        meaning: "below / under",
      },
      {
        prefix: "under-",
        fullWord: "underground",
        rootWord: "ground",
        meaning: "below",
      },
      {
        prefix: "under-",
        fullWord: "underestimate",
        rootWord: "estimate",
        meaning: "below / too little",
      },
      {
        prefix: "under-",
        fullWord: "underweight",
        rootWord: "weight",
        meaning: "below",
      },
      {
        prefix: "under-",
        fullWord: "underneath",
        rootWord: "neath",
        meaning: "below",
      },
      {
        prefix: "under-",
        fullWord: "undercooked",
        rootWord: "cooked",
        meaning: "below / not enough",
      },
      {
        prefix: "under-",
        fullWord: "undervalue",
        rootWord: "value",
        meaning: "below / too little",
      },
      {
        prefix: "mis-",
        fullWord: "mistake",
        rootWord: "take",
        meaning: "wrongly",
      },
      {
        prefix: "mis-",
        fullWord: "misfortune",
        rootWord: "fortune",
        meaning: "wrongly / bad",
      },
      {
        prefix: "mis-",
        fullWord: "misjudge",
        rootWord: "judge",
        meaning: "wrongly",
      },
      {
        prefix: "mis-",
        fullWord: "misplace",
        rootWord: "place",
        meaning: "wrongly",
      },
      {
        prefix: "mis-",
        fullWord: "mislead",
        rootWord: "lead",
        meaning: "wrongly",
      },
      {
        prefix: "mis-",
        fullWord: "misuse",
        rootWord: "use",
        meaning: "wrongly",
      },
      {
        prefix: "mis-",
        fullWord: "misbehave",
        rootWord: "behave",
        meaning: "wrongly",
      },
      {
        prefix: "mis-",
        fullWord: "misinformed",
        rootWord: "informed",
        meaning: "wrongly",
      },
      {
        prefix: "mis-",
        fullWord: "mishap",
        rootWord: "hap",
        meaning: "wrongly / bad luck",
      },
      {
        prefix: "mis-",
        fullWord: "misspell",
        rootWord: "spell",
        meaning: "wrongly",
      },
      {
        prefix: "re-",
        fullWord: "rewrite",
        rootWord: "write",
        meaning: "again",
      },
      {
        prefix: "re-",
        fullWord: "rearrange",
        rootWord: "arrange",
        meaning: "again",
      },
      {
        prefix: "re-",
        fullWord: "reassemble",
        rootWord: "assemble",
        meaning: "again",
      },
      {
        prefix: "re-",
        fullWord: "rebuild",
        rootWord: "build",
        meaning: "again",
      },
      {
        prefix: "re-",
        fullWord: "rediscover",
        rootWord: "discover",
        meaning: "again",
      },
      { prefix: "re-", fullWord: "resell", rootWord: "sell", meaning: "again" },
      {
        prefix: "re-",
        fullWord: "readjust",
        rootWord: "adjust",
        meaning: "again",
      },
      {
        prefix: "re-",
        fullWord: "reiterate",
        rootWord: "iterate",
        meaning: "again",
      },
      {
        prefix: "re-",
        fullWord: "recount",
        rootWord: "count",
        meaning: "again",
      },
      {
        prefix: "re-",
        fullWord: "recover",
        rootWord: "cover",
        meaning: "again / back",
      },
      {
        prefix: "pro-",
        fullWord: "proceed",
        rootWord: "ceed",
        meaning: "forward",
      },
      {
        prefix: "pro-",
        fullWord: "produce",
        rootWord: "duce",
        meaning: "forward",
      },
      {
        prefix: "pro-",
        fullWord: "project",
        rootWord: "ject",
        meaning: "forward",
      },
      {
        prefix: "pro-",
        fullWord: "prospect",
        rootWord: "spect",
        meaning: "forward",
      },
      {
        prefix: "pro-",
        fullWord: "promote",
        rootWord: "mote",
        meaning: "forward",
      },
      {
        prefix: "pro-",
        fullWord: "process",
        rootWord: "cess",
        meaning: "forward",
      },
      {
        prefix: "pro-",
        fullWord: "prohibit",
        rootWord: "hibit",
        meaning: "forward / against",
      },
      {
        prefix: "pro-",
        fullWord: "prominent",
        rootWord: "minent",
        meaning: "forward",
      },
      {
        prefix: "pro-",
        fullWord: "propose",
        rootWord: "pose",
        meaning: "forward",
      },
      {
        prefix: "pro-",
        fullWord: "protocol",
        rootWord: "tocol",
        meaning: "forward",
      },
      {
        prefix: "mid-",
        fullWord: "midway",
        rootWord: "way",
        meaning: "middle",
      },
      {
        prefix: "mid-",
        fullWord: "midsummer",
        rootWord: "summer",
        meaning: "middle",
      },
      {
        prefix: "mid-",
        fullWord: "midfielder",
        rootWord: "fielder",
        meaning: "middle",
      },
      {
        prefix: "mid-",
        fullWord: "midweek",
        rootWord: "week",
        meaning: "middle",
      },
      {
        prefix: "mid-",
        fullWord: "midwife",
        rootWord: "wife",
        meaning: "middle",
      },
      {
        prefix: "mid-",
        fullWord: "midlife",
        rootWord: "life",
        meaning: "middle",
      },
      {
        prefix: "mid-",
        fullWord: "midday",
        rootWord: "day",
        meaning: "middle",
      },
      {
        prefix: "mid-",
        fullWord: "midnight",
        rootWord: "night",
        meaning: "middle",
      },
      {
        prefix: "mid-",
        fullWord: "midmorning",
        rootWord: "morning",
        meaning: "middle",
      },
      {
        prefix: "mid-",
        fullWord: "midriff",
        rootWord: "riff",
        meaning: "middle",
      },
    ],
  },
  {
    category: "Suffix Words",
    words: [
      {
        suffix: "-able",
        fullWord: "acceptable",
        rootWord: "accept",
        meaning: "capable of",
      },
      {
        suffix: "-able",
        fullWord: "enjoyable",
        rootWord: "enjoy",
        meaning: "capable of",
      },
      {
        suffix: "-able",
        fullWord: "valuable",
        rootWord: "value",
        meaning: "capable of",
      },
      {
        suffix: "-able",
        fullWord: "reliable",
        rootWord: "rely",
        meaning: "capable of",
      },
      {
        suffix: "-able",
        fullWord: "breakable",
        rootWord: "break",
        meaning: "capable of",
      },
      {
        suffix: "-able",
        fullWord: "predictable",
        rootWord: "predict",
        meaning: "capable of",
      },
      {
        suffix: "-able",
        fullWord: "avoidable",
        rootWord: "avoid",
        meaning: "capable of",
      },
      {
        suffix: "-able",
        fullWord: "reasonable",
        rootWord: "reason",
        meaning: "capable of",
      },
      {
        suffix: "-able",
        fullWord: "comfortable",
        rootWord: "comfort",
        meaning: "capable of",
      },
      {
        suffix: "-able",
        fullWord: "capable",
        rootWord: "cap",
        meaning: "capable of",
      },
      {
        suffix: "-ful",
        fullWord: "helpful",
        rootWord: "help",
        meaning: "full of",
      },
      {
        suffix: "-ful",
        fullWord: "peaceful",
        rootWord: "peace",
        meaning: "full of",
      },
      {
        suffix: "-ful",
        fullWord: "thoughtful",
        rootWord: "thought",
        meaning: "full of",
      },
      {
        suffix: "-ful",
        fullWord: "painful",
        rootWord: "pain",
        meaning: "full of",
      },
      {
        suffix: "-ful",
        fullWord: "delightful",
        rootWord: "delight",
        meaning: "full of",
      },
      {
        suffix: "-ful",
        fullWord: "beautiful",
        rootWord: "beauty",
        meaning: "full of",
      },
      {
        suffix: "-ful",
        fullWord: "wonderful",
        rootWord: "wonder",
        meaning: "full of",
      },
      {
        suffix: "-ful",
        fullWord: "wasteful",
        rootWord: "waste",
        meaning: "full of",
      },
      {
        suffix: "-ful",
        fullWord: "truthful",
        rootWord: "truth",
        meaning: "full of",
      },
      {
        suffix: "-ful",
        fullWord: "successful",
        rootWord: "success",
        meaning: "full of",
      },
      {
        suffix: "-ment",
        fullWord: "achievement",
        rootWord: "achieve",
        meaning: "result / action",
      },
      {
        suffix: "-ment",
        fullWord: "environment",
        rootWord: "environ",
        meaning: "result / state",
      },
      {
        suffix: "-ment",
        fullWord: "agreement",
        rootWord: "agree",
        meaning: "result",
      },
      {
        suffix: "-ment",
        fullWord: "equipment",
        rootWord: "equip",
        meaning: "result",
      },
      {
        suffix: "-ment",
        fullWord: "investment",
        rootWord: "invest",
        meaning: "result",
      },
      {
        suffix: "-ment",
        fullWord: "movement",
        rootWord: "move",
        meaning: "result / action",
      },
      {
        suffix: "-ment",
        fullWord: "adjustment",
        rootWord: "adjust",
        meaning: "result",
      },
      {
        suffix: "-ment",
        fullWord: "entertainment",
        rootWord: "entertain",
        meaning: "result",
      },
      {
        suffix: "-ment",
        fullWord: "excitement",
        rootWord: "excite",
        meaning: "result",
      },
      {
        suffix: "-ment",
        fullWord: "treatment",
        rootWord: "treat",
        meaning: "action / result",
      },
      {
        suffix: "-ion",
        fullWord: "injection",
        rootWord: "inject",
        meaning: "action",
      },
      {
        suffix: "-ion",
        fullWord: "action",
        rootWord: "act",
        meaning: "action",
      },
      {
        suffix: "-ion",
        fullWord: "decoration",
        rootWord: "decorate",
        meaning: "action",
      },
      {
        suffix: "-ion",
        fullWord: "hesitation",
        rootWord: "hesitate",
        meaning: "action",
      },
      {
        suffix: "-ion",
        fullWord: "creation",
        rootWord: "create",
        meaning: "action",
      },
      {
        suffix: "-ion",
        fullWord: "selection",
        rootWord: "select",
        meaning: "action",
      },
      {
        suffix: "-ion",
        fullWord: "invention",
        rootWord: "invent",
        meaning: "action",
      },
      {
        suffix: "-ion",
        fullWord: "competition",
        rootWord: "compete",
        meaning: "action",
      },
      {
        suffix: "-ion",
        fullWord: "decision",
        rootWord: "decide",
        meaning: "action",
      },
      {
        suffix: "-ion",
        fullWord: "question",
        rootWord: "quest",
        meaning: "(noun form)",
      },
      {
        suffix: "-age",
        fullWord: "vintage",
        rootWord: "vint",
        meaning: "collective / result",
      },
      {
        suffix: "-age",
        fullWord: "advantage",
        rootWord: "advantage",
        meaning: "result",
      },
      {
        suffix: "-age",
        fullWord: "damage",
        rootWord: "dam",
        meaning: "result",
      },
      {
        suffix: "-age",
        fullWord: "language",
        rootWord: "langu",
        meaning: "result",
      },
      {
        suffix: "-age",
        fullWord: "marriage",
        rootWord: "marry",
        meaning: "result",
      },
      {
        suffix: "-age",
        fullWord: "package",
        rootWord: "pack",
        meaning: "result",
      },
      {
        suffix: "-age",
        fullWord: "storage",
        rootWord: "store",
        meaning: "result",
      },
      {
        suffix: "-age",
        fullWord: "drainage",
        rootWord: "drain",
        meaning: "result",
      },
      {
        suffix: "-age",
        fullWord: "encourage",
        rootWord: "courage",
        meaning: "verb form",
      },
      {
        suffix: "-age",
        fullWord: "average",
        rootWord: "aver",
        meaning: "noun / adjective",
      },
      {
        suffix: "-ship",
        fullWord: "friendship",
        rootWord: "friend",
        meaning: "state / status",
      },
      {
        suffix: "-ship",
        fullWord: "worship",
        rootWord: "wors",
        meaning: "action",
      },
      {
        suffix: "-ship",
        fullWord: "partnership",
        rootWord: "partner",
        meaning: "state",
      },
      {
        suffix: "-ship",
        fullWord: "membership",
        rootWord: "member",
        meaning: "state",
      },
      {
        suffix: "-ship",
        fullWord: "relationship",
        rootWord: "relate",
        meaning: "state",
      },
      {
        suffix: "-ship",
        fullWord: "leadership",
        rootWord: "leader",
        meaning: "state",
      },
      {
        suffix: "-ship",
        fullWord: "ownership",
        rootWord: "owner",
        meaning: "state",
      },
      {
        suffix: "-ship",
        fullWord: "championship",
        rootWord: "champion",
        meaning: "state",
      },
      {
        suffix: "-ship",
        fullWord: "sponsorship",
        rootWord: "sponsor",
        meaning: "state",
      },
      {
        suffix: "-ship",
        fullWord: "internship",
        rootWord: "intern",
        meaning: "state",
      },
      {
        suffix: "-ant",
        fullWord: "assistant",
        rootWord: "assist",
        meaning: "person who",
      },
      {
        suffix: "-ant",
        fullWord: "resistant",
        rootWord: "resist",
        meaning: "person / thing that",
      },
      {
        suffix: "-ant",
        fullWord: "consultant",
        rootWord: "consult",
        meaning: "person who",
      },
      {
        suffix: "-ant",
        fullWord: "contestant",
        rootWord: "contest",
        meaning: "person who",
      },
      {
        suffix: "-ant",
        fullWord: "reluctant",
        rootWord: "reluct",
        meaning: "characterized by",
      },
      {
        suffix: "-ant",
        fullWord: "significant",
        rootWord: "signify",
        meaning: "characterized by",
      },
      {
        suffix: "-ant",
        fullWord: "applicant",
        rootWord: "apply",
        meaning: "person who",
      },
      {
        suffix: "-ous",
        fullWord: "dangerous",
        rootWord: "danger",
        meaning: "full of",
      },
      {
        suffix: "-ous",
        fullWord: "continuous",
        rootWord: "continue",
        meaning: "full of",
      },
      {
        suffix: "-ous",
        fullWord: "anxious",
        rootWord: "anxi",
        meaning: "full of",
      },
      {
        suffix: "-ous",
        fullWord: "enormous",
        rootWord: "enorm",
        meaning: "full of",
      },
      {
        suffix: "-ous",
        fullWord: "delicious",
        rootWord: "delic",
        meaning: "full of",
      },
      {
        suffix: "-ous",
        fullWord: "obvious",
        rootWord: "obvi",
        meaning: "full of",
      },
      {
        suffix: "-ous",
        fullWord: "previous",
        rootWord: "previ",
        meaning: "characterized by",
      },
      {
        suffix: "-ous",
        fullWord: "famous",
        rootWord: "fame",
        meaning: "full of",
      },
      {
        suffix: "-ous",
        fullWord: "various",
        rootWord: "vary",
        meaning: "characterized by",
      },
      {
        suffix: "-ous",
        fullWord: "serious",
        rootWord: "seri",
        meaning: "full of",
      },
      {
        suffix: "-ance",
        fullWord: "insurance",
        rootWord: "insure",
        meaning: "state",
      },
      {
        suffix: "-ance",
        fullWord: "performance",
        rootWord: "perform",
        meaning: "action",
      },
      {
        suffix: "-ance",
        fullWord: "appearance",
        rootWord: "appear",
        meaning: "state",
      },
      {
        suffix: "-ance",
        fullWord: "distance",
        rootWord: "dist",
        meaning: "result",
      },
      {
        suffix: "-ance",
        fullWord: "finance",
        rootWord: "fin",
        meaning: "result",
      },
      {
        suffix: "-ance",
        fullWord: "balance",
        rootWord: "bal",
        meaning: "result",
      },
      {
        suffix: "-ance",
        fullWord: "elegance",
        rootWord: "eleg",
        meaning: "quality",
      },
      {
        suffix: "-ance",
        fullWord: "guidance",
        rootWord: "guide",
        meaning: "action",
      },
      {
        suffix: "-ance",
        fullWord: "fragrance",
        rootWord: "fragr",
        meaning: "quality",
      },
      {
        suffix: "-ness",
        fullWord: "fitness",
        rootWord: "fit",
        meaning: "state",
      },
      {
        suffix: "-ness",
        fullWord: "illness",
        rootWord: "ill",
        meaning: "state",
      },
      {
        suffix: "-ness",
        fullWord: "weakness",
        rootWord: "weak",
        meaning: "state",
      },
      {
        suffix: "-ness",
        fullWord: "awareness",
        rootWord: "aware",
        meaning: "state",
      },
      {
        suffix: "-ness",
        fullWord: "darkness",
        rootWord: "dark",
        meaning: "state",
      },
      {
        suffix: "-ness",
        fullWord: "happiness",
        rootWord: "happy",
        meaning: "state",
      },
      {
        suffix: "-ness",
        fullWord: "brightness",
        rootWord: "bright",
        meaning: "state",
      },
      {
        suffix: "-ness",
        fullWord: "sadness",
        rootWord: "sad",
        meaning: "state",
      },
      {
        suffix: "-ness",
        fullWord: "kindness",
        rootWord: "kind",
        meaning: "state",
      },
      {
        suffix: "-less",
        fullWord: "useless",
        rootWord: "use",
        meaning: "without",
      },
      {
        suffix: "-less",
        fullWord: "endless",
        rootWord: "end",
        meaning: "without",
      },
      {
        suffix: "-less",
        fullWord: "harmless",
        rootWord: "harm",
        meaning: "without",
      },
      {
        suffix: "-less",
        fullWord: "spotless",
        rootWord: "spot",
        meaning: "without",
      },
      {
        suffix: "-less",
        fullWord: "mindless",
        rootWord: "mind",
        meaning: "without",
      },
      {
        suffix: "-less",
        fullWord: "helpless",
        rootWord: "help",
        meaning: "without",
      },
      {
        suffix: "-less",
        fullWord: "meaningless",
        rootWord: "meaning",
        meaning: "without",
      },
      {
        suffix: "-less",
        fullWord: "fearless",
        rootWord: "fear",
        meaning: "without",
      },
      {
        suffix: "-less",
        fullWord: "homeless",
        rootWord: "home",
        meaning: "without",
      },
      {
        suffix: "-less",
        fullWord: "emotionless",
        rootWord: "emotion",
        meaning: "without",
      },
      {
        suffix: "-ate",
        fullWord: "duplicate",
        rootWord: "duplic",
        meaning: "make / do",
      },
      {
        suffix: "-ate",
        fullWord: "estimate",
        rootWord: "estim",
        meaning: "make",
      },
      {
        suffix: "-ate",
        fullWord: "desperate",
        rootWord: "desper",
        meaning: "characterized by",
      },
      {
        suffix: "-ate",
        fullWord: "fortunate",
        rootWord: "fortune",
        meaning: "characterized by",
      },
      {
        suffix: "-ate",
        fullWord: "concentrate",
        rootWord: "concentr",
        meaning: "verb form",
      },
      {
        suffix: "-ate",
        fullWord: "appreciate",
        rootWord: "appreci",
        meaning: "verb form",
      },
      {
        suffix: "-ate",
        fullWord: "operate",
        rootWord: "oper",
        meaning: "make / do",
      },
      {
        suffix: "-ate",
        fullWord: "collaborate",
        rootWord: "collabor",
        meaning: "verb form",
      },
      {
        suffix: "-ate",
        fullWord: "delicate",
        rootWord: "delic",
        meaning: "characterized by",
      },
      {
        suffix: "-ate",
        fullWord: "evaluate",
        rootWord: "evalu",
        meaning: "make / do",
      },
      {
        suffix: "-al",
        fullWord: "approval",
        rootWord: "approve",
        meaning: "result",
      },
      {
        suffix: "-al",
        fullWord: "removal",
        rootWord: "remove",
        meaning: "action",
      },
      {
        suffix: "-al",
        fullWord: "personal",
        rootWord: "person",
        meaning: "relating to",
      },
      {
        suffix: "-al",
        fullWord: "natural",
        rootWord: "nature",
        meaning: "relating to",
      },
      {
        suffix: "-al",
        fullWord: "internal",
        rootWord: "intern",
        meaning: "relating to",
      },
      {
        suffix: "-al",
        fullWord: "physical",
        rootWord: "physic",
        meaning: "relating to",
      },
      {
        suffix: "-al",
        fullWord: "musical",
        rootWord: "music",
        meaning: "relating to",
      },
      {
        suffix: "-al",
        fullWord: "typical",
        rootWord: "type",
        meaning: "relating to",
      },
      {
        suffix: "-al",
        fullWord: "exceptional",
        rootWord: "exception",
        meaning: "relating to",
      },
      {
        suffix: "-al",
        fullWord: "promotional",
        rootWord: "promote",
        meaning: "relating to",
      },
      {
        suffix: "-ly",
        fullWord: "quickly",
        rootWord: "quick",
        meaning: "in a certain way",
      },
      {
        suffix: "-ly",
        fullWord: "slowly",
        rootWord: "slow",
        meaning: "in a certain way",
      },
      {
        suffix: "-ly",
        fullWord: "lovely",
        rootWord: "love",
        meaning: "in a certain way",
      },
      {
        suffix: "-ly",
        fullWord: "easily",
        rootWord: "easy",
        meaning: "in a certain way",
      },
      {
        suffix: "-ly",
        fullWord: "loudly",
        rootWord: "loud",
        meaning: "in a certain way",
      },
      {
        suffix: "-ly",
        fullWord: "simply",
        rootWord: "simple",
        meaning: "in a certain way",
      },
      {
        suffix: "-ly",
        fullWord: "neatly",
        rootWord: "neat",
        meaning: "in a certain way",
      },
      {
        suffix: "-ly",
        fullWord: "definitely",
        rootWord: "definite",
        meaning: "in a certain way",
      },
      {
        suffix: "-ly",
        fullWord: "absolutely",
        rootWord: "absolute",
        meaning: "in a certain way",
      },
      {
        suffix: "-ly",
        fullWord: "probably",
        rootWord: "probable",
        meaning: "in a certain way",
      },
      {
        suffix: "-ible",
        fullWord: "terrible",
        rootWord: "terr",
        meaning: "capable of",
      },
      {
        suffix: "-ible",
        fullWord: "possible",
        rootWord: "poss",
        meaning: "capable of",
      },
      {
        suffix: "-ible",
        fullWord: "impossible",
        rootWord: "possible",
        meaning: "capable of",
      },
      {
        suffix: "-ible",
        fullWord: "flexible",
        rootWord: "flex",
        meaning: "capable of",
      },
      {
        suffix: "-ible",
        fullWord: "visible",
        rootWord: "vis",
        meaning: "capable of",
      },
      {
        suffix: "-ible",
        fullWord: "responsible",
        rootWord: "respons",
        meaning: "capable of",
      },
      {
        suffix: "-ible",
        fullWord: "horrible",
        rootWord: "horr",
        meaning: "capable of",
      },
      {
        suffix: "-ible",
        fullWord: "credible",
        rootWord: "cred",
        meaning: "capable of",
      },
      {
        suffix: "-ible",
        fullWord: "incredible",
        rootWord: "credible",
        meaning: "capable of",
      },
      {
        suffix: "-ible",
        fullWord: "reversible",
        rootWord: "reverse",
        meaning: "capable of",
      },
    ],
  },
];

const styles = `
  .vocabulary-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    padding: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 40px;
  }

  .header h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 16px;
  }

  .header p {
    font-size: 1.125rem;
    color: #4b5563;
    max-width: 768px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .stat-card {
    background: white;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .stat-label {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 4px;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .controls-panel {
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    padding: 24px;
    margin-bottom: 32px;
  }

  .controls-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (min-width: 768px) {
    .controls-content {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  .search-container {
    flex: 1;
    width: 100%;
    position: relative;
  }

  .search-input {
    width: 100%;
    padding: 12px;
    padding-left: 40px;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    font-size: 1rem;
    transition: all 0.2s;
  }

  .search-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  .search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: #9ca3af;
  }

  .filters-container {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .filter-select {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    background: white;
    font-size: 1rem;
    min-width: 200px;
    cursor: pointer;
  }

  .filter-select:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  .sort-button {
    padding: 12px 16px;
    border-radius: 8px;
    background: #f3f4f6;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .sort-button:hover {
    background: #e5e7eb;
  }

  .words-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (min-width: 768px) {
    .words-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .words-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .words-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .word-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: box-shadow 0.3s;
  }

  .word-card:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .word-card-header {
    padding: 20px;
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  }

  .word-card-header.suffix {
    background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
  }

  .word-card-tags {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
  }

  .category-badge {
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .prefix-badge {
    background: #bbf7d0;
    color: #166534;
  }

  .suffix-badge {
    background: #e9d5ff;
    color: #6b21a8;
  }

  .affix-label {
    font-size: 1.125rem;
    font-weight: 700;
    color: #374151;
  }

  .word-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 8px;
    transition: color 0.2s;
  }

  .word-card:hover .word-title {
    color: #2563eb;
  }

  .word-details {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .detail-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .detail-label {
    font-size: .975rem;
    font-weight: 500;
    color: #6b7280;
  }

  .detail-value {
    color: #374151;
    font-weight: 600;
    font-size: 1.5rem;
  }

  .word-card-footer {
    padding: 16px;
    border-top: 1px solid #f3f4f6;
  }

  .footer-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    color: #6b7280;
  }

  .footer-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .letter-count {
    background: #f3f4f6;
    padding: 2px 8px;
    border-radius: 4px;
  }

  .empty-state {
    text-align: center;
    padding: 64px 0;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .empty-icon {
    width: 64px;
    height: 64px;
    color: #9ca3af;
    margin: 0 auto 16px;
  }

  .empty-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #4b5563;
    margin-bottom: 8px;
  }

  .empty-message {
    color: #6b7280;
  }

  .info-section {
    margin-top: 48px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    padding: 32px;
  }

  .info-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 16px;
  }

  .info-grid {
    display: grid;
    gap: 32px;
  }

  @media (min-width: 768px) {
    .info-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .info-column h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .prefix-title {
    color: #166534;
  }

  .suffix-title {
    color: #6b21a8;
  }

  .info-column p {
    color: #4b5563;
    margin-bottom: 12px;
    line-height: 1.6;
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .info-list li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .prefix-example {
    font-weight: 700;
    color: #166534;
  }

  .suffix-example {
    font-weight: 700;
    color: #6b21a8;
  }

  .footer {
    margin-top: 48px;
    text-align: center;
    color: #6b7280;
    font-size: 0.875rem;
  }

  optgroup {
    font-weight: 600;
    color: #4b5563;
  }

  optgroup option {
    font-weight: normal;
    color: #1f2937;
  }.complete-affix-meanings {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 32px;
  margin-bottom: 32px;
}

.affix-meanings-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 32px;
  text-align: center;
}

.affix-meanings-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

@media (min-width: 1024px) {
  .affix-meanings-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 3px solid;
}

.prefix-title {
  color: #166534;
  border-bottom-color: #bbf7d0;
}

.suffix-title {
  color: #6b21a8;
  border-bottom-color: #e9d5ff;
}

.affix-meanings-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.affix-meaning-item {
  background: #f9fafb;
  border-radius: 8px;
  padding: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #e5e7eb;
}

.affix-meaning-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.affix-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e7eb;
}

.affix-label {
  font-size: 1.25rem;
  font-weight: 700;
}

.prefix-meanings-section .affix-label {
  color: #166534;
}

.suffix-meanings-section .affix-label {
  color: #6b21a8;
}

.affix-count {
  font-size: 0.875rem;
  color: #6b7280;
  background: #e5e7eb;
  padding: 4px 8px;
  border-radius: 12px;
}

.meanings-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.meaning-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.meaning-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-top: 8px;
  flex-shrink: 0;
}

.prefix-meanings-section .meaning-dot {
  background: #16a34a;
}

.suffix-meanings-section .meaning-dot {
  background: #7c3aed;
}

.meaning-text {
  color: #374151;
  font-size: 0.9375rem;
  line-height: 1.4;
}
`;

export default function VocabularyPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const allPrefixes = useMemo(() => {
    const prefixes = vocabularyWords[0].words.map((word) => word.prefix);
    return [...new Set(prefixes)].filter(Boolean);
  }, []);

  const allSuffixes = useMemo(() => {
    const suffixes = vocabularyWords[1].words.map((word) => word.suffix);
    return [...new Set(suffixes)].filter(Boolean);
  }, []);

  const filteredWords = useMemo(() => {
    let filtered = [];

    if (selectedCategory === "all") {
      filtered = vocabularyWords.flatMap((cat) => cat.words);
    } else if (selectedCategory === "prefix") {
      filtered = vocabularyWords[0].words;
    } else if (selectedCategory === "suffix") {
      filtered = vocabularyWords[1].words;
    } else {
      filtered = vocabularyWords.flatMap((cat) =>
        cat.words.filter(
          (word) =>
            word.prefix === selectedCategory || word.suffix === selectedCategory
        )
      );
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (word) =>
          word.fullWord.toLowerCase().includes(term) ||
          word.rootWord.toLowerCase().includes(term) ||
          word.meaning.toLowerCase().includes(term) ||
          (word.prefix && word.prefix.toLowerCase().includes(term)) ||
          (word.suffix && word.suffix.toLowerCase().includes(term))
      );
    }

    filtered.sort((a, b) => {
      const compare = a.fullWord.localeCompare(b.fullWord);
      return sortOrder === "asc" ? compare : -compare;
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortOrder]);

  const getWordCategory = (word) => {
    if (word.prefix) return "Prefix";
    if (word.suffix) return "Suffix";
    return "Unknown";
  };

  const getAffixLabel = (word) => {
    if (word.prefix) return word.prefix;
    if (word.suffix) return word.suffix;
    return "";
  };

  const stats = useMemo(
    () => ({
      totalWords: filteredWords.length,
      prefixWords: filteredWords.filter((w) => w.prefix).length,
      suffixWords: filteredWords.filter((w) => w.suffix).length,
      uniquePrefixes: allPrefixes.length,
      uniqueSuffixes: allSuffixes.length,
    }),
    [filteredWords]
  );

  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <div className="vocabulary-page">
        <div className="container">
          {/* Header */}
          <header className="header">
            <h1>Vocabulary Builder</h1>
            <p>
              Explore prefixes and suffixes to understand how English words are
              formed. Click on any word to see its breakdown.
            </p>
          </header>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <p className="stat-label">Total Words</p>
              <p className="stat-value" style={{ color: "#2563eb" }}>
                {stats.totalWords}
              </p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Prefix Words</p>
              <p className="stat-value" style={{ color: "#16a34a" }}>
                {stats.prefixWords}
              </p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Suffix Words</p>
              <p className="stat-value" style={{ color: "#7c3aed" }}>
                {stats.suffixWords}
              </p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Unique Affixes</p>
              <p className="stat-value" style={{ color: "#ea580c" }}>
                {stats.uniquePrefixes + stats.uniqueSuffixes}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="controls-panel">
            <div className="controls-content">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search words, roots, or meanings..."
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  className="search-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <div className="filters-container">
                <select
                  className="filter-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Words</option>
                  <option value="prefix">All Prefixes</option>
                  <option value="suffix">All Suffixes</option>
                  <optgroup label="Prefixes">
                    {allPrefixes.map((prefix) => (
                      <option key={prefix} value={prefix}>
                        {prefix}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Suffixes">
                    {allSuffixes.map((suffix) => (
                      <option key={suffix} value={suffix}>
                        {suffix}
                      </option>
                    ))}
                  </optgroup>
                </select>

                <button
                  className="sort-button"
                  onClick={() =>
                    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                  }
                >
                  {sortOrder === "asc" ? "A-Z ↓" : "Z-A ↑"}
                </button>
              </div>
            </div>
          </div>
          {/* Affix Meanings Summary */}
          {/* Complete Affix Meanings */}
          <div className="complete-affix-meanings">
            <h3 className="affix-meanings-title">
              Complete Prefix & Suffix Meanings
            </h3>

            <div className="affix-meanings-grid">
              {/* Prefix Meanings */}
              <div className="prefix-meanings-section">
                <h4 className="section-title prefix-title">
                  Prefix Meanings ({allPrefixes.length} total)
                </h4>
                <div className="affix-meanings-list">
                  {allPrefixes.map((prefix) => {
                    // Get all unique meanings for this prefix
                    const prefixWords = vocabularyWords[0].words.filter(
                      (w) => w.prefix === prefix
                    );
                    const meanings = [
                      ...new Set(prefixWords.map((w) => w.meaning)),
                    ];

                    return (
                      <div key={prefix} className="affix-meaning-item">
                        <div className="affix-header">
                          <span className="affix-label">{prefix}</span>
                          <span className="affix-count">
                            {prefixWords.length} words
                          </span>
                        </div>
                        <div className="meanings-list">
                          {meanings.map((meaning, idx) => (
                            <div key={idx} className="meaning-item">
                              <span className="meaning-dot"></span>
                              <span className="meaning-text">{meaning}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Suffix Meanings */}
              <div className="suffix-meanings-section">
                <h4 className="section-title suffix-title">
                  Suffix Meanings ({allSuffixes.length} total)
                </h4>
                <div className="affix-meanings-list">
                  {allSuffixes.map((suffix) => {
                    // Get all unique meanings for this suffix
                    const suffixWords = vocabularyWords[1].words.filter(
                      (w) => w.suffix === suffix
                    );
                    const meanings = [
                      ...new Set(suffixWords.map((w) => w.meaning)),
                    ];

                    return (
                      <div key={suffix} className="affix-meaning-item">
                        <div className="affix-header">
                          <span className="affix-label">{suffix}</span>
                          <span className="affix-count">
                            {suffixWords.length} words
                          </span>
                        </div>
                        <div className="meanings-list">
                          {meanings.map((meaning, idx) => (
                            <div key={idx} className="meaning-item">
                              <span className="meaning-dot"></span>
                              <span className="meaning-text">{meaning}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* Word Grid */}
          {filteredWords.length > 0 ? (
            <div className="words-grid">
              {filteredWords.map((word, index) => (
                <div key={`${word.fullWord}-${index}`} className="word-card">
                  <div
                    className={`word-card-header ${
                      word.suffix ? "suffix" : ""
                    }`}
                  >
                    <div className="word-card-tags">
                      <span
                        className={`category-badge ${
                          word.prefix ? "prefix-badge" : "suffix-badge"
                        }`}
                      >
                        {getWordCategory(word)}
                      </span>
                      <span className="affix-label">{getAffixLabel(word)}</span>
                    </div>

                    <h3 className="word-title">{word.fullWord}</h3>

                    <div className="word-details">
                      <div className="detail-row">
                        <span className="detail-label">Root:</span>
                        <span className="detail-value">{word.rootWord}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Meaning:</span>
                        <span className="detail-value">{word.meaning}</span>
                      </div>
                    </div>
                  </div>

                  <div className="word-card-footer">
                    <div className="footer-info">
                      <span className="footer-item">
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {word.prefix ? "Prefix added" : "Suffix added"}
                      </span>
                      <span className="letter-count">
                        {word.fullWord.length} letters
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <svg
                className="empty-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="empty-title">No words found</h3>
              <p className="empty-message">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Info Section */}
          <div className="info-section">
            <h2 className="info-title">Understanding Word Parts</h2>
            <div className="info-grid">
              <div className="info-column">
                <h3 className="prefix-title">Prefixes</h3>
                <p>
                  Prefixes are added to the beginning of root words to modify
                  their meaning. For example, "ex-" means "out", so "extend"
                  means to stretch out.
                </p>
                <ul className="info-list">
                  {allPrefixes.slice(0, 5).map((prefix) => (
                    <li key={prefix}>
                      <span className="prefix-example">{prefix}</span>
                      <span>- added to beginning of words</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="info-column">
                <h3 className="suffix-title">Suffixes</h3>
                <p>
                  Suffixes are added to the end of root words to change their
                  grammatical function or meaning. For example, "-able" means
                  "capable of".
                </p>
                <ul className="info-list">
                  {allSuffixes.slice(0, 5).map((suffix) => (
                    <li key={suffix}>
                      <span className="suffix-example">{suffix}</span>
                      <span>- added to end of words</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="footer">
            <p>
              Vocabulary Builder •{" "}
              {vocabularyWords.reduce((acc, cat) => acc + cat.words.length, 0)}{" "}
              total words • {allPrefixes.length} prefixes • {allSuffixes.length}{" "}
              suffixes
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
