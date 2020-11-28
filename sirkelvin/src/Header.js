import React from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Header() {
  return (
  
        <div>
                <Navbar bg="warning" expand="lg" className="fixed">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className=" justify-content-end" >

                  <Nav className="justify-content-space-around">
                  <Link className="" to="/">
                  <li className="ml-2 ">Home</li>
                  </Link>
                  <Link className="" to="/about">
                  <li className="ml-2 ">About</li>
                  </Link>
                  <Link className="" to="/service">
                  <li className="ml-2 ">Service</li>
                  </Link>
                  <Link className="" to="/gallery">
                  <li className="ml-2 ">Gallery</li>
                  </Link>
                  <Link className="" to="/login">
                  <li className="ml-2 ">Login</li>
                  </Link>
                  <Link className="" to="/signup">
                  <li className="ml-2 ">Register</li>
                  </Link>
                  </Nav>
                  {/* <Nav className="">
                    <Link className="" to="/">
                    <Nav.Link className="">Home</Nav.Link>
                    </Link>
                    <Link className="" to="/about">
                    <Nav.Link className="">About</Nav.Link>
                    </Link>
                    <Link className="" to="/service">
                    <Nav.Link className="">Service</Nav.Link>
                    </Link>
                    <Link className="" to="/gallery">
                    <Nav.Link className="">Gallery</Nav.Link>
                    </Link>
                    <Link className="" to="/login">
                    <Nav.Link className="">Login</Nav.Link>
                    </Link>
                    <Link className="" to="/signup">
                    <Nav.Link className="">Register</Nav.Link>
                    </Link>
                  </Nav> */}
                </Navbar.Collapse>
              </Navbar>
        </div>
  );
}

export default Header;