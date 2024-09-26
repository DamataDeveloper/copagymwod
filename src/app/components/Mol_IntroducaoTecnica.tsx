import { Titulo } from "./Ele_Titulo";

type Props = {
    listaYoutube: {
        id: number;
        src: string;
    }[];
};

export const IntroducaoTecnica = ({ listaYoutube }: Props) => {
    return (
        <div className="flex flex-col w-full mt-10">
        <div className="flex flex-col w-full mt-10"></div>
            <Titulo>Informações técnicas</Titulo>
                <div className="flex flex-col items-center justify-center w-auto h-20 bg-blue-950 ">
                    <b className="text-white md:text-2xl mb-2 text-center">Em breve mais informações</b>
                </div>
            
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pr-3 pl-3">
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
            </div> */}
        </div>
    );
};