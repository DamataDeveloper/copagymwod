import Image from "next/image"
export const Banner = ({src}:{src:string})=>{
    return(
        <img src={src} alt="" />
    )
}