import { Introducao } from "./Mol_Introducao";
import { IntroducaoTecnica } from "./Mol_IntroducaoTecnica";
import { listaYoutube } from "../data/listaYoutube";
import {listaFoto} from "../data/listaFoto";
import { Local } from "./Mol_Local";
import { Data } from "./Mol_Data";
import { Fotos } from "./Mol_Fotos";

export const Body =()=>{
    return(
        <div>
            <Introducao/>
            <IntroducaoTecnica listaYoutube={listaYoutube}/>
            <Local/>
            <Data/>
            <Fotos listaFotos={listaFoto}/>            
        </div>
    )
}