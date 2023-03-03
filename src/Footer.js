import styled from "styled-components";

export default function Footer(props){
      return(
        <Rodapé data-test="footer">{props.contagem}/8 CONCLUÍDAS</Rodapé>
      )
}


const Rodapé=styled.div `
width: 100%;
height: 70px;
background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
justify-content: center;
display:flex;
padding-top: 30px;

`;