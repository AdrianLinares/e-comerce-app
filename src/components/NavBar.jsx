import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/chart" className="navbar-brand" href="#">
                    Chart
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/shopping"
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                shopping
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon color="action" />
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
