import React from 'react';
import './Recipe.css';
import CardItem from '../../../common/CardItem';
const recipe = (props) => (
    <article onClick={props.clicked}>
        <img src= {"http://localhost:9000" + props.image}/>
        <CardItem className="Info"
        title={props.title}
        subTitle='North Indian • American • Pure veg'
        imageClass='img-fluid item-img'
		linkUrl='detail'
        offerText='By Diana Moutsopoulos'
        time='35–45 min'
        showPromoted={true}
        promotedVariant='dark'
        favIcoIconColor='text-danger'
        rating='3.1 (300+)' />
    </article>
);

export default recipe;
