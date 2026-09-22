# Naitik Chitransh — Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-naitik--portfolio--g42i.onrender.com-176B67?style=for-the-badge&logo=render&logoColor=white)](https://naitik-portfolio-g42i.onrender.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-171717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/naitik-work)
[![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> **Software Engineer | MERN Stack Developer**  
> An editorial, high-performance developer portfolio built with React 19, Tailwind CSS, and Framer Motion. Engineered with tactile micro-interactions, masked heading reveals, a 2-tier architectural project showcase, and a warm cream & deep teal editorial design system.

🔗 **Live Website:** [https://naitik-portfolio-g42i.onrender.com/](https://naitik-portfolio-g42i.onrender.com/)

---

## 📖 Overview

This portfolio serves as the central showcase of my software engineering background, full-stack architectures, real-time applications, and AI integrations.

Rather than relying on generic template effects or AI-generated blobs, the site emphasizes **editorial typography** (*Plus Jakarta Sans* + *Instrument Serif*), **restrained motion**, and **recruiter-focused storytelling**:
- Clear, immediate professional identity readable within seconds
- 2-tier project showcase distinguishing deep case studies from supporting builds
- Live, verified deployments and source links across all displayed work
- Direct resume PDF download integration directly from the header, hero, and contact cards

---

## ✨ Key Features & Motion System

### 1. Sequenced Hero Entrance
- **Sequential Animation**: Staggered mount animation (~900ms total) revealing the availability badge, headline, description, magnetic CTA buttons, and portrait card without jarring layout shifts.
- **"Currently Building" Status**: Gentle radar pulse indicator on current apprenticeship status.

### 2. Two-Tier Project Showcase
- **Tier 1: Primary Featured Projects (Deep Architectural Case Studies)**
  - **[QueryMind](https://github.com/naitik-work/QueryMind)** ([Live Demo](https://querymind-aeh7.onrender.com/)): AI research assistant featuring Socket.IO streaming, durable cross-session memory in MongoDB, multi-provider fallback (Gemini → OpenRouter), and a LangGraph battle arena.
  - **[PulseClass](https://github.com/naitik-work/PulseClass)** ([Live Demo](https://realtimepulseclass.onrender.com)): Sub-200ms real-time classroom polling platform with keyboard-first workflows (`Q` to launch, `1-9` to pick), compound unique index duplicate prevention, and server-authoritative countdowns.
  - **Focus Mode & 3D Tilt**: Hovering one featured project gently focuses recruiter attention while subtly dimming the other; features smooth desktop mouse tilt (`TiltCard`, ±2° max).
- **Tier 2: Supporting Projects (2×2 Responsive Grid)**
  - **[Snitch](https://github.com/naitik-work/Snitch)** ([Live Demo](https://snitch-cxnr.onrender.com/)): Full-stack apparel e-commerce with variant stock matrices and ImageKit CDN streaming.
  - **[Mac-OS](https://github.com/naitik-work/Mac-OS)** ([Live Demo](https://mac-os-y6za.onrender.com/)): Interactive dual-OS (Sonoma / Windows 11) desktop portfolio with draggable windowing and CLI terminal.
  - **[VibeFeed](https://github.com/naitik-work/VibeFeed)** ([Live Demo](https://vibefeedd.onrender.com/)): Visual creator platform with in-memory Multer uploads and compound unique indexed relationships.
  - **[Cardify](https://github.com/naitik-work/Cardify)** ([Live Demo](https://cardify-d1vd.vercel.app/)): Reactive user card generator with two-way data binding.

### 3. Tactile Micro-Interactions
- **Section Heading Mask Reveals**: Headings slide smoothly from behind an `overflow-hidden` container (`translateY(100%) → translateY(0)` over 600ms).
- **Navbar Active Spy & Gliding Indicator**: Framer Motion `layoutId="activeNavUnderline"` creates a gliding underline tracking the active section as you scroll.
- **Animated Numerical Counters**: Smooth spring-based count-up for statistics (`6+` projects, `200+` LeetCode, `8.0` CGPA, `2×` hackathons).
- **Scroll-Driven Timeline**: A live progress line traces down the experience and education timeline as the user scrolls.
- **Magnetic Buttons**: Desktop-only subtle cursor attraction (3–5px max) with natural spring return.
- **Interactive Feedback States**:
  - One-click copy email with animated badge (`Email copied ✓`).
  - Resume button with temporary confirmation (`Downloaded ✓`) while initiating direct download.

### 4. Performance & Accessibility
- Strict `@media (prefers-reduced-motion: reduce)` support: disables transforms, tilts, magnetic pull, and counters for users requesting reduced motion.
- Accessible keyboard navigation with visible focus rings (`outline-offset: 2px`).
- GPU-accelerated properties (`transform`, `opacity`) preventing reflows and layout shifts.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 | Declarative UI and component architecture |
| **Build & Tooling** | Vite 8 | Fast HMR dev server and optimized production rollup |
| **Styling** | Tailwind CSS 3 + Vanilla CSS | Design token system, responsive utilities, and editorial theme |
| **Motion & Animation** | Framer Motion (v13) | Mask reveals, layout transitions, spring physics, and timeline scroll |
| **Icons** | Lucide React | Clean, scalable vector iconography |
| **Typography** | Google Fonts | *Plus Jakarta Sans* (sans body/ui) & *Instrument Serif* (editorial headers) |
| **Deployment** | Render | Production static site web hosting |

---

## 📁 Project Structure

```text
Portfolio/
├── public/
│   ├── favicon.svg                  # SVG browser favicon
│   ├── icons.svg                    # SVG sprite icons
│   ├── naitik-profile.jpg           # Professional portrait
│   ├── resume.pdf                   # Production resume file
│   └── Naitik-Chitransh-Resume.pdf  # Named direct download file
├── src/
│   ├── assets/                      # Static assets
│   ├── components/
│   │   ├── motion/
│   │   │   └── MotionHelpers.jsx    # HeadingReveal, AnimatedCounter, TiltCard, MagneticButton
│   │   ├── About.jsx                # Education, bio, competencies, and animated metrics
│   │   ├── Achievements.jsx         # Cummins Scholar, Hackathons, TEDx, LeetCode
│   │   ├── Contact.jsx              # Direct email, copy-to-clipboard, resume download, recruiter snapshot
│   │   ├── Experience.jsx           # Sheryians Apprenticeship & JUET B.Tech timeline
│   │   ├── FeaturedProjects.jsx     # 2-Tier showcase (QueryMind, PulseClass, Snitch, Mac-OS, etc.)
│   │   ├── Footer.jsx               # Copyright, links, and smooth scroll-to-top
│   │   ├── GitHubCallout.jsx        # Open-source repository callout
│   │   ├── Hero.jsx                 # Sequenced hero, positioning, and CTA magnetic buttons
│   │   ├── Icons.jsx                # Custom brand icons (GitHub, LinkedIn)
│   │   ├── Leadership.jsx           # TEDx-JUET & Bitwise Club leadership roles
│   │   ├── Navbar.jsx               # Floating header with active section spy & mobile drawer
│   │   └── Skills.jsx               # 8 categorized technical skill groups
│   ├── App.jsx                      # Main app shell with scroll progress bar
│   ├── index.css                    # Tailwind layers, scrollbar styling, and reduced-motion rules
│   └── main.jsx                     # Vite DOM mount point
├── index.html                       # HTML5 shell with OpenGraph and SEO tags
├── tailwind.config.js               # Theme extensions (colors, fonts, box-shadows)
└── package.json                     # Project scripts and dependencies
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- `npm` (v9.0 or higher)

### 1. Clone the repository
```bash
git clone https://github.com/naitik-work/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 4. Build for production
```bash
npm run build
```
The output will be bundled in the `dist/` directory, ready for deployment.

### 5. Preview production build
```bash
npm run preview
```

---

## 🎨 Color Palette & Design Tokens

| Token | Hex | Role |
| :--- | :--- | :--- |
| `bg-light` | `#F7F5F0` | Warm parchment background |
| `charcoal` | `#171717` | Primary high-contrast text |
| `charcoal-muted` | `#5F6368` | Secondary explanatory text |
| `teal-accent` | `#176B67` | Primary brand accent & active states |
| `teal-subtle` | `#EBF5F4` | Badge background & tint fills |
| `gold-accent` | `#D6A85F` | Honors, scholarships & awards |
| `gold-subtle` | `#FDF8F0` | Scholarship & milestone badges |

---

## 👤 Author & Contact

**Naitik Chitransh**  
*Software Engineer | MERN Stack Developer*  
*Final-Year B.Tech CSE (JUET Guna) · Apprentice at Sheryians Coding School*

- 🌐 **Portfolio**: [https://naitik-portfolio-g42i.onrender.com/](https://naitik-portfolio-g42i.onrender.com/)
- 💼 **LinkedIn**: [linkedin.com/in/naitik-chitransh-5b3b13270](https://www.linkedin.com/in/naitik-chitransh-5b3b13270/)
- 💻 **GitHub**: [github.com/naitik-work](https://github.com/naitik-work)
- 🧠 **LeetCode**: [leetcode.com/u/naitikchs16](https://leetcode.com/u/naitikchs16/)
- ✉️ **Email**: [naitikchs16@gmail.com](mailto:naitikchs16@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
