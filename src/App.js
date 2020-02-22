import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import BeerList from './components/BeerList/BeerList'
import Layout from './components/Layout/Layout'
import './App.css'
import BeerDetail from './components/BeerDetail/BeerDetail'
export default class App extends Component {
  render () {
    return (
      // layout use to wrap the app so header will be available throughout the app
      <Layout>
        {/* router for each beer detail page */}
        <Switch>
          <Route exact path='/' component={BeerList} />
          <Route path='/beer/:id' component={BeerDetail} />
        </Switch>
      </Layout>
    )
  }
}
