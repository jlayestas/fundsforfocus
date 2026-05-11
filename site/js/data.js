/* data.js — site configuration
 * ─────────────────────────────────────────────────────────────────
 * CONTACT EMAIL — change this one line to update your email everywhere
 */
const CONTACT_EMAIL = "info@fundsforfocus.com";

/* ─────────────────────────────────────────────────────────────────
 * GOOGLE SHEET (project listings)
 *   1. Create a Sheet with columns: id, title, category, payout, time, format,
 *      location, spots, total, eligibility, deadline, status, isNew, isHot, formUrl
 *   2. File → Share → Publish to web → Sheet1 → CSV → Publish
 *   3. Paste the resulting URL below
 */
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSBeXfPALSmBmcKS9LMwOVHt4zk41K65aJ0XC2YAiVOdC9_rV59x7oLOOtKc1hAuzKuz3ywGxdq7Czf/pub?gid=0&single=true&output=csv";

window.FF_EMAIL = CONTACT_EMAIL;

const FF_PROJECTS_FALLBACK = [
  {
    id: "earn-100", title: "Quick Online Survey: Streaming Habits",
    category: "Online Survey", payout: 100, time: 25, format: "Online",
    location: "Nationwide", spots: 12, total: 50,
    eligibility: "Adults 18-54, watch streaming weekly", deadline: "May 24",
    status: "live", isNew: true,
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeeBeYViBlOtwIC_qeiQta34x8oMjL7bVx11ocBPbEJ4HIXvg/viewform"
  },
  {
    id: "food-life", title: "Food & Lifestyle In-Home Diary Study",
    category: "In-Home", payout: 250, time: 90, format: "In-Person",
    location: "Chicago, IL", spots: 4, total: 12,
    eligibility: "Households with kids 6-12", deadline: "May 28",
    status: "live",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScz7pg6GMA6t4f6MZNEfxAnw_d2AF69Vgm7olF3V8dFXHpwyQ/viewform"
  },
  {
    id: "tech-ux", title: "New Mobile App Usability Test",
    category: "Product Trial", payout: 175, time: 60, format: "Online (Zoom)",
    location: "Nationwide", spots: 7, total: 20,
    eligibility: "iPhone users, ages 25-45", deadline: "June 02",
    status: "live", formUrl: ""
  },
  {
    id: "ethno-coffee", title: "Morning Coffee Ritual — Ethnography",
    category: "Ethnography", payout: 300, time: 120, format: "In-Home",
    location: "Austin, TX", spots: 2, total: 8,
    eligibility: "Daily coffee drinkers, brew at home", deadline: "May 31",
    status: "live", isHot: true, formUrl: ""
  },
  {
    id: "taste-snacks", title: "Snack Bar Taste Testing",
    category: "Taste Test", payout: 75, time: 30, format: "Central Location",
    location: "Miami, FL", spots: 18, total: 30,
    eligibility: "Ages 18+, no nut allergies", deadline: "May 22",
    status: "live", formUrl: ""
  },
  {
    id: "blog-fitness", title: "8-Week Fitness Journal Blog Study",
    category: "Online Journal", payout: 400, time: 480, format: "Online",
    location: "Nationwide", spots: 5, total: 15,
    eligibility: "Active fitness routine 3x/week", deadline: "June 10",
    status: "live", formUrl: ""
  },
];

const FF_REVIEWS_FALLBACK = [
  { name: "Marcus T.", role: "Participant · Atlanta, GA", quote: "I've done four studies this year and the payments come quickly. The team is responsive when you have questions, and the screening process feels fair.", payout: "$725 earned", projects: 4 },
  { name: "Sandra K.", role: "Brand Manager, CPG client", quote: "We had three days to recruit a tough demographic. Funds for Focus pulled it off and our moderator said the participants were the best she'd ever screened.", payout: "12 studies completed" },
  { name: "Jenna R.", role: "Participant · Dallas, TX", quote: "Refreshing to find a recruiter that actually pays what they promise. I've been a participant for two years now.", payout: "$1,150 earned", projects: 7 },
  { name: "David O.", role: "Insights Director, Tech client", quote: "Elizabeth's team gets the brief on the first call. We've used them for ethnographies, online IDIs, and a tricky B2B panel.", payout: "Long-term partner" },
];

function parseCSV(text) {
  const lines = text.trim().split("\n");
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g, ""));
  return lines.slice(1).map(line => {
    // Handle quoted fields containing commas
    const fields = [];
    let cur = "", inQuote = false;
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '"') { inQuote = !inQuote; continue; }
      if (line[i] === "," && !inQuote) { fields.push(cur); cur = ""; continue; }
      cur += line[i];
    }
    fields.push(cur);
    const obj = {};
    headers.forEach((h, i) => {
      const v = (fields[i] || "").trim();
      // Coerce numeric and boolean fields
      if (["payout", "time", "spots", "total"].includes(h)) obj[h] = Number(v) || 0;
      else if (["isNew", "isHot"].includes(h)) obj[h] = v.toUpperCase() === "TRUE";
      else obj[h] = v;
    });
    return obj;
  }).filter(p => p.status === "live" || p.status === "draft");
}

async function fetchSheet(retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(SHEET_CSV_URL + "&t=" + Date.now());
      if (!res.ok) throw new Error("HTTP " + res.status);
      const text = await res.text();
      const parsed = parseCSV(text);
      if (parsed.length) return parsed;
    } catch (e) {
      if (attempt < retries) await new Promise(r => setTimeout(r, attempt * 800));
    }
  }
  return null;
}

window.__dataReady = (async () => {
  if (!SHEET_CSV_URL) {
    window.FF_PROJECTS = FF_PROJECTS_FALLBACK;
    window.FF_REVIEWS = FF_REVIEWS_FALLBACK;
    return;
  }
  const parsed = await fetchSheet();
  window.FF_PROJECTS = parsed || FF_PROJECTS_FALLBACK;
  window.FF_REVIEWS = FF_REVIEWS_FALLBACK;
})();
