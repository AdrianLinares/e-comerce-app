// Import necessary modules and components
import { NavLink } from "react-router-dom";
import { CartButton } from "./CartButton";
import "../styles/navbar.css";

// Define the NavBar component
export const NavBar = () => {
    return (
        // Navigation bar with Bootstrap classes for styling
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {/* Brand/logo link */}
                <NavLink to="/" className="navbar-brand">
                    E-Commerce App
                </NavLink>

                {/* Button for toggling the navigation menu on smaller screens */}
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

                {/* Collapsible navigation menu */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto">
                        {/* Navigation link to the shopping page */}
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
                    {/* Link to the cart page with a cart button */}
                    <NavLink to="/cart">
                        <CartButton></CartButton>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
