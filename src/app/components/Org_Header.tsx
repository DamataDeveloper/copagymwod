import { ReactNode } from "react"
import { Banner } from "./Mol_Banner"
import { BottonBanner } from "./Mol_BottonBanner"
import { NavBar } from "./Mol_NavBar"


export const Header = ({children}: {children: ReactNode}) => {
    return (
        <header >
            {children}           
        </header>
    )
}