import CatalogoModel from "@/models/catalogo";

export default class CatalogoController {

    static async listar() {
        const filmes = await CatalogoModel.listasTodos()
        if (!filmes || filmes.length === 0) {
            return {
                status: 404,
                mensagem: "Nenhum filme encontrado",
                data: []
            }
        }
        return {
            status: 200,
            mensagem: "Filmes listados com sucesso",
            data: filmes
        }
    }
}