import logoPagina from "../../assets/logoPagina.png"
import {FaArrowLeft, FaMoneyBillWave} from "react-icons/fa"
import { TbCheckupList } from "react-icons/tb";
import {Seta, Texto, Imagem, TopicoLista, AjusteBeneficios, AjustePreco, AjusteLogos, Valor, Beneficios, Preco, Form, InputLarge, AjusteInput, InputSmall, Botao} from "./IdDoPlanoStyle"



export default function IdDoPlano(){
    return(
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
                <Botao>ASSINAR</Botao>
            </Form>
        </div>
    )
}