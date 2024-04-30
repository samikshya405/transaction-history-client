import React, { useState } from "react";
import { TopNav } from "../Component/TopNav";
import { Footer } from "../Component/Footer";

import { Row, Container, Col, Form, Button } from "react-bootstrap";
import { CustomINput } from "../Component/CustomInput";

import { useNavigate } from "react-router-dom";
import { signin } from "../utilis/axioshelper";
const Login = () => {
  const inputs = [
    {
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "enter your email..",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "enter your password..",
      required: true,
    },
  ];
  const initialstate = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initialstate);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    setError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signin(form);
    response.status === "success"
      ? navigate("/dashboard")
      : setError("Invalid login credentials !");
  };
  return (
    <div>
      {/* header */}
      <TopNav />

      {/* main body */}
      <Container className="main" fluid>
        <Row>
          <Col
            md={6}
            className="bg-primary vh-md-100 p-5 d-flex align-items-center justify-content-center  "
          >
            <div className=" text-white shadow-lg rounded p-3">
              <h1>Welcome Back!</h1>
              <p>Login to your account and take control of your finance</p>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="shadow-lg p-3 rounded border w-75 mb-5">
              <h2>Login now</h2>
              <hr />
              <Form onSubmit={handleSubmit}>
                {error && <div className="text-danger">{error}</div>}
                {inputs.map((item, index) => (
                  <CustomINput key={index} {...item} onChange={handleChange} />
                ))}
                <div className="d-grid">
                  <Button type="submit">Login Now</Button>
                </div>
              </Form>
              <p className="m-2 text-center">
                Are you new? <a href="/signup">Signup now</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Login;
