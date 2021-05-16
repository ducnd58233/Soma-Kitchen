import React from 'react';
import classes from '../DrawerToggle/DrawerToggle.module.css'

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} style={{height:60}}
   onClick={props.clicked}><h3>☰</h3></div>
);

export default drawerToggle;