import Image from "next/image";
import styles from "./page.module.css";
import CatalogoController from "@/controllers/catalogo";

export default async function Home() {


  const filmes = await CatalogoController.listar()

  return (
    <>
      <div>
        <h1>Lista de Filmes</h1>
        <div>
          {(filmes.data).filter(filme => (filme.genero).split(", ")).map(filme => {
              return (
                <div key={filme.id} >
                  <div>
                    <div>
                      <img src={filme.imagem} alt="" width={"300rem"} />
                      <div>{filme.nome}</div>
                      <div style={{display: "flex"}} >
                      <div>{((filme.genero).split(", ")).map(genero => <a style={{margin: "0.25rem"}}>{genero}</a>)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  );
}
