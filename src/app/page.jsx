
import "./home.css";
import CarouselKids from "@/components/CarrosselKids";
import ContinueWatching from "@/components/Continue/page";
import CarouselNovidades from "@/components/CarrosselNovidades/page";
import CarrosselDrama from "@/components/CarrosselDrama";
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

      <section className="home-section">
        <CarouselNovidades title="Novidades" />
      </section>

      <section className="home-section">
        <CarouselKids title="Para toda a família" />
      </section>

      <section className="home-section">
        <CarrosselDrama title="Mistério" />
      </section>
    </main>
  );
}
