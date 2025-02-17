import { createContext } from "react";

export const ProductsContext = createContext({
    products: [],
    isLoading: true,
    error: null,
    refreshProducts: () => {},
});
