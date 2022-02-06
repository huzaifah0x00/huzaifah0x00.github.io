import "./App.css";
import "animate.css";
import { Button, Spacing } from "./components";
import { useState } from "react";

import { AboutModalContent } from "./About";
import Modal from "react-modal";

export default function App() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const toggleAboutModal = () => setAboutModalOpen(!aboutModalOpen);

  return (
    <main className="App">
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
            <Button>Contact</Button>
          </div>
          <Modal shouldCloseOnEsc shouldCloseOnOverlayClick closeTimeoutMS={500} isOpen={aboutModalOpen} onRequestClose={toggleAboutModal}>
            <AboutModalContent closeModal={toggleAboutModal}></AboutModalContent>
          </Modal>
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
    </main>
  );
}

Modal.setAppElement("#root");
