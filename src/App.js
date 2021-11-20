import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Help from "./Pages/Help";
import Home from "./Pages/Home";
import Reservation from "./Pages/Reservation";
import Contact from "./Pages/Contact";
import Checkout from "./Pages/Checkout";
import FoodPage from "./Pages/Foodpage";
import { Helmet } from "react-helmet";


const App = () => {
  const scriptAdder = () => {
    var head = document.getElementsByTagName('head').item(0);
    var scriptOne = document.createElement('script');
    scriptOne.setAttribute('type', 'text/javascript');
    scriptOne.setAttribute('src', './js/common_func.js');
    var scriptTwo = document.createElement('script');
    scriptTwo.setAttribute('type', 'text/javascript');
    scriptTwo.setAttribute('src', './js/validate.js');
    var scriptThree = document.createElement('script');
    scriptThree.setAttribute('type', 'text/javascript');
    scriptThree.setAttribute('src', './js/common_scripts.min.js');

    head.appendChild(scriptOne);
    head.appendChild(scriptTwo);
    head.appendChild(scriptThree);
  }
  return (
    <>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home hel={scriptAdder}/>
          </Route>
          <Route exact path="/help">
            <Help hel={scriptAdder}/>
          </Route>
          <Route exact path="/reservation">
            <Reservation hel={scriptAdder}/>
          </Route>
          <Route exact path="/contact">
            <Contact hel={scriptAdder}/>
          </Route>
          <Route exact path="/checkout">
            <Checkout hel={scriptAdder}/>
          </Route>
          <Route exact path="/selectedItem">
            <FoodPage hel={scriptAdder}/>
          </Route>
        </Switch>
      <Footer/>
    </>
  )
}

export default App;
