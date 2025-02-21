// Import the createContext function from React
import { createContext } from "react";

// Create the CartContext with default values
export const CartContext = createContext({
    shoppingList: [], // Default value for the list of items in the cart
    addShopping: () => {}, // Default function to add an item to the cart
    removeShopping: () => {}, // Default function to remove an item from the cart
    reduceAmount: () => {}, // Default function to decrease the quantity of an item
    riseAmount: () => {}, // Default function to increase the quantity of an item
    cartTotal: 0, // Default value for the total cost of items in the cart
});
