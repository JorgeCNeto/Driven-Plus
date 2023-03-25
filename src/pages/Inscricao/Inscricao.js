import { Titulo, Pagina } from "./InscricaoStyle"
import Planos from "./Planos"
import apiSubscriptions from "../../services/apiSubscriptions"
import axios from "axios"
import PlanosContext from "../../contexts/PlanosContext";
import { useState } from "react";

export default function Inscricao(){
    const[planos, setPlanos] = useState({id, image, price})
    
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships")
    promise.then((res) =>{
        console.log(res.data)
    })
    promise.catch((err) => {
        console.log(err.response)
    })
   
    return(
        <Pagina>
            <div>
                <Titulo>Escolha seu Plano</Titulo>
            </div>
            <PlanosContext.Provider value={{planos, setPlanos}}>
                <Planos id={id} image={image} price={price}/>
                <Planos />
                <Planos />
            </PlanosContext.Provider>
        </Pagina>
    )
}