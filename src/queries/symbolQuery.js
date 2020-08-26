import gql from 'graphql-tag';

const SYMBOl_QUERY = gql`
  query SymbolQuery($id: ID!){
    symbol(id: $id){
      id
      xml
    }
  }
`;

const CUSTOMICONS_QUERY = gql`
  query CustomIconQuery{
    customIcons{
      url  
    }
  }
`

const SAVED_SYMBOLS_QUERY = gql`
  query savedSymbolsQuery{
    savedSymbols{
      id
      symbol  
    }
  }
`

const UPLOAD_ICON_MUTATION = gql`
  mutation($type: String, $files: [Upload]){
    uploadIcon(files: $files){
      url
    }
  }
`;

const UPDATE_SYMBOL_MUTATION = gql`
  mutation($id: ID!, $xml: String){
    updateSymbol(id: $id, xml: $xml){
      id
    }
  }
`

const ADD_TO_SAVED_SYMBOL = gql`
  mutation($input: SavedSymbolInput){
    addTosavedSymbol(input: $input){
      symbol
    }
  }
`

export {SYMBOl_QUERY, CUSTOMICONS_QUERY, UPLOAD_ICON_MUTATION, UPDATE_SYMBOL_MUTATION, ADD_TO_SAVED_SYMBOL, SAVED_SYMBOLS_QUERY};
