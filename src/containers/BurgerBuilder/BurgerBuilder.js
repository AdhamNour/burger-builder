import React, {Component } from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/Auxiliary'

const INGREDIENTS_PRICE = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad :0,
            bacon : 0 ,
            cheese : 0,
            meat:0
        },
        totalPrice : 4
    }
    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] =newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENTS_PRICE[type];

        this.setState({
            totalPrice: newPrice,
            ingredients:updatedIngredient
        }); 
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = Math.max(0,oldCount - 1);
        const updatedIngredient = {...this.state.ingredients};
        updatedIngredient[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENTS_PRICE[type]*newCount;
        this.setState({
            totalPrice: newPrice,
            ingredients:updatedIngredient
        }); 
    }

    render() {
        return (
            <Aux>
                <Burger ingredient = { this.state.ingredients} />
                <BuildControls addIngredient ={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler} />
            </Aux>
        );
    }
}
export default BurgerBuilder;