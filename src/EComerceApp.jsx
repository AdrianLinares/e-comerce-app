import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ShoppingPage } from "./pages/ShoppingPage";
import { CartPage } from "./pages/CartPage";
import { ProductsProvider } from "./context/ProductsProvider";
import { CartProvider } from "./context/CartProvider";

// Define the main component of the e-commerce application
export const EComerceApp = () => {
    return (
        // Wrap the application with ProductsProvider to manage product-related state
        <ProductsProvider>
            {/* // Wrap the application with CartProvider to manage cart-related state */}
            <CartProvider>
                {/* // Render the navigation bar at the top of the page */}
                <NavBar></NavBar>
                {/* // Main container for the application content */}
                <div className="container">
                    {/* // Define the routes for the application */}
                    <Routes>
                        {/* // Route for the shopping page, accessible at the root URL "/" */}
                        <Route
                            path="/"
                            element={<ShoppingPage></ShoppingPage>}
                        ></Route>
                        {/* // Route for the cart page, accessible at the URL "/cart" */}
                        <Route
                            path="/cart"
                            element={<CartPage></CartPage>}
                        ></Route>
                        {/* // Redirect any unknown routes to the root URL "/" */}
                        <Route path="/*" element={<Navigate to="/" />}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductsProvider>
    );
};
