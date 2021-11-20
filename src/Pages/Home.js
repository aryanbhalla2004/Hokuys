import Slider from "../Components/HomePage-Slider";
import { Helmet } from "react-helmet";
import SinglePopularCategory from "../Components/Single-Popular-Category";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";

const Home = (props) => {

  useEffect(() => {
    props.hel();
  }, [])

  return (
    <main>
      <Helmet link={[{rel: "stylesheet", href: 'css/home.css'}]}/>
      <Slider/>
      <div className="container margin_30_60">
        <div className="main_title center">
          <span><em></em></span>
          <h2>Popular Categories</h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
        </div>
        <div className="owl-carousel owl-theme categories_carousel">
          {[1,2,3,4,5,6].map(item => (
            <SinglePopularCategory key={item}/>
          ))}
        </div>
      </div>
      <div className="bg_gray">
        <div className="container margin_60_40">
          <div className="main_title">
            <span><em></em></span>
            <h2>Top Rated Restaurants</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            <Link>View All &rarr;</Link>
          </div>
          <div className="row add_bottom_25">
            {[1,2,3,4,5,6].map(item => (
                <div className="col-lg-6" key={item}>
                  <div className="list_home">
                    <ul>
                      <li>
                        <Link to="/selection">
                          <figure>
                            <img src="img/location_list_placeholder.png" data-src="img/location_list_1.jpg" alt="" className="lazy" width="350" height="233"/>
                          </figure>
                          <div className="score"><strong>9.5</strong></div>
                          <em>Italian</em>
                          <h3>La Monnalisa</h3>
                          <small>8 Patriot Square E2 9NF</small>
                          <ul>
                            <li><span className="ribbon off">-30%</span></li>
                            <li>Average price $35</li>
                          </ul>
                        </Link>
                      </li>        
                    </ul>
                  </div>
                </div>
            ))}
            <div className="banner lazy" data-bg="url(img/banner_bg_desktop.jpg)">
              <div className="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)">
                <div>
                    <small>FooYes Delivery</small>
                    <h3>We Deliver to your Office</h3>
                    <p>Enjoy a tasty food in minutes!</p>
                    <Link className="btn_1 gradient">Start Now!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape_element_2">
        <div className="container margin_60_0">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="box_how">
                    <figure><img src="img/lazy-placeholder-100-100-white.png" data-src="img/how_1.svg" alt="" width="150" height="167" className="lazy"/></figure>
                    <h3>Easly Order</h3>
                    <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin.</p>
                  </div>
                  <div className="box_how">
                    <figure><img src="img/lazy-placeholder-100-100-white.png" data-src="img/how_2.svg" alt="" width="130" height="145" className="lazy"/></figure>
                    <h3>Quick Delivery</h3>
                    <p>Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum.</p>
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="box_how">
                    <figure><img src="img/lazy-placeholder-100-100-white.png" data-src="img/how_3.svg" alt="" width="150" height="132" className="lazy"/></figure>
                    <h3>Enjoy Food</h3>
                    <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros.</p>
                  </div>
                </div>
              </div>
              <p className="text-center mt-3 d-block d-lg-none"><Link to="/register" className="btn_1 medium gradient pulse_bt mt-2">Register Now!</Link></p>
            </div>
            <div className="col-lg-5 offset-lg-1 align-self-center">
              <div className="intro_txt">
                <div className="main_title">
                  <span><em></em></span>
                  <h2>Start Ordering Now</h2>
                </div>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur deserunt.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p><Link to="/order-page" className="btn_1 medium gradient pulse_bt mt-2">Register</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;