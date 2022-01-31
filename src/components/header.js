import { MinusCircleOutlined, UnorderedListOutlined } from '@ant-design/icons/lib/icons';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg"  variant='dark' style={{color:"rgb(255 255 255)", backgroundColor:"#1859a9" , padding:"0rem 1.5rem",alignItems:"center",display:"flex",justifyContent:"space-between"}}>       
          <Navbar.Brand href="#home"><UnorderedListOutlined style={{ fontSize: '150%' }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <img
                src="https://pizzaonline.dominos.co.in/static/assets/logo_white.svg"
                width="200"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Nav>
            <Nav>
              <Nav.Link href="#deets">  Delivery</Nav.Link>
              <Nav.Link href="#deets" style={{alignItems:"center",}}> <MinusCircleOutlined />  Pick Up/Dine-in</Nav.Link>

            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

