import { C } from "./theme";
import { useReveal } from "./hooks/useReveal";
import GlobalStyles from "./components/GlobalStyles";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero/Hero";
import Metrics from "./sections/Metrics/Metrics";
import AISection from "./sections/AISection/AISection";
import Work from "./sections/Work/Work";
import Marketing from "./sections/Marketing/Marketing";
import Footer from "./sections/Footer/Footer";
import About from "./sections/About Page/About";

/*
  Karinna Rocha — Portfolio
  ---------------------------------------------------------
  Each section lives in its own folder under src/sections/, with a
  .jsx file and a scoped .module.css file beside it.

  Edit copy / numbers in src/data.js. Edit the color palette in
  src/theme.js AND the matching CSS variables in src/index.css.
  Replace every XX / +XX% / [bracketed] placeholder with real values.
*/
export default function Home() {
    useReveal();

    return (
        <div
            style={{
                background: C.ink,
                color: C.paper,
                fontFamily: C.sans,
                lineHeight: 1.5,
                minHeight: "100vh",
                overflowX: "hidden",
                position: "relative",
            }}
        >
            <GlobalStyles />
            <CursorGlow />
            <Navbar />
            <Hero />
            <Metrics />
            <AISection />
            <Work />
            <Marketing />
            <About />
            <Footer />

        </div>
    );
}
