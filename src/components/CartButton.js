import React, { useContext } from "react";
import CartContext from "./cart-context/cart-context";
import "./CartButton.css"


const CartButton = props => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <div>
            <button className="btn" onClick={props.onClick}>Your Cart
                <span className="badge">{numberOfCartItems}</span>
            </button>
        </div>

    )
}
export default CartButton;