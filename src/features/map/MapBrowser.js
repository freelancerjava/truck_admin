import React, { Component, useRef, useState } from 'react'
import { Map, TileLayer, Marker, Popup, Polygon } from 'react-leaflet'
import { apiUrl, mapPort, mapUrl } from '../../axios'
import { iconPerson } from './Icon'
import uz_coor from './uz_coor'
import {Button} from 'reactstrap'

export default function MapBrowser({ data = [], center = {
  lat: 41.3108238809182,
  lng: 67.28064346313478
}, zoom = 6, setposition }) {
  const mapRef = useRef()

  const [uzborder, setuzborder] = useState(true)
  const toggleBorder = () =>{
    setuzborder(!uzborder)
  }

  let latlngs = uz_coor
  return (
    <div className={"map-container"}>
    <Button className={"border-toggle"} onClick={()=>toggleBorder()}>Граница</Button>
    <Map ref={mapRef} center={center} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // url="http://127.0.0.1:12345/data/v3/{z}/{x}/{y}.pbf"
        url={`${mapUrl}`}
      />
      {uzborder && <Polygon positions={latlngs} color={'lime'} />}
      {data.map((item, key) => {
        return (
          < Marker position={item.position.pos}
            icon={iconPerson}>
            <Popup>
              Подразделение: {item.command.name}<br />
              Старший: {item.head}<br />
              Количество л/с: {item.count_ls}<br />
            </Popup>
          </ Marker>
        )
      })}
    </Map >
    </div>
  )
};

MapBrowser.propTypes = {};
MapBrowser.defaultProps = {};
