// pages/index.js
import Head from "next/head";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import GraphicDesign from "./components/GraphicDesign";
import WebDeveloper from "./components/WebDeveloper";
import Separator from "./components/Separator";
import ProyectsContact from "./components/ProyectsContact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fer Thomas | Portfolio</title>
        <meta
          name="description"
          content="Desarrollador Web, Móvil y Diseñador Gráfico"
        />
      </Head>
      <div className="grid grid-cols-[80px_1fr] overflow-hidden">
        {" "}
        <NavBar />
        <div>
          <section id="home" className="w-screen">
            <HeroSection />
          </section>
          <section id="aboutme" className="w-screen">
            <AboutMe />
          </section>
          <section id="graphicdesign" className="w-screen">
            <GraphicDesign />
          </section>
          <Separator/>
          <section id="webdevelopment" className="w-screen">
            <WebDeveloper />
          </section>
          <section id="proyectcontact" className="w-screen">
            <ProyectsContact />
          </section>
        </div>
      </div>
    </>
  );
}
