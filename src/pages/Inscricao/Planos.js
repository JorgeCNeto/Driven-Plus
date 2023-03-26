import {Plano, Imagem, Valor} from "./InscricaoStyle"

export default function Planos({image, price}){
        
    return(
        <Plano>
                <Imagem src={image}/>
                <Valor>R$ ${price}</Valor>
        </Plano>
    )
}