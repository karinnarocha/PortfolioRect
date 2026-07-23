import styles from "./GoogleMaps.module.css";

export default function GoogleMaps() {
  return (
    <section className={styles.map} id="map">
      <div className="inner">
        <div className={styles.heading}>
          <span className="eyebrow">find us</span>
          <h2 className="sectionTitle">Where We Meet</h2>
        </div>

        <div className={styles.frame}>
          <iframe
            title="Class location map"
            src="https://www.google.com/maps?q=McCarren+Park+Field+Brooklyn&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          className={styles.directionsLink}
          href="https://maps.google.com/?q=Prospect+Park+Long+Meadow+Brooklyn"
          target="_blank"
          rel="noreferrer"
        >
          Get directions &rarr;
        </a>
      </div>
    </section>
  );
}
