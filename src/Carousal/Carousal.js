import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function Carousal({ children: slides, autoSide, autoSlideInterval = 1000 }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const changeSlide = ({ target: { id = ">" } = {} } = {}) => {
    switch (id) {
      case ">":
        setActiveSlide((slide) =>
          activeSlide === slides.length - 1 ? 0 : slide + 1
        );
        break;
      case "<":
        setActiveSlide((slide) =>
          activeSlide === 0 ? slides.length - 1 : slide - 1
        );
        break;
      default:
    }
  };

  useEffect(() => {
    if (!autoSide) return;

    const timer = setInterval(changeSlide, autoSlideInterval);
    return () => clearInterval(timer);
  }, [activeSlide]);

  return (
    <div className="slider">
      <div
        className="slider_container"
        style={{ transform: `translateX(-${activeSlide * 500}px)` }}
      >
        {slides}
      </div>
      <div className="slider_navigation">
        <ChevronLeft size={30} id="<" onClick={changeSlide} />
        <ChevronRight size={30} id=">" onClick={changeSlide} />
      </div>
      <div className="slider_status">
        {slides.map((_, index) => (
          <span
            className={`slider_indicator slider_indicator--${
              index === activeSlide ? "active" : "inactive"
            }`}
            key={index}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousal;
