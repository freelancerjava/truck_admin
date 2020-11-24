// @flow

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
// import { Polyline } from 'leaflet'

type State = {
    lat: number,
    lng: number,
    zoom: number,
}

export default class SimpleExample extends Component<{}, State> {
    state = {
        position: {
            lat: 41.3108238809182,
            lng: 69.28064346313478
        },
        zoom: 13,
        positions: [
            [41.31, 69.28],
            [41.35, 69.30],
            [41.31, 69.28],
            [41.40, 69.35],
        ]
    }



    render() {
        const position = [this.state.position.lat, this.state.position.lng]
        return (
            <Map center={this.state.position} zoom={this.state.zoom} onClick={(e) => {
                this.setState({ position: e.latlng })
            }}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    // url="http://127.0.0.1:12345/data/v3/{z}/{x}/{y}.pbf"
                    url="http://127.0.0.1:12345/styles/klokantech-basic/{z}/{x}/{y}.png"
                />
                <Polyline color="lime" positions={this.state.positions} />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                {this.state.positions.map((item) => {
                    return (
                        <Marker position={{ lat: item[0], lng: item[1] }} >
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    )
                })}
            </Map >
        )
    }
}