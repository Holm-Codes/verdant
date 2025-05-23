import { DotLottieReact } from '@lottiefiles/dotlottie-react' // Bruger en animation via Lottie
import style from './Bw.module.css' // Dette importerer et CSS-modul, så du kan bruge classnames direkte som 'style.xxx'
import mindreCo from '../image/mindreCo.webp' // Disse er billeder der fremgår på siden
import hurtigereLoading from '../image/hurtigereLoading.webp'
import bedreOkonomi from '../image/bedreOkonomi.webp'
import staekereprofil from '../image/staekereProfil.webp'
import dataPicOne from '../image/dataPicOne.webp'
import dataPicTwo from '../image/dataPicTwo.webp'
import sellPointOne from '../image/sellPointOne.webp'
import sellPointTwo from '../image/sellPointTwo.webp'
import sellPointThree from '../image/sellPointThree.webp'
import sellPointFour from '../image/sellPointFour.webp'
import { Link } from "react-router-dom"; // Bruger Link fra react-router-dom, så dine navigationer ikke reloader siden – de fungerer som interne links i en SPA (Single Page Application)

export default function App(){
    return (
        <>
        <div  className={style.bwIntro}> {/* CO2-neutralt webdesign introduktion sektion */}
            <h1>
                En hurtigere, smartere og grønnere hjemmeside
            </h1>
            <p>
                Vidste du, at internettet i dag udleder lige så meget CO₂ som hele verdens flytrafik?
                Hver gang en hjemmeside loader, bruges der energi – og jo tungere din side er, jo mere strøm kræver det.
                Men der er en løsning! <br /><br />
                Vi hjælper dig med at optimere din hjemmeside, så den loader hurtigere, sparer energi,
                og giver en bedre oplevelse for dine kunder – uden at du går på kompromis med det visuelle udtryk eller kvaliteten af dine billeder.
            </p>
        </div>

        <section className={style.billederSektion}> {/* Øverste billede sektion  */}
            <div className={style.billedeKort}>
                <img src={mindreCo}></img>
                <h4>
                    Mindre CO₂-aftryk
                </h4>
                <p>
                    Reducér energiforbruget uden at miste æstetik.
                </p>
            </div>

            <div className={style.billedeKort}>
                <img src={hurtigereLoading}></img>
                <h4>
                    Hurtigere loadtider
                </h4>
                <p>
                    Få glade kunder og bedre placeringer på Google.
                </p>
            </div>

            <div className={style.billedeKort}>
                <img src={bedreOkonomi}></img>
                <h4>
                    Bedre økonomi
                </h4>
                <p>
                    Færre tunge filer = mindre serveromkostninger.
                </p>
            </div>

            <div className={style.billedeKort}>
                <img src={staekereprofil}></img>
                <h4>
                    En stærkere profil 
                </h4>
                <p>
                    Mød dine kunders forventninger om ansvarlige valg.
                </p>
            </div>
        </section>

        <h3 className={style.datatitle}>
            Indtil videre har vi hjulpet vores kunder med at spare:
        </h3>

        <section className={style.dataSektion}> {/* Data sektion */}
            <div className={style.dataBilleder}> {/* Billederne i data sektion */}
                <div className={style.dataBilledVerdant}> {/* Billedet af hænderne, samt LottieFile animation */}
                    <img src={dataPicOne} className={style.dataBillederImg}></img>
                    <div className={style.verdantRing}> {/* LottieFile animation */}
                        <DotLottieReact
                        src="https://lottie.host/9f271a6e-f4b7-487e-a469-617446c9c7be/McHmMKuhz9.lottie" loop autoplay/>
                    </div>
                </div>
                <img src={dataPicTwo} className={style.dataBillederImgTwo} ></img> {/* Billedet af ipads */}
            </div>

            <div className={style.dataCounter}> {/* Data bokse sektion */}
                <div className={style.dataBoks}>
                    <h3>
                        18 ton CO₂
                    </h3>
                    <p>
                        Svarende til 120 flyrejser mellem København og London.
                    </p>
                </div>
                <div className={style.dataBoks}>
                    <h3>
                        32.000 kWh energi
                    </h3>
                    <p>
                        nok til at drive 10 husstande i et år.
                    </p>
                </div>
                <div className={style.dataBoks}>
                    <h3>
                        1,2 TB data i gennemsnit
                    </h3>
                    <p>
                        hvilket gør deres hjemmesider hurtigere end 90% af konkurrenterne.
                    </p>
                </div>
                <div className={style.dataBoks}>
                    <h3>
                        45 % forbedret loadtid
                    </h3>
                    <p>
                        hvilket har øget deres salg og brugertilfredshed.
                    </p>
                </div>
            </div>
        </section>

    <section className={style.infoSektion}> {/* Informations sektion */}
      <h2>
        CO₂-optimeret webdesign – godt for både din forretning og miljøet
      </h2>
      <p>
        Vidste du, at internettet står for omkring 4% af verdens samlede CO₂-udledning? 
        Det svarer til hele flyindustrien – og forbruget stiger hvert år. Hver gang en hjemmeside loader, 
        bruges der energi, og jo tungere din side er, desto mere strøm kræver den.
      </p>
      <p>Men der er en løsning! Ved at optimere din hjemmeside kan du:</p>
      <ul className={style.listeEksempler}>
        <li>Reducere strømforbruget uden at gå på kompromis med kvaliteten.</li>
        <li>Opnå hurtigere loadtider, hvilket giver en bedre brugeroplevelse.</li>
        <li>Imødekomme kundernes forventninger om ansvarlig digital adfærd.</li>
        <li>Spare penge på hosting og serverforbrug.</li>
      </ul>
      <p>
        Hos VERDANT hjælper vi dig med at gøre din hjemmeside lettere, smartere og mere energieffektiv. 
        Vi optimerer billeder, kode og serverforbindelser, så du får en hurtigere og grønnere hjemmeside – 
        uden at miste din visuelle identitet.
      </p>
      <button><Link className={style.linktext} to="/Kontakt">Kontakt os</Link></button> {/* Intern link til Kontakt side */}
    </section>

    <section> {/* Nederste billede sektion */}
        <h2 className={style.faktaTitel}>
            En hurtigere og mere effektiv hjemmeside gavner både miljøet og din forretning
        </h2>
        <div className={style.faktaContainer}>
            <div className={style.faktaBoks}>
                <div className={style.billedeFakta}>
                    <img src={sellPointOne} className={style.faktaImg}></img>
                    <div className={style.faktaTekst}>
                        <h4>
                            Internettet står for ca. 3-4% af verdens CO₂-udledning – og tallet stiger
                        </h4>
                        <p>
                            Hver gang vi streamer, sender e-mails eller besøger en hjemmeside, kræver det energi. 
                            Faktisk forbruger internettet lige så meget strøm som hele Tyskland – og hvis internettets 
                            CO₂-aftryk var et land, ville det være blandt de 10 mest forurenende i verden. Med en 
                            stigende digitalisering er det vigtigere end nogensinde at optimere vores hjemmesider for at 
                            reducere energiforbruget.
                        </p>
                    </div>
                </div>

                <div className={style.billedeFakta}>
                    <img src={sellPointTwo} className={style.faktaImg}></img>
                    <div className={style.faktaTekst}>
                        <h4>
                            En unødvendigt tung hjemmeside kan bruge op til 10x mere strøm end en optimeret version
                        </h4>
                        <p>
                            Store billeder, ineffektiv kode og unødvendige animationer kan gøre en hjemmeside unødvendigt tung. 
                            Det betyder, at servere skal arbejde hårdere, og brugerens enhed bruger mere strøm. Ved at optimere 
                            din hjemmeside med bedre billedformater og effektiv kode kan du reducere energiforbruget drastisk – 
                            uden at gå på kompromis med kvaliteten.
                        </p>
                    </div>
                </div>
            </div>

            <div className={style.faktaBoks}>
                <div className={style.billedeFakta}>
                    <img src={sellPointThree} className={style.faktaImg}></img>
                    <div className={style.faktaTekst}>
                        <h4>
                            1 sekunds langsommere loadtid kan reducere salget med 7%
                        </h4>
                        <p>
                            Hurtige hjemmesider skaber bedre brugeroplevelser. Hvis din side loader langsomt, forlader brugerne den – 
                            og det koster dyrt. Undersøgelser viser, at bare ét sekunds forsinkelse kan mindske konverteringer med op 
                            til 7%. En hurtigere hjemmeside er ikke kun bedre for miljøet – den er også bedre for din bundlinje.
                        </p>
                    </div>
                </div>

                <div className={style.billedeFakta}>
                    <img src={sellPointFour} className={style.faktaImg}></img>
                    <div className={style.faktaTekst}>
                        <h4>
                            Over 70% af forbrugerne foretrækker at handle hos brands, der tager bæredygtige valg
                        </h4>
                        <p>
                            Forbrugerne forventer, at virksomheder tager ansvar. Faktisk siger 74% af forbrugerne, at de hellere vil 
                            handle hos brands, der tager bæredygtige valg. Det gælder ikke kun produkterne – men også den digitale 
                            oplevelse. En optimeret hjemmeside viser, at din virksomhed tænker grønt, samtidig med at den forbedrer 
                            brugeroplevelsen og øger salget.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className={style.quizlink}>
        <button><Link className={style.linktext} to="/Quiz">Tag quizzen</Link></button> {/* Intern link til Quiz side */}
    </div>
    </>
    )
}