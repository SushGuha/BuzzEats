
import "./Restaurant.css"
import Stars from "./Stars";
function Restaurant(props) {

    const {data, displayRestaurantPage} = props;

    return (
        <div className="restaurant" onClick={() => displayRestaurantPage(data)}>
            <div>
            <img src={data.link} alt={data.name} className="restaurantImage"></img>
            
            </div>
              <div style={{textAlign:"center"}}>
              
              <div className="open">OPEN <p className="untilText">until 17:00</p></div>
              </div>
              <div>
              <h3 className="restaurantName">{data.name}</h3>
              </div>
              <Stars rating={data.rating}></Stars>
          </div>
          
    )
}

export default Restaurant;