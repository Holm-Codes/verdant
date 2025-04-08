import mystyle from "./Footer.module.css";

export default function Footer() {

    return (
        <footer>
            <div className={mystyle.bund1}>
                <div className={mystyle.boks1}>
                    <h3>Kontakt</h3>
                    <p>Sønderhøj 30, 8260 Viby J</p>
                    <p>Info@Verdant.dk</p>
                    <p>+45 12 34 56 78</p>
                </div>
                <div className={mystyle.boks2}>
                    <h3>Info</h3>
                    <p>CVR: 123456</p>
                    <p>Cookies- og privatpolitik</p>
                    <p>Persondatapolitik</p>
                </div>
            </div>

            <div className={mystyle.bund2}>
                &copy; 2025 Verdant
            </div>
        </footer>
    )
}