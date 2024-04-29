import React, { useState } from "react";
import { TopNav } from "../Component/TopNav";
import { Footer } from "../Component/Footer";

import { Row, Container, Col, Form, Button } from "react-bootstrap";
import { CustomINput } from "../Component/CustomInput";
import { adduser } from "../utilis/axioshelper";

const SignUp = () => {
  const inputs = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "enter your Name..",
      required: true,
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "enter your email..",
      required: true,
    },
    {
        label: "Phone",
        name: "phone",
        type: "text",
        placeholder: "enter your number..",
        required: true,
      },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "enter your password..",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "re-enter your password..",
      required: true,
    },
  ];

  const initialstate ={
    name:'',
    email:'',
    phone:'',
    password:'',
    confirmPassword:''
  }
  const [form, setForm] = useState(initialstate)
  const handleChange=(e)=>{
    const {name, value} = e.target
    setForm({...form, [name]:value})

  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    if(form.password!=form.confirmPassword) return alert("password didnot match")

    console.log(form)
   await adduser(form)
    setForm(initialstate)
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
            className="bg-info vh-md-100 d-flex align-items-center justify-content-center vh-100 "
          >
            <div className=" text-white shadow-lg rounded p-3">
              <h1>Join Our Community!</h1>
              <p>Use our simple system to track control of your transaction</p>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="shadow-lg p-3 rounded border w-75 mb-2">
              <h2>SignUp now</h2>
              <hr />
              <Form onSubmit={handleSubmit}>
                {inputs.map((item, index) => (
                  <CustomINput key={index} {...item} value={form[item.name]} onChange={handleChange}/>
                ))}
                <div className="d-grid">
                  <Button type="submit">Sign up</Button>
                </div>
              </Form>
              <p className="m-2 text-center">Already have an account? <a href="/">Login</a></p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default SignUp;
