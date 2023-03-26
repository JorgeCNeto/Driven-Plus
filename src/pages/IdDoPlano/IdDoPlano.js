import logoPagina from "../../assets/logoPagina.png"
import {FaArrowLeft, FaMoneyBillWave} from "react-icons/fa"
import { TbCheckupList } from "react-icons/tb";
import {Seta, Texto, Imagem, TopicoLista, AjusteBeneficios, AjustePreco, AjusteLogos, Valor, Beneficios, Preco, Form, InputLarge, AjusteInput, InputSmall, Botao, Confirmacao, BotaoNao, BotaoSim, ConfirmacaoTexto, AjusteConfirmacaoTexto} from "./IdDoPlanoStyle"
import { useState } from "react";



export default function IdDoPlano(){
    const [assinar, setAssinar] = useState(false)
    
    function fecharPlano(){
        setAssinar(true)
    }

    return(
        <div>
            <div>
                <Seta to="/subscriptions">
                    <FaArrowLeft size="28px" color="#ffffff"/>
                </Seta>

                <AjusteLogos>
                    <Imagem src={logoPagina}/>
                    <Texto>Driven Plus</Texto>
                </AjusteLogos>

                <Beneficios>
                    <AjusteBeneficios>
                        <TbCheckupList size="20px" color="#ffffff"/>
                        <TopicoLista>Benefícios:</TopicoLista>
                    </AjusteBeneficios>
                    <ol >
                        <li><Valor>Brindes exclusivos</Valor></li>
                        <li><Valor>Materiais bônus de web</Valor></li>
                    </ol>
                </Beneficios>
                

                <Preco>
                    <AjustePreco>
                        <FaMoneyBillWave size="20px" color="#ffffff"/>
                        <TopicoLista>Preço:</TopicoLista>
                    </AjustePreco>
                    <Valor>R$ 39,99 cobrados mensalmente</Valor>
                </Preco>
                
                <Form>
                    <InputLarge 
                        placeholder="Nome impresso no cartão"
                        />
                    <InputLarge 
                        placeholder="Digitos do cartão"
                        />
                    <AjusteInput>
                        <InputSmall 
                            placeholder="Código de segurança"
                            />
                        <InputSmall 
                            placeholder="Validade"
                            />
                    </AjusteInput>
                    <Botao onClick={fecharPlano}>ASSINAR</Botao>
                </Form>
            </div>
            <Confirmacao>
                <AjusteConfirmacaoTexto>
                    <ConfirmacaoTexto>Tem certeza que deseja assinar o plano</ConfirmacaoTexto>
                    <ConfirmacaoTexto>Driven Plus (R$ 39,99)?</ConfirmacaoTexto>
                </AjusteConfirmacaoTexto>
                <div>
                    <BotaoNao>Não</BotaoNao>
                    <BotaoSim>SIM</BotaoSim>
                </div>
            </Confirmacao>
        </div>
    )
}