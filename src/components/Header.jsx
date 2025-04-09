import { Link } from "react-router-dom";
import style from "./Header.module.css";

export default function Header() {

    return (
        <header>
            <nav className={style.navigation}>
                <p>
                    <Link className={style.linktext} to="/">Home</Link>
                </p>
                <p>
                    <Link className={style.linktext} to="/Bw">Co2-Optimeret Webdesign</Link>
                </p>
                <p>
                    <Link className={style.linktext} to="/Quiz">Quiz</Link>
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