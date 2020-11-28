import React from 'react';
import { Form, Button,FormControl,Nav, Navbar, Carousel  } from 'react-bootstrap';
// import Header from './Header';
import home from './img/house.png';
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';


function App() {
  return (
  
        <div className="container-fluid">
           <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block img-fluid w-100 rounded shadow-lg"
                    src={home}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block img-fluid w-100 rounded shadow-lg"
                    src={home}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block img-fluid w-100 rounded shadow-lg"
                    src={home}
                    alt="Third slide"
                    /> 

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section className="container">
                <div className="row mx-auto w-50">
                    <div className="col-md-4">
                        <img src={img1} alt="" className=""/>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, consectetur?</p>
                    </div>
                    <div className="col-md-4">
                        <img src={img2} alt="" className=""/>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, consectetur?</p>
                    </div>
                    <div className="col-md-4">
                        <img src={img3} alt="" className=""/>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, consectetur?</p>
                    </div>
                </div>
            </section>
        </div>
  );
}

export default App;
