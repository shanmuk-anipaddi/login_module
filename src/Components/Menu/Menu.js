import React from "react";
import Navigation from "./Navigation";
const Menu = (props) => {
  return (
    <Navigation loggedIn={props.loggedStatus} logout={props.logoutHandle} />
  );
};

export default Menu;
