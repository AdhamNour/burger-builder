import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummery/CheckoutSummary'

class Checkout extends Component {
    state = {
        ingredient :{
            salad:1,
            meat:1,
            cheese:1,
            bacon:1
        }
    }

    checkoutCancelHandler = () =>{
        this.props.history.goBack();
    }

    checkoutContinueHandler = () =>{
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredient = {this.state.ingredient}
                    checkoutCancelled = {this.checkoutCancelHandler}
                    checkoutContinued = {this.checkoutContinueHandler}
                />
            </div>
        );
    }
}

export default Checkout;