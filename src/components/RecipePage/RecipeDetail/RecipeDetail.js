import React, { Component } from 'react';
import {  Link, withRouter } from 'react-router-dom'

import Auxiliary from '../../../hoc/Auxiliary';
import PageTitle from '../../common/Title/PageTitle';

import './RecipeDetail.css';

const url = "http://localhost:9000/recipes" 

class RecipeDetail extends Component {

        state = {
          loadedPost: null,
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

            this.props.history.push({
                pathname: '/homepage',
            })
        }
    }


    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        

        if(this.props.match.params.id){
            post = <p style={{textAlign: 'center'}}>Loading... </p>
        }

        if (this.state.loadedPost){
            let lines = this.state.loadedPost.ingredients.split('\n').map( (line,index) => {
                return (
                    <p key={index}>
                        {line}
                    </p>
                )        
            })
            let recipeGuide = this.state.loadedPost.guide.split('\n').map( (step, index) => {
                return (
                    <p key={index}>
                        {step}
                    </p>
                )
            })
            post = (
                <>
                <PageTitle 
                   title={this.state.loadedPost.title}
                   subTitle="Recipe #25102589748"
                />
                <div className="w3-light-grey">
                    <div className="w3-content w3-margin-top" style={{maxWidth:1400}}>
                        {/* The Grid  */}
                        <div className="w3-row-padding">
                            {/* Left Colum */}
                            <div className="w3-third">
                                <div className= "w3-white w3-text-grey w3-card-4" >
                                    <div className="w3-display-container">
                                        <img src={this.state.loadedPost.image} alt="Food" style={{width: '100%'}} />
                                        <div className="w3-display-bottomleft w3-container w3-text-black">
                                        </div>
                                    </div>
                                    <div className="w3-container">
                                        <div><h6><i className="fa fa-briefcase fa-fw"></i> Skill Requirements:</h6> <b>{this.state.loadedPost.difficulty}</b> </div>
                                        <div className="w3-black"><i className="fa fa-pencil-square-o w3-padding"></i>Description: </div>
                                        <p></p>
                                        <div> {this.state.loadedPost.body}</div>
                                    </div>
                                </div>
                                <div className="  w3-card w3-white w3-margin-top">
                                    <div className="w3-container" style={{paddingTop:20}}>
                                        <div className="w3-black"><i className="fa fa-address-card-o w3-padding"></i>Chef Information </div>
                                        <p></p>
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
                                    <div>{lines}</div>
                                </div>

                                <div className="w3-container w3-card w3-white w3-margin-bottom">
                                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-glass w3-padding fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i> Recipe</h2>
                                    <div>{recipeGuide}</div>
                                </div>
                                <div>
                                    <Link to={'/order'}>
                                        <button 
                                        className="w3-button w3-green w3-padding-16 " style={{float: 'right'}}>
                                            Order Food
                                        </button>
                                    </Link>
                                </div>
                                <div className="w3-container">
                                    <button className="w3-button w3-black w3-padding-16"
                                    onClick={this.deleteHandler}>Delete</button>

                                    
                                    <Link to={/updateRecipe/ + this.state.loadedPost._id} key={this.state.loadedPost._id} >
                                        <button 
                                            className="w3-button w3-black w3-padding-16">
                                            Update
                                        </button>
                                    </Link>
                                </div>
                            </div>  
                        </div>
                    </div>    
                    
                </div>
                </>
            );
        }

        return (
            <>
            <Auxiliary>
                {post}
            </Auxiliary>
            </>
            
        )
    }
}

export default withRouter(RecipeDetail);