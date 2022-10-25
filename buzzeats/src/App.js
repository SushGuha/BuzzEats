import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import Restaurant from "./Restaurant";
import restaurants from "./restaurants.json";
import dining from "./dining.jpg"

function App() {  
  return (
    <div>
      {/* <NavBar /> */}
      <div className="darkness"></div>

      <img src={dining} alt="GT Dining" className="diningImage"></img>
      <div class="titleAndButtonContainer">
      <h1 className="mainTitle">BuzzEats</h1>
      <div class="buttonContainer">
      <button class="homepageButton">Restaurants</button>
      <button class="homepageButton">About Us</button>  
      </div>     
      </div>

      <h2 style={{textAlign:"center", marginTop:"30px"}}>Restaurants</h2>
      <div className="restaurantContainer">
      {restaurants.map((restaurant, i) => (
        <Restaurant key={i} data={restaurant}></Restaurant>
      ))}
      </div>
    </div>
  );
}

export default App;
