import { C } from "../theme";

// Centered max-width container.
export function Wrap({ children }) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>
      {children}
    </div>
  );
}

// A page section with a numbered title header.
export function Section({ id, num, title, children }) {
  return (
    <section id={id} style={{ position: "relative", zIndex: 1, padding: "110px 0" }}>
      <Wrap>
        <div data-reveal style={{ display: "flex", alignItems: "baseline", gap: 18, marginBottom: 50 }}>
          <span style={{ fontFamily: C.mono, fontSize: 14, color: C.coral }}>{num}</span>
          <h2 style={{ fontFamily: C.display, fontSize: "clamp(34px,5vw,58px)", lineHeight: 1 }}>{title}</h2>
        </div>
        {children}
      </Wrap>
    </section>
  );
}
