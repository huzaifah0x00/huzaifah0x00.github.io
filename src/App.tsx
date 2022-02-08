import "./App.css";
import "animate.css";
import { Button, Spacing } from "./components";
import { SyntheticEvent, useState } from "react";

import { AboutModal, ContactModal } from "./Modals";

export default function App() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const toggleAboutModal = () => setAboutModalOpen(!aboutModalOpen);
  const togglePortfolioModal = () => setPortfolioModalOpen(!portfolioModalOpen);
  const toggleContactModal = () => setContactModalOpen(!contactModalOpen);

  const [pointerShadowPosition, setPointerShadowPosition] = useState({ left: 0, top: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const shadow = document.getElementById("pointer-shadow") as HTMLDivElement;
    const { height, width } = shadow.getBoundingClientRect();

    setPointerShadowPosition({ left: clientX - width / 2, top: clientY - height / 2 });
  };

  return (
    <main className="App" onMouseMove={handleMouseMove}>
      <header className="center">WIP: This site is a work in progress, some of the information may not be accurate</header>
      <div className="about animate__animated animate__fadeIn">
        <h1 className="animate__animated animate__fadeInUp less-margin">Hi</h1>
        <h1 className="less-margin">
          <span className="animate__animated animate__fadeInUp animate__delay-1s">I'm Huzaifah</span>
          <span className="animate__animated animate__fadeInRight animate__delay-2s">.</span>
        </h1>
        <Spacing />
        <div className="animate__animated animate__fadeInUp animate__delay-2s">Thanks for dropping by</div>
        <Spacing />
        <div className="animate__animated animate__fadeInUp animate__delay-3s">Get to know me:</div>
        <Spacing small />
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div style={{ display: "flex", gap: "0.5em" }}>
            <Button onClick={toggleAboutModal}>About me</Button>
            <Button>My previous work</Button>
            <Button onClick={toggleContactModal}>Contact</Button>
          </div>
          <AboutModal isOpen={aboutModalOpen} onRequestClose={toggleAboutModal}></AboutModal>
          <ContactModal isOpen={contactModalOpen} onRequestClose={toggleContactModal}></ContactModal>
        </div>
      </div>

      <footer className="animate__animated animate__fadeInUp animate__delay-3s">
        <div style={{ display: "flex", gap: "0.5em", fontWeight: "bold" }}>
          <a target="_blank" href="https://Linkedin.com/in/huzaifah-asif">
            LinkedIn
          </a>
          |
          <a target="_blank" href="https://github.com/huzaifah0x00">
            Github
          </a>
        </div>
      </footer>
      <div id="pointer-shadow" style={{ ...pointerShadowPosition }}>
        <div id="pointer-circle"></div>
      </div>
    </main>
  );
}
