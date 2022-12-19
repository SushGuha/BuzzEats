import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import postLists from "./posts.json";
import { Form } from "react-router-dom";
import Restaurant from "./Restaurant";
import restaurants from "./restaurants.json";
import dining from "./dining.jpg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import RestaurantPage from "./RestaurantPage";
import { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase-config";

function App() {
  const myRef = useRef(null);
  const navigate = useNavigate();
  const [showCover, setShowCover] = useState(false);
  const [data, setData] = useState({});
  const [nameFilter, setNameFilter] = useState("");
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div style={{ marginBottom: "600px" }}>
      {showCover && (
        <div className={showCover ? "fadeIn" : "fadeOut"}>
          <RestaurantPage
            data={data}
            hideCover={() => setShowCover(false)}
          ></RestaurantPage>
        </div>
      )}
      <div className="darkness"></div>
      <img src={dining} alt="GT Dining" className="diningImage"></img>
      <div className="titleAndButtonContainer">
        <h1 className="mainTitle">BuzzEats</h1>
        <div className="buttonContainer">
          <button
            className="homepageButton"
            onClick={() => myRef.current.scrollIntoView()}
          >
            Restaurants
          </button>
          <button
            className="homepageButton"
            onClick={() => navigate("/aboutus")}
          >
            About Us
          </button>
          <button className="homepageButton" onClick={() => navigate("/map")}>
            Map
          </button>
          <button
            className="homepageButton"
            onClick={() => navigate("/createpost")}
          >
            Create Post
          </button>
        </div>
      </div>
      <h2 style={{ textAlign: "center", marginTop: "30px" }} ref={myRef}>
        Restaurants
      </h2>
      <div style={{ textAlign: "center" }}>
        <input
          className="searchBar"
          onChange={(event) => setNameFilter(event.target.value)}
        ></input>
      </div>
      <div className="restaurantContainer">
        {restaurants.map(
          (restaurant, i) =>
            restaurant.name
              .toLowerCase()
              .includes(nameFilter.toLowerCase()) && (
              <Restaurant
                key={i}
                data={restaurant}
                displayRestaurantPage={() => {
                  setShowCover(true);
                  setData(restaurant);
                }}
              ></Restaurant>
            )
        )}
        <h2 style={{ textAlign: "center", marginTop: "30px" }} ref={myRef}>
          Posts
        </h2>
      </div>
      {postLists.map((post) => {
        return (
          <div className="post">
            {" "}
            <div className="postHeader">
              {" "}
              <div className="title">
                <h3> {post.title} </h3>
              </div>
              <div className="deletePost">
                <button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  {" "}
                  &#128465;{" "}
                </button>
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default App;
