import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const DashboardForm = () => {
  const [transactionDetails, setTransactionDetials] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTransactionDetials({ ...transactionDetails, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(transactionDetails);
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <h4>Add transactions</h4>

      <Row className="g-2">
        <Col md="2">
          <Form.Select
            defaultValue=""
            name="type"
            onChange={handleOnChange}
            required
          >
            <option value="">Choose...</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </Form.Select>
        </Col>
        <Col md="2">
          <Form.Control
            name="date"
            type="date"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col md="3">
          <Form.Control
            name="title"
            placeholder="transaction name"
            onChange={handleOnChange}
            required
          />
        </Col>

        <Col md="2">
          <Form.Control
            name="amount"
            type="number"
            placeholder="100"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col md="2">
          <Form.Control type="submit" className="btn btn-primary" />
        </Col>
      </Row>
    </Form>
  );
};

export default DashboardForm;
