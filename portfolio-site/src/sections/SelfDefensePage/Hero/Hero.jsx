import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.photoWrap}>
          <img
            className={styles.photo}
            src="/images/instructor-photo.jpg"
            alt="Karinna Rocha, self defense instructor"
          />
          <span className={styles.photoRing} aria-hidden="true" />
        </div>

        <p className={styles.stamp}>free · in the park</p>

        <h1 className={styles.headline}>
          Women&apos;s <span className={styles.script}>Self Defense</span>
        </h1>

        <p className={styles.tagline}>
          Learn.&nbsp; Protect.&nbsp;
          <span className={styles.underlineWord}>
            Empower.
            <svg
              className={styles.scribble}
              viewBox="0 0 220 24"
              aria-hidden="true"
            >
              <path
                d="M4 14 C 40 22, 80 4, 120 12 S 190 20, 216 8"
                fill="none"
                stroke="var(--pink)"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </p>

        <div className={styles.ctaRow}>
          <a href="#register" className={styles.ctaPrimary}>Register Now</a>
          <a className={styles.ctaSecondary} href="mailto:karinna.rocha2@gmail.com">Email Me</a>
        </div>

        <div className={styles.social}>
          <a
            href="https://instagram.com/oss_everyday"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" width="22" height="22">
              <rect
                x="2.5"
                y="2.5"
                width="19"
                height="19"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="4.3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://facebook.com/oss_everyday"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path
                d="M14 9h3V5.6c-.5-.07-2-.2-3.3-.2-3.3 0-5 2-5 5.4V13H5.7v3.8H8.7V22h4V16.8h3l.5-3.8h-3.5v-2.3c0-1 .3-1.7 1.8-1.7Z"
                fill="currentColor"
              />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
}
