import React from 'react';

import Aux from '../../../hoc/Auxiliary'

import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey} > <span><strong>{igKey}</strong></span> : {props.ingredients[igKey]}</li>
        });

    return (  
        <Aux>
            <h3>Your order summary</h3>
            <p>A delecious burger with the following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price is {props.price.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={props.cancel} >CANCEL</Button>
            <Button btnType="Success" clicked = {props.continue} >CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;