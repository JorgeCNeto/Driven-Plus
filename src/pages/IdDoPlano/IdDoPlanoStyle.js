import { Link } from "react-router-dom";
import styled from "styled-components";

export const Seta = styled(Link)`
    display: flex;
    justify-content: left;
    margin-top: 24px;
    margin-left: 22px;
`

export const Texto = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin-bottom: 22px;
`

export const Imagem = styled.img`
    width: 129px;
    margin-bottom: 12px;

`

export const TopicoLista = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin-left: 5px;
`

export const AjusteBeneficios = styled.div`
    display: flex;
    margin-bottom: 10px;
`

export const AjustePreco = styled.div`
    display: flex;
    margin-bottom: 4px;
`

export const AjusteLogos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 35px;
`

export const Valor = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`

export const Lista = styled.li`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`

export const Beneficios = styled.div`
    margin-left: 44px;
    margin-bottom: 12px;
`

export const Preco = styled.div`
    margin-left: 40px;
    margin-bottom: 34px;
`

export const InputLarge = styled.input`
    width: 299px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 8px;
    margin-bottom: 8px;    
    box-sizing: border-box;
    ::placeholder{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        padding-left: 14px;
        color: #7E7E7E;
    }
`

export const InputSmall = styled.input`
    width: 145px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 8px;   
    margin-right: 9px;
    box-sizing: border-box;
    ::placeholder{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        padding-left: 6px;
        color: #7E7E7E;
    }
`

export const AjusteInput = styled.div`
    display: flex;
    margin-bottom: 12px;
    padding-left: 10px;
`

export const Botao = styled.div`
    width: 299px;
    height: 52px;    
    background: #FF4791;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
    margin-top: 8px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`



export const BotaoNao = styled.button`
    width: 95px;
    height: 52px;
    background: #CECECE;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-right: 14px;
`

export const BotaoSim = styled.button`
    width: 95px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`

export const ConfirmacaoTexto = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;    
    text-align: center;
    color: #000000;   
`

export const AjusteConfirmacaoTexto = styled.div`
    margin-top: 33px;
    margin-bottom: 47px;
`

export const BotoesOverlay = styled.div`
display: flex;
justify-content: center;
`