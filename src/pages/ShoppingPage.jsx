import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";
import "../styles/shoppingPage.css";

export const ShoppingPage = () => {
    const { products, isLoading, error } = useContext(ProductsContext);
    const { addShopping, removeShopping } = useContext(CartContext);

    const handleAdd = (product) => {
        if (!product?.id) return;
        addShopping(product);
    };

    const handleRemove = (id) => {
        if (!id) return;
        removeShopping(id);
    };

    if (error) {
        return (
            <div className="error-message">Error loading products: {error}</div>
        );
    }

    if (isLoading) {
        return <div className="loading">Loading products...</div>;
    }

    return (
        <div className="shopping-container">
            <header className="shopping-header">
                <h1>Shopping Page</h1>
                <hr className="divider" />
            </header>

            <div className="products-grid">
                {products?.map((product) => (
                    <Card
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        handleAdd={() => handleAdd(product)}
                        handleRemove={() => handleRemove(product.id)}
                    />
                ))}
            </div>
        </div>
    );
};
