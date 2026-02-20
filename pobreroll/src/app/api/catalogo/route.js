import  CatalogoModel  from "@/models/catalogo"
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Teste primeiro com um dado estático para ver se o 500 some
        const dados = await CatalogoModel.listasTodos()

        console.log("Rota acessada com sucesso!");

        return NextResponse.json(dados, { status: 200 });

    } catch (err) {
        console.error("Erro detalhado no console do terminal:", err);
        return NextResponse.json({ error: "Falha interna" }, { status: 500 });
    }
}