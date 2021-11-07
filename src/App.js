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

  return (
    <>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Helmet link={[{rel: "stylesheet", href: 'css/home.css'}]}/>
            <Home />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route exact path="/reservation">
            <Reservation />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/selectedItem">
            <FoodPage></FoodPage>
          </Route>
        </Switch>
        <Helmet script={[{src: './js/common_scripts.min.js'}]}/>
        <Helmet script={[{src: './js/common_func.js'}]}/>
        <Helmet script={[{src: './assets/validate.js'}]}/>
      <Footer/>
    </>
  )
}

export default App;
