import {React, useState} from 'react'
import './App.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './FoodMap.css';

function FoodMap() {
    
  return (
     <MapContainer center = { [ 33.747, -84.387 ] }
         zoom = { 13 }
         scrollWheelZoom = { true }
     >
     <TileLayer
    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
       url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
     />
</MapContainer>
)
}

export default FoodMap;