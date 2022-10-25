import "./Restaurant.css"
import Star from "./star.svg"

function Restaurant({data}) {
    let stars = [];
    for (let i = 0; i < parseInt(data.rating); i++) {
        stars.push(<img src={Star} alt="Star" className="star" key={i}></img>);
    }
    stars.push(<b>5.0</b>)
    return (
        <div className="restaurant">
            <div>
            <img src={data.link} alt={data.name} className="restaurantImage"></img>
            
            </div>
              <div style={{textAlign:"center"}}>
              
              <div class="open">OPEN <p className="untilText">until 17:00</p></div>
              </div>
              <div>
              <h3 className="restaurantName">{data.name}</h3>
              </div>
              <div style={{margin: "auto", verticalAlign:"middle"}}>{stars}</div>
          </div>
          
    )
}

export default Restaurant;