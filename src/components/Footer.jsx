import mystyle from "./Footer.module.css"; // Dette importerer et CSS-modul, så du kan bruge classnames direkte som 'mystyle.xxx'

export default function Footer() { // Her defineres en funktionel komponent i React, som hedder Footer, og den bliver eksporteret som standard
    return (
        <footer> {/* Her begynder selve HTML-udskriften. Der returneres et <footer>-element, som er en semantisk HTML-tag til indhold i bunden af siden. */}
            <div className={mystyle.bund1}> {/* Et div-element får klassen bund1 fra det importerede CSS-modul (mystyle.bund1). Det er her, den første del af footerens layout begynder. */}
                <div className={mystyle.boks1}> {/* Første boks i footer-sektionen. Indeholder kontaktinformationer. */}
                    <h3>Kontakt</h3> {/* Tekstvisning med kontaktoplysninger. */}
                    <p>Sønderhøj 30, 8260 Viby J</p>
                    <p>Info@Verdant.dk</p>
                    <p>+45 12 34 56 78</p>
                </div>
                <div className={mystyle.boks2}> {/* Anden boks – denne med info som CVR og politikker. */}
                    <h3>Info</h3>
                    <p>CVR: 123456</p>
                    <p>Cookies- og privatpolitik</p>
                    <p>Persondatapolitik</p>
                </div>
            </div>

            <div className={mystyle.bund2}> {/* En separat div nederst med copyright. */}
                &copy; 2025 Verdant
            </div>
        </footer>
    )
}