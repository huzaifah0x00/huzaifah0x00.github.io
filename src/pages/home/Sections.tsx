import { Button, Spacing } from "../../components";
import "./Sections.css";

import { Carousel } from "../../components/Carousel";
import contactPlus1 from "../../portfolio content/contactplus/Reports.png";
import contactPlus2 from "../../portfolio content/contactplus/Department.png";
import contactPlus3 from "../../portfolio content/contactplus/robot.png";
import contactPlus4 from "../../portfolio content/contactplus/chat.png";
import contactPlus5 from "../../portfolio content/contactplus/close ticket chat.png";

import vgpro1 from "../../portfolio content/vgpro/vgpro1.png";
import vgpro2 from "../../portfolio content/vgpro/vgpro2.jpg";
import vgpro3 from "../../portfolio content/vgpro/vgpro3.jpg";
import vgpro4 from "../../portfolio content/vgpro/vgpro4.jpg";

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

export function AboutSection() {
  return (
    <article id="about-section" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1em" }}>
      <header>
        <h2>About me?</h2>
      </header>
      <div className="article-content" style={{ display: "grid" }}>
        <div>
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
        <Button style={{ placeSelf: "center" }} onClick={animateToPortfolioSection}>
          Check out my work...
        </Button>
      </div>
    </article>
  );
}

export function PortfolioSection() {
  return (
    <article id="portfolio-section" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1em" }}>
      <header>
        <h2>Projects</h2>
      </header>

      <div className="article-content" style={{ display: "grid" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", gap: "1em", placeItems: "center" }}>
          <header className="project-header">
            <h2>ContactPlus+</h2>
          </header>
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
            <img src={contactPlus1} alt="ContactPlus-portfolio-image" />
            <img src={contactPlus2} alt="ContactPlus-portfolio-image" />
            <img src={contactPlus3} alt="ContactPlus-portfolio-image" />
            <img src={contactPlus4} alt="ContactPlus-portfolio-image" />
            <img src={contactPlus5} alt="ContactPlus-portfolio-image" />
          </Carousel>
        </div>

        <Spacing></Spacing>
        <div className="divider"></div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", gap: "1em", placeItems: "center" }}>
          <header className="project-header">
            <h2>VGPro</h2>
          </header>
          <div className="project-description">
            <p>
              VG PRO is a company based in France that specializes in periodic general verification of Heavy Machinery and Equipment. The
              company aims to minimize the risk of accidents by regularly checking their clients' work equipment including heavy machinery.
            </p>
            <p>This app allows their technicians to submit a full report using forms and pictures of the equipment.</p>
            <div>
              <span>Technologies:</span>
              <ul>
                <li>Flutter</li>
                <li>Firebase ( Firestore, Push Notifications )</li>
              </ul>
              <span>Features:</span>
              <ul>
                <li>Push Notifications: Admin and Technicians get notifications about updates to jobs ( new job, job completed )</li>
                <li>Dynamic forms UI based on google forms json format</li>
              </ul>
            </div>
          </div>
          <Carousel>
            <div style={{ borderRadius: "0.5em", overflow: "hidden" }}>
              <img height="400px" src={vgpro1} alt="vgpro-portfolio-image" />
            </div>
            <div style={{ borderRadius: "0.5em", overflow: "hidden" }}>
              <img height="400px" src={vgpro2} alt="vgpro-portfolio-image" />
            </div>
            <div style={{ borderRadius: "0.5em", overflow: "hidden" }}>
              <img height="400px" src={vgpro3} alt="vgpro-portfolio-image" />
            </div>
            <div style={{ borderRadius: "0.5em", overflow: "hidden" }}>
              <img height="400px" src={vgpro4} alt="vgpro-portfolio-image" />
            </div>
          </Carousel>
        </div>

        <div>Turnstile Management System</div>
        <div>Giraffe :'(</div>
      </div>
    </article>
  );
}

export function ContactSection() {
  return (
    <article id="contact-section">
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
      <footer>Footer</footer>
    </article>
  );
}
