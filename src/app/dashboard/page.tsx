// src/app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <main className="dashboard">
      {/* subtle gradient bar under header */}
      <div className="dashboard-strip" aria-hidden="true" />

      <div className="dash-container">
        {/* ===== Project Overview ===== */}
        <section className="dash-section">
          <div className="dash-section-header">
            <h2>📊 Project Overview</h2>
            <span className="dot-sep" />
          </div>

          <div className="card-grid">
            <article className="card purple">
              <div className="card-top">
                <span className="dot purple-dot" />
                <span className="status ontrack">On Track</span>
              </div>
              <h3 className="card-title">Tarakhase Road</h3>
              <p className="card-sub">Dhading • 68% • Nov 20</p>
              <div className="card-actions">
                <a className="chip">Open</a>
              </div>
            </article>

            <article className="card indigo">
              <div className="card-top">
                <span className="dot indigo-dot" />
                <span className="status behind">Behind</span>
              </div>
              <h3 className="card-title">Buttar–Makaisingh</h3>
              <p className="card-sub">Gorkha • 52% • Dec 05</p>
              <div className="card-actions">
                <a className="chip">Open</a>
              </div>
            </article>

            <article className="card teal">
              <div className="card-top">
                <span className="dot teal-dot" />
                <span className="status ontrack">On Track</span>
              </div>
              <h3 className="card-title">Retaining Wall</h3>
              <p className="card-sub">River • 34% • Dec 28</p>
              <div className="card-actions">
                <a className="chip">Open</a>
              </div>
            </article>
          </div>
        </section>

        {/* ===== Financial & Budget ===== */}
        <section className="dash-section">
          <div className="dash-section-header">
            <h2>💰 Financial &amp; Budget</h2>
            <span className="dot-sep" />
          </div>

          <div className="card-grid">
            <article className="card blue">
              <h3 className="card-title">Budget vs Actual</h3>
              <p className="card-sub">Rs 8.4Cr vs 6.9Cr</p>
              <div className="card-actions"><a className="chip">Open</a></div>
            </article>

            <article className="card cyan">
              <h3 className="card-title">Cash Flow</h3>
              <p className="card-sub">Income 2.2Cr • Expense 1.7Cr</p>
              <div className="card-actions"><a className="chip">Open</a></div>
            </article>

            <article className="card green">
              <h3 className="card-title">Profit Margin</h3>
              <p className="card-sub">22.7% (est.)</p>
              <div className="card-actions"><a className="chip">Open</a></div>
            </article>
          </div>
        </section>

        {/* ===== Labor & Workforce ===== */}
        <section className="dash-section">
          <div className="dash-section-header">
            <h2>👷 Labor &amp; Workforce</h2>
            <span className="dot-sep" />
          </div>

          <div className="card-grid">
            <article className="card amber">
              <h3 className="card-title">Attendance</h3>
              <p className="card-sub">118 Present • 9 Absent • 7 Leave</p>
              <div className="card-actions"><a className="chip">Open</a></div>
            </article>

            <article className="card rose">
              <h3 className="card-title">Wages Today</h3>
              <p className="card-sub">Rs 2.15Cr • OT 0.22Cr</p>
              <div className="card-actions"><a className="chip">Open</a></div>
            </article>

            <article className="card yellow">
              <h3 className="card-title">Assignments</h3>
              <p className="card-sub">Crews → Sites</p>
              <div className="card-actions"><a className="chip">Open</a></div>
            </article>
          </div>
        </section>

        {/* ===== Materials & Equipment ===== */}
        <section className="dash-section">
          <div className="dash-section-header">
            <h2>🏗️ Materials &amp; Equipment</h2>
            <span className="dot-sep" />
          </div>

          <div className="card-grid">
            <article className="card slate">
              <h3 className="card-title">Materials Stock</h3>
              <p className="card-sub">Cement, Rebar, Gravel • 14d cover</p>
              <div className="card-actions"><a className="chip">Open</a></div>
            </article>

            <article className="card emerald">
              <h3 className="card-title">Fuel Usage</h3>
              <p className="card-sub">Diesel 2,340 L • GenSets + Heavy</p>
              <div className="card-actions"><a className="chip">Open</a></div>
            </article>

            <article className="card violet">
              <h3 className="card-title">Equipment Uptime</h3>
              <p className="card-sub">Excavators 92% • Mixers 88%</p>
              <div className="card-actions"><a className="chip">Open</a></div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
