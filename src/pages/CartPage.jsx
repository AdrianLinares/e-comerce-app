import { ShoppingList } from "../components/ShoppingList";

export const CartPage = () => {
    // const { shoppingList } = useContext(CartContext);

    return (
        <>
            <h4>Shopping List</h4>
            <hr />

            <ShoppingList></ShoppingList>
        </>
    );
};
