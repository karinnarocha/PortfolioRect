import { C } from "../theme";

// Small pill used for tech-stack tags.
export default function Chip({ children }) {
  return (
    <span style={{
      fontFamily: C.mono, fontSize: 13, padding: "8px 14px",
      border: `1px solid ${C.line}`, borderRadius: 100, color: C.paper,
    }}>
      {children}
    </span>
  );
}
