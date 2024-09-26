import { Titulo } from "./Ele_Titulo";

export const Data = ()=>{
    return(
        <section id="data" className="mb-10 ">
            <Titulo>DATAS</Titulo>
            <div className="flex flex-col bg-blue-950 text-white gap-5 pt-10 pb-10  md:text-xl lg:flex-row">
                <div className="flex flex-col pr-3 pl-3 gap-3 lg:flex-1 lg:pr-10 lg:pl-10">
                    <h3 className="text-xl font-bold md:text-2xl ">INSCRICOES:</h3>
                    <p > <b>Pré-Inscrição:</b>  Em breve </p>
                    <p > <b>Abertura das inscrições: </b>  Em breve </p>
                    <p > <b>Encerramento das inscrições:</b> Em breve </p>
                    <p > <b>Envio da Programação dos grupos e rodízio:</b> Em breve</p>
                </div>
                <div className="flex flex-col pr-3 pl-3 gap-3 lg:flex-1 lg:pr-10 lg:pl-10">
                    <h3 className="text-xl font-bold md:text-2xl">DATA DO EVENTO:</h3>
                    <p > <b>DATA:</b>  17 e 18 de Maio de 2025</p>                   
                </div>
            </div>        
        </section>
    )
} 