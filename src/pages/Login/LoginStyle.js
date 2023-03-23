import styled from "styled-components"
import { Link } from "react-router-dom"

export const Input = styled.input`
    width: 299px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 8px;
    margin-bottom: 16px;    
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

export const Botao = styled.button`
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
`

export const Texto = styled(Link)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #FFFFFF;
`

export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
`

export const Icones = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Imagem = styled.img`
    width: 299px;
    margin-top: 135px;
    margin-bottom: 101px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`