import React from 'react';
import FoodImage from '../../../../assets/images/steak.jpg'
import './Recipe.css';

const recipe = (props) => (
    <article className="Post" onClick={props.clicked}>
        
        <div className="Info">
            <img src={FoodImage} alt="Steakimage" style={{width: '100%'}} />
            <h2>{props.title}</h2>
        </div>
    </article>
);

export default recipe;
