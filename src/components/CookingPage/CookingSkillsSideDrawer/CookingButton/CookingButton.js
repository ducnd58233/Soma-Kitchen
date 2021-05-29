import React from 'react';

import '../../../../../src/w3style.css'

const cookingSkillsButton = (props) => (
    <div className='w3-padding'>
        <button className='w3-black w3-button' 
        onClick={props.clicked}><b>Cooking Skills</b></button>
    </div>
);

export default cookingSkillsButton;