import numeros from "./numeros"
import styled from "styled-components";
import seta from "./assets/seta_play.png"
import flip from "./assets/seta_virar.png"
import Perguntas from "./perguntas";
import cards from "./deck";

export default function Caixas(props){
    function Play(index){
        {props.setFlashclicado([...props.flashclicado,index])}
        if(props.play == false){
            {props.setPlay(true)}
        }
        else{
            {props.setFlip(true)}
        }
    }
    return(
        <div>{numeros.map((i) => <Box data-test="flashcard"><Perguntas numero={i}/>
            <Icon onClick={() =>Play(i-1)}><img src={props.play && props.flashclicado.includes(i-1) ? flip : seta} alt="seta"/></Icon></Box>)}</div>
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

