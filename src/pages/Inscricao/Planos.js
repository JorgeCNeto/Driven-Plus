import {Plano, Imagem, Valor} from "./InscricaoStyle"
import logo from "../../assets/logoPagina.png"

export default function Planos(){
    return(
        <Plano>
                <Imagem src={logo}/>
                <Valor>R$ 39,99</Valor>
        </Plano>
    )
}