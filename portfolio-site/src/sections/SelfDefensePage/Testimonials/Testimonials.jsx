import styles from "./Testimonials.module.css";

const quotes = [
  {
    text: "I came the first time out of curiosity and stayed because I've never felt stronger. Karinna makes you feel safe while she pushes you to actually learn.",
    name: "Alina M.",
  },
  {
    text: "This is the only free class I've found that treats self defense as seriously as a real gym would. I look forward to it every week.",
    name: "Priya S.",
  },
  {
    text: "I brought my daughter and now we both go. It's become our thing, and I finally feel like I know what to do if something happens.",
    name: "Renata C.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="inner">
        <div className={styles.heading}>
          <span className="eyebrow">what they say</span>
          <h2 className="sectionTitle">Testimonials</h2>
        </div>

        <div className={styles.grid}>
          {quotes.map((q) => (
            <figure className={styles.card} key={q.name}>
              <span className={styles.mark} aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className={styles.text}>{q.text}</blockquote>
              <figcaption className={styles.name}>{q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
