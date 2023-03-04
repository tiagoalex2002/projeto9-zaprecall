import cards from "./deck"
import styled from "styled-components"

export default function Perguntas(props){
    let question= cards[props.numero - 1].question
    let answer= cards[props.numero-1].answer
    return(
       <div>
         <Enunciado indicador1={props.indicador1} cor={props.cor} selection={props.selection} indicador2={props.indicador2}>Pergunta {props.numero}</Enunciado>
         <Questao indicador1={props.indicador1} indicador2={props.indicador2}>{question}</Questao>
         <Resposta indicador2={props.indicador2} selection={props.selection}>{answer}</Resposta>
        
       </div>

    )
}

const Enunciado=styled.div `
      display: ${props => props.indicador1? (props.selection ? "" : "none"):""};
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-decoration-line: ${props => props.selection && props.indicador2? "line-through" : "" };
      color: ${props => props.selection && props.indicador2? props.cor : " #333333"}`;

const Questao=styled.div `
display: ${props => props.indicador1 ? (props.indicador2? "none":""): "none"}`

const Resposta= styled.div `
display: ${props => props.indicador2 ? (props.selection ? "none":""):"none"}`