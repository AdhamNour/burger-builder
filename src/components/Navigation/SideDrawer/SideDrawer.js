import React, {Fragment} from 'react';

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

import classes from './SideDrawer.module.css'
import BackDrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
    let SideDrawerClasses = [classes.SideDrawer];
    if(props.showSideDrawer){
        SideDrawerClasses.push(classes.Open);
    }
    else{
        SideDrawerClasses.push(classes.Close);
    }

    return ( 
        <Fragment>
            <BackDrop show={props.showSideDrawer } clicked={props.closed} />
            <div className = {SideDrawerClasses.join(' ')}>
                <div className = {classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    );
}

export default sideDrawer;