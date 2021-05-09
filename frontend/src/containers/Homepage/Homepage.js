import React, { Component } from 'react';
//import axios from 'axios';


import Recipe from '../../components/RecipePage/Recipe/Recipe';
import RecipeDetail from '../../components/RecipePage/RecipeDetail/RecipeDetail';
import AddRecipe from '../../components/RecipePage/AddRecipe/AddRecipe';
import './Homepage.css';

class Homepage extends Component {
    state = {
        recipe: [],
        title: '',
        body: '',
        ingredients: '',
        guide: '',
        image: null,
        selectedPostId: null
    }

    async fetchData(){    
        const url = "http://localhost:9000/recipes";
        await fetch(url, {
                mode: "cors", 
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then(response => response.json())
            .then(json => this.setState({recipe: json}))
            .catch(err => console.log(err))                     
    }
 

    componentDidMount() {
        this.fetchData();
    }

    recipeSelectedHandler = (_id) => {
        this.setState({selectedPostId: _id})
    }

    render () {
        let recipes = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if(!this.state.error) {
            recipes = this.state.recipe.map(recipe => {
                return <Recipe key={recipe._id}
                 title={recipe.title}
                 image={recipe.image}
                 clicked={() => this.recipeSelectedHandler(recipe._id)} />
            });
        }
            
        return (
            <div>
                <section className="Posts">
                    {recipes}
                </section>
                <section>
                    <RecipeDetail id={this.state.selectedPostId}/>
                </section>
                <section>
                    <AddRecipe />
                </section>
                
            </div>
        );
    }
}

export default Homepage;