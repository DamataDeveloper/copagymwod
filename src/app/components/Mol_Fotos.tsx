import { Titulo } from "./Ele_Titulo"

type Props = {
    listaFotos: {
        id: number;
        src: string;
    }[];
};
export const Fotos = ({ listaFotos }: Props)=>{
    return(
        <section id="foto" className="mb-10">
            <Titulo>Fotos</Titulo>
            <div className="flex items-center justify-center flex-col w-full h-14 mb-5 bg-blue-950 pl-3 pr-3 pt-3 pb-3 md:w-96">
                <b className="text-white text-xl font-bold md:text-2xl">COPA GYMWOD 2024</b>  
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pr-3 pl-3">
                {listaFotos.map((item) => (
                    <img key={item.id} src={item.src} alt="" />
                    
                ))}
            </div> 

        </section>
    )
}