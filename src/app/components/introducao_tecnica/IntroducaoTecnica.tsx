// import { Titulo } from "../Titulo";


// type Props = {
//     listaYoutube: {
//         id: number;
//         src: string;
//     }[]
// }
// export const IntroducaoTecnica = ({listaYoutube} : Props)=>{
//     return(
//         <div className="flex flex-col w-full mt-10">           
//             <Titulo>INFORMACAO TECNICA</Titulo>
//             <div className="flex flex-col gap-5 pr-3 pl-3 md:flex-row">
//                 <section className="flex flex-col gap-5  md:flex-1 lg:flex-row"> 
//                 {
//                     listaYoutube.map((item)=>(
//                         <div key={item.id} className="flex w-full justify-center ">
//                             <iframe 
//                                 className="flex w-full  aa:h-56 bb:h-64 sm:h-72 lg:w-28" 
//                                 src={item.src} 
//                                 title="YouTube video player" 
//                                 frameBorder="0" 
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//                                 allowFullScreen>                            
//                             </iframe>
//                         </div>
//                     ))
//                 }               
//                 </section>
//                 <div className="flex flex-col w-full h-10 bg-blue-950 pl-3 pr-3 pt-3 pb-3  md:w-52">
//                     ...
//                 </div>
//             </div>
//         </div>
//     )
// }

import { Titulo } from "../Titulo";

type Props = {
    listaYoutube: {
        id: number;
        src: string;
    }[];
};

export const IntroducaoTecnica = ({ listaYoutube }: Props) => {
    return (
        <div className="flex flex-col w-full mt-10">
            <Titulo>INFORMACAO TECNICA</Titulo>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pr-3 pl-3">
                {listaYoutube.map((item) => (
                    <div key={item.id} className="flex w-full justify-center ">
                        <iframe
                            className="flex w-full h-72"
                            src={item.src}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
                <div className="flex flex-col w-full h-10 bg-blue-950 pl-3 pr-3 pt-3 pb-3 md:w-52">
                    ...
                </div>
            </div>
        </div>
    );
};