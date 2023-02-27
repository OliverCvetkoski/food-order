import React from "react";
import './Header.css';
import CartButton from "./components/CartButton";

const Header = props => {
    return (
        <header className="header">
            <h1 className="mealHeader">ReactMeals</h1>
            <CartButton onClick={props.onShowCart} />
        </header>
    )

}
export default Header;