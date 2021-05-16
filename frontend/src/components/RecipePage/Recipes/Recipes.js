import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Recipe from '../../RecipePage/Recipes/Recipe/Recipe';

const url = "http://localhost:9000/recipes";
class Recipes extends Component {
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
        await fetch(url, {mode: "cors"})
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
                return (
                    <Link to={/recipes/ + recipe._id} key={recipe._id}>
                        <Recipe 
                        key={recipe._id}
                        title={recipe.title}
                        clicked={() => this.recipeSelectedHandler(recipe._id)} />
                    </Link>
                )
            });
        }

        return(
            <div>
            <section className="Posts">
                {recipes}
            </section>  
        </div>
        )
    }
}

export default Recipes;