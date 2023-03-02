import styled from "styled-components"
import logo from "./assets/logo.png" 

export default function TelaInicial(){
    return(
        <Background>
            <Imagem src={logo} alt="logo"/>
            <Titulo>ZapRecall</Titulo>
            <Button>Iniciar!</Button>
        </Background>
    )
}

const Background= styled.div`
      background: #FB6B6B;
      justify-content:center;
      `;

const Imagem = styled.img`
      width: 136 px;
      height: 161 px;
      margin-top:148px;
      `;

const Titulo=styled.div`
      width: 257px;
      height: 59px;
      font-family: Righteous;
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 45px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.012em;
      color: #FFFFFF;
      margin-left: 13px;
      `;

const Button= styled.button`
      border-radius: 5px;
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #D70900;
      width: 246px;
      height: 54px;
      background: #FFFFFF;
      border: 1px solid #D70900;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
      margin-bottom: 202px;
      `;


      
