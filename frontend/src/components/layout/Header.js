import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import ButtonBox from '../ui/ButtonBox'

const Header = () => {

    const signupHandler = () => {}
    const loginHandler = () => {}
    const logoutHandler = () => {}
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><strong>TODO</strong></Navbar.Brand>
          <Nav className="float-end">
            <ButtonBox onClick={signupHandler} variant="secondary m-2">Signup</ButtonBox>
            <ButtonBox onClick={loginHandler} variant="secondary m-2">Login</ButtonBox>
            <ButtonBox onClick={logoutHandler} variant="secondary m-2">Logout</ButtonBox>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header