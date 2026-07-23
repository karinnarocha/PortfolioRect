import styles from "./ClassInfo.module.css";

const details = [
  { label: "When", value: "Saturdays, 10:00\u201311:15 AM" },
  { label: "Where", value: "Prospect Park \u2014 Long Meadow" },
  { label: "Cost", value: "Free, always" },
  { label: "Level", value: "All levels, no experience needed" },
];

const bring = [
  "Water bottle",
  "Comfortable clothes you can move in",
  "Sneakers or flat shoes",
  "A friend, if you'd like",
];

export default function ClassInfo() {
  return (
    <section className={styles.classInfo} id="class-info">
      <div className="inner">
        <div className={styles.heading}>
          <span className="eyebrow">the details</span>
          <h2 className="sectionTitle">Class Information</h2>
        </div>

        <div className={styles.grid}>
          <dl className={styles.detailList}>
            {details.map((d) => (
              <div className={styles.detailRow} key={d.label}>
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.bringBox}>
            <h3 className={styles.bringTitle}>What to bring</h3>
            <ul className={styles.bringList}>
              {bring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
