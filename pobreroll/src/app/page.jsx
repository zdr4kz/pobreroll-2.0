import Image from "next/image";
import styles from "./page.module.css";
import "./home.css";
import DragCarousel from "@/components/Carrossel";

export default function Home() {

  return (
    <>
      <main>
        <div className="hero">
          <div className="row">
            <div className="col-lg-10 col-md-8 col-12 overlay">
              <h1>Interestelar</h1>
              <p>
                Uma equipe de exploradores viaja através de um buraco de minhoca no espaço
                na tentativa de garantir a sobrevivência da humanidade.
              </p>
              <button className="btn0">Assistir</button>
            </div>
          </div>
        </div>

        <section className="bg-dark p-3"style={{ height: "4200px" }}>

          <div className="">
            <h3 className="text-white ps-3 pt-2">Animações para toda a família</h3>
            <DragCarousel/>

          </div>

        </section>


      </main>
    </>
  );
}
