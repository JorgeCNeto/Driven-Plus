import { Titulo, Pagina } from "./InscricaoStyle"
import Planos from "./Planos"

export default function Inscricao(){
    return(
        <Pagina>
            <div>
                <Titulo>Escolha seu Plano</Titulo>
            </div>

            <Planos />
            <Planos />
            <Planos />

        </Pagina>
    )
}