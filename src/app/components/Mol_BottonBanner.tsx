import Image from 'next/image';
import { LinkBanner } from './Ato_LinkBanner';

export const BottonBanner = ()=>{
    return(
        <div className='flex bg-blue-950 w-full h-28 sm:h-36'>   
            <LinkBanner src={"/img/fotos.png"} alt={"FOTOS"} href={'#foto'}/>        
            <LinkBanner src={"/img/regulamento.png"} alt={"REGULAMENTO / SUMULA"} href={'https://drive.google.com/drive/folders/1OosApdEtp3ex0CufUsh8WiEjF6cS7vd7?usp=sharing'}/>
            <LinkBanner src={"/img/local.png"} alt={"LOCAL"} href={'#mapa'}/>
            <LinkBanner src={"/img/data.png"} alt={"DATA"} href={'#data'}/>
            {/* <div className="hidden md:flex flex-1">
                <LinkBanner src={"/img/inscricao.png"} alt={"Inscrição"} href={'/inscricao'} />
            </div>            */}
        </div>
    )
}