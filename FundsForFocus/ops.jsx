/* ops.jsx — owner workflow without a backend
   Pattern: Google Sheet → File → Publish to web → site fetches CSV.
   Owner edits in Sheets like any spreadsheet. */

function FFOpsSheet() {
  const cols = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const headers = ["id", "title", "category", "payout", "format", "location", "spots", "status"];
  const rows = [
    ["earn-100",     "Streaming Habits Survey",     "Online Survey", "100", "Online",          "Nationwide", "12 / 50",  "live"],
    ["food-life",    "Food & Lifestyle Diary",      "In-Home",       "250", "In-Person",       "Chicago",    "4 / 12",   "live"],
    ["tech-ux",      "Mobile App Usability",        "Product Trial", "175", "Online (Zoom)",   "Nationwide", "7 / 20",   "live"],
    ["ethno-coffee", "Coffee Ritual Ethnography",   "Ethnography",   "300", "In-Home",         "Austin, TX", "2 / 8",    "live"],
    ["taste-snacks", "Snack Bar Taste Test",        "Taste Test",    "75",  "Central Loc.",    "Miami, FL",  "18 / 30",  "live"],
    ["blog-fitness", "8-Week Fitness Journal",      "Online Journal","400", "Online",          "Nationwide", "5 / 15",   "draft"],
    ["auto-survey",  "Vehicle Purchase Intent",     "Online Survey", "65",  "Online",          "Nationwide", "Closed",   "expired"],
    ["pet-food",     "Pet Food Focus Group",        "Focus Group",   "150", "Central Loc.",    "Miami, FL",  "Closed",   "expired"],
  ];

  return (
    <div className="ff-screen" style={{ background: "#f8f9fa", fontFamily: "var(--f-sans)" }}>
      {/* Sheet chrome */}
      <div style={{ background: "#fff", borderBottom: "1px solid #dadce0", padding: "10px 16px", display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, background: "#0f9d58", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 16 }}>⊞</div>
          <div>
            <div style={{ fontSize: 18, color: "#202124" }}>FundsForFocus — Projects</div>
            <div style={{ fontSize: 11, color: "#5f6368", marginTop: 2 }}>File · Edit · View · Insert · Format · Data · Tools · Extensions · Help</div>
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 12, color: "#5f6368" }}>
          <span style={{ padding: "4px 8px", background: "#e6f4ea", color: "#0f9d58", borderRadius: 4, fontFamily: "var(--f-mono)" }}>● Auto-saved</span>
          <span style={{ padding: "6px 14px", background: "#1a73e8", color: "#fff", borderRadius: 4, fontWeight: 500 }}>Share</span>
        </div>
      </div>

      {/* Toolbar */}
      <div style={{ background: "#f1f3f4", borderBottom: "1px solid #dadce0", padding: "8px 16px", fontSize: 12, color: "#5f6368", display: "flex", gap: 18 }}>
        <span>↶ ↷</span><span>$ %</span><span>B I U</span><span>Format ▾</span><span>Insert ▾</span>
        <span style={{ flex: 1 }}></span>
        <span style={{ fontFamily: "var(--f-mono)", fontSize: 11 }}>Last edit: Today, 2:14pm by Elizabeth</span>
      </div>

      {/* Sheet grid */}
      <div style={{ padding: 24, fontFamily: "var(--f-mono)", fontSize: 13 }}>
        <div style={{ display: "grid", gridTemplateColumns: "40px repeat(8, 1fr)", border: "1px solid #c7c7c7", background: "#fff" }}>
          {/* col header */}
          <div style={{ background: "#f1f3f4", borderRight: "1px solid #dadce0", borderBottom: "1px solid #dadce0", padding: "8px 6px", textAlign: "center", color: "#5f6368", fontSize: 11 }}></div>
          {cols.map(c => (
            <div key={c} style={{ background: "#f1f3f4", borderRight: "1px solid #dadce0", borderBottom: "1px solid #dadce0", padding: "8px 10px", textAlign: "center", color: "#5f6368", fontSize: 11 }}>{c}</div>
          ))}
          {/* header row */}
          <div style={{ background: "#f1f3f4", borderRight: "1px solid #dadce0", borderBottom: "1px solid #dadce0", padding: "8px 6px", textAlign: "center", color: "#5f6368", fontSize: 11 }}>1</div>
          {headers.map(h => (
            <div key={h} style={{ borderRight: "1px solid #dadce0", borderBottom: "1px solid #dadce0", padding: "10px 12px", fontWeight: 600, color: "#202124", background: "#e8f0fe" }}>{h}</div>
          ))}
          {/* rows */}
          {rows.map((row, i) => (
            <React.Fragment key={i}>
              <div style={{ background: "#f1f3f4", borderRight: "1px solid #dadce0", borderBottom: "1px solid #dadce0", padding: "10px 6px", textAlign: "center", color: "#5f6368", fontSize: 11 }}>{i + 2}</div>
              {row.map((cell, j) => {
                const isStatus = j === 7;
                let bg = "#fff", color = "#202124";
                if (isStatus) {
                  if (cell === "live")    { bg = "#e6f4ea"; color = "#137333"; }
                  if (cell === "draft")   { bg = "#fef7e0"; color = "#b86e00"; }
                  if (cell === "expired") { bg = "#fce8e6"; color = "#c5221f"; }
                }
                return (
                  <div key={j} style={{ borderRight: "1px solid #dadce0", borderBottom: "1px solid #dadce0", padding: "10px 12px", background: bg, color, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {cell}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>

        <div style={{ marginTop: 18, fontSize: 12, color: "#5f6368", fontFamily: "var(--f-sans)", lineHeight: 1.6, maxWidth: 720 }}>
          <strong style={{ color: "#202124" }}>That's the entire admin.</strong> Elizabeth edits this sheet in Google Sheets like any other spreadsheet — adding rows, changing the <span style={{ fontFamily: "var(--f-mono)" }}>status</span> column to <span style={{ fontFamily: "var(--f-mono)", color: "#c5221f" }}>expired</span> when a project closes, or <span style={{ fontFamily: "var(--f-mono)", color: "#b86e00" }}>draft</span> while she's still drafting. She publishes it once via <em>File → Share → Publish to web → CSV</em>; the site fetches that URL on every page load. No server, no database, no maintenance.
        </div>
      </div>
    </div>
  );
}

function FFOpsHowTo() {
  return (
    <div className="ff-screen ff-screen-scroll">
      <FFNav active="home" />

      <section style={{ padding: "60px 48px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div className="ff-eyebrow" style={{ marginBottom: 16 }}>For the owner · No backend required</div>
        <h1 className="ff-display" style={{ fontSize: 96, lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: 24 }}>
          How project<br />updates work.
        </h1>
        <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 700, lineHeight: 1.5 }}>
          The site has no admin login and no database. The list of open studies lives in a Google Sheet that you already know how to edit. The site reads that sheet every time it loads.
        </p>
      </section>

      <section style={{ padding: "30px 48px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid var(--line)" }}>
          {[
            {
              n: "01",
              h: "Edit the sheet",
              b: "Open Google Sheets → ‘FundsForFocus Projects’. Add a row for a new study, fill in title, payout, format, deadline, and the Google Form link. To take a project down, change its status cell to ‘expired’.",
              tag: "Skill: Google Sheets",
            },
            {
              n: "02",
              h: "Save (auto)",
              b: "Sheets auto-saves. The site already has the publish-to-web URL baked in, so there's nothing to upload, no FTP, no deploy. Your edit is the deploy.",
              tag: "Time: instant",
            },
            {
              n: "03",
              h: "Site updates within minutes",
              b: "Next time anyone loads fundsforfocus.com, the page fetches the latest sheet. New projects appear, expired ones drop off, the homepage counter updates. Cached for ~5 minutes for speed.",
              tag: "No code · No CMS",
            },
          ].map((s, i) => (
            <div key={s.n} style={{ padding: 36, borderRight: i < 2 ? "1px solid var(--line)" : 0, background: "var(--card)" }}>
              <div className="ff-display" style={{ fontSize: 80, color: "var(--earn-deep)", lineHeight: 1, marginBottom: 24 }}>{s.n}</div>
              <h3 className="ff-display" style={{ fontSize: 32, lineHeight: 1.05, marginBottom: 14 }}>{s.h}</h3>
              <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55, marginBottom: 24 }}>{s.b}</p>
              <span className="ff-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 48px 80px", maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <div className="ff-card" style={{ padding: 36 }}>
          <h3 className="ff-eyebrow" style={{ marginBottom: 16, color: "var(--earn-deep)" }}>What stays the same</h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "Google Forms still handles screener submissions — exactly as today.",
              "Form responses still land in your Gmail / Google Sheets responses tab.",
              "RFQ form on the client side emails you directly. No inbox to learn.",
              "Domain, email, and contact phone unchanged.",
            ].map(t => (
              <li key={t} style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.5, display: "flex", gap: 12 }}>
                <span className="ff-mono" style={{ color: "var(--earn)", flexShrink: 0 }}>✓</span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div className="ff-card" style={{ padding: 36 }}>
          <h3 className="ff-eyebrow" style={{ marginBottom: 16, color: "var(--hire-deep)" }}>Trade-offs to know about</h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "No applicant tracking inside the site — you'll keep using Forms responses for that.",
              "5-minute cache: a new project may take a few minutes to show up after editing.",
              "If the sheet's URL changes (rename / move), the site needs a one-line update.",
              "Anyone with edit access to the sheet can change live content — keep the share list small.",
            ].map(t => (
              <li key={t} style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.5, display: "flex", gap: 12 }}>
                <span className="ff-mono" style={{ color: "var(--hire)", flexShrink: 0 }}>!</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FFFooter />
    </div>
  );
}

Object.assign(window, { FFOpsSheet, FFOpsHowTo });
