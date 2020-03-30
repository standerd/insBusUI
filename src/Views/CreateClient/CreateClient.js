import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function CreateClient(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <h1 className="bg-light p-2 border">Load A New Client</h1>
      <hr />

      <Form
        style={{ width: "80%", margin: "0 auto" }}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="John" />
            <Form.Control.Feedback type="invalid">
              Please enter a valid name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="LastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Doe" />
            <Form.Control.Feedback type="invalid">
              Please enter a valid last name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="idNumber">
            <Form.Label>ID Number</Form.Label>
            <Form.Control type="text" placeholder="0000000000000" required />
            <Form.Control.Feedback type="invalid">
              Please enter a valid id number.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="me@me.co.za" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="telNo">
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control type="text" placeholder="011000000" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid telephone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="cellNo">
            <Form.Label>Cell Number</Form.Label>
            <Form.Control type="text" placeholder="0820000000" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid cell number.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="street">
            <Form.Label>Street No and Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="49 Rosewood Street"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid street name.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="suburb">
            <Form.Label>Suburb</Form.Label>
            <Form.Control type="text" placeholder="Germiston" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid suburb.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Johannesburg" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="postal">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type="text" placeholder="0000" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid postal code.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Button variant="secondary" type="submit">
          Create Client
        </Button>
      </Form>
      <br />
      <hr />
    </div>
  );
}

export default CreateClient;
