import cards from "./deck"
import styled from "styled-components"

export default function Perguntas(props){
    let question= cards[props.numero - 1].question
    let answer= cards[props.numero-1].answer
    return(
       <div>
         <Enunciado indicador1={props.indicador1}>Pergunta {props.numero}</Enunciado>
         <Questao indicador1={props.indicador1}>{question}</Questao>
         <Resposta indicador2={props.indicador2}>{answer}</Resposta>
        
       </div>

    )
}

const Enunciado=styled.div `
      display: ${props => props.indicador1? "none":""}`;

const Questao=styled.div `
display: ${props => props.indicador1 ? "" : "none"}`

const Resposta= styled.div `
display: ${props => props.indicador2 ? "":"none"}`