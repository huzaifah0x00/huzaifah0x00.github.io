import { Button, Spacing } from "../../components";
import "./Sections.css";

import { Carousel } from "../../components/Carousel";
import contactPlus1 from "../../portfolio content/contactplus/Reports.png";
import contactPlus2 from "../../portfolio content/contactplus/Department.png";
import contactPlus3 from "../../portfolio content/contactplus/robot.png";
import contactPlus4 from "../../portfolio content/contactplus/chat.png";
import contactPlus5 from "../../portfolio content/contactplus/close ticket chat.png";

import DeviceFrame from "../../components/DeviceFrame/DeviceFrame";

const animateToAboutSection = () => {
  const aboutSection = document.getElementById("about-section");
  aboutSection!.scrollIntoView({ behavior: "smooth" });
};

const animateToPortfolioSection = () => {
  const portfolioSection = document.getElementById("portfolio-section");
  portfolioSection!.scrollIntoView({ behavior: "smooth" });
};

const animateToContactSection = () => {
  const contactSection = document.getElementById("contact-section");
  contactSection!.scrollIntoView({ behavior: "smooth" });
};

export function LandingSection() {
  return (
    <section id="landing-section">
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
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about-section">
      <header>
        <h2 className="less-margin">About me?</h2>
      </header>
      <div style={{ overflow: "auto" }}>
        <p>
          With about 5 years of experience, I am currently a{" "}
          <span>
            <b>Full stack web developer</b>.
          </span>
        </p>
        <p>That's because I want to do everything</p>
        <p>Coding is one of the things I'm good at.</p>
        <p>And creative design, as you can see from this portfolio website isn't really my area</p>
        <p>
          <b>TODO: update this section</b>
        </p>
      </div>
      <Button onClick={animateToPortfolioSection}>Check out my work...</Button>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact-section">
      <header>
        <h2 className="less-margin">Let's get in touch</h2>
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
        <Button style={{ alignSelf: "end", justifySelf: "center" }}>Nevermind. get out of my face</Button>
      </footer>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio-section">
      <h1 className="less-margin">Projects</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", gap: "1em", placeItems: "center" }}>
        <h2 className="project-title">ContactPlus+</h2>
        <div className="project-description">
          <p>
            ContactPlus+ is a customer support software written for an IT Services provider company to enable their team to provide help
            desk support for their customers using WhatsApp as a medium.
          </p>
          <div>
            <span>Features:</span>
            <ul>
              <li>Real-time Chat using Websockets</li>
              <li>Cusomizable Chat bot for redirecting customers to their required department</li>
              <li>Ticketing System for Customer support staff and record-keeping</li>
              <li>Automated Queue management system, for assigning customers to support agents</li>
              <li>Portuguese Localization</li>
            </ul>
          </div>
        </div>
        <Carousel>
          <img src={contactPlus1} alt="ContactPlus+1" />
          <img src={contactPlus2} alt="ContactPlus+2" />
          <img src={contactPlus3} alt="ContactPlus+3" />
          <img src={contactPlus4} alt="ContactPlus+4" />
          <img src={contactPlus5} alt="ContactPlus+5" />
        </Carousel>
      </div>

      <Spacing></Spacing>
      <div className="divider"></div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", gap: "1em", placeItems: "center" }}>
        <h2 className="project-title">VGPro</h2>
        <div className="project-description">
          <p>
            VG PRO is a company based in France that specializes in periodic general verification of Heavy Machinery and Equipment. The
            company aims to minimize the risk of accidents by regularly checking their clients’ work equipment including heavy machinery.
          </p>
          <div>
            <span>Features:</span>
            <ul>
              <li>Real-time Chat using Websockets</li>
              <li>Cusomizable Chat bot for redirecting customers to their required department</li>
              <li>Ticketing System for Customer support staff and record-keeping</li>
              <li>Automated Queue management system, for assigning customers to support agents</li>
            </ul>
          </div>
        </div>
        <Carousel>
          <img src={contactPlus1} alt="ContactPlus+1" />
          <img src={contactPlus2} alt="ContactPlus+2" />
          <img src={contactPlus3} alt="ContactPlus+3" />
          <img src={contactPlus4} alt="ContactPlus+4" />
          <img src={contactPlus5} alt="ContactPlus+5" />
        </Carousel>
      </div>

      <div>VGPRO</div>
      <DeviceFrame contentImageSrc={contactPlus1}></DeviceFrame>

      <div>Turnstile Management System</div>
      <div>Giraffe :'(</div>
    </section>
  );
}
