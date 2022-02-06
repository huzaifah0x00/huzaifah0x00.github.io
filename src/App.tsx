import "./App.css";
import "animate.css";
import { Spacer } from "./components";

export default function App() {
  return (
    <main>
      <header></header>

      <div className="about animate__animated animate__fadeIn">
        <h1 className="animate__animated animate__fadeInUp less-margin">Hi</h1>
        <h1 className="animate__animated animate__fadeInUp animate__delay-1s less-margin">
          <span>I'm Huzaifah</span>
          <span className="animate__animated animate__fadeInRight animate__delay-2s">.</span>
        </h1>
        <div className="animate__animated animate__fadeIn animate__delay-2s">Thanks for dropping by</div>
        <Spacer />
      </div>

      <footer className="animate__animated animate__fadeIn animate__delay-2s">
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
