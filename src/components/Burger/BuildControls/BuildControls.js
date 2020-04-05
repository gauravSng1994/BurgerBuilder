import React from "react";
import classes from './BuildControls.modules.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
];

const buildControls = (props) =>(
    <div className={classes.BuildControls}>
        <p>Current Price : <strong>{props.price}</strong></p>
        {
            controls.map( (control) => {
               return <BuildControl clicked = {props.clicked} key={control.label} label={control.label} type={control.type} />
            })
        }
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.purchase}>ORDER NOW</button>
    </div>
);

export default buildControls;