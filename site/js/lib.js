/* lib.js — shared components */

function FFLogo({ light }) {
  return (
    <div className="ff-logo" style={{ color: light ? "var(--paper)" : "var(--ink)" }}>
      <a href="index.html" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "baseline", gap: 0 }}>
        <span className="ff-logo-mark">Funds<em>for</em>Focus</span>
        <span className="ff-logo-sub">Est. 2018 · Miami, FL</span>
      </a>
    </div>
  );
}

function FFNav({ active }) {
  const items = [
    { id: "home",       label: "Home",         href: "index.html" },
    { id: "projects",   label: "Projects",     href: "projects.html" },
    { id: "participate",label: "Participate",  href: "participate.html" },
    { id: "bid",        label: "Request bid",  href: "bid.html" },
    { id: "reviews",    label: "Reviews",      href: "reviews.html" },
  ];
  return (
    <header className="ff-nav">
      <FFLogo />
      <nav className="ff-nav-links">
        {items.map(it => (
          <a key={it.id} href={it.href} className={active === it.id ? "active" : ""}>
            {it.label}
          </a>
        ))}
      </nav>
      <div className="ff-nav-cta">
        <a href="tel:7866514067" style={{ fontSize: 13, color: "var(--ink-3)", fontFamily: "var(--f-mono)" }}>(786) 651-4067</a>
      </div>
    </header>
  );
}

function FFFooter() {
  return (
    <footer className="ff-footer">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, paddingBottom: 60, borderBottom: "1px solid rgba(245,240,228,0.10)" }}>
        <div>
          <FFLogo light />
          <p style={{ marginTop: 28, fontSize: 15, lineHeight: 1.6, maxWidth: 360, color: "var(--paper-3)" }}>
            Nationwide recruiting for market research — connecting brands and researchers with the participants they need.
          </p>
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 6 }}>
            <a href="tel:7866514067" className="ff-mono" style={{ fontSize: 12, letterSpacing: "0.08em", color: "var(--paper-2)" }}>(786) 651-4067</a>
            <a href={"mailto:" + window.FF_EMAIL} className="ff-mono" style={{ fontSize: 12, letterSpacing: "0.04em", color: "var(--paper-2)" }}>{window.FF_EMAIL}</a>
          </div>
        </div>
        <FFFooterCol title="For Participants" items={[
          { label: "Browse current projects", href: "projects.html" },
          { label: "How payments work", href: "participate.html" },
          { label: "Apply to participate", href: "participate.html" },
        ]} />
        <FFFooterCol title="For Clients" items={[
          { label: "Request a bid", href: "bid.html" },
          { label: "Capabilities", href: "bid.html" },
          { label: "Reviews", href: "reviews.html" },
        ]} />
        <FFFooterCol title="Company" items={[
          { label: "About", href: "index.html" },
          { label: "Contact", href: "mailto:" + window.FF_EMAIL },
        ]} />
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
        {items.map(item => (
          <li key={item.label}>
            <a href={item.href} style={{ fontSize: 14, color: "var(--paper-2)", textDecoration: "none" }}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FFProjectCard({ p, dense }) {
  const fillPct = Math.round((1 - p.spots / p.total) * 100);
  return (
    <a href={"project.html?id=" + p.id} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <div className="ff-card" style={{ padding: dense ? 20 : 28, display: "flex", flexDirection: "column", gap: 16, cursor: "pointer" }}>
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
    </a>
  );
}

function FFImg({ w, h, label, style }) {
  return (
    <div className="ff-img-placeholder" style={{ width: w, height: h, ...style }}>
      [ {label} ]
    </div>
  );
}

function FFSectionHead({ eyebrow, title, sub, align = "left" }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === "center" ? 720 : "none", margin: align === "center" ? "0 auto" : 0 }}>
      {eyebrow && <div className="ff-eyebrow" style={{ marginBottom: 16 }}>{eyebrow}</div>}
      <h2 className="ff-display" style={{ fontSize: 64, lineHeight: 0.98, marginBottom: 14 }}>{title}</h2>
      {sub && <p style={{ fontSize: 18, color: "var(--ink-2)", lineHeight: 1.45, maxWidth: 560 }}>{sub}</p>}
    </div>
  );
}

Object.assign(window, { FFLogo, FFNav, FFFooter, FFProjectCard, FFImg, FFSectionHead });
