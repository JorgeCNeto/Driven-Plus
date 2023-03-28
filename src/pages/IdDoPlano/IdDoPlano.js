import logoPagina from "../../assets/logoPagina.png"
import {FaArrowLeft, FaMoneyBillWave} from "react-icons/fa"
import { TbCheckupList } from "react-icons/tb";
import {Seta, Texto, Imagem, TopicoLista, AjusteBeneficios, AjustePreco, AjusteLogos, Valor, Beneficios, Preco, Form, InputLarge, AjusteInput, InputSmall, Botao, BotaoNao, BotaoSim, ConfirmacaoTexto, AjusteConfirmacaoTexto, BotoesOverlay, Lista} from "./IdDoPlanoStyle"
import { useContext, useEffect, useState } from "react";
import PlanoContext from "../../contexts/PlanoContext";
import apiSubscriptions from "../../services/apiSubscriptions";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import DescricaoPlanosContext from "../../contexts/DescricaoPlanosContext";
import { useNavigate } from "react-router-dom"


export default function IdDoPlano(){
    const [cardName, setCardName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [securityNumber, setsecurityNumber] = useState("")
    const [expirationDate, setExpirationDate] = useState("")    
    const navigate = useNavigate()
    const [assinar, setAssinar] = useState(false)
    const { user } = useContext(UserContext)
    const { plano } = useContext(PlanoContext)
    const { descricaoPlanos, setDescricaoPlanos } = useContext(DescricaoPlanosContext)
    const idPlano = plano.id
      
    function confirmarPlano(){
        setAssinar(true)        
    }

    function cancelar(){
        setAssinar(false)
    }

    useEffect(descricaoPlano, [])
    
    function descricaoPlano(){
        
        apiSubscriptions.listarPlano(user.token, idPlano)
        .then(res => {     
            setDescricaoPlanos(res.data)            
        })
        .catch(err => {
            console.log(err.response.data)
        })
    }
    
    function fecharPlano(e){
        e.preventDefault()
        
        const body = {membershipId: idPlano, cardName, cardNumber, securityNumber, expirationDate}

        apiSubscriptions.assinarPlano(body, user.token)
        .then(res => {
            console.log(res.data)
            navigate("/home")
        })
        .catch(err => {
            alert(err.response.data.message)
        })            
        
    }
    
    return(
        <div>
            <div>
                <Seta to="/subscriptions">
                    <FaArrowLeft size="28px" color="#ffffff"/>
                </Seta>

                <AjusteLogos>
                    <Imagem src={plano.image}/>
                    <Texto>Driven Plus</Texto>
                </AjusteLogos>

                <Beneficios>
                    <AjusteBeneficios>
                        <TbCheckupList size="20px" color="#ffffff"/>
                        <TopicoLista>Benefícios:</TopicoLista>
                    </AjusteBeneficios>
                    
                    <ol>
                        {(descricaoPlanos.perks.length > 0) ? descricaoPlanos.perks.map((d, index) => (
                            <Lista>{index+1}. {d.title}</Lista>
                        )) : console.log("deu ruim")}
                    </ol>

                </Beneficios>
                
                <Preco>
                    <AjustePreco>
                        <FaMoneyBillWave size="20px" color="#ffffff"/>
                        <TopicoLista>Preço:</TopicoLista>
                    </AjustePreco>
                    <Valor>R$ {plano.price} cobrados mensalmente</Valor>
                </Preco>
                
                <Form>
                    <InputLarge 
                        placeholder="Nome impresso no cartão"
                        type="text"
                        required                     
                        value={cardName} 
                        onChange={e => setCardName(e.target.value)}
                        />
                    <InputLarge 
                        placeholder="Digitos do cartão"
                        type="text"
                        required                     
                        value={cardNumber} 
                        onChange={e => setCardNumber(e.target.value)}
                        />
                    <AjusteInput>
                        <InputSmall 
                            placeholder="Código de segurança"
                            type="number"
                            required                     
                            value={securityNumber} 
                            onChange={e => setsecurityNumber(e.target.value)}
                            />
                        <InputSmall 
                            placeholder="Validade"
                            type="text"
                            required                     
                            value={expirationDate} 
                            onChange={e => setExpirationDate(e.target.value)}
                            />
                    </AjusteInput>
                    <Botao onClick={confirmarPlano} assinar={assinar}>ASSINAR</Botao>
                </Form>
            </div>
            <Confirmacao assinar={assinar}>
                <AjusteConfirmacaoTexto>
                    <ConfirmacaoTexto>Tem certeza que deseja assinar o plano</ConfirmacaoTexto>
                    <ConfirmacaoTexto>{descricaoPlanos.name} (R$ {descricaoPlanos.price})?</ConfirmacaoTexto>
                </AjusteConfirmacaoTexto>
                <BotoesOverlay>
                    <BotaoNao onClick={cancelar} assinar={assinar}>Não</BotaoNao>
                    <BotaoSim onClick={fecharPlano}>SIM</BotaoSim>
                </BotoesOverlay>
            </Confirmacao>
        </div>
    )
}

const Confirmacao = styled.div`
    width: 248px;
    height: 210px;
    left: 64px;
    top: 229px;
    background: #FFFFFF;
    border-radius: 12px;
    position: fixed;
    z-index: 2;
    display: ${(props) => props.assinar ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
`

