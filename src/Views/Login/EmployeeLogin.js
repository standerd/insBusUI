import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function EmployeeLogin(props) {
  const [validated, setValidated] = useState(false);
  const [employeeNo, setEmployeeNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    setSubmit(true);

    axios
      .post("/user/login", {
        employeeNo: employeeNo,
        password: password
      })
      .then(res => {
        setError(false);
        setErrMessage("");
        setSubmit(false);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("employeeNo", res.data.employeeNo);
        props.history.push("/home");
      })
      .catch(err => {
        if (
          err.response.data.message ===
          "User not yet activated, redirect to ammend password"
        ) {
          localStorage.setItem("token", err.response.data.token);
          localStorage.setItem("employeeNo", err.response.data.employeeNo);
          return props.history.push("/validate");
        }
        setErrMessage(err.response.data);
        setError(true);
        setSubmit(false);
      });
  };

  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      <h1 className="bg-light p-2">Employee Login</h1>
      <hr />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="employeeNo">
          <Form.Label>Employee No</Form.Label>
          <Form.Control
            required
            minLength="6"
            type="text"
            placeholder="Enter Employee No"
            onChange={e => setEmployeeNo(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid employee number with a least 6 characters.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid password
          </Form.Control.Feedback>
        </Form.Group>
        <h6 className="text-danger mb-3">{error ? errMessage : null}</h6>

        <Button variant="secondary" type="submit">
          {submit ? "Logging In ..." : "Login"}
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(EmployeeLogin);
