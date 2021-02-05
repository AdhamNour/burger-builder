import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummery/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
    state = {
        ingredient: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    componentWillMount() {
        console.log('[checkout.js]')
        console.log(this.props)
        const query = new URLSearchParams(this.props.location.search);
        const _ingredients = {};
        for (let params of query.entries()) {
            _ingredients[params[0]] = +params[1];
        }
        console.log(_ingredients)

        this.setState({ ingredient: _ingredients });
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <CheckoutSummary
                    ingredient={this.state.ingredient}
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinueHandler}
                />
                <Route path={this.props.match.path + '/contact-data'} render={(props) => <ContactData ingredients={this.state.ingredient} {...props} />} />
            </div>
        );
    }
}

export default Checkout;