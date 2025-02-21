// Import necessary hooks and modules from React and other libraries
import { useReducer, useCallback } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";
import { cartReducer, CART_ACTIONS } from "./cartReducer";

// Define the initial state for the cart
const initialState = [];

// Define the CartProvider component
export const CartProvider = ({ children }) => {
    // Use the useReducer hook to manage the shopping list state
    const [shoppingList, dispatch] = useReducer(cartReducer, initialState);

    // Function to add an item to the cart
    const addShopping = useCallback((shopping) => {
        dispatch({
            type: CART_ACTIONS.ADD, // Action type for adding an item
            payload: shopping, // The item to be added
        });
    }, []);

    // Function to increase the quantity of an item in the cart
    const riseAmount = useCallback((id) => {
        dispatch({
            type: CART_ACTIONS.RISE_AMOUNT, // Action type for increasing the quantity
            payload: id, // The id of the item to be increased
        });
    }, []);

    // Function to decrease the quantity of an item in the cart
    const reduceAmount = useCallback((id) => {
        dispatch({
            type: CART_ACTIONS.REDUCE_AMOUNT, // Action type for decreasing the quantity
            payload: id, // The id of the item to be decreased
        });
    }, []);

    // Function to remove an item from the cart
    const removeShopping = useCallback((id) => {
        dispatch({
            type: CART_ACTIONS.REMOVE, // Action type for removing an item
            payload: id, // The id of the item to be removed
        });
    }, []);

    // Calculate the total cost of items in the cart
    const cartTotal = shoppingList.reduce(
        (total, item) => total + item.price * item.amount,
        0
    );

    // Context value to be provided to the children components
    const contextValue = {
        shoppingList, // List of items in the cart
        addShopping, // Function to add an item to the cart
        removeShopping, // Function to remove an item from the cart
        reduceAmount, // Function to decrease the quantity of an item
        riseAmount, // Function to increase the quantity of an item
        cartTotal, // Total cost of items in the cart
    };

    // Return the CartContext.Provider with the context value
    return (
        <CartContext.Provider value={contextValue}>
            {children} {/* Render the children components */}
        </CartContext.Provider>
    );
};

// Define prop types for the CartProvider component
CartProvider.propTypes = {
    children: PropTypes.node.isRequired, // Children components are required
};
