import styled from "styled-components"
import logo from "./assets/logo.png"
import Caixas from "./CaixaDePerguntas";

export default function GameScreen(){
    return(
        <Background>
            <Container>
                <Imagem src={logo} alt="logo"/>
                <GameTitle>ZapRecall</GameTitle>
                <Caixas/>
            </Container>
        </Background>
    )

}


const Background= styled.div`
  background: #FB6B6B;
  align-tems: center;
  justify-content: center;
      `;

const Container=styled.div`
     display: flex;
     flex-direction: row;`;

const Imagem=styled.img`
width: 52px;
height: 60px;`;

const GameTitle=styled.div`
width: 203.17px;
height: 44px;
font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.012em;
color: #FFFFFF;
`;