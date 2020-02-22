import React, { Component } from 'react'
import Beer from '../Beer/Beer'
import axios from 'axios'
import './BeerList.css'
import { Grid, Container, GridColumn, GridRow, Button } from 'semantic-ui-react'

export default class BeerList extends Component {
  // use class component , this holds all beers list
  constructor (props) {
    super(props)
    this.state = {
      beers: []
    }
  }

// use on mounting lifecycle todo async call use axios as i like it 
  componentDidMount () {
    const getBeers = async () => {
      // getting only 8 results per page, so later if needed i can do pagination and make ui clean
      const beersData = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=8')
      console.log(beersData.data)
      this.setState({
        beers: beersData.data
      })
    }
    getBeers()
  }

  sortByStrenth = () => {
    this.setState((prevState)=>{
      return{
        beer: this.state.beers.sort((a,b)=>a.abv-b.abv) // ascending order for abv which reps strength
      }
    })
  }
 

  render () {
    const { beers } = this.state
    return (
      <Container>
        <Button onClick={this.sortByStrenth}>sort by Strenth</Button>
        <Grid>
          <GridRow>
            {/* check if beers exist only then show the beers */}
            {
              beers.length > 0 && (beers.map(beer => (
                <GridColumn width='4' key={beer.id}>
                  <Beer beer={beer} />
                </GridColumn>
              ))

              )
            }

          </GridRow>

        </Grid>
      </Container>
    )
  }
}
