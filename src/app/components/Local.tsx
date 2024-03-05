import Image from "next/image"
import { Titulo } from "./Titulo"

export const Local = ()=>{
    return(
       <section className="flex flex-col w-full mt-10 mb-16" id="mapa">
       <Titulo>LOCAL COPA GYMWOD</Titulo>
        <div className="flex flex-col justify-center pr-3 pl-3 items-center">
            <div className="md:w-4/5">
                <iframe
                    className=" flex w-full h-96"
                    id="googleMapIframe"
                    
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.72090423751!2d-46.65599082571285!3d-23.578465262218796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59eb7929e89f%3A0x6eddb5eadda82476!2sGin%C3%A1sio%20Poliesportivo%20do%20Ibirapuera%20-%20%22Mauro%20Pinheiro%22!5e0!3m2!1sen!2sbr!4v1709150931751!5m2!1sen!2sbr"
                    style={{ border: 0 }}
                    // allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"                 
                >              
                </iframe>
            </div>
            <div className="flex flex-col bg-blue-950 h-28 justify-center pr-3 pl-3 pt-3 pb-3 md:w-4/5  md:h-36">
                <p className="text-white md:text-2xl ">LOCAL: GINÁSIO MAURO PINHEIRO</p>
                <p className="text-white md:text-2xl"> <a className="hover:font-bold" href="https://www.google.com/maps/place/Gin%C3%A1sio+Poliesportivo+do+Ibirapuera+-+%22Mauro+Pinheiro%22/@-23.5781696,-46.653515,16z/data=!4m6!3m5!1s0x94ce59eb7929e89f:0x6eddb5eadda82476!8m2!3d-23.5784702!4d-46.6534159!16s%2Fg%2F11b774rlsr?hl=en&entry=ttu">R. Abílio Soares, 1300 - Paraíso, São Paulo – SP</a> </p>        
            </div>
        </div>
       </section>
    )
}