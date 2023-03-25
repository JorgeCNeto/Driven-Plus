import axios from "axios";

const BASE_URL =  "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"

function listarPlanos() {
    const promise = axios.get(`${BASE_URL}/memberships`, )
    console.log(promise, "promise")
    return promise
}

function listarPlano(){    
    const promise = axios.get(`${BASE_URL}/memberships/ID_DO_PLANO`)
    
    return promise
}

function assinar(body){
    console.log(body, "body cadastro")
    const promise = axios.post(BASE_URL, body)
    
    return promise
}

const apiSubscriptions = {listarPlanos, listarPlano, assinar}
export default apiSubscriptions