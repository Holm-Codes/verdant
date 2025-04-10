import style from './KontaktForm.module.css'; // Import af CSS-modul, som ligger filen KontaktForm.module.css i samme mapppe. Alle klassenavne hentes som 'style.xxx'.

export default function KontaktForm(){
  function handleSubmit(event) { {/* Denne funktion kører, når brugeren trykker på "Send"-knappen. */}
    event.preventDefault(); {/* Denne forhindrer, at siden genindlæses. */}
    alert("Tak fordi du valgt os, vi vender tilbage til dig så hurtigst muligt, normalt indenfor 2-3 arbejdesdage :)");
  } {/* Der vises en alert med vores takke-besked. */}
  return (
    <div className={style.KontaktForm}> {/* Wrapper hele kontaktformularen og teksten */}
      <div className={style.textForm}> {/* Teksten til venstre */}
        <h2>KONTAKT OS NU</h2>
        <p>Kontakt os nu og lad os hjælpe dig med at skabe en bæredygtig hjemmeside, der styrker din forretning.</p>
      </div>

      <form onSubmit={handleSubmit} className={style.lilleForm}> {/* Formular, der kalder handleSubmit når den sendes */}
        <label htmlFor="fuldeNavn">Fulde navn:</label>
          <input type="text" id="fuldeNavn" required className={style.indhold} /> {/* required betyder, at feltet skal udfyldes før man kan sende */}

        <label htmlFor="email">Email:</label>
          <input type="email" id="email" required className={style.indhold} />

        <label htmlFor="problem">Kort om hvad vi kan hjælpe med:</label>
          <textarea id="problem" required className={style.textArea}></textarea>

        <div className={style.check}>
        <input type="checkbox" required id="vilkaar" name="vilkaar" value="vilkaar"/>
          <label for="vilkaar" className={style.container}>Jeg accepterer Verdant's vilkår og betingelser.
          Jeg er klar over, at min kontaktinformation vil blive brugt til at kontakte mig om mit forespørgsel. </label>
        </div>

        <div className={style.sendKnap}> {/*  Send-knappen i midten – den sender formularen (og udløser alert) */}
          <button className={style.sendKnapButton}>Send</button>
        </div>
      </form>
    </div>
    )
}