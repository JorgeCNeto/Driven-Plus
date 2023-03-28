import { CgProfile } from "react-icons/cg"
import { Botao, Cancelar, Pagina, CaixaTopo, Imagem, AjusteConfirmacao, Titulo, AjusteBeneficio } from "./HomeStyle"
import logoPagina from "../../assets/logoPagina.png"
import { useContext } from "react"
import UserContext from "../../contexts/UserContext"
import { Link, useNavigate } from "react-router-dom"
import DescricaoPlanosContext from "../../contexts/DescricaoPlanosContext"
import PlanoContext from "../../contexts/PlanoContext"
import apiSubscriptions from "../../services/apiSubscriptions"

export default function Home(){
    const {user} = useContext(UserContext)
    const {plano} = useContext(PlanoContext)
    const {descricaoPlanos} = useContext(DescricaoPlanosContext)
    const navigate = useNavigate()
    
    function cancelamento(){
        apiSubscriptions.deletarPlano(user.token)
        .then(res =>{
            navigate("/subscriptions")
        })
        .catch(err =>{
            console.log(err.response)
        })
    }
    
    return(
        <Pagina>
            <CaixaTopo>
                <Imagem src={plano.image} />
                <CgProfile color="FFFFFF" size="32px" />
            </CaixaTopo>
            <Titulo>Olá, {user.name}</Titulo>
            <AjusteBeneficio>
            {(descricaoPlanos.perks.length > 0) ? descricaoPlanos.perks.map((d) => (
                            <Botao>{d.title}</Botao>
                        )) : console.log("deu ruim")}

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