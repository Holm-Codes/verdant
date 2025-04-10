import style from './KontaktForm.module.css';

export default function KontaktForm(){
  return (
    <div className={style.KontaktForm}>
      <div className={style.textForm}>
        <h2>KONTAKT OS NU</h2>
        <p>Kontakt os nu og lad os hjælpe dig med at skabe en bæredygtig hjemmeside, der styrker din forretning.</p>
      </div>

      <div className={style.lilleForm}>
        <label htmlFor="fuldeNavn">Fulde navn:</label>
          <input type="text" id="fuldeNavn" className={style.indhold} />

        <label htmlFor="virksomhed">Virksomhed:</label>
          <input type="text" id="virksomhed" className={style.indhold} />

        <label htmlFor="problem">Kort om hvad vi kan hjælpe med:</label>
          <textarea id="problem" className={style.textArea}></textarea>

        <div className={style.check}>
        <input type="checkbox"  id="vilkaar" name="vilkaar" value="vilkaar"/>
          <label for="vilkaar" className={style.container}>Jeg accepterer Verdant's vilkår og betingelser.
          Jeg er klar over, at min kontaktinformation vil blive brugt til at kontakte mig om mit forespørgsel. </label></div>

        <div className={style.sendKnap}>
          <a href="#" className={style.sendKnapButton}>Læs mere</a>
        </div>
      </div>
    </div>
    )
}