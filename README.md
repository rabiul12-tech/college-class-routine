# ক্লাস রুটিন ম্যানেজমেন্ট (Next.js + Netlify)

## Features
- আজকের রুটিন (ডে-বেইজড অটো সিলেক্ট)
- প্রতি পিরিয়ডে উপস্থিতি মার্ক (On Time / Delayed / Absent)
- ডেটা লোকালস্টোরেজে সেভ হয়, রিফ্রেশ করলেও থাকে
- সম্পূর্ণ রুটিন এক্সপ্লোরার (দিন / বিভাগ / শ্রেণী ফিল্টার)
- রিপোর্টস:
  - সময়ভিত্তিক সারাংশ চার্ট (Chart.js)
  - বিষয়ভিত্তিক রিপোর্ট (On Time / Delayed / Absent কাউন্ট + টেবিল)

## Dev run
npm install
npm run dev

Then open http://localhost:3000

## Deploy to Netlify
1. Push this repo to GitHub.
2. In Netlify UI:
   - New site from Git
   - Pick the repo
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Deploy.

## Notes
- এখনো কোনো ব্যাকএন্ড নাই। ডেটা ব্রাউজারভিত্তিক।
- প্রোডাকশনে মাল্টি-ডিভাইস সিঙ্ক চাইলে API + DB লাগবে।
