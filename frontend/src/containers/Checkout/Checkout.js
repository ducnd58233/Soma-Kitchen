import React, { Component } from 'react';

import CheckoutSummary from '../../components/OrderPage/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0,
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        query.forEach((value, key) => (ingredients[key] = Number(value)));
        this.setState({ingredients: ingredients});
    }


    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    />
            </div>
        );
    }
}

export default Checkout;