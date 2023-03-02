import numeros from "./numeros"

export default function Caixas(){
    return(
        <div>{numeros.map((i)=>(<Box>Pergunta {i}</Box>))}</div>
    )
}

const Box=styled.div`
width: 300px;
height: 65px;

background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-top:25px`;