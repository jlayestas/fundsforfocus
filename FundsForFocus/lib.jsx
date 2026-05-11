/* lib.jsx — shared components, project data, icons */

const FF_PROJECTS = [
  { id: "earn-100", title: "Quick Online Survey: Streaming Habits", category: "Online Survey", payout: 100, time: 25, format: "Online", location: "Nationwide", spots: 12, total: 50, eligibility: "Adults 18-54, watch streaming weekly", deadline: "May 24", status: "live", isNew: true,
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeeBeYViBlOtwIC_qeiQta34x8oMjL7bVx11ocBPbEJ4HIXvg/viewform" },
  { id: "food-life", title: "Food & Lifestyle In-Home Diary Study", category: "In-Home", payout: 250, time: 90, format: "In-Person", location: "Chicago, IL", spots: 4, total: 12, eligibility: "Households with kids 6-12", deadline: "May 28", status: "live",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScz7pg6GMA6t4f6MZNEfxAnw_d2AF69Vgm7olF3V8dFXHpwyQ/viewform" },
  { id: "tech-ux", title: "New Mobile App Usability Test", category: "Product Trial", payout: 175, time: 60, format: "Online (Zoom)", location: "Nationwide", spots: 7, total: 20, eligibility: "iPhone users, ages 25-45", deadline: "June 02", status: "live" },
  { id: "ethno-coffee", title: "Morning Coffee Ritual — Ethnography", category: "Ethnography", payout: 300, time: 120, format: "In-Home", location: "Austin, TX", spots: 2, total: 8, eligibility: "Daily coffee drinkers, brew at home", deadline: "May 31", status: "live", isHot: true },
  { id: "taste-snacks", title: "Snack Bar Taste Testing", category: "Taste Test", payout: 75, time: 30, format: "Central Location", location: "Miami, FL", spots: 18, total: 30, eligibility: "Ages 18+, no nut allergies", deadline: "May 22", status: "live" },
  { id: "blog-fitness", title: "8-Week Fitness Journal Blog Study", category: "Online Journal", payout: 400, time: 480, format: "Online", location: "Nationwide", spots: 5, total: 15, eligibility: "Active fitness routine 3x/week", deadline: "June 10", status: "live" },
];

const FF_REVIEWS = [
  { name: "Marcus T.", role: "Participant · Atlanta, GA", quote: "I've done four studies this year and the payments come quickly. The team is responsive when you have questions, and the screening process feels fair.", payout: "$725 earned", projects: 4 },
  { name: "Sandra K.", role: "Brand Manager, CPG client", quote: "We had three days to recruit a tough demographic. Funds for Focus pulled it off and our moderator said the participants were the best she'd ever screened.", payout: "12 studies completed" },
  { name: "Jenna R.", role: "Participant · Dallas, TX", quote: "Refreshing to find a recruiter that actually pays what they promise. I've been a participant for two years now.", payout: "$1,150 earned", projects: 7 },
  { name: "David O.", role: "Insights Director, Tech client", quote: "Elizabeth's team gets the brief on the first call. We've used them for ethnographies, online IDIs, and a tricky B2B panel.", payout: "Long-term partner" },
];

const FF_PROJECT_TYPES = [
  "Product & Technology Studies", "Consumer Recruitment", "Online Journal Blogs",
  "In-Home Interviews", "IDIs & Ethnographies", "Product Trials", "Taste Testing",
];

/* ─── Logo ───────────────────────────── */
function FFLogo({ light }) {
  return (
    <div className="ff-logo" style={{ color: light ? "var(--paper)" : "var(--ink)" }}>
      <span className="ff-logo-mark">Funds<em>for</em>Focus</span>
      <span className="ff-logo-sub">Est. 2018 · Miami, FL</span>
    </div>
  );
}

/* ─── Nav ───────────────────────────── */
function FFNav({ active = "home", onNav }) {
  const items = [
    { id: "home",      label: "Home" },
    { id: "projects",  label: "Projects" },
    { id: "participate", label: "Participate" },
    { id: "bid",       label: "Request bid" },
    { id: "reviews",   label: "Reviews" },
  ];
  return (
    <header className="ff-nav">
      <FFLogo />
      <nav className="ff-nav-links">
        {items.map(it => (
          <a key={it.id} className={active === it.id ? "active" : ""}
             onClick={(e) => { e.preventDefault(); onNav && onNav(it.id); }}>
            {it.label}
          </a>
        ))}
      </nav>
      <div className="ff-nav-cta">
        <a style={{ fontSize: 13, color: "var(--ink-3)", fontFamily: "var(--f-mono)" }}>(786) 651-4067</a>
        <button className="ff-btn ff-btn--sm">Sign in</button>
      </div>
    </header>
  );
}

/* ─── Footer ───────────────────────────── */
function FFFooter() {
  return (
    <footer className="ff-footer">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, paddingBottom: 60, borderBottom: "1px solid rgba(245,240,228,0.10)" }}>
        <div>
          <FFLogo light />
          <p style={{ marginTop: 28, fontSize: 15, lineHeight: 1.6, maxWidth: 360, color: "var(--paper-3)" }}>
            Nationwide recruiting for market research — connecting brands and researchers with the participants they need.
          </p>
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 6, fontSize: 14, color: "var(--paper-2)" }}>
            <span className="ff-mono" style={{ fontSize: 12, letterSpacing: "0.08em" }}>(786) 651-4067</span>
            <span className="ff-mono" style={{ fontSize: 12, letterSpacing: "0.04em" }}>info@fundsforfocus.com</span>
          </div>
        </div>
        <FFFooterCol title="For Participants" items={["Browse current projects", "How payments work", "FAQ", "Refer a friend"]} />
        <FFFooterCol title="For Clients" items={["Request a bid", "Capabilities", "Sample reports", "Case studies"]} />
        <FFFooterCol title="Company" items={["About", "Contact", "Privacy", "Terms"]} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 30, fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--f-mono)" }}>
        <span>© 2026 Funds for Focus, LLC</span>
        <span>U.S. residents only · Equal opportunity recruiting</span>
      </div>
    </footer>
  );
}
function FFFooterCol({ title, items }) {
  return (
    <div>
      <div className="ff-eyebrow" style={{ color: "var(--ink-4)", marginBottom: 18 }}>{title}</div>
      <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map(s => <li key={s} style={{ fontSize: 14, color: "var(--paper-2)" }}>{s}</li>)}
      </ul>
    </div>
  );
}

