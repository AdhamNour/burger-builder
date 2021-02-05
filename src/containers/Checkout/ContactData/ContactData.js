import React, { Component } from 'react'

import Button from '../../../components/UI/Button/Button'

import classes from './ContactData.module.css'

class ContactData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            phoneNumber: ''
        }
    }
    render() {
        console.log('Hello form Contact Data')
        return (
            <div className = {classes.ContactData}>
                <h4>Please enter your contact Data</h4>
                <form> 
                    <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                    <input className={classes.Input}  type="text" name="email" placeholder="Your email" />
                    <input className={classes.Input}  type="text" name="address" placeholder="Your address" />
                    <input className={classes.Input}  type="text" name="phone number" placeholder="Your phone number" />
                    <Button btnType = "Success" >ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;