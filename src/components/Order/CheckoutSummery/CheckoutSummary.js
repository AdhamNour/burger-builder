import React from 'react'


import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

import classes from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
    console.log('[checkoutSummary]')
    console.log(props)
    return (
        <div className={classes.CheckoutSummary} >
            <h1>We hope that it would test well</h1>
            <div style = {{width : "100%",margin:"auto"}}>
                <Burger ingredient ={props.ingredient} />
            </div>
            <Button btnType = "Danger" clicked={props.checkoutCancelled} >CANCEL</Button>
            <Button btnType = "Success" clicked={props.checkoutContinued} >Continue</Button>
        </div>
    );
}
 
export default checkoutSummary;