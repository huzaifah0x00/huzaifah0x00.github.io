import { Spacing } from "../../../components";
import "./sections.css";

export function ContactSection() {
  return (
    <article id="contact-section" style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
      <header className="project-header">
        <h2>Let's get in touch</h2>
      </header>
      <div className="article-content" style={{ display: "grid", placeItems: "center", placeSelf: "center" }}>
        <div>
          Phone: <a href="tel:+923021435068">+92 3021435068</a>
        </div>
        <Spacing></Spacing>
        <div>
          Email: <a href="mailto:huzaifah.asif.b@gmail.com">huzaifah.asif.b@gmail.com</a>
        </div>
      </div>
    </article>
  );
}
