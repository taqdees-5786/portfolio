# Ahsanath Taqdees | Portfolio

A warm, playful one-page portfolio for an aspiring AI engineer. It tells the story behind each project (brief, idea, role and outcome) instead of just showing a gallery, and it's built to be understood in 30 seconds.

**Live site:** [your-project.vercel.app]

> Status: under construction. Some details are still placeholders.

## Features
- One-page layout with a sticky navbar and smooth scrolling
- Hamburger menu on mobile
- Light and dark mode with a toggle (your choice is remembered)
- Project cards told as short stories: brief, idea, role, outcome
- Floating illustrated objects in the hero that you can drag around
- Butterflies that follow the cursor in the hero only
- Skills section with filter buttons
- Photo collage and a testimonials section
- Scroll-reveal animations
- Accessibility basics: keyboard-friendly controls, labelled buttons, and `prefers-reduced-motion` support

## Built with
- HTML, CSS and vanilla JavaScript (no frameworks, no build step)
- Google Fonts: Playfair Display, Outfit and Caveat
- Inline SVG illustrations
- Hosted on Vercel, source on GitHub

## Project structure
```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── objects/     transparent PNGs for the hero (mic.png, drone.png, ...)
    ├── collage/     the five About photos
    ├── projects/    one photo per project
    └── resume.pdf
```

## Run locally
1. Download or clone the repo.
2. Open `index.html` in your browser, or use the VS Code **Live Server** extension for auto-refresh.

## Customise
- **Colours and fonts:** the variables at the top of `style.css`
- **Dark mode colours:** the `:root[data-theme="dark"]` block in `style.css`
- **Hero object sizes:** change `--s` in the `.stage` rule (1 is normal, 0.8 is smaller)
- **Your photos:** drop files into `assets/objects/`, `assets/collage/` and `assets/projects/` using the file names already in `index.html`
- **Text and links:** edit the placeholders in `index.html`

## Deploy
Push the files to GitHub, then import the repo into [Vercel](https://vercel.com). No build settings are needed. Every commit redeploys the site.

## How this was made
I built this with Claude as a thinking partner. It helped with layout, wording and much of the code, and I directed, debugged, edited and checked every part. Personal details are kept minimal for privacy, and every claim on the site is mine to stand behind.

## Credits
- Fonts from Google Fonts
- Illustrations drawn as inline SVG and custom assets by me, with help from Claude

## Contact
Ahsanath Taqdees ·  https://www.linkedin.com/in/ahsanath-taqdees/ · ahsanath006@gmail.com

## License
[Choose one, for example MIT. Add a LICENSE file in the repo.]