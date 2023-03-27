import { Titulo, Pagina } from "./InscricaoStyle"
import Planos from "./Planos"
import apiSubscriptions from "../../services/apiSubscriptions"
import PlanosContext from "../../contexts/PlanosContext";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import PlanoContext from "../../contexts/PlanoContext";

export default function Inscricao(){
    const[planos, setPlanos] = useState([]/*{id, image, price}*/)
    const { user } = useContext(UserContext)
    const { setPlano, plano } = useContext(PlanoContext)
    const navigate = useNavigate()
    
    useEffect(mostrarPlanos, [])
    
    function mostrarPlanos(){
        
        apiSubscriptions.listarPlanos(user.token)
        .then(res => {
            const planosRenderizados = res.data
            //console.log(planosRenderizados)
            setPlanos(planosRenderizados)           
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    function planoSelecionado(p){
        setPlano(p)
        navigate("/subscriptions/ID_DO_PLANO")
    }
   
    return(
        <Pagina>
            <div>
                <Titulo>Escolha seu Plano</Titulo>
            </div>
            <PlanosContext.Provider value={{planos, setPlanos}}>
                { planos.map(p =>(
                    <Planos 
                    key={p.id}
                    image={p.image}
                    price={p.price}
                    planoSelecionado={() => planoSelecionado(p)}
                    />
                ))}
               
            </PlanosContext.Provider>
        </Pagina>
    )
}