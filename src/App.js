import TelaInicial from "./TelaInicial"
import TelaDeJogo from "./TelaDeJogo"
import { useState } from "react"

export default function App(){
    const [aparecer,setAparecer]= useState("none")
    const [esconder,setEsconder]= useState("")
    return(
        <div>
            <TelaInicial esconder={esconder} setEsconder={setEsconder} aparecer={aparecer} setAparecer={setAparecer}/>
            <TelaDeJogo aparecer={aparecer} setAparecer={setAparecer}/>
        </div>
    )
}