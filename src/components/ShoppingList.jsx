import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/shoppingList.css";

export const ShoppingList = () => {
    const {
        shoppingList,
        removeShopping,
        riseAmount,
        reduceAmount,
        cartTotal,
    } = useContext(CartContext);

    if (!shoppingList.length) {
        return (
            <div className="empty-cart">
                <h2>Your cart is empty</h2>
            </div>
        );
    }

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
                    <tr className="total-row">
                        <th colSpan="2">Total:</th>
                        <td colSpan="2" className="total-amount">
                            ${cartTotal.toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </table>

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
