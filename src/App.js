import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HeaderUser from './components/common/HeaderUser';
import Footer from './components/common/Footer';
import Index from './components/Index';
import MyAccount from './components/myaccount/MyAccount';
import NotFound from './components/NotFound';
import Thanks from './components/Thanks';
import Login from './components/SignPage/Login';
import Register from './components/SignPage/Register';
import TrackOrder from './components/OrderPage/TrackOrder';
import List from './components/OrderPage/List';
import Invoice from './components/OrderPage/Invoice';
import Detail from './components/OrderPage/Detail';
import Checkout from './components/OrderPage/Checkout';
import Homepage from './components/Homepage/Homepage';
import HomeList from './components/Homepage/HomeList';
import HomeDetail from './components/Homepage/HomeDetail';
import Quangdz from './components/Homepage/404';
import AddRecipe from './components/RecipePage/AddRecipe/AddRecipe';
import Recipe from './components/RecipePage/Recipes/Recipes';
import RecipeDetail from './components/RecipePage/RecipeDetail/RecipeDetail';
import UpdateRecipe from './components/UpdateRecipe/UpdateRecipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-select2-wrapper/css/select2.css';
import './App.css';

class App extends React.Component  {
  
  render() {
    
    return (
      <>
          {
            (this.props.location.pathname!=='/login' && this.props.location.pathname!=='/register' && this.props.location.pathname!=='/' &&
            this.props.location.pathname!=='/homedetail' ) && this.props.location.pathname!=='/homelisting' && this.props.location.pathname!=='/404nf'  ? <HeaderUser/>:''
          }
          
          <Switch>
            <Route path="/homepage" exact component={Homepage} />
            <Route path="/" exact component={Index} />
            <Route path="/listing" exact component={List} />
            <Route path="/homelisting" exact component={HomeList} />
            <Route path="/myaccount" component={MyAccount} />
            <Route path="/404" exact component={NotFound} />
            <Route path="/404nf" exact component={Quangdz} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/track-order" exact component={TrackOrder} />
            <Route path="/invoice" exact component={Invoice} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/thanks" exact component={Thanks} />
            <Route path="/detail" exact component={Detail} />
            <Route path="/homedetail" exact component={HomeDetail} />
            <Route path="/addrecipe" exact component={AddRecipe} />
            <Route path="/recipe" exact component={Recipe} />
            <Route path="/recipes/:id" exact component={RecipeDetail} />
            <Route path="/updateRecipe/:id" exact component={UpdateRecipe}/>
            <Route exact component={NotFound} />
          </Switch>
          {
            (this.props.location.pathname!=='/login' && this.props.location.pathname!=='/register') ? <Footer/>:''
          }
      </>
    );
  }
}

export default App;
