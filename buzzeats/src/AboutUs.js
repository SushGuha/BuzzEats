import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import HeroImg from "./HeroImg";
import "./AboutUsStyles.css";
import CardsMembers from "./CardMembers";
import img0 from "../src/gtwebdev01.jpeg"

function AboutUs() {
    const myRef = useRef(null)
    const navigate = useNavigate();
    return <div>
        <HeroImg/>

		<section className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<h3 className="main-heading">About us</h3>
						<div className="underline mx-auto"></div>
					</div>
				</div>
			</div>
		</section>


        <div class="titleAndButtonContainer">
        <h1 className="mainTitle">BuzzEats</h1>
        <button className="homepageButton" onClick={() => navigate("/")}>Restaurants</button>
        <button className="homepageButton" onClick={() => myRef.current.scrollIntoView()}>About Us</button> 
        </div>     
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <p class="text-small1">
                            BuzzEats is a review system built specifically for Georgia Tech dining services.
                            Through BuzzEats, students can view dining hours for Georgia Tech dining as well as
                            ratings and reviews. BuzzEats makes it easier for Georgia Tech students to view
                            dining options and see dining reviews and hours. We aim to make Georgia Tech dining
                            more efficient.
                        </p>
                    </div>
                </div>
            </section>
        
            <div class="flexbox-container0">
                <div><CardsMembers name="Sushant Guha" description="A 3rd year CmpE student at GT passionate about web and software development." imagee="https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png"/></div>
            </div>
            <div class="flexbox-container1">
                <div><CardsMembers name="Mehdi Bencheqroun" description="test" imagee="https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png"/></div>
                <div><CardsMembers name="Asmita Karandikar" description="test" imagee="https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png"/></div>
                <div><CardsMembers name="Joao Pedro Amaral Bonchristiano" description="test" imagee="https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png"/></div>
            </div>

            <div class="flexbox-container2">
                <div><CardsMembers name="Zini Chakraborty" description="test" imagee="https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png"/></div>
                <div><CardsMembers name="Daiwik Pal" description="test" imagee="https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png"/></div>
                <div><CardsMembers name="Rishi Manchanpalli" description="test" imagee="https://brand.gatech.edu/sites/default/files/inline-images/GTVertical_RGB.png"/></div>
            </div>
        </div>
        
}

export default AboutUs;