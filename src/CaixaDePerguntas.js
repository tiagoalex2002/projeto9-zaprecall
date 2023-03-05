import numeros from "./numeros"
import styled from "styled-components";
import seta from "./assets/seta_play.png"
import flip from "./assets/seta_virar.png"
import Perguntas from "./perguntas";
import certo from "./assets/icone_certo.png"
import erro from "./assets/icone_erro.png"
import quase from "./assets/icone_quase.png"
import cards from "./deck";
import { useState } from "react";

export default function Caixas(props){

    function Play(index){
        if(props.flashclicado.includes(index)){
           {props.setFlipclicado([...props.flipclicado,index])}
           {props.setFlip(true)}
        }
        else{
            {props.setFlashclicado([...props.flashclicado,index])}
            {props.setPlay(true)}
        }
        console.log(props.flashclicado)
        console.log(props.flipclicado)
        
    }

    function Selecao(index,colour){
        {props.setFinalizado([...props.finalizado,index])}
        {props.setSelection(true)};
        {props.setCores([...props.cores,colour])}
        let cont= props.contagem
        {props.setContagem(cont+1)}
        console.log(props.cores)

    }
    return(
        <div>{numeros.map((i) => <Box finalizado={props.finalizado} indicador1={props.play && props.flashclicado.includes(i)? true : false} indicador2={props.flip && props.flipclicado.includes(i)? true : false} selection={props.selection} flipclicado={props.flipclicado} numero={i} data-test="flashcard" ><Perguntas data-test="flashcard-text" indicador1={props.play && props.flashclicado.includes(i)? true : false}  indicador2={props.flip && props.flipclicado.includes(i)? true : false} selection={props.selection} cores={props.cores} flipclicado={props.flipclicado} flashclicado={props.flashclicado} 
        finalizado={props.finalizado} setFinalizado={props.setFinalizado} numero={i}/>
            <Icon data-test={props.play && props.flashclicado.includes(i) ? "turn-btn" : "play-btn"} indicador2={props.flip && props.flipclicado.includes(i)? true : false} onClick={() =>Play(i)}><img src={props.play && props.flashclicado.includes(i) ? flip : seta} alt="seta"/></Icon>
            <FinalIcon cores={props.cores} finalizado={props.finalizado} numero={i}><img src={props.cores[i-1] === "#2FBE34" ? certo : (props.cores[i-1] === "#FF922E" ? quase : erro)} alt="logo"/></FinalIcon>
            <Div finalizado={props.finalizado} flipclicado={props.flipclicado} numero={i}  indicador2={props.flip && props.flipclicado.includes(i)? true : false} selection={props.selection}><Red data-test="no-btn" onClick={()=> Selecao(i,"#FF3030")}>Não lembrei!</Red><Orange data-test="partial-btn" onClick={() => Selecao(i,"#FF922E")}>Quase não lembrei</Orange><Green data-test="zap-btn" onClick={() => Selecao(i,"#2FBE34")}>Zap!</Green></Div></Box>)}</div>)
}

const Box=styled.div `
width: 300px;
height: ${props => props.indicador1? (props.selection && props.flipclicado.includes(props.numero)? (props.finalizado.includes(props.numero)? "65px":"131px") : "131px") : "65px"};

background: ${props => props.indicador1? (props.selection && props.flipclicado.includes(props.numero)? (props.finalizado.includes(props.numero)?"#FFFFFF": "#FFFFD5" ): "#FFFFD5"):"#FFFFFF"};
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-top:25px;
display:${props => props.indicador2? (props.finalizado.includes(props.numero)? "flex" : ""): "flex"};
flex-direction: row`;

const Icon=styled.button `
width: 30px;
height: 33px;
margin-left:160px;
display: ${props => props.indicador2? "none" : ""}`
;

const Div=styled.div `
display:flex;
flex-direction:row;
display: ${props => props.indicador2? (props.selection && props.flipclicado.includes(props.numero) ? (props.finalizado.includes(props.numero)? "none":""):""): "none"}`;

const Red=styled.button `
width: 85.17px;
height: 37.17px;
background: #FF3030;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;`;

const Green=styled.button `
width: 85.17px;
height: 37.17px;

background: #2FBE34;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

`;

const Orange=styled.button `
width: 85.17px;
height: 37.17px;

background: #FF922E;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;
`;

const FinalIcon=styled.div`
width: 23px;
height: 23px;
margin-left:160px;
display: ${props => props.finalizado.includes(props.numero)? "" : "none"}
`
