import numeros from "./numeros"
import styled from "styled-components";
import seta from "./assets/seta_play.png"
import flip from "./assets/seta_virar.png"
import Perguntas from "./perguntas";
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

    function Selecao(colour){
        {props.setSelection(true)};
        {props.setCor(colour)}
        {props.setContagem(+1)}

    }
    return(
        <div>{numeros.map((i) => <Box indicador1={props.play && props.flashclicado.includes(i)? true : false} indicador2={props.flip && props.flipclicado.includes(i)? true : false} selection={props.selection} data-test="flashcard"><Perguntas indicador1={props.play && props.flashclicado.includes(i)? true : false}  indicador2={props.flip && props.flipclicado.includes(i)? true : false} selection={props.selection} cor={props.cor} numero={i}/>
            <Icon  indicador2={props.flip && props.flipclicado.includes(i)? true : false} onClick={() =>Play(i)}><img src={props.play && props.flashclicado.includes(i) ? flip : seta} alt="seta"/></Icon>
            <Div indicador2={props.flip && props.flipclicado.includes(i)? true : false} selection={props.selection}><Red onClick={()=> Selecao("#FF3030")}>Não lembrei!</Red><Orange onClick={() => Selecao("#FF922E")}>Quase não lembrei</Orange><Green onClick={() => Selecao("#2FBE34")}>Zap!</Green></Div></Box>)}</div>)
}

const Box=styled.div `
width: 300px;
height: ${props => props.indicador1? (props.selection ? "65px" : "131px") : "65px"};

background: ${props => props.indicador1? (props.selection? "#FFFFFF": "#FFFFD5"):"#FFFFFF"};
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-top:25px;
display:${props => props.indicador2? "" : "flex"};
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
display: ${props => props.indicador2? (props.selection ? "none":""): "none"}`;

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
