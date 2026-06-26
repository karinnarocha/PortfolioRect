# Karinna Rocha — Portfolio (ready-to-run Vite project)

Each section now lives in its own folder with its JSX and a scoped CSS module.

## Run it

1. Open this folder in VS Code (File → Open Folder → `portfolio-site`).
2. Terminal → New Terminal, then:

   ```
   npm install
   ```
   (first time only — downloads React and Vite)

3. Start it:

   ```
   npm run dev
   ```

4. Open the printed link, usually http://localhost:5173

After the first install, you only need `npm run dev` to start again.
Stop the server with Ctrl + C.

---

## Structure

```
portfolio-site/
├── index.html                 ← fonts loaded here
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx               ← entry point
    ├── index.css              ← reset + color CSS variables
    ├── App.jsx                ← composes all sections
    ├── theme.js               ← color/font tokens (for inline styles)
    ├── data.js                ← ALL text, projects, numbers, links
    ├── hooks/
    │   └── useReveal.js
    ├── components/            ← shared, reused across sections
    │   ├── GlobalStyles.jsx   ← cross-cutting CSS (GlowBox, reveal, nav)
    │   ├── CursorGlow.jsx
    │   ├── GlowBox.jsx
    │   ├── Chip.jsx
    │   ├── Layout.jsx
    │   └── Navbar.jsx
    └── sections/              ← one FOLDER per section
        ├── Hero/
        │   ├── Hero.jsx
        │   └── Hero.module.css
        ├── Metrics/
        │   ├── Metrics.jsx
        │   └── Metrics.module.css
        ├── AISection/
        │   ├── AISection.jsx
        │   └── AISection.module.css
        ├── Work/
        │   ├── Work.jsx
        │   └── Work.module.css
        ├── Marketing/
        │   ├── Marketing.jsx
        │   └── Marketing.module.css
        └── Footer/
            ├── Footer.jsx
            └── Footer.module.css
```

## Where to edit what

- **Text, projects, numbers, links** → `src/data.js`
- **A section's styling** → that section's `.module.css` (e.g. `sections/Hero/Hero.module.css`)
- **Colors** → set in BOTH `src/index.css` (CSS variables, used by the .module.css files)
  and `src/theme.js` (used by remaining inline styles)
- **Shared animations / GlowBox / nav CSS** → `src/components/GlobalStyles.jsx`

## CSS Modules — how it works

Inside a `.module.css` file you write normal class names (`.hero`, `.title`).
In the JSX you import them: `import styles from "./Hero.module.css"` and apply
with `className={styles.hero}`. Vite scopes the names automatically so two
sections can both have a `.title` class with no conflict.

## Still to fill in

Replace every `XX`, `+XX%`, `XXk`, and the `[bracketed]` AI sentence with your
real numbers — mostly in `src/data.js`; the AI paragraph is in
`src/sections/AISection/AISection.jsx`.
