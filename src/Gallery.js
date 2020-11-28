import React from 'react';
import './Gallery.css';
import Card from 'react-bootstrap/Card'
import fela from './img/fela.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



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