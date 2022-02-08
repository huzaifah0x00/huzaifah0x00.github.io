import { Button, Spacing } from "./components";
import "./Modals.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
export function AboutModal(props: { isOpen: boolean; onRequestClose: () => void }) {
  return (
    <Modal shouldCloseOnEsc shouldCloseOnOverlayClick closeTimeoutMS={500} isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
      <main className="About">
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h2 className="less-margin">Who Am I?</h2>
          <div style={{ display: "grid", placeItems: "center" }}>
            <button onClick={props.onRequestClose}>close</button>
          </div>
        </header>
        <div style={{ overflow: "auto" }}>
          <p>
            With about 5 years of experience, I am currently a
            <span>
              <b> Full stack developer</b>.
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
          <Button onClick={props.onRequestClose} style={{ alignSelf: "end", justifySelf: "center" }}>
            Okay
          </Button>
        </footer>
      </main>
    </Modal>
  );
}

export function ContactModal(props: { isOpen: boolean; onRequestClose: () => void }) {
  return (
    <Modal shouldCloseOnEsc shouldCloseOnOverlayClick closeTimeoutMS={500} isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
      <main className="Contact">
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h2 className="less-margin">Let's get in touch</h2>
          <div style={{ display: "grid", placeItems: "center" }}>
            <button onClick={props.onRequestClose}>close</button>
          </div>
        </header>
        <div style={{ placeSelf: "center" }}>
          <div>
            Phone: <a href="tel:+923021435068">+92 3021435068</a>
          </div>
          <Spacing></Spacing>
          <div>
            Email: <a href="mailto:huzaifah.asif.b@gmail.com">huzaifah.asif.b@gmail.com</a>
          </div>
        </div>
        <footer>
          <Button onClick={props.onRequestClose} style={{ alignSelf: "end", justifySelf: "center" }}>
            Nevermind.
          </Button>
        </footer>
      </main>
    </Modal>
  );
}
