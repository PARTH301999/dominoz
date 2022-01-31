import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Data from "../data.json";
import LeftCards from './allcards/leftCards';
import RightCard from './allcards/rightCard';

export default function AllCards(props) {
    const { cartItems, onAdd, onRemove, products } = props;
    return (
        <>
        
            <Row xs={2} sm={2}>
                <Col xs={12} md={8} style={{padding:"3rem 6rem 3rem 3rem"}} >
                <LeftCards  onAdd={onAdd}  products={products}  />
                </Col>

                <Col xs={6} md={4} style={{justifyContent:"center"}} >
                  <RightCard cartItems={cartItems} onRemove={onRemove} onAdd={onAdd}  />
                </Col>

            </Row>

        
        </>
    );
}

// {cartItems.map((item) => (
//     <>
//         <div id="test" style={{ width: "350px", height: "400px", margin: "0px 0px", border: "1px solid #000", float: "left", overflowY: "scroll", overflowx: "clip" }}>
//         <Row md={2} xs={2}>
//               <Col sm={4} className='mt-3'>
//                   <img src={item.pic} width="100%" 
//                       />
//               </Col>
//               <Col sm={8} className='mt-3'>
//               <h1>{item.title}</h1>              
//               </Col>
//           </Row>
  
//           <Row className='mt-3'>
  
//               <Col xs={6}>
  
//                   <div className="add-minus-quantity">
//                       <PlusSquareOutlined style={{ fontSize: '150%' }} />
//                       <input type="text" placeholder="2" disabled />
//                       <MinusSquareOutlined style={{ fontSize: '150%' }} />
//                   </div>
//               </Col>
//               <Col xs={6}>xs=6</Col>
  
//           </Row>
  
//         </div>                  
//     </>
//   ))}

// <div style={{ border: "1px solid #000", width: "350px", marginLeft: "0px", marginTop: "-1px" }}>
// <Row>
//     <Col className='mt-2 mx-4'>
//         <h6>SUBTOTAL</h6>
//     </Col>

//     <Col className='mt-2 '>
//         $ SUBTOTAL
//     </Col>
// </Row>
// <Row className='mx-1'>
//     <Button className='mt-3' style={{ color: "white", width: "85%", marginLeft: "22px", marginBottom: "5px", backgroundColor: "rgb(130, 187, 55)" }} variant="light" ><b>CHECKOUT</b></Button>{' '}
// </Row>
// </div>