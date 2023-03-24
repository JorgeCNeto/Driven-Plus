import { useContext, useState } from "react"
import { Botao, Texto, Caixa, Form, Input } from "./LoginStyle"
import { useNavigate } from "react-router-dom"
import  UserContext  from "../../contexts/UserContext"
import apiAuth from "../../services/apiAuth"


export default function Cadastro(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()
    
    function handleSignUp(e){
        e.preventDefault()
        
        const cadastro = {email, name: nome, cpf, password: senha}

        apiAuth.signUp(cadastro)
        .then(res => {
            navigate("/")
        })
        .catch(err => {
            alert(err.response.data.message)
        })
            
        
    }
    
    return(
        <Caixa>
            <Form onSubmit={handleSignUp}>
                <Input 
                    placeholder="Nome" 
                    type="text"
                    required                     
                    value={nome} 
                    onChange={e => setNome(e.target.value)}
                    />
                <Input 
                    placeholder="CPF" 
                    type="text"
                    required                     
                    value={cpf} 
                    onChange={e => setCpf(e.target.value)}
                    />
                <Input 
                    placeholder="E-mail" 
                    type="email" 
                    required                    
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    />
                <Input 
                    placeholder="Senha" 
                    type="password"
                    required                     
                    value={senha} 
                    onChange={e => setSenha(e.target.value)}
                    />
                <Botao type="submit">CADASTRAR</Botao>
            </Form>

            <Texto to="/">
                Já possuí uma conta? Entre
            </Texto>
        </Caixa>
    )
}


