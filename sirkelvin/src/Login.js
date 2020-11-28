import React from "react";
import "./Login.css";
import { Form, Button } from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";

function Login(){
    return(
        <div className=" ">
            {/* <Header/> */}
            <section className="mt-5 mb-5">
            <Form className="bg-secondary p-5  mx-auto text-light rounded shadow-lg">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-light">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="outline-warning" type="submit">
                    Submit
                </Button>
            </Form>
            </section>
            {/* <Footer/> */}
        </div>
    );
}
export default Login;