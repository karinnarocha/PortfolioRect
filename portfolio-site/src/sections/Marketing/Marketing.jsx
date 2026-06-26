import { MARKETING_LIST, MARKETING_STATS } from "../../data";
import { Section } from "../../components/Layout";
import GlowBox from "../../components/GlowBox";
import styles from "./Marketing.module.css";

export default function Marketing() {
  return (
    <Section id="marketing" num="03" title="Frontend that's built to be found">
      <div data-reveal className={styles.two}>
        <div>
          <h3 className={styles.heading}>
            I build fast, accessible front ends that rank.
          </h3>
          <p className={styles.copy}>
            Good UI isn't enough if no one finds it. I build with SEO in mind from
            the start — semantic HTML, performance, Core Web Vitals, and accessibility —
            so the sites I ship load fast, rank well, and convert.
          </p>
          <ul className={styles.list}>
            {MARKETING_LIST.map(([k, v]) => (
              <li key={k}>
                <span className={styles.key}>{k}</span>
                {v}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.tiles}>
          {MARKETING_STATS.map(([big, sm, lime]) => (
            <GlowBox key={sm} className={styles.tile}>
              <div className={`${styles.big} ${lime ? styles.bigLime : ""}`}>{big}</div>
              <div className={styles.small}>{sm}</div>
            </GlowBox>
          ))}
        </div>
      </div>
    </Section>
  );
}
