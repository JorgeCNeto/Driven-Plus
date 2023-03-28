import axios from "axios";

const BASE_URL =  "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"

function createConfig(token){
    return {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }
}

function listarPlanos(token) {
    //console.log(token)
    const promise = axios.get(`${BASE_URL}/memberships`, createConfig(token))      
    return promise
}

function listarPlano(token, idPlano){    
    const promise = axios.get(`${BASE_URL}/memberships/${idPlano}`, createConfig(token))    
    return promise
}

function assinarPlano(body, token){
    console.log(body, "body cadastro")
    const promise = axios.post(BASE_URL, body, createConfig(token))
    
    return promise
}

function alterarPlano(body){
    console.log(body, "body cadastro")
    const promise = axios.post(BASE_URL, body)
    
    return promise
}

function deletarPlano(token){
    const promise = axios.delete(BASE_URL, createConfig(token))
    return promise
}

const apiSubscriptions = {listarPlanos, listarPlano, assinarPlano, alterarPlano, deletarPlano}
export default apiSubscriptions