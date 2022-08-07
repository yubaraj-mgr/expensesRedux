import React from "react";
import InputField from "../components/InputField";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
const Registration = () => {
  const allProps = [
    {
      type: "text",
      placeholder: "firstName",
      label: "First Name",
    },
    {
      type: "text",
      placeholder: "lastName",
      label: "Last Name",
    },
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
        {allProps.map((item, index) => {
          return <InputField key={index} {...item} />;
        })}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
