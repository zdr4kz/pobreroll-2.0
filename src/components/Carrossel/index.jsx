"use client";

import { shows } from "@/data/shows";
import { useRef, useState, useEffect } from "react";
import "./carousel.css";

export default function DragCarousel() {
  const carouselRef = useRef(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // verifica se pode scrollar
  const updateScrollButtons = () => {
    const el = carouselRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft < el.scrollWidth - el.clientWidth - 5
    );
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

  // drag com mouse
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
    const walk = (x - startX) * 1.5;

    carouselRef.current.scrollLeft = scrollLeftStart - walk;
  };

  // botões
  const scroll = (direction) => {
    carouselRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-wrapper">

      {canScrollLeft && (
        <button className="arrow left" onClick={() => scroll("left")}>
          ‹
        </button>
      )}

      <div
        className="carousel-container"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseMove={handleMouseMove}
      >
        {shows.map((card) => (
          <div className="card carousel-card" key={card.id}>
            <img src={card.image} alt={card.title} />
          </div>
        ))}
      </div>

      {canScrollRight && (
        <button className="arrow right" onClick={() => scroll("right")}>
          ›
        </button>
      )}
    </div>
  );
}