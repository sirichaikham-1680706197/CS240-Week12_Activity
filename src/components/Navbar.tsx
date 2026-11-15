import { NavLink } from "react-router";

function Navbar() {
    return (
        <nav className="flex justify-center gap-6 bg-gray-800 p-4 text-white shadow-md">
            <NavLink to="/" 
            className={({ isActive }) => 
                (isActive ? "underline font-bold" : "")}>
            Home
        </NavLink>

        <NavLink to="/about"
            className={({ isActive }) => 
                (isActive ? "underline font-bold" : "")}>
            About
        </NavLink>
        <NavLink to="/profile"
            className={({ isActive }) => 
                (isActive ? "underline font-bold" : "")}>
            Profile
        </NavLink>
        <NavLink to="/purchase"
            className={({ isActive }) => 
                (isActive ? "underline font-bold" : "")}>
            Purchase
        </NavLink>
        <NavLink to="/auth"
            className={({ isActive }) => 
                (isActive ? "underline font-bold" : "")}>
            Auth
        </NavLink>
        </nav>
    )
}

export default Navbar;
