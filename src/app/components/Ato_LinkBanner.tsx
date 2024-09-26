import Image from "next/image"
import Link from 'next/link'
//import { lusitana, anton } from '@/app/ui/fonts';
type Props = {
    src: string;
    alt: string;
    href: string;
}

export const LinkBanner = ({src, alt, href} : Props)=>{
    return(
        <div className='flex flex-1'>
            <Link  
                className='transition-all duration-300 ease-in-out transform bg-blue-950 hover:bg-blue-800 group flex flex-col flex-1 items-center justify-around' 
                href={href}>
                <img
                    className='flex w-14 h-14 group-hover:w-16 group-hover:h-16 transition-all duration-300 ease-in-out transform' 
                    src={src} 
                    alt={alt} 
                />
                <span className={ ` text-white font-bold text-base group-hover:text-lg transition-all duration-300 ease-in-out transform`}>
                    {alt}
                </span>
            </Link>
        </div>
    )
}