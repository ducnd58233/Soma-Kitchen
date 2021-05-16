import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../src/components/Layout/Layout';
import OrderPage from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Homepage from './containers/Homepage/Homepage';
import AddRecipe from './components/RecipePage/AddRecipe/AddRecipe';
import RecipeDetail from './components/RecipePage/RecipeDetail/RecipeDetail';
import UpdateRecipe from './components/RecipePage/UpdateRecipe/UpdateRecipe';
import TeachingPage from './containers/TeachingPage/TeachingPage';

class App extends Component {
  render(){
    return(
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/order" component={OrderPage} />
          <Route path="/addRecipe" component={AddRecipe} />
          <Route path="/teachingPage" component={TeachingPage}/>
          <Route path="/" exact component={Homepage} />
          <Route path="/recipes/:id" exact component={RecipeDetail} />
          <Route path="/updateRecipe/:id" exact component={UpdateRecipe}/>
        </Switch>
      </Layout>
    )
  }
}

export default App;
