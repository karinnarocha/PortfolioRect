import { METRICS } from "../../data";
import { Wrap } from "../../components/Layout";
import GlowBox from "../../components/GlowBox";
import styles from "./Metrics.module.css";

export default function Metrics() {
  return (
    <div className={styles.strip}>
      <Wrap>
        <div className={styles.grid}>
          {METRICS.map(([n, l]) => (
            <GlowBox key={l} style={{ padding: "40px 22px", borderRadius: 16 }}>
              <div className={styles.num}>{n}</div>
              <div className={styles.label}>{l}</div>
            </GlowBox>
          ))}
        </div>
      </Wrap>
    </div>
  );
}
