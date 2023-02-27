import React from "react";
import "./MealInputForm.css"
import { useRef, useState } from "react";
import Input from "../Input";




const MealInputForm = (props,) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    };



    return (
        <form className="inputForm" onSubmit={submitHandler}>

            <Input ref={amountInputRef}
                label="amount"
                input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            ></Input>
            <button className="inputBtn"> + ADD</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>

    )

}

export default MealInputForm;