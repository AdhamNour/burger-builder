import React, {Component } from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/Auxiliary'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery'

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
        totalPrice : 4,
        purchasable : false,
    }

    updatePurchasable = (ingredients) => {
        const Keys = Object.keys(ingredients);
        var sum = 0;
        for (let i = 0; i < Keys.length; i++) {
            var key = Keys[i];
            var amount = ingredients[key];
            sum += amount;
        }
        const newPurchasable = sum > 0 ? true : false;
        this.setState({purchasable: newPurchasable}); 
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
        this.updatePurchasable(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = Math.max(0,oldCount - 1);
        const updatedIngredient = {...this.state.ingredients};
        updatedIngredient[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENTS_PRICE[type];
        this.setState({
            totalPrice: newPrice,
            ingredients:updatedIngredient
        }); 
        this.updatePurchasable(updatedIngredient);
    }

    render() {
        return (
            <Aux>
                <Modal>
                    <OrderSummery ingredients = {this.state.ingredients}/>
                </Modal>
                <Burger ingredient = { this.state.ingredients} />
                <BuildControls 
                    addIngredient ={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler} 
                    price={this.state.totalPrice} 
                    purchasable={this.state.purchasable} 
                    />
            </Aux>
        );
    }
}
export default BurgerBuilder;