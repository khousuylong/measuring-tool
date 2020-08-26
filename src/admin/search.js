import React from 'react'
import styles from '../styles.module.css'
import { Button } from '@material-ui/core'
import { useQuery, gql } from '@apollo/client'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        <h1>{currency}</h1>: {rate}
      </p>
    </div>
  ))
}

const AdminSearch = ({ text }) => {
  return(
    <div>
      <h1 className={styles.test}>This is admin</h1>
      <Button color="primary">Hello World</Button>
      <ExchangeRates />
    </div>
  )
}

export default AdminSearch;
