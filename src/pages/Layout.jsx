import { Outlet } from "react-router-dom";
import { Footer } from "../Components/footer/Footer";
import { Navbar } from "../Components/navbar/Navbar";

export function Layout() {
    return (
        <div>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}