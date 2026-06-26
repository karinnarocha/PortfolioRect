import { useRef } from "react";

// Reusable container that (1) pops in when scrolled into view and (2) shows a
// dark glow following the cursor while hovering. The glow sits BEHIND content
// (z-index) and is clipped to the box (overflow + inherited radius).
//
// Props:
//   as              - element tag, e.g. "a" for a linked card (default "div")
//   style           - inline styles for the outer box
//   className       - extra class(es) for the outer box (e.g. a CSS module class)
//   innerStyle      - inline styles for the content layer (grid/flex layouts)
//   innerClassName  - extra class(es) for the content layer
export default function GlowBox({
  as = "div",
  className = "",
  style = {},
  innerStyle = {},
  innerClassName = "",
  children,
  ...rest
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--bx", e.clientX - r.left + "px");
    el.style.setProperty("--by", e.clientY - r.top + "px");
    el.style.setProperty("--bo", "1");
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.setProperty("--bo", "0");
  };

  const Tag = as;
  return (
    <Tag
      ref={ref}
      data-reveal
      className={"kr-glowbox " + className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ position: "relative", overflow: "hidden", isolation: "isolate", ...style }}
      {...rest}
    >
      <span aria-hidden className="kr-glowbox-glow" />
      <div className={"kr-glowbox-inner " + innerClassName} style={innerStyle}>
        {children}
      </div>
    </Tag>
  );
}
