import styles from "./Gallery.module.css";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Women practicing a wrist escape in the park" },
  { src: "/images/gallery-2.jpg", alt: "Group warm up before class" },
  { src: "/images/gallery-3.jpg", alt: "Partner drill practice" },
  { src: "/images/gallery-4.jpg", alt: "Karinna coaching one on one" },
  { src: "/images/gallery-5.jpg", alt: "Group photo after class" },
  { src: "/images/gallery-6.jpg", alt: "Striking pad drill in the park" },
];

export default function Gallery() {
  return (
    <section className={styles.gallery} id="gallery">
      <div className="inner">
        <div className={styles.heading}>
          <span className="eyebrow">from the park</span>
          <h2 className="sectionTitle">Gallery</h2>
        </div>

        <div className={styles.grid}>
          {photos.map((photo, i) => (
            <div className={styles.frame} key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
