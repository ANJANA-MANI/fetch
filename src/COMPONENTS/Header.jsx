import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
function Header() {
  return (
    <> <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
        
<i class="fa-solid fa-cart-shopping fa-beat" style={{color:'#d96245'}}></i>
        Shopping Cart
      </Navbar.Brand>
    </Container>
  </Navbar></>




         
  )
}

export default Header