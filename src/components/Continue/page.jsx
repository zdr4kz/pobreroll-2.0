"use client";
import "./continue.css"
import { shows } from "@/data/shows";
import { useRef, useState, useEffect } from "react";


export default function ContinueWatching() {
  const carouselRef = useRef(null);

  const [items, setItems]               = useState(shows);
  const [hoveredId, setHoveredId]       = useState(null);
  const [removingId, setRemovingId]     = useState(null);
  const [isDown, setIsDown]             = useState(false);
  const [isDragging, setIsDragging]     = useState(false);
  const [startX, setStartX]             = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
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

  // drag
  const handleMouseDown = (e) => {
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftStart(carouselRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDown(false);
    setHoveredId(null);
    setTimeout(() => setIsDragging(false), 100);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) setIsDragging(true);
    carouselRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const scroll = (dir) =>
    carouselRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });

  // remover item com animação
  const handleRemove = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      setItems((prev) => prev.filter((i) => i.id !== id));
      setRemovingId(null);
      setHoveredId(null);
    }, 350);
  };

  if (items.length === 0) return null;

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');`}</style>

      <section className="cw-section">
        <div className="cw-header">
          <h1 className="cw-title">Continuar assistindo</h1>
        </div>

        <div className="cw-wrapper">
          {canScrollLeft && (
            <button className="cw-arrow left" onClick={() => scroll("left")}>‹</button>
          )}

          <div
            className="cw-track"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onMouseMove={handleMouseMove}
          >
            {items.slice(4, 6).map((card) => (
              <div
                key={card.id}
                className={[
                  "cw-card",
                  hoveredId === card.id ? "is-hovered" : "",
                  removingId === card.id ? "is-removing" : "",
                ].join(" ")}
                onMouseEnter={() => !isDragging && setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* ── Thumbnail ── */}
                <div className="cw-thumb">
                  <img src={card.image} alt={card.title} draggable={false} />
                  <div className="cw-thumb-grad" />

                  {/* botão X para remover — aparece no hover */}
                  <button
                    className="cw-remove"
                    title="Remover da lista"
                    onClick={(e) => { e.stopPropagation(); handleRemove(card.id); }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>

                  {/* play central no hover */}
                  <div className="cw-play-overlay">
                    <button className="cw-play-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* ── Barra de progresso ── */}
                <div className="cw-progress-bar">
                  <div
                    className="cw-progress-fill"
                    style={{ width: `${card.progress}%` }}
                  />
                </div>

                {/* ── Info abaixo ── */}
                <div className="cw-info">
                  <p className="cw-show-title">{card.title}</p>
                  <p className="cw-episode">{card.episode}</p>
                  <p className="cw-time">{card.timeLeft}</p>
                </div>
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button className="cw-arrow right" onClick={() => scroll("right")}>›</button>
          )}
        </div>
      </section>
    </>
  );
}