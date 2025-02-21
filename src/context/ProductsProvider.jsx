// Import necessary hooks and modules from React and other libraries
import { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import PropTypes from "prop-types";

// Define the ProductsProvider component
export const ProductsProvider = ({ children }) => {
    // State to store the list of products
    const [products, setProducts] = useState([]);
    // State to manage the loading state
    const [isLoading, setIsLoading] = useState(true);
    // State to store any error messages
    const [error, setError] = useState(null);

    // Function to fetch products from the API
    const fetchStoreApi = async () => {
        try {
            setIsLoading(true); // Set loading state to true
            const response = await fetch("https://fakestoreapi.com/products"); // Fetch products from the API

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`); // Throw an error if the response is not ok
            }

            const data = await response.json(); // Parse the JSON data
            setProducts(data); // Update the products state with the fetched data
        } catch (err) {
            setError(err.message); // Set the error message
            console.error("Failed to fetch products:", err); // Log the error to the console
        } finally {
            setIsLoading(false); // Set loading state to false
        }
    };

    // useEffect hook to fetch products when the component mounts
    useEffect(() => {
        fetchStoreApi();
    }, []);

    // Context value to be provided to the children components
    const contextValue = {
        products, // List of products
        isLoading, // Loading state
        error, // Error message
        refreshProducts: fetchStoreApi, // Function to refresh the products
    };

    // Return the ProductsContext.Provider with the context value
    return (
        <ProductsContext.Provider value={contextValue}>
            {children} {/* Render the children components */}
        </ProductsContext.Provider>
    );
};

// Define prop types for the ProductsProvider component
ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired, // Children components are required
};
