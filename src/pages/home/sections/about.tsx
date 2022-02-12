import { Button } from "../../../components";
import { animateToPortfolioSection } from "./sections";

import "./sections.css";

export function AboutSection() {
  return (
    <article id="about-section" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1em" }}>
      <header>
        <h2>About me?</h2>
      </header>
      <div className="article-content" style={{ display: "grid", maxWidth: "50vw", justifySelf: "center" }}>
        <div>
          <ul>
            <li>
              I'm currently a <b>Full stack Web Developer.</b> <br />
            </li>
            <ul>
              <li>
                Coding is one of the things I'm good at. <br />
                <li>
                  And creative design as you can see from this portfolio website, isn't really my area. ( I'm still currently learning
                  design )
                </li>
              </li>
            </ul>
            <li>
              <b>I'm still figuring myself out</b>
            </li>
            <li>
              <b>TODO: update this section</b>
            </li>
          </ul>
        </div>
        <Button style={{ placeSelf: "start" }} onClick={animateToPortfolioSection}>
          Check out my work...
        </Button>
      </div>
    </article>
  );
}
