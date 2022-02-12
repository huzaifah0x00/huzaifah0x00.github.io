import { Carousel } from "../../../components";
import contactPlus1 from "../../../portfolio-content/contactplus/Reports.png";
import contactPlus2 from "../../../portfolio-content/contactplus/Department.png";
import contactPlus3 from "../../../portfolio-content/contactplus/robot.png";
import contactPlus4 from "../../../portfolio-content/contactplus/chat.png";
import contactPlus5 from "../../../portfolio-content/contactplus/close ticket chat.png";

import vgpro1 from "../../../portfolio-content/vgpro/vgpro1.png";
import vgpro2 from "../../../portfolio-content/vgpro/vgpro2.jpg";
import vgpro3 from "../../../portfolio-content/vgpro/vgpro3.jpg";
import vgpro4 from "../../../portfolio-content/vgpro/vgpro4.jpg";

import "./sections.css";

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
              <span>Technologies:</span>
              <ul>
                <li>Angular</li>
                <li>NestJS</li>
                <li>MongoDB</li>
                <li>WhatsApp</li>
              </ul>
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
            <img src={contactPlus1} alt="ContactPlus-portfolio" />
            <img src={contactPlus2} alt="ContactPlus-portfolio" />
            <img src={contactPlus3} alt="ContactPlus-portfolio" />
            <img src={contactPlus4} alt="ContactPlus-portfolio" />
            <img src={contactPlus5} alt="ContactPlus-portfolio" />
          </Carousel>
        </div>

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
              <img height="400px" src={vgpro1} alt="vgpro-portfolio" />
            </div>
            <div style={{ borderRadius: "0.5em", overflow: "hidden" }}>
              <img height="400px" src={vgpro2} alt="vgpro-portfolio" />
            </div>
            <div style={{ borderRadius: "0.5em", overflow: "hidden" }}>
              <img height="400px" src={vgpro3} alt="vgpro-portfolio" />
            </div>
            <div style={{ borderRadius: "0.5em", overflow: "hidden" }}>
              <img height="400px" src={vgpro4} alt="vgpro-portfolio" />
            </div>
          </Carousel>
        </div>
        <div className="divider"></div>
      </div>
    </article>
  );
}
