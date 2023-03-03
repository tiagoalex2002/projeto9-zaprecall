import TelaInicial from "./TelaInicial"
import GameScreen from "./TelaDeJogo"
import { useState } from "react"

export default function App(){
    const [aparecer,setAparecer]= useState("none")
    const [esconder,setEsconder]= useState("")
    const [contagem,setContagem]= useState(0)
    const [play,setPlay] = useState(false)
    const [flip,setFlip] = useState(false)
    const [flashclicado, setFlashclicado]= useState([])
    return(
        <div>
            <TelaInicial esconder={esconder} setEsconder={setEsconder} aparecer={aparecer} setAparecer={setAparecer}/>
            <GameScreen aparecer={aparecer} setAparecer={setAparecer} contagem={contagem} setContagem={setContagem}
            play={play} setPlay={setPlay} flip={flip} setFlip={setFlip} flashclicado={flashclicado} setFlashclicado={setFlashclicado}/>
        </div>
    )
}