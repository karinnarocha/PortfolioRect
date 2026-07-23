import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className="inner">
        <div className={styles.box}>
          <span className="eyebrow">questions? just ask</span>
          <h2 className="sectionTitle">Reach Out</h2>
          <p className={styles.subtext}>
            Not sure if this class is for you, need to bring a group, or
            just want to say hi before Saturday? Send a message,
            I read every one.
          </p>

          <div className={styles.actions}>

            <a className={styles.ctaPrimary}
              href="mailto:karinna.rocha2@gmail.com"
            >
              Email Me
            </a>

            <a className={styles.ctaSecondary}
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Message on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}