// Define action types for the cart
export const CART_ACTIONS = {
    ADD: "[CART] Add Shopping", // Action type for adding an item to the cart
    RISE_AMOUNT: "[CART] Rise Shopping Amount", // Action type for increasing the quantity of an item
    REDUCE_AMOUNT: "[CART] Reduce Shopping Amount", // Action type for decreasing the quantity of an item
    REMOVE: "[CART] Remove Shopping", // Action type for removing an item from the cart
};

// Define the cartReducer function to handle cart actions
export const cartReducer = (state = [], action = {}) => {
    switch (action.type) {
        case CART_ACTIONS.ADD: {
            // Check if the item already exists in the cart
            const existingItem = state.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                // If the item exists, increase its quantity
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            }
            // If the item does not exist, add it to the cart with a quantity of 1
            return [...state, { ...action.payload, amount: 1 }];
        }

        case CART_ACTIONS.REMOVE:
            // Remove the item from the cart
            return state.filter((item) => item.id !== action.payload);

        case CART_ACTIONS.RISE_AMOUNT:
            // Increase the quantity of the item in the cart
            return state.map((item) =>
                item.id === action.payload
                    ? { ...item, amount: item.amount + 1 }
                    : item
            );

        case CART_ACTIONS.REDUCE_AMOUNT:
            // Decrease the quantity of the item in the cart, but not below 1
            return state.map((item) =>
                item.id === action.payload && item.amount > 1
                    ? { ...item, amount: item.amount - 1 }
                    : item
            );

        default:
            // Return the current state if the action type is not recognized
            return state;
    }
};
