import gql from 'graphql-tag';

const DATASETCOUNT_QUERY = gql`
  {
    datasets {
      name
    }
  }
`;

const DATASETS_QUERY = gql`
  query Datasets($limit: Float, $offset: Float) {
    paginateDatasets(limit: $limit, offset: $offset) {
      description
      id
      metaData
      name
      type
    }
  }
`; 

const SEARCH_DATASETS_QUERY = gql`
  query SearchDatasets($text: String) {
    searchDatasets(text: $text) {
      description
      id
      metaData
      name
      type
    }
  }
`; 

const UPLOAD_DATASET_MUTATION = gql`
  mutation($type: String, $files: [Upload]){
    upload(type: $type, files: $files){
      description
      id
      metaData
      name
      type
    }
  }
`; 

export {DATASETCOUNT_QUERY, DATASETS_QUERY, SEARCH_DATASETS_QUERY, UPLOAD_DATASET_MUTATION};
