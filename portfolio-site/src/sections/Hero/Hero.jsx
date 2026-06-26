import styles from "./Hero.module.css";

/*
  Split-screen hero.
  - LEFT  = Creator  → scrolls to the #work (projects) section
  - RIGHT = Developer → links to your About Me page
  Put your two images in the public/ folder and update the two paths below.
*/

const CREATOR_IMG = "/creator.png";     // the painted / illustrated picture
const DEVELOPER_IMG = "/developer.png"; // the real photo

export default function Hero() {
  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", });
  };

  return (
    <header className={styles.hero}>
      <div className={styles.eyebrow}>Full Stack &amp; MArketing Specialist — New York</div>

      {/* LEFT — Creator */}
      <a href="#work" onClick={scrollToSection("work")} className={`${styles.side} ${styles.left}`}>
        <div className={styles.imgLayer} style={{ backgroundImage: `url(${CREATOR_IMG})` }} />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2 className={styles.label}>creator</h2>
          <span className={styles.cue}>See the work →</span>
        </div>
      </a>

      {/* RIGHT — Developer */}
      <a href="#about" onClick={scrollToSection("about")} className={`${styles.side} ${styles.right}`}>
        <div className={styles.imgLayer} style={{ backgroundImage: `url(${DEVELOPER_IMG})` }} />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2 className={styles.label}>&lt;<em>developer</em>&gt;</h2>
          <span className={styles.cue}>About me →</span>
        </div>
      </a>

      <div className={styles.seam} />
    </header>
  );
}