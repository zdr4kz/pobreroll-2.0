"use client";

import { shows } from "@/data/shows";
import { useState, useMemo, useEffect, useRef } from "react";
import "./filmes.css";

const RATINGS = ["Todos", "L", "10+", "14+", "16+", "18+"];

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [rating, setRating] = useState("Todos");
    const [hoveredId, setHoveredId] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => { inputRef.current?.focus(); }, []);

    const results = useMemo(() => {
        return shows.filter((s) => {
            const isFilme = s.type === "Filme";
            const matchQuery = s.title.toLowerCase().includes(query.toLowerCase());
            const matchRating = rating === "Todos" || s.rating === rating;
            return isFilme && matchQuery && matchRating;
        });
    }, [query, rating]);

    const hasQuery = query.trim().length > 0;
    // mostra resultados se: digitou algo OU selecionou um filtro específico (não "Todos")
    const showResults = hasQuery || rating;

    return (
        <div className="sp-page">

            {/* ── Barra de busca ── */}
            <div className="sp-search-bar">
                <div className="sp-input-wrap">
                    <svg className="sp-search-icon" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        ref={inputRef}
                        className="sp-input"
                        type="text"
                        placeholder="Títulos, séries, filmes…"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {query && (
                        <button className="sp-clear" onClick={() => setQuery("")}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* ── Filtros por classificação ── */}
            <div className="sp-filters">
                {RATINGS.map((r) => (
                    <button
                        key={r}
                        className={`sp-filter-btn ${rating === r ? "active" : ""}`}
                        onClick={() => setRating(r)}
                    >
                        {r}
                    </button>
                ))}
            </div>

            {/* ── Estado vazio: nenhum filtro ativo ── */}
            {!showResults && (
                <div className="sp-empty">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <p>Busque por qualquer série ou filme</p>
                </div>
            )}

            {/* ── Resultados ── */}
            {showResults && (
                <>
                    <p className="sp-count">
                        {results.length === 0
                            ? "Nenhum resultado encontrado"
                            : `${results.length} resultado${results.length > 1 ? "s" : ""}`}
                    </p>

                    <div className="sp-grid">
                        {results.map((show) =>(
                            <div
                                key={show.id}
                                className={`sp-card ${hoveredId === show.id ? "is-hovered" : ""}`}
                                onMouseEnter={() => setHoveredId(show.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="sp-thumb">
                                    <img src={show.image} alt={show.title} draggable={false} />
                                    <div className="sp-thumb-grad" />

                                    <div className="sp-play-overlay">
                                        <button className="sp-play-btn">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <polygon points="5,3 19,12 5,21" />
                                            </svg>
                                        </button>
                                    </div>

                                    <span className="sp-rating">{show.rating}</span>
                                </div>

                                <div className="sp-info">
                                    <p className="sp-title">{show.title}</p>
                                    <div className="sp-meta">
                                        <span className="sp-type">{show.type}</span>
                                        <span className="sp-dot">·</span>
                                        <span className="sp-seasons">
                                            {show.seasons} {show.seasons > 1 ? "temporadas" : "temporada"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {results.length === 0 && (
                        <div className="sp-no-results">
                            <p className="sp-no-results-title">
                                {hasQuery ? `Não encontramos "${query}"` : "Nenhum título nessa classificação"}
                            </p>
                            <p className="sp-no-results-sub">
                                Tente outro título ou remova os filtros.
                            </p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}