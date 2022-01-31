import { MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons/lib/icons';
import { logRoles } from '@testing-library/react';
import React from 'react';
import { BiRupee  } from "react-icons/bi";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { LayoutThreeColumns } from 'react-bootstrap-icons';

export default function RightCard(props) {
  const { cartItems, onRemove, onAdd } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemsPrice;
  return (
    <>
      {cartItems?.length === 0 && <div style={{  margin: "50px 50px", position:"fixed"}}>
        <Card>
          <Card.Img variant="top" style={{ float: "right", }} src="./pics/dominozlogo.png" />
          <Card.Body className="blockquote-footer" style={{ paddingTop: "270px" }}>
            <h4>YOUR CART IS EMPTY</h4>
            Please add some items from the menu
          </Card.Body>
        </Card>
      </div>}

      {cartItems.length !== 0 && (
        <div style={{ margin: "50px 50px",position:"fixed" }}>

          <div id="test" style={{ height: "400px", margin: "0px 0px", border: "1px solid #000",  overflowY: "scroll", overflowX: "clip" }}>

            {cartItems.map((item) => (

              <>

                <Row md={2} xs={2}>

                  <Col sm={4} className='mt-3' style={{ textAlign: "center" }}>
                    <img src={item.pic} width="100%" style={{ marginLeft: "10px",borderRadius:"3px" }}
                    />
                  </Col>
                  <Col sm={8} className='mt-3'>
                    {item.title}
                  </Col>

                </Row>

                <Row className='mt-3'>

                  <Col xs={6}>

                    <div className="add-minus-quantity">
                      <PlusSquareOutlined onClick={() => onAdd(item)} style={{ fontSize: '160%' }} />
                      <input type="text" style={{fontWeight:"bold"}} placeholder={item.qty} disabled />
                      <MinusSquareOutlined onClick={() => onRemove(item)} style={{ fontSize: '160%' }} />
                    </div>
                  </Col>

                  <Col xs={6} style={{fontSize:"1.2rem",fontWeight:"bold",textAlign:"center"}}>
                    {item.price}
                  </Col>

                </Row>
                
                <hr style={{margin:"10px 10px"}}/>
              </>

            ))}
          </div>
         


          <div style={{ border: "1px solid #000",margin: "0px 0px", marginTop: "-1px" }}>
            <Row xs={1}>

              <Col xs={6} className='mt-2' style={{  textAlign:"center",fontSize:"1.2rem",fontWeight:"bold"}}>
                SUBTOTAL
              </Col>

              <Col xs={6} className='mt-2' style={{textAlign:"center",fontSize:"1.2rem",fontWeight:"bold"}}>
               <BiRupee style={{ fontSize: '150%'}}/> {itemsPrice}
              </Col>
            </Row>

            <Row className='mx-1'>
              <Button className='mt-3' style={{ color: "white",   marginBottom: "5px", backgroundColor: "rgb(130, 187, 55)" }} variant="light" ><b>CHECKOUT</b></Button>{' '}
            </Row>

          </div>

        </div>
      )}




    </>
  );
}

