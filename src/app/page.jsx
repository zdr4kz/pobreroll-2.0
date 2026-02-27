import { shows } from "@/data/shows";
import Image from "next/image";
import "./home.css";
import DragCarousel from "@/components/Carrossel";
import Hero from "@/components/Hero";
import Top10Carousel from "@/components/Top10";

export default function Home() {

  return (
    <>
      <main>
        <Hero />

        <section className="s1 bg-dark p-2">
          <div>
            <DragCarousel />
          </div>
        </section>

        <section className="s1 bg-dark p-2">
          <Top10Carousel />
        </section>




      </main>
    </>
  );
}
