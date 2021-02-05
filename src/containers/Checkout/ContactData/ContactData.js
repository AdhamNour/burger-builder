import React, { Component, Fragment } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

import classes from "./ContactData.module.css";

class ContactData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderForm: {
        name: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "your name",
          },
          value: "",
        },
        email: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "your e-mail",
          },
          value: "",
        },
        address: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "your address",
          },
          value: "",
        },
        phoneNumber: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "your phone number",
          },
          value: "",
        },
        deliveryMethod: {
          elementType: "select",
          elementConfig: {
            options: [
              { value: "fastest", displayValue: "Fastest" },
              { value: "cheapesr", displayValue: "Cheapest" },
            ],
          },
        },
      },
      loading: false,
    };
  }
  orderHandler = (event) => {
    event.preventDefault();
    const order = {
      ingredients: this.props.ingredients,
      customerID: 5, //this is dummy data
    };
    this.setState({ loading: true });
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        this.setState({ loading: false });
        this.props.history.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <Fragment>
        <h4>Please enter your contact Data</h4>
        <form>
          {formElementsArray.map((formElement) => (
            <Input
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              key={formElement.id}
            />
          ))}
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </Fragment>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return <div className={classes.ContactData}>{form}</div>;
  }
}

export default ContactData;
