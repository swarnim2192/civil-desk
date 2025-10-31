export default function Home() {
  // Temporary metrics (replace later with API or DB)
  const metrics = { projects: 0, budgetCr: 0, workers: 0 };

  return (
    <main className="hero">
      {/* Background overlay */}
      <div className="overlay" />

      {/* ===== NAVBAR ===== */}
      <nav className="topnav reveal d1">
        <span className="brand">Ato Ko Construction</span>
        <div className="links">
          <a href="#dashboard">Dashboard</a>
          <a href="#projects">Projects</a>
          <a href="#docs">Docs</a>
        </div>
      </nav>

      {/* ===== HERO CONTENT ===== */}
      <section className="content">
        <h1 className="reveal d2">Build. Track. Deliver.</h1>
        <p className="reveal d3">
          Daily progress, budgets, labor & materials in one place.
        </p>

        <div className="cta reveal d4">
          <a className="btn primary" href="#dashboard">Open Dashboard</a>
          <a className="btn secondary" href="#projects">View Projects</a>
        </div>

        {/* ===== STATS SECTION ===== */}
        {(metrics.projects + metrics.budgetCr + metrics.workers) > 0 ? (
          <ul className="stats reveal d4">
            <li><strong>{metrics.projects}</strong> Active Projects</li>
            <li><strong>₨ {metrics.budgetCr}Cr</strong> Budget Tracked</li>
            <li><strong>{metrics.workers}</strong> Workers</li>
          </ul>
        ) : (
          <div className="reveal d4" style={{
            marginTop: '1rem',
            opacity: 0.9,
            display: 'flex',
            justifyContent: 'center'
          }}>
            <span style={{
              padding: '.55rem .9rem',
              borderRadius: 12,
              background: 'rgba(255,255,255,.12)',
              border: '1px solid rgba(255,255,255,.18)'
            }}>
              Nothing tracked yet — connect your data to show live stats.
            </span>
          </div>
        )}
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer reveal d4">
        © {new Date().getFullYear()} Ato Ko Construction
      </footer>

      {/* Cursor Glow Effect */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('pointermove', e => {
              document.querySelectorAll('.btn.primary, .btn.secondary').forEach(b => {
                const r = b.getBoundingClientRect();
                b.style.setProperty('--x', (e.clientX - r.left) + 'px');
                b.style.setProperty('--y', (e.clientY - r.top) + 'px');
              });
            });
          `,
        }}
      />
    </main>
  );
}
