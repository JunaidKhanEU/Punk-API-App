import React from 'react'
import Navbar from '../Navbar.js/Navbar.'
import { Header, Icon } from 'semantic-ui-react'
import './Header.css'
const HeaderComponent = () => {
  return (
    <section className='header'>
      <Header as='h2'>
        <Icon name='beer' color='yellow' size='massive' />
        <Navbar />
      </Header>
    </section>
  )
}

export default HeaderComponent
