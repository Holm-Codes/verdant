import style from'./Cases.module.css';
import case1 from '../image/case1.webp';
import case2 from '../image/case2.webp';
import case3 from '../image/case3.webp';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


export default function HorizontalScroll() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollRef.current;
      if (container) {
        container.scrollLeft = window.scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <>
  
      {/* Sticky overskrift øverst på siden */}
      <div className={style.stickyhHeader}>
        <h1>Se hvordan vi skaber fremtidens web – i dag</h1>
        <p>
        Hos Verdant tror vi på webdesign med omtanke – og det starter med stærke samarbejder. Her kan du gå på opdagelse i vores tidligere projekter, som ikke bare viser, hvad vi kan, men hvad vi kan skabe sammen med fokus på digitale løsninger, der er optimeret til både brugeroplevelse og CO2-aftryk.
        </p>
        <DotLottieReact
            src="https://lottie.host/9f271a6e-f4b7-487e-a469-617446c9c7be/McHmMKuhz9.lottie"
            loop
            autoplay
            style={{
                    position: 'absolute',
                    height: '300px',
                    width:'600px',
                    top: '150px',
                    left: '50px',
            }} />
      </div>




      {/* Dummy div med stor højde for at kunne scrolle nedad */}
      <div style={{ height: '500vh' }}></div>

      {/* Horisontal scroll-sektion */}
      <div className={style.horizontalScroll} ref={scrollRef}>
        <div className={style.scrollContent}>

          {/* Panel 1 med unik baggrundsfarve */}
          <div className={style.panel} className={style.bgBeige} className={style.case1}>
            <img src={case1} alt="Case 1" />
            <div className={style.text}>
              <h2>Stilren branding til moderne modeunivers</h2>
              <p>
                Vi har udviklet en visuel identitet og en komplet webløsning til et fashion-brand med fokus på æstetik og enkelhed. 
                Løsningen kombinerer bløde farver, typografi og struktureret indhold for at skabe et univers, der understøtter brandets elegante og tidløse udtryk. 
                Designet er responsivt og brugervenligt med fokus på den visuelle præsentation af kollektionen.
              </p>
              <a href="#" className={style.cta-button}>Læs mere</a>
            </div>
          </div>

          {/* Panel 2 med anden baggrundsfarve */}
          <div className={style.panel} className={style.bgLightgray} className={style.case2}>
            <img src={case2} alt="Case 2" />
            <div className={style.text}>
              <h2>Konverteringsfokuseret e-commerce-design</h2>
              <p>
                Til denne case har vi designet en stilren webshop, hvor produkterne får fuldt fokus. 
                Med en minimalistisk tilgang har vi arbejdet med brugervenlig navigation, tydelige call-to-actions og produktinformation i centrum. 
                Løsningen er skabt med fokus på konvertering og en gnidningsfri brugerrejse – både på mobil og desktop.
              </p>
              <a href="#" className={style.cta-button}>Læs mere</a>
            </div>
          </div>

          {/* Panel 3 med tredje farve */}
          <div className={style.panel} className={style.bgSand} className={style.case3}>
            <img src={case3} alt="Case 3" />
            <div className={style.text}>
              <h2>Minimalistisk landing page med tydeligt budskab</h2>
              <p>
                Denne landing page er udviklet til et konceptbrand med fokus på personlig identitet. 
                Vi har skabt et iøjnefaldende og fokuseret design, hvor budskabet 'less is more' kommunikeres klart gennem farvevalg, typografi og layout. 
                Løsningen er enkel men virkningsfuld og fungerer som en stærk indgang til brandets univers.
              </p>
              <a href="#" className={style.cta-button}>Læs mere</a>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}
