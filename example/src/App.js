import React from 'react'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { AdminSearch, ClientSearch } from 'search'
import 'search/dist/index.css'
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;


const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

const App = () => {
  return(
    <ApolloProvider client={client}>
      <ExchangeRates />
      <React.Fragment><AdminSearch /><ClientSearch /></React.Fragment>
    </ApolloProvider>
  ) 
}

export default App
