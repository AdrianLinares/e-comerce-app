import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import PropTypes from "prop-types";

export const CartButton = ({ color = "primary" }) => {
    const { shoppingList } = useContext(CartContext);

    const totalItems = shoppingList.reduce(
        (total, item) => total + item.amount,
        0
    );

    return (
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

CartButton.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
    ]),
};
