import { read } from "@/lib/db"

class CatalogoModel{

    static async listasTodos() {
        try{
            const todos = await read("filmes")
            console.log(todos)
            return todos
        }catch (err) {
            console.error("não foi possivel listar a tabela dos filmes")
            return err
        }
    }
}

export default CatalogoModel