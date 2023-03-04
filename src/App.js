import TelaInicial from "./TelaInicial"
import GameScreen from "./TelaDeJogo"
import { useState } from "react"
import styled from "styled-components"

export default function App(){
    const [aparecer,setAparecer]= useState("none")
    const [esconder,setEsconder]= useState("")
    const [contagem,setContagem]= useState(0)
    const [play,setPlay] = useState(false)
    const [flip,setFlip] = useState(false)
    const [flashclicado, setFlashclicado]= useState([])
    const [flipclicado, setFlipclicado] = useState([])
    const [selection,setSelection]= useState(false)
    const [cor,setCor]= useState("")
    return(
        <ContainerPrincipal>
            <TelaInicial esconder={esconder} setEsconder={setEsconder} aparecer={aparecer} setAparecer={setAparecer}/>
            <GameScreen aparecer={aparecer} setAparecer={setAparecer} contagem={contagem} setContagem={setContagem}
            play={play} setPlay={setPlay} flip={flip} setFlip={setFlip} 
            flashclicado={flashclicado} setFlashclicado={setFlashclicado} 
            flipclicado={flipclicado} setFlipclicado={setFlipclicado} cor={cor} setCor={setCor}
            selection={selection} setSelection={setSelection}/>
        </ContainerPrincipal>
    )
}

const ContainerPrincipal=styled.div `
width: 100%;
height: 100%;
margin: 0 auto;`;