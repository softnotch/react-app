import React from 'react';
// import logo from './logo.svg';
import './Gallery.css';
import { Form, Button,FormControl,Nav, Navbar  } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';
import stella from './img/stella.jpg';
import fela from './img/fela.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Nav from './Nav';


function Gallery() {
  return (
  
        <div>
            {/* < Header /> */}
            <section className="container-fluid mt-5 mb-5">
              
                    <Row>
                        <Col xs={6} md={3} className="mb-2 text-center">
                            <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={fela} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on card.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3} className="mb-2 text-center">
                            <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={fela} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on card.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3} className="mb-2 text-center">
                            <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={fela} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on card.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3} className="mb-2 text-center">
                            <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={fela} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on card.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3} className="mb-2 text-center">
                            <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={fela} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on card.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3} className="mb-2 text-center">
                            <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={fela} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on card.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3} className="mb-2 text-center">
                            <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={fela} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on card.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3} className="mb-2 text-center">
                            <Card style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={fela} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on card.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </section> 
            {/* < Footer/>     */}
        </div>
  );
}

export default Gallery;