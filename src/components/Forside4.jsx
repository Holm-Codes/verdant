import style from './DefaultPage.module.css';

export default function Forside4(){
    return (
        <div className={style.forside4}>
            <h2>Det siger vores kunder</h2>

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

            <button>Udforsk cases</button>
        </div>
    )
}