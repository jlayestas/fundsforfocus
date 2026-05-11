/* public.jsx — public-facing screens */

/* ═══════════════════════════════════════════════════════════════
   HOME — 50/50 audience chooser, then dual lanes
   ═══════════════════════════════════════════════════════════════ */
function FFHome() {
  return (
    <div className="ff-screen ff-screen-scroll">
      <FFNav active="home" />

      {/* Hero — split chooser */}
      <section style={{ padding: "80px 48px 60px", maxWidth: 1440, margin: "0 auto" }}>
        <div className="ff-eyebrow" style={{ marginBottom: 32 }}>Nationwide Recruiting · Market Research · Est. 2018</div>
        <h1 className="ff-display" style={{ fontSize: 132, lineHeight: 1.0, letterSpacing: "-0.025em", maxWidth: 1180 }}>
          Better research<br />
          starts with the <em style={{ fontStyle: "italic", color: "var(--earn-deep)" }}>right</em> people<br />
          in the room.
        </h1>
        <p style={{ fontSize: 20, color: "var(--ink-2)", lineHeight: 1.5, maxWidth: 640, marginTop: 56 }}>
          We connect brands and researchers with vetted, motivated participants — and pay those participants fairly for the time they give.
        </p>
      </section>

      {/* The split chooser */}
      <div className="ff-chooser">
        <div className="ff-chooser-item ff-chooser-item--earn" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 40 }}>
          <div>
            <div className="ff-eyebrow" style={{ color: "var(--earn-deep)", marginBottom: 14 }}>I want to earn money</div>
            <h2 className="ff-display" style={{ fontSize: 54, lineHeight: 1.0, marginBottom: 12 }}>
              Get paid <em style={{ fontStyle: "italic", color: "var(--earn-deep)" }}>$50–$400</em><br />for your honest opinion.
            </h2>
            <p style={{ fontSize: 16, color: "var(--ink-2)", maxWidth: 520, lineHeight: 1.5 }}>
              Browse open studies, take a 2-minute screener, and get scheduled. Most participants finish in under an hour and are paid by check or e-card.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <button className="ff-btn ff-btn--earn ff-btn--lg">Browse open projects <span className="ff-arrow">→</span></button>
              <button className="ff-btn ff-btn--ghost ff-btn--lg">How it works</button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingLeft: 32, borderLeft: "1px solid var(--line)" }}>
            <div className="ff-stat-num" style={{ color: "var(--earn-deep)" }}>$<span>375K</span></div>
            <div className="ff-eyebrow">Paid out in 2025</div>
          </div>
        </div>
        <div className="ff-chooser-item ff-chooser-item--hire" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 40 }}>
          <div>
            <div className="ff-eyebrow" style={{ color: "var(--hire-deep)", marginBottom: 14 }}>I'm a brand or researcher</div>
            <h2 className="ff-display" style={{ fontSize: 54, lineHeight: 1.0, marginBottom: 12 }}>
              Recruit a <em style={{ fontStyle: "italic", color: "var(--hire-deep)" }}>tough panel</em><br />in days, not weeks.
            </h2>
            <p style={{ fontSize: 16, color: "var(--ink-2)", maxWidth: 520, lineHeight: 1.5 }}>
              National database, careful screening, and last-minute turnarounds. We've staffed studies for CPG, tech, healthcare, and B2B clients since 2018.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <button className="ff-btn ff-btn--hire ff-btn--lg">Request a bid <span className="ff-arrow">→</span></button>
              <button className="ff-btn ff-btn--ghost ff-btn--lg">See capabilities</button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingLeft: 32, borderLeft: "1px solid var(--line)" }}>
            <div className="ff-stat-num" style={{ color: "var(--hire-deep)" }}>240<small>+</small></div>
            <div className="ff-eyebrow">Studies recruited</div>
          </div>
        </div>
      </div>

      {/* Open Projects strip */}
      <section style={{ padding: "100px 48px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <FFSectionHead eyebrow="Open right now · Updated daily" title="6 active projects." sub="" />
          <button className="ff-btn ff-btn--ghost">View all <span className="ff-arrow">→</span></button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {FF_PROJECTS.slice(0, 3).map(p => <FFProjectCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* What we recruit for — capability cards (Airo-flavored grid) */}
      <section style={{ padding: "20px 48px 100px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <FFSectionHead eyebrow="Capabilities" title="What we recruit for." sub="Eight years of fielding across nearly every methodology brands and academic teams need." />
          <button className="ff-btn ff-btn--ghost">All capabilities <span className="ff-arrow">→</span></button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
          {[
            { n: "01", h: "Consumer Recruiting", b: "Targeted recruits for focus groups, IDIs, and online qual — screened to brief.", img: "Consumer · Group" },
            { n: "02", h: "Online Journals & Blogs", b: "Multi-day digital diary studies with daily prompts and media uploads.", img: "Mobile · Diary" },
            { n: "03", h: "Ethnographies & IDIs", b: "In-home and shop-along observation, single or multi-visit, in any U.S. metro.", img: "Home · Visit" },
            { n: "04", h: "Product Trials & Tests", b: "We ship product to qualified households, collect structured feedback over 1–8 weeks.", img: "Trial · IHUT" },
            { n: "05", h: "Taste Testing & CLT", b: "Central-location tests in our Miami space or facility partners coast to coast.", img: "Taste · Lab" },
            { n: "06", h: "B2B & Hard-to-Reach", b: "C-suite, clinicians, niche professions — we've fielded all of them.", img: "B2B · Boardroom" },
          ].map(c => (
            <div key={c.n} style={{ background: "var(--card)", padding: 0, display: "flex", flexDirection: "column" }}>
              <FFImg w="100%" h={180} label={c.img} />
              <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                <span className="ff-mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>{c.n}</span>
                <h3 className="ff-display" style={{ fontSize: 30, lineHeight: 1.05 }}>{c.h}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55, flex: 1 }}>{c.b}</p>
                <a style={{ marginTop: 12, fontSize: 13, fontFamily: "var(--f-mono)", color: "var(--ink)", borderBottom: "1px solid var(--ink)", paddingBottom: 4, alignSelf: "flex-start" }}>Learn more →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Geographic Coverage — Airo-inspired US map + city list */}
      <section style={{ background: "var(--ink)", color: "var(--paper)", padding: "100px 48px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "center" }}>
          <div>
            <div className="ff-eyebrow" style={{ color: "oklch(0.78 0.13 155)", marginBottom: 18 }}>Geographic Coverage</div>
            <h2 className="ff-display" style={{ fontSize: 72, lineHeight: 0.98, letterSpacing: "-0.025em", marginBottom: 24 }}>
              Nationwide<br/>fieldwork.<br/><em style={{ fontStyle: "italic", color: "oklch(0.78 0.13 155)" }}>Local</em> precision.
            </h2>
            <p style={{ fontSize: 17, color: "var(--paper-3)", lineHeight: 1.55, marginBottom: 36, maxWidth: 460 }}>
              Headquartered in Miami, with active recruiter networks in 38 metro areas and the ability to spin up new markets in 5–7 days.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "rgba(245,240,228,0.10)", border: "1px solid rgba(245,240,228,0.10)" }}>
              {[
                ["Atlanta","Austin","Boston","Chicago"],
                ["Dallas","Denver","Detroit","Houston"],
                ["Los Angeles","Miami","Minneapolis","NYC"],
                ["Philadelphia","Phoenix","Portland","Seattle"],
              ].flat().map(city => (
                <div key={city} style={{ background: "var(--ink)", padding: "14px 18px", fontSize: 14, fontFamily: "var(--f-mono)", color: "var(--paper-2)", display: "flex", justifyContent: "space-between" }}>
                  <span>{city}</span><span style={{ color: "oklch(0.78 0.13 155)" }}>●</span>
                </div>
              ))}
            </div>
            <p className="ff-mono" style={{ fontSize: 12, color: "var(--ink-4)", marginTop: 20 }}>+ 22 secondary markets · ask about your city</p>
          </div>

          {/* Stylized US dot-map */}
          <div style={{ position: "relative", aspectRatio: "16/10", background: "rgba(245,240,228,0.04)", border: "1px solid rgba(245,240,228,0.08)" }}>
            <svg viewBox="0 0 600 360" style={{ width: "100%", height: "100%" }}>
              {/* dot grid forming rough US silhouette */}
              {Array.from({length: 28}).map((_, row) => Array.from({length: 48}).map((_, col) => {
                const x = 20 + col * 12, y = 30 + row * 11;
                // crude US shape filter
                const cx = (col - 24) / 24, cy = (row - 14) / 14;
                const inUS =
                  (cy > -0.6 && cy < 0.5) &&
                  (cx > -0.95 && cx < 0.95) &&
                  (Math.abs(cx) < 0.7 + cy * 0.2) &&
                  !(cx < -0.7 && cy < -0.2) &&
                  !(cx > 0.7 && cy > 0.3) &&
                  !(cx < -0.5 && cy > 0.4) &&
                  !(cx > 0.6 && cy < -0.3);
                if (!inUS) return null;
                return <circle key={`${row}-${col}`} cx={x} cy={y} r="1.5" fill="rgba(245,240,228,0.20)" />;
              }))}
              {/* highlighted city dots */}
              {[
                { x: 470, y: 240, name: "Miami" },
                { x: 380, y: 200, name: "Atlanta" },
                { x: 260, y: 130, name: "Chicago" },
                { x: 440, y: 110, name: "NYC" },
                { x: 200, y: 230, name: "Austin" },
                { x: 90,  y: 180, name: "LA" },
                { x: 110, y: 100, name: "Seattle" },
                { x: 220, y: 170, name: "Denver" },
                { x: 410, y: 160, name: "DC" },
                { x: 320, y: 240, name: "Houston" },
              ].map(c => (
                <g key={c.name}>
                  <circle cx={c.x} cy={c.y} r="9" fill="oklch(0.78 0.13 155 / 0.20)" />
                  <circle cx={c.x} cy={c.y} r="4" fill="oklch(0.78 0.13 155)" />
                  <text x={c.x + 10} y={c.y + 4} fill="var(--paper-2)" fontSize="10" fontFamily="var(--f-mono)">{c.name}</text>
                </g>
              ))}
            </svg>
            <div style={{ position: "absolute", top: 16, left: 16, fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--paper-3)", letterSpacing: "0.10em" }}>
              ACTIVE RECRUITERS · 38 METROS
            </div>
          </div>
        </div>
      </section>

      {/* Insights / editorial cards (Airo's "market trends" pattern) */}
      <section style={{ padding: "100px 48px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <FFSectionHead eyebrow="From the field" title="Recent insights." sub="Notes from our recruiters and observations from active fielding." />
          <button className="ff-btn ff-btn--ghost">All articles <span className="ff-arrow">→</span></button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 18 }}>
          {/* Feature article */}
          <div className="ff-card" style={{ display: "flex", flexDirection: "column", overflow: "hidden", padding: 0 }}>
            <FFImg w="100%" h={300} label="Hero · Editorial" />
            <div style={{ padding: 36, flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span className="ff-tag ff-tag--earn">Industry note</span>
                <span className="ff-mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>MAY 04, 2026 · 6 MIN</span>
              </div>
              <h3 className="ff-display" style={{ fontSize: 44, lineHeight: 1.0, letterSpacing: "-0.015em" }}>
                Why "panel pros" are quietly poisoning your study results.
              </h3>
              <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>
                A look at how repeat respondents — even well-screened ones — drift toward what they think researchers want to hear, and what we do about it during recruitment.
              </p>
              <a style={{ marginTop: "auto", fontSize: 13, fontFamily: "var(--f-mono)", color: "var(--ink)", borderBottom: "1px solid var(--ink)", paddingBottom: 4, alignSelf: "flex-start" }}>Read article →</a>
            </div>
          </div>
          {[
            { tag: "Methodology", date: "APR 28, 2026 · 4 MIN", h: "Paying participants well isn't generosity — it's data quality.", img: "Insight · Pay" },
            { tag: "Trends", date: "APR 14, 2026 · 5 MIN", h: "What we're hearing in 2026 ethnographies about household budgets.", img: "Insight · Trends" },
          ].map(a => (
            <div key={a.h} className="ff-card" style={{ display: "flex", flexDirection: "column", overflow: "hidden", padding: 0 }}>
              <FFImg w="100%" h={180} label={a.img} />
              <div style={{ padding: 28, flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span className="ff-tag">{a.tag}</span>
                  <span className="ff-mono" style={{ fontSize: 10, color: "var(--ink-3)" }}>{a.date}</span>
                </div>
                <h3 className="ff-display" style={{ fontSize: 26, lineHeight: 1.1 }}>{a.h}</h3>
                <a style={{ marginTop: "auto", fontSize: 12, fontFamily: "var(--f-mono)", color: "var(--ink)", borderBottom: "1px solid var(--ink)", paddingBottom: 4, alignSelf: "flex-start" }}>Read →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "var(--paper-2)", padding: "100px 48px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <FFSectionHead eyebrow="The process" title="Plain and predictable." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, marginTop: 60 }}>
            {[
              { step: "01", h: "Browse or apply", b: "Pick a study you'd like to join, or fill out the general application to be considered for future projects." },
              { step: "02", h: "Quick screener", b: "A 2-minute set of questions confirms you fit the study's demographic quotas." },
              { step: "03", h: "Get scheduled", b: "If you qualify, our team reaches out to confirm time, format, and what to expect." },
              { step: "04", h: "Participate & paid", b: "Show up, share your honest opinion, and we send payment within 7–10 business days." },
            ].map(s => (
              <div key={s.step}>
                <div className="ff-mono" style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 24 }}>STEP {s.step}</div>
                <h3 className="ff-display" style={{ fontSize: 32, marginBottom: 12 }}>{s.h}</h3>
                <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ padding: "120px 48px", maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div className="ff-eyebrow" style={{ marginBottom: 24 }}>From the founder</div>
        <p className="ff-display" style={{ fontSize: 56, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          "I started this company because I'd been on both sides of the table — running studies, and answering screeners. <em style={{ fontStyle: "italic", color: "var(--earn-deep)" }}>Both deserved better.</em>"
        </p>
        <div style={{ marginTop: 40, display: "inline-flex", alignItems: "center", gap: 14 }}>
          <FFImg w={56} h={56} label="EG" style={{ borderRadius: "50%" }} />
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 15, fontWeight: 500 }}>Elizabeth Gonzalez</div>
            <div className="ff-eyebrow">Founder</div>
          </div>
        </div>
      </section>

      <FFFooter />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CURRENT PROJECTS — browse + filter
   ═══════════════════════════════════════════════════════════════ */
function FFProjects() {
  const [fmt, setFmt] = React.useState("All");
  const [sort, setSort] = React.useState("Newest");
  const formats = ["All", "Online", "In-Person", "In-Home", "Phone"];
  const filtered = FF_PROJECTS.filter(p => fmt === "All" || p.format.includes(fmt));

  return (
    <div className="ff-screen ff-screen-scroll">
      <FFNav active="projects" />

      <section style={{ padding: "60px 48px 30px", maxWidth: 1440, margin: "0 auto" }}>
        <div className="ff-eyebrow" style={{ marginBottom: 14 }}>Current projects · 6 open</div>
        <h1 className="ff-display" style={{ fontSize: 96, lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: 18 }}>
          Get paid for your<br />honest <em style={{ fontStyle: "italic", color: "var(--earn-deep)" }}>opinion</em>.
        </h1>
        <p style={{ fontSize: 18, color: "var(--ink-2)", maxWidth: 620, lineHeight: 1.5 }}>
          Browse open studies below. Tap any project to take the screener — most are 2 minutes long. Not all applicants will qualify.
        </p>
      </section>

      {/* Filter / sort bar */}
      <section style={{ padding: "24px 48px", maxWidth: 1440, margin: "0 auto", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, position: "sticky", top: 0, background: "var(--paper)", zIndex: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="ff-eyebrow" style={{ marginRight: 6 }}>Format</span>
          {formats.map(f => (
            <button key={f} onClick={() => setFmt(f)}
              className="ff-mono"
              style={{ padding: "7px 12px", border: "1px solid " + (fmt === f ? "var(--ink)" : "var(--line)"), borderRadius: 999, background: fmt === f ? "var(--ink)" : "transparent", color: fmt === f ? "var(--paper)" : "var(--ink-2)", fontSize: 12 }}>
              {f}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span className="ff-eyebrow">{filtered.length} results</span>
          <span style={{ width: 1, height: 18, background: "var(--line)" }} />
          <span className="ff-eyebrow">Sort</span>
          {["Newest", "Highest paid", "Filling fast"].map(s => (
            <button key={s} onClick={() => setSort(s)} style={{ background: "transparent", border: 0, padding: "4px 0", fontSize: 13, color: sort === s ? "var(--ink)" : "var(--ink-3)", borderBottom: "1px solid " + (sort === s ? "var(--ink)" : "transparent") }}>
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* Project grid */}
      <section style={{ padding: "40px 48px 100px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {filtered.map(p => <FFProjectCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* Email signup */}
      <section style={{ padding: "60px 48px", background: "var(--ink)", color: "var(--paper)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <h2 className="ff-display" style={{ fontSize: 56, lineHeight: 1.0 }}>Don't see one that fits?</h2>
            <p style={{ marginTop: 18, fontSize: 17, color: "var(--paper-3)", maxWidth: 460 }}>
              Join our database. We'll email you when a study matches your demographics — no spam, no obligation.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <input className="ff-input" placeholder="you@email.com" style={{ background: "transparent", borderColor: "rgba(245,240,228,0.20)", color: "var(--paper)" }} />
            <button className="ff-btn ff-btn--earn ff-btn--lg" style={{ flexShrink: 0 }}>Get notified <span className="ff-arrow">→</span></button>
          </div>
        </div>
      </section>

      <FFFooter />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROJECT DETAIL — one study + screener pane
   ═══════════════════════════════════════════════════════════════ */
function FFProjectDetail() {
  const p = FF_PROJECTS[3]; // Coffee ethnography
  return (
    <div className="ff-screen ff-screen-scroll">
      <FFNav active="projects" />

      <section style={{ padding: "32px 48px 0", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ fontSize: 13, color: "var(--ink-3)", display: "flex", gap: 8, alignItems: "center" }}>
          <span>Browse projects</span><span>›</span><span style={{ color: "var(--ink)" }}>{p.title}</span>
        </div>
      </section>

      <section style={{ padding: "40px 48px 60px", maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 80 }}>
        {/* Left — details */}
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            <span className="ff-tag ff-tag--earn">{p.category}</span>
            <span className="ff-tag ff-tag--gold">Filling fast</span>
            <span className="ff-tag ff-tag--live">Open</span>
          </div>
          <h1 className="ff-display" style={{ fontSize: 72, lineHeight: 0.98, letterSpacing: "-0.02em", marginBottom: 28 }}>
            {p.title}
          </h1>
          <p style={{ fontSize: 19, color: "var(--ink-2)", lineHeight: 1.55, maxWidth: 600, marginBottom: 40 }}>
            We're observing how households prepare and consume coffee at home. Two in-home visits, one short follow-up call. Honest answers wanted — no "right" answer.
          </p>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid var(--line)", marginBottom: 48, background: "var(--card)" }}>
            {[
              { k: "Payout", v: "$" + p.payout, mono: false },
              { k: "Time", v: "2 hours", mono: true },
              { k: "Format", v: p.format, mono: false },
              { k: "Location", v: p.location, mono: false },
            ].map((s, i) => (
              <div key={s.k} style={{ padding: "22px 24px", borderRight: i < 3 ? "1px solid var(--line)" : 0 }}>
                <div className="ff-eyebrow" style={{ marginBottom: 10 }}>{s.k}</div>
                <div className="ff-display" style={{ fontSize: 28 }}>{s.v}</div>
              </div>
            ))}
          </div>

          {/* About */}
          <h3 className="ff-eyebrow" style={{ marginBottom: 18 }}>About this study</h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
            {[
              "First visit (60 min): we observe and chat about your morning coffee routine in your kitchen.",
              "Take-home journal: 3 short prompts over 5 days.",
              "Second visit (45 min): debrief with our research team.",
              "Payment via check or Visa e-gift card within 7 business days of completion.",
            ].map(b => (
              <li key={b} style={{ display: "flex", gap: 14, fontSize: 16, lineHeight: 1.55, color: "var(--ink-2)" }}>
                <span style={{ color: "var(--earn)", marginTop: 8, width: 12, height: 1, background: "currentColor", flexShrink: 0 }}></span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Eligibility */}
          <h3 className="ff-eyebrow" style={{ marginBottom: 18 }}>Who qualifies</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 40 }}>
            {[
              "Adults 25-55", "Brews coffee at home daily",
              "Household income $50k+", "Austin, TX metro",
              "Not employed in market research", "Comfortable with home visit",
            ].map(c => (
              <div key={c} style={{ padding: "14px 18px", background: "var(--card)", border: "1px solid var(--line)", fontSize: 14, display: "flex", alignItems: "center", gap: 10 }}>
                <span className="ff-mono" style={{ color: "var(--earn)", fontSize: 12 }}>✓</span>{c}
              </div>
            ))}
          </div>
        </div>

        {/* Right — apply panel (sticky-style) */}
        <div>
          <div className="ff-card" style={{ padding: 32, position: "sticky", top: 32 }}>
            <div className="ff-eyebrow" style={{ marginBottom: 8 }}>You'll earn</div>
            <div className="ff-display" style={{ fontSize: 80, color: "var(--earn-deep)", lineHeight: 0.9, marginBottom: 6 }}>${p.payout}</div>
            <div style={{ fontSize: 14, color: "var(--ink-3)", marginBottom: 24 }}>for ~2 hours of your time</div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 8 }}>
                <span className="ff-mono" style={{ color: "var(--ink-3)" }}>{p.spots} OF {p.total} SPOTS LEFT</span>
                <span className="ff-mono" style={{ color: "var(--earn-deep)" }}>{Math.round((1 - p.spots / p.total) * 100)}% FULL</span>
              </div>
              <div className="ff-progress"><div style={{ width: Math.round((1 - p.spots / p.total) * 100) + "%" }} /></div>
            </div>

            <button className="ff-btn ff-btn--earn ff-btn--lg" style={{ width: "100%", justifyContent: "center", marginBottom: 12 }}>
              Take 2-min screener <span className="ff-arrow">→</span>
            </button>
            <p style={{ fontSize: 12, color: "var(--ink-3)", textAlign: "center", lineHeight: 1.5 }}>
              Opens in a new window · Powered by Google Forms<br />Not all applicants qualify · U.S. residents only
            </p>

            <hr className="ff-rule" style={{ margin: "24px 0" }} />

            <div className="ff-eyebrow" style={{ marginBottom: 14 }}>Important dates</div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
              <li style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--ink-3)" }}>Apply by</span><span className="ff-mono">May 31, 2026</span></li>
              <li style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--ink-3)" }}>Visit window</span><span className="ff-mono">Jun 03 – Jun 14</span></li>
              <li style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--ink-3)" }}>Payment</span><span className="ff-mono">Within 7 days</span></li>
            </ul>

            <hr className="ff-rule" style={{ margin: "24px 0" }} />

            <div style={{ display: "flex", gap: 10, fontSize: 12, color: "var(--ink-3)" }}>
              <button className="ff-btn ff-btn--ghost ff-btn--sm" style={{ flex: 1, justifyContent: "center" }}>Save</button>
              <button className="ff-btn ff-btn--ghost ff-btn--sm" style={{ flex: 1, justifyContent: "center" }}>Share</button>
            </div>
          </div>
        </div>
      </section>

      <FFFooter />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PARTICIPATE — general signup application
   ═══════════════════════════════════════════════════════════════ */
function FFParticipate() {
  const [step, setStep] = React.useState(2);
  const totalSteps = 4;
  return (
    <div className="ff-screen ff-screen-scroll">
      <FFNav active="participate" />

      <section style={{ padding: "60px 48px", maxWidth: 1440, margin: "0 auto" }}>
        <div className="ff-eyebrow" style={{ marginBottom: 14 }}>Participant application · {step} of {totalSteps}</div>
        <h1 className="ff-display" style={{ fontSize: 84, lineHeight: 0.95, letterSpacing: "-0.02em" }}>
          Tell us about<br />yourself.
        </h1>
        <p style={{ fontSize: 17, color: "var(--ink-2)", maxWidth: 560, marginTop: 18, lineHeight: 1.5 }}>
          We'll match you to upcoming studies that fit your demographics. Takes about 4 minutes. U.S. residents only.
        </p>
      </section>

      {/* Stepper */}
      <section style={{ padding: "0 48px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>
          {[
            { n: 1, t: "Contact" }, { n: 2, t: "Demographics" }, { n: 3, t: "Lifestyle" }, { n: 4, t: "Consent & submit" },
          ].map(s => (
            <div key={s.n} style={{ paddingTop: 14, borderTop: "2px solid " + (s.n <= step ? "var(--earn)" : "var(--line)"), display: "flex", flexDirection: "column", gap: 4 }}>
              <span className="ff-mono" style={{ fontSize: 11, color: s.n <= step ? "var(--earn-deep)" : "var(--ink-3)" }}>STEP {String(s.n).padStart(2, "0")}</span>
              <span style={{ fontSize: 15, color: s.n <= step ? "var(--ink)" : "var(--ink-3)", fontWeight: s.n === step ? 500 : 400 }}>{s.t}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "60px 48px 40px", maxWidth: 920, margin: "0 auto" }}>
        <div className="ff-card" style={{ padding: 48 }}>
          <h2 className="ff-display" style={{ fontSize: 40, marginBottom: 8 }}>Demographics</h2>
          <p style={{ fontSize: 15, color: "var(--ink-3)", marginBottom: 32 }}>This helps us match you to relevant studies. Never shared without your consent.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            <div className="ff-field" style={{ gridColumn: "span 2" }}>
              <label>Age</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["18-24", "25-34", "35-44", "45-54", "55-64", "65+"].map((a, i) => (
                  <button key={a} className="ff-mono" style={{ padding: "10px 16px", border: "1px solid " + (i === 1 ? "var(--ink)" : "var(--line)"), background: i === 1 ? "var(--ink)" : "transparent", color: i === 1 ? "var(--paper)" : "var(--ink-2)", borderRadius: 999, fontSize: 13 }}>{a}</button>
                ))}
              </div>
            </div>
            <div className="ff-field"><label>Gender</label><select className="ff-select"><option>Female</option><option>Male</option><option>Non-binary</option><option>Prefer not to say</option></select></div>
            <div className="ff-field"><label>Ethnicity (optional)</label><select className="ff-select"><option>Select…</option></select></div>
            <div className="ff-field"><label>City</label><input className="ff-input" defaultValue="Atlanta" /></div>
            <div className="ff-field"><label>State</label><select className="ff-select"><option>Georgia</option></select></div>
            <div className="ff-field"><label>Zip code</label><input className="ff-input" placeholder="30303" /></div>
            <div className="ff-field"><label>Household income</label><select className="ff-select"><option>$50k – $75k</option></select></div>
            <div className="ff-field" style={{ gridColumn: "span 2" }}>
              <label>Employment status</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Full-time", "Part-time", "Self-employed", "Student", "Retired", "Unemployed"].map((a, i) => (
                  <button key={a} style={{ padding: "10px 16px", border: "1px solid " + (i === 0 ? "var(--ink)" : "var(--line)"), background: i === 0 ? "var(--ink)" : "transparent", color: i === 0 ? "var(--paper)" : "var(--ink-2)", borderRadius: 999, fontSize: 14 }}>{a}</button>
                ))}
              </div>
            </div>
          </div>

          <hr className="ff-rule" style={{ margin: "32px 0" }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button className="ff-btn ff-btn--ghost">← Back</button>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <span className="ff-mono" style={{ fontSize: 12, color: "var(--ink-3)" }}>~ 2 minutes left</span>
              <button className="ff-btn ff-btn--earn">Continue <span className="ff-arrow">→</span></button>
            </div>
          </div>
        </div>
      </section>

      <FFFooter />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   REQUEST A BID — client side
   ═══════════════════════════════════════════════════════════════ */
function FFBid() {
  return (
    <div className="ff-screen ff-screen-scroll">
      <FFNav active="bid" />

      <section style={{ padding: "60px 48px 60px", maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80 }}>
        <div>
          <div className="ff-eyebrow" style={{ marginBottom: 14, color: "var(--hire-deep)" }}>For brands & researchers</div>
          <h1 className="ff-display" style={{ fontSize: 96, lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: 28 }}>
            Send your <em style={{ fontStyle: "italic", color: "var(--hire-deep)" }}>RFQ</em>.<br />Hear back in 24h.
          </h1>
          <p style={{ fontSize: 18, color: "var(--ink-2)", maxWidth: 540, lineHeight: 1.5, marginBottom: 40 }}>
            Tell us about the study. We'll come back with a tailored quote, suggested screening criteria, and a realistic timeline.
          </p>

          <ul style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              { k: "Last-minute friendly", v: "We routinely turn around recruits in 3–5 business days." },
              { k: "Rigorous screening", v: "Phone-verified, demographically validated, no panel-pros." },
              { k: "Competitive pricing", v: "Transparent per-recruit fees, no surprise add-ons." },
              { k: "Single point of contact", v: "Elizabeth or her senior recruiter from kickoff to fielding." },
            ].map(b => (
              <li key={b.k} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, paddingBottom: 18, borderBottom: "1px solid var(--line)" }}>
                <span style={{ fontSize: 16, fontWeight: 500 }}>{b.k}</span>
                <span style={{ fontSize: 15, color: "var(--ink-2)" }}>{b.v}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 48, padding: 24, background: "var(--paper-2)", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { v: "240+", l: "Studies completed" },
              { v: "94%", l: "On-time fielding" },
              { v: "8 yrs", l: "Recruiting since 2018" },
            ].map(s => (
              <div key={s.l}>
                <div className="ff-display" style={{ fontSize: 40, color: "var(--hire-deep)" }}>{s.v}</div>
                <div className="ff-eyebrow" style={{ marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="ff-card" style={{ padding: 40 }}>
          <h3 className="ff-display" style={{ fontSize: 32, marginBottom: 8 }}>Project brief</h3>
          <p style={{ fontSize: 14, color: "var(--ink-3)", marginBottom: 28 }}>Fields marked with * are required. Confidential — we sign NDAs.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div className="ff-field"><label>Your name *</label><input className="ff-input" placeholder="Jane Smith" /></div>
            <div className="ff-field"><label>Company *</label><input className="ff-input" placeholder="Acme Insights" /></div>
            <div className="ff-field"><label>Work email *</label><input className="ff-input" placeholder="jane@acme.com" /></div>
            <div className="ff-field"><label>Phone</label><input className="ff-input" placeholder="(555) 555-5555" /></div>
          </div>

          <div className="ff-field"><label>Methodology *</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Focus group", "IDIs", "Online survey", "Ethnography", "Product trial", "Taste test", "Other"].map((a, i) => (
                <button key={a} style={{ padding: "8px 14px", border: "1px solid " + (i === 1 ? "var(--hire)" : "var(--line)"), background: i === 1 ? "var(--hire)" : "transparent", color: i === 1 ? "#fff" : "var(--ink-2)", borderRadius: 999, fontSize: 13 }}>{a}</button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div className="ff-field"><label># of recruits *</label><input className="ff-input" placeholder="20" /></div>
            <div className="ff-field"><label>Field date *</label><input className="ff-input" type="date" defaultValue="2026-06-15" /></div>
          </div>

          <div className="ff-field"><label>Target demographic</label><textarea className="ff-textarea" placeholder="e.g. Women 35-50, household income $75k+, primary grocery shopper, used the category in last 30 days…" rows={3} /></div>
          <div className="ff-field"><label>Anything else we should know?</label><textarea className="ff-textarea" placeholder="Quotas, screening sensitivities, prior recruiter pitfalls…" rows={2} /></div>

          <hr className="ff-rule" style={{ margin: "12px 0 24px" }} />

          <button className="ff-btn ff-btn--hire ff-btn--lg" style={{ width: "100%", justifyContent: "center" }}>Send RFQ <span className="ff-arrow">→</span></button>
          <p style={{ fontSize: 12, color: "var(--ink-3)", textAlign: "center", marginTop: 14 }}>We respond to all bids within one business day.</p>
        </div>
      </section>

      <FFFooter />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   REVIEWS
   ═══════════════════════════════════════════════════════════════ */
function FFReviews() {
  return (
    <div className="ff-screen ff-screen-scroll">
      <FFNav active="reviews" />

      <section style={{ padding: "60px 48px 60px", maxWidth: 1440, margin: "0 auto" }}>
        <div className="ff-eyebrow" style={{ marginBottom: 14 }}>Reviews · Verified participants & clients</div>
        <h1 className="ff-display" style={{ fontSize: 120, lineHeight: 0.95, letterSpacing: "-0.025em" }}>
          What people<br />say about<br />working with us.
        </h1>
        <div style={{ marginTop: 40, display: "flex", gap: 60, alignItems: "baseline" }}>
          <div>
            <div className="ff-display" style={{ fontSize: 80, lineHeight: 1, color: "var(--earn-deep)" }}>4.9<span style={{ fontSize: 32, color: "var(--ink-3)" }}>/5</span></div>
            <div className="ff-eyebrow" style={{ marginTop: 6 }}>Average across 187 reviews</div>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {[{ v: "98%", l: "Paid on time" }, { v: "94%", l: "Would recommend" }, { v: "240+", l: "Studies fielded" }].map(s => (
              <div key={s.l}>
                <div className="ff-display" style={{ fontSize: 36 }}>{s.v}</div>
                <div className="ff-eyebrow">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 48px 100px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {FF_REVIEWS.map((r, i) => (
            <div key={r.name} className="ff-card" style={{ padding: 36, display: "flex", flexDirection: "column", gap: 24, minHeight: 320 }}>
              <span className="ff-eyebrow">{r.role.includes("Participant") ? "Participant" : "Client"}</span>
              <p className="ff-display" style={{ fontSize: 28, lineHeight: 1.2, flex: 1 }}>"{r.quote}"</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 20, borderTop: "1px solid var(--line)" }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500 }}>{r.name}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)" }}>{r.role}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="ff-mono" style={{ fontSize: 13, color: r.role.includes("Participant") ? "var(--earn-deep)" : "var(--hire-deep)" }}>{r.payout}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FFFooter />
    </div>
  );
}

Object.assign(window, { FFHome, FFProjects, FFProjectDetail, FFParticipate, FFBid, FFReviews });
