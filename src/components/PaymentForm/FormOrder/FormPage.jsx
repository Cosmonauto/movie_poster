import React from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "./FormPage.css";
import Navbar from '../../Navbar/Navbar'

const FormPage = () => {
    return (
        <>
        <Navbar />
            <div className="form-section">
                <h2 style={{ textAlign: "center" }}>Payment Form</h2>
                <Container>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="name" placeholder="Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Link to="/payment">
                            <Button className="btn3"
                                variant="primary"
                                // style={{
                                //     width: "150px",
                                //     height: "40px",
                                //     borderRadius: "10",
                                //     borderStyle: "none",
                                //     backgroundImage: "linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)"
                                // }}
                                type="text"
                            >
                                Submit
                            </Button>
                        </Link>
                    </Form>
                </Container>
            </div>
        </>
    );
};
export default FormPage;