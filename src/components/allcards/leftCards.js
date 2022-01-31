import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { BiRupee } from 'react-icons/bi';
import Data from '../../data.json'

export default function LeftCards(props) {
    const {  onAdd, products } = props;
    return (
        <>
            {products.map((product) => {
                return (
                    <div key={product.id} >
                    <div>
                    <div></div>
                    <div style={{backgroundColor:"rgb(255, 255, 255)", borderRadius:"2rem", display:"inline-flex",alignItems:"center",padding:"1rem 2rem",margin:"0px 0px 1rem 1.5rem", marginTop:"15px"}}>
                    <div id='parth' style={{color:"black", fontSize:"larger"}}>{product.head}</div>
                    
                    </div>
                    </div>
                        
                        <Row md={3} xs={2} sm={2} lg={3} >
                            {product.items.map(e => {
                            
                                return (
                                    <>
                                        <Col key={e.id} className='mt-4' style={{ paddingRight: "1px" }}>
                                            <Card  style={{borderBlockEnd:"inherit"}}>
                                                <Card.Img variant="top" src={e.pic} />
                                                <Card.Body style={{height:"10rem", overflow: "hidden"}}>
                                                    <div style={{fontSize:"1.2rem", fontWeight:"600"}}>  <BiRupee style={{ fontSize: '150%'}}/> {e.price}</div>
                                                    <Card.Title style={{ fontWeight: 600, fontSize: "1rem", flexBasis: "auto", justifyContent: "flex-start" }}>{e.title}</Card.Title>
                                                    <Card.Text style={{ display: "-webkit-box", overflow: "hidden", WebkitLineClamp: "3", WebkitBoxOrient: "vertical" }} >
                                                        {e.context}
                                                    </Card.Text>

                                                </Card.Body>

                                            </Card>
                                            <div style={{display: "flex",flexDirection:"row-reverse", position:"relative", border: "1px solid rgba(0,0,0,.125)",borderBlockStart: "inherit",marginTop:"-4px" ,backgroundColor:"white"}}>
                                            <Button className='mb-2' style={{ marginLeft: "auto", marginRight: "5px", width: "fit-content", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 171, 0)", border: "1px solid rgb(0, 171, 0)", padding: "0.433rem" }} onClick={() => onAdd(e)} variant="primary">Add to cart</Button>
                                            </div>
                                        </Col>
                                    </>
                                )
                            })}
                        </Row>

                    </div>
                )
            })}
        </>

    );
}


// <Button className='mb-2' style={{marginLeft:"auto",marginRight:"5px",width:"fit-content",backgroundColor:"rgb(255, 255, 255)",color:"rgb(0, 171, 0)",border:"1px solid rgb(0, 171, 0)",padding:"0.433rem"}} onClick={() => onAdd(e)} variant="primary">Add to cart</Button>


// export default function LeftCards(props) {
//     const { xampp, onAdd, products } = props;
//     return (
//         <>
//             {products.map(product => {
//                 return (
//                     <div key={product.id}>
//                         <h1>{product.head}</h1>
//                         <Row md={3} xs={2} sm={2} lg={3} >
//                             {product.items.map(e => {
                            
//                                 return (
//                                     <>
//                                         <Col key={e.id} className='mt-4' style={{ paddingRight: "1px" }}>
//                                             <Card  style={{borderBlockEnd:"inherit"}}>
//                                                 <Card.Img variant="top" src={e.pic} />
//                                                 <Card.Body style={{height:"10rem", overflow: "hidden"}}>
//                                                     {e.price}
//                                                     <Card.Title style={{ fontWeight: 600, fontSize: "1rem", flexBasis: "auto", justifyContent: "flex-start" }}>{e.title}</Card.Title>
//                                                     <Card.Text style={{ display: "-webkit-box", overflow: "hidden", WebkitLineClamp: "3", WebkitBoxOrient: "vertical" }} >
//                                                         {e.context}
//                                                     </Card.Text>

//                                                 </Card.Body>

//                                             </Card>
//                                             <div style={{display: "flex",flexDirection:"row-reverse", position:"relative", border: "1px solid rgba(0,0,0,.125)","borderBlockStart": "inherit",marginTop:"-4px" }}>
//                                             <Button className='mb-2' style={{ marginLeft: "auto", marginRight: "5px", width: "fit-content", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 171, 0)", border: "1px solid rgb(0, 171, 0)", padding: "0.433rem" }} onClick={() => onAdd(e)} variant="primary">Add to cart</Button>
//                                             </div>
//                                         </Col>
//                                     </>
//                                 )
//                             })}
//                         </Row>

//                     </div>
//                 )
//             })}
//         </>

//     );
// }
