import { SOCIALS } from "../../data";
import { Wrap } from "../../components/Layout";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <Wrap>
        <div data-reveal className={styles.cta}>
          Let's build<br />something{" "}
          <a href="https://www.karinnarocha.site/contact">together.</a>
        </div>
        <div className={styles.row}>
          <div>© 2026 Karinna Rocha — New York, USA</div>
          <div className={styles.socials}>
            {SOCIALS.map(([label, url]) => (
              <a key={label} href={url}>{label}</a>
            ))}
          </div>
        </div>
      </Wrap>
    </footer>
  );
}
