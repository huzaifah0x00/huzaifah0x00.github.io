import React, { useRef, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import Carousel from "../../carousel/Carousel";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  images: ImageProps[];
  onVisible: (visible: boolean) => void;
}

export default function Project(props: ProjectProps) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            props.onVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust this threshold according to the project's visibility requirements
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [props, props.onVisible]);

  return (
    <section ref={ref} id={props.id} className="project-section">
      <div className="project-description">
        <p>
          <b>{props.title}</b>
        </p>
        <p>{props.description}</p>
        <div>
          <span>Technologies:</span>
          <ul>
            {props.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <span>Features:</span>
          <ul>
            {props.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <Carousel>
        {props.images.map((img, index) => (
          <Image key={index} placeholder="blur" style={{ height: "auto" }} {...img} alt={img.alt} />
        ))}
      </Carousel>
    </section>
  );
}
