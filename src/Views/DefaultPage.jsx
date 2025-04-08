import style from './DefaultPage.module.css';
import video from '../video/Gradient.webm';

export default function DefaultPage(){
    return (
        // Hero sektion
        <div className={style.Hero}>
            <video src={video} type="video/webm" controls>
            </video>
            <div className={style.HeroText}>
            <h1>Æstetik, performance og ansvarlighed uden kompromiser</h1>
            <button>Kontakt os</button>
            </div>
        </div>
    )
}

return (
    // Billede forskel
    <div>
        <div className={style.TextImages}>
        <h2>Hvad kan vi gøre for dig?</h2>
        <p>Vi hjælper små selvstændige tøjbutikker med at skabe hjemmesider, der ikke kun viser jeres stil, men også jeres engagement for miljøet.</p>
        <p>Vores løsninger kombinerer grøn hosting, energieffektiv design og visuel storytelling, så jeres værdier kommer til udtryk på en måde, der både imponerer og inspirerer. 
        Lad os sammen bygge en hjemmeside, der ikke kun sælger tøj – men fortæller historien om jeres grønne revolution.</p>
        <button>Læs mere</button>
        <button>Tag vores quiz</button>
        </div>
        <div className={style.Images}>
        
        </div>
    </div>
)