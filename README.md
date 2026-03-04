# Midterm — Environment 2

**MGN Personal Website** · _by Mary Grace Nazareno_
Vanier College — Block 2, Environment 2

A simple personal website built with **Next.js 14** and **React**, featuring a clean gold-accented design with reusable components.

---

##  Project Structure

```
midterm-marynazareno/
├── app/
│   ├── globals.css          # Global styles and CSS custom properties
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header/
│   │   ├── header.tsx       # Top navigation bar
│   │   └── header.css       # Header-specific styles
│   └── Footer/
│       └── footer.css       # Footer-specific styles
├── public/                  # Static assets
├── package.json
└── README.md
```

---

##  Components

### Header (`components/Header/header.tsx`)

The site-wide top navigation bar. Includes:

- **MGN** logo/brand mark aligned to the left
- Navigation links: **Home**, **About**, **Services**
- A hamburger menu element (hidden on desktop, prepared for mobile breakpoints)
- 80px height with flexbox space-between layout

### Footer

Centered footer section with:

- Brand name in **Playfair Display** serif font
- A short tagline in muted styling
- Copyright notice at the bottom

---

##  Styles & Design

| Detail               | Value                       |
| -------------------- | --------------------------- |
| Accent / hover color | `#c9a84c` (gold)            |
| Brand font           | Playfair Display (serif)    |
| Muted text color     | `#7a7065`                   |
| Nav link color       | `var(--muted)` CSS variable |
| Nav transition       | `color 0.2s ease`           |
| Header height        | `80px`                      |

- CSS custom properties (`--muted`) are used for consistent theming across components
- No external CSS framework — all styles are written in plain CSS
- Flexbox is used throughout for layout

---

## ⚙️ Tech Stack

| Technology                       | Purpose                       |
| -------------------------------- | ----------------------------- |
| [Next.js 14](https://nextjs.org) | React framework, routing, SSR |
| [React](https://react.dev)       | Component-based UI            |
| CSS (plain)                      | Component and global styling  |
| Playfair Display                 | Serif font for branding       |
| Git + GitHub                     | Version control               |

---

##  Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/mgracnazareno/midterm-environment2.git
cd midterm-environment2
npm install
```

### Running the Dev Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## Deployment

This project is deployed via [Vercel](https://vercel.com) — the easiest way to deploy a Next.js app.

**GitHub Repository:**
[github.com/mgracnazareno/midterm-environment2](https://github.com/mgracnazareno/midterm-environment2)

---

##  Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
