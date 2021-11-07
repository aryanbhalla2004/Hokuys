import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header class="header black_nav clearfix element_to_stick">
        <div class="container">
            <div id="logo">
                <Link to="/">
                    <img src="img/logo_sticky.svg" width="162" height="35" alt="" />
                </Link>
            </div>
            <div class="layer"></div>
            <ul id="top_menu">
                <li><a href="#sign-in-dialog" id="sign-in" class="login">Sign In</a></li>
                <li>
                    <div class="dropdown dropdown-cart">
                        <a href="cart.html" class="cart_bt"><strong>2</strong></a>
                        <div class="dropdown-menu">
                            <ul>
                                <li>
                                    <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-1.jpg" alt="" width="50" height="50" class="lazy" /></figure>
                                    <strong><span>1x Pizza Napoli</span>$12.00</strong>
                                    <a href="#0" class="action"><i class="icon_trash_alt"></i></a>
                                </li>
                                 <li>
                                    <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-2.jpg" alt="" width="50" height="50" class="lazy" /></figure>
                                    <strong><span>1x Hamburgher Maxi</span>$10.00</strong>
                                    <a href="#0" class="action"><i class="icon_trash_alt"></i></a>
                                </li>
                                 <li>
                                    <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-3.jpg" alt="" width="50" height="50" class="lazy" /></figure>
                                    <strong><span>1x Red Wine Bottle</span>$20.00</strong>
                                    <a href="#0" class="action"><i class="icon_trash_alt"></i></a>
                                </li>
                            </ul>
                            <div class="total_drop">
                                <div class="clearfix add_bottom_15"><strong>Total</strong><span>$32.00</span></div>
                                <a href="order.html" class="btn_1 outline">View Cart</a><Link to="/checkout" class="btn_1">Checkout</Link>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <a href="#0" class="open_close">
                <i class="icon_menu"></i><span>Menu</span>
            </a>
            <nav class="main-menu">
                <div id="header_menu">
                    <a href="#0" class="open_close">
                        <i class="icon_close"></i><span>Menu</span>
                    </a>
                    <a href="index.html"><img src="img/logo.svg" width="162" height="35" alt="" /></a>
                </div>
                <ul>
                    <li class="submenu">
                        <Link to="/" class="show-submenu">Home</Link>
                        <ul>
                            <li><a href="index.html">Address Autocomplete</a></li>
                            <li><a href="index-2.html">Search by Keyword</a></li>
                            <li><a href="index-3.html">Home Version 2</a></li>
                            <li><a href="index-4.html">Video Background</a></li>
                            <li><a href="index-5.html">GDPR Cookie Bar EU Law</a></li>
                            <li><a href="header-user-logged.html">Header User Logged</a></li>
                            <li><a href="header-cart-top.html">Header Cart Top</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <Link to="/help" class="show-submenu">Help & FAQ</Link>
                        <ul>
                            <li class="third-level"><a href="#0">List pages</a>
                                <ul>
                                    <li><a href="grid-listing-filterscol.html">List default</a></li>
                                    <li><a href="grid-listing-filterscol-map.html">List with map</a></li>
                                    <li><a href="listing-map.html">List side map</a></li>
                                    <li><a href="grid-listing-masonry.html">List Masonry Filter</a></li>
                                </ul>
                            </li>
                            <li class="third-level"><a href="#0">Detail pages</a>
                                <ul>
                                    <li><a href="detail-restaurant.html">Detail page 1</a></li>
                                    <li><a href="detail-restaurant-2.html">Detail page 2</a></li>
                                    <li><a href="detail-restaurant-3.html">Detail page 3</a></li>
                                </ul>
                            </li>
                            <li class="third-level"><a href="#0">OpenStreetMap</a>
                                <ul>
                                    <li><a href="grid-listing-filterscol-openstreetmap.html">List with map</a></li>
                                    <li><a href="listing-map-openstreetmap.html">List side map</a></li>
                                    <li><a href="grid-listing-masonry-openstreetmap.html">List Masonry Filter</a></li>
                                </ul>
                            </li>
                            <li><a href="submit-restaurant.html">Submit Restaurant</a></li>
                            <li><a href="submit-rider.html">Submit Rider</a></li>
                            <li><a href="order.html">Order</a></li>
                            <li><a href="confirm.html">Confirm Order</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <Link to="/reservation" class="show-submenu">Reservation</Link>
                        <ul>
                            <li><a href="404.html">404 Error</a></li>
                            <li><a href="help.html">Help and Faq</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="leave-review.html">Leave a review</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            <li><a href="coming_soon/index.html">Coming Soon</a></li>
                            <li><a href="register.html">Sign Up</a></li>
                            <li><a href="icon-pack-1.html">Icon Pack 1</a></li>
                            <li><a href="icon-pack-2.html">Icon Pack 2</a></li>
                            <li><a href="shortcodes.html">Shortcodes</a></li>
                        </ul>
                    </li>
                    <li><Link to="/contact">Get in touch</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header;