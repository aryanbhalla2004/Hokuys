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

  const scriptReturner = () => {
    const metaTag = document.querySelectorAll(`script[name="googlebot"]`);
    if(metaTag.length > 0) {
      metaTag[0].remove();
      metaTag[1].remove();
      metaTag[2].remove();
    }
    return (
      <Helmet>
        <script src="./js/common_scripts.min.js" name="googlebot"></script>
        <script src="./js/common_func.js" name="googlebot"></script>
        <script src="./assets/validate.js"name="googlebot"></script>
      </Helmet>
    )
  }

  return (
    <>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Helmet link={[{rel: "stylesheet", href: 'css/home.css'}]}/>
            <Home hel={scriptReturner}/>
          </Route>
          <Route exact path="/help">
            <Help hel={scriptReturner}/>
          </Route>
          <Route exact path="/reservation">
            <Reservation hel={scriptReturner}/>
          </Route>
          <Route exact path="/contact">
            <Contact hel={scriptReturner}/>
          </Route>
          <Route exact path="/checkout">
            <Checkout hel={scriptReturner}/>
          </Route>
          <Route exact path="/selectedItem">
            <FoodPage></FoodPage>
          </Route>
        </Switch>
      <Footer/>
    </>
  )
}

export default App;
