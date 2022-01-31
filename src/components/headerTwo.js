import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';



export default function HeaderTwo() {
  const mystyle = {
    color: "rgb(180, 191, 196)",
  };
 
  return (

    <div>
   
  <Navbar expand="lg" variant="light" bg="light" >
    <Container >
      <Navbar.Brand href="#" style={mystyle} >BESTSELLERS</Navbar.Brand>
       <Navbar.Brand href="#" style={mystyle}>VEG PIZZA</Navbar.Brand>
        <Navbar.Brand href="#" style={mystyle}>MEALS & COMBOS</Navbar.Brand>
         <Navbar.Brand href="#" style={mystyle}>CHICKEN lOVERS PIZZA</Navbar.Brand>
          <Navbar.Brand href="#" style={mystyle}>NON VEG PIZZA</Navbar.Brand>
    </Container>
  </Navbar>


      

      
    </div>

  );
}

// <Nav.Link  >BESTSELLERS</Nav.Link>
// <Nav.Link >VEG PIZZA</Nav.Link>
// <Nav.Link  >MEALS & COMBOS</Nav.Link>
// <Nav.Link  >MEALS & COMBOS</Nav.Link>

// export default function Secondnavbar(props) {
//   const {heads,filterItems} = props;
//   return (

//     <div>

//       <Navbar bg="light" variant="light" style={{ height: "3rem", paddingLeft: "5rem", justifyContent: "center" }}>
//         <Nav className="ml-auto" >
//           <Nav.Link href="#home" >EVERYDAY VALUE</Nav.Link>
//         </Nav>
//       </Navbar>

      
//     </div>

//   );
// }


// <Navbar bg="light" variant="light" style={{ height: "3rem", paddingLeft: "5rem", justifyContent: "center" }}>
//         <Nav className=''>
//           <Link to='parth' smooth={true}  >BEST SELLERS </Link>
//           <Link to='parth' smooth={true}  > VEG PIZZA</Link>
//           <Link to='parth' smooth={true}  > NON-VEG PIZZA</Link>
//           <Link to='foo' smooth={true}  > MEALS & COMBOS</Link>
//           <Link to='foo' smooth={true}  > CHICKEN LOVERS PIZZA</Link>
//         </Nav>
//       </Navbar>