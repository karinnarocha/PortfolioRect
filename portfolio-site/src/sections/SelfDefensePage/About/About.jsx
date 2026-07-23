import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="inner">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <img
              className={styles.image}
              src="/images/about-photo.jpg"
              alt="Karinna teaching a self defense class in the park"
            />
          </div>

          <div className={styles.textCol}>
            <span className="eyebrow">hi, I&apos;m Karinna</span>
            <h2 className="sectionTitle">About Me</h2>
            <p className={styles.paragraph}>
              I&apos;m a brown belt Brazilian Jiu-Jitsu instructor based
              here in Brooklyn. I started teaching free self
              defense sessions in the park because I wanted every woman in
              this city to feel what I felt the first time I learned to
              defend myself, safe, strong, and sure of what my body
              can do.
            </p>
            <p className={styles.paragraph}>
              This isn&apos;t a one-time workshop. It&apos;s a community.
              Every session mixes real self defense technique with strength,
              movement, and the kind of confidence that stays with you long
              after you leave the park.
            </p>
            <p className={styles.signature}>&mdash; Karinna Rocha</p>
          </div>
        </div>
      </div>
    </section>
  );
}
