import { useEffect } from "react";

// Adds data-in="true" to any [data-reveal] or .kr-glowbox element when it
// scrolls into view, which triggers the CSS pop-in / fade-up animation.
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal], .kr-glowbox");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.dataset.in = "true";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
