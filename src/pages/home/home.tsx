import "animate.css";

import { LandingSection } from "./sections/landing";
import { AboutSection } from "./sections/about";
import { ContactSection } from "./sections/contact";
import { PortfolioSection } from "./sections/portfolio";

import "./home.css";

function Footer() {
  return (
    <footer className="animate__animated animate__fadeInUp animate__delay-3s">
      <div
        style={{
          display: "flex",
          gap: "0.5em",
          fontWeight: "bold",
        }}
      >
        <a target="_blank" rel="noreferrer" href="https://Linkedin.com/in/huzaifah-asif">
          LinkedIn
        </a>
        |
        <a target="_blank" rel="noreferrer" href="https://github.com/huzaifah0x00">
          Github
        </a>
      </div>
    </footer>
  );
}

export function Home() {
  return (
    <main className="Home">
      <header className="center">WIP: This site is a work in progress, some of the information provided here may not be accurate</header>
      <div style={{ overflow: "auto", scrollSnapType: "y proximity" }}>
        <LandingSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </div>
      <Footer></Footer>
    </main>
  );
}
