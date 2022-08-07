import { Button } from "react-bootstrap";
import React from "react";
import { Container, Form } from "react-bootstrap";
import InputField from "../components/InputField";

const Login = () => {
  const obj = [
    {
      type: "email",
      placeholder: "email",
      label: "Email",
    },
    {
      type: "password",
      placeholder: "password",
      label: "Password",
    },
  ];
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Form>
        {obj.map((item, index) => {
          return <InputField key={index} {...item} />;
        })}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
