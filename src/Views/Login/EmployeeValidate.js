import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function EmployeeValidate(props) {
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    let token = localStorage.getItem("token");
    let employeeNo = localStorage.getItem("employeeNo")
    const form = event.currentTarget;
    console.log(event.currentTarget);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    setSubmit(true);

    if (password !== password2) {
      setError(true);
      setErrMessage("Passwords do Not Match");
      setSubmit(false);
    } else {
      axios
        .post("/user/validate", 
        {
          password: password,
          employeeNo: employeeNo
        },
        {headers: {"Authorization" : token}}
        )
        .then(res => {
          setError(false);
          setErrMessage("");
          setSubmit(false);
          props.history.push("/login");
        })
        .catch(err => {
          setErrMessage(err.response.data);
          setError(true);
          setSubmit(false);
        });
    }
  };

  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <h1 className="bg-light p-2">Employee Validation</h1>
      <h6 className="bg-light p-2">
        Before continuing to login for the first time please set your account
        password
      </h6>
      <hr />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            minLength="6"
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid password with a least 6 characters.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Confirm Password"
            onChange={e => setPassword2(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid password with a least 6 characters.
          </Form.Control.Feedback>
        </Form.Group>
        <h6 className="text-danger mb-3">{error ? errMessage : null}</h6>

        <Button variant="secondary" type="submit">
          {submit ? "Processing ..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(EmployeeValidate);
