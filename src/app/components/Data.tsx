import { Titulo } from "./Titulo"

export const Data = ()=>{
    return(
        <section id="data" className="mb-10">
            <Titulo>DATAS</Titulo>
            <div className="flex flex-col bg-blue-950 text-white gap-5 pt-5 pb-5 ml-3 mr-l md:text-xl lg:flex-row">
                <div className="flex flex-col pr-3 pl-3 gap-3 lg:flex-1 lg:pr-10 lg:pl-10">
                    <h3 className="text-xl font-bold md:text-2xl ">INSCRICOES:</h3>
                    <p className="text-green-400 text-2xl"> <b>Pré-Inscrição:</b>  04 de Março a 30 de Abril </p>
                    <p> <b>Abertura das inscrições: </b>  06 de Maio de 2024 </p>
                    <p> <b>Encerramento das inscrições:</b>  10 de Agosto de 2024 </p>
                    <p> <b>Envio da Programação dos grupos e rodízio:</b>  24 de Agosto de 2024 </p>
                </div>
                <div className="flex flex-col pr-3 pl-3 gap-3 lg:flex-1 lg:pr-10 lg:pl-10">
                    <h3 className="text-xl font-bold md:text-2xl">DATA DO EVENTO:</h3>
                    <p> <b>DATA:</b>  21 de Setembro de 2024</p>
                   
                </div>
            </div>        
        </section>
    )
} 