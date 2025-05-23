import mystyle from "./Kontakt.module.css"; // Dette importerer et CSS-modul, så du kan bruge classnames direkte som 'style.xxx'

export default function Kontakt(){ 
  function handleSubmit(event) { {/* Denne funktion kører, når brugeren trykker på "Kontakt"-knappen. */}
    event.preventDefault(); {/* Denne forhindrer, at siden genindlæses. */}
    alert("Tak fordi du valgt os, vi vender tilbage til dig så hurtigst muligt, normalt indenfor 2-3 arbejdesdage :)");
  } {/* Der vises en alert med vores takke-besked. */}

    return (
        <div className={mystyle.container}>
      <h2>KONTAKT OS</h2>
      <p className={mystyle.description}>
        Har du spørgsmål eller ønsker du at høre mere om, hvordan vi kan hjælpe dig med at skabe en bæredygtig hjemmeside?
        Udfyld vores kontaktformular nedenfor, eller kontakt os på 12 34 56 78 eller <a href="mailto:Info@verdant.dk">Info@verdant.dk</a>.
        Vi ser frem til at høre fra dig!
      </p>

      <form onSubmit={handleSubmit} className={mystyle.formContainer}> {/* Formular, der kalder handleSubmit når den sendes */}
        <h3 className={mystyle.formTitle}>KONTAKT FORMULAR</h3>
      
        <label htmlFor="fuldeNavn">Fulde navn:</label>
        <input type="text" id="fuldeNavn" required className={mystyle.input} /> {/* required betyder, at feltet skal udfyldes før man kan sende */}

        <label htmlFor="virksomhed">Virksomhed:</label>
        <input type="text" id="virksomhed" required className={mystyle.input} />

        <label htmlFor="telefonNr">Telefon nr.:</label>
        <input type="tel" id="telefonNr" required className={mystyle.input} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required className={mystyle.input} />

        <label htmlFor="problem">Kort om jeres problem:</label>
        <textarea id="problem" required className={mystyle.textarea}></textarea>

        <button className={mystyle.formContainerButton}> {/*  Kontakt-knap i midten – den sender formularen (og udløser alert) */}
          Kontakt
        </button>
      </form>
    </div>
    )
}