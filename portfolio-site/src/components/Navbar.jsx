import { C } from "../theme";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex",
      alignItems: "center", justifyContent: "space-between", padding: "20px 28px",
      mixBlendMode: "difference",
    }}>
      <div style={{ fontFamily: C.mono, fontSize: 14, fontWeight: 500 }}>
        KR<span style={{ color: C.lime }}>.</span>dev
      </div>
      <div className="kr-navlinks" style={{ display: "flex", gap: 26, fontSize: 14, fontFamily: C.mono }}>
        {NAV_LINKS.map((s) => (
          <a key={s} className="kr-navlink" href={"#" + s}>{s}</a>
        ))}
      </div>
    </nav>
  );
}
