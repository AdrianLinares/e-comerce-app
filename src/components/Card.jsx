import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import "../styles/card.css";

export const Card = ({ id, image, title, description, price }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { addShopping, removeShopping, shoppingList } =
        useContext(CartContext);

    const isInCart = shoppingList.some((item) => item.id === id);

    const handleAddToCart = () => {
        addShopping({ id, image, title, description, price });
    };

    const handleRemoveFromCart = () => {
        removeShopping(id);
    };

    return (
        <div
            className={`card ${isHovered ? "card-hover" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={image}
                alt={title}
                className="card-image"
                loading="lazy"
            />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">${price.toFixed(2)}</p>

                <button
                    type="button"
                    className={isInCart ? "button-remove" : "button-add"}
                    onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
                    aria-label={
                        isInCart
                            ? `Remove ${title} from cart`
                            : `Add ${title} to cart`
                    }
                >
                    {isInCart ? "Remove from cart" : "Add to cart"}
                </button>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};
