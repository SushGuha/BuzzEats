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
import RestaurantPage from "./RestaurantPage";
import { useState } from "react";

function App() {  
  const myRef = useRef(null)
  const navigate = useNavigate();
  const [showCover, setShowCover] = useState(false);
  const [data, setData] = useState({});
  const [nameFilter, setNameFilter] = useState('');
  return (
    <div style={{marginBottom: "600px"}}>
      {showCover && (
        <div className={showCover?'fadeIn':'fadeOut'} >
      <RestaurantPage data={data} hideCover={() => setShowCover(false)}></RestaurantPage></div>)}
      
      <div className="darkness"></div>
      
      <img src={dining} alt="GT Dining" className="diningImage"></img>
      <div className="titleAndButtonContainer">
      <h1 className="mainTitle">BuzzEats</h1>
      <div className="buttonContainer">
      
      <button className="homepageButton" onClick={() => myRef.current.scrollIntoView()}>Restaurants</button>
      <button className="homepageButton" onClick={() => navigate("/aboutus")}>About Us</button>  
      </div>
      </div>

      <h2 style={{textAlign:"center", marginTop:"30px"}} ref={myRef}>Restaurants</h2>
      <div style={{textAlign:"center"}}><input className="searchBar" onChange={(event) => setNameFilter(event.target.value)}></input></div>
      <div className="restaurantContainer">
      {restaurants.map((restaurant, i) => (
        restaurant.name.toLowerCase().includes(nameFilter.toLowerCase()) && (
        <Restaurant key={i} data={restaurant} displayRestaurantPage={() => {setShowCover(true); setData(restaurant)}}></Restaurant>
        )
        ))}
      </div>
    </div>
  );
}

export default App;
