import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function CreatePolicy(props) {
  const [validated, setValidated] = useState(false);
  const [type, setType] = useState("");
  

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  console.log("Type " + type);

  const property = (
    <div>
      <h4>Add A Property</h4>
      <Form.Row>
        <Form.Group as={Col} md="2" controlId="propertyRisk">
          <Form.Label>Risk</Form.Label>
          <Form.Control as="select" value="Risk">
            <option>Risk</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="propertyStructure">
          <Form.Label>Structure</Form.Label>
          <Form.Control as="select" value="Risk">
            <option>Structure</option>
            <option>Brick + Tile Roof</option>
            <option>Brick + Thatch Roof</option>
            <option>Wood</option>
            <option>Thatch On Premise</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="propertyType">
          <Form.Label>Type</Form.Label>
          <Form.Control as="select" value="Type">
            <option>Type</option>
            <option>Free Standing House</option>
            <option>Town House</option>
            <option>Flat</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="propertyCover">
          <Form.Label>Property Value</Form.Label>
          <Form.Control type="text" placeholder="R " required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid amount.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="propertyPremium">
          <Form.Label>Premium</Form.Label>
          <Form.Control type="text" placeholder="R" required />
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="propertyExcess">
          <Form.Label>Excess</Form.Label>
          <Form.Control type="text" placeholder="R" required />
        </Form.Group>
      </Form.Row>
      <Button variant="secondary" type="submit">
        Add Property
      </Button>
    </div>
  );
  const vehicle = (
    <div>
      <h4>Add A Vehicle</h4>
      <Form.Row>
        <Form.Group as={Col} md="2" controlId="vehicleRisk">
          <Form.Label>Risk</Form.Label>
          <Form.Control as="select" value="Risk">
            <option>Risk</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="vehicleReg">
          <Form.Label>Reg Number</Form.Label>
          <Form.Control type="text" placeholder="XXX000GP" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid registration.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="vehicleMake">
          <Form.Label>Make</Form.Label>
          <Form.Control type="text" placeholder="Kia" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid make.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="vehicleModel">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text" placeholder="Sorento" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid model.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="vehicleYear">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" placeholder="2019" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid year.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="2" controlId="vehicleColor">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" placeholder="White" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid color.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="vehicleCover">
          <Form.Label>Vehicle Value</Form.Label>
          <Form.Control type="text" placeholder="R " required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid amount.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="specifiedPremium">
          <Form.Label>Premium</Form.Label>
          <Form.Control type="text" placeholder="R" required />
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="specifiedExcess">
          <Form.Label>Excess</Form.Label>
          <Form.Control type="text" placeholder="R" required />
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="vButton">
          <Form.Label style={{ color: "#fff" }}>toblank</Form.Label>
          <br />
          <Button variant="secondary" type="submit">
            Add Vehicle
          </Button>
        </Form.Group>
      </Form.Row>
    </div>
  );
  const specified = (
    <div>
      <h4>Add A Specified Item</h4>
      <Form.Row>
        <Form.Group as={Col} md="1" controlId="specifiedRisk">
          <Form.Label>Risk</Form.Label>
          <Form.Control as="select" value="Risk">
            <option>Risk</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="specifiedDescription">
          <Form.Label>Item Description</Form.Label>
          <Form.Control type="text" placeholder="Description" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid description.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="specifiedCover">
          <Form.Label>Item Value</Form.Label>
          <Form.Control type="text" placeholder="R " required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid amount.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="specifiedPremium">
          <Form.Label>Premium</Form.Label>
          <Form.Control type="text" placeholder="R" required />
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="specifiedExcess">
          <Form.Label>Excess</Form.Label>
          <Form.Control type="text" placeholder="R" required />
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="iButton">
          <Form.Label style={{ color: "#fff" }}>toblank</Form.Label>
          <br />
          <Button variant="secondary" type="submit">
            Add Item
          </Button>
        </Form.Group>
      </Form.Row>
    </div>
  );
  const general = (
    <div>
      <h4>Add All Risk General</h4>
      <Form.Row>
        <Form.Group as={Col} md="2" controlId="generalRisk">
          <Form.Label>Risk</Form.Label>
          <Form.Control as="select" value="Risk">
            <option>Risk</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="generalCover">
          <Form.Label>Cover Amount</Form.Label>
          <Form.Control type="text" placeholder="R " required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid amount.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="generalPremium">
          <Form.Label>Premium</Form.Label>
          <Form.Control type="text" placeholder="R" required />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="generalExcess">
          <Form.Label>Excess</Form.Label>
          <Form.Control type="text" placeholder="R" required />
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="gButton">
          <Form.Label style={{ color: "#fff" }}>toblank</Form.Label>
          <Button variant="secondary" type="submit">
            Add to Policy
          </Button>
        </Form.Group>
      </Form.Row>
    </div>
  );

  return (
    <div>
      <h1 className="bg-light border p-2">Load A New Policy</h1>
      <hr />

      <Form
        style={{ width: "80%", margin: "0 auto" }}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="clientId">
            <Form.Label>Client ID</Form.Label>
            <Form.Control required type="text" placeholder="ClientID" />
            <Form.Control.Feedback>
              Please Enter A Valid Client ID
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
            <Form.Control.Feedback>
              Please Enter a Valid Name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
            <Form.Control.Feedback>
              Please Enter A Valid Last Name
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <h5 style={{ textAlign: "left" }}>
          Please select type of product to add to policy
        </h5>
        <Form.Row>
          <Form.Group as={Col} md="2" controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option>Item Type</option>
              <option>Vehicle</option>
              <option>Property</option>
              <option>All Risk Specified</option>
              <option>All Risk General</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <br />
        <hr />
        {type === "Vehicle"
          ? vehicle
          : type === "Property"
          ? property
          : type === "All Risk Specified"
          ? specified
          : type === "All Risk General"
          ? general
          : null}
      </Form>
      <hr />
    </div>
  );
}

export default CreatePolicy;
