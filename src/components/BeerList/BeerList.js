import React, { Component } from 'react'
import Beer from '../Beer/Beer'

export default class BeerList extends Component {
  render () {
    return (
      <div>
        Beer List here ....
        <Beer />
        <Beer />
        <Beer />
      </div>
    )
  }
}
