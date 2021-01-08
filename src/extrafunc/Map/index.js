import React, {useState, useEffect, useRef} from 'react';
// import mapStyle from './map.json';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import { CustomMarker } from './elements';
import { randomGeo } from './test';


const MapWrapper = withScriptjs(withGoogleMap(props => {
   const mapRef = useRef(null);
   useEffect(() => {
      let mapRender = +localStorage.getItem('mapRender') || 0;
      if(mapRender === 0) {
         let map = mapRef.current;
         const bounds = new window.google.maps.LatLngBounds();
         if(props.markers.length > 1) {
            props.markers.forEach(place => {
               bounds.extend(place.position);
            });
            map.fitBounds(bounds);
         } else {
            const defaultCenter = { lat: 40.748817, lng: -73.985428 }
            const center = props.markers[0] ? props.markers[0].position : defaultCenter;
            for(let i=0; i<100; i++) {
               bounds.extend(randomGeo(center, 500));
            }
            map.fitBounds(bounds);
         }
         localStorage.setItem('mapRender', mapRender+1);
      }
   }, [props.markers]);

   return (
      <GoogleMap {...props}
         ref={mapRef}
         defaultZoom={5}
         defaultCenter={{ lat: 40.748817, lng: -73.985428 }}>
         {props.markers.length > 0 && props.markers.map((mar, i) => (
            <CustomMarker 
               index={i}
               key={i}
               age={mar.age}
               speed={mar.speed}
               iconDeg={mar.iconDeg} 
               position={mar.position}
               label={mar.label} />
         )) }
      </GoogleMap>
   )
}));

export const Map = (props) => {
   return (
      <MapWrapper
         markers={props.markers}
         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1B5r4XRhhqx05ZTcVmqOPoM-MyLMUu2Q"
         loadingElement={<div style={{ height: `100%` }} />}
         containerElement={
            <div
               style={{ height: props.height || `600px` }}
               className="map-canvas"
               id="map-canvas"
            />
         }
         mapElement={
            <div id="Map" style={{ height: `100%`, borderRadius: "inherit" }} />
         }
      />
   )
}
