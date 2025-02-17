import { NavLink } from "react-router-dom";
import { CartButton } from "./CartButton";
import "../styles/navbar.css";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    E-Commerce App
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink
                                to="/shopping"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                Shop
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink to="/cart">
                        <CartButton></CartButton>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
