import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import { Botao, Texto, Icones, Imagem, Form, Input } from "./LoginStyle"
import apiAuth from "../../services/apiAuth"
import { useContext, useState } from "react"
import UserContext from "../../contexts/UserContext"

 
export default function Login(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { setUser} = useContext(UserContext)
    const navigate = useNavigate()
    
    function handleLogin(e){
        e.preventDefault()

        const logar = {email, password: senha}
        
        apiAuth.login(logar)
        .then(res => {
            console.log(res.data)

            const {id, name, token, cpf, email} = res.data
            setUser({id, name, cpf, token, email})
            
            if (res.data.membership === null){
                 navigate("/subscriptions")
            } else {
                navigate("/home")
            }
           
        })
        .catch(err => {
            console.log(err.response)
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
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    />
                <Botao type="submit">ENTRAR</Botao>
            </Form>
            <Texto to="/sign-up">
                Não possui uma conta? Cadastre-se
            </Texto>
        </Icones>        
    )
}




