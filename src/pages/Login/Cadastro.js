import { useContext, useState } from "react"
import { Botao, Texto, Caixa, Form, Input } from "./LoginStyle"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import apiAuth from "../../services/apiAuth"


export default function Cadastro(){
    const [form, setForm] = useState({ name: "", cpf: "", email: "", password: "" })
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    function handleForm(e){
        setForm({...Form, [e.target.name]: e.target.value })
    }
    
    function handleSignUp(e){
        e.preventDefault()

        apiAuth.signUp(form)
        .then(res => {
            navigate("/")
        })
        .catch(err => {
            console.log(err.response.data.message)
        })
            
        
    }
    
    return(
        <Caixa>
            <Form onSubmit={handleSignUp}>
                <Input 
                    placeholder="Nome" 
                    type="text"
                    required 
                    name="name"
                    value={form.name} 
                    onChange={handleForm}
                    />
                <Input 
                    placeholder="CPF" 
                    type="text"
                    required 
                    name="cpf"
                    value={form.cpf} 
                    onChange={handleForm}
                    />
                <Input 
                    placeholder="E-mail" 
                    type="email" 
                    required 
                    name="email"
                    value={form.email} 
                    onChange={handleForm}
                    />
                <Input 
                    placeholder="Senha" 
                    type="password"
                    required 
                    name="password"
                    value={form.password} 
                    onChange={handleForm}
                    />
                <Botao type="submit">CADASTRAR</Botao>
            </Form>

            <Texto to="/">
                Já possuí uma conta? Entre
            </Texto>
        </Caixa>
    )
}


