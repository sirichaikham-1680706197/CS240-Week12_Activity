import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Mainlayouts() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}