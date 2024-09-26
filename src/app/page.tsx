import Image from "next/image";
import { NavBar } from "./components/Mol_NavBar";
import { Banner } from "./components/Mol_Banner";
import { BottonBanner } from "./components/Mol_BottonBanner";

import { Body } from "./components/Org_Body";
import { Footer } from "./components/Org_Footer";
import { Header } from "./components/Org_Header";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <Header>        
          <NavBar />
          <Banner src="img/banner.jpg" />
          <BottonBanner />        
      </Header>
      
      <Body />
      <Footer />
    </div>
  );
}
