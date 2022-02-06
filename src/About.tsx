import { Button } from "./components";
import "./About.css";

export function AboutModalContent(props: { closeModal: () => void }) {
  return (
    <main className="About">
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 className="less-margin">About Me</h1>
        <div style={{ display: "grid", placeItems: "center" }}>
          <button onClick={props.closeModal}>close</button>
        </div>
      </header>
      <div style={{ overflow: "auto" }}>
        <p>
          With about 5 years of experience, I am currently a{" "}
          <span>
            <b>Full stack developer</b>.
          </span>
        </p>
        <p>
          I have a passion for <b>creating</b> and <b>learning</b> new things.
        </p>
        <p>And tbh I don't really know what to write here at the moment, So I'll do this later</p>
        <p>
          <b>TODO: update this section</b>
        </p>
      </div>
      <footer>
        <Button onClick={props.closeModal} style={{ alignSelf: "end", justifySelf: "center" }}>
          Okay
        </Button>
      </footer>
    </main>
  );
}
