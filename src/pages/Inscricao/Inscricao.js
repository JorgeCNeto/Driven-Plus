import { Titulo, Pagina } from "./InscricaoStyle"
import Planos from "./Planos"
import apiSubscriptions from "../../services/apiSubscriptions"
import PlanosContext from "../../contexts/PlanosContext";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";

export default function Inscricao(){
    const[planos, setPlanos] = useState([]/*{id, image, price}*/)
    const { user } = useContext(UserContext)
 
    useEffect(mostrarPlanos, [])
    
    function mostrarPlanos(){
        apiSubscriptions.listarPlanos(user.token)
        .then(res => {
            console.data(res.data)
            setPlanos(res.data)           
        })
        .catch(err => {
            console.log(err.response)
        })
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
                    />
                ))}
               
            </PlanosContext.Provider>
        </Pagina>
    )
}