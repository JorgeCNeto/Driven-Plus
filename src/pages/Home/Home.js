import { CgProfile } from "react-icons/cg"
import { Botao, Cancelar, Pagina, CaixaTopo, Imagem, AjusteConfirmacao, Titulo, AjusteBeneficio } from "./HomeStyle"
import logoPagina from "../../assets/logoPagina.png"

export default function Home(){
    return(
        <Pagina>
            <CaixaTopo>
                <Imagem src={logoPagina} />
                <CgProfile color="FFFFFF" size="32px" />
            </CaixaTopo>
            <Titulo>Olá, fulano</Titulo>
            <AjusteBeneficio>
                <Botao>Solicitar brindes</Botao>
                <Botao>Materiais bônus de web</Botao>
            </AjusteBeneficio>
            <AjusteConfirmacao>
                <Botao>Mudar plano</Botao>
                <Cancelar>Cancelar plano</Cancelar>
            </AjusteConfirmacao>
        </Pagina>
    )
}