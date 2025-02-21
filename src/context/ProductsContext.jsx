// Import the createContext function from React
import { createContext } from "react";

// Create the ProductsContext with default values
export const ProductsContext = createContext({
    products: [], // Default value for the list of products
    isLoading: true, // Default value for the loading state
    error: null, // Default value for the error message
    refreshProducts: () => {}, // Default value for the function to refresh products
});
