import React from 'react';
import './Recipe.css';
import CardItem from '../../../common/Card/CardItem';
const recipe = (props) => (
    <article onClick={props.clicked}>
        <img src={'http://localhost:9000' + props.image} alt="Steakimage" style={{width: '100%'}} />
        <CardItem className="Info"
        title={props.title}
        linkUrl='/recipes/:id'
        imageClass='img-fluid item-img'
        offerText="Let's learn this recipe"
        difficulty={props.difficulty} />
    </article>
);

export default recipe;
