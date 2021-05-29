import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HeaderUser from './components/common/Header/HeaderUser';
import FooterUser from './components/common/Footer/FooterUser';
import Index from './components/Index';
import MyAccount from './components/myaccount/MyAccount';
import NotFound from './components/Homepage/NotFound';
import Thanks from './components/Homepage/Thanks';
import Login from './components/SignPage/Login';
import Register from './components/SignPage/Register';
import Located from './components/OrderPage/Located';
import Homepage from './components/Homepage/Homepage';
import Quangdz from './components/Homepage/404';
import AddRecipe from './components/RecipePage/AddRecipe/AddRecipe';
import RecipeHome from './components/RecipePage/Recipes/RecipesHome';
import RecipeUser from './components/RecipePage/Recipes/RecipesUser';
import RecipeDetail from './components/RecipePage/RecipeDetail/RecipeDetail';
import UpdateRecipe from './components/UpdateRecipe/UpdateRecipe';
import OrderPage from './container/BurgerBuilder/BurgerBuilder';
import CookingSkillsDetail from './components/CookingPage/CookingSkillsDetail/CookingSkillsDetail';
import AddVideoPage from './components/CookingPage/AddVideoPage/AddVideoPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-select2-wrapper/css/select2.css';
import './App.css';

class App extends React.Component  {
  constructor(){
    super()
    this.state = {
      isAuthenticated: 0}
  }

  componentWillMount(){
    if (window.sessionStorage.getItem("isAuthenticated") === null) {
      window.sessionStorage.setItem('isAuthenticated', 0)
    }
    this.setState({isAuthenticated: window.sessionStorage.getItem('isAuthenticated')})
  }
  
  render() {
    
    return (
      <>
          {
            (this.props.location.pathname!=='/login' && this.props.location.pathname!=='/register' && this.props.location.pathname!=='/' &&
            this.props.location.pathname!=='/homedetail' ) && this.props.location.pathname!=='/homelisting' && this.props.location.pathname!=='/404nf' 
            && this.props.location.pathname!=='/recipeHome'   ? <HeaderUser/>:''
          }
          
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/homepage" exact component={Homepage} />
            <Route path="/myaccount" component={MyAccount} />
            <Route path="/404" exact component={NotFound} />
            <Route path="/404nf" exact component={Quangdz} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/order" exact component={OrderPage} />
            <Route path="/located" exact component={Located} />
            <Route path="/thanks" exact component={Thanks} />
            <Route path="/addrecipe" exact component={AddRecipe} />
            <Route path="/addvideo" exact component={AddVideoPage} />
            <Route path="/recipeHome" exact component={RecipeHome} />
            <Route path="/recipeUser" exact component={RecipeUser} />
            <Route path="/recipes/:id" exact component={RecipeDetail} />
            <Route path="/updateRecipe/:id" exact component={UpdateRecipe}/>
            <Route path="/cookings/:id" exact component={CookingSkillsDetail}/>
            <Route exact component={NotFound} />
          </Switch>
          {
           (this.props.location.pathname!=='/login' && this.props.location.pathname!=='/register' && this.props.location.pathname!=='/' &&
           this.props.location.pathname!=='/homedetail' ) && this.props.location.pathname!=='/homelisting' && this.props.location.pathname!=='/404nf' 
           && this.props.location.pathname!=='/recipeHome'  ? <FooterUser/>:''
          }
      </>
    );
  }
}

export default App;
