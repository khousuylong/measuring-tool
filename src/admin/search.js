import React from 'react'
import { ApolloProvider } from '@apollo/client';
import styles from '../styles.module.css'
import { Button } from '@material-ui/core'
import { useQuery } from '@apollo/client'
import {MAP_QUERY} from  '../queries/mapQuery'


function Map() {

  const { loading, error, data } = useQuery(MAP_QUERY, {
    variables: { id: "b72c736a-97de-11e9-a3b3-080027899e1a"}
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return(<div>{data.map.name}</div>)
}

const AdminSearch = (props) => {
  return(
    <ApolloProvider client={props.client}>
      <div>
        <h1 className={styles.test}>This is admin</h1>
        <Button color="primary">Hello World</Button>
        <Map />
      </div>
    </ApolloProvider>
  )
}

export default AdminSearch;
