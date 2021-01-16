import React from 'react';

import BuildControl from './BuildControl/BuildControl'
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
                                                    />);
    return ( 
        <div>
            {controlWidgets}
        </div>
    );
}
export default buildControls;