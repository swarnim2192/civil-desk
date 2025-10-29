# 🏗️ Civil Desk

A lightweight project and finance tracker for civil engineers — manage projects, clients, invoices, expenses, and timesheets in one place.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- **Next.js (App Router)** — React-based full-stack framework
- **TypeScript** — type-safe development
- **Tailwind CSS** — rapid utility-first styling
- **shadcn/ui + Radix** — accessible, elegant UI components
- **React Hook Form + Zod** — powerful forms with schema validation
- **date-fns** — lightweight date formatting
- *(Optional)* **TanStack Table / TanStack Query** — data tables & caching
- *(Optional)* **Leaflet / Mapbox GL JS** — interactive project maps

### ⚙️ Backend
- **PostgreSQL (via Supabase)** — secure, scalable relational database
- **Prisma ORM** — schema-driven database layer with full TypeScript types
- **Next.js API Routes / Server Actions** — lightweight backend endpoints
- **Supabase Auth** — user authentication (email, OAuth, etc.)
- **Supabase Storage** — store project photos, receipts, and documents
- *(Optional)* **Row-Level Security (RLS)** — fine-grained per-user access

### 🧰 DevOps / Infrastructure
- **Vercel** — deployment platform for Next.js
- **GitHub Actions** — CI for linting, type-checking, and builds
- **ESLint + Prettier** — code formatting and static analysis
- *(Optional)* **Playwright / Vitest** — testing setup for stable releases

---

## 💡 Why This Stack?
- One unified app for UI and API (Next.js)
- Prisma + Postgres = structured, relational data made simple
- Supabase handles Auth + Storage + DB hosting in one place
- Easy deployment to Vercel — perfect for solo devs and small teams

---

## 🧩 Core Features (MVP)
- ✅ Project & client tracking  
- ✅ Invoices with items, totals, and status  
- ✅ Expense logging with receipts  
- ✅ Timesheets & rates  
- ✅ Dashboard overview  
- 🗺️ Map of project sites *(coming soon)*  
- 🔐 Authentication & role-based access *(coming soon)*  

---

## 🛠️ Getting Started

```bash
# Clone the repo
git clone https://github.com/swarnim2192/civil-desk.git
cd civil-desk

# Install dependencies
npm install

# Start dev server
npm run dev
