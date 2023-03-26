import { CgProfile } from "react-icons/cg"
import { Botao, Cancelar, Pagina, CaixaTopo, Imagem, AjusteConfirmacao, Titulo, AjusteBeneficio } from "./HomeStyle"
import logoPagina from "../../assets/logoPagina.png"
import { useContext } from "react"
import UserContext from "../../contexts/UserContext"
import { Link } from "react-router-dom"

export default function Home(){
    const {user} = useContext(UserContext)
    
    function cancelamento(){

    }
    
    return(
        <Pagina>
            <CaixaTopo>
                <Imagem src={logoPagina} />
                <CgProfile color="FFFFFF" size="32px" />
            </CaixaTopo>
            <Titulo>Olá, {user.name}</Titulo>
            <AjusteBeneficio>
                

                <Botao>Solicitar brindes</Botao>
                <Botao>Materiais bônus de web</Botao>
            </AjusteBeneficio>
            <AjusteConfirmacao>
                <Link to="/subscriptions">
                    <Botao>Mudar plano</Botao>
                </Link>
                <Cancelar onClick={cancelamento}>Cancelar plano</Cancelar>
            </AjusteConfirmacao>
        </Pagina>
    )
}