import axios from "axios";

const BASE_URL =  "https://mock-api.driven.com.br/api/v4/driven-plus/auth"

function login(body) {
    //console.log(body, "body cadastro")
    const promise = axios.post(`${BASE_URL}/login`, body)
    console.log(promise)
    return promise
}

function signUp(body){
    //console.log(body, "body cadastro")
    const promise = axios.post(`${BASE_URL}/sign-up`, body)
    
    return promise
}

const apiAuth = {login, signUp}
export default apiAuth