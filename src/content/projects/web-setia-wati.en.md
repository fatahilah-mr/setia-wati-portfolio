---
title: "Setia Wati Portfolio"
description: "An interactive, aesthetic pink pastel personal portfolio website for Setia Wati (Kwettiau), engineered with React 19, Vite, TypeScript, and Motion."
status: "completed"
techStack:
  - React 19
  - Vite
  - TypeScript
  - Motion
  - Tailwind CSS
  - Lucide React
startDate: "2026-06-30"
repoUrl: "https://github.com/fatahilah-mr/web-setia-wati"
demoUrl: "https://kwettiau.fatah.web.id"
heroImage: "/uploads/setia-wati-portfolio.jpg"
featured: true
references:
  - title: "Official React Documentation"
    url: "https://react.dev"
  - title: "Official Vite Documentation"
    url: "https://vitejs.dev"
  - title: "Motion Documentation"
    url: "https://motion.dev"
---

## 📌 1. Problem (Background & Problem Statement)
Setia Wati (Kwettiau), a Computer & Network Engineering (TKJ) graduate from SMK Patriot Pituruh, needed a digital personal branding platform to showcase her unique identity. Most IT student portfolios tend to be rigid, dark/monochrome, and purely code-focused without conveying the person's character. Setia Wati possesses a distinctive blend of interests spanning IT networking, culinary arts, fiction journal writing, and pop culture idols (NCT Dream, Chen Zhe Yuan, Harry Vaughan). Therefore, a web portfolio was required that not only highlights technical TKJ skills but also provides a warm, dynamic, personal visual aesthetic that is fully responsive across all devices.

## 👤 2. Target User (Primary Audience)
- **Recruiters & Educational Partners:** School representatives, organizations, or companies evaluating Setia Wati's profile, education background, and technical IT networking skills.
- **Community & General Visitors:** Peers and visitors interested in discovering her personal profile, life motivation, writing hobbies, and favorite music playlists.
- **Potential Collaborators:** Clients or teams looking for collaboration in IT services, basic design, or creative projects.

## 💡 3. Solution (Proposed Solution)
Built a Single Page Application (SPA) web portfolio powered by **React 19** and **Vite** featuring a *Pink Pastel Glassmorphism* visual design theme. The solution incorporates:
1. **Characterful Visual Design:** A warm color palette (soft pink pastel, rose, and white) combined with modern typography and glassmorphism styling.
2. **Modern Interactivity:** A 3D Mouse Tilt Parallax effect on favorite cards, scroll spy navigation, smooth component transitions powered by **Motion**, and an interactive favorite music player widget.
3. **Direct Contact Module:** An interactive mail modal that dynamically reads visitor input and generates a `mailto:` URI for effortless communication without requiring complex backend servers.

## ⭐ 4. Key Features (Main Features)
- **3D Card Tilt Parallax Effect:** Interactive 3-dimensional response on favorite idol cards that rotates and tilts dynamically following mouse cursor movement.
- **Smart Scroll-Spy Header & Navigation:** Auto-hiding header on scroll down that reappears on scroll up, equipped with an active section tracker that updates navigation links in real-time.
- **Lazy Loaded Image with Shimmer Skeleton:** Custom `LazyImage` component presenting a smooth shimmering fallback animation during asset loading for optimal UX.
- **Interactive Playlist & Like System:** Favorite music widget featuring interactive track liking toggles that dynamically update UI states.
- **Interactive Email Modal:** Popup modal dialog enabling visitors to input their name, subject, and message body to send emails directly via their default mail client.
- **Biodata Profile & TKJ Skill Showcase:** Clean structured presentation of personal biodata and technical skill badges (Networking Setup, Cisco Packet Tracer, Hardware Troubleshooting).

## 🧱 5. Challenges & Lessons Learned (Technical Challenges & Problem Solving)
- **Technical Challenge:** Implementing 3D tilt transform math and scroll-linked animations without causing layout thrashing or frame rate drops on mobile devices.
- **Solution:** Utilized CSS `will-change: transform, box-shadow` optimization, cubic bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`), and added `{ passive: true }` event listeners for scroll events. Image assets were also optimized via lazy loading.
- **Technical Challenge:** Maintaining clean state architecture while managing interactive UI elements such as header visibility, mobile drawers, playlist tracks, and contact modal states.
- **Solution:** Separated code into modular components (`LazyImage.tsx`, data `playlist.ts`, `types.ts`) and effectively leveraged React Hooks (`useState`, `useEffect`, `useRef`).

## 📈 6. Impact (Results & Impact)
- **Before:** No centralized digital platform existed to present both Setia Wati's professional TKJ profile and her personal creative identity aesthetically.
- **After:** A fast, responsive, and visually stunning web portfolio that successfully establishes a memorable personal brand for recruiters and visitors alike.

## 🛠️ Tech Choices (Technology Selection & Rationale)
- **React 19:** Chosen for component-based architecture, efficient DOM rendering, and reactive state management.
- **Vite:** Chosen as the build tool and dev server for lightning-fast HMR and optimized production bundling.
- **Motion (Framer Motion):** Selected for fluid, declarative UI animations and transitions.
- **Tailwind CSS & Vanilla CSS Variables:** Combined utility-first styling with CSS design tokens for complete control over the pink pastel glassmorphism theme.
- **Lucide React:** Selected for crisp, lightweight, and customizable SVG icons.

## 🖼️ Screenshots & Visual Demo
![Main Portfolio Overview](/uploads/setia-wati-portfolio.jpg)
*Figure 1: Main interface (Hero Section & Navigation) of Setia Wati Portfolio featuring the pink pastel aesthetic.*
