import React from "react";
import Form from "react-bootstrap/Form";

const InputField = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
};

export default InputField;
