import React from 'react'
import { Card,Navbar,NavbarBrand, CardFooter } from 'reactstrap'
const footer = () => {
  return (
    <div>
      <Card>
 
  <CardFooter>
  <Navbar
    className="my-2"
    color="success"
    dark
  >
    <NavbarBrand href="/">
      Reactstrap
    </NavbarBrand>
  </Navbar>
  </CardFooter>
</Card>
    </div>
  )
}

export default footer;
