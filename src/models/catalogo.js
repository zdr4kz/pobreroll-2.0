import { read } from "@/lib/db"

class CatalogoModel{

    static async listarTodos() {
        try{
            const todos = await read("catalogo")
            return {
                sucesso: true,
                data: todos
            }
        }catch (err) {
            console.error("não foi possivel listar a tabela dos filmes")
            return {
                sucesso: false,
                mensagem: "Erro ao listar os filmes",
                erro: err.message
            }
        }
    }
}

export default CatalogoModel