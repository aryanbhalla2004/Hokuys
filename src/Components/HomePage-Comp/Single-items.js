import {Link} from "react-router-dom";
const SingleFoodItem = (props) => {
  return (
    <div className="col-lg-6">
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
  )
}

export default SingleFoodItem;