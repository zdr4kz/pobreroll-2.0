import  CatalogoModel  from "@/models/catalogo"
import css from "./pesquisa.css"
import Link from "next/link"

export default async function pesquisa() {

    const response = await CatalogoModel.listarTodos()
    console.log(response)


    return (
        <>
            <div className="container">
                <div className="row pesquisa ">
                    <input type="text" placeholder="titulo, genero" className="inputPesquisa" id="pesquisar" />
                </div>
                <div className="row" style={{marginTop: "5rem"}}>
                    {response.data.map((f) => {
                        return (
                            <>

                                <div className="col-sm-3 col-12 mt-sm-2 mt-5 cardFilme">
                                    <Link href={`pesquisar/${f.id}`}>
                                    <img src={f.image} width={"100%"} style={{ borderRadius: "8px" }} />
                                    </Link>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

        </>
    )

}