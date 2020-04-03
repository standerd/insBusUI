import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function CreateClient(props) {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [idNo, setIdNo] = useState("");
  const [telNo, setTelNo] = useState("");
  const [cellNo, setCellNo] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // setValidated(true);

    fetch(
      "http://localhost:3001/client/newClient",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          telNo: telNo,
          cellNo: cellNo,
          idNo: idNo,
          street:street,
          suburb: suburb,
          city: city,
          postal: postal
        })
      }
    )
      .then(res => res.json())
      .then(result => console.log(result))
      .catch(err => console.log(err));
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
            <Form.Control
              required
              type="text"
              placeholder="John"
              onChange={e => setName(e.target.value)}
              value={name}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="LastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Doe"
              onChange={e => setSurname(e.target.value)}
              value={surname}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid last name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="idNumber">
            <Form.Label>ID Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="0000000000000"
              required
              onChange={e => setIdNo(e.target.value)}
              value={idNo}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid id number.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="me@me.co.za"
              required
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="telNo">
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="011000000"
              required
              onChange={e => setTelNo(e.target.value)}
              value={telNo}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid telephone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="cellNo">
            <Form.Label>Cell Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="0820000000"
              required
              onChange={e => setCellNo(e.target.value)}
              value={cellNo}
            />
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
              onChange={e => setStreet(e.target.value)}
              value={street}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid street name.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="suburb">
            <Form.Label>Suburb</Form.Label>
            <Form.Control
              type="text"
              placeholder="Germiston"
              required
              onChange={e => setSuburb(e.target.value)}
              value={suburb}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid suburb.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Johannesburg"
              required
              onChange={e => setCity(e.target.value)}
              value={city}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="postal">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="0000"
              required
              onChange={e => setPostal(e.target.value)}
              value={postal}
            />
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
