import "./home.css";
import CarouselKids from "@/components/Carrossel";
import ContinueWatching from "@/components/Continue/page";
import Hero from "@/components/Hero";
import Top10Carousel from "@/components/Top10";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="home-section">
        <ContinueWatching title="Continuar assistindo" />
      </section>

      <section className="home-section">
        <Top10Carousel />
      </section>

      {/* <section className="home-section">
        <DragCarousel title="Novidades" />
      </section>
 */}
      <section className="home-section">
        <CarouselKids title="Para toda a família" />
      </section>

      {/* <section className="home-section">
        <DragCarousel title="Ação e Aventura" />
      </section> */}
    </main>
  );
}
