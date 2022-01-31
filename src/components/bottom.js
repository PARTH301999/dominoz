import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

export default function Bottom() {
    return <>
        <div className="mt-4" style={{ backgroundColor: "rgb(34, 46, 58"}} id='foo'>
            <Row className="mt-4" style={{ backgroundColor: "rgb(34, 46, 58)", padding: "3rem 3rem 1rem"  }}>
                <Col xs={4}>
                    <div className="mt-4">
                        <img src="https://pizzaonline.dominos.co.in/static/assets/logo_white.svg" style={{}} />
                        <Row className="mt-4" md={3} lg={4} xs={2} >
                            <Col style={{ color: "rgb(131, 154, 177)" }}>
                                Disclaimer
                            </Col>

                            <Col style={{ color: "rgb(131, 154, 177)" }}>
                                Disclaimer
                            </Col>

                            <Col style={{ color: "rgb(131, 154, 177)" }}>
                                Disclaimer
                            </Col>

                            <Col style={{ color: "rgb(131, 154, 177)" }}>
                                Disclaimer
                            </Col>

                        </Row>
                    </div>
                </Col>

                <Col xs={4}></Col>

                <Col className="mt-4" xs={4}>
                    <Row style={{ color: "rgb(131, 154, 177)",  fontSize: "1.25rem" }}>
                        DOWNLOAD APP
                    </Row>

                    <Row className="mt-4" style={{ color: "white",  }}>
                        <Col xs={6}  >
                        <img src="https://pizzaonline.dominos.co.in/static/assets/play_store.png" width="70%" />
                        </Col>
                        <Col xs={6}>
                        <img src="https://pizzaonline.dominos.co.in/static/assets/app_store.png" width="70%" />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="mt-3" style={{ display: "flex", color: "rgb(92, 111, 131)", justifyContent: "center", padding: "1.4rem", borderTop: "1px dotted rgb(82, 98, 116)", background: "rgb(26, 39, 53)" }}>All rights are reserved. Copyright @ jubilant footworks Ltd</Row>
        </div>
    </>


}



// <Row style={{ padding: "3rem 3rem 1rem", display: "flex", flexDirection: "flex", color: "rgb(131, 154, 177)" }}>
// <div style={{ width: "65%" }}>

//     <div>
//         <img src="https://pizzaonline.dominos.co.in/static/assets/logo_white.svg" style={{ marginLeft: "30px" }} width="25%" />
//     </div>
//     <div style={{ display: "flex", slexDirection: "row", marginTop: "2rem" }}>
//         <ul>Disclaimer</ul>
//         <ul>Privacy Policy</ul>
//         <ul>Faq</ul>
//         <ul>Terms & Conditions</ul>
//         <ul>Feedback</ul>
//     </div>
// </div>

// <div style={{ width: "30%", fontSize: "1.25rem", marginLeft: "9.5rem" }}>
//     <div>
//         DOWNLOAD APP
//     </div>

//     <div style={{ marginTop: "1.28rem", display: "flex" }}>
//         <img style={{ width: "8.6rem", height: "2.5rem", }} src="https://pizzaonline.dominos.co.in/static/assets/play_store@2x.png" />
//         <img style={{ width: "8.6rem", height: "2.5rem", marginLeft: "2rem" }} src="https://pizzaonline.dominos.co.in/static/assets/app_store@2x.png" />
//     </div>
// </div>

// </Row>



// <Row style={{ display: "flex", color: "rgb(92, 111, 131)", justifyContent: "center", padding: "1.4rem", borderTop: "1px dotted rgb(82, 98, 116)", background: "rgb(26, 39, 53)" }}>All rights are reserved. Copyright @ jubilant footworks Ltd</Row>