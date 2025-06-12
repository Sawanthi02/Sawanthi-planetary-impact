import Image from "next/image";
import UspsItem from "./components/UspsItem/UspsItem";

import hero from "../public/hero.jpg";
import nederzettingsplanning from "../public/nederzettingsplanning.jpg";
import juridisch from "../public/juridisch.jpg";
import infrastructuur from "../public/infrastructuur.jpg";
import betaalplannen from "../public/betaalplannen.jpg";
import news from "../public/news.jpg";

// const made so it can be easily expanded with more items in the future, for each item a uspsItem will be made on the page.

const Usps = [
  {
    href: "Nederzettingsplanning",
    title: "Pioneer Nederzettingsplanning",
    paragraph: "Wij verkopen je niet alleen grond - we helpen je bij het plannen van je complete Martiaanse boerderij. Onze gecertificeerde exogeologen en atmosferische ingenieurs bieden uitgebreide locatieanalyse, inclusief bodemsamenstelling rapporten.",
    imgSrc: nederzettingsplanning  
  },
  {
    href: "Eigendomsverzekering",
    title: "Juridische eigendomsverzekering",
    paragraph: "ls het enige Mars vastgoedkantoor met juridische erkenning op beide planeten, garanderen wij dat je eigendomsrechten beschermd zijn onder zowel de internationale wetgeving van de Aarde als het opkomende Martiaanse Koloniale Handvest.",
    imgSrc: juridisch
  },
  {
    href: "Infrastructuurontwikkeling",
    title: "Infrastructuurontwikkeling",
    paragraph: "Waarom wachten tot je aankomt om te beginnen met bouwen? Onze robotische bouwploegen kunnen beginnen met het voorbereiden van je grond jaren voor je aankomst. Wij bieden funderingsleggen zodat je direct van het transport shuttle op je bewoonbare eigendom kunt stappen.",
    imgSrc: infrastructuur
  },
  {
    href: "Betaalplannen",
    title: "Flexibele Betaalplannen",
    paragraph: "Erkennend dat interplanetair vastgoed een significante investering is, bieden wij uitgebreide 50-jarige betaalplannen met opties om te betalen in Aarde valuta's, Mars Koloniale Credits, of belangrijke cryptocurrencies.",
    imgSrc: betaalplannen
  }
]

// Main page component. 
// First time using Tailwind and nodeJS.

export default function Home() {
  return (
    <>
      <main>
        <div className="relative w-full h-[60vh]">
           <Image src={hero} alt="Hero top banner displaying the surface of Mars" fill className="object-cover"/>
        </div>
        <div className="flex flex-col items-center text-center text-gray-500 p-8">
          <h1 className="font-sans text-2xl lg:text-6xl p-4 ">&quot;Maak werk van Mars&quot;</h1>
          <p className="font-sans text-lg lg:text-2xl">Mars is de toekomst. Planetary Impact helpt u met het zoeken naar een geschikte plek voor uw kolonie.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-8">
          {Usps.map(({href, title, paragraph, imgSrc }) => (
            <UspsItem key={href} href={href} title={title} paragraph={paragraph} imgSrc={imgSrc} />
          ))}
        </div>
        <div className="mb-15 grid grid-cols-1 lg:grid-cols-2 pl-4 pr-4 lg:pl-16 lg:pr-16 pt-4 pb-4" style={{backgroundColor: "#CA433C"}}>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <h1 className="text-white font-sans text-3xl underline mb-4">Recent News</h1>
              <h2 className="text-cyan-900 text-3xl justify-self-start lg:justify-self-end mb-4">EVENT</h2>
            </div>
            
            <p className="text-white font-sans text-xl pb-4">SpaceX richt zich op 2026 voor Eerste Onbemande Mars Missie. Deze ontwikkeling vertegenwoordigt een grote sprong voorwaarts voor Mars kolonisatie infrastructuur, waarbij industrie-experts significante stijgingen voorspellen in Martiaanse vastgoedwaarden nu de Rode Planeet steeds toegankelijker wordt.</p>
          </div>
          <Image src={news} alt="Image of planet Mars" className="justify-self-center lg:justify-self-end max-w-3/4 h-auto"/>
        </div>
      </main>
    </>
  );
}
