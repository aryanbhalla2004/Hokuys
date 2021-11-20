import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header black_nav clearfix element_to_stick">
      <div className="container">
        <div id="logo">
          <Link to="/"><img src="img/logo_sticky.svg" width="162" height="35" alt="" /></Link>
        </div>
        <div className="layer"></div>
        <ul id="top_menu">
          <li>
            <div className="dropdown dropdown-cart">
              <Link to="/cart" className="cart_bt"><strong>2</strong></Link>
              <div className="dropdown-menu">
                <ul>
                  {
                    [1,2,3,4].map(item => {(
                      <li key={item}>
                        <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-1.jpg" alt="" width="50" height="50" className="lazy" /></figure>
                        <strong><span>1x Pizza Napoli</span>$12.00</strong>
                        <Link to="/" className="action"><i className="icon_trash_alt"></i></Link>
                      </li>
                    )})
                  }
                </ul>
                <div className="total_drop">
                  <div className="clearfix add_bottom_15"><strong>Total</strong><span>$32.00</span></div>
                  <Link to="/checkout" className="btn_1 outline">View Cart</Link><Link to="/checkout" className="btn_1">Checkout</Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <Link to="/" className="open_close">
            <i className="icon_menu"></i><span>Menu</span>
        </Link>
        <nav className="main-menu">
          <div id="header_menu">
            <Link to="/" className="open_close">
              <i className="icon_close"></i><span>Menu</span>
            </Link>
            <Link to="/"><img src="img/logo.svg" width="162" height="35" alt="" /></Link>
          </div>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/help">Help & FAQ</Link></li>
              <li><Link to="/reservation">Reservation</Link></li>
              <li><Link to="/contact">Get in touch</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;