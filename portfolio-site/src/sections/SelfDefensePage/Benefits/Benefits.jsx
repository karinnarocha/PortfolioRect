import styles from "./Benefits.module.css";

const items = [
  {
    title: "Self Defense",
    text: "Real, practical technique you can use if you're ever caught off guard, no experience needed.",
    icon: (
      <path d="M12 3l7 3v6c0 5-3.2 8.4-7 9-3.8-.6-7-4-7-9V6l7-3Z" />
    ),
  },
  {
    title: "Self Esteem",
    text: "Knowing you can protect yourself changes how you carry yourself, on the mat and off it.",
    icon: <path d="M12 4l2.2 4.9 5.3.6-4 3.7 1.1 5.3L12 15.9l-4.6 2.6 1.1-5.3-4-3.7 5.3-.6L12 4Z" />,
  },
  {
    title: "Confidence",
    text: "Every session builds the kind of quiet confidence that shows up in every part of your life.",
    icon: <path d="M4 13a8 8 0 1 1 8 8" />,
  },
  {
    title: "Fitness",
    text: "A full-body workout disguised as training, strength, movement and mobility.",
    icon: <path d="M4 12h3M17 12h3M7 12a5 5 0 0 1 10 0" />,
  },
];

export default function Benefits() {
  return (
    <section className={styles.benefits} id="benefits">
      <div className="inner">
        <div className={styles.heading}>
          <span className="eyebrow">why this matters</span>
          <h2 className="sectionTitle">Why Learn Self Defense</h2>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div className={styles.card} key={item.title}>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--pink)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {item.icon}
              </svg>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
