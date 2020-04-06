import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux'
import BackDrop from '../../UI/BackDrop/BackDrop';
import classes from './SideDrawer.css'
const sideDrawer = (props) =>{
    let attachedClasses = [classes.SideDrawer];
    props.open ? attachedClasses.push(classes.Open) : attachedClasses.push(classes.Close);
    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    )
};

export default sideDrawer;