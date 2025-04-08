import style from './DefaultPage.module.css';
import video from '../video/Gradient.webm';
import png from '../image/model.png';
import webp from '../image/model.webp';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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

const App = () => {
    return (
        <DotLottieReact
        src="https://lottie.host/c56ffbdc-348c-4b05-9efb-dd53c4a02b93/cSEpnl8k7L.lottie"
        loop
        autoplay
       />
    );
};