import React from 'react'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { AdminSearch, ClientSearch } from 'search'
import 'search/dist/index.css'

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

const App = () => {
  return(
    <ApolloProvider client={client}>
      <React.Fragment><AdminSearch /><ClientSearch /></React.Fragment>
    </ApolloProvider>
  ) 
}

export default App
