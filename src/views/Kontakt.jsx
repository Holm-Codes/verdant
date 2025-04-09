import mystyle from "./Kontakt.module.css";

export default function Kontakt(){
    return (
        <div className={mystyle.container}>
      <h2>KONTAKT OS</h2>
      <p className={mystyle.description}>
        Har du spørgsmål eller ønsker du at høre mere om, hvordan vi kan hjælpe dig med at skabe en bæredygtig hjemmeside?
        Udfyld vores kontaktformular nedenfor, eller kontakt os på 12 34 56 78 eller <a href="mailto:Info@verdant.dk">Info@verdant.dk</a>.
        Vi ser frem til at høre fra dig!
      </p>
      <div className={mystyle.formContainer}>
        <h3 className={mystyle.formTitle}>KONTAKT FORMULAR</h3>
      
        <label htmlFor="fuldeNavn">Fulde navn:</label>
        <input type="text" id="fuldeNavn" className={mystyle.input} />

        <label htmlFor="virksomhed">Virksomhed:</label>
        <input type="text" id="virksomhed" className={mystyle.input} />

        <label htmlFor="telefonNr">Telefon nr.:</label>
        <input type="tel" id="telefonNr" className={mystyle.input} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className={mystyle.input} />

        <label htmlFor="problem">Kort om jeres problem:</label>
        <textarea id="problem" className={mystyle.textarea}></textarea>

        <button className={mystyle.formContainerButton}>
          Kontakt
        </button>
      </div>
    </div>
    )
}