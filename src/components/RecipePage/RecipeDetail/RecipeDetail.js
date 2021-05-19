import React, { Component } from 'react';
import {  Link, withRouter } from 'react-router-dom'

import FoodImage from '../../../assets/images/steak.jpg'

import Auxiliary from '../../../hoc/Auxiliary'
import './RecipeDetail.css';

const url = "http://localhost:9000/recipes" 

class RecipeDetail extends Component {

        state = {
          loadedPost: null,
          _id: '',
          title: '',
          difficulty: '',
          body: '',
          ingredients: '',
          guide: '',
          image: null,
          isUpdate: false,
        };
      
  
    async fetchData(){    
        await fetch(url + "/" + this.props.match.params.id , {mode: "cors"})
            .then(response => response.json())
            .then(json=>this.setState({ loadedPost: json }))
            .catch(err => console.log(err))                     
        }

    componentDidMount() {
        console.log(this.state.loadedPost);

        if(this.props.match.params.id){
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost._id !== this.props.match.params.id) ){
                try{
                    this.fetchData()
                }
                catch(err){
                    console.log("Failed to fetch recipes posts: ", err.message);
                }
            }
        }
    }

    deleteHandler = () => {
        if(window.confirm('Do you want to delete?')){
            fetch(url + "/" + this.props.match.params.id, {
                method: 'delete',
            }).then(res => res.json())
            .then(json => this.fetchData())
            .catch(err => console.log(err))
        }
    }


    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        let updateSection = null;

        if(this.props.match.params.id){
            post = <p style={{textAlign: 'center'}}>Loading... </p>
        }

        if (this.state.loadedPost){
            post = (
                <div className="w3-light-grey">
                    <div className="w3-content w3-margin-top" style={{maxWidth:1400}}>
                        {/* The Grid  */}
                        <div className="w3-row-padding">
                            {/* Left Colum */}
                            <div className="w3-third">
                                <div className= "w3-white w3-text-grey w3-card-4" >
                                    <div className="w3-display-container">
                                        <img src={FoodImage} alt="Food" style={{width: '100%'}} />
                                        <div className="w3-display-bottomleft w3-container w3-text-black">
                                            <h1>{this.state.loadedPost.title}</h1>
                                        </div>
                                    </div>
                                    <div className="w3-container">
                                        <p><i className="fa fa-briefcase fa-fw"></i> Skill Requirements: {this.state.loadedPost.difficulty} </p>
                                        <div className="w3-black"><i className="fa fa-pencil-square-o w3-padding"></i>Description: </div>
                                        <div>   {this.state.loadedPost.body}</div>
                                    </div>
                                </div>
                                <div className="  w3-card w3-white w3-margin-top">
                                    <div className="w3-container" style={{paddingTop:20}}>
                                        <div className="w3-black"><i className="fa fa-address-card-o w3-padding"></i>Chef Information </div>
                                        <p><i className="fa fa-user-o fa-fw w3-margin-right w3-large w3-text-teal"></i> Alexander</p>
                                        <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i> London, UK</p>
                                        <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i> Alexander512@gmail.com</p>
                                        <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i> 012939100123</p>
                                    </div>
                                </div>
                            </div>
                             {/* Right Colum */}
                             <div className="w3-twothird">
                                <div className="w3-container w3-card w3-white w3-margin-bottom">
                                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-shopping-basket w3-padding fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i> Ingredients Required</h2>
                                    <div>{this.state.loadedPost.ingredients}</div>
                                </div>

                                <div className="w3-container w3-card w3-white w3-margin-bottom">
                                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-glass w3-padding fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i> Recipe</h2>
                                    <div>{this.state.loadedPost.guide}</div>
                                </div>
                                <div>
                                <button 
                                className="w3-button w3-green w3-padding-16 " style={{float: 'right'}}>
                                    <Link to={'/order'}>
                                        Order Food
                                    </Link>
                                </button>
                                </div>
                            </div>  
                        </div>
                        <div className="w3-container">
                            <button className="w3-button w3-black w3-padding-16"
                            onClick={this.deleteHandler}>Delete</button>

                            
                            <Link to={/updateRecipe/ + this.state.loadedPost._id} key={this.props.match.params.id} >
                                <button 
                                className="w3-button w3-black w3-padding-16">
                                    Update
                                </button>
                            </Link>
                        </div>
                    </div>    
                    
                </div>
            );
        }

        return (
            <Auxiliary>
                {post}
            </Auxiliary>
            
        )
    }
}

export default withRouter(RecipeDetail);