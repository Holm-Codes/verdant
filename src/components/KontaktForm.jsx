import style from './KontaktForm.module.css';

export default function KontaktForm(){
  function handleSubmit(event) {
    event.preventDefault();
    alert("Tak fordi du valgt os, vi vender tilbage til dig så hurtigst muligt, normalt indenfor 2-3 arbejdesdage :)");
  }
  return (
    <div className={style.KontaktForm}>
      <div className={style.textForm}>
        <h2>KONTAKT OS NU</h2>
        <p>Kontakt os nu og lad os hjælpe dig med at skabe en bæredygtig hjemmeside, der styrker din forretning.</p>
      </div>

      <form onSubmit={handleSubmit} className={style.lilleForm}>
        <label htmlFor="fuldeNavn">Fulde navn:</label>
          <input type="text" id="fuldeNavn" required className={style.indhold} />

        <label htmlFor="email">Email:</label>
          <input type="email" id="email" required className={style.indhold} />

        <label htmlFor="problem">Kort om hvad vi kan hjælpe med:</label>
          <textarea id="problem" required className={style.textArea}></textarea>

        <div className={style.check}>
        <input type="checkbox" required id="vilkaar" name="vilkaar" value="vilkaar"/>
          <label for="vilkaar" className={style.container}>Jeg accepterer Verdant's vilkår og betingelser.
          Jeg er klar over, at min kontaktinformation vil blive brugt til at kontakte mig om mit forespørgsel. </label>
        </div>

        <div className={style.sendKnap}>
          <button className={style.sendKnapButton}>Send</button>
        </div>
      </form>
    </div>
    )
}