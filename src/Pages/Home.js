import Slider from "../Components/HomePage-Slider";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <main>
      <Helmet link={[{rel: "stylesheet", href: 'css/home.css'}]}/>
      <Slider/>
      <div class="container margin_30_60">
      <div class="main_title center">
        <span><em></em></span>
        <h2>Popular Categories</h2>
        <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
      </div>
      <div class="owl-carousel owl-theme categories_carousel">
        {[1,2,3,4,5,6].map(item => (
          <SinglePopularCategory key={item}/>
        ))}
      </div>
      </div>
      <div class="bg_gray">
        <div class="container margin_60_40">
          <div class="main_title">
            <span><em></em></span>
            <h2>Top Rated Restaurants</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            <a href="#0">View All &rarr;</a>
          </div>
          <div class="row add_bottom_25">
            <div class="col-lg-6">
              <div class="list_home">
                <ul>
                  <li>
                    <a href="detail-restaurant.html">
                      <figure>
                        <img src="img/location_list_placeholder.png" data-src="img/location_list_1.jpg" alt="" class="lazy" width="350" height="233"/>
                      </figure>
                      <div class="score"><strong>9.5</strong></div>
                      <em>Italian</em>
                      <h3>La Monnalisa</h3>
                      <small>8 Patriot Square E2 9NF</small>
                      <ul>
                        <li><span class="ribbon off">-30%</span></li>
                        <li>Average price $35</li>
                      </ul>
                    </a>
                  </li>        
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="list_home">
                <ul>
                    <li>
                        <a href="detail-restaurant.html">
                            <figure>
                                <img src="img/location_list_placeholder.png" data-src="img/location_list_4.jpg" alt="" class="lazy" width="350" height="233"/>
                            </figure>
                            <div class="score"><strong>9.5</strong></div>
                            <em>Vegetarian</em>
                            <h3>Mr. Pepper</h3>
                            <small>27 Old Gloucester St, 4563</small>
                            <ul>
                                <li><span class="ribbon off">-30%</span></li>
                                <li>Average price $20</li>
                            </ul>
                        </a>
                    </li>          
                  </ul>
                </div>
              </div>
            </div>
            <div class="banner lazy" data-bg="url(img/banner_bg_desktop.jpg)">
                <div class="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)">
                    <div>
                        <small>FooYes Delivery</small>
                        <h3>We Deliver to your Office</h3>
                        <p>Enjoy a tasty food in minutes!</p>
                        <a href="grid-listing-filterscol.html" class="btn_1 gradient">Start Now!</a>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div class="shape_element_2">
            <div class="container margin_60_0">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="box_how">
                                    <figure><img src="img/lazy-placeholder-100-100-white.png" data-src="img/how_1.svg" alt="" width="150" height="167" class="lazy"/></figure>
                                    <h3>Easly Order</h3>
                                    <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin.</p>
                                </div>
                                <div class="box_how">
                                    <figure><img src="img/lazy-placeholder-100-100-white.png" data-src="img/how_2.svg" alt="" width="130" height="145" class="lazy"/></figure>
                                    <h3>Quick Delivery</h3>
                                    <p>Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 align-self-center">
                                <div class="box_how">
                                    <figure><img src="img/lazy-placeholder-100-100-white.png" data-src="img/how_3.svg" alt="" width="150" height="132" class="lazy"/></figure>
                                    <h3>Enjoy Food</h3>
                                    <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros.</p>
                                </div>
                            </div>
                        </div>
                        <p class="text-center mt-3 d-block d-lg-none"><a href="#0" class="btn_1 medium gradient pulse_bt mt-2">Register Now!</a></p>
                    </div>
                    <div class="col-lg-5 offset-lg-1 align-self-center">
                        <div class="intro_txt">
                            <div class="main_title">
                                <span><em></em></span>
                                <h2>Start Ordering Now</h2>
                            </div>
                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur deserunt.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p><a href="#0" class="btn_1 medium gradient pulse_bt mt-2">Register</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Helmet script={[{src: 'js/common_scripts.min.js'}]}/>
      <Helmet script={[{src: 'js/common_func.js'}]}/>
      <Helmet script={[{src: 'assets/validate.js'}]}/>
    </main>
  )
}

export default Home;