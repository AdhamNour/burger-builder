import React, {Component } from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/Auxiliary'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'

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
        purchasing : false,
        Loading: false,
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

    purchaseHandler = () => {
        this.setState({purchasing: true}); 
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        //alert('Purchase Continue')
        const order = {
            ingredients : this.state.ingredients,
            totalPrice: this.state.totalPrice, //this is not for real application
            customerID : 5, //this is dummy data
        }
        this.setState({Loading: true});
        axios.post('/orders.json',order)
        .then((response) => {
            console.log(response);
            this.setState({Loading: false,purchasing: false});

        }).catch((error) => {
            this.setState({Loading: false,purchasing: false});
            console.log(error);
        });
    }

    



    render() {
        let modalContent = <OrderSummery 
                        ingredients = {this.state.ingredients} 
                        continue ={this.purchaseContinueHandler} 
                        cancel = {this.cancelPurchaseHandler} 
                        price = {this.state.totalPrice}
                        />

        if(this.state.Loading){
            modalContent = <Spinner />
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} cancelPurchase ={this.cancelPurchaseHandler} >
                    {modalContent}
                </Modal>
                <Burger ingredient = { this.state.ingredients} />
                <BuildControls 
                    addIngredient ={this.addIngredientHandler}  
                    removeIngredient={this.removeIngredientHandler} 
                    price={this.state.totalPrice} 
                    purchasable={this.state.purchasable}
                    ordered = {this.purchaseHandler}
                    />
            </Aux>
        );
    }
}
export default BurgerBuilder;