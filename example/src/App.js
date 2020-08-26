import React from 'react'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { AdminSearch, ClientSearch } from 'search'
import { makeExecutableSchema } from 'graphql-tools';
import {typeDefs} from './schema/schema';
import {resolvers} from './schema/resolvers';
import { SchemaLink } from '@apollo/client/link/schema';
import 'search/dist/index.css'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const client = new ApolloClient({
  //uri: 'https://48p1r2roz4.sse.codesandbox.io',
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache()
});

const App = () => {
  return(
    <React.Fragment><AdminSearch client={client} /><ClientSearch /></React.Fragment>
  ) 
}

export default App
