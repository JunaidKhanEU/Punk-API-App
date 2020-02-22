import React, { Component } from 'react'
import BeerList from './components/BeerList/BeerList'
import Layout from './components/Layout/Layout'
export default class App extends Component {
  render () {
    return (
      <Layout>

        <BeerList />
      </Layout>
    )
  }
}
