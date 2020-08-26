import gql from 'graphql-tag';

const ADD_LAYERGROUP_MUTATION = gql`
  mutation($mapId: ID!){
    addLayerGroup(mapId: $mapId){
      id
    }
  }
` 
const DELETE_LAYERGROUP_MUTATION = gql`
  mutation($id: ID!){
    deleteLayerGroup(id: $id){
      id
    }
  }
`

const UPDATE_LAYERGROUP_MUTATION = gql`
  mutation($input: LayerGroupInput!){
    editLayerGroup(input: $input){
      id
    }
  }
`

const MOVE_LAYERGROUP_MUTATION = gql`
  mutation($id: ID!, $index: Int ){
    moveLayergroup(id: $id, index: $index){
      id
    }
  }
`;

const REORDER_LAYER_MUTATION = gql`
  mutation($input: ReorderLayerInput!){
    reorderLayer(input: $input){
      id
    }
  }
`;

const REPARENT_LAYER_MUTATION = gql`
  mutation($input: ReparentLayerInput!){
    reparentLayer(input: $input){
      id
    }
  }
`;

const LAYERGROUP_QUERY = gql`
  query LayerGroupQuery($id: ID!) {
    layerGroup(id: $id) {
      id
      layers{
        id
        name
        description
        type
        layerGroupId
        datasetId
        legend
        titleProperty
        propertyFormats 
        htmlTemplate
        template
      }
    }
  }
`;
export {ADD_LAYERGROUP_MUTATION, DELETE_LAYERGROUP_MUTATION, UPDATE_LAYERGROUP_MUTATION, MOVE_LAYERGROUP_MUTATION, LAYERGROUP_QUERY, REORDER_LAYER_MUTATION, REPARENT_LAYER_MUTATION}; 
