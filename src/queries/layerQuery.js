import gql from 'graphql-tag';

const layerProperties = {
  fragments: {
    layer: gql`
      fragment layerProperties on Layer {
        id
        name
        inLegend
        minZoom
        maxZoom
        description
        type
        layerGroupId
        datasetId
        legend
        symbolId
        titleProperty
        propertyFormats 
        htmlTemplate
        template
        columns
      }
    `
  }
};

const ADD_LAYER_MUTATION = gql`
  mutation($input: DatasetInput){
    addLayer(input: $input){
      ...layerProperties
    }
  }
  ${layerProperties.fragments.layer}
`;

const UPDATE_LAYER_MUTATION = gql`
  mutation($input: LayerInput){
    updateLayer(input: $input){
      ...layerProperties
    }
  }
  ${layerProperties.fragments.layer}
`;

const DELETE_LAYER_MUTATION = gql`
  mutation($id: ID!){
    deleteLayer(id: $id){
      id
    }
  }
`;

const LAYER_QUERY = gql`
  query LayerQuery($id: ID!){
    layer(id: $id){
      ...layerProperties
    }
  }
  ${layerProperties.fragments.layer}
`;

const COLUMN_COUNT_QUERY = gql`
  query ColumnCountQuery($layerId: ID!, $column: String){
    columnValues(layerId: $layerId, column: $column){
      value
      count
    }
  }
`

const CLASSIFICATION_QUERY = gql`
  query ColumnCountQuery($layerId: ID!, $column: String, $classNumber: Int){
    classificationValues(layerId: $layerId, column: $column, classNumber: $classNumber){
      column
      values
    }
  }
`

export {ADD_LAYER_MUTATION, LAYER_QUERY, UPDATE_LAYER_MUTATION, DELETE_LAYER_MUTATION, COLUMN_COUNT_QUERY, CLASSIFICATION_QUERY};
