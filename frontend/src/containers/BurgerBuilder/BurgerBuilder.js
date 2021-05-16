import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/OrderPage/Burger/Burger.js';
import BurgerControls from '../../components/OrderPage/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderPage/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
    salad : 1,
    cheese: 2, 
    meat : 3,
    bacon : 3,
}

class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: null,
            totalPrice: 0,
            purchaseable: false,
            purchasing: false, 
            loading: false,
        }
    }

    componentDidMount(){
        axios.get('ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
            });
    }

    updatePurchaseState (ingredients) {       
        let existIngredient = Object.values(ingredients).some(amount => amount > 0);
        console.log(Object.values(ingredients));
        this.setState({purchaseable: existIngredient});
    }
    

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        // alert('You Continue');
        // this.setState({loading: true})

        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Max',
        //         address: {
        //             street: 'Street 9A',
        //             zipCode: '700000',
        //             country: 'VietNam'
        //         },
        //         email: 'thinhnguyen@gmail.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axios.post('/orders.json', order)
        // .then(response => {
        //     this.setState({loading: false})
        // })
        // .catch(error => {
        //     this.setState({loading: false})
        // });

        // this.setState({purchasing: false})

        this.props.history.push({
            pathname: '/checkout',
            search: new URLSearchParams(this.state.ingredients).toString()
        });
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;

        let burger = <Spinner />;

        if(this.state.ingredients){
            burger = (
                <Auxiliary>
                    <Burger ingredients={this.state.ingredients} />
    
                    <div><h2>Total Price: ${this.state.totalPrice.toFixed(2)}</h2></div>
                   
                    <BurgerControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler} 
                    disabled = {disabledInfo} 
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}/>
                </Auxiliary>
                );

            orderSummary = <OrderSummary 
                totalprice = {this.state.totalPrice}
                ingredients={this.state.ingredients}
                purchaseCanceled = {this.purchaseCancelHandler}
                purchaseContinued = {this.purchaseContinueHandler} />

        }

        if (this.state.loading){
            orderSummary = <Spinner />
        }
        
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing}>
                   {orderSummary}
                </Modal>

                {burger}
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;