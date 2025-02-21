// Import necessary components and hooks from Material-UI and React
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import PropTypes from "prop-types";

// Define the CartButton component
export const CartButton = ({ color = "primary" }) => {
    // Get the shopping list from CartContext
    const { shoppingList } = useContext(CartContext);

    // Calculate the total number of items in the cart
    const totalItems = shoppingList.reduce(
        (total, item) => total + item.amount,
        0
    );

    return (
        // IconButton component with a Badge to display the total number of items
        <IconButton
            color="inherit"
            aria-label="shopping cart"
            className="cart-button"
        >
            <Badge badgeContent={totalItems} color={color} max={99} showZero>
                <ShoppingCart />
            </Badge>
        </IconButton>
    );
};

// Define prop types for the CartButton component
CartButton.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
    ]), // Color prop can be one of these values
};
