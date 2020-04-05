import React from "react";
import classes from './modal.modules.css';
import Aux from '../../../hoc/Aux';
import BackDrop from '../BackDrop/BackDrop';
const modal = (props)=>(
    <Aux>
        <BackDrop show={props.show} clicked={props.modalClosed}/>
        <div
            className={classes.Modal}
            style={{
                transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1':'0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;