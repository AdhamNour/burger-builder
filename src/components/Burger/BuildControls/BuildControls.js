import React from 'react';

import BuildControl from './BuildControl/BuildControl'

import classes from './BuildControls.module.css'

const buildControls = (props) => {
    const controls = [
        {label:"Salad",type:"salad"},
        {label:"Bacon",type:"bacon"},
        {label:"Cheese",type:"cheese"},
        {label:"Meat",type:"meat"},
        
    ];

    const controlWidgets = controls.map(ctrl => <BuildControl 
                                                    label={ctrl.label} 
                                                    key={ctrl.label}
                                                    added = {() =>props.addIngredient(ctrl.type)}   
                                                    removed = {() =>props.removeIngredient(ctrl.type)}                                                 
                                                    />);
    return ( 
        <div className = {classes.BuildControls} >
            <p> Price = <strong>{props.price}</strong> </p>
            {controlWidgets}
            <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    );
}
export default buildControls;