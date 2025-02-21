// Import necessary modules and components from React and context
import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";
import "../styles/shoppingPage.css";

// Define the ShoppingPage component
export const ShoppingPage = () => {
    // Get products, loading state, and error from ProductsContext
    const { products, isLoading, error } = useContext(ProductsContext);
    // Get addShopping and removeShopping functions from CartContext
    const { addShopping, removeShopping } = useContext(CartContext);

    // Function to handle adding a product to the cart
    const handleAdd = (product) => {
        if (!product?.id) return; // Check if product has a valid id
        addShopping(product); // Add the product to the cart
    };

    // Function to handle removing a product from the cart
    const handleRemove = (id) => {
        if (!id) return; // Check if id is valid
        removeShopping(id); // Remove the product from the cart
    };

    // Display an error message if there is an error loading products
    if (error) {
        return (
            <div className="error-message">Error loading products: {error}</div>
        );
    }

    // Display a loading message while products are being loaded
    if (isLoading) {
        return <div className="loading">Loading products...</div>;
    }

    // Render the shopping page content
    return (
        <div className="shopping-container">
            {/* Header section of the shopping page */}
            <header className="shopping-header">
                <h1>Shopping Page</h1>
                <hr className="divider" />
            </header>

            {/* Grid layout for displaying products */}
            <div className="products-grid">
                {/* Map through the products and render a Card component for each product */}
                {products?.map((product) => (
                    <Card
                        key={product.id} // Unique key for each product
                        id={product.id} // Product id
                        image={product.image} // Product image
                        title={product.title} // Product title
                        description={product.description} // Product description
                        price={product.price} // Product price
                        handleAdd={() => handleAdd(product)} // Function to handle adding the product to the cart
                        handleRemove={() => handleRemove(product.id)} // Function to handle removing the product from the cart
                    />
                ))}
            </div>
        </div>
    );
};
