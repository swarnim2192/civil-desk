// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ato Ko Construction',
  description: 'Build. Track. Deliver.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            {/* Glowing background bubbles */}
            <div className="bubble-field" aria-hidden="true">
              <span className="bubble b1" />
              <span className="bubble b2" />
              <span className="bubble b3" />
            </div>

            {/* Brand logo */}
            <a className="brand" href="/">
              <span className="avatar">AK</span>
              <span className="brand-text">Ato Ko Construction</span>
            </a>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          © {new Date().getFullYear()} Ato Ko Construction
        </footer>
      </body>
    </html>
  );
}
