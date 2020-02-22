import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Beer.css'

const Beer = ({ beer }) => {
  return (
    <Card>
      <Image src={beer.image_url} wrapped ui size='mini' centered />
      <Card.Content>
        <Card.Header>{beer.name}</Card.Header>
        <Card.Meta>
          <span className='date'>First Brewed {beer.first_brewed}</span>
        </Card.Meta>
        <Card.Description>
          {beer.tagline}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p href='#!'>
          ABV
          <Icon name='chart line' color='yellow' />
          {beer.abv}
        </p>
        {/* key is important to remount the component not just update */}
        <Button as={Link} to={`/beer/${beer.id}`} key={beer.id}>More Info</Button>
      </Card.Content>
    </Card>
  )
}

export default Beer
