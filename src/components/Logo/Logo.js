import React from "react";
import { Link } from "react-router-dom";

import burgerLogo from "../../assets/images/burger-logo.png";

import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <Link to="/">
        <img src={burgerLogo} alt="My Burger" />
      </Link>
    </div>
  );
};

export default Logo;
