// Global CSS for cross-cutting concerns only: scroll-reveal, the GlowBox
// behaviour (used by multiple sections), nav link hover, and reduced-motion.
// Section-specific styling lives in each section's own .module.css file.
export default function GlobalStyles() {
  return (
    <style>{`
      html{scroll-behavior:smooth}
      a{color:inherit;text-decoration:none}

      /* scroll reveal */
      [data-reveal]{opacity:0;transform:translateY(30px);transition:opacity .7s,transform .7s}
      [data-reveal][data-in="true"]{opacity:1;transform:none}

      /* GlowBox: pop-in + cursor-tracked dark glow (clipped to the box) */
      .kr-glowbox{opacity:0;transform:translateY(34px) scale(.96);
        transition:opacity .6s cubic-bezier(.2,.8,.2,1),transform .6s cubic-bezier(.2,.8,.2,1)}
      .kr-glowbox[data-in="true"]{opacity:1;transform:none;animation:krpop .6s cubic-bezier(.2,.8,.2,1)}
      @keyframes krpop{0%{transform:translateY(34px) scale(.96)}60%{transform:translateY(-4px) scale(1.01)}100%{transform:none}}
      .kr-glowbox-glow{position:absolute;inset:0;z-index:1;pointer-events:none;border-radius:inherit;
        opacity:var(--bo,0);transition:opacity .35s;
        background:radial-gradient(circle 220px at var(--bx,50%) var(--by,50%),
          rgba(0,0,0,.55), rgba(0,0,0,.28) 45%, transparent 75%)}
      .kr-glowbox-inner{position:relative;z-index:2;height:100%}

      /* nav */
      .kr-navlink{opacity:.7;transition:opacity .2s}.kr-navlink:hover{opacity:1}

      @media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
      @media(max-width:820px){ .kr-navlinks{display:none!important} }
    `}</style>
  );
}
