import "animate.css";

import { LandingSection } from "./sections/landing";
import { ContactSection } from "./sections/contact";
import { PortfolioSection } from "./sections/portfolio";

import "./home.css";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <>
      <main className="Home">
        <div style={{ overflow: "auto", scrollSnapType: "y proximity" }}>
          <LandingSection />
          <PortfolioSection />
          <ContactSection />
        </div>
        <Footer></Footer>
      </main>
      <div style={{ display: "none", height: "100vh", placeItems: "center" }} className="not-responsive-message">
        <h1 style={{ textAlign: "center" }}>This website is not viewable on small screens.</h1>
      </div>
    </>
  );
}
