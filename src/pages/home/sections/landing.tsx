import { Button, Spacing } from "../../../components";
import { animateToAboutSection, animateToContactSection, animateToPortfolioSection } from "./sections";

import "./sections.css";

export function LandingSection() {
  return (
    <article id="landing-section" style={{ display: "grid", placeItems: "center", alignContent: "start" }}>
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
        <div
          style={{
            display: "flex",
            gap: "0.5em",
          }}
        >
          <Button onClick={animateToAboutSection}>About me</Button>
          <Button onClick={animateToPortfolioSection}>My previous work</Button>
          <Button onClick={animateToContactSection}>Contact</Button>
        </div>
      </div>
    </article>
  );
}
