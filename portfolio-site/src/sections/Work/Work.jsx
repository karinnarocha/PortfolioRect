import { PROJECTS } from "../../data";
import { Section } from "../../components/Layout";
import GlowBox from "../../components/GlowBox";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <Section id="work" num="02" title="Selected work">
      <div className={styles.grid}>
        {PROJECTS.map((p) => (
          <GlowBox
            as="a"
            key={p.title}
            className={styles.card}
            innerClassName={styles.cardInner}
            href={p.href}
          >
            <div className={styles.shot}>
              <img src={p.img} alt={p.title} />
            </div>
            <div className={styles.body}>
              <div className={styles.tag}>{p.tag}</div>
              <h4 className={styles.title}>{p.title}</h4>
              <div className={styles.meta}>{p.meta}</div>
              <div className={styles.metric}>
                <span>{p.left}</span>
                <span>{p.right}</span>
              </div>
            </div>
          </GlowBox>
        ))}
      </div>
    </Section>
  );
}
