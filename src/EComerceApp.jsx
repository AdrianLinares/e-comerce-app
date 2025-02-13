import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ShoppingPage } from "./pages/ShoppingPage";
import { ChartPage } from "./pages/ChartPage";

export const EComerceApp = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={<ShoppingPage></ShoppingPage>}
                    ></Route>
                    <Route
                        path="/chart"
                        element={<ChartPage></ChartPage>}
                    ></Route>
                    <Route path="/*" element={<Navigate to="/" />}></Route>
                </Routes>
            </div>
        </>
    );
};
