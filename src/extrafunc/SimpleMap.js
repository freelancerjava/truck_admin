// @flow

import React, { Component, useRef, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { apiUrl } from '../axios'

const SimpleMap = ({ position, zoom, setposition }) => {
  const mapRef = useRef()
  return (
    <Map ref={mapRef} center={position} zoom={zoom} onClick={(e) => {
      setposition(e.latlng)
    }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // url="http://127.0.0.1:12345/data/v3/{z}/{x}/{y}.pbf"
        url={`${apiUrl}:8080/styles/klokantech-basic/{z}/{x}/{y}.png`}
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
      </Marker>
    </Map >
  )
}

export default SimpleMap