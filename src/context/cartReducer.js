export const CART_ACTIONS = {
    ADD: "[CART] Add Shopping",
    RISE_AMOUNT: "[CART] Rise Shopping Amount",
    REDUCE_AMOUNT: "[CART] Reduce Shopping Amount",
    REMOVE: "[CART] Remove Shopping",
};

export const cartReducer = (state = [], action = {}) => {
    switch (action.type) {
        case CART_ACTIONS.ADD: {
            const existingItem = state.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            }
            return [...state, { ...action.payload, amount: 1 }];
        }

        case CART_ACTIONS.REMOVE:
            return state.filter((item) => item.id !== action.payload);

        case CART_ACTIONS.RISE_AMOUNT:
            return state.map((item) =>
                item.id === action.payload
                    ? { ...item, amount: item.amount + 1 }
                    : item
            );

        case CART_ACTIONS.REDUCE_AMOUNT:
            return state.map((item) =>
                item.id === action.payload && item.amount > 1
                    ? { ...item, amount: item.amount - 1 }
                    : item
            );

        default:
            return state;
    }
};
