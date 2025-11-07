// make_datajs.js
// Run: node make_datajs.js
const fs = require("fs");
const path = require("path");

const INPUT = path.join(process.cwd(), "english.txt"); // put english.txt in project root
const OUT_JSON = path.join(process.cwd(), "public", "data.json");
const OUT_JS = path.join(process.cwd(), "public", "data.js");

if (!fs.existsSync(INPUT)) {
  console.error(
    "english.txt not found in project root. Put english.txt there and run: node make_datajs.js"
  );
  process.exit(1);
}

const text = fs.readFileSync(INPUT, "utf8");

// basic parsing (same regex we've used)
const clean = text
  .replace(/\(\d{1,2}:\d{2}\)/g, " ")
  .replace(/\s+/g, " ")
  .trim();
const re = /([^?]{2,}?\?)\s*([^?]+?)(?=(?:[^?]{2,}?\?)|$)/gs;
let m;
const pairs = [];
while ((m = re.exec(clean)) !== null) {
  const q = m[1].trim();
  let a = (m[2] || "").trim();
  a = a.replace(/\s*([A-Z][^?!.]*\?)$/, "").trim();
  if (q && a) pairs.push({ q, a });
}
if (pairs.length === 0) {
  // fallback: pair lines
  const lines = text
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
  for (let i = 0; i < lines.length - 1; i += 2)
    pairs.push({ q: lines[i], a: lines[i + 1] });
}

fs.mkdirSync(path.join(process.cwd(), "public"), { recursive: true });
fs.writeFileSync(OUT_JSON, JSON.stringify(pairs, null, 2), "utf8");
fs.writeFileSync(
  OUT_JS,
  "window.QA_DATA = " + JSON.stringify(pairs, null, 2) + ";\n",
  "utf8"
);

console.log(`Wrote ${OUT_JSON} and ${OUT_JS} — ${pairs.length} pairs`);
