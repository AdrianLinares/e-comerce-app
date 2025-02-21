// Import necessary hooks and modules from React and other libraries
import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import "../styles/card.css";

// Define the Card component
export const Card = ({ id, image, title, description, price }) => {
    // State to manage hover effect
    const [isHovered, setIsHovered] = useState(false);
    // Get functions and state from CartContext
    const { addShopping, removeShopping, shoppingList } = useContext(CartContext);

    // Check if the item is already in the cart
    const isInCart = shoppingList.some((item) => item.id === id);

    // Function to handle adding the item to the cart
    const handleAddToCart = () => {
        addShopping({ id, image, title, description, price });
    };

    // Function to handle removing the item from the cart
    const handleRemoveFromCart = () => {
        removeShopping(id);
    };

    return (
        <div
            className={`card ${isHovered ? "card-hover" : ""}`} // Apply hover class if hovered
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
        >
            <img
                src={image} // Image source
                alt={title} // Image alt text
                className="card-image" // Image class
                loading="lazy" // Lazy loading for the image
            />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>  {/* // Title of the product*/}
                <p className="card-description">{description}</p> {/* // Description of the product*/}
                <p className="card-price">${price.toFixed(2)}</p> {/* // Price of the product*/}

                <button
                    type="button"
                    className={isInCart ? "button-remove" : "button-add"} // Apply appropriate class based on cart status
                    onClick={isInCart ? handleRemoveFromCart : handleAddToCart} // Handle add/remove based on cart status
                    aria-label={
                        isInCart
                            ? `Remove ${title} from cart`
                            : `Add ${title} to cart`
                    } // Accessible label for the button
                >
                    {isInCart ? "Remove from cart" : "Add to cart"} {/*// Button text based on cart status */}
                </button>
            </div>
        </div>
    );
};

// Define prop types for the Card component
Card.propTypes = {
    id: PropTypes.number.isRequired, // Product id is required and must be a number
    image: PropTypes.string.isRequired, // Product image is required and must be a string
    title: PropTypes.string.isRequired, // Product title is required and must be a string
    description: PropTypes.string.isRequired, // Product description is required and must be a string
    price: PropTypes.number.isRequired, // Product price is required and must be a number
};
