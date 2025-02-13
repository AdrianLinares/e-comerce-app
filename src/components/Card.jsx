export const Card = () => {
    return (
        <div className="tarjeta">
            <img src={image} alt={title} className="tarjeta-imagen" />
            <div className="tarjeta-contenido ">
                <h3 className="tarjeta-titulo">{title}</h3>
                <p className="tarjeta-descripcion">{Description}</p>
                <p className="tarjeta precio">{price}</p>
            </div>
        </div>
    );
};
