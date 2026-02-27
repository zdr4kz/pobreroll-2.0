"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./header.css";

export default function Header() {
  const pathname = usePathname();

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false); // controla fundo

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // controla esconder/mostrar
      if (currentScrollY < 10) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      // controla fundo após rolar
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    // aplica classe dinâmica para esconder ou mostrar
    <>

      <header
        className={`header desktop-header ${showHeader ? "header-visible" : "header-hidden"}
      ${scrolled ? "header-scrolled" : ""}
      d-flex flex-wrap align-items-center justify-content-center justify-content-md-between `}
      >
        <div className="col-md-3 mb-2 mb-md-0 ms-5">
          <a href="/">
            <div className="tml2 d-flex bg-dannger p0">
              <img className="tml" src="/LumosB.png" alt="" />
            </div>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">

          <li>
            <a
              href="/"
              className={`nav-link px-2 ${pathname === "/" ? "active" : "inactive"}`}
            >
              <i className="bi bi-house me-2 fs-6"></i>
              Início
            </a>
          </li>

          <li>
            <a
              href="/search"
              className={`nav-link px-2 ${pathname === "/pesquisar" ? "active" : "inactive"}`}
            >
              <i className="bi bi-search me-2 fs-6"></i>
              Pesquisar
            </a>
          </li>

          <li>
            <a
              href="/series"
              className={`nav-link px-2 ${pathname === "/series" ? "active" : "inactive"}`}
            >
              <i className="bi bi-tv me-2 fs-6"></i>
              Séries
            </a>
          </li>

          <li>
            <a
              href="/filmes"
              className={`nav-link px-2 ${pathname === "/filmes" ? "active" : "inactive"}`}
            >
              <i className="bi bi-film me-2 fs-6"></i>
              Filmes
            </a>
          </li>

        </ul>

        <div className="teste">
          <a href="/login" className="btnLogin">
            <span className="bi bi-person"></span>
          </a>
        </div>

      </header>

      <nav className="mobile-nav">
        <a href="/" className={pathname === "/" ? "active" : ""}>
          <i className="bi bi-house"></i>
        </a>

        <a href="/search" className={pathname === "/pesquisar" ? "active" : ""}>
          <i className="bi bi-search"></i>
        </a>

        <a href="/series" className={pathname === "/series" ? "active" : ""}>
          <i className="bi bi-tv"></i>
        </a>

        <a href="/filmes" className={pathname === "/filmes" ? "active" : ""}>
          <i className="bi bi-film"></i>
        </a>

        <a href="/login">
          <i className="bi bi-person"></i>
        </a>
      </nav>


    </>




  );
}