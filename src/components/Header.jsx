import { Link } from "react-router-dom";
import style from "./Header.module.css";
import logo from "../image/Logo.svg"

export default function Header() {

    return (
        <header>
            <div className={style.logo}>
                <p>
                    <Link className={style.linktext} to="/"><img src={logo} alt="image"/></Link>
                </p>
            </div>
            <nav className={style.navigation}>
                <p>
                    <Link className={style.linktext} to="/Bw">CO<sub>2</sub>-Optimeret Webdesign</Link>
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