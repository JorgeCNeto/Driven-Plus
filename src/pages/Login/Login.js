import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import { Botao, Texto, Icones, Imagem, Form, Input } from "./LoginStyle"
import apiAuth from "../../services/apiAuth"
import { useContext, useState } from "react"
 
export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    
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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                <Input 
                    placeholder="Senha" 
                    type="password" 
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                <Botao type="submit">ENTRAR</Botao>
            </Form>
            <Texto to="/sign-up">
                Não possui uma conta? Cadastre-se
            </Texto>
        </Icones>        
    )
}




