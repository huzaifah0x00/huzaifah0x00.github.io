import "./App.css";
import "animate.css";
import { Button, Spacing } from "./components";

export default function App() {
  return (
    <main>
      <header className="center animate__animated animate__slideInDown animate__delay-3s">There is no nav bar</header>

      <div className="about animate__animated animate__fadeIn">
        <h1 className="animate__animated animate__fadeInUp less-margin">Hi</h1>
        <h1 className="less-margin">
          <span className="animate__animated animate__fadeInUp animate__delay-1s">I'm Huzaifah</span>
          <span className="animate__animated animate__fadeInRight animate__delay-2s">.</span>
        </h1>
        <Spacing />
        <div className="animate__animated animate__fadeInUp animate__delay-2s">Thanks for dropping by</div>
        <Spacing />
        <div className="animate__animated animate__fadeInUp animate__delay-3s">Here's some buttons for you:</div>
        <Spacing small />
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Button>About me</Button>
            <Button>Portfolio</Button>
            <Button>Contact</Button>
          </div>
        </div>
      </div>

      <footer className="animate__animated animate__slideInUp animate__delay-3s">
        <div>Here's some social links:</div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <b>
            <a target="_blank" href="https://Linkedin.com/in/huzaifah-asif">
              LinkedIn
            </a>
          </b>
          <b>
            <a target="_blank" href="https://github.com/huzaifah0x00">
              Github
            </a>
          </b>
        </div>
      </footer>
    </main>
  );
}
