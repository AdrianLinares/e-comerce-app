import { createContext } from "react";

export const CartContext = createContext({
    shoppingList: [],
    addShopping: () => {},
    removeShopping: () => {},
    reduceAmount: () => {},
    riseAmount: () => {},
    cartTotal: 0,
});
