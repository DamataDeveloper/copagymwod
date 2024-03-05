import Image from 'next/image';
import { Link } from './Link';
export const LinkPagina = ()=>{
    return(
        <div className='flex bg-blue-950 w-full h-28 sm:h-36'>           
            <Link src={"/img/regulamento.png"} alt={"Regulamento"} href={'https://drive.google.com/file/d/1MV81LwAlC8LBJ4EL4tJgDvWRFFKK0m5N/view'}/>
            <Link src={"/img/local.png"} alt={"Local"} href={'#mapa'}/>
            <Link src={"/img/data.png"} alt={"Data"} href={'#data'}/>
        </div>
    )
}