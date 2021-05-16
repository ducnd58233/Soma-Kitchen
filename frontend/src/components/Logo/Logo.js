import React from 'react';
import somaLogo from '../../assets/images/logo.png';
import classes from '../Logo/Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={somaLogo} alt="logo" /> 
    </div>
)
export default logo;