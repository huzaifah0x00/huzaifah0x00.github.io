import React, { ReactNode, useRef, useState } from "react";
import styles from "./Carousel.module.css";

export default function Carousel(props: { children: ReactNode; onChange?: (index: number) => void }) {
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
    <div className={styles.carousel}>
      <div onClick={scrollCarouselLeft} className={styles["arrow-container"] + (noMoreLeft() ? ` ${styles.disabled}` : "")}>
        <div className={styles["left-arrow"]}></div>
      </div>
      <div ref={carouselRef} onScroll={(_) => refreshActiveIndex()} className={styles["carousel-content"]}>
        {React.Children.map(props.children, (child, index) => {
          return (
            <div className={`${styles["carousel-item"]} ${activeIndex === index ? styles.active : ""}`} key={index}>
              {child}
            </div>
          );
        })}
      </div>
      <div onClick={scrollCarouselRight} className={styles["arrow-container"] + (noMoreRight() ? ` ${styles.disabled}` : "")}>
        <div className={styles["right-arrow"]}></div>
      </div>
    </div>
  );
}
