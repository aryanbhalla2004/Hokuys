const Slider = () => {
  return (
    <div class="hero_single version_1">
      <div class="opacity-mask">
        <div class="container">
          <div class="row justify-content-lg-start justify-content-md-center">
            <div class="col-xl-6 col-lg-8">
              <h1>Delivery or Takeaway Food</h1>
              <p>The best restaurants at the best price</p>
              <form method="post" action="grid-listing-filterscol.html">
                  <div class="row no-gutters custom-search-input">
                      <div class="col-lg-10">
                          <div class="form-group">
                              <input class="form-control no_border_r" type="text" id="autocomplete" placeholder="Address, neighborhood..."/>
                          </div>
                      </div>
                      <div class="col-lg-2">
                          <button class="btn_1 gradient" type="submit">Search</button>
                      </div>
                  </div>
                  <div class="search_trends">
                      <h5>Trending:</h5>
                      <ul>
                          <li><a href="#0">Sushi</a></li>
                          <li><a href="#0">Burgher</a></li>
                          <li><a href="#0">Chinese</a></li>
                          <li><a href="#0">Pizza</a></li>
                      </ul>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="wave hero"></div>
    </div>  
  )
}

export default Slider