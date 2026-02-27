import  CatalogoModel  from "@/models/catalogo"
import css from "./filmes.css"
import Link from "next/link"

export default async function pesquisa() {

    const response = await CatalogoModel.listarTodos()
    console.log(response)


    return (
        <>
            <div className="container d-flex justify-content-center flex-column align-items-center mt-5">
                <h1 className="mt-5">Filmes</h1>
                <div className="row" style={{marginTop: "3rem"}}>
                    {response.data.filter(f => f.type === "Filme").map((f) => {
                        return (
                            <>

                                <div className="col-sm-3 col-12 mt-sm-2 mt-5 cardFilme">
                                    <Link href={`filmes/${f.id}`}>
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