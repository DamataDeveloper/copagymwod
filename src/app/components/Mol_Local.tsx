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
                    
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4375.70216470259!2d-46.65867402388337!3d-23.577963262203856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59e983fcbcc7%3A0x7c5e5686d18ebf5!2sGin%C3%A1sio%20Estadual%20Geraldo%20Jos%C3%A9%20de%20Almeida!5e1!3m2!1sen!2sbr!4v1727295542845!5m2!1sen!2sbr"
                    style={{ border: 0 }}
                    // allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"                 
                >              
                </iframe>
            </div>
            <div className="flex flex-col bg-blue-950 h-28 justify-center pr-3 pl-3 pt-3 pb-3 md:w-4/5  md:h-36">
                <p className="text-white md:text-2xl mb-2">LOCAL: Ginásio Estadual Geraldo José de Almeida "IBIRAPUERA"</p>
                <p className="text-white md:text-2xl"> <Link className="hover:font-bold" href="https://www.google.com/maps/place/Gin%C3%A1sio+Estadual+Geraldo+Jos%C3%A9+de+Almeida/@-23.5779633,-46.658674,1005m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94ce59e983fcbcc7:0x7c5e5686d18ebf5!8m2!3d-23.5779682!4d-46.6560991!16zL20vMGJyN2I3?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D">R. Manuel da Nóbrega, 1361 - Ibirapuera, São Paulo - SP, 04001-909</Link> </p>        
            </div>
        </div>
       </section>
    )
}