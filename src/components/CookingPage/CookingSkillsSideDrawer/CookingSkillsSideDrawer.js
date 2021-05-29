import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import CookingSkills from '../../CookingPage/CookingSkills/CookingSkills';
import classes from '../CookingSkillsSideDrawer/CookingSkillsSideDrawer.module.css';
import { Link } from 'react-router-dom';

const cookingSkillsSideDrawer = (props)  => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Auxiliary>
           
           <Backdrop show={props.open} 
            clicked={props.closed}/>
            
            <div className={attachedClasses.join(' ')}>
                <nav >
                    <Link to='/addvideo'>Add New Skill</Link>
                    <CookingSkills style={{flexFlow:'column'}} />
                </nav>
            </div>
        </Auxiliary>
       
    );
}

export default  cookingSkillsSideDrawer;