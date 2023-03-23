import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import { Botao, Texto, Icones, Imagem, Form, Input } from "./LoginStyle"
import apiAuth from "../../services/apiAuth"
import { useContext, useState } from "react"
 
export default function Login(){
    const [form, setForm] = useState({ email: "", password: "" })
    // const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    
    function handleForm(e){
        setForm({...Form, [e.target.name]: e.target.value })
        
    }

    function handleLogin(e){
        e.preventDefault()
        
        apiAuth.login(form)
        .then(res => {
            console.log(res.data)
            
            navigate("/subscriptions")
        })
        .catch(err => {
            console.log(err.response.data)
        })

        
    }
   
    return(        
        <Icones>        
            <Imagem src={logo} />
            <Form onSubmit={handleLogin}>
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
                <Botao type="submit">ENTRAR</Botao>
            </Form>
            <Texto to="/sign-up">
                Não possui uma conta? Cadastre-se
            </Texto>
        </Icones>        
    )
}




