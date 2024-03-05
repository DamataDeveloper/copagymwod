import { Banner } from "./components/Banner";
import { Introducao } from "./components/introducao";
import { IntroducaoTecnica } from "./components/introducao_tecnica/IntroducaoTecnica";
import { LinkPagina } from "./components/linkPagina/LinkPagina";
import { LinkSocial } from "./components/LinkSocial";
import { listaYoutube } from "./components/introducao_tecnica/data/listaYoutube";
import { Local } from "./components/Local";
import { Data } from "./components/Data";
const Page = () => {
  return (
    <>
      <header className="mx-auto max-w-7xl">
        <LinkSocial />
        <Banner />
        <LinkPagina />
      </header>
      <main className="mx-auto max-w-7xl">
        <Introducao />        
        <IntroducaoTecnica listaYoutube={listaYoutube}/>    
        <Local/>  
        <Data/>  
      </main>
      <footer className="mx-auto max-w-7xl">
        <LinkSocial />
      </footer>
    </>
  );
};

export default Page;