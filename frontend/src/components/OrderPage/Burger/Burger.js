import React from 'react';
//import { withRouter } from 'react-router-dom';

import classes from '../Burger/Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
  console.log(props);
    const ingredients = {...props.ingredients}
    const showingIngredient = [];
   
    for(let key in ingredients){
      for (let i = 0; i < ingredients[key]; i++){
        showingIngredient.push(<BurgerIngredient key={key+i} type={key}/>)
    }}
   
    if(showingIngredient.length === 0) showingIngredient.push('Please start adding ingredients!');
   
    return (
      <div className={classes.Burger}>
        <BurgerIngredient type='bread-top'/>
          {showingIngredient}
        <BurgerIngredient type='bread-bottom'/>
      </div>
    )
  }

export default Burger;