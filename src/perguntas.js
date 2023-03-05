import cards from "./deck"
import styled from "styled-components"

export default function Perguntas(props){
    let question= cards[props.numero - 1].question
    let answer= cards[props.numero-1].answer
    return(
       <div>
         <Enunciado finalizado={props.finalizado} numero={props.numero} flipclicado={props.flipclicado} indicador1={props.indicador1} cores={props.cores} selection={props.selection} indicador2={props.indicador2}>Pergunta {props.numero}</Enunciado>
         <Questao indicador1={props.indicador1} indicador2={props.indicador2}>{question}</Questao>
         <Resposta finalizado={props.finalizado}flashclicado={props.flashclicado} numero={props.numero} flipclicado={props.flipclicado} indicador2={props.indicador2} selection={props.selection}>{answer}</Resposta>
        
       </div>

    )
}

const Enunciado=styled.div `
      display: ${props => props.indicador1? ( props.selection && props.flipclicado.includes(props.numero)? (props.selection && props.finalizado.includes(props.numero) ? "" : "none" ): "none"):""};
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-decoration-line: ${props => props.selection && props.indicador2? "line-through" : "" };
      color: ${props => props.selection && props.indicador2? (props.selection && props.finalizado.includes(props.numero)? props.cores[props.numero-1] :" #333333" ) : " #333333"}`;

const Questao=styled.div `
display: ${props => props.indicador1 ? (props.indicador2? "none":""): "none"}`

const Resposta= styled.div `
display: ${props => props.indicador2 ? (props.selection && props.finalizado.includes(props.numero)? "none":""):"none"}`