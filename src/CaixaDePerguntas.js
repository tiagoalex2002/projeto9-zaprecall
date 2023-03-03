import numeros from "./numeros"
import styled from "styled-components";
import seta from "./assets/seta_play.png"

export default function Caixas(){
    return(
        <div>{numeros.map((i)=>(<Box><div>Pergunta {i}</div>
        <Icon><img src={seta} alt="seta"/></Icon></Box>))}</div>
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

