import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './Infos.css';


export default class Mapi extends Component {
  state = {
    lat: 36.807146,
    lng: 10.145529,
    zoom: 13,
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} className="map">
        <TileLayer
          url='https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Placeholder
            </Popup>
        </Marker>
      </Map>
    )

  }

}
