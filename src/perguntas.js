import cards from "./deck"
import styled from "styled-components"

export default function Perguntas(props){
    let question= cards[props.numero - 1].question
    let answer= cards[props.numero-1].answer
    return(
       <div>
         <Enunciado>Pergunta {props.numero}</Enunciado>
         <Questao>{question}</Questao>
         <Resposta>{answer}</Resposta>
        
       </div>

    )
}

const Enunciado=styled.div `
display: ${props => props.play ? "none":""}`;

const Questao=styled.div `
display: ${props => props.play ? "" : "none"}`

const Resposta= styled.div `
display: ${props => props.flip ? "":"none"}`