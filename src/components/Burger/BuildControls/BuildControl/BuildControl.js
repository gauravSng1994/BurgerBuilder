import React from "react";
import classes from './BuildControl.modules.css'
const buildControl = (props)=> (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={()=>props.clicked(props.type,'REMOVE')}>Less</button>
        <button className={classes.More} onClick={()=>props.clicked(props.type,'ADD')}>More</button>
    </div>
);

export default buildControl;