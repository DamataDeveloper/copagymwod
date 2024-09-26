//import { lusitana, anton } from '@/app/ui/fonts';

export const Titulo = ({children} : {children:string})=>{
    return(
        <div className="mb-5">
            <h2 className={` flex w-full uppercase justify-center text-2xl  font-bold text-blue-950 sm:text-3xl lg:text-4xl`}> {children}</h2>
            
        </div>
    )
}