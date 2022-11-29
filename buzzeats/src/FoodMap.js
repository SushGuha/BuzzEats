import { useEffect, useState } from "react";
import "./App.css";
import L from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./FoodMap.css";
import { db } from "./firebase-config";
import restaurants from "./restaurants.json";
const api_key = `6d211782f0ac84f1355cf494088c24247854e663`;
const markerIcon = new L.Icon({
  iconUrl: require("./marker.png"),
  iconSize: [40, 45],
  // iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -20],
});
const requestOptions = {
  method: "GET",
  redirect: "follow",
};

function FoodMap() {
  const [gCodes, setGCodes] = useState(new Map([]));

  for (let i = 0; i < restaurants.length; i++) {
    let q = `https://api.geocodify.com/v2/geocode?api_key=${api_key}&q=${restaurants[i].location}`;
    // console.log("Query: ", q);
    const id = restaurants[i].hours;
    fetch(q, requestOptions)
      .then((out) => out.json())
      .then((data) => {
        if (!data.response.features[0]) {
          return;
        }
        let coords = data.response.features[0].geometry.coordinates;
        // console.log("here ", q, [coords[1], coords[0]]);
        let coords2 = [coords[1], coords[0]]; // lat, lng
        setGCodes(new Map(gCodes.set(id, coords2)));
      });
  }

  // useEffect(() => {
  //   if (!restaurants) {
  //     return;
  //   }

  // }, [restaurants]);

  console.log(gCodes);

  return (
    <div>
      <MapContainer
        center={[33.77583, -84.39725]}
        zoom={16}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {restaurants &&
          gCodes &&
          restaurants.map((ev, idx) => {
            const c = gCodes.get(ev.hours);
            if (!c) {
              return <span key={idx}></span>;
            }
            return (
              <Marker key={idx} position={c} icon={markerIcon}>
                <Popup
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={idx}
                >
                  <h2>{ev.name}</h2>
                  <p>Rating: {ev.rating}</p>
                  <p>Cuisine: {ev.cuisine}</p>
                  <p>Description: {ev.descr}</p>
                  <p>Location: {ev.location}</p>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </div>
  );
}

export default FoodMap;
