import React from "react";
import Aux from "../../hoc/Aux";
import Button from '../UI/Button/Button'

const orderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients).map( ingredientName =>{
        return (
            <li key={ingredientName}>
                <span style={{textTransform:'capitalise'}}>
                    {ingredientName}
                </span>
                : {props.ingredients[ingredientName]}
            </li>
        );
    });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: Rs. {props.totalPrice.toFixed(2)}/- only</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked = {props.cancelHandler}>CANCEL</Button>
            <Button btnType='Success' clicked = {props.continueHandler} >CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;