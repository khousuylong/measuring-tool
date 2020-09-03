import React from 'react'
import { ApolloProvider, useQuery } from '@apollo/client'
import styles from '../styles.module.css'
import {PLUGIN_SETTING_QUERY} from '../queries/pluginQuery'
import L from 'leaflet'

const ClientSearch = (props) => {

  const LoadSetting = () => {
    const {data} = useQuery(PLUGIN_SETTING_QUERY, {
      variables: { id: props.settingId}
    })

    console.log('this is data', data)

    return(
      <div>this is setting</div>
    )
  }

  return(
    <ApolloProvider client={props.client}>
      <LoadSetting />  
    </ApolloProvider>
  )
}

export default ClientSearch
