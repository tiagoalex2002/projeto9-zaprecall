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
    return(
        <div>{numeros.map((i) => <Box data-test="flashcard"><Perguntas indicador1={props.play && props.flashclicado.includes(i)? true : false}  indicador2={props.flip && props.flipclicado.includes(i)? true : false} numero={i}/>
            <Icon onClick={() =>Play(i)}><img src={props.play && props.flashclicado.includes(i) ? flip : seta} alt="seta"/></Icon></Box>)}</div>
    )
}

const Box=styled.div `
width: 300px;
height: 65px;

background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-top:25px;
display:flex;
flex-direction: row;`;

const Icon=styled.button `
width: 30px;
height: 33px;
margin-left:160px`;

