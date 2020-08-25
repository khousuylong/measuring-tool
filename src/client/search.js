import React from 'react'
import styles from '../styles.module.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const ClientSearch = ({ text }) => {
  const position = [51.505, -0.09]
  return(
    <div>
      <h1 className={styles.test}>This is client</h1>
      <div style={{width: '600px', height: '200px', position: 'absolute'}}>
        <Map center={position} zoom={13}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        </Map>
      </div>
    </div>
  )
}

export default ClientSearch;
