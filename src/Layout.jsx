import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
    return (
        <>
            <Header />
            <main className="mainpart">
                <Outlet /> {/* er en placeholder hvor den aktuelle side-komponent bliver vist */}
            </main>
            <Footer />
        </>
    );
}