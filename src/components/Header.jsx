import { Link } from "react-router-dom";
import mystyle from "./Header.module.css";

export default function Header() {

    return (
        <header>
            <nav className={mystyle.navigation}>
                <p>
                    <Link className={mystyle.linktext} to="/">Home</Link>
                </p>
                <p>
                    <Link className={mystyle.linktext} to="/Bw">Co2-Optimeret Webdesign</Link>
                </p>
                <p>
                    <Link className={mystyle.linktext} to="/Cases">Cases</Link>
                </p>
                <p>
                    <Link className={mystyle.linktext} to="/OmOs">Om Os</Link>
                </p>
                <p>
                    <Link className={mystyle.linktext} to="/Kontakt">Kontakt</Link>
                </p>
            </nav>
        </header>
    )
}