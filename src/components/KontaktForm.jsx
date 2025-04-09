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
        
        <div className={style.sendKnap}>
          <button>Send</button>
        </div>
      </div>
    </div>
    )
}