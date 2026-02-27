import {shows} from "@/data/shows";
import Image from "next/image";
import styles from "./page.module.css";
import "./home.css";
import DragCarousel from "@/components/Carrossel";
import Hero from "@/components/Hero";

export default function Home() {

  return (
    <>
      <main>
        <Hero/>
        <section className="s1 bg-dark p-3">
          <div>
            <h3 className="text-white ps-3 pt-2">Animações para toda a família</h3>
            <DragCarousel/>
          </div>

        </section>


      </main>
    </>
  );
}
