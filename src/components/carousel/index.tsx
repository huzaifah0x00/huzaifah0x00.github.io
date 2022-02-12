import React, { ReactNode, useRef, useState } from "react";
import "./carousel.css";

export function Carousel(props: { children: ReactNode; onChange?: (index: number) => void }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setIndex] = useState(0);

  let prevScrollLeft = 0;

  const refreshActiveIndex = () => {
    if (!carouselRef.current) {
      return 0;
    }

    const totalWidth = carouselRef.current.scrollWidth;
    const currentScrollLeft = carouselRef.current.scrollLeft;

    if (currentScrollLeft === prevScrollLeft) return;
    else prevScrollLeft = currentScrollLeft;

    const totalChildren = React.Children.count(props.children);

    const newIndex = Math.round((currentScrollLeft / totalWidth) * totalChildren);
    if (newIndex !== activeIndex) {
      setIndex(newIndex);
      props.onChange && props.onChange(newIndex);
    }
  };

  const scrollCarouselLeft = () => {
    if (!noMoreLeft()) {
      carouselRef.current?.scrollTo(carouselRef.current?.clientWidth * (activeIndex - 1), 0);
      if (props.onChange) props.onChange(activeIndex - 1);
    }
  };

  const scrollCarouselRight = () => {
    if (!noMoreRight()) {
      carouselRef.current?.scrollTo(carouselRef.current?.clientWidth * (activeIndex + 1), 0);
      if (props.onChange) props.onChange(activeIndex + 1);
    }
  };

  const noMoreLeft = () => activeIndex === 0;
  const noMoreRight = () => activeIndex + 1 === React.Children.count(props.children);

  return (
    <div className="carousel">
      <div onClick={scrollCarouselLeft} className={"arrow-container" + (noMoreLeft() ? " disabled" : "")}>
        <div className="left-arrow"></div>
      </div>
      <div ref={carouselRef} onScroll={(_) => refreshActiveIndex()} className="carousel-content">
        {React.Children.map(props.children, (child, index) => {
          return (
            <div className={`carousel-item ${activeIndex === index ? "active" : ""}`} key={index}>
              {child}
            </div>
          );
        })}
      </div>
      <div onClick={scrollCarouselRight} className={"arrow-container" + (noMoreRight() ? " disabled" : "")}>
        <div className="right-arrow"></div>
      </div>
    </div>
  );
}
