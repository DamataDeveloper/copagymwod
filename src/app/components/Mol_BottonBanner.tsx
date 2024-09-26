import Image from 'next/image';
import { LinkBanner } from './Ato_LinkBanner';

export const BottonBanner = ()=>{
    return(
        <div className='flex bg-blue-950 w-full h-28 sm:h-36'>   
            <LinkBanner src={"/img/fotos.png"} alt={"Fotos"} href={'#foto'}/>        
            <LinkBanner src={"/img/regulamento.png"} alt={"Regulamento"} href={''}/>
            <LinkBanner src={"/img/local.png"} alt={"Local"} href={'#mapa'}/>
            <LinkBanner src={"/img/data.png"} alt={"Data"} href={'#data'}/>
            {/* <div className="hidden md:flex flex-1">
                <LinkBanner src={"/img/inscricao.png"} alt={"Inscrição"} href={'/inscricao'} />
            </div>            */}
        </div>
    )
}