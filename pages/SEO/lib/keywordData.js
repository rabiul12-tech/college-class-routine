export const keywordData = {
  primaryKeyword: "what is the percent calculator",
  metrics: {
    globalVolume: 410,
    topCountries: [
      { country: "Australia", volume: 210 },
      { country: "United Kingdom", volume: 110 },
      { country: "United States", volume: 70 },
    ],
    difficulty: 32,
    difficultyLabel: "Possible",
    cpc: 0.01,
    intent: "Informational",
  },
  topQuestions: [
    { question: "what is the percent discount calculator", volume: 30 },
    { question: "what is the formula for calculating percent...", volume: 30 },
    {
      question: "what is the formula for calculating percent yield",
      volume: 30,
    },
  ],
  relatedKeywords: [
    { keyword: "percentage calculator", volume: 550000 },
    { keyword: "percent change calculator", volume: 90500 },
    { keyword: "percentage increase calculator", volume: 90500 },
  ],
  serpResults: [
    { site: "calculator.net", metrics: "DR 69, 370 referring domains" },
    { site: "percentagecalculator.net", metrics: "DR 68" },
    { site: "calculatorsoup.com", metrics: "" },
    { site: "omnicalculator.com", metrics: "" },
    { site: "percentagecalculator.co", metrics: "" },
  ],
  contentStructure: `# Percentage Calculator

[Big, beautiful interactive calculator widget right at the top — no scrolling needed]

## What Is a Percentage Calculator?
(Simple 2–3 sentence explanation)

## How to Calculate Percentages (All Formulas)
- What is X% of Y? → Formula + example
- What is the percentage increase/decrease? → Formula + example
- Percentage change → Formula + example
- Reverse percentage (original price from discount) → Formula + example
- Percent yield, markup, etc.

[Include small mini-calculators under each section or one universal calculator that handles all]

## Common Percentage Calculations
Table or accordion with 10–15 real-life examples:
- Sale discount (original $100 → 20% off = ?)
- Tip calculator
- Grade percentage
- Salary increase
- etc.

## Downloadable Cheat Sheet (optional lead magnet)`,
  timeline: [
    { period: "Month 1–2", description: "Index and rank page 20–50" },
    { period: "Month 3–4", description: "Top 10–15" },
    {
      period: "Month 5–8",
      description:
        "Top 5 (if tool is excellent and you get 20–30 good backlinks)",
    },
  ],
  bonusKeywords: [
    "percent increase calculator",
    "percent decrease calculator",
    "discount calculator",
    "reverse percentage calculator",
  ],
};

export const seoStrategy = {
  pageType: "tool page",
  urlExample: "yoursite.com/percentage-calculator",
  titleExample: "Percentage Calculator - Calculate Percentages Easily",
  technicalSeo: [
    "Page speed >90 (critical — tools must load instantly)",
    "Fully mobile-responsive calculator",
    "Schema markup: Use Calculator or FAQ schema",
    "Internal linking from high-authority pages on your site",
  ],
  calculatorOptions: [
    {
      type: "Free",
      description:
        "Use Calculator.net or Omnicalculator embed (they allow it, but you give them credit and backlink)",
    },
    {
      type: "Better",
      description:
        "Build your own simple JS calculator (there are thousands of open-source ones on GitHub)",
    },
    {
      type: "Best",
      description:
        "Create a beautiful multi-function percentage calculator (handles % of, increase, decrease, reverse %, etc. in one tool)",
    },
  ],
  onPageSeo: {
    primary: ["Title tag", "H1", "URL", "First 100 words", "Image alt texts"],
    secondary: [
      "percent calculator",
      "calculate percentage",
      "percentage increase calculator",
      "what is X percent of Y",
    ],
  },
  linkBuilding: [
    "Easy wins: Submit to calculator directories",
    "Reach out to math/teach blogs for 'best percentage calculators 2025' roundups",
    "Reddit (r/theydidthemath, r/personalfinance, etc.)",
    "HARO (journalists love simple tools)",
  ],
};
