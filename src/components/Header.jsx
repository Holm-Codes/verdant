import { Link } from "react-router-dom"; // Bruger Link fra react-router-dom, så dine navigationer ikke reloader siden – de fungerer som interne links i en SPA (Single Page Application)
import style from "./Header.module.css"; // Import af CSS-modul, ligesom du gjorde med footer'en. Alle klassenavne hentes som 'style.xxx'.
import logo from "../image/Logo.svg" //  Importerer vores logo som en SVG-fil. 

export default function Header() { //

    return (
        <header>
            {/*  */}
            <div className={style.logo}> {/* Logo-område: Logoet er klikbart og sender brugeren til forsiden. 'className={style.logo}' styrer layout og størrelse af logoet via CSS. */}
                <p>
                    <Link className={style.linktext} to="/"><img src={logo} alt="Verdant logo"/></Link>
                </p>
            </div>
            <nav className={style.navigation}> {/* Navigationen indeholder 4 links til forskellige sider. 'style.linktext' bruges til styling af links */}
                <p>
                    <Link className={style.linktext} to="/Bw">CO<sub>2</sub>-Optimeret Webdesign</Link> {/* CO₂-linket bruger <sub> til at skrive "2" som en lille nedsænket tekst */}
                </p>
                <p>
                    <Link className={style.linktext} to="/Cases">Cases</Link>
                </p>
                <p>
                    <Link className={style.linktext} to="/OmOs">Om Os</Link>
                </p>
                <p>
                    <Link className={style.linktext} to="/Kontakt">Kontakt</Link>
                </p>
            </nav>
        </header>
    )
}