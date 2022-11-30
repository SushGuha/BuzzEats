import React from 'react'
import dining from "../src/dining.jpg"


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={dining} alt="GT Dining" className="diningImage"></img>
        </div>
    </div>
  );
};

export default HeroImg;