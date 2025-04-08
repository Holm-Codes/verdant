import style from './DefaultPage.module.css';
import png from '../image/model.png';
import webp from '../image/model.webp';

export default function Forside1(){
    return (
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
                <img src={png} alt="image"/>
                <img src={webp} alt="image"/>
            </div>
        </div>
    )
}