# Aether Studio

Premium cinematic hero section — React + Vite + TypeScript + Tailwind v4 + Framer Motion

## Setup

```bash
npm install
```

## Run dark version (default)
```bash
npm run dev
# → http://localhost:5173
```

## Run light version
```bash
npm run dev
# → http://localhost:5173/index-light.html
```

## Switch theme in code
Open `src/App.tsx` and change:
```ts
;(window as any).__AETHER_THEME__ = 'dark'   // warm black
;(window as any).__AETHER_THEME__ = 'light'  // clean white/cream
```

## Build both versions
```bash
npm run build
# outputs: dist/index.html (dark) + dist/index-light.html (light)
```

## Project Structure
```
src/
  components/
    Hero.tsx     — all sections (hero, stats, work, services, process, testimonials, contact, footer)
    Navbar.tsx   — floating glass navigation
  assets/
    hero-bg.mp4  — your background video
```

## What's inside
- Seamless video loop (crossfade, no visible restart)
- Scroll parallax + zoom on video
- Full dark theme (warm earth tones matching video palette)
- Full light theme (clean cream/white)
- Work section: horizontal list rows (not cards)
- Services: accordion expand on click
- Process: horizontal step timeline
- Testimonials: clean quote cards
- Contact: split layout with working form
- All buttons navigate correctly
- Framer Motion stagger animations throughout
