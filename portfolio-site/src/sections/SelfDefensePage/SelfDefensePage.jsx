import styles from "./SelfDefensePage.module.css";

import Hero from "./Hero/Hero";
import About from "./About/About";
import Benefits from "./Benefits/Benefits";
import Gallery from "./Gallery/Gallery";
import Testimonials from "./Testimonials/Testimonials";
import ClassInfo from "./ClassInfo/ClassInfo";
import GoogleMaps from "./GoogleMaps/GoogleMaps";
import Register from "./Register/Register";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function SelfDefensePage() {
  return (
    <div className={styles.page}>
      <Hero />
      <About />
      <Benefits />
      <Gallery />
      <Testimonials />
      <ClassInfo />
      <GoogleMaps />
      <Register />
      <Contact />
      <Footer />
    </div>
  );
}
