import React from 'react'
import { ApolloProvider, useQuery } from '@apollo/client'
import styles from '../styles.module.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {PLUGIN_SETTING_QUERY} from '../queries/pluginQuery'

const ClientSearch = (props) => {
  const position = [51.505, -0.09]
  const RenderMap = () => {
    const { loading, error, data } = useQuery(PLUGIN_SETTING_QUERY, {
      variables: { id: props.settingId}
    })
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    console.log('this is data', data)

    return(
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
    )
  }
  return(
    <ApolloProvider client={props.client}>
      <h3>Client</h3>
      <div style={{width: '600px', height: '200px', position: 'absolute'}}>
        <RenderMap />  
      </div>
    </ApolloProvider>
  )
}

export default ClientSearch
