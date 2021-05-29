import React from 'react';
import {Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Recipe from '../RecipePage/Recipes/Recipe/Recipe';

const url = "http://localhost:9000/recipes";
class Favourites extends React.Component {
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
						image={recipe.image}
                        clicked={() => this.recipeSelectedHandler(recipe._id)} />
                    </Link>
                )
            });
        }

    	return (
    		<>
    		    <div className='p-4 bg-white shadow-sm'>
	              <Row>
	                 <Col md={12}>
	                    <h4 className="font-weight-bold mt-0 mb-3">My Recipes</h4>
	                 </Col>
	                 <Col md={4} sm={6} className="grid-container">
					 {recipes}
	                 </Col>
	              </Row>
			    </div>
		    </>
    	);
    }
}
export default Favourites;