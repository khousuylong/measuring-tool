import { gql } from '@apollo/client'

const MAP_QUERY = gql`
  query MapQuery($id: ID!) {
    map(id: $id) {
      name
      description
      center {
        type
        coordinates
      }
      zoom
      basemap
      url
      copyright
      thumbnail
    }
  }
`;

const MAP_QUERY_LAYERGROUPS = gql`
  query MapQuery($id: ID!) {
    map(id: $id) {
      layerGroupIds
      layerGroups{
        id
        visible
        name
        tileType
        url
        subdomains
        mapId
      }
    }
  }
`;

const EDIT_MAP_MUTATION = gql`
  mutation($input: MapInput){
    editMap(input: $input){
      id
    }
  }
`

export {MAP_QUERY, MAP_QUERY_LAYERGROUPS, EDIT_MAP_MUTATION} 
