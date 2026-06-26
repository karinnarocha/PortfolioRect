import { BrowserRouter, Routes, Route } from "react-router-dom";
import { C } from "./theme";
import GlobalStyles from "./components/GlobalStyles";
import CursorGlow from "./components/CursorGlow";
import Home from "./Home";
import CaseStudy from "./sections/CaseStudy/CaseStudy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/work/:slug"
          element={
            <div
              style={{
                background: C.ink,
                color: C.paper,
                fontFamily: C.sans,
                minHeight: "100vh",
                position: "relative",
              }}
            >
              <GlobalStyles />
              <CursorGlow />
              <CaseStudy />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}