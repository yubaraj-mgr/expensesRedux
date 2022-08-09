import React, { useState } from "react";
import InputField from "../components/InputField";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { insertUserToServer } from "../helper/AxiosHelper";
import { toast } from "react-toastify";

const Registration = () => {
  const [user, setUser] = useState();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await insertUserToServer(user);
    toast[status](message);
  };
  const allProps = [
    {
      type: "text",
      placeholder: "firstName",
      label: "First Name",
      name: "firstName",
    },
    {
      type: "text",
      placeholder: "lastName",
      label: "Last Name",
      name: "lastName",
    },
    {
      type: "email",
      placeholder: "email",
      label: "Email",
      name: "email",
    },
    {
      type: "password",
      placeholder: "password",
      label: "Password",
      name: "password",
    },
  ];
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Form onSubmit={handleOnSubmit}>
        {allProps.map((item, index) => {
          return <InputField key={index} {...item} onChange={handleOnChange} />;
        })}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
