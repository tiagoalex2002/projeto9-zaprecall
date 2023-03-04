import styled from "styled-components"
import logo from "./assets/logo.png"
import Caixas from "./CaixaDePerguntas";
import Footer from "./Footer";

export default function GameScreen(props){
    return(
        <Background aparecer={props.aparecer}>
            <Container>
                <Imagem src={logo} alt="logo"/>
                <GameTitle>ZapRecall</GameTitle>
            </Container>
            <Caixas data-test="flashcard" play={props.play} setPlay={props.setPlay} flashclicado={props.flashclicado} setFlashclicado={props.setFlashclicado} flip={props.flip} setFlip={props.setFlip} flipclicado={props.flipclicado} setFlipclicado={props.setFlipclicado}
            cor={props.cor} setCor={props.setCor} selection={props.selection} setSelection={props.setSelection} contagem={props.contagem} setContagem={props.setContagem}/>
            <Footer contagem={props.contagem}/>
        </Background>
    )

}


const Background= styled.div`
  background: #FB6B6B;
  align-tems: center;
  justify-content: center;
  margin: 0 auto;
  display: ${props => props.aparecer};
      `;

const Container=styled.div`
     display: flex;
     flex-direction: row;
     align-tems: center;
     justify-content: center;
     margin: 0 auto;`;

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