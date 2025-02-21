// Import necessary hooks and context
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/shoppingList.css";

// Define the ShoppingList component
export const ShoppingList = () => {
    // Get values from CartContext
    const {
        shoppingList, // List of items in the cart
        removeShopping, // Function to remove an item from the cart
        riseAmount, // Function to increase the quantity of an item
        reduceAmount, // Function to decrease the quantity of an item
        cartTotal, // Total cost of items in the cart
    } = useContext(CartContext);

    // Display a message if the cart is empty
    if (!shoppingList.length) {
        return (
            <div className="empty-cart">
                <h2>Your cart is empty</h2>
            </div>
        );
    }

    // Render the shopping list
    return (
        <div className="shopping-list-container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map through the shopping list and render each item */}
                    {shoppingList.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td className="quantity-controls">
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => reduceAmount(item.id)}
                                    disabled={item.amount <= 1}
                                >
                                    -
                                </button>
                                <span className="amount-display">
                                    {item.amount}
                                </span>
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => riseAmount(item.id)}
                                >
                                    +
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeShopping(item.id)}
                                    aria-label={`Remove ${item.title} from cart`}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                    {/* Render the total cost row */}
                    <tr className="total-row">
                        <th colSpan="2">Total:</th>
                        <td colSpan="2" className="total-amount">
                            ${cartTotal.toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Render the checkout button */}
            <div className="checkout-section">
                <button
                    className="btn btn-primary btn-lg"
                    onClick={() => window.print()}
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};
