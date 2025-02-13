import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/card.css";
import "./styles/lista.css";
import { EComerceApp } from "./EComerceApp.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <StrictMode>
            <EComerceApp />
        </StrictMode>
    </BrowserRouter>
);
