"use client";

import { usePathname } from "next/navigation";
import "./header.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
      
      <div className="col-md-3 mb-2 mb-md-0 ms-5">
        <a href="/" className="logo">
          NomeDoStreaming
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
      href="/pesquisar"
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

      <div className="col-md-3 text-end">
        <button type="button" className="btnLogin">
          Sign-up
        </button>
      </div>
    </header>
  );
}