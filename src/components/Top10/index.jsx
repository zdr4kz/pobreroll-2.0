"use client";

import "./top10.css";
import { shows} from "@/data/shows";

const top10 = shows.slice(8, 18);
import { useRef, useState, useEffect } from "react";

export default function Top10Carousel() {
  const carouselRef = useRef(null);
  const [isDown, setIsDown]               = useState(false);
  const [startX, setStartX]               = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [canScrollLeft, setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = carouselRef.current;
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftStart(carouselRef.current.scrollLeft);
  };
  const stopDragging = () => setIsDown(false);
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    carouselRef.current.scrollLeft = scrollLeftStart - (x - startX) * 1.5;
  };
  const scroll = (dir) =>
    carouselRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });

  return (
    <>       

      <section className="t10-section">
        <div className="t10-header">
          <h2>Top 10</h2>
          <span>de hoje</span>
        </div>

        <div className="t10-wrapper">
          {canScrollLeft && (
            <button className="t10-arrow left" onClick={() => scroll("left")}>‹</button>
          )}

          <div
            className="t10-track"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onMouseMove={handleMouseMove}
          >
            {top10.map((card, i) => (
              <div className="t10-card" key={card.id}>
                <span className="t10-rank">{i + 1}</span>
                <div className="t10-poster">
                  <img src={card.image} alt={card.title} draggable={false} />
                  <div className="t10-overlay">
                    <p className="t10-overlay-title">{card.title}</p>
                    <p className="t10-overlay-genre">{card.type}</p>
                  </div>
                  <div className="t10-play">
                    <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button className="t10-arrow right" onClick={() => scroll("right")}>›</button>
          )}
        </div>
      </section>
    </>
  );
}