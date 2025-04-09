import style from "./DefaultPage.module.css";
import video from '../video/Gradient.webm';
import { Link } from "react-router-dom";
import png from '../image/model.png';
import webp from '../image/model.webp';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import KontaktForm from "../components/KontaktForm";

export default function DefaultPage(){
    return (
       <>
       {/* Forside Sektion 1 - Hero */}
        <section className={style.Hero}>
            <video src={video} type="video/webm"
            muted
            loop
            autoPlay>
            </video>

            <div className={style.HeroText}>
                <h1>Æstetik, performance og ansvarlighed uden kompromiser</h1>
                <button><Link className={style.linktext} to="/Kontakt">Kontakt os</Link></button>
            </div>
        </section>

        {/* Forside Sektion 2 - Billede */}
        <section className={style.forside2}>
            <div className={style.textImages}>
                <h2>Hvad kan vi gøre for dig?</h2>
                <p>Vi hjælper små selvstændige tøjbutikker med at skabe hjemmesider, der ikke kun viser jeres stil, men også jeres engagement for miljøet.</p>
                <p>Vores løsninger kombinerer grøn hosting, energieffektiv design og visuel storytelling, så jeres værdier kommer til udtryk på en måde, der både imponerer og inspirerer. Lad os sammen bygge en hjemmeside, der ikke kun sælger tøj – men fortæller historien om jeres grønne revolution.</p> 
                <br />
                <p>Kan du se forskel på billederne?</p>
                <p>Den ene er en WebP-fil og den anden er en PNG-fil.</p>
                <button><Link className={style.linktext} to="/Bw">Læs mere</Link></button>
                <button><Link className={style.linktext} to="/Quiz">Tag quizzen</Link></button>
            </div>
        
            <div className={style.images}>
                <img src={png} alt="image"/>
                <img src={webp} alt="image"/>
            </div>
        </section>

        {/* Forside Sektion 3 - Animation */}
        <section className={style.forside3}>
            <div className={style.animation}>
                <DotLottieReact 
                    src="https://lottie.host/284394bd-04b6-45cd-80e2-6cb95215ab35/OaYFOHpwKT.lottie"
                    loop
                    autoplay
                />
            </div>
    
            <div className={style.forside3Tekst}>
                <h2>Forbedr din hjemmeside, forbedr din fremtid</h2>
                <p>Vi har hjulpet mange virksomheder med at forbedre deres hjemmesider. Vi har erfaring med at optimere hjemmesider for at maksimere brugeroplevelsen og forretningsmål. Vores ekspertise strækker sig fra grøn hosting til visuel storytelling, og vi har hjulpet virksomheder med at styrke deres digitale tilstedeværelse gennem effektiv design og teknologi. Ved at samarbejde med os kan du få en hjemmeside, der ikke kun ser godt ud, men også understøtter dine forretningsmål og bidrager til en bæredygtig fremtid.</p>
                <button><Link className={style.linktext} to="/OmOs">Mød os</Link></button>
            </div>
        </section>

        {/* Forside Sektion 4 - Citat */}
        <section className={style.forside4}>
            <div>
                <h2>Det siger vores kunder</h2>
            </div>

            <div className={style.citater}>
                <div className={style.quotes}>
                    <p>"Vi havde altid fokus på bæredygtighed i vores tøjproduktion, men med hjælp fra Verdant har vi nu også en hjemmeside, der viser vores engagement på en måde, der taler til vores kunder. Deres grønne løsninger har reduceret vores digitale fodaftryk og styrket vores brandidentitet."</p>
                    <h4>BA10</h4>
                </div>
            
                <div className={style.quotes}>
                    <p>"Før vi samarbejdede med Verdant, havde vi svært ved at kommunikere vores bæredygtige værdier digitalt. Nu har vi en hjemmeside, der ikke kun viser vores produkter, men også fortæller historien om vores miljømæssige ansvar. Det har været en game-changer for vores forretning."</p>
                    <h4>Les Deux</h4>
                </div>
            
                <div className={style.quotes}>
                    <p>"Vi ønskede at skabe en hjemmeside, der var lige så bæredygtig som vores tøj. Verdant hjalp os med at implementere grøn hosting og energieffektiv design, hvilket har reduceret vores CO2-udledning og styrket vores position på markedet som et ansvarligt brand."</p>
                    <h4>Emeli</h4>
                </div>
            </div>
        
            <div className={style.casesKnap}>
                <button><Link className={style.linktext} to="/Cases">Udforsk vores cases</Link></button>
            </div> 
        </section>

        {/* <KontaktForm /> */}
        </>
    )
}