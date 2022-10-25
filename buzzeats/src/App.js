import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import { Form } from "react-router-dom";
import Restaurant from "./Restaurant";
import restaurants from "./restaurants.json";
import dining from "./dining.jpg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function App() {  
  const myRef = useRef(null)
  const navigate = useNavigate();
  return (
    <div>
      {/* <NavBar /> */}
      <div className="darkness"></div>

      <img src={dining} alt="GT Dining" className="diningImage"></img>
      <div class="titleAndButtonContainer">
      <h1 className="mainTitle">BuzzEats</h1>
      <div className="buttonContainer">
      <input className="searchBar"></input>
      <button className="homepageButton" onClick={() => myRef.current.scrollIntoView()}>Restaurants</button>
      <button className="homepageButton" onClick={() => navigate("/aboutus")}>About Us</button>  
      </div>     
      </div>

      <h2 style={{textAlign:"center", marginTop:"30px"}} ref={myRef}>Restaurants</h2>
      <div className="restaurantContainer">
      {restaurants.map((restaurant, i) => (
        <Restaurant key={i} data={restaurant}></Restaurant>
      ))}
      </div>
    </div>
  );
}

export default App;
