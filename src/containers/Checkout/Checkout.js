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

    componentDidMount() {
        console.log('[checkout.js]')
        console.log(this.props)
        const query = new URLSearchParams(this.props.location.search);
        const _ingredients ={};
        for(let params of query.entries()) {
            _ingredients[params[0]]=params[1];
        }
        console.log(_ingredients)

        this.setState({ingredient: _ingredients});
    }

    render() {
        console.log(this.state)
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