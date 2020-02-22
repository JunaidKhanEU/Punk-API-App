import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Image, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './BeerDetail.css'

// provide details for each beer
const BeerDetail = ({ match }) => {
  const { id } = match.params
  //  state for beer
  const [beer, setBeer] = useState(null)
  // this hook will run only when id changes
  useEffect(() => {
    const getBeer = async () => {
      const beerData = await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
      setBeer(beerData.data[0])
    }
    getBeer()
  }, [id])

  return (
    <>
      {
        beer && (
          <Card className='detail'>
            <Image src={beer.image_url} wrapped ui centered />
            <Card.Content>
              <Card.Header>{beer.name}</Card.Header>
              <Card.Meta>
                <span className='date'>First Brewed {beer.first_brewed}</span>
              </Card.Meta>
              <Card.Description>
                {beer.tagline}
              </Card.Description>
              <Card.Description>
                {beer.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p href='#!'>
                ABV
                <Icon name='chart line' color='yellow' />
                {beer.abv}
              </p>
              {/* key is important to remount the component not just update */}
              <Button as={Link} to='/' key={beer.id}>Go Back</Button>
            </Card.Content>
          </Card>
        )
      }
    </>

  )
}

export default BeerDetail