/* ─── Project card (listing) ───────────────────────────── */
function FFProjectCard({ p, dense, onOpen }) {
  const remaining = (p.spots / p.total);
  const fillPct = Math.round((1 - remaining) * 100);
  return (
    <div className="ff-card" style={{ padding: dense ? 20 : 28, display: "flex", flexDirection: "column", gap: 16, cursor: "pointer" }} onClick={() => onOpen && onOpen(p)}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <span className="ff-eyebrow">{p.category}</span>
        <div style={{ display: "flex", gap: 6 }}>
          {p.isNew && <span className="ff-tag ff-tag--earn">New</span>}
          {p.isHot && <span className="ff-tag ff-tag--gold">Filling fast</span>}
          {p.status === "live" && <span className="ff-tag ff-tag--live">Open</span>}
        </div>
      </div>
      <h3 className="ff-display" style={{ fontSize: dense ? 26 : 32, lineHeight: 1.05 }}>{p.title}</h3>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 18, rowGap: 8, fontSize: 14, color: "var(--ink-2)", marginTop: 4 }}>
        <span style={{ color: "var(--ink-3)" }}>Format</span><span>{p.format}</span>
        <span style={{ color: "var(--ink-3)" }}>Location</span><span>{p.location}</span>
        <span style={{ color: "var(--ink-3)" }}>Time</span><span className="ff-mono">{p.time} min</span>
        <span style={{ color: "var(--ink-3)" }}>Eligible</span><span>{p.eligibility}</span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 4, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
        <div>
          <div className="ff-eyebrow" style={{ marginBottom: 4 }}>Payout</div>
          <div className="ff-display" style={{ fontSize: 40, color: "var(--earn-deep)" }}>${p.payout}</div>
        </div>
        <div style={{ flex: 1, marginLeft: 24, marginBottom: 4 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 6, color: "var(--ink-3)" }}>
            <span className="ff-mono">{p.spots} spots left</span>
            <span className="ff-mono">{fillPct}% full</span>
          </div>
          <div className="ff-progress"><div style={{ width: fillPct + "%" }} /></div>
        </div>
      </div>
    </div>
  );
}

/* ─── Image placeholder ───────────────────────────── */
function FFImg({ w, h, label, style }) {
  return (
    <div className="ff-img-placeholder" style={{ width: w, height: h, ...style }}>
      [ {label} ]
    </div>
  );
}

/* ─── Section header ───────────────────────────── */
function FFSectionHead({ eyebrow, title, sub, align = "left" }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === "center" ? 720 : "none", margin: align === "center" ? "0 auto" : 0 }}>
      {eyebrow && <div className="ff-eyebrow" style={{ marginBottom: 16 }}>{eyebrow}</div>}
      <h2 className="ff-display" style={{ fontSize: 64, lineHeight: 0.98, marginBottom: 14 }}>{title}</h2>
      {sub && <p style={{ fontSize: 18, color: "var(--ink-2)", lineHeight: 1.45, maxWidth: 560 }}>{sub}</p>}
    </div>
  );
}

Object.assign(window, {
  FF_PROJECTS, FF_REVIEWS, FF_PROJECT_TYPES,
  FFLogo, FFNav, FFFooter, FFProjectCard, FFImg, FFSectionHead,
});
