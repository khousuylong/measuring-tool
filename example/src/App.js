import React from 'react'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { AdminSearch, ClientSearch } from 'search'
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { makeExecutableSchema } from 'graphql-tools';
import {typeDefs} from './schema/schema';
import {resolvers} from './schema/resolvers';
import { SchemaLink } from '@apollo/client/link/schema';
import 'search/dist/index.css'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const styles = theme => ({
  container: {
    margin: 'auto',
    maxWidth: '700px',
    minWidth: '300px',
    marginTop: '20px'
  }
});

const client = new ApolloClient({
  //uri: 'https://48p1r2roz4.sse.codesandbox.io',
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache()
});

const App = props => {
  const {classes} = props;
  return(
    <React.Fragment>
      <div className={classes.container}>
        <AdminSearch client={client} settingId="b67635cc-cb47-4aaf-b37b-42e470acfef3" />
        <Divider style={{marginTop: 20}} />
        <ClientSearch />
      </div>
    </React.Fragment>
  ) 
}
export default withStyles(styles)(App);
