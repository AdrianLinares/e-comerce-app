// Import the ShoppingList component
import { ShoppingList } from "../components/ShoppingList";

// Define the CartPage component
export const CartPage = () => {
    // Uncomment the following line to get the shopping list from CartContext
    // const { shoppingList } = useContext(CartContext);

    return (
        <>
            {/* Header for the shopping list */}
            <h4>Shopping List</h4>
            <hr />

            {/* Render the ShoppingList component */}
            <ShoppingList></ShoppingList>
        </>
    );
};
