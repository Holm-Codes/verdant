import style from './DefaultPage.module.css';
import video from '../video/Gradient.webm';

export default function Forside1(){
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
    )
}