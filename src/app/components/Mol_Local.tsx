import Image from "next/image"
import Link from 'next/link'
import { Titulo } from "./Ele_Titulo"


export const Local = ()=>{
    return(
       <section className="flex flex-col w-full mt-10 mb-16" id="mapa">
       <Titulo>LOCAL COPA GYMWOD</Titulo>
        <div className="flex flex-col justify-center pr-3 pl-3 items-center">
            <div className="md:w-4/5">
                
                <iframe 
                    className=" flex w-full h-96"
                    id="googleMapIframe"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1292.8452082499714!2d-46.65362032523375!3d-23.578553187700294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59eb7929e89f%3A0x6eddb5eadda82476!2sGin%C3%A1sio%20Poliesportivo%20do%20Ibirapuera%20-%20%22Mauro%20Pinheiro%22!5e0!3m2!1sen!2sbr!4v1739536570926!5m2!1sen!2sbr" 
                    style={{ border: 0 }}                    
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"    
                >                        
                </iframe>
            </div>
            <div className="flex flex-col bg-blue-950 h-28 justify-center pr-3 pl-3 pt-3 pb-3 md:w-4/5  md:h-36">
                <p className="text-white md:text-2xl mb-2">LOCAL: Ginásio Poliesportivo do Ibirapuera - "Mauro Pinheiro"</p>               
                <p className="text-white md:text-2xl"> <Link className="hover:font-bold" href="https://maps.app.goo.gl/bVbRoLcYKqMA1zGm8" target="_blank">R. Abílio Soares, 1300 - Paraíso, São Paulo - SP</Link> </p>        
            </div>
        </div>
       </section>
    )
}