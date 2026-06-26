import { useEffect, useRef } from "react";

// The cursor "lift" wave that softly brightens the dark background around the
// pointer, plus a static ambient glow. Updates CSS vars on a ref inside rAF so
// there is no React re-render per mouse move. Disabled on touch devices.
export default function CursorGlow() {
  const spotRef = useRef(null);

  const maskFn = `radial-gradient(circle 320px at var(--mx,50%) var(--my,50%),
      rgba(0,0,0,1) 0%,
      rgba(0,0,0,.7) 40%,
      rgba(0,0,0,.35) 62%,
      rgba(0,0,0,.12) 80%,
      rgba(0,0,0,0) 100%)`;

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    const el = spotRef.current;
    let raf = null;
    const move = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", e.clientX + "px");
        el.style.setProperty("--my", e.clientY + "px");
        el.style.opacity = "1";
        raf = null;
      });
    };
    const leave = () => { el.style.opacity = "0"; };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      {/* cursor wave layer */}
      <div ref={spotRef} aria-hidden style={{
        position: "fixed", inset: 0, zIndex: 2, pointerEvents: "none", opacity: 0,
        transition: "opacity .5s",
        background: `
          radial-gradient(circle 200px at var(--mx,50%) var(--my,50%), rgba(200,255,0,.10), transparent 75%),
          radial-gradient(circle 340px at var(--mx,50%) var(--my,50%), rgba(107,78,255,.14), rgba(255,93,59,.05) 55%, transparent 85%)`,
        WebkitMaskImage: maskFn,
        maskImage: maskFn,
      }} />

      {/* static ambient glow */}
      <div aria-hidden style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        background: `radial-gradient(600px 400px at 80% -5%, rgba(107,78,255,.30), transparent 60%),
          radial-gradient(500px 380px at 5% 30%, rgba(255,93,59,.16), transparent 60%)`,
      }} />
    </>
  );
}
