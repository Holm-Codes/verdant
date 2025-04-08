import style from './DefaultPage.module.css';
import video from '../video/Gradient.webm';
import Forside1 from '../components/Forside1';
import Forside2 from '../components/Forside2';
import Forside3 from '../components/Forside3';

export default function DefaultPage(){
    return (
        // Hero sektion
        <div className={style.Hero}>
            <video src={video} type="video/webm"
            loop
            autoPlay>
            </video>
            <div className={style.HeroText}>
            <h1>Æstetik, performance og ansvarlighed uden kompromiser</h1>
            <button>Kontakt os</button>
            </div>
        </div>

        <Forside1 />
        <Forside2 />
        <Forside3 />
    )
}