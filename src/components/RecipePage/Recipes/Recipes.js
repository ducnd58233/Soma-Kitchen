import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Col} from 'react-bootstrap';

import Recipe from './Recipe/Recipe';


const url = "http://localhost:9000/recipes";

class Recipes extends Component {
    state = {
        recipe: [],
        title: '',
        body: '',
		difficulty: '',
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



    render () {
        let recipes = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if(!this.state.error) {
            recipes = this.state.recipe.map(recipe => {
                return (
						<Link to={/recipes/ + recipe._id} key={recipe._id}>
							<Recipe 
							key={recipe._id}
							title={recipe.title}
							image={recipe.image}
							difficulty={recipe.difficulty} />
						</Link>
					
                )
            });
        }

        return(
			<Col md={4} sm={6} className="grid-container">
			   {recipes}
			</Col>
        )
    }
}

const options={
	responsive: {
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000: {
          items: 4,
        },
        1200: {
          items: 4,
        },
      },

        lazyLoad: true,
        pagination: false.toString(),
        loop: true,
        dots: false,
        autoPlay: 2000,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
}


export default Recipes;