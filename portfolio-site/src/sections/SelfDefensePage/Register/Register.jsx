import styles from "./Register.module.css";

// Swap the src below for your Jotform registration form embed URL.
const REGISTER_FORM_URL = "https://form.jotform.com/your-registration-form-id";

export default function Register() {
  return (
    <section className={styles.register} id="register">
      <div className="inner">
        <div className={styles.heading}>
          <span className="eyebrow">save your spot</span>
          <h2 className="sectionTitle">Register</h2>
          <p className={styles.subtext}>
            Classes are free, but space in the park fills up. Register below
            so we know to expect you. <br></br>Every participant needs a signed liability waiver on file before joining a session. It only takes a minute.
          </p>
        </div>

        <div className={styles.formCard}>
          <iframe
            title="Registration form"
            src={REGISTER_FORM_URL}
            className={styles.formFrame}
            loading="lazy"
          />
        </div>

        <a
          className={styles.fallbackLink}
          href={REGISTER_FORM_URL}
          target="_blank"
          rel="noreferrer"
        >
          Having trouble with the form? Open it in a new tab &rarr;
        </a>
      </div>
    </section>
  );
}
