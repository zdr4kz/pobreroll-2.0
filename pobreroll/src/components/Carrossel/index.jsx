"use client";

import { useRef, useState, useEffect } from "react";
import "./carousel.css";

export default function DragCarousel() {
  const carouselRef = useRef(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cards = [
    {
      id: 1,
      title: "Adventure Time",
      type: "Série",
      seasons: 10,
      rating: "10+",
      image: "https://personaunesp.com.br/wp-content/uploads/2018/10/IMAGEM-1-hda.png"
    },
    {
      id: 2,
      title: "Apenas um Show",
      type: "Série",
      seasons: 8,
      rating: "10+",
      image: "https://m.media-amazon.com/images/S/pv-target-images/9dac56f94cefb6fa093e26a0558e6da2ebc70a8587cbfe9ae1ae0f18d3f9c525.png"
    },
    {
      id: 3,
      title: "O Incrível Mundo de Gumball",
      type: "Série",
      seasons: 6,
      rating: "10+",
      image: "https://rollingstone.com.br/wp-content/uploads/2025/10/gumball-hbo-max-cartoon-rolling-stone-scaled.jpg"
    },
    {
      id: 4,
      title: "Hora de Aventura: Terras Distantes",
      type: "Série",
      seasons: 1,
      rating: "10+",
      image: "https://m.media-amazon.com/images/S/pv-target-images/7d291e94f0cece2f69ee8585afd65d26c2afa5c9369ac580901db5887bea224a.jpg"
    },
    {
      id: 5,
      title: "Steven Universo",
      type: "Série",
      seasons: 5,
      rating: "10+",
      image: "https://i0.wp.com/www.deviante.com.br/wp-content/uploads/2017/08/image2-3.jpg"
    },
    {
      id: 6,
      title: "Gravity Falls",
      type: "Série",
      seasons: 2,
      rating: "10+",
      image: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a2168795-2b95-4dff-99a3-3da0ff10094c/compose?aspectRatio=1.78&format=webp&width=1200"
    },
    {
      id: 7,
      title: "Clarêncio",
      type: "Série",
      seasons: 3,
      rating: "L",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj16vhSwJx8LddBWU_ala9QZbOAQzlDjftM0ieAtp07bepiopIfyPV3ujznt2Qk_FDDK5gKjgJtoel_ZyaiLzJmGgKKYJszJ13mwR1QmS32PurIQ1fZ25qimCdRO6qU3ZrRR9XsrQTzIlw/s1600/Clarence_miniseries-Banner.jpg"
    },
    {
      id: 8,
      title: "Miraculous: As Aventuras de Ladybug",
      type: "Série",
      seasons: 5,
      rating: "L",
      image: "https://tv.sbt.com.br/_next/image?url=https%3A%2F%2Fstatic.sbt.com.br%2Fnoticias%2Fimages%2F277549.jpg&w=1080&q=90"
    }
  ];

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
        {cards.map((card) => (
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