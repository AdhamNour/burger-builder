import React from 'react';

import classes from './SideDrawer.module.css'

const sideDrawerToggler = (props) => {
    return ( 
        <div onClick={props.clicked} className={classes.DrawerToggle} >
            <div></div>
            <div></div>
            <div></div>            
        </div>
    );
}
 
export default sideDrawerToggler;