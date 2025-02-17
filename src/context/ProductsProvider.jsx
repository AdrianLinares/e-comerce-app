import { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import PropTypes from "prop-types";

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchStoreApi = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError(err.message);
            console.error("Failed to fetch products:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchStoreApi();
    }, []);

    const contextValue = {
        products,
        isLoading,
        error,
        refreshProducts: fetchStoreApi,
    };

    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    );
};

ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
