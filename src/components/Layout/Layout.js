import React from 'react'
import HeaderComponent from './Header/HeaderComponent'
const Layout = ({ children }) => {
  return (
    <main>
      <HeaderComponent />
      {children}
    </main>
  )
}

export default Layout
