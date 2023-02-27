import React, { useContext } from "react";
import "./Cart.css"
import OrderModal from "../OrderModal";
import CartContext from "../../cart-context/cart-context";
import CartItem from "./CartItem"

const Cart = props => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };


    const cartItems = (
        <ul className="cartItems">
            {cartCtx.items.map((item) => (
                <CartItem key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );
    return (
        <OrderModal onClose={props.onClose}>
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className="actions">
                <button className="buttonClose" onClick={props.onClose}>Close</button>
                {hasItems && <button className="buttonOrder">Order</button>}
            </div>
        </OrderModal >
    );
};

export default Cart;