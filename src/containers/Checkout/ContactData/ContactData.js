import React, { Component, Fragment} from 'react'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import axios from '../../../axios-orders'

import classes from './ContactData.module.css'

class ContactData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      phoneNumber: '',
      loading: false
    }
  }
  orderHandler = (event) => {
    event.preventDefault();
    const order = {
      ingredients: this.props.ingredients,
      customerID: 5, //this is dummy data
    };
    this.setState({loading:true});
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        this.setState({ loading: false});
        this.props.history.replace('/')
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let form = (
      <Fragment>
        <h4>Please enter your contact Data</h4>
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Your name" />
          <input className={classes.Input} type="text" name="email" placeholder="Your email" />
          <input className={classes.Input} type="text" name="address" placeholder="Your address" />
          <input className={classes.Input} type="text" name="phone number" placeholder="Your phone number" />
          <Button btnType="Success" clicked={this.orderHandler} >ORDER</Button>
        </form>
      </Fragment>
    );
      if(this.state.loading){
        form = <Spinner />
      }
    return (
      <div className={classes.ContactData}>
        {form}
      </div>
    );
  }
}

export default ContactData;