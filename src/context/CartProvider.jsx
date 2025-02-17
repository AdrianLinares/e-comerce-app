import { useReducer, useCallback } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";
import { cartReducer, CART_ACTIONS } from "./cartReducer";

const initialState = [];

export const CartProvider = ({ children }) => {
    const [shoppingList, dispatch] = useReducer(cartReducer, initialState);

    const addShopping = useCallback((shopping) => {
        dispatch({
            type: CART_ACTIONS.ADD,
            payload: shopping,
        });
    }, []);

    const riseAmount = useCallback((id) => {
        dispatch({
            type: CART_ACTIONS.RISE_AMOUNT,
            payload: id,
        });
    }, []);

    const reduceAmount = useCallback((id) => {
        dispatch({
            type: CART_ACTIONS.REDUCE_AMOUNT,
            payload: id,
        });
    }, []);

    const removeShopping = useCallback((id) => {
        dispatch({
            type: CART_ACTIONS.REMOVE,
            payload: id,
        });
    }, []);

    const cartTotal = shoppingList.reduce(
        (total, item) => total + item.price * item.amount,
        0
    );

    const contextValue = {
        shoppingList,
        addShopping,
        removeShopping,
        reduceAmount,
        riseAmount,
        cartTotal,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
