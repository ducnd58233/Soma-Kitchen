import React, { Component } from 'react';

import Recipes from '../../components/RecipePage/Recipes/Recipes';
import './Homepage.css';

class Homepage extends Component {
    render () {
        return (
            <div>
                <Recipes />
            </div>
        );
    }
}

export default Homepage;