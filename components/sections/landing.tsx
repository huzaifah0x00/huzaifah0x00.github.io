import { Button, Spacing } from "..";
import { animateToContactSection, animateToPortfolioSection } from "./sections";

export function LandingSection() {
  return (
    <article id="landing-section" style={{ textAlign: "center" }}>
      <h1>Hi,</h1>
      <h2 className="less-margin">I&lsquo;m Huzaifah</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <h3 style={{ margin: "0" }} className="no-wrap">
          I am a
        </h3>
        <h6 style={{ marginTop: "0", textAlign: "start" }}>
          <div className="no-wrap">Software Engineer,</div>
          <div className="no-wrap">Full-stack web developer,</div>
          <div className="no-wrap">Mobile developer.</div>
        </h6>
      </div>

      <Spacing />
      <div>
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
          <Button onClick={animateToPortfolioSection}>Check out my work</Button>
          <Button onClick={animateToContactSection}>Contact</Button>
        </div>
      </div>
    </article>
  );
}
