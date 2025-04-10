import style from './OmOs.module.css'
import gruppe from '../image/gruppebillede.webp'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import katrine from '../image/katrine.webp'
import mie from '../image/mie.webp'
import ditte from '../image/ditte.webp'
import lærke from '../image/lærke.webp'
import KontaktForm from "../components/KontaktForm";

export default function App(){
    return (
        <>
        <section className={style.OmOsHero}>
            <img src={gruppe} alt="image"/>
                <div className={style.OmOsHeroTekst}>
                    <h2>Vi skaber bæredygtige hjemmesider til virksomheder</h2>
                    <p>Som et webbureau med fokus på bæredygtighed hjælper vi virksomheder med at styrke deres digitale tilstedeværelse uden at gå på kompromis med miljøet. Vi kombinerer grøn hosting, energieffektiv kodning og æstetisk design for at levere hjemmesider, der både er funktionelle og miljøvenlige. Vores mission er at gøre det nemt for virksomheder at tage ansvar digitalt og samtidig skabe en stærk forbindelse til deres kunder.</p>
                </div>
            <DotLottieReact
            src="https://lottie.host/9f271a6e-f4b7-487e-a469-617446c9c7be/McHmMKuhz9.lottie"
            loop
            autoplay
            style={{
              position: 'absolute',
              height: '200px',
              width:'400px',
              top: '475px',
              left: '0px',
            }} 
          />
        </section>
        <h2 className={style.OmOsTitel}>
            Hvem er vi?
        </h2>

         <section className={style.OmOsSektion}>
                <div className={style.profilBoksOne}>
                    <div className={style.profilTekst}>
                        <h2>
                            Katrine – Backend Developer
                        </h2>
                        <p>
                            Katrine står for den tekniske kerne i jeres CO2 optimerede hjemmeside. Hun udvikler
                            løsninger, der er både stabile og energieffektive, så jeres webshop kan håndtere alt
                            fra produktvisninger til betalinger uden unødvendigt energispild. Med Katrine bag 
                            kulisserne er jeres hjemmeside klar til fremtiden.
                        </p>
                    </div>
                    <img src={katrine} className={style.profilImgOne}></img>
                </div>
        
                <div className={style.profilBoksOne}>
                    <img src={mie} className={style.profilImgTwo}></img>
                    <div className={style.profilTekstTwo}>
                        <h2>
                            Mie – Frontend Developer
                        </h2>
                        <p>
                            Mie sikrer, at jeres hjemmeside ikke kun ser godt ud, men også fungerer optimalt
                            på tværs af platforme. Hun fokuserer på energieffektivt design og brugervenlighed, så'
                            jeres kunder får en smidig oplevelse, samtidig med at hjemmesiden belaster miljøet mindst muligt.
                        </p>
                    </div>
                </div>
        
                <div className={style.profilBoksOne}>
                    <div className={style.profilTekst}>
                        <h2>
                            Ditte – Grafisk Designer
                        </h2>
                        <p>
                            Ditte er passioneret omkring at skabe visuelt smukke og bæredygtige designs, der
                            fremhæver tøjbutikkers unikke identitet. Hun sørger for, at hver hjemmeside ikke
                            kun ser fantastisk ud, men også afspejler butikkens værdier og bæredygtige profil.
                            Med Ditte på holdet får jeres visuelle udtryk en grøn og stilfuld dimension.
                        </p>
                    </div>
                    <img src={ditte} className={style.profilImgTwo}></img> {/* Husk at tilføje "import billede from './assets/xyz.jpg'" og indsæt billede i assets mappe */}
                </div>
        
                <div className={style.profilBoksOne}>
                    <img src={lærke} className={style.profilImgOne}></img> {/* Husk at tilføje "import billede from './assets/xyz.jpg'" og indsæt billede i assets mappe */}
                    <div className={style.profilTekstTwo}>
                        <h2>
                            Lærke – Paid Media og Marketing Specialist
                        </h2>
                        <p>
                            Lærke er eksperten i betalt annoncering og digital markedsføring. Hun sikrer,
                            at jeres kampagner rammer de rette målgrupper via platforme som Google Ads og
                            sociale medier. Med fokus på strategi og optimering hjælper hun med at maksimere
                            værdien af jeres marketingbudget.
                        </p>
                    </div>
                </div>
            </section>
            <KontaktForm />
            </>
    )
}