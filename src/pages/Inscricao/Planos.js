import {Plano, Imagem, Valor} from "./InscricaoStyle"

export default function Planos({image, price, planoSelecionado}){
        
    return(
        <Plano onClick={planoSelecionado} >
                <Imagem src={image}/>
                <Valor>R$ {price}</Valor>
        </Plano>
    )
}