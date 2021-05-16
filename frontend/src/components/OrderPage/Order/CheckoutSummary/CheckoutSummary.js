import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Hope you enjoy the food!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                btnType="Success"
                clicked={props.checkoutCancelled}><h3>OK</h3></Button>
        </div>
    )
}

export default checkoutSummary;