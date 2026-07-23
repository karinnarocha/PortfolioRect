import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="inner">
        <div className={styles.top}>
          <p className={styles.logo}>
            Free Women&apos;s <span className={styles.script}>Self Defense</span>
          </p>

          <nav className={styles.nav} aria-label="Footer">
            <a href="#about">About</a>
            <a href="#benefits">Why It Matters</a>
            <a href="#class-info">Class Info</a>
            <a href="#register">Register</a>
            <a href="#waiver">Waiver</a>
          </nav>

          <div className={styles.social}>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://tiktok.com/" target="_blank" rel="noreferrer">
              TikTok
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {year} Karinna Rocha. All rights reserved.</p>
          <p>Held every Saturday, rain or shine, in Prospect Park.</p>
        </div>
      </div>
    </footer>
  );
}
