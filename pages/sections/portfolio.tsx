import React, { useEffect, useRef, useState } from "react";

import { Carousel } from "../../components";

import contactPlus4 from "../../public/portfolio-content/contactplus/chat.png";
import contactPlus5 from "../../public/portfolio-content/contactplus/close ticket chat.png";
import contactPlus2 from "../../public/portfolio-content/contactplus/Department.png";
import contactPlus1 from "../../public/portfolio-content/contactplus/Reports.png";
import contactPlus3 from "../../public/portfolio-content/contactplus/robot.png";
import vgpro1 from "../../public/portfolio-content/vgpro/vgpro1.png";
import vgpro2 from "../../public/portfolio-content/vgpro/vgpro2.jpg";
import vgpro3 from "../../public/portfolio-content/vgpro/vgpro3.jpg";
import vgpro4 from "../../public/portfolio-content/vgpro/vgpro4.jpg";

import Image from "next/image";

export function PortfolioSection() {
  const [activeProject, setActiveProject] = useState("");

  return (
    <article id="portfolio-section" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1rem" }}>
      <header style={{ display: "block" }}>
        <h2>Projects</h2>
        <h5>
          <a className={activeProject === "contactplus" ? "active" : ""} href="#project-contactplus">
            ContactPlus+
          </a>
        </h5>
        <h5>
          <a className={activeProject === "vgpro" ? "active" : ""} href="#project-vgpro">
            VGPro
          </a>
        </h5>
      </header>

      <div style={{ display: "grid", gap: "1rem" }}>
        <ContactPlus onVisibile={() => setActiveProject("contactplus")}></ContactPlus>
        <div className="divider"></div>
        <VGPRO onVisible={() => setActiveProject("vgpro")}></VGPRO> <div className="divider"></div>
      </div>
    </article>
  );
}

function ContactPlus(props: { onVisibile: (visible: boolean) => void }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              props.onVisibile(true);
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  });

  return (
    <section ref={ref} id="project-contactplus" className="project-section">
      <div className="project-description">
        <p>
          <b>ContactPlus+</b> is a customer support software written for a Services provider company, enabling their team to provide help
          desk support for their customers using WhatsApp as a medium.
        </p>
        <div>
          <span>Technologies:</span>
          <ul>
            <li>Angular + Material</li>
            <li>NestJS + MongoDB</li>
            <li>WhatsApp API</li>
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
        <Image src={contactPlus1} alt="ContactPlus-portfolio" />
        <Image src={contactPlus2} alt="ContactPlus-portfolio" />
        <Image src={contactPlus3} alt="ContactPlus-portfolio" />
        <Image src={contactPlus4} alt="ContactPlus-portfolio" />
        <Image src={contactPlus5} alt="ContactPlus-portfolio" />
      </Carousel>
    </section>
  );
}

function VGPRO(props: { onVisible: (visible: boolean) => void }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              props.onVisible(true);
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  });

  return (
    <section ref={ref} id="project-vgpro" className="project-section">
      <div className="project-description">
        <p>
          <b>VGPro</b> is a company based in France that specializes in periodic general verification of Heavy Machinery and Equipment. The
          company aims to minimize the risk of accidents by regularly checking their clients&apos; work equipment including heavy machinery.
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
        <div style={{ borderRadius: "0.5rem", overflow: "hidden" }}>
          <Image width={310} height={400} src={vgpro1} alt="vgpro-portfolio" />
        </div>
        <div style={{ borderRadius: "0.5rem", overflow: "hidden" }}>
          <Image width={200} height={400} src={vgpro2} alt="vgpro-portfolio" />
        </div>
        <div style={{ borderRadius: "0.5rem", overflow: "hidden" }}>
          <Image width={200} height={400} src={vgpro3} alt="vgpro-portfolio" />
        </div>
        <div style={{ borderRadius: "0.5rem", overflow: "hidden" }}>
          <Image width={200} height={400} src={vgpro4} alt="vgpro-portfolio" />
        </div>
      </Carousel>
    </section>
  );
}
